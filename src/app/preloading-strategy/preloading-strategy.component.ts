import { Component } from '@angular/core';


/*
  *Preloading Strategy Nedir ?
  *Preloading Strategy, Angular uygulamalarında modüllerin yüklenme stratejisini belirlemek için kullanılır.
  *Uygulama başlatıldığında, modüller yüklenir ve bu modüller uygulamanın performansını etkileyebilir.
  *Preloading Strategy, modüllerin yüklenme zamanını ve sırasını kontrol etmemizi sağlar.
  *Bu sayede, uygulamanın performansını artırabiliriz.
  *Preloading Strategy, Angular uygulamalarında lazy loading (tembel yükleme) ile birlikte kullanılır.
  *Lazy loading, modüllerin yalnızca ihtiyaç duyulduğunda yüklenmesini sağlar.
  *Bu sayede, uygulamanın başlangıç süresi kısalır ve performansı artar.

  * Preloading Strategy, bir class'ta tanımlanıp PreLoadingStrategy kütüphanesi ile birlikte kullanılır.
  + PreLoadAllModule ve NoPreload gibi iki tane hazır Preloading Strategy vardır.
  + Bir modülün çok fazla bağımlılığı varsa, bu modülün yüklenmesi uzun sürebilir. Bundan dolayı lazy loading yaparken preloading strategy kullanarak geç yüklenen modülleri erkenden yüklemeye başlayarak, uygulamanın performansını artırabiliriz.


*/

@Component({
  selector: 'app-preloading-strategy',
  imports: [],
  templateUrl: './preloading-strategy.component.html',
  styleUrl: './preloading-strategy.component.scss'
})
export class PreloadingStrategyComponent {

}
