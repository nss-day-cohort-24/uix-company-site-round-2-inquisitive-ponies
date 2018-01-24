var heroImage = document.getElementById('heroImage'); 

var heroes = [ 
    `<img src="../images/Band.jpg" style="display: flex; margin: auto;">`,
    `<img src="../images/hero_stem.jpg" style="display: flex; margin: auto; ">`,
    `<img src="../images/Archery.jpg" style="display: flex; margin: auto;">`,
    `<img src="../images/hero_outdoors.jpg" style="display: flex; margin: auto;">`,
    `<img src="../images/hero_ropes.jpg" style="display: flex; margin: auto;">`,
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

