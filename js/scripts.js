// Play/Stop Carousel Buttons 

    $(document).ready(function () {
        $("#mycarousel").carousel({
            interval: 2000,
            pause: false
        });
        $("#carousel-pause").click(function () {
            $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function () {
            $("#mycarousel").carousel('cycle');
        });
    });

//Login Modal button script
    $(document).ready(function () {
        $('#loginButton').click(function () {
            $('#loginModal').modal();
        });
    });


//Reserve button script

        $(document).ready(function () {
            $('#reserveButton').click(function () {
                $('#reserveModal').modal();
            });
        });

/* False play/pause code

        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000, pause: false } );
            $("#carouselButton").click(function(){
                if($('#carouselButton').children('span').hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play');
                }
                else if ($('#carouselButton').children('span').hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                }
            });
        });

*/

/* Tooltip script
        $(document).ready( function() {
            $('[data-toggle="tooltip"]').tooltip();
        });
    */
