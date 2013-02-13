(function($){

  // Keep track of where we are in the story
  var counter = 0;

  // Story contains all the actions that bring the slides to life
  // It contains the narrative in both directions: forward and reverse.
  // - feel free to explain to me how this could be accomplished with only one array
  var story = {
    'forward': [

      // Slide 1
      "scrollTo('#s1'); ",
      "$('.un, .fold, .ing', '#s1').toggleClass('active'); ",
      "$('.the, .b', '#s1').toggleClass('active'); ",
      "$('.ox, .m, .instructions', '#s1').toggleClass('active'); ", // instructions
      "$('.odel', '#s1').toggleClass('active'); ",
      "$('h2 span', '#s1').toggleClass('active'); ",
      "$('.no-csstransforms3d #s1 .warning').toggleClass('active'); ",

      // Slide 2
      "scrollTo('#s2');",
      "$('#s2 .de').toggleClass('show').toggleClass('f-left'); ",
      "$('#s2 .design').toggleClass('show'); ",
      "$('#s2 .placing').toggleClass('show'); ",
      "$('#s2 .friend, #s2 .limits').toggleClass('show'); ",
      "$('#s2 .sandbox p').toggleClass('show'); ",
      "$('#s2 .de').toggleClass('f-left').toggleClass('f-right'); ",
      "$('#s2 .floats, #s2 .pos').toggleClass('bold'); ",
      "$('#s2 .de').toggleClass('p-up'); ",
      "$('#s2 .de').toggleClass('p-down'); ",
      "$('#s2 .de').toggleClass('p-up p-down'); ", // reset to center
      "$('#s2 .de').toggleClass('p-left'); ",
      "$('#s2 .de').toggleClass('p-left'); ", // reset to center

      // Slide 3
      "scrollTo('#s3');",
      "$('#s3 h2, #s3 .intro').toggleClass('hide'); ",
      "$('#s3 h2').toggleClass('glasses'); ",
      "$('#s3 h2').toggleClass('whoosh'); ",
      "$('#s3 .sandbox, #s3 .sandbox2 .explain').toggleClass('hide'); ",
      "$('#s3 .translate').toggleClass('highlight'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x'); "+
      "$('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x').toggleClass('t-y'); "+
      "$('#s3 .x').toggleClass('red'); "+
      "$('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-y').toggleClass('t-z'); "+
      "$('#s3 .y').toggleClass('green'); "+
      "$('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .translate, #s3 .rotate').toggleClass('highlight'); "+
      "$('#s3 .sandbox2 .de').toggleClass('t-z'); "+
      "$('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x'); "+
      "$('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x').toggleClass('r-y'); "+
      "$('#s3 .x').toggleClass('red'); "+
      "$('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-y').toggleClass('r-z'); "+
      "$('#s3 .y').toggleClass('green'); "+
      "$('#s3 .z').toggleClass('blue'); ",

      // Slide 4
      "scrollTo('#s4'); ",
      "$('#s4 .cube').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s4 .sandbox').toggleClass('p-warp'); ",
      "$('#s4 .perspective').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s4 .sandbox').toggleClass('p-warp').toggleClass('po-warp'); ",

      // Slide 5
      "scrollTo('#s5'); ",
      "$('#s5 .cube').toggleClass('hide'); ",
      "$('#s5 .translate').toggleClass('hide'); "+
      "$('#s5 .sandbox').toggleClass('translate-demo'); ",
      "$('#s5 .translate').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s5 .sandbox').toggleClass('translate-demo').toggleClass('rotate-demo'); ",
      "$('#s5 .rotate').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s5 .sandbox').toggleClass('rotate-demo backface-demo'); ",
      "$('#s5 .sandbox').toggleClass('backface-hidden'); ",
      "$('#s5 .sandbox').toggleClass('cubed'); ",
      "$('#s5 .sandbox').toggleClass('backface-hidden'); ",

      // Slide 6
      "scrollTo('#s6'); ",
      "$('#s6 .folds').toggleClass('folded'); ",
      "$('#s6 .paper').toggleClass('folded'); ",
      "$('#s6 .like').toggleClass('folded'); ",
      "$('#s6 .elements').toggleClass('folded'); ",
      "$('#s6 .cube').toggleClass('hide'); ",
      "$('#s6 .cube').toggleClass('labels'); ",
      "$('#s6 .top').toggleClass('flat'); ",
      "$('#s6 .left').toggleClass('flat'); ",
      "$('#s6 .right').toggleClass('flat'); ",
      "$('#s6 .bottom').toggleClass('flat'); ",
      "$('#s6 .back').toggleClass('flat'); ",

      // Slide 7
      "scrollTo('#s7'); ",
      "$('#s7 .slinky').toggleClass('hide'); ",
      "$('#s7 .slinky').toggleClass('half'); ",
      "$('#s7 p.slinky-desc').toggleClass('hide'); "+
      "$('#s7 p.intro').toggleClass('dim'); ",
      "$('#s7 .slinky').toggleClass('move half full'); ",
      "$('.slinky, p.slinky-desc, p.solar-desc', '#s7').toggleClass('hide'); ",
      "$('#s7').toggleClass('space').find('.solar-system').toggleClass('hide'); ",

      // Slide 8
      "scrollTo('#s8'); ",
      "$('#floor .panel').removeClass('lift').filter(':nth-child(even)').toggleClass('lift'); ",
      "$('#floor .panel').removeClass('lift').filter(':nth-child(odd)').toggleClass('lift'); ",
      "$('#floor .panel').removeClass('lift').filter(':nth-child(2), :nth-child(4), :nth-child(5), :nth-child(7), :nth-child(10), :nth-child(12) ').toggleClass('lift'); ",
      "$('#floor .panel').toggleClass('lift'); ",
      "$('#floor .panel').removeClass('lift'); ",

      // Slide 9
      "scrollTo('#s9'); ",
      "$('#s9 .intro').toggleClass('show'); ",
      "$('#s9 .layer').toggleClass('show'); blurLayers(); ",

      // Slide 10
      "scrollTo('#s10'); blurLayersStop(); ",
      "$('#s10 .de').toggleClass('show'); ",
      "$('#s10 .intro').toggleClass('hide'); ",
      "$('#s10 .c').toggleClass('hide'); ",
      "$('#s10 .de').toggleClass('translate'); "+
      "$('#s10 .c .translate').toggleClass('active'); ",
      "$('#s10 .de').toggleClass('translate rotate'); "+
      "$('.translate, .rotate', '#s10 .c').toggleClass('active'); ",
      "$('#s10 .de').toggleClass('rotate transform-origin'); "+
      "$('.rotate, .transform-origin','#s10 .c').toggleClass('active'); ",
      "$('#s10 .de').toggleClass('transform-origin'); "+
      // "$('#s10').toggleClass('perspective'); "+
      // "$('#s10 .c .transform-origin').toggleClass('active'); ",
      // "$('#s10').toggleClass('perspective perspective-origin'); ",
      // "$('#s10').toggleClass('perspective-origin transform-style'); ",

      // Slide 11
      "scrollTo('#s11'); ",

      // Slide 12
      "scrollTo('#s12'); ",

    ],
    'reverse': [

      // Slide 1
      "",
      "$('.un, .fold, .ing', '#s1').toggleClass('active'); ",
      "$('.the, .b', '#s1').toggleClass('active'); ",
      "$('.ox, .m, .instructions', '#s1').toggleClass('active'); ", // instructions
      "$('.odel', '#s1').toggleClass('active'); ",
      "$('h2 span', '#s1').toggleClass('active'); ",
      "$('.no-csstransforms3d #s1 .warning').toggleClass('active'); ",

      // Slide 2
      "scrollTo('#s1');",
      "$('#s2 .de').toggleClass('show').toggleClass('f-left'); ",
      "$('#s2 .design').toggleClass('show'); ",
      "$('#s2 .placing').toggleClass('show'); ",
      "$('#s2 .friend, #s2 .limits').toggleClass('show'); ",
      "$('#s2 .sandbox p').toggleClass('show'); ",
      "$('#s2 .de').toggleClass('f-left').toggleClass('f-right'); ",
      "$('#s2 .floats, #s2 .pos').toggleClass('bold'); ",
      "$('#s2 .de').toggleClass('p-up'); ",
      "$('#s2 .de').toggleClass('p-down'); ",
      "$('#s2 .de').toggleClass('p-up p-down'); ", // reset to center
      "$('#s2 .de').toggleClass('p-left'); ",
      "$('#s2 .de').toggleClass('p-left'); ", // reset to center


      // Slide 3
      "scrollTo('#s2');",
      "$('#s3 h2, #s3 .intro').toggleClass('hide'); ",
      "$('#s3 h2').toggleClass('glasses'); ",
      "$('#s3 h2').toggleClass('whoosh'); ",
      "$('#s3 .sandbox, #s3 .sandbox2 .explain').toggleClass('hide'); ",
      "$('#s3 .translate').toggleClass('highlight'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x'); "+
      "$('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-x').toggleClass('t-y'); "+
      "$('#s3 .x').toggleClass('red'); "+
      "$('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('t-y').toggleClass('t-z'); "+
      "$('#s3 .y').toggleClass('green'); "+
      "$('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .translate, #s3 .rotate').toggleClass('highlight'); "+
      "$('#s3 .sandbox2 .de').toggleClass('t-z'); "+
      "$('#s3 .z').toggleClass('blue'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x'); "+
      "$('#s3 .x').toggleClass('red'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-x').toggleClass('r-y'); "+
      "$('#s3 .x').toggleClass('red'); "+
      "$('#s3 .y').toggleClass('green'); ",
      "$('#s3 .sandbox2 .de').toggleClass('r-y').toggleClass('r-z'); "+
      "$('#s3 .y').toggleClass('green'); "+
      "$('#s3 .z').toggleClass('blue'); ",

      // Slide 4
      "scrollTo('#s3'); ",
      "$('#s4 .cube').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('hide'); ",
      "$('#s4 .transform-style').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s4 .sandbox').toggleClass('p-warp'); ",
      "$('#s4 .perspective').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s4 .sandbox').toggleClass('p-warp').toggleClass('po-warp'); ",

      // Slide 5
      "scrollTo('#s4'); ",
      "$('#s5 .cube').toggleClass('hide'); ",
      "$('#s5 .translate').toggleClass('hide'); "+
      "$('#s5 .sandbox').toggleClass('translate-demo'); ",
      "$('#s5 .translate').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s5 .sandbox').toggleClass('translate-demo').toggleClass('rotate-demo'); ",
      "$('#s5 .rotate').toggleClass('dim').next().next().toggleClass('hide'); "+
      "$('#s5 .sandbox').toggleClass('rotate-demo backface-demo'); ",
      "$('#s5 .sandbox').toggleClass('backface-hidden'); ",
      "$('#s5 .sandbox').toggleClass('cubed'); ",
      "$('#s5 .sandbox').toggleClass('backface-hidden'); ",

      // Slide 6
      "scrollTo('#s5'); ",
      "$('#s6 .folds').toggleClass('folded'); ",
      "$('#s6 .paper').toggleClass('folded'); ",
      "$('#s6 .like').toggleClass('folded'); ",
      "$('#s6 .elements').toggleClass('folded'); ",
      "$('#s6 .cube').toggleClass('hide'); ",
      "$('#s6 .cube').toggleClass('labels'); ",
      "$('#s6 .top').toggleClass('flat'); ",
      "$('#s6 .left').toggleClass('flat'); ",
      "$('#s6 .right').toggleClass('flat'); ",
      "$('#s6 .bottom').toggleClass('flat'); ",
      "$('#s6 .back').toggleClass('flat'); ",

      // Slide 7
      "scrollTo('#s6'); ",
      "$('#s7 .slinky').toggleClass('hide'); ",
      "$('#s7 .slinky').toggleClass('half'); ",
      "$('#s7 p.slinky-desc').toggleClass('hide'); "+
      "$('#s7 p.intro').toggleClass('dim'); ",
      "$('#s7 .slinky').toggleClass('move half full'); ",
      "$('.slinky, p.slinky-desc, p.solar-desc', '#s7').toggleClass('hide'); ",
      "$('#s7').toggleClass('space').find('.solar-system').toggleClass('hide'); ",

      // Slide 8
      "scrollTo('#s7'); ",
      "$('#floor .panel').removeClass('lift'); ",
      "$('#floor .panel').removeClass('lift').filter(':nth-child(odd)').toggleClass('lift'); ",
      "$('#floor .panel').removeClass('lift').filter(':nth-child(2), :nth-child(4), :nth-child(5), :nth-child(7), :nth-child(10), :nth-child(12) ').toggleClass('lift'); ",
      "$('#floor .panel').toggleClass('lift'); ",
      "$('#floor .panel').removeClass('lift'); ",

      // Slide 9
      "scrollTo('#s8'); ",
      "$('#s9 .intro').toggleClass('show'); ",
      "$('#s9 .layer').toggleClass('show'); blurLayersStop(); ",

      // Slide 10
      "scrollTo('#s9'); blurLayers(); ",
      "$('#s10 .de').toggleClass('show'); ",
      "$('#s10 .intro').toggleClass('hide'); ",
      "$('#s10 .c').toggleClass('hide'); ",
      "$('#s10 .de').toggleClass('translate'); "+
      "$('#s10 .c .translate').toggleClass('active'); ",
      "$('#s10 .de').toggleClass('translate rotate'); "+
      "$('.translate, .rotate', '#s10 .c').toggleClass('active'); ",
      "$('#s10 .de').toggleClass('rotate transform-origin'); "+
      "$('.rotate, .transform-origin','#s10 .c').toggleClass('active'); ",
      "$('#s10 .de').toggleClass('transform-origin'); "+
      // "$('#s10').toggleClass('perspective'); "+
      // "$('#s10 .c .transform-origin').toggleClass('active'); ",
      // "$('#s10').toggleClass('perspective perspective-origin'); ",
      // "$('#s10').toggleClass('perspective-origin transform-style'); ",

      // Slide 11
      "scrollTo('#s10'); ",

      // Slide 12
      "scrollTo('#s11'); ",

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

  /**
   * Drives the blur effect in Slide 9
   */
  function blurLayers() {

    // vars for mouse tracking and blur
    var back = 300,
        middle = 400,
        front = 524,
        XX,
        YY,
        offset,
        sizeBack,
        sizeMiddle,
        sizeFront;

    // For mouse users
    $('html.no-touch').mousemove(function(e){

      // calculate the shadow
      offset = $('html').offset();
      XX = e.clientX - offset.left;
      YY = e.clientY - offset.top;

      // calculate blur for layers
      sizeBack   = Math.abs(back-YY)/40;
      sizeMiddle = Math.abs(middle-YY)/40;
      sizeFront  = Math.abs(front-YY)/40;

      // apply blur
      $('.back').css('-webkit-filter',   'blur('+ (sizeBack) +'px)');
      $('.middle').css('-webkit-filter', 'blur('+ (sizeMiddle) +'px)');
      $('.front').css('-webkit-filter',  'blur('+ (sizeFront) +'px)');

      // calculate perspective-origin based on mouse position
      pox = 45 + XX/84;
      poy = -25 + YY/60;

      // apply perspective-origin
      $('#s9').css('-webkit-perspective-origin', pox +'% '+ poy +'%');

    });

    // For touch users
    // Make it so touching a layer brings it in focus
    //
    // $('.touch').blah();
  }

  function blurLayersStop() {
    $('html.no-touch').unbind('mousemove');
  }

})(jQuery);
