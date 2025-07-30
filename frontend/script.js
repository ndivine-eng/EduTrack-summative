document.getElementById("moduleForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const half = document.getElementById("half").value;
  const level = document.getElementById("level").value;

  try {
    const res = await fetch("http://localhost:3000/api/modules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, half, level })
    });

    const data = await res.json();
    document.getElementById("response").innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("response").innerText = "Error: " + err.message;
  }
});
