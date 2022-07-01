// Fonksiyona string değer gönderilmesi
// let string_deger = "Ahmet";
// reverseString(string_deger);

// Fonksiyona string olmayan değer gönderilmesi
let digerleri = 250;
reverseString(digerleri);

function reverseString(s) {
  try {
    let dizi = s.split("");
    var ters = "";

    for (let i = dizi.length - 1; i >= 0; i--) {
      ters += dizi[i];
    }

    console.log(ters);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
}
