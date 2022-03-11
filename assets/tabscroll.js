
// Sets up the page
function setUpPage() {

    // finds all anchor tabs within the data-tabscrollnavcontainer
    $tabscroll_anchors = $("[data-tabscrollnavcontainer]").find("a");
    
    // adds the active class to the first tab-navigation
    $($tabscroll_anchors[0]).parent().addClass("tabscroll_activeNavi");

    for ($i = 0; $i < $tabscroll_anchors.length; $i++){
        
        // targets each and every link's href-attribute found within the tabscrollnavcontainer
        var $eachAnchor = $($tabscroll_anchors[$i]).attr("href");
    
        // adds the navigational data-attribute to each anchor tag's parent
        $($tabscroll_anchors[$i]).parent().attr("data-tabscrollnavi", $eachAnchor.substring(1))  
        
        // we then use this anchor to find each element, section, etc. that has the 
        // same ID as the anchor tag we found.
        
        // sets a custom data-tabscroll attribute to each section that correspons
        // with the link in the navigation, stripping off the # (substring)
        $($eachAnchor).attr("data-tabscroll", $eachAnchor.substring(1));
    }    
}


$(function(){  
    // setup the page
    setUpPage();
    
    // remove each id tag of an data-tabscroll element
    $("[data-tabscroll]").removeAttr('id');
     
    // hiding all sections initially except the one specified.
    $("[data-tabscroll]:first-of-type").siblings("[data-tabscroll]").hide();   
    
    // on any hashfragement click within the tabscrollnavi Navigation
    // we may not really need this whole section ...  
        $('[data-tabscrollnavi] [href^="#"]').click(function(event){
            // read the href tag of the tag clicked
            var $tabscrolltab = $(this).attr("href");

            // not sure if we really need this. Also some old code that didn't work...
            // writing the hashtag into the history
    //        if(history.pushState) {
    //         history.pushState(null, null, $tabscrolltab);
    //        }
    //        else {
            location.hash = $tabscrolltab;
    //        }  
        }); 
    
    
    
    // this ACTUALLY triggers the change in the tabs 
    // onhashchange because of IE, had onpopstate before
    $(window).on('hashchange', function (event) {
        // writing the URL that raised the event into a string
        var $location = String(document.location);

        // stripping off everything before the hash
        $location = $location = $location.split("#")[1];
    
        // if there is no hash, basically...
        if ($location === undefined){
            // show only the first section
            $("[data-tabscroll]:first-of-type").show();   
        }
        // if there is a hash-link active
        else{
            //hide all tabs
            $("[data-tabscroll]").hide();
            // fade in only the tab with the data-tabscroll attribute corresponding
            // to the link that was clicked.
            // Why are we not using the ID? Why did we remove the ID?
            // I did this to prevent the anchor-scroll-back-to-the-top, which seems 
            // not preventable on a window.popstate or hashchange
            $("[data-tabscroll='"+$location+"']").show()

            // removes any active navi class from natigation
            $("[data-tabscrollnavi]").removeClass("tabscroll_activeNavi");
            // and sets one only on the link's parent that was clicked.
            $("[data-tabscrollnavi='"+$location+"']").addClass("tabscroll_activeNavi");
        }
    // triggers the hashchange manually on pageload. Adapted from http://stackoverflow.com/questions/20652020/the-hashchange-event-of-jquery-doesnt-work-if-i-open-a-page-with-hash-directly
    }).trigger('hashchange');
    
});