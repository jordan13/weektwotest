$( document ).ready(function(){
 
    $( "button.alert" ).on( "click", function() {
        console.log( "hey you clicked on me" );
    });
 
    $( "<button class='dan'>Alert!</button>" ).appendTo( document.body );
});
$( "p" ).hide();
 
$( "div.hidden" ).show();