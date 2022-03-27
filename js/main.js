// DOM Event Listener for later
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded.');
});
    
// Page Loading Code for Layout //
// Hide all content on load
var contentBoxes = document.querySelectorAll('.content');
// Assign all content classes to an array, set display to none
contentBoxes.forEach(content => content.style.display = 'none');

// Add close buttons to each content box
var exitButtons = [];
for (var i = 0; i < contentBoxes.length; i++) {
    exitButtons[i] = document.createElement('a');
    exitButtons[i].innerHTML = 'Close';
    exitButtons[i].href = '#';
    exitButtons[i].addEventListener('click', function() {
        hideAllContent();
        removeSelected();
    }, false);
    contentBoxes[i].appendChild(exitButtons[i]);
}

// Assign button variables
var aboutLink = document.querySelector('#about-link');
var linksLink = document.querySelector('#links-link');
var coffeeLink = document.querySelector('#coffee-link');

// Assign content id variables
var aboutContent = document.querySelector('#about');
var linksContent = document.querySelector('#links');
var coffeeContent = document.querySelector('#coffee');

// About Link Clicked = Hide all, Show About
aboutLink.addEventListener('click', function() {
    hideAllContent();
    aboutContent.style.display = '';
    removeSelected();
    aboutLink.classList.add('listSelected');
}, false);

// Links Link Clicked = Hide all, Show Links
linksLink.addEventListener('click', function() {
    hideAllContent();
    linksContent.style.display = '';
    removeSelected();
    linksLink.classList.add('listSelected');
}, false);

// Coffee Link Clicked = Hide all, Show Coffee
coffeeLink.addEventListener('click', function() {
    hideAllContent();
    coffeeContent.style.display = '';
    removeSelected();
    coffeeLink.classList.add('listSelected');
}, false);

// Hide all content boxes function
function hideAllContent() {
    contentBoxes.forEach(content => content.style.display = 'none');
}

// Remove button selection when needed for nav list
function removeSelected() {
    aboutLink.classList.remove('listSelected');
    linksLink.classList.remove('listSelected');
    coffeeLink.classList.remove('listSelected');
}