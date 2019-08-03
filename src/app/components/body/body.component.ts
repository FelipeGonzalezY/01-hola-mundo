import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{
  mostrar = true;

  frase: any = {
    mensaje: 'adsasdasdasd',
    autor:' asd'
  }

  personajes: string[] = ['a', 'b', 'c', 'd'];
}
