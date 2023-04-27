const searchBtn = document.querySelector("#searchBtnId");
const type = document.querySelector("#typeId");

searchBtn.addEventListener("click", function () {
    // 獲取用戶輸入的值
    const typeValue = type.value;

    let body = {
        "type": typeValue
    }

    console.log(body);

    fetch("http://localhost:8080/read_Book", {
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