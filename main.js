function calculator() {


  let display = document.querySelector('.screen')       // input   
  let buttons = document.querySelectorAll('.btn')       // All the buttons
  let clean = document.querySelector('.clear')          //   AC
  let cutt = document.querySelector('.cutt')            //  X
  let equal = document.querySelector('.equal')          // =

  buttons.forEach(function (albtn) {
    albtn.addEventListener('click', function (a) {

      let number = a.target.dataset.num;
      display.value += number

    })

  });


  clean.addEventListener('click', function () {
    if (display.value === display.value) {             // هذه المقارنة زائدة عن الحاجة وصحيحة دائمًا 
      display.value = '';
    }
  });


  cutt.addEventListener('click', function () {
    if (display.value === display.value) {
      display.value = display.value.toString().slice(0, -1);
    }
  })




  equal.addEventListener('click', function () {
    if (display.value === display.value) {
      let result = eval(display.value)
      display.value = result;
    }
  })



}
calculator();
