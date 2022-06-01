(function ($) {
    "use strict";

       // loader
       var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    

    

})(jQuery);

function calculateTotal()
{
  let unit_price={
    product1: 170,
    product2: 123,
    product3: 400,
    product4: 123   
  };
  let item_price={}
  
  item_price.product1 = ($("#qty_product1").val() * unit_price.product1 )
  $("#price_product1").val(item_price.product1);
  
  item_price.product2 = ($("#qty_product2").val() * unit_price.product2 )
  $("#price_product2").val(item_price.product2);
  
  item_price.product3 = ($("#qty_product3").val() * unit_price.product3 )
  $("#price_product3").val(item_price.product3);  
  
  item_price.product4 = ($("#qty_product4").val() * unit_price.product4 )
  $("#price_product4").val(item_price.product4);    
  
  let total = item_price.product1 + item_price.product2 + item_price.product3 + item_price.product4;
  let total1 =  item_price.product1 + item_price.product2 + item_price.product3 + item_price.product4 + 38;
 
  $("#total_value").text(total);
  $("#total_value1").text(total1);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})

function validate()
{
    if(   document.getElementById("text1").value == "user"
       && document.getElementById("text2").value == "1122" )
    {
        alert( "Login  succeeded" );
        location.href="Home2.html";
    }
    else
    {
        alert( "Login failed! \nPlease check the Username and Password" );
    }
}

if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
    } else{
        ready()
    }
    
    function ready(){
        var removeCartItemButtons = document.getElementsByClassName('btn-danger')
        console.log(removeCartItemButtons)
        for (var i = 0; i < removeCartItemButtons.length; i++){
            var button = removeCartItemButtons[i]
            button.addEventListener('click',function(event){
                var buttonClicked = event.target
                buttonClicked.parentElement.parentElement.remove()
                updateCartTotal()
        
            })
        }
    
    
    }
    
    function removeCartItem(event){
        var buttonClicked =event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }
    
    
        // Testimonials carousel
        $(".testimonials-carousel").owlCarousel({
            center: true,
            autoplay: true,
            smartSpeed: 2000,
            dots: true,
            loop: true,
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });
        
        