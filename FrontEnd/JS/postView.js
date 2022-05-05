'use strict';
const url = 'https://localhost:8000';
//const url = 'https://10.114.32.55/app/';

const viewScrollAllPosts = document.querySelector('.viewAllPosts');

const userPostView = JSON.parse(sessionStorage.getItem('user'));

const createScrollablePostCard = (posts) => {

  viewScrollAllPosts.innerHTML = '';

  // Headline for recent posts
  const h2 = document.createElement('h2');
  viewScrollAllPosts.appendChild(h2);

  posts.forEach((post) => {
    // create li with DOM methods
    const img = document.createElement('img');
    img.src = url + '/' + post.PostImage;
    img.width = img.naturalWidth;
    img.height = img.naturalHeight;
    img.alt = `Image of a post created by: ${post.CreatedById}`;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);


    const divAllPosts = document.createElement('div');
    divAllPosts.classList.add('allPosts');

    const p1 = document.createElement('p');
    p1.innerHTML = `PostText: ${post.PostText}`;
    divAllPosts.appendChild(p1);


    const getPostCatAndUser = async () => {
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
        postCatAndUser(category, user);
        console.log(category);
      } catch (e) {
        console.log(e.message);
      }

    }
    getPostCatAndUser();
    const postCatAndUser =  (category, user) => {
      const p2 = document.createElement('p');
      p2.innerHTML = `Post category: ${category.CategoryName}`;
      divAllPosts.appendChild(p2);

      const p3 = document.createElement('p');
      p3.innerHTML = `Post creator: ${user.UserName}`;
      divAllPosts.appendChild(p3);
    }

    const p4 = document.createElement('p');
    p4.innerHTML = `Likes: ${post.PostLike}`;
    divAllPosts.appendChild(p4);


    if (userPostView) {

    if (userPostView === null) {
      const p5 = document.createElement('p');
      p5.innerHTML = 'You are not logged in';
      divAllPosts.appendChild(p5);
    } else if (userPostView.Role === 1 || userPostView.Role === 0) {

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
          const response = await fetch(url + '/post/like/' + post.PostId,
              fetchOptions);
          const updatedPost = await response.json();
          return updatedPost;
        } catch (e) {
          console.log(e.message);
        }
      });
      divAllPosts.appendChild(likeButton);
    }

    if (userPostView === 'null') {
      const p6 = document.createElement('p');
      p6.innerHTML = 'You are not logged in';
      divAllPosts.appendChild(p6);
    } else if (userPostView.Role === 0 || userPostView.UserId === post.CreatedById) {
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.classList.add('likeButton');

      deleteButton.addEventListener('click', async (evt) => {
        evt.preventDefault();
        try {
          const fetchOptions = {
            method: 'DELETE',
            headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            },
          };
          const response = await fetch(url + '/post/' + post.PostId, fetchOptions);
          const deletePost = await response.json();
          console.log('post deleted', deletePost);
          viewAllPosts();
        } catch (e) {
          console.log(e.message);
        }
      });
      divAllPosts.appendChild(deleteButton);
    }

    }

    /*
    const p2 = document.createElement('p');
    p2.innerHTML = `PostCategory: ${post.Category}`;
    divAllPosts.appendChild(p2);

    const p3 = document.createElement('p');
    p3.innerHTML = `Posted by: ${post.CreatedById}`;
    divAllPosts.appendChild(p3);
     */
    const divElement = document.createElement('div');
    divElement.classList.add('postCardDiv');

    divElement.appendChild(figure);
    divElement.appendChild(divAllPosts);
    //divElement.appendChild(likeButton);
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




