var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoListItem = require('./todo_list_item');
var TodoForm = require('./todo_form');


var TodoList = React.createClass({
  getInitialState: function(){
    return { list: TodoStore.all() };
  },

  componentDidMount: function(){
    TodoStore.addChangedHandler(this.onChange);
    TodoStore.fetch();
  },

  componentWillUnmount: function(){
    TodoStore.removeChangedHandler(this.onChange);
  },

  onChange: function () {
    var todos = TodoStore.all();
    this.setState({list: todos});
  },

  render: function(){
    return (
      <div>
        {
          this.listTodos()
        }
        <TodoForm />
      </div>
    );
  },

  listTodos: function(){
    var lis = [];

    for(var key in this.state.list){
      lis.push(<TodoListItem key={key} item={this.state.list[key]}/>);
    }

    return lis;
  }
});

module.exports = TodoList;
