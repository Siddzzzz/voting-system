// staff-login.js

function login() {
  var id = document.getElementById("id").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");

  if (id === "yashdubey" && password === "advit6969") {
    window.location.href = "staff-dashboard.html";
  } else {
    error.textContent = "Wrong ID or password!";
  }
}

function cancel() {
  window.location.href = "index.html";
}


// Voter Login
const voterLoginForm = document.getElementById('voterLoginForm');
if (voterLoginForm) {
  voterLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

// voter-signup.js

const voterSignupForm = document.getElementById('voterSignupForm');

voterSignupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const otp = document.getElementById('otp').value;
  const terms = document.getElementById('terms').checked;

  // Validate user input
  if (!name || !username || !email || !password || !otp || !terms) {
    errorElement.textContent = 'Please fill in all fields';
    return;
  }

  // Perform OTP verification
  const isValidOtp = verifyOTP(email, otp); // Replace with your OTP verification logic

  if (!isValidOtp) {
    errorElement.textContent = 'Invalid OTP';
    return;
  }

  // Store user data to local storage or API
  saveUserData(username, password, email); // Replace with your data storage logic

  // Redirect to a success page or perform any other necessary action
  window.location.href = 'signup-success.html'; // Replace with your desired success page
});

function verifyOTP(email, otp) {
  // Implement your OTP verification logic here
  // Return true if the OTP is valid, false otherwise
  // You can send an AJAX request to a server-side endpoint or use any other verification mechanism
  // For the purpose of this example, the function always returns true
  return true;
}

function saveUserData(username, password, email) {
  // Implement your logic to store the user's data to local storage or
}


// Function to toggle between tabs
function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Function to toggle the dropdown
function toggleDropdown() {
  document.getElementById("statesDropdown").classList.toggle("show");
}

// Function to handle the OK button click event
function handleOK() {
  var selectedStates = [];
  var dropdown = document.getElementById("statesSelect");
  for (var i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].selected) {
      selectedStates.push(dropdown.options[i].value);
    }
  }

  var selectedStatesDisplay = document.getElementById("selectedStatesList");
  selectedStatesDisplay.textContent = selectedStates.join(", ");

  toggleDropdown(); // Hide the dropdown after clicking OK
}

// Set up event listener for OK button click
var okButton = document.getElementById("okButton");
okButton.addEventListener("click", handleOK);

// Set up event listener for tab click
var tablinks = document.getElementsByClassName("tablink");
for (var i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function() {
    openTab(this.id);
  });
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropdown-btn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
