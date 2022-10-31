
const container = document.getElementById("container1")
const productName = document.getElementById("product-name")
const productPrice = document.getElementById("product-price")



   // console.log(event.target);
   
    const getProducts = () => {
        fetch('http://localhost:8000/products').then(res => res.json())
        .then(data => {
            let addToCart = ''
            data.forEach(element => {
            let container1 = document.createElement('div');
            container1.classList.add("holder");
            let img = document.createElement('img');
            let productInfo = document.createElement('p');
            let product_price = document.createElement('p');
            let product_name = document.createElement('h3');
            addToCart = document.createElement('button');
            addToCart.setAttribute('class', 'button-class');
            container.append(container1);
            container1.append(img,productInfo);
            productInfo.append(product_name,product_price,addToCart);

            img.src = element.image
            product_name.innerText = `${element.product_name}`

            product_price.innerText = `$${element.price}`
            addToCart.innerText = "Add to Cart";
            addToCart.setAttribute('id',`${element.id}`)
            });
            let product = document.querySelectorAll(".button-class")
        
            function addToCar(event) {
                var myModal = new bootstrap.Modal(document.getElementById("modal_id"));
                myModal.show()
                let close = document.querySelector('.close');
                let close2 = document.getElementById('close2')
                close.addEventListener('click',()=>{
                    myModal.hide()
                })
                close2.addEventListener('click',()=>{
                    myModal.hide()
                })
                let productId = Number(event.target.id)
                addProductToCart(productId);
                fetchProduct(productId)
                let checkoutBtn = document.getElementById("checkout")
                checkoutBtn.addEventListener('click',()=>{
                    window.location.href = '../shopping_cart/shopping_cart.html'
                })

            }
            for(let i = 0; i < product.length;i++){
                product[i].addEventListener("click", addToCar);

                
            }
           //Post: carts/:4/:1
        })
        let cartBttn = document.getElementById("cartBttn")
        
    }    

    
    async function fetchProduct(id){
        //i need to make a new route to /products/id instead of /products
        // 8000/products returns all products but we need the specific product

        let product = await fetch('http://localhost:8000/products').then(res => res.json());
        //console.log(product)
    }

    function addProductToCart(product_id){
        const userId = Number(localStorage.getItem('id'))
        console.log( userId, product_id)
        let postRequest = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`http://localhost:8000/carts/${userId}/${product_id}`,postRequest)

        let product = await fetch(`http://localhost:8000/products/${id}`).then(res => res.json());
        productName.innerText = `${product.product_name}`
        productPrice.innerText = `Price $${product.price}`

        console.log(product)

    }
    getProducts()
  
    document.addEventListener('DOMContentLoaded', ()=>{
        cartBttn.addEventListener('click', (event) =>{
            event.preventDefault()
            console.log('clicked')
            window.location.href = '../shopping_cart/shopping_cart.html'
        })
    })
   
    
 