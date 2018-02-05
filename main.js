// Only when the document has been fully loaded
$(document).ready(function() {
        //Go to the data.json file and put it into the callback function(data)
        $.getJSON("data.json", function(data){

            //Go through each object inside data var, and create an index (0,1,2...) and reference to that single obj (item)
            $.each(data, function(index, item){
                //
                $(".tg").append("<tr><td>" + item.name + "</td><td>" + item.description + "</td><td><a href='https://www.google.com/maps?q=" + item.location + "'> View on Google Maps </a></td></tr>");
            });
        });
  });
  
  