const boxEach = document.querySelectorAll('.boxImg')
const inputName = document.querySelectorAll('.inputName')

const inputLiters = document.querySelector('.inputLiters')
const button = document.querySelector('.check-btn')

const petrolTypeBill = document.querySelector('.petrolTypeBill span')
const priceForOneLiter = document.querySelector('.priceForOne span')
const totalLitersBill = document.querySelector('.totalLitersBIll span')
const totalPrice = document.querySelector('.totalPrice span')

boxEach.forEach(item => {
    item.addEventListener('click',()=>{
        boxEach.forEach((item, index)=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

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
const ai95 = 'Ai 95'
const ai98 = 'Ai 98'
const ai100 = 'Ai 100'
button.addEventListener('click', () => {
    if(inputName[0].value.length !== 0 && inputLiters.value.length !== 0){
        btn1()
    }else if (inputName[1].value.length !== 0 && inputLiters.value.length !== 0){
        btn2()
    }else if(inputName[2].value.length !== 0 && inputLiters.value.length !== 0){
        btn3()
    }
})
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




