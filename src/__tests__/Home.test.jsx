import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../Pages/Home';
import store from '../Redux/configureStore';

describe('Renders Home tests', () => {
  it('Renders Home component', () => {
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Renders home seccions', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByText(/All Game Series/i)).toBeInTheDocument();
    expect(document.querySelector('.header-text')).toBeInTheDocument();
    expect(document.querySelector('.header-amiibocontainer')).toBeInTheDocument();
  });
});