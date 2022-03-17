const boxEach = document.querySelectorAll('.boxImg')
const petrolName = document.querySelectorAll('.petrolType')
const inputName = document.querySelectorAll('.inputName')
const inputLiters =document.querySelector('.inputLiters')
const petrolTypeBill = document.querySelector('.petrolTypeBill')
const priceForOneLiter = document.querySelector('.priceForOne')
const totalLiters = document.querySelectorAll('.totalLiters')
const totalPrice = document.querySelectorAll('.totalPrice')





boxEach.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        boxEach.forEach((item, index)=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})
b











