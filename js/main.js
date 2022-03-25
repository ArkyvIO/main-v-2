$(function () {
    $('.content').hide();

    $('#about-link').click(function () {
        $('.content').hide();
        $('#about').show();
    })

    $('#links-link').click(function () {
        $('.content').hide();
        $('#links').show();
    })

    $('#coffee-link').click(function () {
        $('.content').hide();
        $('#coffee').show();
    })
})