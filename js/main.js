(function($){

  // Keep track of where we are in the story
  var counter = 0;

  // Story contains all the actions that bring the slides to life
  var story = {
    'forward': [
      "// Slide 1",
      "$('.un, .fold, .ing').addClass('active'); ",
      "$('.the, .b').addClass('active'); ",
      "$('.ox, .m').addClass('active'); ",
      "$('.odel').addClass('active'); ",
      "$('#s1 h2 span').addClass('active'); ",
    ],
    'reverse': [
      "// Slide 1",
      "$('.un, .fold, .ing').removeClass('active'); ",
      "$('.the, .b').removeClass('active'); ",
      "$('.ox, .m').removeClass('active'); ",
      "$('.odel').removeClass('active'); ",
      "$('#s1 h2 span').removeClass('active'); ",
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
