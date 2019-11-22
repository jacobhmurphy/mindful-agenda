var listItems = document.querySelector('.todoItems');

listItems.addEventListener('click', function(event) {
  console.log(event.target.id);
  fetch('/delete/' + event.target.id, { method: 'delete' })
    .then(function(res) {
      res.json();
    })
    .then(function() {
      window.location.href = '/';
      event.target.parentNode.removeChild(event.target);
    });
});
