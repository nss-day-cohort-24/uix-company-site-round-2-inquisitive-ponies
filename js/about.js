// Mission Statement
document.getElementById("mission").innerHTML = "<strong>You Got This! </strong>is all about helping your children over come evryday challenges and obsticals by encouraging them to take on challanges and learn from their mistakes. Our programs, each different, are all multi step plans that build confedence and encourage them to always try their best. When your child believes in their ability to overcome mistakes and accomplish tasks all on their own, they will feel empowered to take on challenges in school and in life. While there is no magic key to unlock every child’s inner-confidence, these activities will give them an excellent starting point. The key to helping your child trust in their abilities is look for opportunities to challenge them and then to let them seek solutions on their own.</p>";

var badge = document.getElementById('badges');

var badges = [
    '<img src="../images/Taylor_Bailey_Badge.png"',
    '<img src="../images/Brittany_Smith_Badge.png"',
    '<img src="../images/Melissa_Wheatley_Badge.png"',
    '<img src="../images/Mike_Kluge_Badge.png"'
]

for(i = 0; i < badges.length; i++) {
    badge.innerHTML += '<li class="flex-badge">' + badges[i] + '</li>';
}


