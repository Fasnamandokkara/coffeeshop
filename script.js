let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
},
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
document.querySelectorAll('.image-slider img').forEach(Images =>{
   Images.onclick = () =>{
    var src = Images.getAttribute('src');
document.querySelector('.main-home-image').src = src;
  }
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    
      breakpoints: {
        0: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 2,
        },
      },
      loop:true,
      grabCursor:true,
  });
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz0mWyQv3VvLnehPC0TS7cVsSrqa8RsbJbpzRrEbIwlF4_6m-MKU-U47zrb-hl0uyNT/exec'
  const form = document.forms['submit-to-google-sheet']
         const msg = document.getElementById("msg")
         form.addEventListener('submit', e => {
           e.preventDefault()
           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
           .then(response => {
                 msg.innerHTML = "Message sent Successfully"
                  setTimeout(function(){
                     msg.innerHTML = ""
                  },5000)
                  form.reset()
             })
             .catch(error => console.error('Error!', error.message))
         });







  
           
