
var ranges = [
        {
            "sec": 3,  // rewind
            "slide": 0
        },
        {
            "sec": 8, // charlie hebdo
            "slide": 1
        },
        {
            "sec": 47, // TheDress
            "slide": 4
        },
        {
            "sec": 83, // thug Life
            "slide": 2
        },
        {
            "sec": 132, // marty mc fly zukunf
            "slide": 3
        },
        {
            "sec": 150, // left shark
            "slide": 3
        },
        {
            "sec": 172, // netflix and chill
            "slide": 8
        },
        {
            "sec": 215, // same sex marriage
            "slide": 12
        },
        {
            "sec": 253, // just do it
            "slide": 8
        },
        {
            "sec": 290, // saturo iwata
            "slide":10
        },
        {
            "sec": 323, // donal trump
            "slide": 11
        },
        {
            "sec": 384, // oh no its ratarded
            "slide": 14
        },
        {
            "sec": 402, // john cena
            "slide": 15
        },
        {
            "sec": 468, // confused travolta / vincent vega
            "slide": 18
        },
        {
            "sec": 519, // hotline bling
            "slide": 13
        },
        {
            "sec": 551 , // #prayforparis
            "slide": 20
        },
        {
            "sec": 567, // linda
            "slide": 21
        },
        {
            "sec": 586, // TODO steve harvey
            "slide": 18
        },
        {
            "sec": 636, // starwars
            "slide": 22
        },
        {
            "sec": 657, // rewind
            "slide": 0
        }
    ];




$(document).ready(function () {
  var popcorn = Popcorn( "#audio" );


 var options = {
  //  hash_bookmark: true,
    initial_zoom: 3,
    timenav_position: "top",
    start_at_end: true
  }
  var timeline = new TL.Timeline('timeline-embed',
                                 'https://docs.google.com/spreadsheets/d/19OQET13BrSBRWJ9lSFhl2wG650Wmgr0MUbXaakpPy3E/pubhtml',
                                 options);


  m945adj();

  popcorn.on('play', function () {
  $(".tl-message-full").hide();
    this.off('play');
    updatePosition(popcorn);
  });

  popcorn.on('seeked', function () {
    updatePosition(popcorn);
  });

  for (var i = 0;i < ranges.length; i++ ) {
    bindEvent(ranges[i].sec, ranges[i].slide);
  }


    // goTo last slide
  timeline.goTo(26);



function bindEvent(time, slide) {
    popcorn.cue(time, function () {
        timeline.goTo(slide);
    });
}

function updatePosition(popcorn_obj) {
 popcorn_obj.audio.currentTime;
  for (var i = 0;i < ranges.length -1; i++ ) {
    if (ranges[i + 1].sec >= popcorn_obj.audio.currentTime){
      timeline.goTo(ranges[i].slide);
      return;
    }
  }
}

function m945adj() {
  $('div#col-right').hide();
  $('div#col-left, div#col-left > .detail').css('width: 100%;');
}

});
