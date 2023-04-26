import { createReducer, on } from '@ngrx/store';
import { initialState } from './graphics-cards.state';
import { GraphicsCardsActions } from '.';

export const graphicsCardsReducer = createReducer(
  initialState,
  on(
    GraphicsCardsActions.LoadGraphicsCardsSuccess,
    (state, { graphicsCards }) => ({
      ...state,
      queryString: '',
      graphicsCards,
    })
  ),
  on(GraphicsCardsActions.LoadGraphicsCardsError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GraphicsCardsActions.FilterGraphicsCards, (state, { queryString }) => ({
    ...state,
    queryString,
  })),
  on(GraphicsCardsActions.SetVirtualScrollPosition, (state, { position }) => ({
    ...state,
    virtualScrollPosition: position,
  }))
);
