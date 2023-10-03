import { Component, OnInit } from '@angular/core';
import { List, Item, ShopService } from '../state';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  listForm: FormGroup;
  initialId = 0;
  saved = false;
  constructor(
    private shopService: ShopService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.listForm = this.formBuilder.group({
      id: this.createId(),
      name: '',
      items: this.formBuilder.array([this.createItem()])
    })
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      id: this.initialId++,
      label: '',
      quantity: 1,
      purchased: false
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  get items(): FormArray {
    return this.listForm.get('items') as FormArray;
  }
  get hasSaved(): boolean {
    return this.saved;
  }
  saveList() {
    this.saved = true;
    this.shopService.addList(this.listForm.value);
    this.router.navigate(['lists']);
  }

  private createId(): number {
    return Math.floor(Math.random() * 20);
  }

}