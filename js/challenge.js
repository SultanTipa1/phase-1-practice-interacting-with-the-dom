document.addEventListener('DOMContentLoaded', function() {
   
    const counter = document.getElementById('counter');
    const minusBtn = document.getElementById('minus');
    const plusBtn = document.getElementById('plus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const submitBtn = document.getElementById('submit');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const likesList = document.querySelector('.likes');
    const commentList = document.getElementById('list');
  
    let count = 0;
    let likes = {};
  
    // Counter
    function updateCounter() {
      counter.textContent = count;
    }
  
    minusBtn.addEventListener('click', function() {
      count--;
      updateCounter();
    });
  
    plusBtn.addEventListener('click', function() {
      count++;
      updateCounter();
    });
  
    heartBtn.addEventListener('click', function() {
      if (likes[count]) {
        likes[count]++;
      } else {
        likes[count] = 1;
      }
      renderLikes();
    });
  
    function renderLikes() {
      likesList.innerHTML = '';
      for (let key in likes) {
        const li = document.createElement('li');
        li.textContent = `${key} has been liked ${likes[key]} time(s)`;
        likesList.appendChild(li);
      }
    }
  
    pauseBtn.addEventListener('click', function() {
      if (pauseBtn.textContent === 'pause') {
        clearInterval(interval);
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        heartBtn.disabled = true;
        submitBtn.disabled = true;
        pauseBtn.textContent = 'resume';
      } else {
        setInterval(incrementCounter, 1000);
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        heartBtn.disabled = false;
        submitBtn.disabled = false;
        pauseBtn.textContent = 'pause';
      }
    });
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const comment = commentInput.value;
      const commentElement = document.createElement('p');
      commentElement.textContent = comment;
      commentList.appendChild(commentElement);
      commentInput.value = '';
    });
  
    let interval = setInterval(incrementCounter, 1000);
  
    function incrementCounter() {
      count++;
      updateCounter();
    }
  });
  