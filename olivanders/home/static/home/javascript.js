
function addToCart(index) {
    if (sessionStorage.cart === undefined) {
        sessionStorage.cart = index;
    } else {
        sessionStorage.cart += index;
    }

}

function shoppingCart() {
    if (sessionStorage.cart === undefined) {
        sessionStorage.cart = undefined;
    }
    var display = "";
    var itemLength = wand_list.length;
    var quantity = [];
    for (var i = 0; i < itemLength; i++) {
        quantity.push(0);
    }
    var total = 0;
    if (sessionStorage.cart == "undefined") {
        clearCart();
    }
    else {
        for (var k = 0; k < sessionStorage.cart.length; k++) {
            var t = parseInt(sessionStorage.cart[k]);
            quantity[t]++;
        }
        display += "<div  class=" + "cartTable" + " ><table id=" + "t01" + " ><tr><th>Item</th><th>Price</th><th>Quantity</th><th>Cost</th></tr>";

        for (var p = 0; p < quantity.length; p++) {
            if (quantity[p] == 0) {
                continue;
            } else {
                display += "<tr><td>" + wand_list[p] + "</td><td>" +
                    wand_price[p] + "</td><td>" +
                    quantity[p] + "</td><td>" +
                    quantity[p] * wand_price[p] + "</td></tr>";
                total += quantity[p] * wand_price[p];
            }
        }
        display += "</table></div>";
        display += "<div class=" + "checkout" + "><button class=" + "button" + " onclick=" + "clearCart()" + ">Clear Cart</button>" +
            "<span >  Shubham   Gupta  </span>" +
            "<button  class=" + "button" + " onclick=" + "checkOut()" + ">CheckOut</button></div>";
        sessionStorage.totalAmount = total;
        document.getElementById("demo_cart").innerHTML = display;
        }
}

function checkOut() {
    alert("Total payable amount is " + sessionStorage.totalAmount);
}

function clearCart() {
    sessionStorage.cart = undefined;
    document.getElementById("demo_cart").innerHTML = "<div class=" + "zero" + ">You have Zero items in your cart.</div>"
}

function detailsOnload() {
    var result = "";
    var i = parseInt(sessionStorage.detail);
    result += "<div class=" + "detailImage" + "><img src=" + "/static/home/images/" + wand_img[i] + "></div>" +
        "<div class=" + "description" + "><p>" + "Name: " + wand_list[i] + "<br>" +
        "Previous Owner: " + wand_owner[i] + "<br>" +
        "Length: " + wand_len[i] + "<br>" +
        "Material: " + wand_material[i] + "<br>" +
        "Price: " + wand_price[i] + "</p>" + "<br>" +
        "<button  class=" + "button" + "  onclick=" + "addToCart(" + i + ")>Add To Cart</button>" +
        "</div>";
    document.getElementById("demo_details").innerHTML = result;
}

function detailsVar(index) {
    sessionStorage.detail = index;
}

function indexOnload() {
    var result = "";
    for (var i = 0; i <6; i++) {
        result += "<div class=" + "products" + "><h2>" + wand_list[i]  + "</h2><p>" +

            "<img src=" + "/static/home/images/" + wand_img[i] + " width=" + "150px" + " height=" + "150px" + "><br>" +
            "<h3>Price: " + wand_price[i] + "</p>" + "<h3>" +
            "<button id=" + "favorite" + i + " class='button fn_fav'" + " onclick=" + "markFavorite('favorite" + i + "')" + ">Favorite</button>" +
            "   " +
            "<button  class=" + "button" + "  onclick=" + "addToCart(" + i + ")>Add To Cart</button><br>" +
            "<br><a href=" + "details.html" + " onclick=" + "detailsVar(" + i + "); " + ">More Details</a>" +
            "</div>";
    }
    document.getElementById("demo").innerHTML = result;
    setFavorite();
}

function markFavorite(id_name) {

    var isFav = sessionStorage.getItem(id_name);
    var property = document.getElementById(id_name);

    if (!isFav) {
        sessionStorage.setItem(id_name, 'true');
        property.style.backgroundColor = "#7FFF00";
    } else {
        sessionStorage.removeItem(id_name);
        property.style.backgroundColor = "#deb887";
    }

}



function setFavorite() {
    var favList = document.getElementsByClassName('fn_fav');
    for (var i = 0; i < favList.length; i++) {
        var selectedItemId = favList[i].id;
        var isFav = sessionStorage.getItem(selectedItemId);
        var btnFav = document.getElementById(selectedItemId);
        if (isFav) {
            btnFav.style.backgroundColor = "#7FFF00";
        }
    }
}
