// const buyBookBtn = document.querySelector("#buyBookBtnId");
// const bookTitle = document.querySelector("#bookTitleId");
// const quantity = document.querySelector("#quantityId");
// const addToCartBtn = document.querySelector("#buyBookBtnId");

// addToCartBtn.addEventListener("click", function () {



// })


// buyBookBtn.addEventListener("click", function () {
//     // 獲取用戶輸入的值
//     const bookTitleValue = bookTitle.value;
//     const quantityValue = parseInt(quantity.value);

    // let body = {
    //     "books": [
    //         {
    //             "bookTitle": bookTitleValue,
    //             "quantity": quantityValue,
    //         }
    //     ]
    // }

//     console.log(body);

//     fetch("http://localhost:8080/buy_books", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body)
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         })


// });

const buyBookBtn = document.querySelector("#buyBookBtnId");
const bookTitle = document.querySelector("#bookTitleId");
const quantity = document.querySelector("#quantityId");
const addToCartBtn = document.querySelector("#addToCartBtnId");
let cart = [];

addToCartBtn.addEventListener("click", function () {
  const bookTitleValue = bookTitle.value;
  const quantityValue = parseInt(quantity.value);

  // 組合購物車物品
  const item = {
    "bookTitle": bookTitleValue,
    "quantity": quantityValue,
  };

  // 將物品加入購物車
  cart.push(item);

  // 顯示購物車內容
  let result = "";
  cart.forEach(function (item) {
    result += item.bookTitle + " x " + item.quantity + "<br>";
  });
  document.querySelector("#result").innerHTML = result;

  // 清空輸入框
  bookTitle.value = "";
  quantity.value = "";
});

buyBookBtn.addEventListener("click", function () {
  // 組合要送出的資料
  let body = {
    "books": cart
  };

  console.log(body);

  fetch("http://localhost:8080/buy_books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // 顯示購買清單
      let buyList = "";
      data.forEach(function (item) {
        buyList += item.bookTitle + " x " + item.quantity + "<br>";
      });
      document.querySelector("#buyList").innerHTML = buyList;
    })
    .catch(function (error) {
      console.log(error);
    });

  // 清空購物車
  cart = [];
  document.querySelector("#result").innerHTML = "";
});