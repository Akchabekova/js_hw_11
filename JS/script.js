const boxEach = document.querySelectorAll('.boxImg')/*лейблы с картинкой*/
const inputName = document.querySelectorAll('.inputName')/*инпуты для цены*/
const inputLiters = document.querySelector('.inputLiters')/* инпут для количество топлево*/
const button = document.querySelector('.check-btn')/*кнопка для заполнении чека*/
const petrolTypeBill = document.querySelector('.petrolTypeBill span')/*тип топлево в чеке */
const priceForOneLiter = document.querySelector('.priceForOne span')/*цена топлево в чеке*/
const totalLitersBill = document.querySelector('.totalLitersBIll span')/*количество топлево в чеке*/
const totalPrice = document.querySelector('.totalPrice span')/*сумма для оплаты в чеке*/
/*перебираем для закрашивание лейбла*/
boxEach.forEach(item => {
    item.addEventListener('click',()=>{
        boxEach.forEach((item, index)=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})
/*перебираем для отчистки инпутов цены и количество*/
inputName[0].addEventListener('click', () => {
    boxEach[2].classList.remove('active')
    inputName[2].value = ''
    boxEach[1].classList.remove('active')
    inputName[1].value = ''
    inputLiters.value = ''
    boxEach[0].classList.add('active')
})
inputName[1].addEventListener('click', () => {
    inputName[0].value = ''
    boxEach[0].classList.remove('active')
    inputName[2].value = ''
    boxEach[2].classList.remove('active')
    inputLiters.value = ''
    boxEach[1].classList.add('active')
})
inputName[2].addEventListener('click', () => {
    inputName[0].value = ''
    boxEach[0].classList.remove('active')
    inputName[1].value = ''
    boxEach[1].classList.remove('active')
    inputLiters.value = ''
    boxEach[2].classList.add('active')
})
/*типы топлево для подставление в чек*/
const ai95 = 'Ai 95'
const ai98 = 'Ai 98'
const ai100 = 'Ai 100'
/*кнопка для печати чека после проверок*/
button.addEventListener('click', () => {
    if(inputName[0].value.length !== 0 && inputLiters.value.length !== 0){
        btn1()
    }else if (inputName[1].value.length !== 0 && inputLiters.value.length !== 0){
        btn2()
    }else if(inputName[2].value.length !== 0 && inputLiters.value.length !== 0){
        btn3()
    }
})
/*функция выбренного топлево для проверки и печати чека*/
function btn1 (){
    if (Number(inputName[0].value) !== Number(inputName[0].value)){
    alert('Водите только цыфры для цены топлево')
}else if (Number(inputLiters.value) !== Number(inputLiters.value)){
    alert('Водите только цыфры для количество топлево')
}
    if(inputName[0].value.length !== 0 && inputLiters.value.length !== 0){
    petrolTypeBill.textContent = ai95
    priceForOneLiter.textContent = `${inputName[0].value}$`
    totalLitersBill.textContent = `${inputLiters.value}`
    totalPrice.textContent = `${(inputName[0].value * inputLiters.value) + (inputName[0].value * inputLiters.value * 0.05)}`
}
}
function btn2 (){
    if (Number(inputName[1].value) !== Number(inputName[1].value)){
        alert('Водите только цыфры для цены топлево')
    }else if (Number(inputLiters.value) !== Number(inputLiters.value)){
        alert('Водите только цыфры для количество топлево')
    }
    if(inputName[1].value.length !== 0 && inputLiters.value.length !== 0){
    petrolTypeBill.textContent = ai98
    priceForOneLiter.textContent = `${inputName[1].value}$`
    totalLitersBill.textContent = `${inputLiters.value}`
    totalPrice.textContent = `${(inputName[1].value * inputLiters.value) + (inputName[1].value * inputLiters.value * 0.05)}`
}
}
function btn3 (){
    if (Number(inputName[2].value) !== Number(inputName[2].value)){
        alert('Водите только цыфры для цены топлево')
    }else if (Number(inputLiters.value) !== Number(inputLiters.value)){
        alert('Водите только цыфры для количество топлево')
    }
    if(inputName[2].value.length !== 0 && inputLiters.value.length !== 0){
        petrolTypeBill.textContent = ai100
        priceForOneLiter.textContent = `${inputName[2].value}$`
        totalLitersBill.textContent = `${inputLiters.value}`
        totalPrice.textContent = `${(inputName[2].value * inputLiters.value) + (inputName[2].value * inputLiters.value * 0.05)}`
    }
}




