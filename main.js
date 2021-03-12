$(document).ready(function () {
  $("#block-control").fadeIn();
  TweenMax.from("#block-control", 1, { scale: 0, ease: Sine.easeInOut });
  TweenMax.to("#block-control", 1, { scale: 1, ease: Sine.easeInOut });
});

var api = " https://www.themealdb.com/api/json/v1/1/random.php";
var blockHtml = document.getElementById("content");
const ingredients = [];
document.getElementById("get-mean-btn").onclick = function () {
  $("#btn-get-meals").show();
  scroll();
  fetch(api)
    .then((responsive) => responsive.json())
    .then(function (post) {
      renderHTML(post.meals[0]);
    });
};

function renderHTML(obj) {
  getIngredients(obj);
  blockHtml.innerHTML = `
    <div class="container">
        <div class="row tutorial">
          <div class="col-md-5 col-12">
            <div id="img-post">
              <img src="${obj.strMealThumb}" alt="">
            </div>
          </div>
          <div class="col-md-7 col-12">
            <h2>${obj.strMeal}</h2>
            <p>${obj.strInstructions}</p>
          </div>
        </div>
        <div class="info">
          <ul>
            <li><span>Category:</span>${obj.strCategory}</li>
            <li><span>Area:</span> ${obj.strArea}</li>
            <li><span>Tags:</span> Speciality, Snack, StrongFlavor</li>
          </ul>
        </div>

        <div class="material">
          <h2>Ingredients:</h2>
          <ul>
            ${ingredients
              .map(
                (item) => `
              <li>${item}</li>
            `
              )
              .join("")}
          </ul>
        </div>

        <div class="recipe">
          <iframe width="100%" height="562" src="https://www.youtube.com/embed/${obj.strYoutube.slice(
            -11
          )}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>

  `;
}

function getIngredients(arr) {
  for (i = 1; 1 <= 20; i++) {
    if (arr[`strIngredient1${i}`]) {
      ingredients.push(
        `${arr[`strIngredient1${i}`]} - ${arr[`strMeasure${i}`]}`
      );
    } else break;
  }
}

function scroll() {
  $("html, body").animate(
    {
      scrollTop: $("#content").offset().top,
    },
    2000
  );
}
