'use strict';
//Populate header
const headerText = `
<nav id="navLinks">
<ul class="headingFont">
<li> <a href="front.html"> Koti</a> </li>
<li> <a href="front.html"> Koti2</a> </li>
<li> <a href="front.html"> Koti3</a> </li>
</ul>
</nav>
<button class="headingFont">Login</button>
`;

document.querySelector('header').innerHTML = headerText;

//Populate footer
const footerText = `
<p class = "footerP textFont">Support: admin@metropolia.fi</p>
<p class = "footerP textFont">Feedback: admin2@metropolia.fi</p>
<p class = "footerP textFont">Want to buy us more legos? Paypal</p>
`;

document.querySelector('footer').innerHTML = footerText;