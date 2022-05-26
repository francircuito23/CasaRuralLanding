window.onload = () =>{

    document.body.style.setProperty("opacity","1");
    document.getElementById("faceButton").addEventListener("click", function(){
        window.open("https://www.facebook.com/pg/casaruralairefp/posts/","_blank");
    })
    document.getElementById("instaButton").addEventListener("click", function(){
        window.open("https://www.instagram.com/casaruralairefp/?hl=es","_blank");
    })
    
    

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

    // estilos para las flechas del carrusel clientes

    var flechas = document.getElementsByTagName('i')

    for (let i = 0; i < flechas.length; i++) {

        if (i != 0 && i != 1) {
            flechas[i].style.color = "rgb(112, 96, 96)";
        }

    }

    var moverFlechas = document.getElementsByClassName('owl-next')

    for (let i = 0; i < moverFlechas.length; i++) {

        if (i != 0) {
            moverFlechas[i].style.right = "-45px";
        }

    }

    var moverFlechas = document.getElementsByClassName('owl-prev')

    for (let i = 0; i < moverFlechas.length; i++) {

        if (i != 0) {
            moverFlechas[i].style.left = "-50px";
        }

    }

    // hover botones carrusel clientes

    document.getElementsByTagName("i")[2].addEventListener("mouseover", () => {
        document.getElementsByTagName("i")[2].style.color = "rgb(218, 88, 88)";
    });

    document.getElementsByTagName("i")[2].addEventListener("mouseout", () => {
        document.getElementsByTagName("i")[2].style.color = "rgb(112, 96, 96)";
    });

    document.getElementsByTagName("i")[3].addEventListener("mouseover", () => {
        document.getElementsByTagName("i")[3].style.color = "rgb(218, 88, 88)";
    });

    document.getElementsByTagName("i")[3].addEventListener("mouseout", () => {
        document.getElementsByTagName("i")[3].style.color = "rgb(112, 96, 96)";
    });
  
    window.addEventListener("scroll",function(){
        console.log("me muevo")
    });

}

  
function topScroll(){

    console.log("D.scrollTop");
    
    var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
    
    if (D.scrollTop == 0)
        {
            alert("top");
        }  
        
};