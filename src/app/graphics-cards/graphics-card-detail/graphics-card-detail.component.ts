import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { GraphicCard } from '../graphics-cards.model';
import { Store } from '@ngrx/store';
import { selectGraphicsCardById } from 'src/app/store/graphics-cards.selectors';
import { GraphicsCardsState } from 'src/app/store/graphics-cards.state';
import { Location } from '@angular/common';

@Component({
  selector: 'app-graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: ['./graphics-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphicsCardDetailComponent implements OnInit {
  graphicsCard$: Observable<GraphicCard> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<GraphicsCardsState>,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.graphicsCard$ = this.store
      .select(selectGraphicsCardById(Number(id)))
      .pipe(
        filter((card) => !!card),
        map((card) => card as GraphicCard)
      );
  }

  goBack(): void {
    this.location.back();
  }
}
