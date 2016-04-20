var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoList = require('./components/todo_list');

var Todos = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Todo</h1>
        <TodoList />
      </div>
    );
  }
});



document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Todos />, document.getElementById('root'));
});
