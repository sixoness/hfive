inCludeScript('../public/javascripts/jquery.min.js')




inCludeScript('../public/javascripts/plugin.js')
inCludeScript('../public/javascripts/page.js')
inCludeScript('../public/javascripts/jquery.nicescroll.min.js')
inCludeScript('../public/javascripts/index.js')
inCludeScript('../public/javascripts/about.js')
inCludeScript('../public/javascripts/product.js')




function inCludeScript (url){
    document.write('<script type="text/javascript" src="js/'+ url +'"></script>');
    return false;
}