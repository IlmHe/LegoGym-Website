'use strict';
//const url = 'https://localhost:8000';
const url = 'https://10.114.32.55/app/';

const viewProfileInfo = document.querySelector('.profileViewInfo');

// get user data
const userProView = JSON.parse(sessionStorage.getItem('user'));

const createProfileInfoCard = (user) => {
  viewProfileInfo.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.classList.add('headingFont');
  h2.innerText = 'User details';
  viewProfileInfo.appendChild(h2);

  //get profilepic from db
  const getProfilePic = async () => {
    try {
      const fetchOptions = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const response = await fetch(url + '/user/profilepic/' + user.UserId,
          fetchOptions);
      const profilePic = await response.json();
      console.log(profilePic);
      profilePicCard(profilePic);
    } catch (e) {
      console.log(e.message);
    }
  };
  getProfilePic();

  //populate profile pic into html
  const profilePicCard = (profilePic) => {

    const img = document.createElement('img');
    img.src = profilePic.FilePath;
    img.width = img.naturalWidth;
    img.height = img.naturalHeight;
    img.alt = `Image of users profile picture`;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);
    viewProfileInfo.appendChild(figure);
  };

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

  divElement.appendChild(divProfileDetail);
  viewProfileInfo.appendChild(divElement);
};

const categoryList = document.querySelector('.select-category');


const addPostCard = (categories) => {
  categoryList.innerHTML = '';

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.CategoryId;
    option.innerHTML = category.CategoryName;
    categoryList.appendChild(option);
  });
};

const creatorId = document.querySelector('#loggedinuser');

creatorId.innerHTML = '';
const option = document.createElement('option');
option.value = userProView.UserId;
option.innerHTML = userProView.Username;
creatorId.appendChild(option);

const postForm = document.querySelector('#addPostForm');

//checks who you are, then shows correct profile. proview is token
const viewProfileDetailInProView = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/user/' + userProView.UserId,
        fetchOptions);
    const user = await response.json();
    createProfileInfoCard(user);
  } catch (e) {
    console.log(e.message);
  }
};
viewProfileDetailInProView();

postForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(postForm);
  const fetchOptions = {
    method: 'POST',
    body: fd,
  };

  const response = await fetch(url + '/post', fetchOptions);
  const json = await response.json();
  alert(json.message);
});

const getCategories = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/user/category/all', fetchOptions);
    const categories = await response.json();
    console.log(categories);
    addPostCard(categories);
  } catch (e) {
    console.log(e.message);
  }
};
getCategories();
