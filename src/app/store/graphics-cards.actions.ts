import { createAction, props } from '@ngrx/store';
import { GraphicCard } from '../graphics-cards/graphics-cards.model';

export const LoadGraphicsCards = createAction('[GraphicsCards] Load');
export const LoadGraphicsCardsSuccess = createAction(
  '[GraphicsCards] Load Success',
  props<{ graphicsCards: GraphicCard[] }>()
);
export const LoadGraphicsCardsError = createAction(
  '[GraphicsCards] Load Error',
  props<{ error: any }>()
);
export const FilterGraphicsCards = createAction(
  '[GraphicsCards] Filter',
  props<{ queryString: string }>()
);
export const SetVirtualScrollPosition = createAction(
  '[VirtualScroll] Set Position',
  props<{ position: number }>()
);
