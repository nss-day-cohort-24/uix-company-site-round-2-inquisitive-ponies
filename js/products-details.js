var products1 = document.getElementById('product1');
var products2 = document.getElementById('product2');
var products3 = document.getElementById('product3');
var products4 = document.getElementById('product4');
var products5 = document.getElementById('product5');
var products6 = document.getElementById('product6');
var products7 = document.getElementById('product7');
var products8 = document.getElementById('product8');

var counter = 0;


var products = [
    {
    image:'<div class="flex-item1"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item2">DESCRIPTION</div>',
    },
    {
    image:'<div class="flex-item3"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item4">DESCRIPTION</div>',
    },
    {
    image:'<div class="flex-item1"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item2">DESCRIPTION</div>',
    },
    {
    image:'<div class="flex-item3"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item4">DESCRIPTION</div>',
    },
    {
    image:'<div class="flex-item1"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item2">DESCRIPTION</div>',
    },
    {
    image:'<div class="flex-item3"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item4">DESCRIPTION</div>',
    },
    {
    image:'<div class="flex-item1"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item2">DESCRIPTION</div>',
    },
    {
    image:'<div class="flex-item3"><img src="http://moziru.com/images/square-clipart-red-color-3.png"></div>',
    description:'<div class="flex-item4">DESCRIPTION</div>',
    },
]

for(i = 0; i < products.length; i++){
    switch(i){
        case 0:
            products1.innerHTML = products[i].image + ' ' + products[i].description;
        case 1:
            products2.innerHTML = products[i].description + ' ' + products[i].image;
        case 2:
            products3.innerHTML = products[i].image + ' ' + products[i].description;
        case 3:
            products4.innerHTML = products[i].description + ' ' + products[i].image;
        case 4:
            products5.innerHTML = products[i].image + ' ' + products[i].description;
        case 5:
            products6.innerHTML = products[i].description + ' ' + products[i].image;
        case 6:
            products7.innerHTML = products[i].image + ' ' + products[i].description;
        case 7:
            products8.innerHTML = products[i].description + ' ' + products[i].image;
    }
}

