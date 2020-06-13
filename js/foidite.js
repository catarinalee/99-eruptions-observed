var ordem = 0;

// colocar aqui todas as imagens, seguindo a ordem numérica
var imagens = new Array();
imagens[0] = {
  image: '<img src="img/nyiragongo.png">',
  name: 'Nyiragongo',
  year: 2020,
  latitude: '1.52°S',
  longitude: '29.25°E',
  elevation: '3470 m',
  vei: 2,
  population: '31,145',
  rock: 'Foidite'
};
imagens[1] = {
  image: '<img src="img/ol-doinyo-lengai.png">',
  name: 'Ol Doinyo Lengai',
  year: 2020,
  latitude: '2.764°S',
  longitude: '35.914°E',
  elevation: '2962 m',
  vei: '—',
  population: '1,855',
  rock: 'Foidite'
};
imagens[2] = {
  image: '<img src="img/fogo.png">',
  name: 'Fogo',
  year: 2015,
  latitude: '14.95°N',
  longitude: '24.35°W',
  elevation: '2829 m',
  vei: '3',
  population: '13,254',
  rock: 'Foidite'
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
