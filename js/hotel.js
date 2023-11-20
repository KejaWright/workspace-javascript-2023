//hotel registration--store in an object
var test = {
    hotelname: "Marriot",
    room: 456,
    booked: 123,
    display: function(){
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log(test.booked);
test.booked = 144;


//start hotel reservation
var guestgroup = [];
function reservation(){
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        roomtype: $('#room').val(),
    };
    guestgroup.push(guest);
    console.log(guest);
}
function displayList(){
    $("#guestlist").html("");
    $("guestlist").append("<table>");
    for(var i in guestgroup){
        $("guestlist").append("<tr><td>"+guestgroup[i].name+"</td>");
        $("guestlist").append("<td>"+guestgroup[i].numberofGuest+"</td>");
        $("guestlist").append("<td>"+guestgroup[i].room+"</td>");
        $("guestlist").append("<td>"+guestgroup[i].checkin+"</td>");
        $("guestlist").append("<td>"+guestgroup[i].checkout+"</td><tr>");
    }
    $("guestlist").append("</table>");

}

//register event handler
$('#submit').click(reservation);
$("#list").click(displayList);