'use strict';

export const getPostCatAndUser = async () => {
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
getPostCatAndUser()