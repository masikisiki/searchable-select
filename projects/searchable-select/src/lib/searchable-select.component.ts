import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'searchable-select',
  templateUrl: 'searchable-select.component.html',
  styleUrls: ['searchable-select.component.scss']
})
export class SearchableSelectComponent implements AfterViewInit {

  @Input() type: 'simple' | 'complex' = 'simple';
  @Input() defaultLabel = 'Select One';
  @Input() data: any[] = [];
  @Input() enableSearch = false;
  @Input() displayKey?: string;
  @Input() searchKey: string[] = [];
  @Output() onSelection = new EventEmitter<any>();

  collapsed = true;
  selectedItemDisplay?: string;
  searchTerm: string = '';
  selectedItem: any;

  ngAfterViewInit(): void {
    if (this.type === 'simple') {
    } else if (this.type === 'complex') {
      if (!this.displayKey && this.data.length > 0) {
        this.displayKey = Object.keys(this.data[0])[0];
      }
    }
  }

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

  select(item: any): void {
    this.selectedItem = item;
    if (this.type === 'complex') {
      this.selectedItemDisplay = this.selectedItem[this.displayKey!];
    } else {
      this.selectedItemDisplay = this.selectedItem;
    }
    this.onSelection.emit(item);
    this.toggle();
  }
}
