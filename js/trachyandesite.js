var ordem = 0;

// colocar aqui todas as imagens, seguindo a ordem numérica
var imagens = new Array();
imagens[0] = {
  image: '<img src="img/stromboli.png">',
  name: 'Stromboli',
  year: 2020,
  latitude: '38.789°N',
  longitude: '15.213°E',
  elevation: '924 m',
  vei: 2,
  population: '2,225',
  rock: 'Trachyandesite'
};
imagens[1] = {
  image: '<img src="img/tenger-caldera.png">',
  name: 'Tenger Caldera',
  year: 2019,
  latitude: '7.942°S',
  longitude: '112.95°E',
  elevation: '2329 m',
  vei: '-',
  population: '69,451',
  rock: 'Trachyandesite'
};
imagens[2] = {
  image: '<img src="img/bogoslof.png">',
  name: 'Bogoslof',
  year: 2017,
  latitude: '53.93°N',
  longitude: '168.03°W',
  elevation: '150 m',
  vei: 3,
  population: '0',
  rock: 'Trachyandesite'
};
imagens[3] = {
  image: '<img src="img/el-chichon.png">',
  name: 'El Chichón',
  year: 1982,
  latitude: '17.36°N',
  longitude: '93.228°W',
  elevation: '1150 m',
  vei: 5,
  population: '11,000',
  rock: 'Trachyandesite'
};
imagens[4] = {
  image: '<img src="img/maipo.png">',
  name: 'Maipo',
  year: 1912,
  latitude: '34.164°S',
  longitude: '69.832°W',
  elevation: '5323 m',
  vei: 2,
  population: '3,916',
  rock: 'Trachyandesite'
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
