function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    const charset = (uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
                    (lowercase ? "abcdefghijklmnopqrstuvwxyz" : "") +
                    (numbers ? "0123456789" : "") +
                    (special ? "!@#$%^&*()_+[]{}|;:,.<>?~" : "");

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}