$(document).ready(function(){
    $("body").scrollspy({
        target: "#myNavbar"
    });


    // Scroll
    let navbar = document.getElementById('myNavbar');

    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

            //  navbar
            navbar.classList.add('active');


            // if(screen.width <=991){
            //     logo.classList.add("d-n");
            //     navTop.classList.add("d-n");
            // }
        }else{
            navbar.classList.remove('active');
        }
    }


});