import { Component } from '@angular/core';

/*
  ' APP_INITIALIZER Nedir ?
  + Angular tarafından sağlanan built-in bir injection token'dir.
  + Bu token sayesinde uygulama çalışmaya başlamadan önce geliştiriciler tarafından bazı kodlar yürütülebilmektedir.

  'HttpClient ile API'larla İletişim
  + HttpClient kütüphanesi, @angular/common/http dizininde bulunan ve API'lara GET,POST,PUT ve DELETE istekleri atmamızı ve bu isteklerin sonuçlarını elde etmemizi sağlayan hazır bir kütüphanedir.

  'HttpInterceptor Nedir ?
  + HTTP Interceptor, Angular'da yapılan HTTP isteklerinde merkezi bir nokta üzerinden işlemler yapmamızı sağlayan bir mekanizmadır.
  + HTTP isteği gerçekleştirilmeden önce gerekli manipülasyonları gerçekleştirmemize olanak sağlar.
  + Tekrarlı HTTP isteklerinde sürekli bir token oluşturmamak için kullanmak önemlidir.
  + ng g interceptor interceptorName şeklinde oluşturulur.

  'Angular'da SEO Teknikleri

  *Universal, Pre-rendering, Meta Etiketleri, Lazy Loading, Canonical URL'ler, xml-rss-siteMap, HTML5 History API

  'Angular Universal
  + Angular Universal, Javascript tabanlı web uygulamalarını sunucu taraflı çalıştırmayı (server-side rendering (SSR)) sağlayan bir Angular Framework özelliğidir. Angular Universal sayesinde, uygulamanın ilk yüklendiği sayfada sunucu tarafında içeriğin oluşturulup tarayıcıya gönderilmesi sağlanarak uygulama açısından daha hızlı yüklenme ve daha da önemlisi arama motoru dostu olması sağlanmaktadır.

  +Angular Universal ile SSR gerçekleştirebilmek için ng add @nguniversal/express-engine talimatı yeterli olacaktır.
  +SSR ile birlikte uygulamayı ayağa kaldırmak için npm run build:ssr && npm run serve:ssr talimatı kullanılır.

  'SSR Nedir ?
  + Günümüzdeki birçok modern web uygulaması artık tarayıcı tarafında çalışmakta ve sayfanın içeriği Javascript ile oluşturulmaktadır. Bu durum, kullanıcılar tarafından uygulamanın tarayıcıda açılması sürecinde, ilgili Javascript dosyalarının indirilmesi, yorumlanması ve çalıştırılması gerektiği anlamına gelmektedir. Server-Side Rendering, bu süreci hızlandırmak ve kullanıcılara uygulamayı daha hızlı yükleyerek sunum yapmak için ve tüm bunların yanında arama motorları açısından da içeriği erişilebilir kılmak için kullanılmaktadır.

*/


@Component({
  selector: 'app-enviroment-variables-configurations',
  imports: [],
  templateUrl: './enviroment-variables-configurations.component.html',
  styleUrl: './enviroment-variables-configurations.component.scss'
})
export class EnviromentVariablesConfigurationsComponent {

}
