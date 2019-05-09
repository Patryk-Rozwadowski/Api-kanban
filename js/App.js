function randomString() {
    var chars = '019ZWRxs5wXtWo5VA8SkAXQKC7uRn7aDtY79u8wDfTUuB38s1sQfaLh.109773641.109773641.109773641.109773641.109773641.109773641.109773641.109773641.109773641.109773641.109773641.109773641UVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  function initSortable(id) {
    var el = document.getElementById(id);
    var sortable = Sortable.create(el, {
      group: 'kanban',
      sort: true
    });
  }

  function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
  }

  // CREATING COLUMNS
  var todoColumn = new Column('To do');
  var doingColumn = new Column('Doing');
  var doneColumn = new Column('Done');

  // ADDING COLUMNS TO THE BOARD
  board.addColumn(todoColumn);
  board.addColumn(doingColumn);
  board.addColumn(doneColumn);

  // CREATING CARDS
  var card1 = new Card('New task');
  var card2 = new Card('Create kanban boards');
  var card3 = new Card('Make coffe');
  // ADDING CARDS TO COLUMNS
  todoColumn.addCard(card1);
  doingColumn.addCard(card2)
  doneColumn.addCard(card3);
