const petrolName = document.querySelectorAll('.petrolType')
const priceForOneLiter = document.querySelectorAll('.priceForOne')
const totalLiters = document.querySelectorAll('.totalLiters')
const totalPrice = document.querySelectorAll('.totalPrice')
const vat = document.querySelectorAll('.vat')
const boxEach = document.querySelectorAll('.boxImg')
const inputLiters =document.querySelectorAll('.inputLiters')
const inputName = document.querySelectorAll('.inputName')

boxEach.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        boxEach.forEach((item, index)=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})
boxEach.forEach((item, index)=>{
    if (totalPrice[index].value.length !== 0) {
        petrolName.textContent = petrolName[index].textContent
        priceForOneLiter.textContent = inputName[index].value
        totalLiters.textContent = totalLiters.value
        vat.textContent = '5%'
    }
})
totalPrice.addEventListener('click',()=>{
    totalPrice.textContent = inputName[`${index}`].value * totalLiters.value
})
console.log(totalPrice)











