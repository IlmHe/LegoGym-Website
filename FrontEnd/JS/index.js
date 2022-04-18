'use strict';

const text = `
<nav id="navLinks">
<ul>
<li> <a href="front.html"> Koti</a> </li>
<li> <a href="front.html"> Koti2</a> </li>
<li> <a href="front.html"> Koti3</a> </li>
</ul>
<button>Login</button>
</nav>`;

document.querySelector('.headerClass').innerHTML = text;