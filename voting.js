//staff-login
const staffLoginForm = document.getElementById('staffLoginForm');
const errorElement = document.getElementById('error');

staffLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.getElementById('id').value;
  const password = document.getElementById('password').value;

  if (id === 'yashdubey' && password === 'advit6969') {
    window.location.href = 'staff-dashboard.html'; // Redirect to staff-dashboard.html
  } else {
    errorElement.textContent = 'WRONG PASSWORD!';
  }
});


// Voter Login
const voterLoginForm = document.getElementById('voterLoginForm');
if (voterLoginForm) {
  voterLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

// staff-dashboard.js

function openTab(event, tabName) {
  // Get all tab content elements
  const tabContent = document.getElementsByClassName('tabcontent');

  // Hide all tab content elements
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  // Get all tablinks elements
  const tablinks = document.getElementsByClassName('tablinks');

  // Remove the 'active' class from all tablinks
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }

  // Show the selected tab content and add 'active' class to the clicked tablink
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');
}

function toggleVoting() {
  const votingToggle = document.getElementById('votingToggle');
  const votingStatus = document.getElementById('votingStatus');

  if (votingToggle.checked) {
    votingStatus.textContent = 'Voting is ON';
  } else {
    votingStatus.textContent = 'Voting is OFF';
  }
}

function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdownContent');
  dropdownContent.classList.toggle('show');
}

function showSelectedStates() {
  const stateSelect = document.getElementById('stateSelect');
  const selectedStates = document.getElementById('selectedStates');

  // Clear the previously selected states
  selectedStates.innerHTML = '';

  // Get the selected states
  const selectedOptions = Array.from(stateSelect.selectedOptions);

  // Display the selected states
  selectedOptions.forEach((option) => {
    const state = option.value;
    const stateElement = document.createElement('p');
    stateElement.textContent = state;
    selectedStates.appendChild(stateElement);
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