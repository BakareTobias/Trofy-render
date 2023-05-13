/* document.addEventListener('DOMContentLoaded',function () {
    
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    .then(res=>res.json())
    .then(products => {
        //for each product in products display picture, title, and price 
        products.forEach( function (product){
            product_container = document.createElement('div')
            product_container.id='listing'
            product_container.className = 'listings'
            product_container.innerHTML = `<a >
            <img src="${product.images[1]}" alt="" id="product_image" ><br>
           ${product.title}
            <br> Starting price:$${product.price} 
        </a>`
         document.querySelector('#products').appendChild(product_container)
        

        })

        var elements = document.querySelectorAll('#product_image');
        elements.forEach(function(element) {
            element.classList.add('mb-3','img-fluid',); //add class
        });

        var elements = document.querySelectorAll('.listings');
        elements.forEach(function(element) {
            element.classList.add('card','text-center','col-3','p-2','m-1','mb-4'); //add class
        });


    } )
    

}) */

