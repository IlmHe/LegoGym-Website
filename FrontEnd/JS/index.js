'use strict';
const url = 'http://localhost:3000';
/*
 *Populate right div
 */
const rightDivText = `<h3 class ="headingFont" id ="userNameText"> Usernameasddddddddddddddd </h3>
<p><img src="https://ideascdn.lego.com/media/generate/lego_ci/bcf52b26-a2b1-4975-8c38-59efa86eb254/resize:900:600/legacy" id="profilePic"></p>
<p class = "textFont" id ="divText"> all ultimate gurus believe each other, only great teachers have a volume.  </p>`;

document.querySelector('.right').innerHTML = rightDivText;

/*
 *Populate left div
 */
/*const leftDivText = `<h3 class ="headingFont" id ="userNameText"> Usernameasddddddddddddddd </h3>
<p><img src="https://ideascdn.lego.com/media/generate/lego_ci/bcf52b26-a2b1-4975-8c38-59efa86eb254/resize:900:600/legacy" id="profilePic"></p>
<p class = "textFont" id ="divText"> all ultimate gurus believe each other, only great teachers have a volume.  </p>`;
document.querySelector('.left').innerHTML = leftDivText;*/

// select existing html elements
const ul = document.querySelector('.left');

// create cat cards
const createPostCards = (posts) => {
  // clear ul
  ul.innerHTML = '';
  posts.forEach((post) => {
    // create li with DOM methods
    const img = document.createElement('img');
    img.src = url + '/' + post.filename;
    img.alt = post.name;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerHTML = post.name;

    const p1 = document.createElement('p');
    p1.innerHTML = `PostText: ${post.PostText}`;

    const p2 = document.createElement('p');
    p2.innerHTML = `PostCategory: ${post.Category}`;

    const p3 = document.createElement('p');
    p3.innerHTML = `Posted by: ${post.CreatedById}`;

    const li = document.createElement('li');
    //li.classList.add('light-border');

    li.appendChild(h2);
    li.appendChild(figure);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    ul.appendChild(li);
  });
};

    // AJAX call
    const getPost = async () => {
      try {
        const fetchOptions = {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        };
        const response = await fetch(url + '/post', fetchOptions);
        const posts = await response.json();
        createPostCards(posts);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPost();
