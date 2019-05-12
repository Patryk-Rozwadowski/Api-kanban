var board = {
  name: 'Kanban Board',
  addColumn: function(column) {
    this.element.appendChild(column.element);
  },
  element: document.querySelector('#board .column-container')
};
document.querySelector('#board .create-column').addEventListener('click', function() {
  var name = prompt('Enter a column name');
  var column = new Column(name);

  board.addColumn(column);
});
