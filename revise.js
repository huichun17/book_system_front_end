const result = document.querySelector(".result");

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
        "bookTitle": "原子習慣",
        "isbn": "09637"
    }

    console.log(body);

    fetch("http://localhost:8080/revise", {
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
            result.innerHTML =`<h5>${data.message}</h5>`;
        })
        .catch(function (error) {
            console.log(error);
        })

    

    console.log(addRes);


});