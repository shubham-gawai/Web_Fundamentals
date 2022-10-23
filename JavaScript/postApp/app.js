let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('button clicked');
  checkFormValidation();
});

let checkFormValidation = function () {
  console.log(input.value);
  // if form input present, log success
  if (input.value != '') {
    console.log('success');
    msg.innerText = '';
    acceptData();
  }
  // else form input empty, then print a msg
  else {
    console.log('failure');
    msg.innerText = 'Add some text, empty post not allowed!';
  }
};

// C : Creating/adding the post

//initial case: when data obj is empty
let data = {};

let acceptData = function () {
  data['text'] = input.value;
  console.log(data);
  readPosts();
};

// R : Reading the posts

let readPosts = function () {
  posts.innerHTML += ` <div>
    <p>${data.text}</p>
    <span class="options">
      <i class="fa-regular fa-pen-to-square" onClick="editPost(this)"></i>
      <i class="fa-regular fa-trash-can" onClick="deletePost(this)"></i>
    </span>
  </div>`;
  input.value = '';
};

// U: Updating the post
let editPost = function (e) {
  // pre-filling existing value in text box
  input.value = e.parentElement.previousElementSibling.innerHTML;
  console.log('edit', e.parentElement.previousElementSibling.innerHTML);
  e.parentElement.parentElement.remove();
};

// D: Deleting a post
let deletePost = function (e) {
  e.parentElement.parentElement.remove();
  console.log('delete', e.parentElement.parentElement);
};

// document.getElementById
//     .innerHTML
//     .innerText
//     .parentElement
// .previousElementSibling
