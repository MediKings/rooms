$(document).ready(()=>{

    $('#menu-bars').click(()=>{
        $('#menu .nav').toggleClass('show hide')
    })


    $('.sliders').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 150,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
           {
              breakpoint: 768,
              settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
              }
           },
        ]
     })

})
