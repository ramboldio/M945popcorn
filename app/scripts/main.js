
var ranges = [
        {
            "sec": 2,  // rewind
            "slide": "hashtag-rewind-2015"
        },
        {
            "sec": 8,
            "slide": "je-suis-charlie"
        },
        {
            "sec": 47, // TheDress
            "slide": "thedress"
        },
        {
            "sec": 83, // thug Life
            "slide": "thug-life"
        },
        {
            "sec": 132, // marty mc fly zukunf
            "slide": "back-to-the-present"
        },
        {
            "sec": 150, // left shark
            "slide": "super-bowl-shark"
        },
        {
            "sec": 172, // netflix and chill
            "slide": "netflix-and-chill"
        },
        {
            "sec": 215, // same sex marriage
            "slide": "same-sex-marriage-in-den-usa"
        },
        {
            "sec": 253, // just do it
            "slide": "just-do-it"
        },
        {
            "sec": 290, // saturo iwata
            "slide": "tod-von-iwata-saturo"
        },
        {
            "sec": 323, // donal trump
            "slide": "donald-trump"
        },
        {
            "sec": 384, // oh no its ratarded
            "slide": "oh-no-its-retarded"
        },
        {
            "sec": 402, // john cena
            "slide": "unexpected-john-cena"
        },
        {
            "sec": 468, // confused travolta / vincent vega
            "slide": "vincent-vega"
        },
        {
            "sec": 519, // hotline bling
            "slide": "hotline-bling"
        },
        {
            "sec": 551 , // #prayforparis
            "slide": "prayforparis"
        },
        {
            "sec": 567, // linda
            "slide": "linda-vs-isis"
        },
        {
            "sec": 586, // TODO steve harvey
            "slide": "steve-harvey"
        },
        {
            "sec": 636, // starwars
            "slide": "star-wars-the-spoiler-awakens"
        },
        {
            "sec": 657, // rewind
            "slide": "hashtag-rewind-2015"
        }
    ];




$(document).ready(function () {
  var popcorn = Popcorn( "#audio" );


 var options = {
    initial_zoom: 1,
    timenav_position: "bottom",
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

  timeline._onSlideChange( function (e) {
    console.log("log");
  });

  for (var i = 0;i < ranges.length; i++ ) {
    bindEvent(ranges[i].sec, ranges[i].slide);
  }


    // goTo last slide
  timeline.goToEnd();



function bindEvent(time, slide) {
    popcorn.cue(time, function () {
        timeline.goToId(slide);
    });
}

function updatePosition(popcorn_obj) {
 popcorn_obj.audio.currentTime;
  for (var i = 0;i < ranges.length -1; i++ ) {
    if (ranges[i + 1].sec >= popcorn_obj.audio.currentTime){
      timeline.goToId(ranges[i].slide);
      return;
    }
  }
}

function m945adj() {
  $('div#col-right').hide();
  $('div#col-left, div#col-left > .detail').css('width: 100%;');
}

});
