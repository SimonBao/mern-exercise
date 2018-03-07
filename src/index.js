import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const color = Math.random() > 0.5 ? 'green' : 'red';

const Header = ({ message }) => {
    return (
        <div className="Header">
            <h2 className='text-center'>
                {message}
            </h2>
        </div>
    );
};


const App = (props) => {
    return (
        <div className="App">
            <Header message="Hello React" />
            <div>
            </div>
        </div>
    );
};

App.defaultProps = {
    headerMessage: 'hello'
};

ReactDOM.render(
    <App headerMessage={4} />,
    document.getElementById('root')
);