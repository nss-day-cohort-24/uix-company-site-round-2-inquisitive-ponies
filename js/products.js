var products1 = document.getElementById('products1');
var products2 = document.getElementById('products2');

// var productImage = new Image(256, 256);
// productImage.src = 'http://moziru.com/images/square-clipart-red-color-3.png';

var products = [
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price',
    },
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price'
    },
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price',
    },
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price',
    },
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price',
    },
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price',
    },
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price',
    },
    {
    image:'<img src="http://moziru.com/images/square-clipart-red-color-3.png"',
    description:'<h3>DESCRIPTION</h3>',
    price: 'price',
    },
]


for(i = 0; i < products.length; i++) {
if(i < products.length/2) {
    products1.innerHTML += '<ul class="flex-product">' + products[i].image + '<li>' + products[i].description + '</li>' + products[i].price + '</ul>';
    }else{
        products2.innerHTML += '<ul class="flex-product">' + products[i].image + '<li>' + products[i].description + '</li>' + products[i].price + '</ul>';
    }
}
