## Product App

Admin ve kullanıcı sayfası bulunan bir ürün kontrol paneli. <br>
Adminin ürünleri ve kullanıcıları denetleyebildiği, müşterinin ise mevcut ürünleri görüp kendi favorilerine ekleyebildiği basit bir web projesi.

## Kullanılan Teknolojiler ve Paketler:

React: Projenin temelini oluşturan kütüphane.<br>
Axios: HTTP isteklerini yönetmek için kullanılan paket.<br>
React-Router-Dom : Uygulamada girilen url'ye göre component çağırma işlevini gerçekleştiren kütüphane. <br>
Redux Toolkit: Uygulama durumunu yönetmek için kullanıldı. Redux yapısı ürünlerin ve kullanıcıların kontrolü ve aynı zamanda müşterinin favori ürünlerini saklamak için kullanıldı. <br>
Ant Design (AntD): Kullanıcı arayüzünü oluşturmak için kullanılan stil ve bileşen kütüphanesi.

Mock API sitesinden ürünler ve kullanıcılar için bir mock veri kullanıldı. <br>
https://mockapi.io/ <br>

## Proje Kurulumu ve Çalışması :

git clone https://github.com/denizytm/ProductApp.git <br>
cd ./ProductApp/product-app <br>
npm install <br>
npm start <br>

## Tarayıcı üzerinden kullanımı :

Site admin ve müşteri olmak üzere iki kısma bölünmüştür <br>

Admin için bulunan url'ler :  <br>

http://localhost:3000/admin/products => bütün product'ları bir tablo üzerinden listeler <br>
http://localhost:3000/admin/products/(productId) => girilen id değerine göre o id'ye ait product'un detay sayfasını görüntüler <br>
http://localhost:3000/admin/products/add => yeni bir product eklemek için bulunan form sayfasına yönlendirir <br>
http://localhost:3000/admin/products/edit/(productId) => varolan bir product verisinin bilgilerini güncellemek için bulunan forma yönlendirir <br>

Müşteri için bulunan url'ler : <br>

http://localhost:3000/products => product'ların listesinin bulunduğu sayfaya yönlendirir <br>
http://localhost:3000/products/(productId) => girilen id değerine göre o id'ye ait product'un detay sayfasını görüntüler <br>
http://localhost:3000/favorites => müşterinin kendi favorisine eklediği ürünlerin listesini bulunduğu sayfaya yönlendirir <br>

## Proje Yapısı :

src/app -> store yapısının tanımlandığı dosyayı bulundurur <br> 
src/assets -> image dosyalarını tutan klasör <br>
src/components -> bileşenlerin bulunduğu klasör <br>
src/modules -> react redux toolkit yapısına bağlı olan verileri ve bunların style, component dosyalarını tutan yapı <br>
src/pages -> sayfaların tamamını içeren componentleri içeren klasör <br>
src/style -> CSS'leri bulunduran klasör <br>

