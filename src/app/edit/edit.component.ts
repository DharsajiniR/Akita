import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { List, Item, ShopService, ListQuery } from '../state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  listForm: FormGroup;
  list: List;
  constructor(private formBuilder: FormBuilder,
    private shopService: ShopService,
    private listQuery: ListQuery) { }

  ngOnInit() {
    this.list = this.listQuery.getActive();
  }

  createForm(): void {
    this.listForm = this.formBuilder.group({
      name: this.list.name,
      items: this.formBuilder.array(this.createItems(this.list.items))
    })
  }

  createItems(items: Item[]): FormGroup[] {
    const itemsForm = [];
    for (let i = 0; i < items.length; i++) {
      itemsForm.push({
        id: items[i].id,
        label: items[i].label,
        quantity: items[i].quantity,
        purchased: items[i].purchased
      })
    }
    return itemsForm;

  }

  saveItem(purchased: any, item: any) {
    this.shopService.updateList(this.list, item, purchased);
  }

  get items(): FormArray {
    return this.listForm.get('items') as FormArray;
  }

}