// DOM Event Listener for later
window.addEventListener('DOMContentLoaded', function () {
    if (document.location.hash == "" || document.location.hash == "#") {
        document.location.hash = "#about";
    }
});