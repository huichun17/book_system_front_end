const addBtn = document.querySelector("#add_BtnId");
// 獲取表單元素
const bookTitle = document.querySelector("#bookTitleId");
const isbn = document.querySelector("#isbnId");
const author = document.querySelector("#authorId");
const price = document.querySelector("#priceId");
const inventory = document.querySelector("#inventoryId");
const sales = document.querySelector("#salesId");
const type = document.querySelector("#typeId");
const addResponse = document.querySelector("#addResponseId");

addBtn.addEventListener("click", function () {
    let addRes;


    // 獲取用戶輸入的值
    const bookTitleValue = bookTitle.value;
    const isbnValue = isbn.value;
    const authorValue = author.value;
    const priceValue = parseInt(price.value);//entity是int的緣故
    const inventoryValue = parseInt(inventory.value);
    const salesValue = parseInt(sales.value);
    const typeValue = type.value;

    let body = {
        "book_store_list": [
            {
                "bookTitle": bookTitleValue,
                "isbn": isbnValue,
                "author": authorValue,
                "price": priceValue,
                "inventory": inventoryValue,
                "sales": salesValue,
                "type": typeValue
            }
        ]
    }

    console.log(body);

    fetch("http://localhost:8080/add_Book", {
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

    addResponse.textContent = addRes;
    console.log(addRes);


});
