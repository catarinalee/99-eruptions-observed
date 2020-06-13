var ordem = 0;

// colocar aqui todas as imagens, seguindo a ordem numérica
var imagens = new Array();
imagens[0] = {
  image: '<img src="img/nyamuragira.png">',
  name: 'Nyamuragira',
  year: 2020,
  latitude: '1.408°S',
  longitude: '29.2°E',
  elevation: '3058 m',
  vei: '-',
  population: '27,027',
  rock: 'Trachybasalt'
};
imagens[1] = {
  image: '<img src="img/etna.png">',
  name: 'Etna',
  year: 2020,
  latitude: '37.748°N',
  longitude: '14.999°E',
  elevation: '3295 m',
  vei: 2,
  population: '3,291',
  rock: 'Trachybasalt'
};
imagens[2] = {
  image: '<img src="img/heard.png">',
  name: 'Heard',
  year: 2020,
  latitude: '53.106°S',
  longitude: '73.513°E',
  elevation: '2745 m',
  vei: 0,
  population: '0',
  rock: 'Trachybasalt'
};
imagens[3] = {
  image: '<img src="img/sangeang-api.png">',
  name: 'Sangeang Api',
  year: 2020,
  latitude: '8.2°S',
  longitude: '119.07°E',
  elevation: '1912 m',
  vei: 2,
  population: '1,155',
  rock: 'Trachybasalt'
};
imagens[4] = {
  image: '<img src="img/copahue.png">',
  name: 'Copahue',
  year: 2019,
  latitude: '37.856°S',
  longitude: '71.183°W',
  elevation: '2953 m',
  vei: 1,
  population: '555',
  rock: 'Trachybasalt'
};
imagens[5] = {
  image: '<img src="img/batu-tara.png">',
  name: 'Batu Tara',
  year: 2015,
  latitude: '7.791°S',
  longitude: '123.585°E',
  elevation: '633 m',
  vei: 2,
  population: '207',
  rock: 'Trachybasalt'
};
imagens[6] = {
  image: '<img src="img/hierro.png">',
  name: 'Hierro',
  year: 2012,
  latitude: '27.73°N',
  longitude: '18.03°W',
  elevation: '1500 m',
  vei: 2,
  population: '20,321',
  rock: 'Trachybasalt'
};
imagens[7] = {
  image: '<img src="img/jebel-at-tair.png">',
  name: 'Jebel at Tair',
  year: 2008,
  latitude: '15.55°N',
  longitude: '41.83°E',
  elevation: '244 m',
  vei: 3,
  population: '0',
  rock: 'Trachybasalt'
};
imagens[8] = {
  image: '<img src="img/cameroon.png">',
  name: 'Cameroon',
  year: 2000,
  latitude: '4.203°N',
  longitude: '9.17°E',
  elevation: '4095 m',
  vei: 2,
  population: '26,053',
  rock: 'Trachybasalt'
};
imagens[9] = {
  image: '<img src="img/la-palma.png">',
  name: 'La Palma',
  year: 1971,
  latitude: '28.57°N',
  longitude: '17.83°E',
  elevation: '2426 m',
  vei: 2,
  population: '18,506',
  rock: 'Trachybasalt'
};
imagens[10] = {
  image: '<img src="img/tambora.png">',
  name: 'Tambora',
  year: 1967,
  latitude: '8.25°S',
  longitude: '118°E',
  elevation: '2850 m',
  vei: 0,
  population: '11,331',
  rock: 'Trachybasalt'
};
imagens[11] = {
  image: '<img src="img/tristan-da-cunha.png">',
  name: 'Tristan da Cunha',
  year: 1962,
  latitude: '37.092°S',
  longitude: '12.28°W',
  elevation: '2060 m',
  vei: 2,
  population: '12',
  rock: 'Trachybasalt'
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
