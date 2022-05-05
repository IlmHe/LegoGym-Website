'use strict';

//const url = 'https://localhost:8000';
const url = 'https://10.114.32.55/app/'; // change url when uploading to server

// select existing html elements
const loginForm = document.querySelector('#login-form');
const addUserForm = document.querySelector('#addUserForm');

// login
loginForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(loginForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url + '/auth/login', fetchOptions);
  const json = await response.json();
  console.log('login response', json);
  if (!json.user) {
    alert(json.message);
  } else {
    // save token
    sessionStorage.setItem('token', json.token);
    sessionStorage.setItem('user', JSON.stringify(json.user));
    location.href = 'index.html';
  }
});

const propicList = document.querySelector('.select-propic');

const selectPropic = (profilepics) => {
  propicList.innerHTML = '';
  profilepics.forEach((profilepic) => {
    const option = document.createElement('option');
    option.value = profilepic.ProfilePicId;
    option.innerHTML = profilepic.PicName;
    propicList.appendChild(option);
  });
};

const getProfilePics = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/user/profilepic/all', fetchOptions);
    const profilePics = await response.json();
    console.log(profilePics);
    selectPropic(profilePics);
  } catch (e) {
    console.log(e.message);
  }
}
getProfilePics()

// submit register form
addUserForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(addUserForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url + '/auth/register', fetchOptions);
  const json = await response.json();
  alert(json.message);

  addUserForm.reset();
});
