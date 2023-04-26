import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container/graphics-card-list-container.component';
import { GraphicsCardDetailComponent } from './graphics-card-detail/graphics-card-detail.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: GraphicsCardListContainerComponent,
  },
  {
    path: ':id',
    component: GraphicsCardDetailComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class GraphicsCardsRoutingModule {}
