document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const powerPoint = document.getElementById('power-point');

    passwordInput.addEventListener('input', function () {
        const strength = calculateStrength(passwordInput.value);
        updatePowerPoint(strength);
    });

    function calculateStrength(password) {
        let strength = 0;
        if (password.length > 5) strength += 20;
        if (password.length > 10) strength += 20;
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[0-9]/.test(password)) strength += 20;
        if (/[^A-Za-z0-9]/.test(password)) strength += 20;
        return strength;
    }

    function updatePowerPoint(strength) {
        powerPoint.style.width = strength + '%';
        if (strength <= 40) {
            powerPoint.style.backgroundColor = '#D73F40'; // Red
        } else if (strength <= 80) {
            powerPoint.style.backgroundColor = '#F5A623'; // Orange
        } else {
            powerPoint.style.backgroundColor = '#3ba62f'; // Green
        }
    }
});
