// console.log("Working");
// const input = document.getElementById("input");
// const container = document.getElementById("container");
// const showMoreBtn = document.getElementById("showMoreBtn");
// const SearchBtn = document.getElementById("SearchBtn");

// SearchBtn.addEventListener("click", () => {
//   console.log(input.value);
//   let query = input.value;
//   displayData(query);
// });

// let query = input.value;
let query = "Happy";
let page = 1;
let clientId = "21mXJ2EbpBqB-XfQufUNEB1yvwqrVy84An5Iwcr8O4g";

// https://api.unsplash.com/search/photos?page=1&query=Happy&client_id=21mXJ2EbpBqB-XfQufUNEB1yvwqrVy84An5Iwcr8O4g

const displayData = (query) => {
  let api = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${clientId}`;
  fetch(api)
    .then((res) => {
      //   console.log(res);
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      data.results.forEach((ele) => {
        console.log(ele.id);
      });
      //     const demo = document.createElement("div");
      //     demo.innerHTML = movie.id;
      //     container.appendChild(demo);
      //   });
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
