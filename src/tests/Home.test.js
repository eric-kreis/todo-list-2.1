import React from 'react';
import myRender from './myRender';
import { screen, cleanup } from '@testing-library/react';
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

beforeEach(() => cleanup());

describe('Home Page / Modais', () => {
  it('Modais não devem estar na página quando for carregada', () => {
    myRender(<HomePage/>);
    const colorModal = screen.queryByTestId('color-modal');
    const clearModal = screen.queryByTestId('confirm-modal');
    expect(colorModal).toBeNull();
    expect(clearModal).toBeNull();
  });

  it('Modais devem ser exibidos de acordo com seus eventos', () => {
    myRender(<HomePage/>);
    const colorBtn = screen.queryByTestId('color-btn');
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
    myRender(<HomePage/>, { initialState: { listState } });
    const clearBtn = screen.queryByTestId('clear-btn');

    expect(screen.queryByTestId('confirm-btn')).toBeNull();
    expect(screen.queryByTestId('decline-btn')).toBeNull();
    expect(screen.queryByTestId('confirm-modal')).toBeNull();

    userEvent.click(clearBtn);
    expect(screen.queryByTestId('confirm-modal')).toBeInTheDocument();
    expect(screen.queryByTestId('confirm-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('decline-btn')).toBeInTheDocument();
  });

  it('Os valor dos botões do Modal de cor devem representar uma cor', () => {
    myRender(<HomePage/>);
    const colorBtn =  screen.queryByTestId('color-btn');

    userEvent.click(colorBtn);
    expect(screen.getByTitle('Verde')).toBeInTheDocument();
    expect(screen.getByTitle('Rosa')).toBeInTheDocument();
  });

  // it('Os botões do Modal de cor devem mudar a cor do tema', () => {
  //   const changeColor = jest.fn();

  //   const { theme } = myRender(<HomePage/>);
  //   const colorBtn =  screen.queryByTestId('color-btn');

  //   userEvent.click(colorBtn);
  //   userEvent.click(screen.getByTitle('Rosa'));
  //   expect(theme.title).toBe('dark');
  //   expect(theme.colors.secondary).toBe('#C2405D');
  // });
});

// describe('Home Page / Temas', () => {
//   it('Testa ')
// });
