import { Component } from '@angular/core';
import { ExampleService } from './exampleservice';

/*
  *Dependency injection, yapmış olduğumuz kodsal çalışmalarda yeniden kullanılabilir bir davranış sergilememizi sağlayan çağdaş bir design pattern'dir. Temel gayesi bağımlılıkları yönetmektir.

  *Dependency injection, bir nesnenin bağımlılıklarını dışarıdan almasını sağlar. Bu sayede, nesneler arasındaki bağımlılıklar azaltılır ve kodun test edilebilirliği artırılır.

  *Dependency, bir yazılım parçasının(class,method,vs...) başka bir yazılım parçasına olan bağımlılığıdır. Örneğin, bir sınıfın başka bir sınıfı kullanması durumunda, ilk sınıf ikinci sınıfa bağımlıdır.
  *Injection ise, bir nesnenin başka bir nesneye enjekte edilmesi anlamına gelir. Yani, bir sınıfın başka bir sınıfı kullanabilmesi için, o sınıfın örneğinin ona verilmesidir.

  *Dependency injection kullanılmasının temel amacı sıkı bağlılığın (tight coupling) önüne geçmektir. Sıkı bağlılık, bir nesnenin başka bir nesneye doğrudan bağımlı olması durumudur. Bu durumda, bir nesnenin değişmesi diğer nesneleri de etkiler. Bu da kodun bakımını zorlaştırır ve test edilebilirliğini azaltır.

  ~productService : ProductService = new ProductService(); // Sıkı bağlılık (tight coupling)
  ~productService : ProductService; // Gevşek bağlılık (loose coupling)

  ^Angular'da Dependency Injection Aktörleri
  Consumer : Bağımlılığa ihtiyaç duyan sınıf.
  Dependency : Consumer'da olması istenen servis.
  Injection Token ( DI Token) : Dependency'leri unique bir şekilde tanımlamak için kullanılan bir anahtar.
  Injector : Dependency'leri ihtiyaç noktalarında inject etmemizi sağlayan yapılardır. Inject süresinde DI Token'ı kullanır.
  Provider : Injection token eşliğinde, dependency'lerin tutulduğu yerdir.

  ! Bir sınıfı provider'a eklemeden kullanabilmek için, o sınıfın constructor'ında @Injectable() decorator'ü kullanılarak, 'providedIn'  özelliğine root değeri verilmelidir.. Bu decorator, Angular'a bu sınıfın dependency injection ile kullanılacağını belirtir.

  ? Provide Detayları :

  ? 3 tane provide etme yöntemi vardır. Type Token, String Token ve Injection Token.
  ? Type Token : Class'ı direkt olarak provider'a eklemektir. Bu sayede, o sınıfın bir örneği oluşturulur ve dependency injection ile kullanılabilir.
  ? String Token : Class'ı string bir anahtar ile provider'a eklemektir. Bu sayede, o sınıfın bir örneği oluşturulur ve dependency injection ile kullanılabilir. String token'lar genellikle, birden fazla sınıfın aynı anda kullanılmak istendiği durumlarda kullanılır.
  ? Injection Token : Class'ı injection token ile provider'a eklemektir. Bu sayede, o sınıfın bir örneği oluşturulur ve dependency injection ile kullanılabilir. Injection token'lar genellikle, birden fazla sınıfın aynı anda kullanılmak istendiği durumlarda kullanılır. Injection token'lar, string token'lardan daha güvenlidir. Çünkü, string token'lar sadece string anahtarları ile tanımlanırken, injection token'lar class'ların kendileri ile tanımlanır.

  [providers : ProductService] DI Token - Default Type Token
  [providers : { provide: ProductService, useClass: ProductService }] DI Token - Type Token
  [providers : { provide: "ProductService", useClass: ProductService }] DI Token - String Token
  [providers : { provide: ProductServiceIT (burası yeni bir in it class'ı), useClass: new ProductService() }] DI Token - Injection Token

  ? Provider Türleri
  ? Class Provider : useClass Bir tür/sınıf provide edilecekse eğer kullanılan provider türüdür.
  ? Value Provider : useValue Basit/metinsel değerler veya fonksiyon provide edilecekse kullanılan provider türüdür.
  ? Factory Provider : useFactory provide edilecek nesnenin önceden konfigüre edilmesi gereken durumlarda kullanılan provider türüdür. Factory provider, bir nesnenin oluşturulması için bir fonksiyon kullanır. Bu fonksiyon, nesnenin oluşturulması için gerekli olan bağımlılıkları alır ve nesneyi oluşturur.
  ? Aliased Class Provider : useExisting Provide edilmiş bir servisi farklı bir referansla temsil etmek istediğimiz durumlarda kullanılır.

  *Dependency Injection'da @Self, @SkipSelf, @Optional Decorator'leri
  '@Self : Self decorator'ü ilgili dependency'nin yalnızca geçerli olan component yahut directive'de aranmasının talimatını verir.

  constructor(@Self() private exampleService: ExampleService) // Self decorator'ü ile ilgili dependency'yi yalnızca geçerli olan component yahut directive'de arıyoruz.

  '@SkipSelf : Skipself decorator'ü ise ilgili dependency'i component'te değil o component'in çağırıldığı bir üst component'te aranamasının talimatını verir.

  constructor(@SkipSelf() private exampleService: ExampleService) // Skipself decorator'ü ile ilgili dependency'yi component'te değil o component'in çağırıldığı bir üst component'te arıyoruz.

  '@Optional :İlgili dependency'nin isteğe bağlı olduğunu belirtir. Eğer ilgili dependency bulunamazsa, undefined döner.

  +View Providers : Kullanıldığı component'in template'inde referans edilen tüm alt component ve directive'lere servis provide etmemize olanak sağlayan bir özelliktir.

*/

@Component
  (
    {
      selector: 'app-dependency-injection',
      imports: [],
      providers: [ExampleService],
      templateUrl: './dependency-injection.component.html',
      styleUrl: './dependency-injection.component.scss'
    }
  )
export class DependencyInjectionComponent {
  constructor(private exampleService: ExampleService) // Constructor Injection
  {
    console.log(exampleService.getExample()); // Constructor Injection ile örneği alıyoruz.

  }
}
