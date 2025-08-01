// middleware/auth.js

const jwt = require('jsonwebtoken');

// ✅ Authentication middleware
exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.user = decoded; // decoded contains user info (id, role, etc.)
    next();
  });
};

// ✅ Facilitator-only access
exports.facilitator = (req, res, next) => {
  if (req.user && req.user.role === 'facilitator') return next();
  return res.status(403).json({ error: 'Access denied. Facilitator only.' });
};

// ✅ Manager-only access
exports.manager = (req, res, next) => {
  if (req.user && req.user.role === 'manager') return next();
  return res.status(403).json({ error: 'Access denied. Manager only.' });
};

// ✅ Manager OR Facilitator access
exports.managerOrFacilitator = (req, res, next) => {
  if (req.user && (req.user.role === 'manager' || req.user.role === 'facilitator')) {
    return next();
  }
  return res.status(403).json({ error: 'Access denied. Manager or Facilitator only.' });
};


// ✅ Optional: allow either manager or the correct facilitator (for updates)
exports.facilitatorOrOwner = (getOwnerIdFn) => {
  return async (req, res, next) => {
    const user = req.user;

    if (user.role === 'manager') return next();

    if (user.role === 'facilitator') {
      const ownerId = await getOwnerIdFn(req); // e.g., fetch from DB
      if (ownerId === user.id) return next();
    }

    return res.status(403).json({ error: 'Access denied.' });
  };
};
