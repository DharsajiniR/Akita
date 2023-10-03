import { Injectable } from '@angular/core';
import { ListStore, ListsState } from './shop.store';
import { List, Item } from './shop.model';
import { ID,  } from '@datorama/akita';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private listStore: ListStore) {
  }

  addList(list: List) {
    this.listStore.add(list);
  }

  updateList(data: any, item: any, purchased: any) {
    this.listStore.update(data.id, list => {
    return {
    //   ...list,
    //   items: update(data.items, item,  {purchased})
    items: list.items.map((listItem) =>
    listItem.id === item.id ? { ...listItem, purchased: true } : listItem
     ),
    }
  });
  }

  selectList(id: ID) {
    this.listStore.setActive(id);
  }

  deleteList(id: ID) {
    this.listStore.remove(id);
  }

  setActive(id: ID) {
    this.listStore.setActive(id);
  }


}
