var products1 = document.getElementById('products1');
var products2 = document.getElementById('products2');

// var productImage = new Image(256, 256);
// productImage.src = 'http://moziru.com/images/square-clipart-red-color-3.png';

var products = [
    {
    image:'<img src="../images/art.jpeg">',
    description:'<h3>Art!</h3>',
    price: 'price',
    },
    {
    image:'<img src="../images/canoe.jpg">',
    description:'<h3>Water!</h3>',
    price: 'price'
    },
    {
    image:'<img src="../images/dance.jpg">',
    description:'<h3>Dance!</h3>',
    price: 'price',
    },
    {
    image:'<img src="../images/fun.jpg">',
    description:'<h3>Friends!</h3>',
    price: 'price',
    },
    {
    image:'<img src="../images/kickball.jpg">',
    description:'<h3>Ball!</h3>',
    price: 'price',
    },
    {
    image:'<img src="../images/ropes.jpg">',
    description:'<h3>Woods!</h3>',
    price: 'price',
    },
    {
    image:'<img src="../images/stem.jpg">',
    description:'<h3>Science!</h3>',
    price: 'price',
    },
    {
    image:'<img src="../images/wood.jpeg">',
    description:'<h3>Make!</h3>',
    price: 'price',
    },
]


for(i = 0; i < products.length; i++) {
if(i < products.length/2) {
    products1.innerHTML += '<ul class="flex-product">' + products[i].image + '<li>' + products[i].description + '</li>' + '</ul>';
    }else{
        products2.innerHTML += '<ul class="flex-product">' + products[i].image + '<li>' + products[i].description + '</li>' + '</ul>';
    }
}
