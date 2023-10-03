import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListStore, ListsState } from './shop.store';
import { List } from './shop.model';

@Injectable({
  providedIn: 'root'
})
export class ListQuery extends QueryEntity<ListsState, List> {

  constructor(protected override store: ListStore) {
    super(store);
  }

}

