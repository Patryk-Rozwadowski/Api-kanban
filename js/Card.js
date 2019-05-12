function Card(description) {
  var self = this;

  this.id = randomString();
  if (description === '') {
    this.description = 'Bez nazwy';
  } else {
    this.description = description;
  }
  this.element = generateTemplate('card-template', {
    description: this.description
  }, 'li');

  this.element.querySelector('.card').addEventListener('click', function(event) {
    event.stopPropagation();

    if (event.target.classList.contains('icon-close')) {
      self.removeCard();
    }
  });
}

Card.prototype = {
  removeCard: function() {
    var self = this;

    fetch(baseUrl + '/card/' + self.id, {
        method: 'DELETE',
        headers: myHeaders
      })
      .then(function(resp) {
        return resp.json();
      })
      .then(function(resp) {
        self.element.parentNode.removeChild(self.element);
      })
  }
}
