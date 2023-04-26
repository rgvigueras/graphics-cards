import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graphics-cards',
    loadChildren: () =>
      import('./graphics-cards/graphics-cards.module').then(
        (m) => m.GraphicsCardsModule
      ),
  },
  { path: '', redirectTo: 'graphics-cards', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
