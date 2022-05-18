window.onload = () =>{

    $(function () {

        $('.owl-carousel').owlCarousel({
            
            loop: true,
            nav: true,
            navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
            autoplay:true,
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                   items: 1, 
                   margin: 10,
                   dotsEach: 2
                }, 
                768:{
                    items:3,
                    margin: 10
                   
                },
                1500: {
                    items: 5,
                    margin: 1
                }  
            }
        });
    })
}


