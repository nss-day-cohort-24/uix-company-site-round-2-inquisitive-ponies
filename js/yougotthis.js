var heroImage0 = document.getElementById('heroImage0'); 
var heroImage1 = document.getElementById('heroImage1');
var heroImage2 = document.getElementById('heroImage2'); 

var heroes = [ 
    '<img src="Band.jpg>',
    '<img src="STEM.jpg>',
    '<img src="Archery.jpg>'
    ]

for(i=0; i<heroes.length; i++){
    switch(i){
        case 0:
            heroImage0.innerHTML = heroes[i];
        case 1:
            heroImage1.innerHTML = heroes[i];
        case 2:
            heroImage2.innerHTML = heroes[i];
    }
}

