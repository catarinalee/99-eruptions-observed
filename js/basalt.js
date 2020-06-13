var ordem = 0;

var imagens = new Array();

imagens[0] = {
  image: '<img src="img/fuego.png">',
  name: 'Fuego',
  year: 2020,
  latitude: '14.473°N',
  longitude: '90.88°W',
  elevation: '3763 m',
  vei: 2,
  population: '54,332',
  rock: 'Basalt'
};
imagens[1] = {
  image: '<img src="img/manam.png">',
  name: 'Manam',
  year: 2020,
  latitude: '4.08°S',
  longitude: '145.037°E',
  elevation: '1807 m',
  vei: 4,
  population: '2,553',
  rock: 'Basalt'
};
imagens[2] = {
  image: '<img src="img/villarrica.png">',
  name: 'Villarrica',
  year: 2020,
  latitude: '39.42°S',
  longitude: '71.93°W',
  elevation: '2847 m',
  vei: 1,
  population: '1,067',
  rock: 'Basalt'
};
imagens[3] = {
  image: '<img src="img/barren-island.png">',
  name: 'Barren Island',
  year: 2020,
  latitude: '12.278°N',
  longitude: '93.858°E',
  elevation: '354 m',
  vei: 1,
  population: '645',
  rock: 'Basalt'
};
imagens[4] = {
  image: '<img src="img/masaya.png">',
  name: 'Masaya',
  year: 2020,
  latitude: '11.985°N',
  longitude: '86.165°W',
  elevation: '594 m',
  vei: 1,
  population: '989,888',
  rock: 'Basalt'
};
imagens[5] = {
  image: '<img src="img/klyuchevskoy.png">',
  name: 'Klyuchevskoy',
  year: 2020,
  latitude: '56.056°N',
  longitude: '160.642°E',
  elevation: '4754 m',
  vei: 2,
  population: '0',
  rock: 'Basalt'
};
imagens[6] = {
  image: '<img src="img/shishaldin.png">',
  name: 'Shishaldin',
  year: 2020,
  latitude: '54.756°N',
  longitude: '163.97°W',
  elevation: '2857 m',
  vei: 3,
  population: '0',
  rock: 'Basalt'
};
imagens[7] = {
  image: '<img src="img/semisopochnoi.png">',
  name: 'Semisopochnoi',
  year: 2020,
  latitude: '51.93°N',
  longitude: '179.58°E',
  elevation: '1221 m',
  vei: 1,
  population: '0',
  rock: 'Basalt'
};
imagens[8] = {
  image: '<img src="img/saunders.png">',
  name: 'Saunders',
  year: 2020,
  latitude: '57.8°S',
  longitude: '26.483°W',
  elevation: '843 m',
  vei: '—',
  population: '0',
  rock: 'Basalt'
};
imagens[9] = {
  image: '<img src="img/san-cristobal.png">',
  name: 'San Cristobal',
  year: 2019,
  latitude: '12.702°N',
  longitude: '87.004°W',
  elevation: '1745 m',
  vei: 1,
  population: '7,876',
  rock: 'Basalt'
};
imagens[10] = {
  image: '<img src="img/ulawun.png">',
  name: 'Ulawun',
  year: 2019,
  latitude: '5.05°S',
  longitude: '151.33°E',
  elevation: '2334 m',
  vei: 4,
  population: '1,801',
  rock: 'Basalt'
};
imagens[11] = {
  image: '<img src="img/raikoke.png">',
  name: 'Raikoke',
  year: 2019,
  latitude: '48.292°N',
  longitude: '153.25°E',
  elevation: '551 m',
  vei: 3,
  population: '0',
  rock: 'Basalt'
};
imagens[12] = {
  image: '<img src="img/grimsvotn.png">',
  name: 'Grímsvötn',
  year: 2011,
  latitude: '64.416°N',
  longitude: '17.316°W',
  elevation: '1719 m',
  vei: 4,
  population: '0',
  rock: 'Basalt'
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
