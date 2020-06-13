var ordem = 0;

// colocar aqui todas as imagens, seguindo a ordem numérica
var imagens = new Array();
imagens[0] = {
  image: '<img src="img/kikai.png">',
  name: 'Kikai',
  year: 2020,
  latitude: '30.793°N',
  longitude: '130.305°W',
  elevation: '704 m',
  vei: '-',
  population: '152',
  rock: 'Rhyolite'
};
imagens[1] = {
  image: '<img src="img/okataina.png">',
  name: 'Okataina',
  year: 1981,
  latitude: '38.12°S',
  longitude: '176.5°E',
  elevation: '1111 m',
  vei: 1,
  population: '579',
  rock: 'Rhyolite'
};
imagens[2] = {
  image: '<img src="img/novarupta.png">',
  name: 'Novarupta',
  year: 1912,
  latitude: '58.27°N',
  longitude: '155.157°W',
  elevation: '841 m',
  vei: 6,
  population: '0',
  rock: 'Rhyolite'
};
imagens[3] = {
  image: '<img src="img/tullu-moje.png">',
  name: 'Tullu Moje',
  year: 1900,
  latitude: '8.159°N',
  longitude: '39.137°E',
  elevation: '2343 m',
  vei: '—',
  population: '51,976',
  rock: 'Rhyolite'
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
