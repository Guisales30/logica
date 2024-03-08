

function alterarStatus(numeroBotao) {
  if (numeroBotao == 1) {

  let btn1 = document.getElementById('btn1');
  btn1.innerHTML = 'Devolver';
  btn1.classList.add('dashboard__item__button--return')

  } else{
    if (numeroBotao == 2) {
        let btn2 = document.getElementById('btn2');
        btn2.innerHTML = 'Devolver';
        btn2.classList.add('dashboard__item__button--return')
    } else{
        let btn3 = document.getElementById('btn3');
        btn3.innerHTML = 'Devolver';
        btn3.classList.add('dashboard__item__button--return')
    }
  
 
  }
}