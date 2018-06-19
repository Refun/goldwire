$(document).ready(function() {
        $('#id_text').summernote({
            placeholder: 'Write briefly about the opportunity here',
            height: 120,

            
            callbacks: {
                onEnter: function() {
                    var node = document.createElement('br');
                    $('#id_text').summernote('insertNode', node);
                }
            },
            

            toolbar: [
                ['para', ['ul']]
              ],

            
            focus: true,
            disableResizeEditor: true,

            /*
            cleaner:{
                action: 'both',
                keepHtml: false,
                keepOnlyTags: ['<ul>', '<li>'], 
                keepClasses: false,
                badTags: ['style', 'script', 'applet', 'embed', 'noframes', 'noscript', 'html'], 
                badAttributes: ['style', 'start'], 
                limitChars: false, 
                limitDisplay: 'both', 
                limitStop: false 
            }
            */
            
            
        });

        
        $('.note-statusbar').hide();

        $('#id_text').summernote('code', '');
        

        


        // setTimeout(function(){
        //     $('#message').click();

        // }, 3000);



    });
