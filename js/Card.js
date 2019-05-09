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
    this.element.parentNode.removeChild(this.element);
  }
}
