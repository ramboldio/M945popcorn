
var ranges = [
        {
            "sec": 2,
            "slide": 2
        },
        {
            "sec": 5,
            "slide": 10
        },
        {
            "sec": 10,
            "slide": 4
        }
    ];




$(document).ready(function () {
  var popcorn = Popcorn( "#audio" );


 var options = {
    hash_bookmark: false,
    initial_zoom: 3
  }
  var timeline = new TL.Timeline('timeline-embed',
                                 'https://docs.google.com/spreadsheets/d/19OQET13BrSBRWJ9lSFhl2wG650Wmgr0MUbXaakpPy3E/pubhtml',
                                 options);

  popcorn.on('play', function () {
  $(".tl-message-full").hide();
    this.off('play');
  });

  console.log(ranges);

  for (var i = 0;i < ranges.length; i++ ) {
    bindEvent(ranges[i].sec, ranges[i].slide);
  }

function bindEvent(time, slide) {
    popcorn.exec(time, function () {
      timeline.goTo(slide);
    });

    m945adj();
}


function m945adj() {
  $('div#col-right').hide();
  $('div#col-left, div#col-left > .detail').css('width: 100%;');
}

});
