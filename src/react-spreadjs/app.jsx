var React = require('react');
var ReactDOM = require('react-dom');

alert(123);

class Hello extends React.Component {
    render() {
        return (
            <h1>Welcome to React!!</h1>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));