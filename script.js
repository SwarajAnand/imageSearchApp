console.log("Working");
const input = document.getElementById("input");
const mainContainer = document.getElementById("mainContainer");
const showMoreBtn = document.getElementById("showMoreBtn");
const SearchBtn = document.getElementById("SearchBtn");

SearchBtn.addEventListener("click", () => {
  console.log(input.value);
  let query = input.value;
  displayData(query);
});

let page = 1;
let clientId = "21mXJ2EbpBqB-XfQufUNEB1yvwqrVy84An5Iwcr8O4g";
let query = "happy";

const displayData = (query) => {
  mainContainer.innerHTML = "";
  let api = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${clientId}`;
  let gridContainer = document.createElement("div");
  gridContainer.classList.add("gridContainer");
  fetch(api)
    .then((res) => {
      //   console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.results.forEach((ele, idx) => {
        const demo = document.createElement("div");
        demo.classList.add("container");
        demo.innerHTML = `
        <img src="${ele.urls.regular}" alt="${ele.alternative_slugs.en}"/>
        `;

        // gridContainer.appendChild(demo);
        mainContainer.appendChild(demo);
      });

      // console.log(gridContainer);
      // mainContainer.appendChild(gridContainer);
      // console.log(mainContainer);
    });
};

displayData(query);

// console.log("Working");

// let query = "happy";

// let api = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${clientId}`;
// console.log(api);

// fetch(api)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
