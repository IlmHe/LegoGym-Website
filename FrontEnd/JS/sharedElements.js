'use strict';

//const urlShared = 'https://localhost:8000';
const urlShared = 'https://10.114.32.55/app/';

// get user data
const user12 = JSON.parse(sessionStorage.getItem('user'));


//Populate header
const headerText = `
<section class="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li onclick="location.href='index.html'">Home</li>
      <li onclick="location.href='postView.html'">Posts</li>
      <li onclick="location.href='gymmovesView.html'">Gym moves</li>
      <li onclick="location.href='profileView.html'">Profile</li>
      <li onclick="location.href='registerView.html'">Login</li>
      <li onclick="location.href='logout.html'">Logout</li>
    </ul>
  </section>

<nav id="navLinks">
<ul class="headingFont" id="navs">
<button id="firstBtn" onclick="location.href='index.html'"> <a class="navBtn"> Home</a> </button>
<button id="midNav" onclick="location.href='postView.html'"> <a class="navBtn"> Posts</a> </button>
<button onclick="location.href='gymmovesView.html'"> <a class="navBtn"> Gym Moves</a> </button>
</ul>
</nav>
<p class="profileNav"> </p>
<nav id="navLinksRight">
<button class="headingFont" onclick="location.href='logout.html'" id="logoutBtn">Logout</button>

<button class="headingFont" onclick="location.href='registerView.html'" id="loginBtn">Login</button>
</nav>
`;

document.querySelector('header').innerHTML = headerText;


//Populate footer
const footerText = `
<p class = "footerP textFont">Support: admin@metropolia.fi</p>
<p class = "footerP textFont">Feedback: admin2@metropolia.fi</p>
<p class = "footerP textFont">Want to buy us more legos? Paypal</p>
`;

document.querySelector('footer').innerHTML = footerText;

const profileNav = document.querySelector('.profileNav');

const createProfileNavCard = (user, profilePic) => {
  profileNav.innerHTML = `<button id="profileLink" onclick="location.href='profileView.html'"> ${user.Username} </button> <img class="profilePic" width="40px" height="50px" src=${profilePic.FilePath}> `;
};

const viewProfileDetail = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const response = await fetch(urlShared + '/user/' + user12.UserId, fetchOptions);
    const user = await response.json();
    const response2 = await fetch(urlShared + '/user/profilepic/'+ user12.UserId, fetchOptions);
    const profilePic = await response2.json();
    createProfileNavCard(user, profilePic);
  } catch (e) {
    console.log(e.message);
  }
}
viewProfileDetail()
