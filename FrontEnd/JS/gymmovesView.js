'use strict';
const url = 'https://localhost:8000';
//const url = 'https://10.114.32.55/app/';

const viewScrollAllGymMoves = document.querySelector('.allGymMoves');

const createScrollableGymMoveCard = (moves) => {

  /*
  const getGymMoveCategoryName = async () => {
    try {
      const fetchOptions = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
      const responseCategory = await fetch(url + '/gymMove/categoryname/'+moves.Category, fetchOptions);
      const category = await responseCategory.json();
      createScrollableGymMoveCard(category);
    } catch (e) {
      console.log(e.message);
    }
  }
  getGymMoveCategoryName();

   */

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
      divAllMoves.appendChild(p2);

    }

    const p3 = document.createElement('p');
    p3.innerHTML = `Likes: ${move.Likes}`;
    divAllMoves.appendChild(p3);

    //TODO fix button
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
        return updatedMove;
      } catch (e) {
        console.log(e.message);
      }
    });

    const divElement = document.createElement('div');
    divElement.classList.add('moveCardDiv');



    divElement.appendChild(figure);
    divElement.appendChild(divAllMoves);
    divElement.appendChild(likeButton);
    viewScrollAllGymMoves.appendChild(divElement);

  });
}

const viewAllMoves = async () => {
  try {

    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    const responseMoves = await fetch(url + '/gymMove/', fetchOptions);
    const moves = await responseMoves.json();
   // const responseCategory = await fetch(url + '/gymMove/categoryname/'+7, fetchOptions);
   // const category = await responseCategory.json();
   // const responseUpdateLike = await fetch(url + '/gymMove/like/'+7, fetchOptions);
   // const updateLike = await responseUpdateLike.json();
    createScrollableGymMoveCard(moves);
  } catch (e) {
    console.log(e.message);
  }

}
viewAllMoves();

/*
const getGymMoveCategoryName = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const response = await fetch(url + 'gymMove/categoryname/', fetchOptions);
    const category = await response.json();
    createScrollableGymMoveCard(category);
  } catch (e) {
    console.log(e.message);
  }
}
getGymMoveCategoryName();

 */