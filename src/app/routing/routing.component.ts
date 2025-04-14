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

  *Guards : Angular uygulamalarında rotaların erişimini kontrol etmek için kullanılır. Örneğin, bir kullanıcının giriş yapmadan belirli bir sayfaya erişmesini engellemek için guards kullanılabilir. Guards, route tanımında canActivate, canDeactivate, canLoad gibi özelliklerle tanımlanır.

  + canActivate: Kullanıcının belirli bir route'a erişip erişemeyeceğini kontrol eder. Eğer true dönerse route'a erişim izni verilir. false dönerse erişim engellenir.

  + canDeactivate: Kullanıcının belirli bir route'dan çıkıp çıkamayacağını kontrol eder. Eğer true dönerse route'dan çıkış izni verilir. false dönerse çıkış engellenir.

  + Resolve: Kullanıcının belirli bir route'a erişmeden önce belirli bir işlemi gerçekleştirmesini sağlar. Örneğin, bir kullanıcının giriş yapmadan belirli bir sayfaya erişmesini engellemek için kullanılabilir.

  + canMatch: Kullanıcının belirli bir route ile eşleşip eşleşmeyeceğini kontrol eder. Eğer true dönerse route ile eşleşir. false dönerse eşleşme engellenir.

  + canActivateChild: Kullanıcının belirli bir route'un altındaki child route'lara erişip erişemeyeceğini kontrol eder. Eğer true dönerse child route'a erişim izni verilir. false dönerse erişim engellenir.

  'Guard'lar ng g g guardName olarak oluşturulabilir. Guard'lar, route tanımında canActivate, canDeactivate, canLoad gibi özelliklerle tanımlanır.

  ^Guard'ların çalışma sırası: canMatch -> canActivate -> canActivateChild -> resolve -> canDeactivate


  *Route Data Passing : Route tanımında data özelliği ile route'a veri geçişi yapılabilir. Bu veri, route'a erişildiğinde kullanılabilir. Örnek : {path: "products", component: ProductsComponent, data: {title: "Products"}} şeklinde tanımlanabilir. Bu veri, route'a erişildiğinde kullanılabilir.
  + constructor(private activatedRoute: ActivatedRoute){
  +   activatedRoute.data.subscribe(({
  +     next: data => console.log(data.title) // Route'dan gelen veriyi okuma}
  +   });

  *Router Events: Angular uygulamasında router olaylarını dinlemek için kullanılır. Örneğin, bir route'a geçiş yapıldığında veya bir route'dan çıkıldığında belirli bir işlemi gerçekleştirmek için kullanılabilir. Router olayları, Router modülünden alınabilir. Örnek: router.events.subscribe((event) => {console.log(event)}) şeklinde tanımlanabilir.

  !İşlem Sırası :
  'NavigationStart ->             Yeni bir navigasyon başlatıldığında tetiklenir.
  ' RoutesRecognized ->           Yönlendirmenin gerçekleştirileceği rotalar tanımlandığında tetiklenir.
  '  GuardsCheckStart ->          Yönlendirmenin gerçekleştirileceği route'un mevcut guard'ları tetiklendiğinde tetiklenir.
  '   ChildActivationStart ->     Yönlendirilecek route'un child route'ları tetiklendiğinde tetiklenir.
  '    ActivationStart ->         Rotanın etkinleştirilmesi sırasında tetiklenir.
  '     GuardsCheckEnd ->         Guard'ların kontrolü tamamlandığında tetiklenir.
  '      ResolveStart ->          Yönlendirme yapılacak sayfanın verileri resolve edilmeye başlandığında tetiklenir.
  '       ActivationEnd ->        Rotanın etkinleştirilmesi tamamlandığında tetiklenir.
  '        ResolveEnd ->          Yönlendirme yapılacak sayfanın verileri resolve edildiğinde tetiklenir.
  '         NavigationEnd ->      Navigasyon işlemi tamamlandığında tetiklenir.
  '          NavigationCancel ->  Navigasyon işlemi iptal edildiğinde tetiklenir.
  '           NavigationError ->  Navigasyon işlemi sırasında bir hata oluştuğunda tetiklenir.

  ^Router Events'lere @angular/router path'i üzerinden erişilir ve kullanılabilir.

  + constructor(private router: Router){
  +   router.events.subscribe((event) => {
  +     if (event instanceof NavigationStart) {
  +       console.log("Navigation started");
  +     } else if (event instanceof NavigationEnd) {
  +       console.log("Navigation ended");
  + }
*/

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {

}
