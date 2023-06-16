var qrcodeContainer = document.getElementById('qrcode');

function generateQRCode() {
    var urlInput = document.getElementById('ID');
    var url = 'https://gabrielmiamire.pythonanywhere.com?regid=' + urlInput.value;

    // Remove the existing QR code element
    while (qrcodeContainer.firstChild) {
        qrcodeContainer.removeChild(qrcodeContainer.firstChild);
    }

    // Generate QR code using qrcode.js
    var qrcode = new QRCode(qrcodeContainer, {
        text: url,
        width: 200,
        height: 200
    });

    // Center the QR code on the screen
    qrcodeContainer.style.display = 'flex';
    qrcodeContainer.style.justifyContent = 'center';
    qrcodeContainer.style.alignItems = 'center';
}
