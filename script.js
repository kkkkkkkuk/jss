let condition = true;
function forwards() {
  anime({
    targets: ".menu_small",
    translateX: ["100%", "0"],
    backgroundColor: ["white", "black"],
    color: "white",
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });

  anime({
    targets: ".menu_small_icon",
    rotate: 90,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  anime({
    targets: ".stick",
    rotate: 180,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  condition = false;
}

function backwards() {
  anime({
    targets: ".menu_small",
    translateX: ["0", "100%"],
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  anime({
    targets: ".menu_small_icon",
    rotate: 0,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  anime({
    targets: ".stick",
    rotate: 0,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  condition = true;
}

$(".menu_small_icon").click(function () {
  if (condition) {
    forwards();
  } else {
    backwards();
  }
});

/* let burger = document.querySelector('.burger-button')
 let nav = document.querySelector('.main-nav')
 burger.addEventListener('click', function() {  
    burger.classList.toggle('active')
    nav.classList.toggle('active')
 }) из-за этого не отображалась карта*/

/* navigator.geolocation.getCurrentPosition(function(position){
   let latitude = position.coords.latitude;
   let longitude = position.coords.longitude;
   let path = "https://www.openstreetmap.org/#map=18/" +  latitude + "/" + longitude;
   let link = document.querySelector(".link");
   link.innerHTML = "<a href='" +path + "'>Местоположение</a>";
}); */

navigator.geolocation.getCurrentPosition(function (position) {
  let latitude = /*position.coords.latitude*/ 55.746051; /*координаты по широте*/
  let longitude = /*position.coords.longitude*/ 37.63199; /*координаты по долготе*/

  let map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([longitude, latitude]),
      zoom: 19.5,
    }),
  });
});
