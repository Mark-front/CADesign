const center = [57.005456841351275,40.96958420899616];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 18
    });

    let placemark = new ymaps.Placemark([57.00631668696042,40.96942622205543], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-icon.svg',
        iconImageSize: [70, 75],
        iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);