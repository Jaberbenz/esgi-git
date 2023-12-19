$(e => {

    $('.cv-part').hide();

    $('.button-profile').on('click', e => {
        $('.cv-part').hide();
        $('.cv-part.profile').show();
    });

    $('.button-school').on('click', e => {
        $('.cv-part').hide();
        $('.cv-part.school').show();
    });

    $('.button-pro').on('click', e => {
        $('.cv-part').hide();
        $('.cv-part.pro').show();
    });

    $('.button-language').on('click', e => {
        $('.cv-part').hide();
        $('.cv-part.language').show();
    });

    $('.button-dev').on('click', e => {
        $('.cv-part').hide();
        $('.cv-part.dev').show();
    });

});