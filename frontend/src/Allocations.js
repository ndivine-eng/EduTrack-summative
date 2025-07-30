import React, { useEffect, useState } from "react";

const Allocations = () => {
  const [allocations, setAllocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/allocations")
      .then((res) => res.json())
      .then((data) => {
        setAllocations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching allocations:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading Allocations...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Allocations</h1>
      {allocations.length === 0 ? (
        <p>No allocations found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Module</th>
              <th>Class</th>
              <th>Facilitator</th>
              <th>Trimester</th>
              <th>Mode</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((alloc) => (
              <tr key={alloc.id}>
                <td>{alloc.id}</td>
                <td>{alloc.moduleId}</td>
                <td>{alloc.classId}</td>
                <td>{alloc.facilitatorId}</td>
                <td>{alloc.trimester}</td>
                <td>{alloc.modeId}</td>
                <td>{alloc.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Allocations;
