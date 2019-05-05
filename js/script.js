document.addEventListener('DOMContentLoaded', function() {
  function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.element = generateTemplate('column-template', {
      name: this.name,
      id: this.id
    });

    this.element.querySelector('.column').addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-delete')) {
        self.removeColumn();
      }

      if (event.target.classList.contains('add-card')) {
        self.addCard(new Card(prompt("Enter the name of the card")));
      }
    });
  }

  const table = {
    name: 'kanban',
    element: < Node element >
  }

  const column = {
    id: '12j82da20k',
    name: 'todo',
    element: < Node element > // for example document.createElement('div')
  }

  const card = {
    id: '2kd8s958ka',
    description: 'Create Kanban app',
    color: 'green',
    element: < Node element >
  };

  function randomString() {
    var chars = '019ZWRxs5wXtWo5VA8SkAXQKC7uRn7aDtY79u8wDfTUuB38s1sQfaLh.109773641.109773641.109773641.109773641UVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
  }
});
