import { Component } from '@angular/core';

/*
  'Angular mimarisinde bir view'den diğerine gidebilmek yahut bir component'ten diğerine geçiş yapabilmek için Angular Router modülünden yararlanılabilir.

  'Angular Router modülü ile yapılabilecek işlemler:
  + Adres çubuğuna yazılan URL üzerinden belirli bir component'e gitme
  + Component'e querry string değerlerini gönderme
  + Browser'ın ileri ve geri düğmelerini aktifleştirme/kullanabilme
  + Dinamik view yükleme
  + Rotalar üzerinde yetki kontrolü gerçekleştirme (Guard'lar ile)

  'Angular Router Bileşenleri :
  + Router : Angular'da tarayıcı üzerinden geri/ileri düğmelerini aktifleştiren ve componentler arasında gezinilmesini sağlayan bileşendir.
  + Route : Angular'da component'lerin rotalarını belirlememizi sağlayan yapılanmadır. Her bir route bir path ve o path ile eşleşen bir component'ten oluşur.
  + Routes : Angular'da birden fazla route'u bir arada tutan yapıdır. Routes, Route'ların bir dizisi olarak tanımlanır.
  + RouterOutlet : Tarayıcının adres çubuğundaki URL ile uyumlu olan route'un view'in hangi alanda görüntüleceğini belirten yapıdır.
  + RouterLink : HTML öğesi olan a tag'ini bir route'a bağlayan direktiftir.
  + RouterLinkActive : RouterLink ile bağlanan route'un aktif olup olmadığını kontrol eden direktiftir. Aktif ise CSS class'ı ekler.
  + ActivatedRoute : Component class'ı üzerinden etkin URL'i elde etmemizi sağlayan sınıftır. Bir başka deyişle o anki etkin route'u temsil eder.
  + RouteState : Route üzerindeki tüm bilgileri ve durumları içeren bir nesnedir. Uygulamanın hangi rotada olduğunu ve rotanın nasıl değiştiğini takip etmek için kullanılır.

  'Angular Router'ın Yapılandırılması:
  + 1. <base href> öğesini ayarlama (index.html dosyasında)
  + 2. Component için rotaları tanımlama
  + 3. Rotaları kaydederek uygulamaya geçirme
  + 4. Yönlendirici rotayı/url ayarlama ve herhangi bir HTML nesnesi ile eşleştirme
  + 5. Yeni rotaya uygun component'in yükleneceği alanı belirleme (router-outlet)

  * Default route oluşturmak için {path:"", redirectTo: "/home", pathMatch: "full"} şeklinde bir route tanımlanmalıdır. Bu route, uygulama açıldığında ilk olarak çalışacak olan route'dur.
  * pathMatch: "full" ifadesi, URL'nin tam olarak eşleşmesini sağlar. Eğer sadece "prefix" kullanılırsa, URL'nin başlangıcı ile eşleşen bir route bulunursa o route çalışır.

  ^WildcardRoute : Angular uygulamasında tanımlanmış olan rotaların dışında kalan tüm rotaları yakalamak için kullanılır. Genellikle 404 sayfası için kullanılır. Örnek: {path: "**", component: NotFoundComponent}

  !Routeler'da tanım sırası hayati önem arz eder !

  'Angular Router'da Location Strategy:
  'Angular'da 'Location Strategies' terimi uygulamanın URL'lerinin nasıl oluşturulacağı ve yönetileceği konusunda ifade eden bir kavramıdır.
  + LocationStrategy: Angular uygulamasının URL'lerini nasıl yöneteceğini belirleyen bir yapılandırmadır. İki türü vardır:

      +1. HashLocationStrategy: URL'lerin hash (#) karakteri ile ayrıldığı bir yapıdır. Örnek: http://localhost:4200/#/home
      +2. PathLocationStrategy: URL'lerin normal yollarla ayrıldığı bir yapıdır. Örnek: http://localhost:4200/home

*/

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {

}
