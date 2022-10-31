//const { checkout } = require("../routes/productRoute");

/**
 * 
 * 
 * 
 * */
 let productArrId = []
const addItemToCart = async () => {
    const userId = Number(localStorage.getItem('id'))
    let productsObj = await fetch(`http://localhost:8000/carts/${userId}`).then(res => res.json())
    let productsArr = productsObj.items;
    let totalPrice = 0;
    productsArr.forEach(product => {
        console.log(product.product_id)
        productArrId.push({'id':product.product_id,'name': product.product_name, 'price': product.price})
        let cartItems = document.getElementsByClassName("cart-items")[0]
        let cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${product.image}" width="100" height="100">
            <span class="cart-item-title">${product.product_name}</span>
        </div>
        <span class="cart-price cart-column">$${product.price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
        `
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow);
        totalPrice += Number(product.price);

       
        
    })

    let priceTag = document.getElementById('total-price').innerText = `$${totalPrice}`
    let removeCartItemsButtons = document.getElementsByClassName('btn-danger');
        for(let i= 0; i<removeCartItemsButtons.length;i++){
            let button = removeCartItemsButtons[i];
            button.addEventListener('click', ()=>{
                console.log("clicked")
            })
        }
}

function handleCheckout(){
    let checkoutBtn = document.getElementById("checkout_btn")
    checkoutBtn.addEventListener('click',()=>{
        console.log(productArrId)
        fetch('http://localhost:8000/create-checkout-session',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({productArrId})
        }).then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({url}) => {
            console.log(url)
             window.location = url
        }).catch(e => {
            console.error(e.error)
        })
    })
}

addItemToCart();
handleCheckout();