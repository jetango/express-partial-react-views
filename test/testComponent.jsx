var React = require('React/addons');
var Hello = React.createClass({
  
  render: function() {  
    return <div>Hello World!{this.props.name}</div>; 
  }
  
});
 
module.exports = Hello;