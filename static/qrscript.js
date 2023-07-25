function generateQRCode(){
    var urlInput = document.getElementById('ID');
    var url = 'https://miamire-survey-form.onrender.com/?regid=' + urlInput.value;

    // Remove the existing QR code element
    while (qrcodeContainer.firstChild) {
        qrcodeContainer.removeChild(qrcodeContainer.firstChild);
    }

    // Generate QR code using qrcode.js
    var qrcode = new QRCode(qrcodeContainer, {
        text: url,
        height: 200,
        width: 200
    });

    // Center the QR code on the screen
    qrcodeContainer.style.display = 'flex';
    qrcodeContainer.style.justifyContent = 'center';
    qrcodeContainer.style.alignItems = 'center';

    // Define the openURL function to open the correct URL
    function openURL() {
        window.open(url);
    }

    // Make the QR code clickable
    qrcodeContainer.removeEventListener('click', openURL); // Remove previous event listener
    qrcodeContainer.addEventListener('click', openURL); // Add new event listener
}

var qrcodeContainer = document.getElementById('qrcode');
