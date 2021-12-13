function getApod(){
    let data = $("#data").val()
    $.ajax({
        type:"GET",
        url:`https://api.nasa.gov/planetary/apod?api_key=ap7TAwjpUkqLZCgNW9gOdnbsT9MyeWDsyUbRZ2G8&date=${data}`,

        success: function(response) {

            let divExpl = $('<img src=' +response.url+'>,<p>' +response.explanation+ '</p>')

            $("#info").html(divExpl);
        }
    });
}