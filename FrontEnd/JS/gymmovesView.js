'use strict';

const url = 'http://localhost:3000';

const viewScrollAllGymMoves = document.querySelector('.allGymMoves');

const createScrollableGymMoveCard = (moves) => {

  viewScrollAllGymMoves.innerHTML = '';

  // Headline for recent posts
  const h2 = document.createElement('h2');
  h2.classList.add('headingFont');
  h2.innerText = 'Gym Moves';
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

    const p2 = document.createElement('p');
    p2.innerHTML = `Move category: ${move.Category}`;
    divAllMoves.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML = `Likes: ${move.Likes}`;
    divAllMoves.appendChild(p3);

    const divElement = document.createElement('div');
    divElement.classList.add('moveCardDiv');

    divElement.appendChild(figure);
    divElement.appendChild(divAllMoves);
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
    const response = await fetch(url + '/gymMove/', fetchOptions);
    const moves = await response.json();
    createScrollableGymMoveCard(moves);
  } catch (e) {
    console.log(e.message);
  }

}
viewAllMoves();