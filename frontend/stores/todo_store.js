var _todos = {};
var _callbacks = [];

var TodoStore = {
  changed: function(){
    for(var i = 0; i < _callbacks.length; i++)
      _callbacks[i]();
  },
  
  addChangedHandler: function(cb){
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb){
    for(var i = 0; i < _callbacks.length; i++)
      if(cb === _callbacks[i])
        _callbacks.splice(i, 1);
  },

  all: function(){
    return Object.assign({}, _todos);
  },

  resetTodos: function(todos){
    for(var i = 0; i < todos.length; i++)
      _todos[todos[i].id] = todos[i];
  },

  addTodo: function(todo){
    _todos[todo.id] = todo;
  },

  removeTodo: function(todo){
    delete _todos[todo.id];
  },

  fetch: function(){
    var store = this;
    $.ajax({
      url: "/api/todos",
      method: "GET",
      success: function (todos) {
        // put them into our _todos variable
        store.resetTodos(todos);
        // execute the callbacks
        store.changed();
      }
    });
  },
  create: function(todoData){
    var store = this;
    $.ajax({
      url: "/api/todos",
      method: "POST",
      data: {todo: todoData},
      success: function(todo) {
        store.addTodo(todo);
        store.changed();
      }
    });
  },

  destroy: function(id){
    var store = this;
    if(_todos[id]){
      $.ajax({
        url: "/api/todos/"+id,
        method: "DELETE",
        success: function(todo){
          store.removeTodo(todo);
          store.changed();
        }
      });
    }
  },

  toggleDone: function(id){
    var store = this;
    var newCompletedState = !_todos[id].completed;
    $.ajax({
      url: "/api/todos/"+id,
      method: "PATCH",
      data: {todo: {completed: newCompletedState}},
      success: function(todo) {
        store.addTodo(todo);
        store.changed();
      }
    });
  }
};






module.exports = TodoStore;
