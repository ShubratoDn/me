$(document).ready(function(){
    $("body").scrollspy({
        target: "#myNavbar"
    });


    // ==============================
    // SkiLL Bar
    // ==============================
    var skillDiv = document.getElementById('skill-div');
    var eleTopPos = skillDiv.offsetTop + 150;
    console.log(eleTopPos);



    // ================================
    // Scroll To Manipulate Navbar
    // ================================
    let navbar = document.getElementById('myNavbar');

    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

            //  navbar
            navbar.classList.add('active');

        }else{
            navbar.classList.remove('active');
        };


        if(document.body.scrollTop > eleTopPos || document.documentElement.scrollTop > eleTopPos){
            //  SKILLS
            skillDiv.classList.add('active');
        }else{
            skillDiv.classList.remove('active');
        }
        

    }




    // STOP INSPACTING
    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault();
    // });



});