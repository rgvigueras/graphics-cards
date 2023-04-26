import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { graphicsCardsReducer } from './store/graphics-cards.reducer';
import { GraphicsCardsEffects } from './store/graphics-cards.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    StoreModule.forRoot({ gc: graphicsCardsReducer }),
    EffectsModule.forRoot([GraphicsCardsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
