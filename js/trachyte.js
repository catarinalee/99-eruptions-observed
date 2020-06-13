var ordem = 0;

// colocar aqui todas as imagens, seguindo a ordem numérica
var imagens = new Array();
imagens[0] = {
  image: '<img src="img/nabro.png">',
  name: 'Nabro',
  year: 2012,
  latitude: '13.37°N',
  longitude: '41.7°E',
  elevation: '2218 m',
  vei: 4,
  population: '145',
  rock: 'Trachyte'
};
imagens[1] = {
  image: '<img src="img/nightingale-island.png">',
  name: 'Nightingale Island',
  year: 2004,
  latitude: '37.42°S',
  longitude: '12.48°W',
  elevation: '365 m',
  vei: 0,
  population: '0',
  rock: 'Trachyte'
};
imagens[2] = {
  image: '<img src="img/socorro.png">',
  name: 'Socorro',
  year: 1994,
  latitude: '18.78°N',
  longitude: '110.95°W',
  elevation: '1050 m',
  vei: 0,
  population: '0',
  rock: 'Trachyte'
};
imagens[3] = {
  image: '<img src="img/barcena.png">',
  name: 'Bárcena',
  year: 1953,
  latitude: '19.3°N',
  longitude: '110.82°W',
  elevation: '332 m',
  vei: 3,
  population: '0',
  rock: 'Trachyte'
};
imagens[4] = {
  image: '<img src="img/the-barrier.png">',
  name: 'The Barrier',
  year: 1921,
  latitude: '2.32°N',
  longitude: '36.57°E',
  elevation: '1032 m',
  vei: 2,
  population: '112',
  rock: 'Trachyte'
};
imagens[5] = {
  image: '<img src="img/changbaishan.png">',
  name: 'Changbaishan',
  year: 1903,
  latitude: '41.98°N',
  longitude: '128.08°E',
  elevation: '2744 m',
  vei: '-',
  population: '1,833',
  rock: 'Trachyte'
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
