   var iframeBody=$('#theWYSIWYG').contents().find('body');
                iframeBody.attr('contenteditable', true);
        
        
                window.addEventListener("load", function(){
                    $('iframe').contents().find('body').css('font-family',"'Helvetica neue', sans-serif");
                    $('iframe').contents().find('body').css('font-size',"15px");



                    var editor = theWYSIWYG.document;
                    editor.designMode = "on";

                    iframeBody.html($('#hiddenTextarea').val());
        
                    bulletButton.addEventListener("click",function(){
                        document.getElementById('theWYSIWYG').focus();
        
        
                        editor.execCommand("InsertUnorderedList",false,"newOL"+Math.round(Math.random()*1000));
    
                        var txt = iframeBody.html();
                        $('#hiddenTextarea').val(txt);
        
    
                    },false);
        
                },false);
                    $(iframeBody).on( 'keyup',function() {
                        var txt = $(this).html();
                        $('#hiddenTextarea').val(txt);
                });