// Mission Statement
document.getElementById("mission").innerHTML = "<strong>You Got This! </strong>is all about helping your children over come evryday challenges and obsticals by encouraging them to take on challanges and learn from their mistakes.</p>";

// Team Info //

var teamInfo = [
    {badge: '<img src="../images/Taylor_Bailey_Badge.png">',
    role:'<h2 class="role">Taylor Bailey, Commander <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>',
    social: '<img src="../images/twitter.png" style= " width:50px; height:50px;"',},
    
    {badge: '<img src="../images/Brittany_Smith_Badge.png">',
    role:'<h2 class="role">Brittany Smith, Advocate <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>',
    social: '<img src="../images/twitter.png" style= " width:50px; height:50px;"',},
    
    {badge: '<img src="../images/Melissa_Wheatley_Badge.png">',
    role:'<h2 class="role">Melissa Wheatley, Logician <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>',},

    {badge: '<img src="../images/Mike_Kluge_Badge.png">',
    role:'<h2 class="role">Mike Kluge, Debater <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</h3>'}
]

for(i = 0; i < 4; i++) {
    team.innerHTML += '<li class="flex-badge">' + teamInfo[i].badge + teamInfo[i].role  + teamInfo[i].description + '</li>';
}

