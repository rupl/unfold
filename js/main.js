(function($){

  // Keep track of where we are in the story
  var counter = -1;

  // Story contains all the actions that bring the slides to life
  // It contains the narrative in both directions: forward and reverse.
  // - feel free to explain to me how this could be accomplished with only one array
  var story = {
    'forward': [

      // Slide 1
      "scrollTo('#s1'); ",
      "$('.un, .fold, .ing', '#s1').toggleClass('active'); ",
      "$('.the, .b', '#s1').toggleClass('active'); ",
      "$('.ox, .m', '#s1').toggleClass('active'); ",
      "$('.odel', '#s1').toggleClass('active'); ",
      "$('h2 span', '#s1').toggleClass('active'); ",

      // Slide 2
      "scrollTo('#s2');",
      "$('#s2 .de').toggleClass('show').toggleClass('f-left'); ",
      "$('#s2 .friend, #s2 .limits').toggleClass('show'); ",
      "$('#s2 .sandbox p').toggleClass('show'); ",
      "$('#s2 .de').toggleClass('f-left').toggleClass('f-right'); ",
      "$('#s2 .floats, #s2 .pos').toggleClass('bold'); ",
      "$('#s2 .de').toggleClass('p-up'); ",
      "$('#s2 .de').toggleClass('p-down'); ",
      "$('#s2 .de').toggleClass('p-up').toggleClass('p-down'); ", // reset to center
      "$('#s2 .de').toggleClass('p-left'); ",
      "$('#s2 .de').toggleClass('p-left'); ", // reset to center

      // Slide 3
      "scrollTo('#s3');",
      "$('#s3 h2, #s3 .intro').toggleClass('hide'); ",
      "$('#s3 h2').toggleClass('glasses'); ",
      "$('#s3 h2').toggleClass('whoosh'); ",
      "$('#s3 .sandbox, #s3 .sandbox2 .explain').toggleClass('hide'); ",
      "$('#s3 .translate').toggleClass('highlight'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x'); $('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x').toggleClass('t-y'); $('#s3 .x').toggleClass('red'); $('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-y').toggleClass('t-z'); $('#s3 .y').toggleClass('green'); $('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .translate, #s3 .rotate').toggleClass('highlight'); $('#s3 .sandbox2 .de').toggleClass('t-z'); $('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x'); $('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x').toggleClass('r-y'); $('#s3 .x').toggleClass('red'); $('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-y').toggleClass('r-z'); $('#s3 .y').toggleClass('green'); $('#s3 .z').toggleClass('blue'); ",

      // Slide 4
      "scrollTo('#s4'); ",
      "$('#s4 .cube').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('dim').next().next().toggleClass('hide'); $('#s4 .sandbox').toggleClass('p-warp'); ",
      "$('#s4 .perspective').toggleClass('dim').next().next().toggleClass('hide'); $('#s4 .sandbox').toggleClass('p-warp').toggleClass('po-warp'); ",

      // Slide 5
      "scrollTo('#s5'); ",
      "$('#s5 .cube').toggleClass('hide'); ",
      "$('#s5 .translate').toggleClass('hide'); $('#s5 .sandbox').toggleClass('translate-demo'); ",
      "$('#s5 .translate').toggleClass('dim').next().next().toggleClass('hide'); $('#s5 .sandbox').toggleClass('translate-demo').toggleClass('rotate-demo'); ",
      "$('#s5 .rotate').toggleClass('dim').next().next().toggleClass('hide'); $('#s5 .sandbox').toggleClass('rotate-demo').toggleClass('backface-demo'); ",
      "$('#s5 .sandbox').toggleClass('backface-demo').toggleClass('backface-demo-cube'); ",
      "$('#s5 .sandbox').toggleClass('backface-demo-cube').toggleClass('backface-demo-cube-2sided'); ",

      // Slide 6
      "scrollTo('#s6'); ",
      "$('#s6 .paper').toggleClass('folded'); ",
      "$('#s6 .folds').toggleClass('folded'); ",
      "$('#s6 .cube').toggleClass('hide'); ",
      "$('#s6 .cube').toggleClass('labels'); ",
      "$('#s6 .top').toggleClass('flat'); ",
      "$('#s6 .left').toggleClass('flat'); ",
      "$('#s6 .right').toggleClass('flat'); ",
      "$('#s6 .bottom').toggleClass('flat'); ",
      "$('#s6 .back').toggleClass('flat'); ",
      // "$('#s6 .pyramid').toggleClass('hide'); ",
      // "$('#s6 .pyramid').toggleClass('wireframe'); ",
      // "$('#s6 .pyramid').toggleClass('wireframe').toggleClass('planes'); ",

      // Slide 7
      "scrollTo('#s7'); ",
      "$('#s7 .slinky').toggleClass('hide'); ",
      "$('#s7 .slinky').toggleClass('extended'); ",
      "$('#s7 p.slinky-desc').toggleClass('hide'); $('#s7 p.intro').toggleClass('dim'); ",
      "$('#s7 .slinky').toggleClass('move'); ",
      "$('.slinky, p.slinky-desc, p.solar-desc', '#s7').toggleClass('hide'); ",
      "$('#s7').toggleClass('space').find('.solar-system').toggleClass('hide'); ",


    ],
    'reverse': [

      // Slide 1
      "",
      "$('.un, .fold, .ing', '#s1').toggleClass('active'); ",
      "$('.the, .b', '#s1').toggleClass('active'); ",
      "$('.ox, .m', '#s1').toggleClass('active'); ",
      "$('.odel', '#s1').toggleClass('active'); ",
      "$('h2 span', '#s1').toggleClass('active'); ",

      // Slide 2
      "scrollTo('#s1');",
      "$('#s2 .de').toggleClass('show').toggleClass('f-left'); ",
      "$('#s2 .friend, #s2 .limits').toggleClass('show'); ",
      "$('#s2 .sandbox p').toggleClass('show'); ",
      "$('#s2 .de').toggleClass('f-left').toggleClass('f-right'); ",
      "$('#s2 .floats, #s2 .pos').toggleClass('bold'); ",
      "$('#s2 .de').toggleClass('p-up'); ",
      "$('#s2 .de').toggleClass('p-down'); ",
      "$('#s2 .de').toggleClass('p-up').toggleClass('p-down'); ", // reset to center
      "$('#s2 .de').toggleClass('p-left'); ",
      "$('#s2 .de').toggleClass('p-left'); ", // reset to center

      // Slide 3
      "scrollTo('#s2');",
      "$('#s3 h2, #s3 .intro').toggleClass('hide'); ",
      "$('#s3 h2').toggleClass('glasses'); ",
      "$('#s3 h2').toggleClass('whoosh'); ",
      "$('#s3 .sandbox, #s3 .sandbox2 .explain').toggleClass('hide'); ",
      "$('#s3 .translate').toggleClass('highlight'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x'); $('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x').toggleClass('t-y'); $('#s3 .x').toggleClass('red'); $('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-y').toggleClass('t-z'); $('#s3 .y').toggleClass('green'); $('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .translate, #s3 .rotate').toggleClass('highlight'); $('#s3 .sandbox2 .de').toggleClass('t-z'); $('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x'); $('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x').toggleClass('r-y'); $('#s3 .x').toggleClass('red'); $('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-y').toggleClass('r-z'); $('#s3 .y').toggleClass('green'); $('#s3 .z').toggleClass('blue'); ",

      // Slide 4
      "scrollTo('#s3'); ",
      "$('#s4 .cube').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('dim').next().next().toggleClass('hide'); $('#s4 .sandbox').toggleClass('p-warp'); ",
      "$('#s4 .perspective').toggleClass('dim').next().next().toggleClass('hide'); $('#s4 .sandbox').toggleClass('p-warp').toggleClass('po-warp'); ",

      // Slide 5
      "scrollTo('#s4'); ",
      "$('#s5 .cube').toggleClass('hide'); ",
      "$('#s5 .translate').toggleClass('hide'); $('#s5 .sandbox').toggleClass('translate-demo'); ",
      "$('#s5 .translate').toggleClass('dim').next().next().toggleClass('hide'); $('#s5 .sandbox').toggleClass('translate-demo').toggleClass('rotate-demo'); ",
      "$('#s5 .rotate').toggleClass('dim').next().next().toggleClass('hide'); $('#s5 .sandbox').toggleClass('rotate-demo').toggleClass('backface-demo'); ",
      "$('#s5 .sandbox').toggleClass('backface-demo').toggleClass('backface-demo-cube'); ",
      "$('#s5 .sandbox').toggleClass('backface-demo-cube').toggleClass('backface-demo-cube-2sided'); ",

      // Slide 6
      "scrollTo('#s5'); ",
      "$('#s6 .paper').toggleClass('folded'); ",
      "$('#s6 .folds').toggleClass('folded'); ",
      "$('#s6 .cube').toggleClass('hide'); ",
      "$('#s6 .cube').toggleClass('labels'); ",
      "$('#s6 .top').toggleClass('flat'); ",
      "$('#s6 .left').toggleClass('flat'); ",
      "$('#s6 .right').toggleClass('flat'); ",
      "$('#s6 .bottom').toggleClass('flat'); ",
      "$('#s6 .back').toggleClass('flat'); ",
      // "$('#s6 .pyramid').toggleClass('hide'); ",
      // "$('#s6 .pyramid').toggleClass('wireframe'); ",
      // "$('#s6 .pyramid').toggleClass('wireframe').toggleClass('planes'); ",

      // Slide 7
      "scrollTo('#s6'); ",
      "$('#s7 .slinky').toggleClass('hide'); ",
      "$('#s7 .slinky').toggleClass('extended'); ",
      "$('#s7 p.slinky-desc').toggleClass('hide'); $('#s7 p.intro').toggleClass('dim'); ",
      "$('#s7 .slinky').toggleClass('move'); ",
      "$('.slinky, p.slinky-desc, p.solar-desc', '#s7').toggleClass('hide'); ",
      "$('#s7').toggleClass('space').find('.solar-system').toggleClass('hide'); ",

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

  /**
   * Scrolls to a particular anchor
   */
  function scrollTo(target){
      var element = $(target);
      $('html,body').animate({scrollTop: element.offset().top - 25}, 'fast');
  }

})(jQuery);
