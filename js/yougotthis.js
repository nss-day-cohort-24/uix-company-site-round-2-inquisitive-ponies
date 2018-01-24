var heroImage0 = document.getElementById('heroImage0'); 
// var heroImage1 = document.getElementById('heroImage1');
// var heroImage2 = document.getElementById('heroImage2'); 

var heroes = [ 
    `<img src="../images/Band.jpg">`,
    `<img src="../images/STEM.jpg">`,
    `<img src="../images/Archery.jpg">`
    ]

var random = Math.floor(Math.random() * Math.floor(heroes.length));
console.log(random);
      

switch(random){
    case 0:
        heroImage0.innerHTML = heroes[0];
        break;
    case 1:
        heroImage0.innerHTML = heroes[1];
        break;
    case 2:
        heroImage0.innerHTML = heroes[2];
        break;
}

