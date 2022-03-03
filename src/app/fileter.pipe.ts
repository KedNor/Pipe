import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileter',
  pure: false,
})
export class FileterPipe implements PipeTransform {
  transform(value: string[], search: string): string[] {
    return value.filter((v) => v.toLowerCase().includes(search.toLowerCase()));
  }
}
