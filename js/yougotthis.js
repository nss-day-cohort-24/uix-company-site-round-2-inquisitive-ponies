var heroImage = document.getElementById('heroImage'); 

var heroes = [ 
    `<img class="index-hero" src="../images/Band.jpg">`,
    `<img class="index-hero"  src="../images/hero_stem.jpg">`,
    `<img class="index-hero" src="../images/Archery.jpg">`,
    `<img class="index-hero" src="../images/hero_outdoors.jpg">`,
    `<img class="index-hero" src="../images/hero_ropes.jpg" >`,
    ]

var random = Math.floor(Math.random() * Math.floor(heroes.length));
console.log(random);
      

switch(random){
    case 0:
        heroImage.innerHTML = heroes[0];
        break;
    case 1:
        heroImage.innerHTML = heroes[1];
        break;
    case 2:
        heroImage.innerHTML = heroes[2];
        break;
    case 3:
        heroImage.innerHTML = heroes [3];
        break;
    case 4:     
        heroImage.innerHTML= heroes [4];
        break;
}

