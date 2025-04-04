import { Pipe, PipeTransform } from '@angular/core';


//* Custom Pipe'lar, Componentler gibi kullanıldığı Module veya Component'te import edilmelidir. import[CustomPipe] gibi

@Pipe
(
  {
  name: 'custom'
  }
)
export class CustomPipe implements PipeTransform 
{

  //* Pipe'ın Kullanıldığı değeri manipüle/transform etmemizi sağlayan fonksiyondur.

  //? transform(value: unknown -> aldığı değerin tipi {{value | }}
  //? , ...args: unknown[] -> parametre
  //? ): unknown -> döndüreceği değer türü
  //? {
  //?   return null; -> dönen değer
  //? }

  transform(value: string, a:number, b:number): string //; a?:number olsaydı bu parametre opsiyonel oldurdu.
  {
    return value.slice(a,b);
  }

  //! bu parametreler kullanılırken {{value | custom : a : b}} şeklinde kullanılır.
}
