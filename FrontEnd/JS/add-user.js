'use strict';
//const url = 'https://localhost:8000';
const url = 'https://10.114.32.55/app/'; // change url when uploading to server

const addUserForm = document.querySelector('#addUserForm');

/**
 * POST method to add a new user to the database
 */

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

  const response = await fetch(url + '/user', fetchOptions);
  const json = await response.json();
  alert(json.message);
});



