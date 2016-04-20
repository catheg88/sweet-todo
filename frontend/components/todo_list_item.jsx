var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          {this.props.item.title}
        </div>
        <div>
          {this.props.item.body}
        </div>
      </div>
    );
  }
});

module.exports = TodoListItem;
