const buyBookBtn = document.querySelector("#buyBookBtnId");
const bookTitle = document.querySelector("#bookTitleId");
const quantity = document.querySelector("#quantityId");


buyBookBtn.addEventListener("click", function () {
    // 獲取用戶輸入的值
    const bookTitleValue = bookTitle.value;
    const quantityValue = parseInt(quantity.value);

    let body = {
        "books": [
            {
                "bookTitle": bookTitleValue,
                "quantity": quantityValue,
            }
        ]
    }

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
        })
        .catch(function (error) {
            console.log(error);
        })


});