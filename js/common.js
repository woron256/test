$(document).ready(function() {

    const form = document.querySelector('.formWithValidation');
    const success_form = document.querySelector('.success_form');
    const fields = form.querySelectorAll('.field');
    const country = form.querySelector('.country');


    function formParse(){
      for (var i = 0; i < fields.length; i++) {
        let error = fields[i];
        if (!fields[i].value) {
          console.log('field is blank', fields[i]);
          error.classList.add('error');
          if(country.selectedIndex == 0) {
              country.classList.add('error');
            }
            else {
              country.classList.remove('error');
          }
        }else {
          error.classList.remove('error');
        }
      }
    }

  

  
    function Succes(){
      for (var i = 0; i < fields.length; i++) {
        if(fields[i].classList.contains("error")) {
            return false;
          }
        }

        if (true) {
          form.classList.add('hidden');
          success_form.classList.remove('hidden');
        }
      }



    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formParse()
      Succes();
    })





    $('.menu-icon').click(function() {
      $(this).toggleClass('opened');
      $('.right_box_cont').toggleClass('opened');
    });


});