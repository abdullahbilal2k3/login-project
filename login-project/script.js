// Password ki requirements check karne ka function
function checkPassword() {

  // Input field se password ki value lena
  let password = document.getElementById("password").value;

  // Har rule ko check karna aur result green ya red karna

  // Kam se kam 8 characters hone chahiye
  if (password.length >= 8) {
    document.getElementById("req-length").classList.add("valid");
  } else {
    document.getElementById("req-length").classList.remove("valid");
  }

  // Kam se kam ek bara harf (A-Z) hona chahiye
  if (/[A-Z]/.test(password)) {
    document.getElementById("req-upper").classList.add("valid");
  } else {
    document.getElementById("req-upper").classList.remove("valid");
  }

  // Kam se kam ek chota harf (a-z) hona chahiye
  if (/[a-z]/.test(password)) {
    document.getElementById("req-lower").classList.add("valid");
  } else {
    document.getElementById("req-lower").classList.remove("valid");
  }

  // Kam se kam ek number hona chahiye
  if (/[0-9]/.test(password)) {
    document.getElementById("req-number").classList.add("valid");
  } else {
    document.getElementById("req-number").classList.remove("valid");
  }

  // Kam se kam ek special character hona chahiye
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    document.getElementById("req-special").classList.add("valid");
  } else {
    document.getElementById("req-special").classList.remove("valid");
  }
}

// Form submit karne ka function
function submitForm() {

  // Sab fields ki values lena
  let username = document.getElementById("username").value;
  let email    = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Check karna ke koi field khali to nahi
  if (username === "" || email === "" || password === "") {
    alert("Sab fields bharein!");
    return;
  }

  // Password ki sab requirements check karna
  let lengthOk  = password.length >= 8;
  let upperOk   = /[A-Z]/.test(password);
  let lowerOk   = /[a-z]/.test(password);
  let numberOk  = /[0-9]/.test(password);
  let specialOk = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Agar koi requirement poori nahi hai to rok dena
  if (!lengthOk || !upperOk || !lowerOk || !numberOk || !specialOk) {
    alert("Password tamam requirements poori nahi karta!");
    return;
  }

  // Agar sab theek hai to success message
  alert("Form successfully submit ho gaya!");
}