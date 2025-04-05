import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

/*
 *Angular Forms'da Changing the Status Fonksiyonları
 'markAsTouched, markAllAsTouched, markAsDirty, markAllAsDirty, markAsPristine, markAllAsPristine, markAsPending, markAllAsPending, enable, disable

  (onlySelf parametresi true ise sadece kendisini etkiler, false ise tüm formu etkiler. Form state'i, Form validator'ü gibi yerlerde kullanılır.)

 ^ markAsTouched: FormControl veya FormGroup'un "touched" durumunu işaretler. Bu, kullanıcı form alanına odaklandığında ve ardından odak dışına çıktığında tetiklenir.
  ^ markAllAsTouched: FormControl veya FormGroup'un içindeki tüm denetimlerin "touched" durumunu işaretler.
  ^ markAsDirty: FormControl veya FormGroup'un "dirty" durumunu işaretler. Bu, form alanında değişiklik yapıldığında tetiklenir.
  ^ markAllAsDirty: FormControl veya FormGroup'un içindeki tüm denetimlerin "dirty" durumunu işaretler.
  ^ markAsPristine: FormControl veya FormGroup'un "pristine" durumunu işaretler. Bu, form alanında değişiklik yapılmadığında tetiklenir.
  ^ markAllAsPristine: FormControl veya FormGroup'un içindeki tüm denetimlerin "pristine" durumunu işaretler.
  ^ markAsPending: FormControl veya FormGroup'un "pending" durumunu işaretler. Bu, form alanında değişiklik yapılıp onaylanmadığında tetiklenir.
  ^ markAllAsPending: FormControl veya FormGroup'un içindeki tüm denetimlerin "pending" durumunu işaretler.
  ^ enable: FormControl veya FormGroup'un "enabled" durumunu etkinleştirir.
  ^ disable: FormControl veya FormGroup'un "disabled" durumunu devre dışı bırakır.
*/

@Component
  (
    {
      selector: 'app-functions',
      imports: [],
      //templateUrl: './functions.component.html',
      template:
        `
      <form (ngSubmit)="onSubmit(frm.value)">
      <input type="text" placeholder="Name" formControlName="name"><br>
      <button (click)="frm.markAsTouched()">markAsTouched</button>
      </form>
      `,
      styleUrl: './functions.component.scss'
    }
  )
export class FunctionsComponent 
{
  frm: FormGroup;
  constructor() 
  {

  }
  onSubmit(value: any) 
  {
    console.log(value);
  }
  markAsTouched() 
  {
    this.frm.get("name").markAsTouched({ onlySelf: true }); // sadece kendisini etkiler.
    //this.frm.markAllAsTouched(); // tüm formu etkiler.
  }

}
