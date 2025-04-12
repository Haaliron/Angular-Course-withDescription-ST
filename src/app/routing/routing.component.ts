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
            ^HashLocationStrategy, Server-Side Rendering desteklemez. Tüm tarayıcılarda çalışır.
      +2. PathLocationStrategy: URL'lerin normal yollarla ayrıldığı bir yapıdır. Örnek: http://localhost:4200/home
          ^PathLocationStrategy kullanıldığında, sunucu tarafında yönlendirme ayarlarının yapılması gerekir. Aksi takdirde, sayfa yenilendiğinde 404 hatası alınır. Bu nedenle, genellikle PathLocationStrategy tercih edilir. Eski tarayıcılarda çalışmaz. SSR (Server Side Rendering) için uygundur.

  ' Route Parameteres Nedir ?
  + Route parametreleri, URL'de dinamik olarak değişen değerlerdir. Örneğin, bir kullanıcının profil sayfasına gittiğinde, URL'de kullanıcının ID'si olabilir. Bu durumda, ID'yi route parametresi olarak tanımlayabiliriz. Route parametreleri, URL'deki belirli bir kısmı temsil eder ve genellikle ":" karakteri ile başlar. Örnek: /user/:id şeklinde tanımlanabilir.

  'Activated Route Nesnesi ile URL'deki Parametreleri Okuma :
  +   constructor (private activatedRoute: ActivatedRoute){
  +     const id = this.activatedRoute.snapshot.paramMap.get('id'); // URL'deki id parametresini okuma
  +     const hasId = this.activatedRoute.snapshot.paramMap.has('id'); // URL'de id parametresinin olup olmadığını kontrol etme
  +   }

  ' Observable ile URL'deki Parametreleri Okuma :
  +   constructor (private activatedRoute: ActivatedRoute){
  +     activatedRoute.paramMap.subscribe(({
  +       next: param => console.log(param.get("id"))
  +     });
  +}

  ! Observable yaklaşımını kullanmak daha iyidir çünkü reaktif yapılarda parametre değiştiğinde otomatik olarak güncellenir. Örneğin, kullanıcı profil sayfasında bir kullanıcıdan diğerine geçiş yapıldığında, parametre değişir ve yeni parametre otomatik olarak alınır.

  *Child Routes / Nest Routes

  + Angular'da bir route'un altına başka bir route eklemek için child routes kullanılır. Bu, uygulamanın daha düzenli ve okunabilir olmasını sağlar. Children altına children eklenebilir. Örnek:
  ^ {
  ^   path: "products", component: ProductsComponent,
  ^    children: [
  ^       {
  ^         path: "electronics/:id", component: ElectronicsComponent,
  ^         children: [
  ^           {path: "", redirectTo: "details", pathMatch: "full"},
  ^           {path: "details", component: ElectronicsDetailsComponent},
  ^           {path: "reviews", component: ElectronicsReviewsComponent}
  ^        ]
  ^       }
  ^    ]
  ^ }

  'Query String Nedir ?
  + URL'de "?" karakterinden sonra gelen anahtar-değer çiftleridir. Örnek: http://localhost:4200/products?category=electronics&sort=price
  + Query string, URL'de dinamik olarak değişen değerlerdir. Örneğin, bir ürün listesi sayfasında, kullanıcı ürünleri kategoriye göre filtrelemek isteyebilir. Bu durumda, kategori değerini query string olarak gönderebiliriz. Ama dikkat edilmesi gereken nokta, query string değerleri URL'de görünür. Bu nedenle, hassas verilerin gönderilmesi için kullanılmamalıdır.
  + <a routerLink="a" [queryParams]="{x:3}">A</a> // query string olarak x=3 değerini gönderir.

  'Query Değerlerini Okuma:
  ~Observable ile:
  + constructor(private activatedRoute: ActivatedRoute){
  +   activatedRoute.queryParamMap.subscribe(({
  +     next: param => console.log(param.get("x")) // URL'deki x parametresini okuma
  +     next: param => console.log(param.get("y")) // URL'deki y parametresini okuma
  +   });
  ~ Snapshot ile:
  + constructor(private activatedRoute: ActivatedRoute){
  +   activatedRoute.snapshot.queryParamMap.get("x") // URL'deki x parametresini okuma
  +   activatedRoute.snapshot.queryParamMap.get("y") // URL'deki y parametresini okuma
  + }

  'queryParamsHandling: "merge" : URL'deki mevcut query string değerlerini koruyarak yeni değer ekler.
  +Örnek: /products?category=electronics&sort=price&x=3 şeklinde olur.
  'queryParamsHandling: "preserve" : URL'deki mevcut query string değerlerini korur. Yeni değer eklemez.
  +Örnek: /products?category=electronics&sort=price şeklinde olur.
*/

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {

}
