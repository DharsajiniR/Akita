import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListsComponent } from './lists.component';
import { ListQuery } from '../state/shop.query';
import { ShopService } from '../state/shop.service';
import { ListStore } from '../state/shop.store';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;
  let listQuery: ListQuery;
  let shopService: ShopService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListsComponent],
      imports: [RouterTestingModule],
      providers: [ListQuery, ShopService, ListStore], // Add your providers here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    listQuery = TestBed.inject(ListQuery);
    shopService = TestBed.inject(ShopService);

    // Mock the listQuery.selectAll() method to return an observable
    spyOn(listQuery, 'selectAll').and.returnValue(of([]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listQuery.selectAll() in ngOnInit', () => {
    component.ngOnInit();
    expect(listQuery.selectAll).toHaveBeenCalled();
  });

  it('should call shopService.setActive and navigate when select is called', () => {
    const id = 'some-id'; // Replace with a valid ID
    const navigateSpy = spyOn(TestBed.inject(Router), 'navigate');
    spyOn(shopService, 'setActive');

    component.select(id);

    expect(shopService.setActive).toHaveBeenCalledWith(id);
    expect(navigateSpy).toHaveBeenCalledWith(['lists/edit']);
  });

  it('should call shopService.deleteList when delete is called', () => {
    const id = 'some-id'; // Replace with a valid ID
    spyOn(shopService, 'deleteList');

    component.delete(id);

    expect(shopService.deleteList).toHaveBeenCalledWith(id);
  });
});
