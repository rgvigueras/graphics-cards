import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  first,
  tap,
} from 'rxjs';
import { GraphicCard } from '../graphics-cards.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectFilteredCards,
  selectQueryString,
  selectVirtualScrollPosition,
} from 'src/app/store/graphics-cards.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphicsCardsState } from 'src/app/store/graphics-cards.state';
import { GraphicsCardsActions } from 'src/app/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphicsCardListContainerComponent
  implements OnInit, AfterViewInit
{
  @ViewChild(CdkVirtualScrollViewport)
  virtualScrollComponent: CdkVirtualScrollViewport | undefined;
  graphicsCards$: Observable<GraphicCard[]> | undefined;
  form: FormGroup = new FormGroup({});
  virtualScrollPosition$: Observable<number> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<GraphicsCardsState>,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();

    this.form = this.formBuilder.group({
      search: new FormControl(),
    });

    this.store
      .select(selectQueryString)
      .pipe(first())
      .subscribe((queryString) => {
        this.form.controls['search'].setValue(queryString);
        this.search(queryString);
      });

    this.form.controls['search'].valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((typedSearch) => {
        this.search(typedSearch);
      });
  }

  ngAfterViewInit() {
    this.store
      .select(selectVirtualScrollPosition)
      .pipe(first())
      .subscribe((position) => {
        const scrollTo = position * 100;
        this.virtualScrollComponent?.scrollToIndex(scrollTo, 'smooth');
      });
  }

  search(typedSearch: string) {
    if (typedSearch === '') {
      this.store.dispatch(GraphicsCardsActions.LoadGraphicsCards());
    } else {
      this.store.dispatch(
        GraphicsCardsActions.FilterGraphicsCards({ queryString: typedSearch })
      );
    }

    this.graphicsCards$ = this.store
      .select(selectFilteredCards(typedSearch))
      .pipe(
        tap(() => {
          this.spinnerService.hide();
        })
      );
  }

  onScroll(position: number) {
    this.store.dispatch(
      GraphicsCardsActions.SetVirtualScrollPosition({ position })
    );
  }

  goToDetail(card: GraphicCard) {
    this.router.navigate([card.id], { relativeTo: this.route });
  }
}
