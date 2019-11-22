var listItems = document.querySelectorAll('.todoItems');

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function(event) {
    fetch('/delete/' + event.target.id, { method: 'delete' })
      .then(function(res) {
        res.json();
      })
      .then(function() {
        window.location.href = '/tasks';
        event.target.parentNode.removeChild(event.target);
      });
  });
}
