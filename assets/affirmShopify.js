
<!-- -->
<!-- Affirm -->
	let _shopify_locale = Shopify.locale;
	let _shopify_country = Shopify.country;
	let _affirm_locale;
	let _affirm_country;
	let _region_public_key;
	
	if (_shopify_country === 'US') {
		_affirm_country = 'USA';
		_affirm_locale = 'en_US';
		_region_public_key = 'AMIZYW36PAIWPHDH'
	} else if (_shopify_country === 'CA') {
		_affirm_country = 'CAN';
		_affirm_locale = (_shopify_locale === 'fr' ?  'fr' : 'en') + '_' + _shopify_country;
		_region_public_key = 'AMIZYW36PAIWPHDH'
	} else {
		_affirm_country = 'USA';
		_affirm_locale = 'en_US'
		_region_public_key = 'AMIZYW36PAIWPHDH'
	}

	_affirm_config = {
	   public_api_key: _region_public_key,
	   script:          "https://cdn1.affirm.com/js/v2/affirm.js",
	   locale: _affirm_locale,
	   country_code: _affirm_country,
	};

	(function(l,g,m,e,a,f,b){var d,c=l[m]||{},h=document.createElement(f),n=document.getElementsByTagName(f)[0],k=function(a,b,c){return function(){a[b]._.push([c,arguments])}};c[e]=k(c,e,"set");d=c[e];c[a]={};c[a]._=[];d._=[];c[a][b]=k(c,a,b);a=0;for(b="set add save post open empty reset on off trigger ready setProduct".split(" ");a<b.length;a++)d[b[a]]=k(c,e,b[a]);a=0;for(b=["get","token","url","items"];a<b.length;a++)d[b[a]]=function(){};h.async=!0;h.src=g[f];n.parentNode.insertBefore(h,n);delete g[f];d(g);l[m]=c})(window,_affirm_config,"affirm","checkout","ui","script","ready");
	// Use your live public API Key and https://cdn1.affirm.com/js/v2/affirm.js script to point to Affirm production environment.
<!-- End Affirm -->;

let promosJSON = '[{"promoStatus":true,"pageType":"product","selector":null,"onChange":null,"fontSize":"12","logoType":"logo","logoColor":"blue","position":"afterend","addCents":false,"saleSelector":null,"comparePrices":false,"dataElement":".product-form__input","alaElement":"#affirm-messaging","shopifyPageType":"product"}]';

let promos = JSON.parse(promosJSON);

const defaultAlaElement = '[data-price]';
	
promos.forEach((promo) => {
if (!promo.promoStatus) {
	return false;
}
if(promo.pageType === 'product'){

  	if(promo.shopifyPageType && promo.shopifyPageType !== 'global'){
		if(meta.page.pageType === promo.shopifyPageType){
			updateProduct();
		}
	} else {
		updateProduct();
	}

	function updateProduct(){
		
		if(typeof jQuery !== 'undefined'){
			jQuery.getJSON(window.location.pathname+'.js', function(shopifyProduct) {

			  currentProduct = shopifyProduct;
	          upsertVariantALA(promo, currentProduct);

	          if(promo.dataElement){
		          jQuery(promo.dataElement).change(function(){
		              upsertVariantALA(promo, currentProduct, function(){
		                affirm.ui.ready(function(){
							affirm.ui.refresh();
						});
		              });  	
		            });
		        }    
			});
     	}
	    if(promo.onChange) setObserver(promo, updateProductFromAjaxPrice);
		
	  if(promo.selector){
	    
	    pagePricingData(promo);
	    
	    if(promo.onChange) setObserver(promo, changePrice);

	  } 
	}
} else if(promo.pageType === 'category'){

	if(promo.shopifyPageType && promo.shopifyPageType !== 'global'){
		if(meta.page.pageType === promo.shopifyPageType){
			updateCategory();
		}
	} else {
		updateCategory();
	}

	if(promo.selector) pagePricingData(promo); //uses the original methods to get price

	function updateCategory(){
		let thisElement2 = promo.alaElement ? promo.alaElement : defaultAlaElement
	    let productCards = document.querySelectorAll(promo.dataElement);
	    if(typeof jQuery !== 'undefined'){
		    jQuery(productCards).each(function(){
		      	let card = jQuery(this);
		    	attr = card.find('a[href*="products"]').attr('href');
		    	urlParams = attr.split('/');
		      	productIndex = urlParams.indexOf("products");
		      	jQuery.getJSON('/products/'+urlParams[productIndex+1]+'.js', function(product) {
		          	
		          	insertElement = card.find(thisElement2)
					upsertAla(promo, product.price.toString(), insertElement[0]);
		        })
		 	
		  	});
		}  	
	}
    
}else if(promo.pageType === 'cart'){
	// always has a global page type
    
    let thisElement3 = promo.alaElement ? document.querySelector(promo.alaElement) : document.querySelector(defaultAlaElement)
    
    if(typeof jQuery !== 'undefined'){
    	jQuery.getJSON('/cart.js', function(cart) {
	      	upsertAla(promo, cart.total_price.toString(), thisElement3)
		});

		jQuery(promo.dataElement).change(function(){
  		
		jQuery.getJSON('/cart.js', function(cart) {
	        upsertAla(promo, cart.total_price.toString(), thisElement3, function(){
		          	affirm.ui.ready(function(){
						affirm.ui.refresh();
					});
		        })
	    	})
	    })
    }

	if(promo.selector){
	    
	    pagePricingData(promo);
	    
	    if(promo.onChange) setObserver(promo, changePrice);

	} else if(promo.onChange) {
      
      setObserver(promo, updateCartFromAjaxPrice);
    } 
}else if(promo.shopifyPageType && promo.shopifyPageType !== 'global'){

		if(meta.page.pageType === promo.shopifyPageType){
			pagePricingData(promo);

			if(promo.onChange) {
		      setObserver(promo, changePrice);
		    }
		}
} else {

	pagePricingData(promo);

	if(promo.onChange) {
      setObserver(promo, changePrice);
    }
}

})

function setObserver(promo, changeMethod){


	setTimeout(function(){

		const targetNode = document.querySelector(promo.onChange);
		const config = { attributes: true, childList: true, subtree: true };

		const callback = function(mutationsList, observer) {
		    for(let mutation of mutationsList) {
		        if (mutation.type === "childList") {
                  
                  setTimeout(
                  	changeMethod(observer, promo, function(){
						observer.observe(targetNode, config);
					}), 1250);
					break;
		        }
		    }
		};

		const observer = new MutationObserver(callback);
		if(targetNode) observer.observe(targetNode, config);

	}, 1250);
}

function updateProductFromAjaxPrice(observer, promo, callback) { 

	observer.disconnect();
  	
  	removeExistingALA();

    upsertVariantALA(promo, currentProduct);
  	affirm.ui.ready(function(){
		affirm.ui.refresh();
	});
    setTimeout(callback, 2500);
}
function updateCartFromAjaxPrice(observer, promo, callback) { 

	observer.disconnect();
  	
  	let thisElement = promo.alaElement ? document.querySelector(promo.alaElement) : document.querySelector(defaultAlaElement)
	if(typeof jQuery !== 'undefined'){
	    jQuery.getJSON('/cart.js', function(cart) {
	      upsertAla(promo, cart.total_price.toString(), thisElement);
	      	affirm.ui.ready(function(){
				affirm.ui.refresh();
			});
	      setTimeout(callback, 1250);
	    })
    }
}
function changePrice(observer, promo, callback) { 

	observer.disconnect();
	
    pagePricingData(promo, function(){
        
        setTimeout(callback, 1250);
    });
}
function pagePricingData(promo, callback) {

	let nodeList;
	let salePrices;
	let regularPrices;
	let price;
	if(promo.comparePrices){
		regularPrices = document.querySelectorAll(promo.selector);
	} else {
		salePrices = false;
		if(promo.saleSelector){
			salePrices = document.querySelectorAll(promo.saleSelector).length ? document.querySelectorAll(promo.saleSelector) : false	
		}
		regularPrices = document.querySelectorAll(promo.selector);	
	}

	let prices = salePrices ? salePrices : regularPrices; 

	if(!callback){if(document.getElementsByClassName("affirm-as-low-as")[0])return;}
	
	removeExistingALA(); //for onChange and Observers

	for (let i in prices) {
		if(promo.comparePrices){
			if (prices[i].innerText){ 
				price = Number(prices[i].innerText.replace(/[^\d]/g,""))
				let nodeList = prices[i].childNodes
				for (let n in nodeList){ 
					let nodePrice = nodeList[n].innerText
					if(nodePrice){
						if(nodePrice.length){
							while (!Number(nodePrice[0]) && nodePrice.length > 0  ) {
								nodePrice = nodePrice.slice(1)
							}	
							nodePrice = Number(nodePrice)
							price = price > nodePrice && nodePrice != 0 ? nodePrice : price
						}
					}
				}
				price = price.toString();
			}
		} else {
			price = prices[i].innerText; 
		}

		if(price){
          	let totalAmount = price.replace(/[^\d]/g,"");

            var thisPrice = parseInt(totalAmount).toString();

            if(promo.addCents) thisPrice += '00'

			upsertAla(promo, thisPrice, prices[i], callback) 
		} 

	}
}
function upsertAla(promo, itemPrice, insertElement, callback){
  
  let validPrice = validatePrice(itemPrice);
  if(!validPrice) return;
  	
	// a callback is called when a function is called that updates the ala, Example: observer or onChange function
	if(callback){
      if(document.querySelector(".affirm-as-low-as")){
        if(typeof jQuery !== 'undefined'){
        	jQuery(".affirm-as-low-as").attr('data-amount',itemPrice);
        	return callback();
        }
        
      } else {

      	insertALA();
      	affirm.ui.ready(function(){
			affirm.ui.refresh();
		});
		return callback();
      }
	}
	insertALA();

	function insertALA(){
		let ala = buildAffirmALA(promo,itemPrice);
		if(ala && insertElement && typeof insertElement === "object" &&  typeof insertElement !== null ){
    
			insertElement.insertAdjacentElement(promo.position, ala);
			affirm.ui.ready(function(){
				affirm.ui.refresh();
			});
		} 
	}
}
function buildAffirmALA(promo, itemPrice) {
  
    var promoEl = document.createElement("p");
  
	promoEl.className = "affirm-as-low-as";    
	promoEl.dataset.amount = itemPrice;
	promoEl.dataset.affirmType = promo.logoType;
  	promoEl.dataset.pageType = promo.pageType;
  	
  	if(promo.logoType === "logo" || promo.logoType === "symbol") promoEl.dataset.affirmColor = promo.logoColor;
  
  	let style = "font-size: "+promo.fontSize+"px;";
  
    if(promo.styleArray){
      
      for(i in styleArray)style += styleArray[i];
  	}
  	
  	promoEl.style = style;
  
	return promoEl;
}
function validatePrice(itemPrice){

	var numOnly = itemPrice.match(/^[0-9]+$/) != null;
  
  	if(!numOnly) return false;
  	return true;
}
function removeExistingALA(){
  const e = document.querySelector(".affirm-as-low-as");
  if(e) e.parentElement.removeChild(e);
}
function upsertVariantALA(promo, currentProduct, callback=null){
    let thisElement = promo.alaElement ? document.querySelector(promo.alaElement) : document.querySelector(defaultAlaElement)

	let params = new URLSearchParams(window.location.search);
	let selectedOption = params.get('variant')

	if(selectedOption){
		for(let i of currentProduct.variants){
	        if(i.id == selectedOption){
	     
	          upsertAla(promo, i.price.toString(), thisElement, callback)
	        } 
	    }
	} else {
		if (currentProduct.variants) {
			upsertAla(promo, currentProduct.variants[0].price.toString(), thisElement, callback);
		}
	}
}