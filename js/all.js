const thing01_2= document.querySelector('.thing01-2')
const thing01_3= document.querySelector('.thing01-3')
const thing01_4= document.querySelector('.thing01-4')
window.addEventListener('load',()=>{
    thing01_2.classList.add('saleDown')
    setTimeout(()=>{
        thing01_3.classList.add('saleDown')
    },250)
    setTimeout(()=>{
        thing01_4.classList.add('saleDown')
    },500)
    setTimeout(()=>{
        thing01_2.classList.remove('saleDown')
        thing01_2.classList.add('saleRotate')
    },750)
    setTimeout(()=>{
        thing01_3.classList.remove('saleDown')
        thing01_3.classList.add('saleRotate')
    },1000)
    setTimeout(()=>{
        thing01_4.classList.remove('saleDown')
        thing01_4.classList.add('saleRotate')
    },1250)
    
})