import {NgModule} from '@angular/core';
import {SearchableSelectComponent} from './searchable-select.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ItemSearchPipe} from "./item-search.pipe";


@NgModule({
  declarations: [
    SearchableSelectComponent, ItemSearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchableSelectComponent
  ]
})
export class SearchableSelectModule {
}
