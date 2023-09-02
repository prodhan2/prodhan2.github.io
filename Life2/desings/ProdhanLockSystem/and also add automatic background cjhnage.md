<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Windows-Style Lock Screen</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('background1.jpg'); /* Initial background image */
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            transition: background-image 2s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .lock-screen {
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            padding: 20px;
            text-align: center;
        }

        .lock-input {
            padding: 10px;
            font-size: 18px;
        }

        .unlock-button {
            padding: 10px 20px;
            background-color: #0082fc;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            padding: 20px;
            text-align: center;
            display: none;
        }

        .hint {
            font-size: 14px;
            color: #888;
        }
    </style>
</head>
<body>
<div class="lock-screen">
    <h2>Windows Lock Screen</h2>
    <p>Enter your password to unlock:</p>
    <input type="password" class="lock-input" id="passwordInput">
    <br>
    <p class="hint">Hint: Use the format CSE-##########</p>
    <br>
    <button class="unlock-button" onclick="checkPassword()">Unlock</button>
</div>

<div class="popup" id="incorrectPopup">
    <p>This is wrong. Please try again.</p>
    <button onclick="closePopup('incorrectPopup')">OK</button>
</div>

<div class="popup" id="correctPopup">
    <p>Yes, you are granted permission!</p>
</div>

<script>
    const backgroundImages = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg'
        // Add more image URLs as needed
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        const imageUrl = backgroundImages[currentImageIndex];
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    }

    setInterval(changeBackgroundImage, 5000); // Change the background every 5 seconds

    function checkPassword() {
        const enteredPassword = document.getElementById("passwordInput").value;
        const correctPassword = "CSE-##########"; // Change this to your desired password format

        if (enteredPassword === correctPassword) {
            // Display the permission granted popup.
            document.getElementById("correctPopup").style.display = "block";
            setTimeout(() => {
                // After 3 seconds, open a new page.
                window.location.href = "newpage.html"; // Replace with the desired page URL
            }, 3000);
        } else {
            // Display the incorrect password popup.
            document.getElementById("incorrectPopup").style.display = "block";
        }
    }

    function closePopup(popupId) {
        // Close the specified popup.
        document.getElementById(popupId).style.display = "none";
    }
</script>
</body>
</html>
