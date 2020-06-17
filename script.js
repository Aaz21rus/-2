const menu = document.querySelector('.menu-burger')
const del = document.querySelector('.x')
const link = document.querySelectorAll('.product-link')
const product = document.querySelectorAll('.product')
const basket = document.querySelector('.basket')
let countGoods = ''

function noPoint() {
    link.forEach( (el)=> {
        el.classList.add('no-pointer')    
        // el.classList.add('no-pointer')
    })
}

function point() {
    link.forEach( (el)=> {
        el.classList.remove('no-pointer')
    })
}

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
        noPoint()
        e.currentTarget.classList.remove('no-pointer')
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
                    <img class="product1-img dark-product1-img" src= ${data.img} alt="img">
                    <button class="x dark-x"></button>
                </div>
                <div class="product-info">
                    <h2 class="product-name dark-product-name">${data.name}</h2>
                    <p class="product-material dark-product-material">${data.material}</p>
                    <div class="buy-product">
                        <p class="product-price dark-product-price">${data.price}</p>
                        <button class="basket dark-basket"></button>
                    </div>
                </div>   
            </div> 
            `) 
        } else { return }

        let dark = e.currentTarget.querySelector('.dark-product')
        let close  = e.currentTarget.querySelector('.dark-x')
        let darkBasket = e.currentTarget.querySelector('.dark-basket')

        function clear() {
            dark.remove()
            point()
        }
        
        function deleteDark() {
            timeDel = window.setTimeout(clear, 5000)
        }

        deleteDark() 

        close.addEventListener('click', (xE) => {           
           xE.stopPropagation()
           xE.preventDefault()
           dark.remove()
        }) 
        
        darkBasket.addEventListener('click', (e) => {
            basket.classList.add('pointer')
            countGoods++
            // console.log(countGoods);
            basket.innerHTML = countGoods
            // document.querySelector('.dark-product1-img').setAttribute('src', data.img) 
            // document.querySelector('.dark-product-name').innerHTML = data.name
            // document.querySelector('.dark-product-material').innerHTML = data.material
            // document.querySelector('.dark-product-price').innerHTML = data.price
            // if(!())
            document.querySelector('.product-container').insertAdjacentHTML('afterbegin',`
                <div class="dark-product dark-top">
                    <div class="product-img-container dark-container dark-top-container">
                        <img class="product1-img dark-product1-img top-img" src=${data.img} alt="img">
                        <button class="x dark-x top-x"></button>
                    </div>
                    <div class="product-info">
                        <h2 class="product-name dark-product-name top-name">${data.name}</h2>
                        <p class="product-material dark-product-material top-mat">${data.material}</p>
                        <div class="buy-product">
                            <p class="product-price dark-product-price top-price">${data.price}</p>
                        </div>
                    </div>   
                </div>
            `) 
        })
    })
})

number++ 



