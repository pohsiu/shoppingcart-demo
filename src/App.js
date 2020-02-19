import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography>Shopping Cart</Typography>
        <List />
        <Typography>Subtotal: ${subtotal}</Typography>
      </Container>
    </div>
  );
}

export default App;
