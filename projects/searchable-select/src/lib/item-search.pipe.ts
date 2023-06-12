import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'itemSearch'
})
export class ItemSearchPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    const first = items[0];
    if (typeof first === 'object') {
      return items.filter(item => {
        for (const property in item) {
          if (item.hasOwnProperty(property) && (typeof item[property] === 'string' || typeof item[property] === 'number') && item[property].toString().toLowerCase().includes(searchTerm)) {
            return true;
          }
        }
        return false;
      });
    } else if (typeof first === 'string' || typeof first === 'number') {
      return items.filter(item =>
        item.toString().toLowerCase().includes(searchTerm)
      );
    }

    return items;
  }
}
