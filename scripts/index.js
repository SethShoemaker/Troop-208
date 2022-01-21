document.body.addEventListener('scroll', function(){
    const scrolled = document.body.scrollTop;
    const height = document.body.clientHeight;
    const cutoff = height / 3.5;

    if(scrolled > cutoff){
        $('.header').css("background-color", "#172b1d");
    }
    else{
        $('.header').css("background-color", "rgba(0, 0, 0, 0)");

    }
})