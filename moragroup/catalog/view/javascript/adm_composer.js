$(document).ready(function(){
    $('.item-search .input-group-addon').on('click', function() {
        // url = $('base').attr('href') + 'index.php?route=product/search';
        var value = $(this).parent().find('input[name=\'search\']').val();
        // var search_type = $("select[name=search_type] option:selected").val();
        var search_type = $(this).parent().parent().find("select[name=search_type] option:selected").val();
        if (!search_type) {
        	search_type = $("input[name=adm_search_type]").val();
        }
        if (!search_type) {
            search_type = 1;
        }
        if (search_type == 1) {
            url = $('base').attr('href') + 'index.php?route=product/search';
        } else {
            url = $('base').attr('href') + 'index.php?route=adm_blog/search';
        }
        if (value) {
            url += '&search=' + encodeURIComponent(value);
        }
        location = url;
    });
    $('.item-search input[name=\'search\']').on('keydown', function(e) {
        if (e.keyCode == 13) {
            $(this).parent().find('.input-group-addon').trigger('click');
        }
    });
    $('.item-search input[name=\'search\']').on('focus', function(e) {
        $(this).parent().parent().addClass('active');
    });
    $('.item-search input[name=\'search\']').on('blur', function(e) {
        $(this).parent().parent().removeClass('active');
    });
});
    