jQuery(document).ready(function($){
//    $.getScript('http://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js');
        $('iframe,video,embed').each(function(){
            $(this).wrap('<div class="embed"></div>');
        });
    $('window').on('load resize',function(){
    });
});