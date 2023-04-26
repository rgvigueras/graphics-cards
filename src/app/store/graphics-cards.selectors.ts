import { createSelector } from '@ngrx/store';
import { GraphicCard } from '../graphics-cards/graphics-cards.model';
import { GraphicsCardsState } from './graphics-cards.state';

export const selectAllState = (state: any) => state.gc;

export const selectGraphicsCards = createSelector(
  selectAllState,
  (state: GraphicsCardsState) => state.graphicsCards
);

export const selectVirtualScrollPosition = createSelector(
  selectAllState,
  (state: GraphicsCardsState) => state.virtualScrollPosition
);

export const selectQueryString = createSelector(
  selectAllState,
  (state: GraphicsCardsState) => state.queryString
);

export const selectFilteredCards = (queryString: string) =>
  createSelector(selectAllState, (state: GraphicsCardsState) =>
    queryString.trim() === ''
      ? state.graphicsCards
      : state.graphicsCards.filter((card) =>
          card.name.toLowerCase().includes(queryString.toLowerCase())
        )
  );

export const selectGraphicsCardById = (id: number) =>
  createSelector(selectGraphicsCards, (graphicsCards: GraphicCard[]) =>
    graphicsCards.find((card: GraphicCard) => card.id === id)
  );
