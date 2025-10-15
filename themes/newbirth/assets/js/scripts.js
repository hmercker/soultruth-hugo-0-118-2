

(function ($) {

    // Change Font
    function changeFont(fontSize) {
        console.log(fontSize)
        currentFontSize = fontSize;
        $('.content').css('font-size', fontSize + '%');
        sessionStorage.setItem('fSize', fontSize);
    }
    var currentFontSize = parseInt(100);

    $('.js-font-decrease').on('click', function () {
        if (currentFontSize === 100) {
            return false;
        }
        changeFont(currentFontSize - 25)
    });

    $('.js-font-normal').on('click', function () {
        changeFont(100)
    });

    $('.js-font-increase').on('click', function () {
        changeFont(currentFontSize + 25)
    });

    if (sessionStorage.length !== 0) {
        $('.content').css('font-size', sessionStorage.getItem('fSize') + '%');
        currentFontSize = parseInt(sessionStorage.getItem('fSize'));
    }

    // Expand Sidebar
    $('.toolbox .expand').click(function () {
        $('#content').toggleClass('expanded');
        return false;
    });

})(jQuery);