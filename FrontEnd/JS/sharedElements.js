'use strict';

/*
 * Populate header
 */
const headerText = `
<nav id="navLinks">
<ul class="headingFont">
<li> <a href="index.html"> Home</a> </li>
<li> <a href="postView.html"> Posts</a> </li>
<li> <a href="gymmovesView.html"> Gym Moves</a> </li>
</ul>
</nav>
<p class="profileNav"><a id="profileLink" href="profileView.html"> LegoLover123</a> <img class="profilePic" width="40px" height="50px" src="../Images/ProfilePics/LegoChewbaccaProPic.jpg"> </p>

<button class="headingFont" onclick="location.href='registerView.html'">Login</button>
`;

document.querySelector('header').innerHTML = headerText;

/*
 * Populate footer
 */
const footerText = `
<p class = "footerP textFont">Support: admin@metropolia.fi</p>
<p class = "footerP textFont">Feedback: admin2@metropolia.fi</p>
<p class = "footerP textFont">Want to buy us more legos? Paypal</p>
`;

document.querySelector('footer').innerHTML = footerText;