$(function() {

    var $div_width = $('#bl').width();

    var samples = $('.grounp p').last().text() - $('.grounp p').first().text();
    var fSize = samples / $div_width;

    var active = function(e) {
        var ox = e.clientX;
        var moveLeft = $('#move').position().left;

        var handle = function(e) {

            var left = e.clientX - ox;

            var to = left + moveLeft;

            to = Math.min($div_width, Math.max(0, to));

            numSize(to);
        };

        $(document).on('mousemove', handle);
        $(document).on('mouseup', function() {
            $(document).unbind();
        });
    };
    $('#move').on('mousedown', active);
    $('#bl').on('mousedown', function(e) {
        active(e);
    });

    var numSize = function(num) {
        var scale = (num * fSize).toFixed(1);

        $('#move').css('left', num).attr('data-size', scale + 'px');

        $('#box_font').css('fontSize', scale + 'px');
        if (scale < 12) {
            $('#box_font').css('transform', 'scale(' + scale / 12 + ')');
        } else {
            $('#box_font').css('transform', 'scale(1)');
        }

    }
});
