function Column(name) {
  var self = this;

  this.id = randomString();
  if (name === '') {
    this.name = 'Bez nazwy';
  } else {
    this.name = name;
  }
  this.element = generateTemplate('column-template', {
    name: this.name,
    id: this.id
  });

  this.element.querySelector('.column').addEventListener('click', function(event) {
    if (event.target.classList.contains('icon-close')) {
      self.removeColumn();
    }

    if (event.target.classList.contains('add-card')) {
      self.addCard(new Card(prompt("Enter the name of the card")));
    }
  });
}

Column.prototype = {
  addCard: function(card) {
    this.element.querySelector('ul').appendChild(card.element);
  },
  removeColumn: function() {
    this.element.parentNode.removeChild(this.element);
  }
};
