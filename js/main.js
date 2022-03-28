// DOM Event Listener for later
window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Loaded.');

    // Assign button variables
    var aboutLink = document.querySelector('#about-link');
    var linksLink = document.querySelector('#links-link');
    var coffeeLink = document.querySelector('#coffee-link');

    // Assign content id variables
    var aboutContent = document.querySelector('#about');
    var linksContent = document.querySelector('#links');
    var coffeeContent = document.querySelector('#coffee');

    // Assign contentBoxes array for content boxes
    var contentBoxes = document.querySelectorAll('.content');

    // Assign stuffs
    var aboutStuff = document.querySelectorAll('.aboutStuff');
    var linksStuff = document.querySelectorAll('.linksStuff');
    var coffeeStuff = document.querySelectorAll('.coffeeStuff');

    // Assign closing buttons
    var aboutClose = document.querySelector('#aboutClose');
    var linksClose = document.querySelector('#linksClose');
    var coffeeClose = document.querySelector('#coffeeClose');

    // Set activeBox to none
    var activeBox = 'none';

    // Set all content boxes to display none and hidden
    contentBoxes.forEach(content => addBoth(content, true));
    aboutStuff.forEach(content => addBoth(content, false));
    linksStuff.forEach(content => addBoth(content, false));
    coffeeStuff.forEach(content => addBoth(content, false));

    // Event CLICK About
    aboutLink.addEventListener('click', function() {
        if (activeBox == 'none') {
            showAbout();
        } else {
            hideCurrent(activeBox);
            setTimeout(() => {
                showAbout();
            }, 3000);
        }
    });

    // Event CLICK About - Close
    aboutClose.addEventListener('click', hideAbout);

    // Event CLICK Links
    linksLink.addEventListener('click', function() {
        if (activeBox == 'none') {
            showLinks();
        } else {
            hideCurrent(activeBox);
            setTimeout(() => {
                showLinks();
            }, 3000);
        }
    });

    // Event CLICK Links - Close
    linksClose.addEventListener('click', hideLinks);

    // Event CLICK Coffee
    coffeeLink.addEventListener('click', function() {
        if (activeBox == 'none') {
            showCoffee();
        } else {
            hideCurrent(activeBox);
            setTimeout(() => {
                showCoffee();
            }, 3000);
        }
    });

    // Event CLICK About - Close
    coffeeClose.addEventListener('click', hideCoffee);

    // Functions

    // Show About
    function showAbout() {
        // Assign activebox
        activeBox = 'about';
        // Remove Display None for Content Container
        removeHidden(aboutContent);
        // Start Transition - Timeout makes it work?
        setTimeout(() => {
            removeVisuallyHidden(aboutContent, true);
        }, 1);
        // Remove Display None for Content
        aboutStuff.forEach(content => removeHidden(content));
        // Start Transition
        aboutContent.addEventListener('transitionend', function (e) {
            aboutStuff.forEach(content => removeVisuallyHidden(content, false))
        }, {
            capture: false,
            once: true,
            passive: false
        })
    }

    // Show Links
    function showLinks() {
        // Assign activeBox
        activeBox = 'links';
        // Remove Display None for Content Container
        removeHidden(linksContent);
        // Start Transition - Timeout makes it work?
        setTimeout(() => {
            removeVisuallyHidden(linksContent, true);
        }, 1);
        // Remove Display None for Content
        linksStuff.forEach(content => removeHidden(content));
        // Start Transition
        linksContent.addEventListener('transitionend', function (e) {
            linksStuff.forEach(content => removeVisuallyHidden(content, false))
        }, {
            capture: false,
            once: true,
            passive: false
        })
    }

    // Show Coffee
    function showCoffee() {
        // Assign activeBox
        activeBox = 'coffee';
        // Remove Display None for Content Container
        removeHidden(coffeeContent);
        // Start Transition - Timeout makes it work?
        setTimeout(() => {
            removeVisuallyHidden(coffeeContent, true);
        }, 1);
        // Remove Display None for Content
        coffeeStuff.forEach(content => removeHidden(content));
        // Start Transition
        coffeeContent.addEventListener('transitionend', function (e) {
            coffeeStuff.forEach(content => removeVisuallyHidden(content, false))
        }, {
            capture: false,
            once: true,
            passive: false
        })
    }

    // Hide About
    function hideAbout() {
        // Start Transition
        aboutStuff.forEach(content => addVisuallyHidden(content, false));
        // Add Display None for Content
        setTimeout(() => {
            aboutStuff.forEach(content => addHidden(content))
        }, 1000);
        // Start Transition
        setTimeout(() => {
            addVisuallyHidden(aboutContent, true);
        }, 1500);
        // Add Display None for Content
        aboutContent.addEventListener('transitionend', function (e) {
            addHidden(aboutContent);
        }, {
            capture: false,
            once: true,
            passive: false
        })
    }

    // Hide Links
    function hideLinks() {
        // Start Transition
        linksStuff.forEach(content => addVisuallyHidden(content, false));
        // Add Display None for Content
        setTimeout(() => {
            linksStuff.forEach(content => addHidden(content))
        }, 1000);
        // Start Transition
        setTimeout(() => {
            addVisuallyHidden(linksContent, true);
        }, 1500);
        // Add Display None for Content
        linksContent.addEventListener('transitionend', function (e) {
            addHidden(linksContent);
        }, {
            capture: false,
            once: true,
            passive: false
        })
    }

    // Hide Coffee
    function hideCoffee() {
        // Start Transition
        coffeeStuff.forEach(content => addVisuallyHidden(content, false));
        // Add Display None for Content
        setTimeout(() => {
            coffeeStuff.forEach(content => addHidden(content))
        }, 1000);
        // Start Transition
        setTimeout(() => {
            addVisuallyHidden(coffeeContent, true);
        }, 1500);
        // Add Display None for Content
        aboutContent.addEventListener('transitionend', function (e) {
            addHidden(coffeeContent);
        }, {
            capture: false,
            once: true,
            passive: false
        })
    }

    // Hide Current Content Box
    function hideCurrent(active) {
        if (active == 'about') {
            hideAbout();
        } else if (active == 'links') {
            hideLinks();
        } else if (active == 'coffee') {
            hideCoffee();
        }
    }

    // Add Hidden Only
    function addHidden(element) {
        element.classList.add('hidden');
    }

    // Add Visually Hidden / Box if Content Box
    function addVisuallyHidden(element, isContentBox) {
        if (isContentBox) {
            element.classList.add('visuallyHiddenBox');
        } else {
            element.classList.add('visuallyHidden');
        }
    }

    // Add Both / Box if Content Box
    function addBoth(element, isContentBox) {
        if (isContentBox) {
            element.classList.add('visuallyHiddenBox');
        } else {
            element.classList.add('visuallyHidden');
        }

        element.classList.add('hidden');
    }

    // Remove Hidden Only
    function removeHidden(element) {
        element.classList.remove('hidden');
    }

    // Remove Visually Hidden / Box if Content Box
    function removeVisuallyHidden(element, isContentBox) {
        if (isContentBox) {
            element.classList.remove('visuallyHiddenBox');
        } else {
            element.classList.remove('visuallyHidden');
        }
    }

    // Remove Both / Box if Content Box
    function removeBoth(element, isContentBox) {
        if (isContentBox) {
            element.classList.remove('visuallyHiddenBox');
        } else {
            element.classList.remove('visuallyHidden');
        }

        element.classList.remove('hidden');
    }
});