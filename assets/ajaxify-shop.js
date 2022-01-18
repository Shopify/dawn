/**
* Shopify Ajaxify Shop. 
* 
* @uses Modified Shopify jQuery API (link to it)
*
*/

  
  // code for multi add buttons 
// this function clicks all the addtocart buttons on a page.  Serializes them to prevent ajax issues.
// note that after you call multiATC, you need to wait with function $( document ).ajaxStop(function() {} before doing anything.

function multiATC(callback){  
  var selectors = {
    itemCount: '#cart-item-count',
    addToCart: '.addtocartTrigger'
  };
  Shopify.queue = [];
  $(selectors.addToCart).each(function() {
    Shopify.queue.push( {
      formId: $(this).data('form-id')
    } );
  });

  Shopify.moveAlong();
  callback;
  
}
Shopify.moveAlong = function() {
    // If we still have requests in the queue, let's process the next one.
    if (Shopify.queue.length) {
      var request = Shopify.queue.shift();

      Shopify.addItembyFormCC(request.formId, Shopify.moveAlong);
    }
    // If the queue is empty, we will redirect to the cart page.
    else {
      return;
    }
};

// Create a new Shopify.addItembyForm function that can also run a callback
Shopify.addItembyFormCC = function(formId, callback) {
  
    var formJ = $('#'+formId);
    var properties = {};
    var params = {};
  
  $(formJ.find('select')).each(function() {
    var attr = $(this).attr('name');
    if (typeof attr !== typeof undefined && attr !== false) {
      if (attr.indexOf('properties') > -1){
        var propertyName = $(this).attr('name').substring(
            attr.lastIndexOf("[") + 1, 
            attr.lastIndexOf("]")
        );
        var propertyVal = $(this).val();
        properties[propertyName] = propertyVal;

      } else {
        var entry =  attr;
        var value =  $(this).val();
        if (entry == 'quantity' || entry == 'id'){
          params[entry] = value;
        }
      }
    }
  });
  $(formJ.find('input')).each(function() {
    var attr = $(this).attr('name');
    if (typeof attr !== typeof undefined && attr !== false) {
      if (attr.indexOf('properties') > -1){
        var propertyName = $(this).attr('name').substring(
            attr.lastIndexOf("[") + 1, 
            attr.lastIndexOf("]")
        );
        var propertyVal = $(this).val();
        properties[propertyName] = propertyVal;

      } else {
        var entry =  attr;
        var value =  $(this).val();
        if (entry == 'quantity' || entry == 'id'){
          params[entry] = value;
        }
      }
    }
  });
    if(properties != false){
      params.properties = properties;
    }

    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      dataType: 'json',
      data: params,
      success: function(){
        if(typeof callback === 'function'){
          callback();
          
        }
        
      },
      error: function(){}
    });
}

  
/**
* Shopify.onItemAdded
* 
* Triggered by the response when something is added to the cart via the add to cart button.
* This is where you would want to put any flash messaging, for example.
* 
* @param object lineItem
* @param HTMLelement/String Form HTMLElement, or selector
*/
Shopify.onItemAdded = function(lineItem) {

  jQuery.getJSON('/cart.js', function(cart) {

      //$("#cart-mybag").html("My cart ("+cart.item_count+")");
        $(".cart-item-count").html(cart.item_count);
        //update numbers for the add to cart popup
        $("#checkout-button-big").css({backgroundColor: "#F8B3A0", color: "black" });
        $(".atc_pop_totalcount").html(cart.item_count);
        $(".atc_pop_totalmoney").html(Shopify.formatMoney(cart.total_price));
        if (cart.item_count > 0){
          $("#cartcheckout").children("a").css("text-decoration","underline");
        }else {
          $("#cartcheckout").children("a").css("text-decoration","none");
        }
        if (cart.item_count > 1){
          $(".atm_pop_s_total").show(); 
        } else {
          $(".atm_pop_s_total").hide(); 

        }
  });

  var IDnum = lineItem.product_id;
  var atcBTN = $("#"+IDnum+"atcbutton");
  
  if (atcBTN.length == 0) {
    var IDnum = IDnum+"FOOT";
    var atcBTN = $("#"+IDnum+"atcbutton");
    
  }
  
  if (atcBTN.length != 0) {

    //fire facebook conversion event for add to cart (located in product.liquid)
    

    if ($("#"+IDnum+"price").length < 1){
      var pricePointer  = $(".feature-descrip .price");
    } else {
       var pricePointer  = $("#"+IDnum+"price");
    }
    var spaceindex = pricePointer.html().indexOf(" ");
    var soldinpairflag = pricePointer.html().indexOf("min qty 2");

    if (spaceindex > 0){
      if (soldinpairflag > 0){
        var tempprice = pricePointer.html().substring(1,spaceindex).replace(',','')*2; 
      } else {
        var tempprice = pricePointer.html().substring(1,spaceindex).replace(',',''); 
      }

    } else {
      var tempprice = pricePointer.html().substring(1);      
    }

    //var tempprice = pricePointer.html().replace(' each','').replace('$','').replace(',','');
    trackConversionEvent2(tempprice,'USD',$("."+IDnum+"prod_name:first").attr('name'), $("#"+IDnum+"select option:selected").attr('sku'));
            
    
    
    //update the popup info

    if (typeof($("#"+IDnum+"select-option-1").val())!= "undefined") {
      $("#"+IDnum+"atc_pop_style").html($("#"+IDnum+"select-option-1").val());
      $("#"+IDnum+"atc_pop_style").parent().show();
    } else {
        $("#"+IDnum+"atc_pop_style").parent().hide();
    }

    $("#"+IDnum+"atc_pop_size").html($("#"+IDnum+"select-option-0").val());


    $("#"+IDnum+"atc_pop_qty").html($("#"+IDnum+"qtyselect").val());
    $("#"+IDnum+"atc_pop_price").html(pricePointer.html());

    $("#"+IDnum+"atc_pop_totalprice").html($("#"+IDnum+"total").html());
    if ($("#"+IDnum+"qtyselect").attr("value")  > 1) {
      $(".atm_pop_s").show(); 
    } else {
      $(".atm_pop_s").hide(); 
    }
    //end popup update
  
    //monogram CODE (added for each product.. but temp for now put it here).   

    var monogramLISTHOLDER = atcBTN.closest('.product-page-list-holder');
    var monogramOPTIONS = monogramLISTHOLDER.find('.product-page-list-options').find('select[name=id]');
    var monogramQTY = monogramLISTHOLDER.find('.product-page-list-qty');
    if (monogramLISTHOLDER.length == 0){
      monogramLISTHOLDER = atcBTN.closest('.product-page-list-holder-top');
      monogramOPTIONS = monogramLISTHOLDER.find('.product-page-list-options-top').find('select[name=id]');
      monogramQTY = monogramLISTHOLDER.find('.product-page-list-qty-top');
    } 

    var monocheckbox = monogramLISTHOLDER.find('.mono-prod-selector');
    var monogrampageFlag = 'false';

    var tempmonoHandle = monocheckbox.attr('handle');
    var tempmonoVarId = monogramOPTIONS.val();
    var tempmonoSku = monogramOPTIONS.find(':selected').attr('SKU');
    var tempmonoqty = monogramQTY.find('input').val();

    if (monocheckbox.length > 0){
      if (monocheckbox.is(":checked")) {
        var monogrampageFlag = 'true';
      }
    } 
    //end monogram check
  
  
    //start popup or go to monogram page
    if (monogrampageFlag == 'false'){
      //fire the popup
      
      $.fancybox.open({
        src  : '#'+IDnum+'addtocart',
        type : 'inline',
        beforeShow: function() {
          var shift = parseInt($('.compensate-for-scrollbar').css('margin-right'), 10)*-0.5;
          $('.float-panel').css('left',shift);
          // Code to execute after the pop up shows
        },
        afterClose: function() {
          $('.float-panel').css('left','0');
          // Code to execute after the pop up shows
        }
      });
  
    } else {

      $("#"+IDnum+"atcbutton").attr('href','');
      $("#"+IDnum+"atcbutton").html('<img style="width:40px; height:40px; " src="https://cdn.shopify.com/s/files/1/0093/5372/files/Spinner-1.5s-50px.svg?5544107512640040819" />');

      var finalurl = "/products/monogram?_handle="+tempmonoHandle+"&qty="+tempmonoqty+"&_variantID="+tempmonoVarId+"&_SKU="+tempmonoSku;

      setTimeout(function () {
        window.location.href = finalurl;
      }, 500);    

      // go to the monogram page
      //<a href="/products/monogram?_handle=&qty=1&_variantID=" >
      //we need variantid, quantity, producthandle.
    }
  // end popup or monogram page
  }  // end if we found an ATC button (in other words, only if we aare not on the multi page)
  
};


  
/**
* This updates the N item/items left in your cart
* 
* It's setup to match the HTML used to display the Cart Count on Load. If you change that (in your theme.liquid) 
* you will probably want to change the message html here. 
* This will update the HTML in ANY element with the class defined in selectors.TOTAL_ITEMS
*
* @param object the cart object. 
*/
Shopify.onCartUpdate = function(cart) {
return;
};   

//What to display when there is an error. You tell me?! I've left in a commented out example.
// You can tie this in to any sort of flash messages, or lightbox, or whatnot you want.
Shopify.onError = function(XMLHttpRequest, textStatus) {
  // Shopify returns a description of the error in XMLHttpRequest.responseText.
  // It is JSON.
  // Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
   var data = eval('(' + XMLHttpRequest.responseText + ')');
   alert(data.description);
};



$(document).ready(function() { 

  var jQ = jQuery;

  var selectors = {
    itemCount: '#cart-item-count',
    addToCart: '.addtocartTrigger'
  };

  jQ(selectors.addToCart).click(function(event) {
    //event.preventDefault();
    var form = jQ('#' + jQ(event.target).data('form-id'));
    Shopify.addItemFromForm(form.attr('id'));

  });
  
  $("#cart-button-big").click(function(){
    window.location="/cart";
    return false;
  });   
  
  $("#cart-button-big-holder").hoverIntent( cartTall, cartShort );
     
}); // end doc ready


function cartTall() {
  
  if(window.location.href.indexOf("cart") > -1) {

  } else {

    Shopify.getCart(function(cart){

      var carttable = "<div class=\"cartdark\" >"+cart.item_count+" items in your cart</div>";
      var tempitem = "";
      var cartpointer = "";
      var cartoptions = "";

      if (cart.item_count > 0 ){
        var physicalgiftcardflag = false;
        var monogramflag = false;
        for (var i = 0; i < cart.items.length; i++) {
          cartpointer = cart.items[i];

          if (cartpointer.title.toLowerCase().indexOf("physical gift card") >= 0) {
            physicalgiftcardflag = true;
          }

			
          var tempitem = "<div class=\"cart-dd-row\"><div alt=\""+cartpointer.title+"\" class=\"cart-hidden-img\" style=\"display:none;\" img-link=\""+cartpointer.image+"\"></div><a style=\"display:none\" aria-label=\"cart item url\" href=\""+cartpointer.url+"\">cart Item url</a><span class=\"cart-dd-img\"><img alt=\"Loading\" src=\"https://cdn.shopify.com/s/files/1/0093/5372/files/Spinner-1.5s-50px.gif?17347677086428264226\"></span><span class=\"cart-dd-title\">"+
              cartpointer.title+"<br>Qty:"+cartpointer.quantity+"</span><span class=\"cart-dd-price\">"+Shopify.formatMoney(cartpointer.price)+"</span></div>";
          carttable = carttable + tempitem;
        }
        carttable = carttable + "<div class=\"cart-dd-sub\"><div style=\"margin-right:5px;\">Subtotal:  "+Shopify.formatMoney(cart.total_price)+"</div></div><div class=\"cart-dd-footer\"><a id=\"cart-dd-co-id\" class=\"cart-dd-btn cart-dd-co\" href=\"/cart\">CHECKOUT</a></div>";

        $("#cart-drop-down-new").html(carttable);


        //check if the item is a Monogram.. then do nothing.  else go to the link
        $( ".cart-dd-row" ).click(function() {

          if ($(this).find('.cart-dd-title').html().indexOf("Monogram") == -1){
            window.location = $(this).children("a").attr("href");
          }
        });
        $("#cart-drop-down-new").fadeIn(200);

        //swap in the product images.  added the loading gif to prevent temp dead image during image pull
        $(".cart-dd-img").children('img').each(function( index ) {
          debugger;
          $(this).attr('src', $(this).parent().parent().children('div').attr('img-link'));
          $(this).attr('alt', $(this).parent().parent().children('div').attr('alt'));
        });

      } else {}

      if (physicalgiftcardflag) {
        $("#cart-dd-co-id").attr("href", "/cart");
        $("#checkout-button-big").attr("link", "/cart");

      }


    });

  }
  return;              
}
function cartShort() {

  $("#cart-drop-down-new").fadeOut(200);
  return;              
}

