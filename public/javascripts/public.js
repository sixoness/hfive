inCludeScript('../house-five/javascripts/jquery.min.js')




inCludeScript('../house-five/javascripts/plugin.js')
inCludeScript('../house-five/javascripts/page.js')
inCludeScript('../house-five/javascripts/jquery.nicescroll.min.js')
inCludeScript('../house-five/javascripts/index.js')
inCludeScript('../house-five/javascripts/about.js')
inCludeScript('../house-five/javascripts/product.js')




function inCludeScript (url){
    document.write('<script type="text/javascript" src="js/'+ url +'"></script>');
    return false;
}