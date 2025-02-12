 // --------1 ---------
const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("Login successful!");
    } else {
      const error = await response.json();
      console.error("Login failed:", error.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

// Example usage
login("user@example.com", "password123");

 // --------2 ---------

 const fetchProtectedData = async () => {
  try {
    const response = await fetch("http://localhost:3000/protected", {
      credentials: "include", // Include cookies in the request
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Protected data:", data);
    } else {
      console.error("Unauthorized access");
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

// Example usage
fetchProtectedData();
