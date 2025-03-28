import { Component } from '@angular/core';

@Component(
  {
  selector: 'app-interpolation',
  imports: [],
  //templateUrl: './interpolation.component.html',
  template: `
  <p ngNonBindable>{{test}}test</p> // ~ngNonBindable text interpolation' u devre dışı bırakır
  `,
  styleUrl: './interpolation.component.scss'
  })

export class InterpolationComponent 
{
  test : {value : string, default : string} = {value:"test", default:"tst"};
}

//* Interpolation ile birlikte kullanılabilen operatörler ;

/*
  ~ Pipes {{test | uppercase}}
  ~ Nullable Operatörü (?) {{test?.value}}
  ~ NonNull Assertion Operatörü (!) {{test!.value}}
*/