const menu = document.querySelector('.menu-burger')
const del = document.querySelector('.x')
const link = document.querySelectorAll('.product-link')
const product = document.querySelectorAll('.product')
const basket = document.querySelector('.basket')
let countGoods = ''

basket.innerHTML = countGoods

menu.addEventListener('click', ()=> {
    document.querySelector('.popup-menu').classList.add('anim')
    document.querySelector('body').classList.add('scroll')
})

del.addEventListener('click', ()=> {
    document.querySelector('.popup-menu').classList.remove('anim')
    document.querySelector('body').classList.remove('scroll')
})

let number = 0
link.forEach(function(b){
    
    b.addEventListener('click', (e) => {  
        e.preventDefault()
        let data = {
            img: e.currentTarget.querySelector('.product1-img').getAttribute('src'),
            name: e.currentTarget.querySelector('.product-name').innerHTML,
            material: e.currentTarget.querySelector('.product-material').innerHTML,
            price: e.currentTarget.querySelector('.product-price').innerHTML
        }
        
        if( !(e.currentTarget.querySelector('.dark-product'))) {
            e.currentTarget.insertAdjacentHTML('afterbegin',`
            <div class="dark-product  data-count = ${number}">
                <div class="product-img-container dark-container">
                    <img class="product1-img" src= ${data.img} alt="img">
                    <button class="x dark-x"></button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">${data.material}</h2>
                    <p class="product-material">${data.img}</p>
                    <div class="buy-product">
                        <p class="product-price">${data.price}</p>
                        <button class="basket dark-basket"></button>
                    </div>
                </div>   
            </div> 
            `) 
        } else { return }
        let dark = e.currentTarget.querySelector('.dark-product')
        let close  = e.currentTarget.querySelector('.dark-x')
        let darkBasket = e.currentTarget.querySelector('.dark-basket')

        close.addEventListener('click', (xE) => {           
           xE.stopPropagation()
           xE.preventDefault()
           dark.remove()
        }) 
        
        darkBasket.addEventListener('click', (e) => {
            countGoods++
            console.log(countGoods);
            basket.innerHTML = countGoods
        })
    })
})

number++ 



