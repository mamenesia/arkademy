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

  ![gambar cetak_gambar(5)](https://github.com/mamenesia/arkademy/blob/master/ss1.png)

      const cetak_gambar = (n) => {
          if(n%2 === 0){
              console.log("ERROR!!! Input Number Must Be An Odd Number!");
          } else {
              for(let row=0; row < n; row++){
                  let lines = "";

                  for(let col=0; col<n;col++){
                      if(col === 0 || col === n-1){
                          lines += '*';
                      } else if(row === Math.floor(n/2)){
                          lines += '*';
                      } else {
                          lines += '=';
                      }
                  }
                  console.log(lines)
              }
          }
      };

      cetak_gambar(5);

  ## Soal No. 4
  Buatlah fungsi yang mempunyai sebuah parameter yang bekerja untuk menghitung jumlah huruf hidup pada sebuah string.

        const count_vowels = (str) => {
        const vowels = str.match(/[aiueo]/gi);
        
        return vowels ? vowels.length : 0 ;
        };

        console.log(count_vowels('programmer'));
        console.log(count_vowels('hmm'));

  ## Soal No. 5
  Buatlah sebuah function memiliki sebuah parameter berupa array yang berisi array yang berisi abjad, yang mempunyai tugas untuk mengurutkan array terpendek ke terpanjang, dan juga mengurutkan abjad di dalamnya dari a ke z. Dilarang menggunakan built in function array_multisort
  misalnya:

  ![hasil sort_array()](https://github.com/mamenesia/arkademy/blob/master/ss2.png)

      const sort_array = (data) => {
          for(let i = 0; i < data.length; i++){
            data[i].sort((a, b) => {
              if(a > b){ return 1;}
              else if(a < b) { return -1; }
              else { return 0; }
            });
          }

          return data.sort((a, b) => a.length - b.length );
      };

      var data = [
        ['a','c','b','e','d'],
        ['g','e','f']
        ];

        console.log(sort_array(data));
        
        var datalain = [
          ['g','h','i','j'],
      ['a','c','b','e','d'],
      ['g','e','f']
      ];

      console.log(sort_array(datalain));

  ## Soal No. 6
  ### Penyelesaian Soal No. 6 ada di folder soal6
  [Penyelesaian Soal No. 6](https://github.com/mamenesia/arkademy/tree/master/soal6)

  Penyelesaian Soal 6A dapat di temukan di file 'No 6A.txt'
  [file No 6A.txt](https://github.com/mamenesia/arkademy/blob/master/soal6/No%206A.txt)

      mysql -u root -p
      CREATE DATABASE arkademy;

      CREATE TABLE category(
        id INT AUTO_INCREMENT PRIMARY KEY,
        salary VARCHAR(100)
      );

      CREATE TABLE work(
        id INT AUTO_INCREMENT PRIMARY KEY,
        work VARCHAR(100),
        id_salary INT,
        FOREIGN KEY (id_salary) REFERENCES category(id)
      );

      CREATE TABLE name(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        id_work INT,
        id_salary INT,
        FOREIGN KEY (id_work) REFERENCES work(id),
        FOREIGN KEY (id_salary) REFERENCES category(id)
      );

      INSERT INTO category(salary) VALUES ('10.000.000');
      INSERT INTO category(salary) VALUES ('12.000.000');

      INSERT INTO work(work, id_salary) VALUES ('Frontend Dev', 1);
      INSERT INTO work(work, id_salary) VALUES ('Backend Dev', 2);

      INSERT INTO name(name, id_work, id_salary) VALUES ('Rebecca', 1, 1);
      INSERT INTO name(name, id_work, id_salary) VALUES ('Vita', 2, 2);

      SELECT name.name, work.work, category.salary FROM name, work, category WHERE name.id_work=work.id AND name.id_salary=category.id;

  Penyelesaian Soal 6B&6C dikerjakan menggunakan nodejs, expressjs, ejs, mysql dan nodemon.
  Untuk menjalankan programnya, ketik "npx nodemon" pada console.

  Berikut Screenshoot program yang telah dibuat :
  * Tampilan Home
  ![tampilan home](ttps://github.com/mamenesia/arkademy/blob/master/ss3.png)

  * Tampilan ADD Name / Edit
  ![tampilan add](ttps://github.com/mamenesia/arkademy/blob/master/ss4.png)

  * Tampilan DELETE
  ![tampilan delete](ttps://github.com/mamenesia/arkademy/blob/master/ss5.png)