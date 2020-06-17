const menu = document.querySelector('.menu-burger')
const del = document.querySelector('.x')
const link = document.querySelectorAll('.product-link')
const product = document.querySelectorAll('.product')

menu.addEventListener('click', ()=> {
    document.querySelector('.popup-menu').classList.add('anim')
    document.querySelector('body').classList.add('scroll')
})

del.addEventListener('click', ()=> {
    document.querySelector('.popup-menu').classList.remove('anim')
    document.querySelector('body').classList.remove('scroll')
})

link.forEach(function(b){
    b.addEventListener('click', (e) => {
        e.preventDefault()
        let info = e.currentTarget.querySelector('.product-info')
        console.log(info);

        e.currentTarget.classList.add('hide')
    })
})

product.forEach(function(b){
    let dark
    b.addEventListener('click', (e) => {   
        if(!dark) {
            e.currentTarget.insertAdjacentHTML('afterbegin',`
            <div class="dark-product">
                <div class="product-img-container dark-container">
                    <img class="product1-img" src="img/product4.png" alt="img">
                    <button class="x dark-x"></button>
                </div>
                <div class="product-info">
                    <h2 class="product-name">КОЛЬЦО jow’s, Cartier</h2>
                    <p class="product-material">Белое золото, бриллианты</p>
                    <div class="buy-product">
                        <p class="product-price">674 000 ₽</p>
                        <button class="basket dark-basket"></button>
                    </div>
                </div>   
            </div> 
            `)
        } else { return }

        let close  = e.currentTarget.querySelector('.dark-x')
        dark = e.currentTarget.querySelector('.dark-product')  
        close.addEventListener('click', () => {
           
           console.log(dark)

           dark.remove()
           
           document.querySelector('.product-link').classList.remove('hide')
        //    dark.classList.add('1')
        //    let info = e.currentTarget.querySelector('.product-info')
        })
    })
})



