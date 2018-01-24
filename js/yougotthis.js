var heroImage = document.getElementById('heroImage'); 
// var heroImage1 = document.getElementById('heroImage1');
// var heroImage2 = document.getElementById('heroImage2'); 

var heroes = [ 
    `<img src="../images/Band.jpg" style="display: flex; margin: auto; max-width: 100%;">`,
    `<img src="../images/hero_stem.jpg" style="display: flex; margin: auto; max-width: 100%;">`,
    `<img src="../images/Archery.jpg" style="display: flex; margin: auto; max-width: 100%;">`
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
}

