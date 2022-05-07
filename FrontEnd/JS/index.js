'use strict';


//const url = 'https://localhost:8000';
const url = 'https://10.114.32.55/app/';


// select existing html elements
const ul = document.querySelector('.left');

// select existing html elements middle
const articleMiddle = document.querySelector('.middle');

// create post card
const createPostCards = (posts) => {

  ul.innerHTML = '';

  // Headline for recent posts
  const h2 = document.createElement('h2');
  h2.classList.add('headingFont');
  h2.innerText = 'Recent Posts';
  ul.appendChild(h2);

  posts.forEach((post) => {
    const img = document.createElement('img');
    img.src = url + '/' + post.PostImage;
    img.width = img.naturalWidth;
    img.height = img.naturalHeight;
    img.alt = `Image of a post created by: ${post.CreatedById}`;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);

    const li = document.createElement('li');

    const p1 = document.createElement('p');
    p1.innerHTML = `PostText: ${post.PostText}`;


    //Gets two recent posts from db
    const recentPostAndCategory = async () => {

      try {
        const fetchOptions = {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };

        const responseCategory = await fetch(url + '/post/categoryname/'+ post.PostId, fetchOptions);
        const category = await responseCategory.json();
        const responseUser = await fetch(url + '/post/creatorname/' + post.PostId, fetchOptions);
        const user = await responseUser.json();
        postCategoryPost(category, user);
        console.log(category);
      } catch (e) {
        console.log(e.message);
      }
    }

    //Puts two recent posts into index.html
    recentPostAndCategory();
    const postCategoryPost =  (category, user) => {
      const p2 = document.createElement('p');
      p2.innerHTML = `Post category: ${category.CategoryName}`;

      const p3 = document.createElement('p');
      p3.innerHTML = `Posted by: ${user.UserName}`;

      li.appendChild(p2);
      li.appendChild(p3);
    }

    li.appendChild(figure);
    li.appendChild(p1);
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
        const response = await fetch(url + '/post/recent/:recent', fetchOptions);
        const posts = await response.json();
        createPostCards(posts);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPost();

    // Create MoveoftheDay card
const createMoveOfTheDayCard = (move) => {

  articleMiddle.innerHTML = '';

  // Headline for move of the day
  const h2 = document.createElement('h2');
  h2.classList.add('headingFont');
  h2.classList.add('h2Text');
  h2.innerText = 'Gym Move of the Day';
  articleMiddle.appendChild(h2);

  const img = document.createElement('background-image');
  img.style.backgroundImage =  `url(${move.MovePicture})`;

  img.alt = `Image of the gym move of the day: ${move.MoveName}`;
  img.classList.add('resp');

  const figure = document.createElement('figure').appendChild(img);
  figure.classList.add('imgMotD');

  const divMotD = document.createElement('div');
  divMotD.classList.add('MotDInfo');

  const p1 = document.createElement('p');
  p1.innerHTML = `MoveName: ${move.MoveName}`;
  divMotD.appendChild(p1);


  //Gets category for move of the day
  const getMoveCategoryName = async () => {
    try {
      const fetchOptions = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };

      const responseCategory = await fetch(url + '/gymMove/categoryname/'+ move.GymMoveId, fetchOptions);
      const category = await responseCategory.json();
      moveCategory(category);
      console.log(category);
    } catch (e) {
      console.log(e.message);
    }

  }

  getMoveCategoryName();
  const moveCategory =  (category) => {
    const p2 = document.createElement('p');
    p2.innerHTML = `Move category: ${category.CategoryName}`;
    divMotD.appendChild(p2);
  }

  const p3 = document.createElement('p');
  p3.innerHTML = `Likes: ${move.Likes}`;
  divMotD.appendChild(p3);

  const article = document.createElement('article');
  article.classList.add('MotD');

  article.appendChild(figure);
  article.appendChild(divMotD);
  articleMiddle.appendChild(article);
}

// AJAX call
const getMoveofTheDay = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/gymMove/moveoftheday/:moveoftheday', fetchOptions);
    const move = await response.json();
    createMoveOfTheDayCard(move);
  } catch (e) {
    console.log(e.message);
  }
};
getMoveofTheDay();
