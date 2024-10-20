// You can add interactivity here if needed, like loading posts dynamically or handling forms.
console.log("JavaScript is working!");

// Show the popup on page load
window.onload = function() {
    document.getElementById('construction-popup').style.display = 'flex';
};

// Close the popup when the button is clicked
document.getElementById('close-popup').onclick = function() {
    document.getElementById('construction-popup').style.display = 'none';
};
