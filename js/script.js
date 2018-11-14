function getImg () {

  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://api.thecatapi.com/v1/images/search",true);
  xhr.send();

  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      let imgCat = document.querySelector('[alt="gato"]');
      json.forEach(function (e) {
        imgCat.src = e.url;
      })
    }
  }
};

(function() {
  document.addEventListener('DOMContentLoaded', getImg);
  let btNext = document.querySelector('[name="nextBt"]');
  btNext.addEventListener('click', getImg);
}());

(function () {
  var favCats = [];
  var favList = document.querySelector('#favList');
  let btLike = document.querySelector('[name="likeBt"]');
  let imgCat = document.querySelector('[alt="gato"]');
  btLike.addEventListener('click', function () {
    if (favCats.includes(imgCat.src)===false) {
      favCats.push(imgCat.src);
      var li = document.createElement('li');
      li.classList.add('img-fav-container');
      var img = document.createElement('img');
      img.classList.add('img-fav');
      img.src = imgCat.src;
      li.appendChild(img);
      favList.appendChild(li);
    }
  })
})();
