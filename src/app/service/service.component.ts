import { Component } from '@angular/core';

/*
  *Servis : Angular mimarisinde (herhangi bir mimaride de) service yapılanması, belirli bir işlevi/operasyonu/sorumluluğu yerine getiren, sınıflar, fonksiyonlar veya modüller olarak tanımlanabilir. Servisler, uygulamanın farklı bileşenleri arasında veri paylaşımını ve işlevselliği sağlamak için kullanılır.

  +Service yapılanması genellikle componentler arasındaki business logic sorumluluğunu üstlenmesi için kullanılır.
  +Yani bir component'teki gayemiz mümkün mertebe kullanıcı deneyimini artırmak ve UI ile ilgili işlevleri yerine getirmek olmalıdır. Bu nedenle, componentlerimizdeki business logic'i servislerimize taşımak iyi bir uygulama olacaktır.

  ! ng g s service-name şeklinde servis oluşturulur.
*/

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

}
