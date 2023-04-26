import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container/graphics-card-list-container.component';
import { GraphicsCardDetailComponent } from './graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardsRoutingModule } from './graphics-cards-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GraphicsCardListContainerComponent,
    GraphicsCardDetailComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    GraphicsCardsRoutingModule,
    NgxSpinnerModule,
  ],
})
export class GraphicsCardsModule {}
