import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//* Validator tanımlayabilmek için geriye ValidationErrors nesnesini ya da null değer dönen ve parametre olarak AbstractControl türünden değer alan bir fonksiyon tanımlanmalıdır.

//* AbstractControl sınıfı validatorlerin çalışabilmesi için gerekli olan form kontrolü, form grubu ve form dizisi gibi bileşenleri temsil eder. Bu sınıf, form bileşenlerinin durumunu ve değerini yönetmek için kullanılır. Validatorler, bu sınıfın bir örneği olan bir kontrol nesnesi alır ve bu nesne üzerinde doğrulama işlemlerini gerçekleştirir.

//* ValidationErrors nesnesi, doğrulama hatalarını temsil eden bir nesnedir. Bu nesne, doğrulama işlemi sırasında oluşan hataları ve bu hataların nedenlerini içerir. ValidationErrors nesnesi, bir anahtar-değer çiftleri koleksiyonu olarak temsil edilir. Anahtar, hata türünü belirtirken, değer ise hata ile ilgili bilgileri içerir.

// export function CustomValid(control: AbstractControl): ValidationErrors | null  
// {
//     const value = control.value;
//     const ascii: string[] = [];
//     for (let n = 65; n <= 90; n++) 
//         {
//         ascii.push(String.fromCharCode(n)); //* .push() fonksiyonu bir diziye yeni bir eleman eklemek için kullanılır.
//         }

//     if (ascii.indexOf(value[0]) == -1) 
//         {
//         return { capitalLetter: true };
//         }
//     return null;
// }

 export function CustomValid(count: number): ValidatorFn  //* Parametrik hale Getirilmiş Validator. ValidatorFn arayüzü burada kullanılır. Bu arayüz, bir doğrulayıcı fonksiyonu temsil eder ve bu fonksiyonun nasıl çalışacağını tanımlar. ValidatorFn arayüzü, bir AbstractControl nesnesi alır ve bu nesne üzerinde doğrulama işlemlerini gerçekleştirir. Bu arayüz, doğrulayıcı fonksiyonlarının nasıl yapılandırılacağını ve nasıl kullanılacağını belirler.
// //* count: kaç tane büyük harf olacağını belirten bir parametredir.
{
    return (control: AbstractControl): ValidationErrors | null => 
    {
     
    const value = control.value;
    const ascii: string[] = [];
    for (let n = 65; n <= 90; n++) 
        {
        ascii.push(String.fromCharCode(n)); //* .push() fonksiyonu bir diziye yeni bir eleman eklemek için kullanılır.
        }
        let state : boolean = true;
        for(let c = 0; c < count; c++)
        {
            if(ascii.indexOf(value[c]) == -1)
            {
                state = false;
                break;
            }
        }
    if (!state) 
        {
            return { capitalLetter: true };
        }
    return null;
    }
}

//* Karşılaştırma validatoru. Bu validator, iki form kontrolünün değerlerini karşılaştırmak için kullanılır. Örneğin, bir şifre ve şifre onayı alanı varsa, bu validator bu iki alanın değerlerini karşılaştırmak için kullanılabilir. Eğer değerler eşleşmiyorsa, bir hata mesajı döndürülür.

//^ Bu validatörler formlarda çağırılmalıdırlar. Çünkü birden fazla form kontrolü üzerinde çalışabilirler. Bu nedenle, bu validatörlerin hangi form kontrolü üzerinde çalıştığını bilmesi gerekir. Bu nedenle, bu validatörler genellikle form grupları veya form dizileri üzerinde kullanılır.

export function matchPassword(): ValidatorFn 
{
  return (control: AbstractControl): ValidationErrors | null => 
    {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) 
        {
      return { passwordMismatch: true };
        }
    return null;
  };
}