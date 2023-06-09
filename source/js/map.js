function init(ymaps) {
  const map = new ymaps.Map('map', {
    center: [34.87074, -111.76],
    zoom: 7
  });

  const placemark = new ymaps.Placemark([34.87074, -111.76], {
    balloonContentHeader: 'Седона',
    balloonContentBody: 'Аризона 86336',
    balloonContentFooter: 'США'
  }, {
    iconLayout: 'default#image',
    iconImageHref: "img/svg/map-marker.svg",
    iconImageSize: [27, 27],
    iconImageOffset: [-13, -12]
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
