'use strict';

const url = 'https://localhost:8000';
//const url = 'https://10.114.32.55/app/';

(async () => {
  try {
    const response = await fetch(url + '/auth/logout');
    const json = await response.json();
    console.log(json);
    // remove token
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    alert('You have logged out');
    location.href = 'index.html';
  } catch (e) {
    console.log(e.message);
  }
})();