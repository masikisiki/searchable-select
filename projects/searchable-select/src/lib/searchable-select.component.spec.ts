import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchableSelectComponent } from './searchable-select.component';

describe('SearchableSelectComponent', () => {
  let component: SearchableSelectComponent;
  let fixture: ComponentFixture<SearchableSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchableSelectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.type).toEqual('simple');
    expect(component.defaultLabel).toEqual('Select One');
    expect(component.data).toEqual([]);
    expect(component.enableSearch).toBeFalse();
    expect(component.displayKey).toBeUndefined();
    expect(component.searchKey).toEqual([]);
    expect(component.collapsed).toBeTrue();
    expect(component.selectedItemDisplay).toBeUndefined();
    expect(component.searchTerm).toEqual('');
    expect(component.selectedItem).toBeUndefined();
  });

  it('should toggle the collapsed property', () => {
    component.collapsed = true;
    component.toggle();
    expect(component.collapsed).toBeFalse();

    component.toggle();
    expect(component.collapsed).toBeTrue();
  });

  it('should select the item', () => {
    const item = { id: 1, name: 'Item 1' };
    component.type = 'complex';
    component.displayKey = 'name';

    component.select(item);

    expect(component.selectedItem).toEqual(item);
    expect(component.selectedItemDisplay).toEqual('Item 1');
    expect(component.collapsed).toBeFalse();

    // Emitting the onSelection event can also be tested if needed
  });

  // Additional tests for other methods and behavior can be added as needed

});
