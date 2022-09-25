import { addComments } from "../posts.js";

const staffPost = () => {
    const staffPostPage = document.querySelector('#post');
    const commentForm = document.createElement('form');
    commentForm.classList.add('comment-form');
    commentForm.id = 1;
    const formHeading = document.createElement('h3');
    formHeading.innerHTML = 'Add a comment';
    const formInput = document.createElement('input');
    formInput.classList.add('comment-user');
    formInput.setAttribute('type', 'text');
    formInput.placeholder = 'Your name';
    formInput.id = 'name';
    const textArea = document.createElement('textarea');
    textArea.classList.add('user-comments');
    textArea.setAttribute('name', 'comment');
    textArea.placeholder = 'Your insights';
    const formButton = document.createElement('button');
    formButton.setAttribute('type', 'submit');
    formButton.classList.add('submit-Btn');
    formButton.innerHTML = 'Comment';
  
    commentForm.appendChild(formHeading);
    commentForm.appendChild(formInput);
    commentForm.appendChild(textArea);
    commentForm.appendChild(formButton);
    staffPostPage.appendChild(commentForm);

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentId = 1;
        const name = formInput.value;
        const commentValue = textArea.value;
        const commentObj = {
          id: commentId,
          name,
          comment: commentValue,
        };
    
        formInput.value = '';
        textArea.value = '';
        // const comments = commentsContainer;
        addComments(commentObj, commentId);
      });
    //   getComments(commentForm.id, commentsContainer);
    console.log(commentObj);
    };
export default staffPost;