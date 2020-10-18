var btn = document.getElementById("Search-button")

function buttonClicked(){
  console.log("Jay Shri Ram");

  var customText = document.getElementsByClassName("Narayan");
  var textArea = document.getElementsByClassName("my-textarea");

  var results = document.getElementById("text");

}


window.onbeforeunload = function() {
   return "Do you really want to leave our brilliant application?";
};
function printName(name){
  console.log("Lord", name);
}
printName("There Are Three Paramatma's God");
printName("Generator=Brahma");
printName("Operator =Vishnu/Narayan");
printName("Destroyer=Mahesh/Shiva");


var god =["narayan puran","Mahadev"];
god.push("bhagwad gita")

god.forEach(function(item, index){
 console.log("You Should Read" ,item,index);
});


$(document).ready(function(){
     var el = document.getElementById('text')

     console.log($('.hari a').first().text());
     console.log($('.hari a').last().text());
  alert("Subcribe Our Youtube Channel");
$('#text').html("That's Bhagwad gita in Sanskrit and Marathi");

document.getElementsByClassName('input').value = "Value of input";
$('.input').val("New input value");

var el = document.getElementById('text');
  $('#Search-button')
  $('[data-trigger="dropdown"]').on('mouseenter' , function(){
    var hari = $(this).parent().find('.hari');
    hari.addClass('active');

    $('.profile-menu').on('mouseleave', function(){
      hari.removeClass('active');
    });
  });
 $('#prepand, #append, #replace').on('click', function(e){
   var el =$(e.currentTarget);
   var action = el.attr('id');
   var content =$(".text").val();

   if(action =="prepand") {
      console.log("Prepanding...", content);
      $('#main').prepand(content);
   }else if(action == "append"){
      console.log("Appending...", content);
      $('#main').append(content);
   }else if(action == "replace"){
     console.log("Replacing...", content);
     $('#main').html(content);
   }
 });
 $(document).ready(function(){
   var el = document.getElementById('text');
 });
   $(document).on('contextmenu', function(){
     return false;
   });
    $(document).on('mousedown', function(event){
      event.stopPropagation();
});

       $('textarea').focusin(function(){
         console.log("focused in on the textarea");
       });


       $('textarea').focusout(function(){
         console.log("focused is out from textarea");
       });
     $('p').each(function(){
       console.log($(this).text());
     });
     jQuery(function(){
      jQuery('#multiCollapseExample1').click();
   });
});
