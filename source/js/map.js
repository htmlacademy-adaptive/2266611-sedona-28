function init(ymaps) {
  const map = new ymaps.Map('map', {
    center: [34.87074, -111.76],
    zoom: 7
  });

  const placemark = new ymaps.Placemark([34.87074, -111.76], {}, {
    iconLayout: 'default#image',
    iconImageHref: "img/map-marker.svg",
    iconImageSize: [27, 27],
    iconImageOffset: [-13, 0]
  });

  map.controls.remove('searchControl');
  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
