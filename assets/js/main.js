

(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

$(document).ready(function () {
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $('#top').fadeIn();
        }else{
            $('#top').fadeOut();
        }
        }
);


const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

// document.getElementById('cart-open').addEventListener('click',(e)=>{
//     e.preventDefault();
//     offcanvasCart.toggle();
// });

document.getElementById('.closecart').forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        offcanvasCart.hide();
        let href = item.dataset.href;
        document.getElementById(href).scrollIntoView();
    })
})


document.querySelectorAll('.closecart').forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        offcanvasCart.hide();
        let href=item.href.split('#').pop();
        //  let href = item.dataset.href;
        //  offcanvasCartEl.addEventListener('hidden.bs.offcanvas',()=>{
        //      document.getElementById(href).scrollIntoView();
        })
    });
});



$('#top').click(function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
});
    $(".owl-carousel-full").owlCarousel(
        {
            
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        }
    );
