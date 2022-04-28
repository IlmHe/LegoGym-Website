'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

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
  //location.href = 'index.html';
});
