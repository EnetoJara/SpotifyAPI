import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFoto'
})
export class SinFotoPipe implements PipeTransform {
  sinfoto = 'assets/img/noimage.png'
  transform(value: any[]): string {
    return (value) ? ((value.length > 0) ? value[1].url : this.sinfoto) : this.sinfoto
  }

}
