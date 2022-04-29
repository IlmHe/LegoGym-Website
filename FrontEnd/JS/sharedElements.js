'use strict';

/*
 * Populate header
 */
const headerText = `
<section class="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </section>

<nav id="navLinks">
<ul class="headingFont" id="navs">
<button> <a class="navBtn" href="index.html"> Home</a> </button>
<button id="midNav"> <a class="navBtn" href="postView.html"> Posts</a> </button>
<button> <a class="navBtn" href="gymmovesView.html"> Gym Moves</a> </button>
</ul>
</nav>
<p class="profileNav"><a id="profileLink" href="profileView.html"> LegoLover123</a> <img class="profilePic" width="40px" height="50px" src="../Images/ProfilePics/LegoChewbaccaProPic.jpg"> </p>

<button class="headingFont" onclick="location.href='registerView.html'" id="loginBtn">Login</button>
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