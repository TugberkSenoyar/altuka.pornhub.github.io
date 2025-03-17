document.addEventListener("DOMContentLoaded", function () {
    function verifyAge(isAdult) {
        if (isAdult) {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        } else {
            window.location.href = "https://www.youtube.com/watch?v=hxOApe1P9dM";
        }
    }
    
    window.verifyAge = verifyAge;
});
