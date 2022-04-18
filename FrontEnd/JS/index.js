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

//Populate right div
const rightDivText = `<h3 class ="headingFont" id ="userNameText"> Usernameasddddddddddddddd </h3>
<p><img src="https://ideascdn.lego.com/media/generate/lego_ci/bcf52b26-a2b1-4975-8c38-59efa86eb254/resize:900:600/legacy" id="profilePic"></p>
<p class = "textFont" id ="divText"> all ultimate gurus believe each other, only great teachers have a volume.  </p>`;

document.querySelector('.right').innerHTML = rightDivText;

//Populate left div
const leftDivText = `<h3 class ="headingFont" id ="userNameText"> Usernameasddddddddddddddd </h3>
<p><img src="https://ideascdn.lego.com/media/generate/lego_ci/bcf52b26-a2b1-4975-8c38-59efa86eb254/resize:900:600/legacy" id="profilePic"></p>
<p class = "textFont" id ="divText"> all ultimate gurus believe each other, only great teachers have a volume.  </p>`;

document.querySelector('.left').innerHTML = leftDivText;