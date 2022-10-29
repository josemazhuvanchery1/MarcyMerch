
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
                console.log(event.target.id)
            }
            for(let i = 0; i < product.length;i++){
                product[i].addEventListener("click", addToCar);

            
            }
           //Post: carts/:4/:1
        })

    }    
    
    getProducts()
  
    
    
 