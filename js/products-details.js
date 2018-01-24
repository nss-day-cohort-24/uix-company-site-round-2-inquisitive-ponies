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
    image:'<div class="flex-item1"><img src="../images/art.jpeg"></div>',
    description:'<div class="flex-item2"><h3>Art!</h3>At YGT! we encourage exploring your own creative identity. Our friendly and talented staff is there to gently guide the creative process, and our facilities can handle everything from traditional mediums like painting and drawing, to new mediums like digital audio and video.</div>',
    },
    {
    image:'<div class="flex-item3"><img src="../images/canoe.jpg"></div>',
    description:'<div class="flex-item4"><h3>Water!</h3>Outdoor water activities like canoeing and kayaking are available, as well as a traditonal olympic pool for swimming and diving. Lifeguards and and supervisors are on site for these exercises to ensure that everyone is having fun, but also staying safe.</div>',
    },
    {
    image:'<div class="flex-item1"><img src="../images/dance.jpg"></div>',
    description:'<div class="flex-item2"><h3>Dance!</h3>Dancing is a great way to exercise but also have a blast. Diversity plays a big part in our dance program as well. Styles from all over the world are represented and we encourage particpants to discover new ones.</div>',
    },
    {
    image:'<div class="flex-item3"><img src="../images/fun.jpg"></div>',
    description:'<div class="flex-item4"><h3>Meet!</h3>One of our newer, and most exciting programs, Meet! is an exercise in socialisation. In this program, participants are paired with a peer they dont know and engage in a series of "getting to know" you activites to stimulate a well rounded social enviornment</div>',
    },
    {
    image:'<div class="flex-item1"><img src="../images/kickball.jpg"></div>',
    description:'<div class="flex-item2"><h3>Sports!</h3>Team sports like baseball, basketball, and soccer as well as one-on-one sports like tennis and racquet ball are offered. Our high quality facilites guarantee a safe and enjoyable experience for all. </div>',
    },
    {
    image:'<div class="flex-item3"><img src="../images/ropes.jpg"></div>',
    description:'<div class="flex-item4"><h3>Outdoors!</h3>Rope climbing, zipline, hiking include some of the physical options for our Outdoors! program. We also offer nature appreciation oriented activites including plant identificaton and foraging.</div>',
    },
    {
    image:'<div class="flex-item1"><img src="../images/stem.jpg"></div>',
    description:'<div class="flex-item2"><h3>Science!</h3>Science is a great way to understand the world around us. Our science programs are the most educational of all the programs and are led by professionals in the field with alot of experience and passion to share. </div>',
    },
    {
    image:'<div class="flex-item3"><img src="../images/wood.jpeg"></div>',
    description:'<div class="flex-item4"><h3>Make!</h3>Maker culture is a burgeoning movement, and now the tools to create almost anything exist. Guided workshops in everything from wood-working to electronics are offered, and participants leave with something they have created with their own hands and can take ownership of.</div>',
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

