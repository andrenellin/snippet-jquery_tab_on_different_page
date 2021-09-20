<script>  
    jQuery(document).ready(function () {  
        var tab = GetParameterValues('tab'); 

        switch(tab){
          case 'storm-damage':
          jQuery('#myTab_398 li:nth-child(2) a').click();
          break;
          case 'roof-repair':
          jQuery('#myTab_398 li:nth-child(3) a').click();
          break;
          case 'general-construction':
          jQuery('#myTab_398 li:nth-child(4) a').click();
          break;
          default:
          jQuery('#myTab_398 li:nth-child(1) a').click();                           
        }       

        function GetParameterValues(param) {  
                    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
                    for (var i = 0; i < url.length; i++) {  
                        var urlparam = url[i].split('=');  
                        if (urlparam[0] == param) {  
                            return urlparam[1];  
                        }  
                    }  
                }  
    });  
</script> 