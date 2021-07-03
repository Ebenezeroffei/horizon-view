class BaseOperations{
    constructor(){
        this.pageInit();
        this.togglePhoneMenu();
        this.checkScreenSize();
        this.toggleNavbars();
    }

    pageInit(){
        $('#navbar-static-phone-menu, #navbar-fixed-phone-menu').slideUp(0);
    }
    
    togglePhoneMenu(){
        // Static navbar
        $('#navbar-static-hamburger-menu').click(function(){
            $('#navbar-static-phone-menu').slideToggle();
        });
        // Fixed navbar
        $('#navbar-fixed-hamburger-menu').click(function(){
            $('#navbar-fixed-phone-menu').slideToggle();
        });
    }
    
    checkScreenSize(){
        window.onresize = () => {
            if(window.innerWidth > 700){
                $('#navbar-static-phone-menu, #navbar-fixed-phone-menu').slideUp(0);
            }
        }
    }

    toggleNavbars(){
        window.onscroll = () => {
            let staticNavbar = document.getElementById('navbar-static').getBoundingClientRect();
            console.log(staticNavbar.top)
            // Show fixed navbar
            if(staticNavbar.top < -80){
                $('#navbar-fixed').css('top','0px');
                $('#navbar-static-phone-menu').slideUp(0);
            }
            // Hide fixed navbar
            else{
                $('#navbar-fixed').css('top','-100px')
                $('#navbar-fixed-phone-menu').slideUp(0);
            }
        }
    }
}

new BaseOperations();