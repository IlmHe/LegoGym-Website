(async () => {
  'use strict';
  //const url = 'https://localhost:8000';
  const url = 'https://10.114.32.55/app/'; // change url when uploading to server

  // check sessionStorage
  if (!sessionStorage.getItem('token') || !sessionStorage.getItem('user')) {
    location.href = 'registerView.html';
    return;
  }

})();