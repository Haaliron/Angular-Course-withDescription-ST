import { Component } from '@angular/core';

/*
  *Angular Module Nedir ?

  ' Angular modülleri, uygulamanızın farklı bölümlerini düzenlemek ve yönetmek için kullanılan yapısal birimlerdir. Her modül, belirli bir işlevselliği veya özelliği kapsayan bileşenler, hizmetler ve diğer modülleri içerebilir. Modüller, uygulamanızın daha iyi organize edilmesine ve yeniden kullanılabilir bileşenlerin oluşturulmasına yardımcı olur.

  ' Angular Module, özünde @NgModule dekoratörü ile tanımlanmış TypeScript sınıflarıdır. Class bazlıdır.

  ' ng g m moduleName komutu ile yeni bir modül oluşturabilirsiniz. Bu komut, belirtilen isimde bir modül dosyası ve ilgili bileşen dosyalarını oluşturur.

  * Lazy Loading Nedir ?
  ! Lazy loading, Angular uygulamalarında modüllerin yalnızca ihtiyaç duyulduğunda yüklenmesini sağlayan bir tekniktir. Bu, başlangıçta yükleme süresini azaltır ve uygulamanın performansını artırır. Lazy loading, genellikle büyük uygulamalarda kullanılır ve modüllerin dinamik olarak yüklenmesini sağlar.
  ! Lazy loading, Angular Router ile birlikte kullanılır. Uygulamanızda bir modülü lazy load etmek için, modülünüzü bir route'a eklemeniz yeterlidir. Bu durumda, modül yalnızca belirtilen route'a erişildiğinde yüklenir.

  *Lazy Loading Avantajları:
  ! Uygulamanın başlangıç yükleme süresini azaltır.
  ! Kullanıcı deneyimini iyileştirir.
  ! Daha iyi performans sağlar.
  ! Daha az bellek kullanımı sağlar.
  ! Uygulamanın modülerliğini artırır.

*/



@Component({
  selector: 'app-modules',
  imports: [],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent {

}
