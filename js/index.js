document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const userId = document.getElementById("userId").value;
    const userPosition = document.getElementById("userPosition").value;
    const password = document.getElementById("password").value;

    // Simulate authentication (replace this with actual authentication logic)
    if (
      userId === "admin" &&
      userPosition === "manager" &&
      password === "password"
    ) {
      alert(`Bienvenido, ${userPosition} ${userId}!`);
      // Redirect to main page or perform other actions upon successful login
      window.location.href = "main.html"; // Redirect to main page
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  });
