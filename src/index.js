import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

const App = () => {
  return (
    <Button variant="primary">Click me</Button>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
