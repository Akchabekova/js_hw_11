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
        if(inputName[0].value === ''){
            alert('Выберите тип топлево и цену за 1 (один) литр')
        }else if (inputName[0].value === +inputName[0].value){
            alert('Водите только цыфры для цены топлево')
        }else if(inputLiters.value === ''){
            alert('Выберите количество топлево')
        }else if (inputLiters.value === inputLiters[0].value.toString()){
            alert('Водите только цыфры для количество топлево')
        }
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
    if(inputName[0].value !== '' && inputLiters.value !== ''){
        petrolTypeBill.textContent = ai95
        priceForOneLiter.textContent = `${inputName[0].value}$`
        totalLitersBill.textContent = `${inputLiters.value}`
        totalPrice.textContent = `${(inputName[0].value * inputLiters.value) + (inputName[0].value * inputLiters.value * 0.05)}`
    }else if(inputName[1].value !== '' && inputLiters.value !== ''){
        petrolTypeBill.textContent = ai98
        priceForOneLiter.textContent = `${inputName[1].value}$`
        totalLitersBill.textContent = `${inputLiters.value}`
        totalPrice.textContent = `${(inputName[1].value * inputLiters.value) + (inputName[1].value * inputLiters.value * 0.05)}`

    }else if(inputName[2].value !== '' && inputLiters.value !== ''){
        petrolTypeBill.textContent = ai100
        priceForOneLiter.textContent = `${inputName[2].value}$`
        totalLitersBill.textContent = `${inputLiters.value}`
        totalPrice.textContent = `${(inputName[2].value * inputLiters.value) + (inputName[2].value * inputLiters.value * 0.05)}`
    }
})










