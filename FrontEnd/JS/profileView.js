'use strict';

const url = 'http://localhost:3000';

const viewProfileInfo = document.querySelector('.profileViewInfo');

const createProfileInfoCard = (user) => {
    viewProfileInfo.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.classList.add('headingFont');
  h2.innerText = 'User details';
  viewProfileInfo.appendChild(h2);

  const getProfilePic = async () => {
    try {
      const fetchOptions = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const response = await fetch(url + '/user/profilepic/'+ user.UserId, fetchOptions);
      const profilePic = await response.json();
      console.log(profilePic);
      profilePicCard(profilePic);
    } catch (e) {
      console.log(e.message);
    }
  }
  getProfilePic()

  const profilePicCard = (profilePic) => {

    const img = document.createElement('img');
    img.src =  profilePic.FilePath;
    img.width = 160;
    img.height = 160;
    img.alt = `Image of users profile picture`;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);
    viewProfileInfo.appendChild(figure);
  }

    const divProfileDetail = document.createElement('div');
    divProfileDetail.classList.add('divProfileDetail');

    const p1 = document.createElement('p');
    p1.innerHTML = `Username: ${user.Username}`;
    divProfileDetail.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerHTML = `Email: ${user.Email}`;
    divProfileDetail.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML = `Profile text: ${user.ProfileText}`;
    divProfileDetail.appendChild(p3);

    const divElement = document.createElement('div');
    divElement.classList.add('profileCardDiv');

    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    updateButton.classList.add('updateButton');
    updateButton.addEventListener('click', () => {
      window.location.href = 'http://localhost:3000/updateProfile';
    });

    divElement.appendChild(divProfileDetail);
    divElement.appendChild(updateButton);
    viewProfileInfo.appendChild(divElement);
}

const viewProfileDetail = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/user/2', fetchOptions);
    const user = await response.json();
    createProfileInfoCard(user);
  } catch (e) {
    console.log(e.message);
  }
}
viewProfileDetail()

const addPostForm = document.querySelector('#addPostForm');

addPostForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addPostForm);
  const fetchOptions = {
    method: 'POST',
    body: fd,
  };

  const response = await fetch(url + '/post', fetchOptions);
  const json = await response.json();
  alert(json.message);
  //location.href = 'index.html';
});

/*
//Populate right div
const rightDivText = `<h3 class ="headingFont" id ="userNameText"> POSTS GO HERE!!  </h3>
<p><img src="https://ideascdn.lego.com/media/generate/lego_ci/bcf52b26-a2b1-4975-8c38-59efa86eb254/resize:900:600/legacy" id="postPic"></p>
<p class = "textFont" id ="divText"> all ultimate gurus believe each other, only great teachers have a volume.  </p>`;

document.querySelector('.right').innerHTML = rightDivText;

//Populate left div
const leftDivText = `<h3 class ="headingFont" id ="userNameText"> Usernameasddddddddddddddd </h3>
<p><img src="https://ideascdn.lego.com/media/generate/lego_ci/bcf52b26-a2b1-4975-8c38-59efa86eb254/resize:900:600/legacy" id="postPic"></p>
<p class = "textFont" id ="divText"> all ultimate gurus believe each other, only great teachers have a volume.  </p>`;

document.querySelector('.left').innerHTML = leftDivText;

 */