const url3 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lNpU390CCHAJTJVaQl2q/comments';

const getComments = async (ID) => {
    const CONTAINER = document.querySelector('.g-announcements');
  const res = await fetch(`${url3}?item_id=${ID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
//   CONTAINER.innerHTML = '';
  data.forEach((comment) => {
    const eachComment = document.createElement('li');
    eachComment.classList.add('eachcomment');
    eachComment.innerHTML = `<h4>${comment.username}</h4><span>${comment.creation_date} </span><p>${comment.comment}</p><button style="margin-bottom:8px; padding:8px;">Read More</button>`;
    CONTAINER.append(eachComment);
  });
  return data;
};

const addComments = async (COMMENTOBJ, ID) => {
  const res = await fetch(url3, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: COMMENTOBJ.id,
      username: COMMENTOBJ.name,
      comment: COMMENTOBJ.comment,
    }),
  });
  getComments(ID);
  return res;
};

export { addComments, getComments };
