import React from 'react';
import renderWithRedux from './renderWithRedux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/Home';

const listState = {
  display: 'all',
  taskText: '',
  tasks: [
    { id: 189, text: 'redux' },
    { id: 793, text: 'react' },
  ],
  checkedItems: [793],
};

describe('Página Home', () => {
  it('Modais não devem estar na página quando for carregada', () => {
    renderWithRedux(<HomePage/>);
    const colorModal = screen.queryByTestId('color-modal');
    const clearModal = screen.queryByTestId('confirm-modal');
    expect(colorModal).toBeNull();
    expect(clearModal).toBeNull();
  });

  it('Modais devem ser exibidos de acordo com seus eventos', () => {
    renderWithRedux(<HomePage/>);
    const colorBtn = screen.queryByTitle(/Mudar cor/i);
    const clearBtn = screen.queryByTestId('clear-btn');

    expect(screen.queryByTestId('color-modal')).toBeNull();
    expect(screen.queryByTestId('confirm-modal')).toBeNull();

    userEvent.click(colorBtn);
    expect(screen.queryByTestId('color-modal')).toBeInTheDocument();
    expect(screen.queryByTestId('confirm-modal')).toBeNull();
  
    userEvent.click(screen.queryByTestId('return-color-modal'));
    expect(screen.queryByTestId('color-modal')).toBeNull();
    expect(screen.queryByTestId('confirm-modal')).toBeNull();

    userEvent.click(clearBtn);
    expect(screen.queryByTestId('color-modal')).toBeNull();
    expect(screen.queryByTestId('confirm-modal')).toBeInTheDocument();

    userEvent.click(screen.queryByTestId('return-confirm-modal'));
    expect(screen.queryByTestId('color-modal')).toBeNull();
    expect(screen.queryByTestId('confirm-modal')).toBeNull();
  });

  it('Com tarefas existentes os botões do Modal "Remover tarefas" devem mudar', () => {
    renderWithRedux(<HomePage/>, { initialState: { listState } });
    const clearBtn = screen.queryByTestId('clear-btn');

    expect(screen.queryByTestId('confirm-btn')).toBeNull();
    expect(screen.queryByTestId('decline-btn')).toBeNull();
    expect(screen.queryByTestId('confirm-modal')).toBeNull();

    userEvent.click(clearBtn);
    expect(screen.queryByTestId('confirm-modal')).toBeInTheDocument();
    expect(screen.queryByTestId('confirm-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('decline-btn')).toBeInTheDocument();
  });
});
