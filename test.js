const db = require('./models');

async function testRelations() {
  await db.sequelize.sync({ force: true }); // ⚠️ WARNING: This drops and recreates all tables!

  const facilitator = await db.Facilitator.create({
    id: 'fac1',
    name: 'Facilitator One',
    email: 'fac1@example.com',
    qualification: 'MSc Computer Science',
    location: 'Nairobi'
  });

  const module = await db.Module.create({
    name: 'Software Engineering',
    half: 'First'
  });

  await facilitator.addModule(module);

  const results = await db.Facilitator.findOne({
    where: { id: 'fac1' },
    include: db.Module
  });

  console.log('✅ Modules assigned to this facilitator:');
  results.Modules.forEach(mod => {
    console.log(`- ${mod.name}`);
  });
}

testRelations();
