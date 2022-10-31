/**
 * 
 * 
 * 
 * */
const addItemToCart = async () => {
    const userId = Number(localStorage.getItem('id'))
    
    let productsObj = await fetch(`http://localhost:8000/carts/${userId}`).then(res => res.json())
    let productsArr = productsObj.items;
    let totalPrice = 0;
    productsArr.forEach(product => {
        console.log(product.product_name)
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

addItemToCart();