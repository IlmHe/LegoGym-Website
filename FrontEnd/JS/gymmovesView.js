'use strict';
//const url = 'https://localhost:8000';
const url = 'https://10.114.32.55/app/';

const viewScrollAllGymMoves = document.querySelector('.allGymMoves');

const userGymMovesView = JSON.parse(sessionStorage.getItem('user'));


//Adds gym moves(parameter) to the html page

const createScrollableGymMoveCard = (moves) => {

  viewScrollAllGymMoves.innerHTML = '';

  // Headline for recent posts
  const h2 = document.createElement('h2');
  viewScrollAllGymMoves.appendChild(h2);

  moves.forEach((move) => {

    // create li with DOM methods
    const img = document.createElement('img');
    img.src = move.MovePicture;
    img.width = 300;
    img.height = 300;
    img.alt = `Image of a Lego Gym Move`;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);

    const divAllMoves = document.createElement('div');
    divAllMoves.classList.add('allMoves');

    const p1 = document.createElement('p');
    p1.innerHTML = `Name of the move: ${move.MoveName}`;
    divAllMoves.appendChild(p1);

    //Gets category name for gym move
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
      } catch (e) {
        console.log(e.message);
      }
    }
    getMoveCategoryName();

    const moveCategory =  (category) => {
      const p2 = document.createElement('p');
      p2.innerHTML = `Move category: ${category.CategoryName}`;
      divAllMoves.appendChild(p2);
    }

    const p3 = document.createElement('p');
    p3.innerHTML = `Likes: ${move.Likes}`;
    divAllMoves.appendChild(p3);

    //if logged in, then like button shows/works
    if (userGymMovesView) {
      const likeButton = document.createElement('button');
      likeButton.innerText = 'Like';
      likeButton.classList.add('likeButton');
      likeButton.addEventListener('click', async (evt) => {
        evt.preventDefault();
        try {
          const fetchOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          };
          const response = await fetch(url + '/gymMove/like/' + move.GymMoveId, fetchOptions);
          const updatedMove = await response.json();
          console.log('Move liked', updatedMove);
          viewAllMoves();
        } catch (e) {
          console.log(e.message);
        }
      });
      divAllMoves.appendChild(likeButton);
    }

    const divElement = document.createElement('div');
    divElement.classList.add('moveCardDiv');

    divElement.appendChild(figure);
    divElement.appendChild(divAllMoves);
    viewScrollAllGymMoves.appendChild(divElement);
  });
}

//fetches all gym moves from db and calls createScrollableGymMoveCard
const viewAllMoves = async () => {
  try {

    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    const responseMoves = await fetch(url + '/gymMove/', fetchOptions);
    const moves = await responseMoves.json();
    createScrollableGymMoveCard(moves);
  } catch (e) {
    console.log(e.message);
  }
}

viewAllMoves();
