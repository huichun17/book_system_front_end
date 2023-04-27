fetch("http://localhost:8080/find_Top_5_By_Order_By_Sales_Desc", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    
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

