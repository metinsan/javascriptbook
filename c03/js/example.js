/**
 * Created by PC on 11.10.2015.
 */

(function () {

    var hotel = {
        name:"Park",
        roomRate: 240,
        discount: 15,
        offerPrice: function(){
        var offerRate = this.roomRate * ((100-this.discount) /100);
        return offerRate;
        }
    };

var hotelName, roomRate, specialRate;

hotelName = document.getElementById("hotelName");
roomRate = document.getElementById("roomRate");
specialRate = document.getElementById("specialRate");

hotelName.innerHTML = hotel.name;
roomRate.innerHTML = "$" + hotel.roomRate.toFixed(2);
specialRate.textContent = "$" + hotel.offerPrice();
})();


