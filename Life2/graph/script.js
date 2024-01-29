document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay to hide the loader and show the content
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 5000); // 5 seconds delay
  });
  