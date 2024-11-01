
// JavaScript to handle comment submission
function submitComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentDisplay = document.getElementById('commentDisplay');

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentInput.value;

    commentDisplay.appendChild(newComment);
    commentInput.value = '';
}
