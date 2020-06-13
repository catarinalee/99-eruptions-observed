var ordem = 0;

// colocar aqui todas as imagens, seguindo a ordem numérica
var imagens = new Array();

imagens[0] = {
  image: '<img src="img/asosan.png">',
  name: 'Asosan',
  year: 2020,
  latitude: '32.884°N',
  longitude: '131.104°E',
  elevation: '1592 m',
  vei: 3,
  population: '75,559',
  rock: 'Andesite'
};
imagens[1] = {
  image: '<img src="img/merapi.png">',
  name: 'Merapi',
  year: 2020,
  latitude: '7.54°S',
  longitude: '110.446°E',
  elevation: '2910 m',
  vei: 3,
  population: '185,849',
  rock: 'Andesite'
};
imagens[2] = {
  image: '<img src="img/soputan.png">',
  name: 'Soputan',
  year: 2020,
  latitude: '1.112°N',
  longitude: '124.737°E',
  elevation: '1785 m',
  vei: '-',
  population: '69,991',
  rock: 'Andesite'
};
imagens[3] = {
  image: '<img src="img/san-miguel.png">',
  name: 'San Miguel',
  year: 2020,
  latitude: '13.434°N',
  longitude: '88.269°W',
  elevation: '2130 m',
  vei: '-',
  population: '63,007',
  rock: 'Andesite'
};
imagens[4] = {
  image: '<img src="img/kerinci.png">',
  name: 'Kerinci',
  year: 2020,
  latitude: '1.697°S',
  longitude: '101.264°E',
  elevation: '3800 m',
  vei: '1',
  population: '33,878',
  rock: 'Andesite'
};
imagens[5] = {
  image: '<img src="img/nevado-del-ruiz.png">',
  name: 'Nevado del Ruiz',
  year: 2020,
  latitude: '4.892°N',
  longitude: '75.324°W',
  elevation: '5279 m',
  vei: '2',
  population: '20,146',
  rock: 'Andesite'
};
imagens[6] = {
  image: '<img src="img/ibu.png">',
  name: 'Ibu',
  year: 2020,
  latitude: '1.488°N',
  longitude: '127.63°E',
  elevation: '1325 m',
  vei: '1',
  population: '14,549',
  rock: 'Andesite'
};
imagens[7] = {
  image: '<img src="img/semeru.png">',
  name: 'Semeru',
  year: 2020,
  latitude: '8.108°S',
  longitude: '112.922°E',
  elevation: '3657 m',
  vei: '1',
  population: '8,375',
  rock: 'Andesite'
};
imagens[8] = {
  image: '<img src="img/yasur.png">',
  name: 'Yasur',
  year: 2020,
  latitude: '19.532°S',
  longitude: '169.447°E',
  elevation: '361 m',
  vei: 3,
  population: '6,068',
  rock: 'Andesite'
};
imagens[9] = {
  image: '<img src="img/karangetang.png">',
  name: 'Karangetang',
  year: 2020,
  latitude: '2.781°N',
  longitude: '125.407°E',
  elevation: '1797 m',
  vei: 3,
  population: '4,478',
  rock: 'Andesite'
};
imagens[10] = {
  image: '<img src="img/popocatepetl.png">',
  name: 'Popocatepetl',
  year: 2020,
  latitude: '19.023°N',
  longitude: '98.622°W',
  elevation: '5393 m',
  vei: 2,
  population: '2,584',
  rock: 'Andesite'
};
imagens[11] = {
  image: '<img src="img/kuchinoerabujima.png">',
  name: 'Kuchinoerabujima',
  year: 2020,
  latitude: '30.443°N',
  longitude: '130.217°E',
  elevation: '657 m',
  vei: 3,
  population: '1,698',
  rock: 'Andesite'
};
imagens[12] = {
  image: '<img src="img/sangay.png">',
  name: 'Sangay',
  year: 2020,
  latitude: '2.005°S',
  longitude: '78.341°W',
  elevation: '5286 m',
  vei: 2,
  population: '1,675',
  rock: 'Andesite'
};
imagens[13] = {
  image: '<img src="img/reventador.png">',
  name: 'Reventador',
  year: 2020,
  latitude: '0.077°S',
  longitude: '77.656°W',
  elevation: '3562 m',
  vei: 2,
  population: '963',
  rock: 'Andesite'
};
imagens[14] = {
  image: '<img src="img/sabancaya.png">',
  name: 'Sabancaya',
  year: 2020,
  latitude: '15.787°S',
  longitude: '71.857°W',
  elevation: '5960 m',
  vei: 3,
  population: '526',
  rock: 'Andesite'
};
imagens[15] = {
  image: '<img src="img/nevados-de-chillan.png">',
  name: 'Nevados de Chillan',
  year: 2020,
  latitude: '36.868°S',
  longitude: '71.378°W',
  elevation: '3180 m',
  vei: 2,
  population: '371',
  rock: 'Andesite'
};
imagens[16] = {
  image: '<img src="img/ebeko.png">',
  name: 'Ebeko',
  year: 2020,
  latitude: '50.686°N',
  longitude: '156.014°E',
  elevation: '1103 m',
  vei: 2,
  population: '267',
  rock: 'Andesite'
};
imagens[17] = {
  image: '<img src="img/suwanosejima.png">',
  name: 'Suwanosejima',
  year: 2020,
  latitude: '29.638°N',
  longitude: '129.714°E',
  elevation: '796 m',
  vei: 2,
  population: '107',
  rock: 'Andesite'
};
imagens[18] = {
  image: '<img src="img/tinakula.png">',
  name: 'Tinakula',
  year: 2020,
  latitude: '10.386°S',
  longitude: '165.804°E',
  elevation: '796 m',
  vei: 2,
  population: '19',
  rock: 'Andesite'
};
imagens[19] = {
  image: '<img src="img/sheveluch.png">',
  name: 'Sheveluch',
  year: 2020,
  latitude: '56.653°N',
  longitude: '161.36°E',
  elevation: '3283 m',
  vei: 4,
  population: '0',
  rock: 'Andesite'
};
imagens[20] = {
  image: '<img src="img/bezymianny.png">',
  name: 'Bezymianny',
  year: 2020,
  latitude: '55.972°N',
  longitude: '160.595°E',
  elevation: '2882 m',
  vei: 3,
  population: '0',
  rock: 'Andesite'
};
imagens[21] = {
  image: '<img src="img/karymsky.png">',
  name: 'Karymsky',
  year: 2020,
  latitude: '54.049°N',
  longitude: '159.443°E',
  elevation: '1513 m',
  vei: '—',
  population: '0',
  rock: 'Andesite'
};

function rodarImagens() {
  document.getElementById('image').innerHTML = imagens[ordem]['image'];
  document.getElementById('name').innerHTML = "<h2>name</h2>" + imagens[ordem]['name'];
  document.getElementById('latitude').innerHTML = "<h2>latitude</h2>" + imagens[ordem]['latitude'];
  document.getElementById('longitude').innerHTML = "<h2>longitude</h2>" + imagens[ordem]['longitude'];
  document.getElementById('year').innerHTML = "<h2>last known eruption</h2>" + imagens[ordem]['year'];
  document.getElementById('rock').innerHTML = "<h2>major rock type</h2>" + imagens[ordem]['rock'];
  document.getElementById('elevation').innerHTML = "<h2>summit elevation</h2>" + imagens[ordem]['elevation'];
  document.getElementById('population').innerHTML = "<h2>population (within 10km)</h2>" + imagens[ordem]['population'];
  document.getElementById('vei').innerHTML = "<h2>vei</h2>" + imagens[ordem]['vei'];

  console.log(imagens[ordem]['nome']);

  ordem++;

  if (ordem >= imagens.length)
    ordem = 0;

}

onload = function() {
  rodarImagens();
}
var inter = setInterval(function() {
  rodarImagens();
}, 3000);
