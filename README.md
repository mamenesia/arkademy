# Arkademy Bootcamp

## Soal No. 1
 * Kegunaan JSON pada REST API adalah sebagai format untuk mengirim (sending) dan meminta (requesting) data pada REST API. Selain JSON format data transfer bisa berupa XML (eXtensible Markup Language) dan plain text, tetapi format data JSON lebih populer karena berukuran ringan dan formatnya lebih mudah untuk dibaca dan dimengerti.

## Soal No. 2
  Format username: merupakan kombinasi dari huruf kecil, huruf besar dan angka dengan panjang 5-9 karakter. Username tidak boleh diawali dengan angka / karakter special.

    const is_username_valid = (username) =>  /^[a-zA-Z][\w]{4,9}$/.test(username);

    console.log(is_username_valid('Xrutaf888'));
    console.log(is_username_valid('1Diana'));

  Format password: merupakan kombinasi dari huruf kecil, huruf besar minimal satu karakter, angka minimal satu karakter, dan karakter spesial minimal satu karakter dan harus memiliki karakter simbol “=”  dan panjang minimal 8 karakter.

    const is_password_valid = (password) =>  /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W|_])(?=.*[=]).{8,}$/.test(password);

    console.log(is_password_valid('passW0rd='));
    console.log(is_password_valid('C0d3YourFuture!#'));

## Soal No. 3
  Buatlah function untuk mencetak gambar seperti dibawah ini, yang mempunyai sebuah parameter sebagai panjang lebar/tinggi gambar. Parameter harus merupakan bilangan ganjil:

  [gambar cetak_gambar(5)]()
