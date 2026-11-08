// Font size buttons and "expand" button in the toolbox.
// Plain JavaScript: the page no longer needs to download jQuery from Google.
(function () {

    function setContentFontSize(fontSize) {
        document.querySelectorAll('.content').forEach(function (el) {
            el.style.fontSize = fontSize + '%';
        });
    }

    // Change Font
    function changeFont(fontSize) {
        currentFontSize = fontSize;
        setContentFontSize(fontSize);
        try { sessionStorage.setItem('fSize', fontSize); } catch (e) { }
    }
    var currentFontSize = 100;

    function onClick(selector, handler) {
        document.querySelectorAll(selector).forEach(function (el) {
            el.addEventListener('click', handler);
        });
    }

    onClick('.js-font-decrease', function () {
        if (currentFontSize === 100) {
            return;
        }
        changeFont(currentFontSize - 25);
    });

    onClick('.js-font-normal', function () {
        changeFont(100);
    });

    onClick('.js-font-increase', function () {
        changeFont(currentFontSize + 25);
    });

    var saved = null;
    try { saved = sessionStorage.getItem('fSize'); } catch (e) { }
    if (saved !== null && !isNaN(parseInt(saved, 10))) {
        currentFontSize = parseInt(saved, 10);
        setContentFontSize(currentFontSize);
    }

    // Expand Sidebar
    onClick('.toolbox .expand', function (event) {
        event.preventDefault();
        var content = document.getElementById('content');
        if (content) {
            content.classList.toggle('expanded');
        }
    });

})();
