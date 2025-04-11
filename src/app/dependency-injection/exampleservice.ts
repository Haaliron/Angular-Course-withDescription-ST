import { Injectable } from "@angular/core";

@Injectable({ 
    // Bu sınıfın provider'ı root'ta tanımlanmıştır. Bu sayede bu sınıfı başka bir yerde kullanabilmek için provider'a eklemeye gerek yoktur.
    // Bu sınıfı başka bir yerde kullanabilmek için provider'a eklemeye gerek yoktur.
    // Bu sınıfın bir servis olacağına işaret eder.
    providedIn: 'root'
})

//^ @Injectable parametreleri ;
//^ providedIn: 'root | any | platform | modüladı' olmak üzere 4 tane parametre alır.
//^ 'root' : Bu sınıfın root modülünde singleton provider (tek bir örnek) olarak tanımlanacağını belirtir. Bu sayede bu sınıfı başka bir yerde kullanabilmek için provider'a eklemeye gerek yoktur. Bu servisin tek örneği olacaktır.
//^ 'any' : Bu sınıfın her modül için bir instance üreteceğini belirtir. Bu sayede bu sınıfı başka bir yerde kullanabilmek için provider'a eklemeye gerek yoktur. Bu servisin her modül için bir örneği olacaktır. 
//^ 'platform' : Bu sınıfın platform modülünde provider olarak tanımlanacağını belirtir. Genellikle Angular Universal gibi platform bağımsız uygulamalar için tasarlanmış servislerde kullanılır.
//^ 'modüladı': Hangi modülde kullanılmak isteniyorsa o modülün ismi yazılır. Bu sayede bu sınıfı başka bir yerde kullanabilmek için provider'a eklemeye gerek yoktur. Bu servisin o modül için bir örneği olacaktır.  
export class ExampleService {

    getExample(): Example[] {
        return [
            { name: "Example 1", quantity: 10 },
            { name: "Example 2", quantity: 20 },
            { name: "Example 3", quantity: 30 }
        ];
    }
}

export class Example {
    name: string;
    quantity: number;
}