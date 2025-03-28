import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from "./databinding/databinding.component";

@Component( //* Metadata, Decorator Componentin nasıl yapılandırılacağını belirtir
  {           
  selector: 'app-root', //* Selector, Componentin uyglamanın herhangi bir yerinde nasıl çağırılacağını ifade eder
  // Mesela <body> 
  //          <app-root></app-root>
  //        </body> 
  // gibi

  imports: [RouterOutlet, DatabindingComponent], // *Angular 16 ile app.module.ts kaldırıldığı için declare işlemi

  templateUrl: './app.component.html', //* Template 
  //template:`<h1>Template Kullanımı</h1>`, //* Harici html dosyası kullanılmak istenmezse bu şekilde de kullanılabilir

  styleUrl: './app.component.scss', //* Style
  //styles:['h1{background-color:red;}'] //* Harici css/scss dosyası kullanılmak istenmezse bu şekilde de kullanılabilir
  }
)
export class AppComponent //* Component Class
{ 
  //* TypeScript ve jQuerry gibi işlemleri, component içerisinde kullanılacak değişken ve fonksiyonlar bu kısımda tanımlanır.
  //* API gibi dış servislere erişim sürecinin başlatılması da bu kısımda gerçekleşir
  
  title = 'Course';
}

//* Bir component oluşturmak için ng g c name şeklinde kullanılır