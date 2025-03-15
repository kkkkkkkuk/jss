
let a =1
 console.log(a)


 let burger = document.querySelector('.burger-button')
 let nav = document.querySelector('.main-nav')
 burger.addEventListener('click', function() {  
    burger.classList.toggle('active')
    nav.classList.toggle('active')
 })

/* navigator.geolocation.getCurrentPosition(function(position){
   let latitude = position.coords.latitude;
   let longitude = position.coords.longitude;
   let path = "https://www.openstreetmap.org/#map=18/" +  latitude + "/" + longitude;
   let link = document.querySelector(".link");
   link.innerHTML = "<a href='" +path + "'>Местоположение</a>";
}); */

navigator.geolocation.getCurrentPosition(function(position){
   let latitude = position.coords.latitude;
   let longitude = position.coords.longitude;

   let map = new ol.Map({
       target: 'map',
       layers: [
           new ol.layer.Tile({
               source: new ol.source.OSM()
           })
       ],
       view: new ol.View({
           center: ol.proj.fromLonLat([longitude,latitude]),
           zoom: 10
       })
   })
});
