$( document ).ready(function() {
    $(document).on("click",".album",function() {
        if($('.pageOverlay').css('display') == 'none'){
            $('.pageOverlay').toggle();
            var galleryBottom = $('.galleryImagesBottom');
            galleryBottom.addClass('bottomActive');
            var caption = $(this).find('.albumCover').find('h2').html();
            galleryBottom.find('.imageCaption').html(caption);
            $('.imagePrevious').hide();
            $('.imageNext').show();
            $('.galleryImages').toggle();
            $(this).find('.galleryImages').find('img').first().addClass('active').removeClass('inactive');
        }
    })


    $(document).on("click",".pageOverlay",function() {
            $(this).toggle();
            $('.galleryImagesBottom').toggleClass('bottomActive');
            $('.galleryImages').toggle();
            $('.active').toggleClass('active').toggleClass('inactive');
    })


    $(document).on("click",".imageNext",function() {
        var active = $('.active');
        $('.imagePrevious').show();
        if(active.next('img').hasClass('imageLast')){
            $('.imageNext').hide();
        }
        else{
            $('.imageNext').show();
        }
        active.next('img').toggleClass('active').toggleClass('inactive');
        active.toggleClass('inactive').toggleClass('active');
    })


    $(document).on("click",".imagePrevious",function() {
        var active = $('.active');
        $('.imageNext').show();
        if(active.prev('img').hasClass('imageFirst')){
            $('.imagePrevious').hide();
        }
        else{
            $('.imagePrevious').show();
        }
        active.prev('img').toggleClass('active').toggleClass('inactive');
        active.toggleClass('inactive').toggleClass('active');
    })
})