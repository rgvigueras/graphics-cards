import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as AppActions from './graphics-cards.actions';
import { GraphicsCardsService } from '../graphics-cards/graphics-cards.service';
import { of } from 'rxjs';
import { GraphicCard } from '../graphics-cards/graphics-cards.model';

@Injectable()
export class GraphicsCardsEffects {
  constructor(
    private actions$: Actions,
    private graphicsCardsService: GraphicsCardsService
  ) {}

  loadGraphicsCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.LoadGraphicsCards),
      switchMap(() =>
        this.graphicsCardsService.getGraphicsCards().pipe(
          map(
            (graphicsCards: GraphicCard[]) =>
              AppActions.LoadGraphicsCardsSuccess({ graphicsCards }),
            catchError((error) => of(AppActions.LoadGraphicsCardsError(error)))
          )
        )
      )
    )
  );
}
