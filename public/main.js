var listItems = document.querySelector('.todoItems');

listItems.addEventListener('click', function(event) {
  fetch('/delete/' + event.target.id, { method: 'delete' })
    .then(function(res) {
      res.json();
    })
    .then(function() {
      window.location.href = '/tasks';
      event.target.parentNode.removeChild(event.target);
    });
});
