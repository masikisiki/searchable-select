import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-select';
  items = ["South Africa", "Zimbabwe", "Nigeria", 'Botswana', "South Africa", "Zimbabwe", "Nigeria", 'Botswana', "South Africa", "Zimbabwe", "Nigeria", 'Botswana']
    countries = [
    { name: 'Nigeria', code: 'NG' },
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'Germany', code: 'DE' },
    { name: 'France', code: 'FR' },
    { name: 'Italy', code: 'IT' },
    { name: 'Australia', code: 'AU' },
    { name: 'Japan', code: 'JP' },
    { name: 'Brazil', code: 'BR' },
    { name: 'India', code: 'IN' },
    { name: 'South Africa', code: 'ZA' }
  ];
  country?: {name: string, code: string};
}
