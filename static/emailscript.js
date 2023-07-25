const smtp = require("smtp");
const tls = require("tls");
const fs = require("fs");
function promptEmail() {
  const response = confirm("Send survey form email to all registrants of this class?");
  if (response) {
    sendEmail()
  } else {
    // The user clicked no.
  }
}

// Define the sendEmail function.
function sendEmail() {
  // Need to add logic for actually sending email
  alert("Email sent successfully!")
}

// Call the promptAndSendEmail function.
promptEmail();
