import { Component } from '@angular/core';

/*

  'Local Storage
  + Herhangi bir kütüphaneye ihtiyaç duymaz. Tarayıcıda kalıcı veri tutmak için kullanılır. key, value şeklinde kullanılır.
  + localStorage.setItem("name","Ahmet"), localStorage.getItem("name"), localStorage.removeItem("name") gibi kullanılabilirler.

  'Session Storage
  + Local Storage ile aynı mantıktır. Sadece bu işlemi session'a göre tutar. Yani tarayıcı veya sekmesi kapatıldığı zaman veriler silinir.

  'Cache Storage
  + Geçici veri depolamak için kullanılır.

  'Cookie Storage
  + Kullanabilmek için npm i ile ngx-cookie-service kütüphanesi yüklenmelidir.

*/

@Component({
  selector: 'app-storages',
  imports: [],
  templateUrl: './storages.component.html',
  styleUrl: './storages.component.scss'
})
export class StoragesComponent {

}
