  /*Slider
  -------------------------------------*/
  
    var swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  
  /*Tabs
  -------------------------------------*/

    if( 'ontouchstart' in window ){ var click = 'touchstart'; }
  else { var click = 'click'; }


  $('div.burger').on(click, function(){
      if( !$(this).hasClass('open') ){ openMenu(); } 
      else { closeMenu(); }
  }); 
  

  $('div.menu ul li a').on(click, function(e){
    e.preventDefault();
    closeMenu();
  });


  function openMenu(){
    
    $('div.menu-bg').addClass('animate');         

    $('div.burger').addClass('open'); 
    $('div.x, div.z').addClass('collapse');
    $('.menu li').addClass('animate');
    
    setTimeout(function(){ 
      $('div.y').hide(); 
      $('div.x').addClass('rotate30'); 
      $('div.z').addClass('rotate150'); 
    }, 70);
    setTimeout(function(){
      $('div.x').addClass('rotate45'); 
      $('div.z').addClass('rotate135');  
    }, 120);    
  }
  
  function closeMenu(){

    $('.menu li').removeClass('animate');
    setTimeout(function(){      
      $('div.burger').removeClass('open');  
      $('div.x').removeClass('rotate45').addClass('rotate30'); 
      $('div.z').removeClass('rotate135').addClass('rotate150');        
      $('div.menu-bg').removeClass('animate');      
      
      setTimeout(function(){      
        $('div.x').removeClass('rotate30'); 
        $('div.z').removeClass('rotate150');      
      }, 50);
      setTimeout(function(){
        $('div.y').show(); 
        $('div.x, div.z').removeClass('collapse');
      }, 70);
    }, 100);                          
    
  }

  const $drowdownArrow = document.querySelector('.fa-angle-down');
const $checkbox = document.getElementById('openDropdown');
const $dropdownMenu = document.querySelector('.dropdown-menu');

$checkbox.addEventListener('change', () => {
  $drowdownArrow.classList.toggle('rotate-dropdown-arrow');
});

$dropdownMenu.addEventListener('click', (e) => {
  $checkbox.checked = false;
  // setting checked to false won't trigger 'change'
  // event, manually dispatch an event to rotate
  // dropdown arrow icon
  $checkbox.dispatchEvent(new Event('change'));
});
  
  