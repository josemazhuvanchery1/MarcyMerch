
const container = document.getElementById("container1")

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
                fetchProduct(productId)

            }
            for(let i = 0; i < product.length;i++){
                product[i].addEventListener("click", addToCar);

                
            }
           //Post: carts/:4/:1
        })

    }    
    
    async function fetchProduct(id){
        //i need to make a new route to /products/id instead of /products
        // 8000/products returns all products but we need the specific product
        let product = await fetch('http://localhost:8000/products').then(res => res.json());
        console.log(product)
    }
    getProducts()
  
    
    
 