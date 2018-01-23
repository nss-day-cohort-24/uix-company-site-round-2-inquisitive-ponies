// Mission Statement
document.getElementById("mission").innerHTML = "<strong>You Got This! </strong>is all about helping your children over come evryday challenges and obsticals by encouraging them to take on challanges and learn from their mistakes. Our programs, each different, are all multi step plans that build confedence and encourage them to always try their best. When your child believes in their ability to overcome mistakes and accomplish tasks all on their own, they will feel empowered to take on challenges in school and in life. While there is no magic key to unlock every child’s inner-confidence, these activities will give them an excellent starting point. The key to helping your child trust in their abilities is look for opportunities to challenge them and then to let them seek solutions on their own.</p>";

// Badges
var badge = document.getElementById('badges');

var badges = [
    '<img src="../images/Taylor_Bailey_Badge.png"',
    '<img src="../images/Brittany_Smith_Badge.png"',
    '<img src="../images/Melissa_Wheatley_Badge.png"',
    '<img src="../images/Mike_Kluge_Badge.png"'
]

// Team Info
var info = document.getElementById('info');

var teamInfo = [
    {role:'<h2>Taylor Bailey, Commander</h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>',
    social: '<img src="../images/twitter.png"',},
    
    {role:'<h2>Brittany Smith, Advocate</h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>',
    social: '<img src="../images/twitter.png"',},
    
    {role:'<h2>Melissa Wheatley, Logician</h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>',
    social: '<img src="../images/twitter.png"',},

    {role:'<h2>Mike Kluge, Debater</h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>',
    social: '<img src="../images/twitter.png"'}
]

for(i = 0; i < 4; i++) {
    badge.innerHTML += '<li class="flex-badge">' + badges[i] + '</li>';
    info.innerHTML += '<li class="flex-info">' + teamInfo[i].role  + teamInfo[i].description + teamInfo[i].social + '</li>';
}
