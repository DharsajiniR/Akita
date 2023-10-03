import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ListQuery, List } from '../state';
import { Observable } from 'rxjs';
import { ShopService } from '../state/shop.service';
import { ID } from '@datorama/akita';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListsComponent implements OnInit {
  lists$: Observable<List[]>;
  newListRequest: boolean;

  constructor(
    private listQuery: ListQuery,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lists$ = this.listQuery.selectAll();
  }

  select(id: ID) {
    this.shopService.setActive(id);
    this.router.navigate(['lists/edit']);
  }
  delete(id: ID) {
    this.shopService.deleteList(id);
  }
} 