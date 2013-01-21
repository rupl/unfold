(function($){

  // Keep track of where we are in the story
  var counter = 0;

  // Story contains all the actions that bring the slides to life
  // It contains the narrative in both directions: forward and reverse.
  // - feel free to explain to me how this could be accomplished with only one array
  var story = {
    'forward': [

      // Slide 1
      "",
      "$('.un, .fold, .ing').toggleClass('active'); ",
      "$('.the, .b').toggleClass('active'); ",
      "$('.ox, .m').toggleClass('active'); ",
      "$('.odel').toggleClass('active'); ",
      "$('#s1 h2 span').toggleClass('active'); ",

      // Slide 2
      "scrollTo('#s2');",
      "$('#s2 .de').toggleClass('show').toggleClass('f-left'); ",
      "$('.friend, .limits', '#s2').toggleClass('show'); ",
      "$('#s2 .sandbox p').toggleClass('show'); ",
      "$('#s2 .de').toggleClass('f-left').toggleClass('f-right'); ",
      "$('.floats, .pos', '#s2').toggleClass('bold'); ",
      "$('#s2 .de').toggleClass('p-up'); ",
      "$('#s2 .de').toggleClass('p-down'); ",
      "$('#s2 .de').toggleClass('p-up').toggleClass('p-down'); ", // reset to center
      "$('#s2 .de').toggleClass('p-left'); ",
      "$('#s2 .de').toggleClass('p-left'); ", // reset to center

      // Slide 3
      "scrollTo('#s3');",

    ],
    'reverse': [

      // Slide 1
      "",
      "$('.un, .fold, .ing').toggleClass('active'); ",
      "$('.the, .b').toggleClass('active'); ",
      "$('.ox, .m').toggleClass('active'); ",
      "$('.odel').toggleClass('active'); ",
      "$('#s1 h2 span').toggleClass('active'); ",

      // Slide 2
      "scrollTo('#s1');",
      "$('#s2 .de').toggleClass('show').toggleClass('f-left'); ",
      "$('.friend, .limits', '#s2').toggleClass('show'); ",
      "$('#s2 .sandbox p').toggleClass('show'); ",
      "$('#s2 .de').toggleClass('f-left').toggleClass('f-right'); ",
      "$('.floats, .pos', '#s2').toggleClass('bold'); ",
      "$('#s2 .de').toggleClass('p-up'); ",
      "$('#s2 .de').toggleClass('p-down'); ",
      "$('#s2 .de').toggleClass('p-up').toggleClass('p-down'); ", // reset to center
      "$('#s2 .de').toggleClass('p-left'); ",
      "$('#s2 .de').toggleClass('p-left'); ", // reset to center

      // Slide 3
      "scrollTo('#s2');",
    ]
  };

  // Set up the arrow keys to progress through the story
  $(document).keyup(function(e) {
    // counter is incremented differently depending on direction
    // so that the two arrays with forward/reverse steps can be
    // kept in sync and maintained in the most sane fashion.
    if (e.keyCode == 37) { eval(story.reverse[counter--]); }
    if (e.keyCode == 39) { eval(story.forward[++counter]); }
  });

})(jQuery);

/**
 * Scrolls to a particular anchor
 */
function scrollTo(target){
    var element = $(target);
    $('html,body').animate({scrollTop: element.offset().top - 25}, 'fast');
}
