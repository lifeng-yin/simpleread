import React from 'react';
import ReactDOM from 'react-dom';
import Hamburger from './Hamburger';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hamburger />, div);
  ReactDOM.unmountComponentAtNode(div);
});