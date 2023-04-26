import { GraphicCard } from '../graphics-cards/graphics-cards.model';

export interface GraphicsCardsState {
  graphicsCards: GraphicCard[];
  virtualScrollPosition: number;
  queryString: string;
  error: any;
}

export const initialState: GraphicsCardsState = {
  graphicsCards: [],
  virtualScrollPosition: 0,
  queryString: '',
  error: null,
};
