
const container = document.getElementById("container1")

window.addEventListener('DOMContentLoaded', (event) => {
   // console.log(event.target);
    const getProducts = () => {
        fetch('http://localhost:8000/products').then(res => res.json())
        .then(data => {
            data.forEach(element => {
            let container1 = document.createElement('div');
            container1.classList.add("holder");
            let img = document.createElement('img');
            let productInfo = document.createElement('p');
            let product_name = document.createElement('h3');
            let product_price = document.createElement('p');
            let addToCart = document.createElement('button');
            addToCart.setAttribute('class', 'button-class');
            container.append(container1);
            container1.append(img,productInfo);
            productInfo.append(product_name,product_price,addToCart);
            img.src = element.image
            product_name.innerText = `${element.product_name}`
            product_price.innerText = `$${element.price}`
            addToCart.innerHTML = "Add to Cart";
            //addToCart.setAttribute('id',`${elememt.id}`)   
            console.log(element.id)
            console.log(data)
            });
            
        })
    }
    
    getProducts()
   

}); 