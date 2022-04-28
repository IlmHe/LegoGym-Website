'use strict';

const url = 'http://localhost:3000';

const viewScrollAllPosts = document.querySelector('.viewAllPosts');

const createScrollablePostCard = (posts) => {

  viewScrollAllPosts.innerHTML = '';

  // Headline for recent posts
  const h2 = document.createElement('h2');
  h2.classList.add('headingFont');
  h2.innerText = 'Posts';
  viewScrollAllPosts.appendChild(h2);

  posts.forEach((post) => {
    // create li with DOM methods
    const img = document.createElement('img');
    img.src = url + '/' + post.PostImage;
    //TODO change size of image later
    img.width = 160;
    img.height = 160;
    img.alt = `Image of a post created by: ${post.CreatedById}`;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);


    const divAllPosts = document.createElement('div');
    divAllPosts.classList.add('allPosts');

    const p1 = document.createElement('p');
    p1.innerHTML = `PostText: ${post.PostText}`;
    divAllPosts.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerHTML = `PostCategory: ${post.Category}`;
    divAllPosts.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML = `Posted by: ${post.CreatedById}`;
    divAllPosts.appendChild(p3);

    const divElement = document.createElement('div');
    divElement.classList.add('postCardDiv');

    divElement.appendChild(figure);
    divElement.appendChild(divAllPosts);
    viewScrollAllPosts.appendChild(divElement);

  });
}

const viewAllPosts = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/post/', fetchOptions);
    const posts = await response.json();
    createScrollablePostCard(posts);
  } catch (e) {
    console.log(e.message);
  }

}
viewAllPosts();