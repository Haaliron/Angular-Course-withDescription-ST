import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValid, matchPassword } from './custom-valid';

/*
  *Validation, form'un üzerindeki veri alanlarının kullanıcılar tarafından beklenen kurallarda girilip girilmediğini kontrol etmek için  kullanılan doğrulayıcıdır.

  *Validasyonlar yapısal olarak ikiye ayrılırlar. Sync Validation ve Async Validation.

  ^ Sync Validation: Form'un üzerindeki veri alanlarının kullanıcılar tarafından beklenen kurallarda girilip girilmediğini kontrol etmek için kullanılan doğrulayıcıdır. Bu doğrulayıcılar, form'un üzerinde bulunan veri alanlarının değerlerini kontrol eder ve bu değerlerin geçerli olup olmadığını belirler. Eğer değer geçerli değilse, form'un üzerinde bir hata mesajı gösterilir.

  ^ Async Validation: Form'un üzerindeki veri alanlarının kullanıcılar tarafından beklenen kurallarda girilip girilmediğini kontrol etmek için kullanılan doğrulayıcıdır. Bu doğrulayıcılar, form'un üzerinde bulunan veri alanlarının değerlerini kontrol eder ve bu değerlerin geçerli olup olmadığını belirler. Eğer değer geçerli değilse, form'un üzerinde bir hata mesajı gösterilir. Ancak bu doğrulayıcılar, form'un üzerinde bulunan veri alanlarının değerlerini kontrol etmek için bir asenkron işlem kullanır. Bu nedenle, bu doğrulayıcılar genellikle bir API çağrısı yaparak form'un üzerindeki veri alanlarının değerlerini kontrol ederler.

  'Built-in (Hazır) Validations
  + min,max,required,email,requiredTrue,minlength,maxlength

  ? Doğrulama ve Hata Mesajları elde ederken property'ler kullanılabilir.

  ! Custom Validator oluşturmak için ValidatorFn interface'i kullanılır. Bu interface içerisindeki imza sayesinde bizlere validator oluşturma kurallarını direkt sunmaktadır.
*/

@Component
  (
    {
      selector: 'app-validations',
      imports: [ReactiveFormsModule,CommonModule],
      //templateUrl: './validations.component.html',
      template:
      `
      <form [formGroup]="form" onSubmit="onSubmit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" formControlName="name" class="form-control" />
          <div *ngIf="name?.invalid && (name?.touched || name?.dirty)" class="alert alert-danger">
            <div *ngIf="name?.errors?.['required']">Name is required.</div>
            <div *ngIf="name?.errors?.['minlength']">Name must be at least 3 characters long.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" formControlName="email" class="form-control" />
          <div *ngIf="email?.invalid && (email?.touched || email?.dirty)" class="alert alert-danger">
            <div *ngIf="email?.errors?.['required']">Email is required.</div>
            <div *ngIf="email?.errors?.['email']">Email must be a valid email address.</div>
          </div>
        </div>

        <button type="submit" [disabled]="form.invalid" class="btn btn-primary">Submit</button>
      </form>
      `,
      styleUrl: './validations.component.scss'
    }
  )
export class ValidationsComponent 
{
  form: FormGroup;
  constructor()
  {
    this.form = new FormGroup
    (
      {
      name: new FormControl('', [Validators.required, Validators.minLength(3), CustomValid(3)]), //* Oluşturduğumuz validatorü burada kullanıyoruz
      //email: new FormControl('', [Validators.required, Validators.email, ])
    },
    {
      validators : [matchPassword()]   //* PasswordValidator'ı burada kullanacağız.
    }
);
this.form.get('email').setValidators([Validators.email , Validators.required]) //* Dinamik olarak validator eklemeye yarar. Fakat bu kod çalıştığı zaman konteynere daha önce eklenmiş tüm validatorleri siler. Bu nedenle bu kodu kullanırken dikkatli olunmalıdır. Eğer birden fazla validator eklemek istenirse, bu validatorlerin hepsini bir dizi içerisinde tanımlamak gerekir. Bu diziyi setValidators() fonksiyonuna parametre olarak geçmek gerekir.
this.form.get('email').clearValidators(); //* Konteynerdeki tüm validatorleri siler
this.form.get('email').updateValueAndValidity(); //* Dinamik olarak validatorlere müdahale edildiği zaman bu fonksiyonla yeni duruma göre validatorlerin çalışması için Angular mimarisi zorlanabilir.
  }
  onSubmit()
  {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
  get name () { return this.form.get('name'); }
  get email () { return this.form.get('email'); } 
}
