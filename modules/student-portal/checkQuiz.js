const quizChecker = () => {
const checkNum1 = document.getElementById('num1');
const ans1 =document.getElementById('ans1')

const checkNum2 = document.getElementById('num2');
const ans2 =document.getElementById('ans2')

const checkNum3 = document.getElementById('num3');
const ans3 =document.getElementById('ans3')

const checkNum4 = document.getElementById('num4');
const ans4 =document.getElementById('ans4')

const checkNum5 = document.getElementById('num5');
const ans5 =document.getElementById('ans5')

const checkNum6 = document.getElementById('num6');
const ans6 =document.getElementById('ans6')

const checkNum7 = document.getElementById('num7');
const ans7 =document.getElementById('ans7')

const checkNum8 = document.getElementById('num8');
const ans8 =document.getElementById('ans8')

const checkNum9 = document.getElementById('num9');
const ans9 =document.getElementById('ans9')

const checkNum10 = document.getElementById('num10');
const ans10 =document.getElementById('ans10')


const doQuiz = () => {
  let total = 0
  checkNum1.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans1.value === "b") {
      console.log('correct')
      checkNum1.classList.add('none');
      checkNum2.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum1.classList.add('none');
      checkNum2.classList.remove('none');
    }
  })
  
  checkNum2.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans2.value === "a") {
      console.log('correct')
      checkNum2.classList.add('none');
      checkNum3.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum2.classList.add('none');
      checkNum3.classList.remove('none');
    }
  })
  
  checkNum3.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans3.value === "c") {
      console.log('correct')
      checkNum3.classList.add('none');
      checkNum4.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum3.classList.add('none');
      checkNum4.classList.remove('none');
    }
  })
  
  checkNum4.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans4.value === "a") {
      console.log('correct')
      checkNum4.classList.add('none');
      checkNum5.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum4.classList.add('none');
      checkNum5.classList.remove('none');
    }
  })
  
  checkNum5.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans5.value === "b") {
      console.log('correct')
      checkNum5.classList.add('none');
      checkNum6.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum5.classList.add('none');
      checkNum6.classList.remove('none');
    }
  })
  
  checkNum6.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans6.value === "b") {
      console.log('correct')
      checkNum6.classList.add('none');
      checkNum7.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum6.classList.add('none');
      checkNum7.classList.remove('none');
    }
  })
  
  checkNum7.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans7.value === "b") {
      console.log('correct')
      checkNum7.classList.add('none');
      checkNum8.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum7.classList.add('none');
      checkNum8.classList.remove('none');
    }
  })
  
  checkNum8.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans8.value === "b") {
      console.log('correct')
      checkNum8.classList.add('none');
      checkNum9.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum8.classList.add('none');
      checkNum9.classList.remove('none');
    }
  })
  
  checkNum9.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans9.value === "c") {
      console.log('correct')
      checkNum9.classList.add('none');
      checkNum10.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum9.classList.add('none');
      checkNum10.classList.remove('none');
    }
  })
  
  checkNum10.addEventListener('submit', (e) => {
    e.preventDefault();
    if(ans10.value === "a") {
      console.log('correct')
      checkNum10.classList.add('none');
      final.classList.remove('none');
      total += 1;
    } else {
      console.log('wrong')
      checkNum10.classList.add('none');
      final.classList.remove('none');
    }
    const showFinalRes = () => {
      const totalResult = document.getElementById('total');
      totalResult.textContent = total;
      console.log(total);
    }
    showFinalRes();

  })
  // console.log(total)
}
doQuiz();
}

export default quizChecker;

