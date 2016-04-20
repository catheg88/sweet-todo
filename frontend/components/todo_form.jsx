var React = require('react'),
    TodoStore = require('../stores/todo_store');


var TodoForm = React.createClass({
  getInitialState: function() {
    return ({
      title: "",
      body: "",
      completed: false
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    TodoStore.create(this.state);
    this.setState({title: "", body: ""});
  },

  updateTitle: function(e){
    this.setState({title: e.currentTarget.value});
  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title: <input type="text"
                          // placeholder="title"
                          value={this.state.title}
                          onChange={this.updateTitle} />
          </label>
          <br />
          <label>
            Body: <input type="text"
                        //  placeholder="body"
                         value={this.state.body}
                         onChange={this.updateBody}
            />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
