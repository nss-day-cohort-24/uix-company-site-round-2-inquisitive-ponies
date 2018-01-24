// Mission Statement
document.getElementById("mission").innerHTML = "<strong>You Got This! </strong>is all about offering your pre-highschool kids opportunities for social interaction and character education in a nurturing environment with engaging and fun activities while minimizing negative peer interations.</p>";

// Team Info //

var teamInfo = [
    {badge: '<img src="../images/Taylor_Bailey_Badge.png">',
    role:'<h2 class="role">Taylor Bailey, Commander <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</p>',
    social: '<img src="../images/twitter.png" style= " width:50px; height:50px;"',},
    
    {badge: '<img src="../images/Brittany_Smith_Badge.png">',
    role:'<h2 class="role">Brittany Smith, Advocate <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</p>',
    social: '<img src="../images/twitter.png" style= " width:50px; height:50px;"',},
    
    {badge: '<img src="../images/Melissa_Wheatley_Badge.png">',
    role:'<h2 class="role">Melissa Wheatley, Logician <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</p>',},

    {badge: '<img src="../images/Mike_Kluge_Badge.png">',
    role:'<h2 class="role">Mike Kluge, Debater <img src="../images/twitter.png" style= " width:50px; height:50px;"><img src="../images/facebook.png" style= " width:50px; height:50px;"><img src="../images/instagram.png" style= " width:50px; height:50px;"></h2>',
    description:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus congue dapibus. Mauris finibus ex ac aliquet imperdiet. Integer a condimentum purus, a bibendum arcu. Nullam enim justo, viverra at nunc ac, elementum placerat magna. Curabitur viverra consectetur tellus quis tincidunt. Aenean massa elit, tempus in lorem non, semper consectetur est. Aliquam ut velit a augue porta faucibus at quis quam. Suspendisse potenti.</p>'}
]

for(i = 0; i < 4; i++) {
    team.innerHTML += '<li class="flex-badge">' + teamInfo[i].badge + teamInfo[i].role  + teamInfo[i].description + '</li>';
}

