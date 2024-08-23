import React from 'react';
import { render } from '@testing-library/react';
import Comp from '..';
import { BrowserRouter as Router } from "react-router-dom";
import { PageProvider } from 'providers/page';

// tests if the main component is rendering
it('renders the component with the correct container className', () => {
  const {
    container
  } = render(<Router><PageProvider><Comp /></PageProvider></Router>);
  expect(container.firstChild)
    .toHaveClass('atom__bullet-container');
});

