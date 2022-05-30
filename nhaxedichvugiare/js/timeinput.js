 var d = new Date();
 var month = d.getMonth()+1;
 var day = d.getDate();
 var h = d.getHours();
 var m = d.getMinutes();

 var output = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + d.getFullYear() + ' ' +(h<10 ? '0' : '') + h + ':'+ (m<10 ? '0' : '') + m;
 jQuery(document).ready(function($) {
    jQuery(window).ready(function($) {
        var viewport = $(window).width();
        if ( viewport <= 900 ) {
            jsProcess('mobile');
        } else {
            jsProcess('pc');
        }
    });

    function jsProcess(screen) {
        if( screen == 'pc') {
            $('#booking-car').show();
            $('.form_datetime input').datetimepicker({
                lang:'vi',
                onChangeDateTime:function(dp,$input){
                        //alert($input.val())
                    },
                    //format: 'dd/mm/yyyy hh:ii',
                    format: 'd/m/Y H:i',
                    startDate: output,
                    minuteStep: 10,
                    //minTime:0,
                    minDate:0,
                    step:15,
                    //inline:true
                    debug: true
                });
        } else {
            $('#home_booking_form label').hide();
            $('#sp-title').show();
            $('div.input-group').css('margin-bottom', "10px");
            $('#booking-car').show();
            $('#startTimeModal .form_datetime input').datetimepicker({
                lang:'vi',
                onChangeDateTime:function(dp,$input){
                        //alert($input.val())
                    },
                    onSelectTime:function(current_time,$input){
                        $('.modal-header button').trigger('click');
                    },
                    //format: 'dd/mm/yyyy hh:ii',
                    format: 'd/m/Y H:i',
                    startDate: output,
                    minuteStep: 10,
                    //minTime:0,
                    minDate:0,
                    step:15,
                    inline:true,
                    timepickerScrollbar: false,
                    debug: true
                });
            $('.form_datetime #date_start').click(function(e) {
                $('#startTimeModal').modal("show");
            });
            $("#startTimeModal").on('hide.bs.modal', function(){
                $('.form_datetime #date_start').val($('#startTimeModal .form_datetime input').val())
            });

                //date_end
                $('#endTimeModal .form_datetime input').datetimepicker({
                    lang:'vi',
                    onChangeDateTime:function(dp,$input){
                        //alert($input.val())
                    },
                    onSelectTime:function(current_time,$input){
                        $('.modal-header button').trigger('click');
                    },
                    //format: 'dd/mm/yyyy hh:ii',
                    format: 'd/m/Y H:i',
                    startDate: output,
                    minuteStep: 10,
                    //minTime:0,
                    minDate:0,
                    step:30,
                    inline:true,
                    timepickerScrollbar: false
                });
                $('.form_datetime #date_end').click(function(e) {
                    $('#endTimeModal').modal("show");
                });
                $("#endTimeModal").on('hide.bs.modal', function(){
                    $('.form_datetime #date_end').val($('#endTimeModal .form_datetime input').val())
                });
            }
        }

    });