var products1 = document.getElementById('products1');
var products2 = document.getElementById('products2');

// var productImage = new Image(256, 256);
// productImage.src = 'http://moziru.com/images/square-clipart-red-color-3.png';

var products = [
    {
    image:'<img src="../images/art.jpeg">',
    description:'<h3>Art!</h3>',
    info: '<h4>Explore your inner artist, alongside others</h4>',
    },
    {
    image:'<img src="../images/canoe(resize).jpg">',
    description:'<h3>Water!</h3>',
    info: '<h4>For those who love to make splash!</h4>',
    },
    {
    image:'<img src="../images/dance.jpg">',
    description:'<h3>Dance!</h3>',
    info:'<h4>Its time to move! Get funky your way.</h4>',
    },
    {
    image:'<img src="../images/fun.jpg">',
    description:'<h3>Meet!</h3>',
    info: '<h4>Meet new people, make new friends</h4>',
    },
    {
    image:'<img src="../images/kickball.jpg">',
    description:'<h3>Sports!</h3>',
    info: '<h4>Who doesnt love a good game?</h4>',
    },
    {
    image:'<img src="../images/ropes.jpg">',
    description:'<h3>Outdoors!</h3>',
    info: '<h4>Everybody loves the sunshine</h4>',
    },
    {
    image:'<img src="../images/stem.jpg">',
    description:'<h3>Science!</h3>',
    info: '<h4>The world works in weird and mysterious ways!</h4>',
    },
    {
    image:'<img src="../images/wood.jpeg">',
    description:'<h3>Make!</h3>',
    info: '<h4>Get down and dirty, and have something to show for it!<h4>',
    },
]


for(i = 0; i < products.length; i++) {
if(i < products.length/2) {
    products1.innerHTML += '<div class="flex-product">' +  products[i].image + products[i].description + products[i].info + '</div>';
    }else{
        products2.innerHTML += '<div class="flex-product">' + products[i].image + products[i].description + products[i].info + '</div>';
    }
}
