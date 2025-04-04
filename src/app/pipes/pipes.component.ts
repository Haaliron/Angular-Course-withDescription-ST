import { Component } from '@angular/core';

//* Pipe'lar bir verinin görüntülenme şeklini değiştirmek için kullanılır.

//? Built-in yani hazır Pipe'lar şunlardır;
/*
  ! Metin Biçimlendirme Pipe'ları
    ^UpperCase : Metni tamamen büyük harflere dönüştürür. {{'metin' | uppercase}} -> METİN
    ^LowerCase : Metni tamamen küçük harflere dönüştürür. {{'MEtİN' | lowercase}} -> metin
    ^TitleCase : Metnin her kelimesinin ilk harfini büyük yapar. {{'angular test' | titlecase}} -> Angular Test

  ! Sayı Biçimleri Pipe'ları
    ^Number : Sayısal değerleri belirli bir desene göre biçimlendirir. {{1234.5 | number:'1.2-2'}} -> 1,234.50
    ^Percent : Sayısal değeri yüzde formantında gösterir. {{0.25 | percent}} -> %25
    ^Currency : Para birimi formatında gösterir. {{1234.5 | currency:'TRY':'symbol':'1.2-2'}} -> ₺1.234,50

  !Tarih ve Zaman Pipe'ları
    ^Date : Tarih ve saat değerlerini belirli bir formata dönüştürür. {{tarih | date }} -> Sep 5, 1992
                                                                    ^ {{tarih | date : 'dd/MM/yyyy'}} -> 02/04/2025
                                                                    ^ {{tarih | date : 'fullDate'}} -> Saturday, September 5, 1992
                                                                    ^ {{tarih | date : 'medium'}} -> Sep 5, 1992, 12:00:00 AM
                                                                    ^ {{tarih | date : 'shortTime'}} -> 12:00 AM
                                                                    ^ {{tarih | date : 'mm:ss'}} -> 00:00

  !JSON ve Veri Dönüştürme Pipe'ları
    ^Json : Bir nesneyi JSON formatında string'e dönüştürür. {{nesne | json}}
    ^Slice : Dizileri veya stringleri belirli bir aralıkta keser. {{[1,2,3,4,5] | slice:1:3}} -> [2,3]

  !Async Pipe
    ^Async : Promise veya Observable türündeki verileri abonelik yapmadan şablonda kullanmayı sağlar. {{veriAkışı | async}}

  !KeyValue Pipe 
    ^KeyValue : ​Angular'da keyvalue pipe'ı, bir nesneyi veya Map nesnesini anahtar-değer çiftlerinden oluşan bir diziye dönüştürerek,
    ^ şablonlarda *ngFor yapısıyla kolayca iterate edilmesini sağlar. CommonModule modülü projeye dahil (import) edilmelidir.

    *<div *ngFor="let item of myObject | keyvalue">{{ item.key }}: {{ item.value }}</div>


    ; Custom Pipe'lar ng g p name şeklinde oluşturulurlar !
*/

@Component(
  {
  selector: 'app-pipes',
  imports: [],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
  }
)
export class PipesComponent 
{

}
