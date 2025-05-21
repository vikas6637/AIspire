document.getElementById("career-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const interest = document.getElementById("interest").value;
  const current = document.getElementById("current").value;
  const enjoying = document.getElementById("enjoying").value;

  const payload = {
    interest,
    current,
    enjoying,
  };

  // Show loading message
  document.getElementById("response").innerText = "Thinking...";

  try {
    const res = await fetch("http://127.0.0.1:8000/career-guidance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    document.getElementById("response").innerText = data.answer;
  } catch (err) {
    document.getElementById("response").innerText = "Error fetching response. Please try again.";
    console.error(err);
  }
});
