const url = urlApi+clientToken;
var url_string = window.location.href;
var urlParam = new URL(url_string);
var urlId = urlParam.searchParams.get("id");


function movieHome() {
  fetch(url)
    .then((response) => {
      return response.json(); // แปลงข้อมูลที่ได้เป็น json
    })
    .then((data) => {
      //console.log(data.data[0].title); // แสดงข้อมูล JSON จาก then ข้างบน
      let movie = data.data;
      for (i = 0; i <= movie.length; i++) {
        //console.log(movies);
        let titleName = movie[i].title;
        let subTitle = titleName.substr(0,50);
        document.querySelector("#home_movie").innerHTML += `
              <div class="col-6 col-md-3 d-flex justify-content-center">
                <div class="card" style="max-width:200px">
                  <img  src="${movie[i].poster}" alt="Card image" style="width:100% max-width: 100%;">
                  <div class="card-body">
                  <small class="badge badge-pill badge-light">${movie[i].tag}</small>
                    <p class="card-text">
                    ${subTitle}
                    </p>
                  </div>
                </div>
            </div>
            `;
      }
    });
}
function moviePlay(movieId) {

    fetch(url + "&id="+movieId)
      .then((response) => {
        return response.json(); // แปลงข้อมูลที่ได้เป็น json
      })
      .then((data) => {
        //console.log(movie); //แสดงข้อมูล JSON จาก then ข้างบน
        const movie = data.data[0];
        document.querySelector("#tag").innerHTML = movie.tag;
        document.querySelector(".anime__details__pic").setAttribute("style", `background-image: url("${movie.poster}")`);
        document.querySelector("#title").innerHTML = movie.title;
        document.querySelector("#imdb").innerHTML = movie.imdb;
        document.querySelector("#year").innerHTML = movie.year;
        document.querySelector("#detial").innerHTML = movie.detial;
        document.querySelector("#preview").setAttribute("src", movie.preview);
        document.querySelector("#files").setAttribute("src", movie.files);
      });
  }
