import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, getInitialEntitiesState, ActiveState } from '@datorama/akita';
import { List } from './shop.model';

export interface ListsState extends EntityState<List>, ActiveState { }


const initialState = {
  ...getInitialEntitiesState()
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'lists' })
export class ListStore extends EntityStore<ListsState, List> {
  constructor() {
    super(initialState);
  }
}
