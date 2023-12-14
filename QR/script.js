// script.js
function takeScreenshot() {
    // Use html2canvas to capture the content of the entire body
    html2canvas(document.body).then(function (canvas) {
        // Convert the canvas to a data URL
        var screenshotData = canvas.toDataURL();

        // Create a link element
        var downloadLink = document.createElement('a');

        // Set the href attribute to the data URL
        downloadLink.href = screenshotData;

        // Set the download attribute with the desired filename
        downloadLink.download = 'SujanProdhan_rajshahi_University.png';

        // Append the link to the body and programmatically click it
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Remove the link from the document
        document.body.removeChild(downloadLink);
    });
}
