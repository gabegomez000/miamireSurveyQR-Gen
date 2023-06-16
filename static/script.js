function generateQRCode() {
    var urlInput = document.getElementById('url');
    var url = 'https://gabrielmiamire.pythonanywhere.com?regid=' + urlInput.value; // Replace 'example.com' with your desired URL
    var qrcodeContainer = document.getElementById('qrcode');

    // Generate QR code using the QRCode library
    var qrcode = new QRCode(qrcodeContainer, {
        text: url,
        width: 200, // Adjust the size of the QR code as needed
        height: 200
    });
}