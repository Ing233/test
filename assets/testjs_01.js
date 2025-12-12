var _ql_vImage_=function(){
	
	    function find_current_variant(section){  
          
            var vid = _ql_get_vid_from_url();
            if ( vid ) return vid;
          
			var element=section||document;
			default_variant=0==default_variant?Object.keys(product_variants)[0]:default_variant;var queries={};
			
			return document.location.search.substr(1).split("&").forEach((function(q){var i=q.split("=");try{queries[i[0].toString()]=i[1].toString()}catch(err){}})),
			
			(isNaN(queries.variant)?element.querySelector('form[action="/cart/add"] [name="id"]:checked')?element.querySelector('form[action="/cart/add"] [name="id"]:checked').value:element.querySelector('[name="id"]')?element.querySelector('[name="id"]').value:default_variant:queries.variant?queries.variant:element.querySelector("select option[value='"+default_variant+"']").parentNode.value) 
			||
			default_variant
		}
		
		function is_variant_in_url(){
			return document.location.search.indexOf("variant=")>=0
		}
		
		function _ql_get_vid_from_url(){
			
			var this_url = document.location.href;
            var arr_tmp  = this_url.split('?variant=');
            var vid = 0;
          
            if ( arr_tmp.length > 1) {
                vid = arr_tmp[1];
            } else {
                vid = 0;
            }
			
            return vid;
		}
		
		function find_variant_images(variant_id){
			var variant_images;
			if(variant_id||(variant_id=find_current_variant()),variants.hasOwnProperty(variant_id)?variant_images=variants[variant_id]:(variant_id=_ql_get_vid_from_url(),variant_images=variants.hasOwnProperty(variant_id)?variants[variant_id]:variants[default_variant]),(!variant_images||0==variant_images.length)&&skip_showcase_image>=product_images.length)
				return product_images;
			
			if(!is_home&&"no_action"!=only_run_if_variant_in_url&&!is_variant_in_url()){
				function showcase_images(){
					return variants.g.length?variants.g:variant_assigned_images
				}
				if(selection_vid=0,"showcase_only"==only_run_if_variant_in_url)
					return showcase_images();
				if("showcase_and_variants"==only_run_if_variant_in_url)
					return variants.g.concat(variant_assigned_images);
				if("featured_only"==only_run_if_variant_in_url)
					return[product_images[0]];
				if("featured_and_showcase"==only_run_if_variant_in_url)
					return skip_showcase_image>0?[product_images[0]].concat(variants.g):
				
				showcase_images();
				if("show_all"==only_run_if_variant_in_url)
					return product_images
			}
			
			return"at_start"==general_images_position?variant_images=variants.g.concat(variant_images):"at_end"==general_images_position&&(variant_images=variant_images.concat(variants.g)),variant_images&&variant_images.length,variant_images
		}
			
		function is_array_equal(a1,a2){
			return JSON.stringify(a1)===JSON.stringify(a2)
		}
		
		function find_variant_media(variant_id){
			var variant_media;
			
			if(variant_id||(variant_id=find_current_variant()),variants_media.hasOwnProperty(variant_id)?variant_media=variants_media[variant_id]:(variant_id=_ql_get_vid_from_url(),variant_media=variants_media.hasOwnProperty(variant_id)?variants_media[variant_id]:variants_media[default_variant]),(!variant_media||0==variant_media.length)&&skip_showcase_image>=product_media.length)
				return product_media;
			if(!is_home&&"no_action"!=only_run_if_variant_in_url&&!is_variant_in_url()){
				function showcase_images(){
					return variants_media.g.length?variants_media.g:variant_assigned_media
				}
				
				if(selection_vid=0,"showcase_only"==only_run_if_variant_in_url)
					return showcase_images();
				if("showcase_and_variants"==only_run_if_variant_in_url)
					return variants_media.g.concat(variant_assigned_media);
				if("featured_only"==only_run_if_variant_in_url)
					return[product_media[0]];
				if("featured_and_showcase"==only_run_if_variant_in_url)
					return skip_showcase_image>0?[product_media[0]].concat(variants_media.g):showcase_images();
				if("show_all"==only_run_if_variant_in_url)
                    return product_media
			}
				
			return"at_start"==general_images_position?variant_media=variants_media.g.concat(variant_media):"at_end"==general_images_position&&(variant_media=variant_media.concat(variants_media.g)),variant_media&&0!=variant_media.length?variant_media:product_media
		}
		
		var quick_view_enabled=!1,
		    skip_showcase_image=0,
			selected_theme_name="Showcase",
			can_execute_script=!1,
			is_home=!1,
			only_run_if_variant_in_url="no_action",
			limit_on_product="none",
			product_url="",
			is_product_preview=window.location.href.toLowerCase().indexOf("/products_preview")>=0,
			is_product_page=window.location.href.toLowerCase().indexOf("/products/")>=0,
			variant_id=(is_home="/"==window.location.pathname,0),
			selection_vid=0,
			last_variant_images={}
			;
			
		if((is_home||is_product_page||is_product_preview)&&(can_execute_script=!0),quick_view_enabled)
			var jTimer=setInterval((function(){window.$&&window.jQuery&&clearInterval(jTimer)}),10);
		
		if(can_execute_script&&(is_home?("Startup"==selected_theme_name?product_url=document.querySelector('[data-section-type="featured-product"] .product-title a')?document.querySelector('[data-section-type="featured-product"] .product-title a').href:"":"Flow"==selected_theme_name?product_url=document.querySelector("#product-box .product-details--form-wrapper a")?document.querySelector("#product-box .product-details--form-wrapper a").href:"":"Debut"==selected_theme_name||"Success theme"==selected_theme_name||("Supply V2"==selected_theme_name?product_url=document.querySelector('[data-section-type="product-template"] a.full-details')?document.querySelector('[data-section-type="product-template"] a.full-details').href:"":"Launch"==selected_theme_name?product_url=document.querySelector(".home-featured-product .product-title a")?document.querySelector(".home-featured-product .product-title a").href:"":"Responsive"==selected_theme_name?product_url=document.querySelector(".featured-product-section .product_name a")?document.querySelector(".featured-product-section .product_name a").href:"":"Streamline"==selected_theme_name||"Broadcast"==selected_theme_name||("Palo Alto V2"==selected_theme_name?product_url=document.querySelector('[data-section-type="featured-product"]:first-child .featured-product-title a')?document.querySelector('[data-section-type="featured-product"]:first-child .featured-product-title a').href:"":"Empire V4"==selected_theme_name||"Empire V5.1"==selected_theme_name||("Startup V3"==selected_theme_name?product_url=document.querySelector(".product-title a")?document.querySelector(".product-title a").href:"":["Turbo","Turbo Seoul","Turbo Florence","Turbo Portland","Turbo Chicago","Turbo Dubai","Turbo Tennessee"].indexOf(selected_theme_name)>=0?product_url=document.querySelector(".product_section .product_name a")?document.querySelector(".product_section .product_name a").href:"":"Palo Alto V3"==selected_theme_name?product_url=document.querySelector('[data-section-type="featured-product"] .featured-product-title a')?document.querySelector('[data-section-type="featured-product"] .featured-product-title a').href:"":"Warehouse"==selected_theme_name?product_url=document.querySelector('[data-section-type="product"]:last-child .product-meta__title a')?document.querySelector('[data-section-type="product"]:last-child .product-meta__title a').href:"":"Flex"==selected_theme_name&&(product_url=document.querySelector(".shopify-section.featured-product-section.jsProduct .product-thumbnail__title a")?document.querySelector(".shopify-section.featured-product-section.jsProduct .product-thumbnail__title a").href:"")))),product_url=product_url.replace(/\/$/,"").split("?")[0].split("#")[0]):product_url=window.location.pathname.replace(/\/$/,""),product_url.length&&(void 0===window.via_product_handle||window.via_product_handle!=product_url))){
			var productJson;
		    window.via_product_handle=product_url;
			var variants={},product_variants={};
			variants.g=[];
			var product_images=[],
			    default_variant=0,
				general_images_position="at_end",
				variant_assigned_images=[],
				variants_media={},
				product_media=[]
				;
				
			variants_media.g=[];
			var variant_assigned_media=[],
			    product_tags="",
				variant_assigned_images_ids=[],
				variant_assigned_media_ids=[],
				all_variant_media=[],
				all_variant_images=[]
				;
				
			function assign_variants_media(productJson){
				product_media=productJson.media,
				productJson.variants.forEach((function(variant){variant.featured_image&&-1==variant_assigned_images_ids.indexOf(variant.featured_image.id)&&(variant_assigned_images_ids.push(variant.featured_image.id),variant_assigned_images.push(variant.featured_image)),variant.featured_media&&-1==variant_assigned_media_ids.indexOf(variant.featured_media.id)&&(variant_assigned_media_ids.push(variant.featured_media.id),variant_assigned_media.push(variant.featured_media)),!default_variant&&variant.available&&(default_variant=variant.id),variant.featured_media&&(all_variant_media[variant.featured_media.id]||(all_variant_media[variant.featured_media.id]=[]),all_variant_media[variant.featured_media.id].push(variant.id)),variants_media[variant.id]=[],variant.featured_image&&(all_variant_images[variant.featured_image.id]||(all_variant_images[variant.featured_image.id]=[]),all_variant_images[variant.featured_image.id].push(variant.id)),variants[variant.id]=[],product_variants[variant.id]=variant}));
				
				var general_media=!0,current_variant_ids=[];
				
				product_media.forEach((function(media,index){general_media&&-1==variant_assigned_media_ids.indexOf(media.id)?skip_showcase_image>0&&index<skip_showcase_image||variants_media.g.push(media):(general_media=!1,(current_variant_ids=all_variant_media[media.id]?all_variant_media[media.id]:current_variant_ids).forEach((function(variant_id){variants_media[variant_id].push(media)})))}))
			}
			
			function assign_variant_images(images){
				var general_images=!0,current_variant_ids=[];
              
				(product_images=images).forEach((function(image,index){general_images&&-1==variant_assigned_images_ids.indexOf(image.id)?skip_showcase_image>0&&index<skip_showcase_image||variants.g.push(image):(general_images=!1,(current_variant_ids=all_variant_images[image.id]?all_variant_images[image.id]:current_variant_ids).forEach((function(variant_id){variants[variant_id].push(image)})))}))
			}
			
			function is_restrictable(){
				return"include_selected"==limit_on_product&&0==/via_enabled|viaenabled|via-enabled|__via_enabled/.test(product_tags.toLowerCase())||"exclude_selected"==limit_on_product&&1==/via_disabled|via-disabled|viadisabled|__via_disabled/.test(product_tags.toLowerCase())
			}
			
			function get_ready_with_data(_callback){
				
				var DONE=4,OK=200,xhr_for_js=new XMLHttpRequest;return xhr_for_js.open("GET",product_url+".js",!0),xhr_for_js.send(),xhr_for_js.onreadystatechange=function(){if(xhr_for_js.readyState===DONE&&xhr_for_js.status===OK){if(productJson=JSON.parse(xhr_for_js.responseText),product_tags=productJson.tags.join(),(void 0===productJson.media||0==productJson.media.length)&&0==productJson.images.length)return;assign_variants_media(productJson);var xhr_for_json=new XMLHttpRequest;xhr_for_json.open("GET",product_url+".json",!0),xhr_for_json.send(),xhr_for_json.onreadystatechange=function(){xhr_for_json.readyState===DONE&&(xhr_for_json.status===OK&&(assign_variant_images(JSON.parse(xhr_for_json.responseText).product.images),_callback()))}}},!0
				
			}
			
			function processJSONInformation(){
				product_tags=productJson.tags.join(),assign_variants_media(productJson),assign_variant_images(productJson.product_images),execute_app_code()
			}
			
			function run(){
			    get_ready_with_data(execute_app_code)
            }
			
		    function execute_app_code(){
				if(!(is_restrictable()||1==product_media.length&&1==product_images.length))
					var nTimer=setInterval((function(){if(("interactive"==document.readyState||"complete"==document.readyState)&&"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&"string"==typeof jQuery.fn.jquery){if(void 0===$)var $=jQuery;clearInterval(nTimer),$("body").append("<div id='multi-variant-info' style='display:none'></div>"),$("body").append("<div id='multi-variant-thumb' style='display:none'></div>");var media_used=$(".theme-gallery .product-media").length>0;media_used||$(".theme-gallery .theme-images .swiper-slide").each((function(index,obj){$(obj).attr("data-image-id",product_images[index].id),$(".product-detail__thumbs .theme-gallery-thumb:not(.slick-cloned)").eq(index).attr("data-image-id",product_images[index].id)}));var thumbnail_wrapper=$(".product-area__details__thumbs .carousel").length?$(".product-area__details__thumbs .carousel"):$(".product-detail__thumbs .carousel").length?$(".product-detail__thumbs .carousel"):$(".product-detail__thumbs [onmousedown]");$("#multi-variant-info").html($(".theme-gallery .theme-images").html()),$("#multi-variant-thumb").html(thumbnail_wrapper.html()),$("#multi-variant-info img.lazyloading").removeClass("lazyloading").addClass("lazyload"),$("#multi-variant-thumb img.lazyloading").removeClass("lazyloading").addClass("lazyload");var zTimer=setInterval((function(){"function"==typeof $.fn.slick&&(clearInterval(zTimer),$("body").on("change click","select, .single-option-selector, label, .swatches .swatch-selector",(function(){setTimeout((function(){variant_id=find_current_variant(),selection_vid!=variant_id&&(showcase_change_images(variant_id),selection_vid=variant_id)}),100)})),showcase_change_images())}),20);function showcase_change_images(variant_id){function setSwiperContainerHeight(){var galleryHeight=400;$(window).width()>767&&(galleryHeight=$(window).height()-$(".product-detail .product-detail__upper").outerHeight()-$swiperCont.offset().top),galleryHeight>200&&($swiperCont.height(galleryHeight),$swiperImages.each((function(){$(this).height(galleryHeight).width(galleryHeight*$(this).data("aspectratio"))})),$swiperExternalVideos.each((function(){$(this).width(galleryHeight*$(this).data("aspectratio"))})))}function initColumns(){var $colWrapper,columns=$gallery.data("column-count"),$elements=$gallery.find(".theme-img"),elementsPerCol=Math.ceil($elements.length/columns),$colContainer=$gallery.find(".theme-images"),currentCol=-1;if(columns>1&&$elements.length>1&&(theme.settings.productImageParallax&&$gallery.attr("data-scrollax-parent","true"),$colContainer.find(".media-column").remove(),$elements.each((function(i){if(currentCol<Math.floor(i/elementsPerCol)){var additionalAttrs="";"object"==typeof theme&&theme.settings.productImageParallax&&(-1===currentCol?additionalAttrs="data-scrollax=\"properties: { 'translateY': '-20%' }\"":0===currentCol||1===currentCol&&(additionalAttrs="data-scrollax=\"properties: { 'translateY': '-10%' }\"")),$colWrapper=$('<div class="media-column" '.concat(additionalAttrs,"></div>")).appendTo($colContainer),currentCol++}$(this).appendTo($colWrapper)})),"object"==typeof theme&&theme.settings.productImageParallax)){if(2===columns){var $firstColumn=$colContainer.find(".media-column").eq(0),$secondColumn=$colContainer.find(".media-column").eq(1);if($secondColumn.outerHeight()>4e3){var maintainFirstColumnHeight=function(){$secondColumn.outerHeight()<$firstColumn.outerHeight()&&$firstColumn.css("height",$secondColumn.outerHeight()+"px")};maintainFirstColumnHeight(),$(window).on("debouncedresize.columnheights",maintainFirstColumnHeight)}}var nav=theme.Nav();$(window).Scrollax({offset:nav.bar.height()}),$(window).Scrollax("reload")}}function destroyColumns(){var $colContainer=$gallery.find(".theme-images");$colContainer.find(".theme-img").each((function(){$(this).appendTo($colContainer)})),$(window).off("debouncedresize.columnheights"),$colContainer.find(".media-column").remove(),theme.settings.productImageParallax&&($gallery.removeAttr("data-scrollax-parent","true"),$(window).Scrollax("destroy"))}function initSwiper(){destroyColumns();var extraSwiperOpts={};if(extraSwiperOpts="dots"===$swiperCont.data("swiper-nav-style")?{dynamicBullets:!0,pagination:{el:$swiperCont.find(".swiper-pagination")[0],dynamicBullets:!0}}:{navigation:{nextEl:$swiperCont.find(".swiper-button-next")[0],prevEl:$swiperCont.find(".swiper-button-prev")[0]}},isFeaturedProduct){var updateMediaHeight=function(){theme.viewport.isSm()?$productMedia.css("height",$productDetails.outerHeight()+"px"):$productMedia.css("height","auto")},$productDetails=$gallery.closest(".product-area").find(".product-area__details .product-area__details__inner"),$productMedia=$gallery.closest(".product-area").find(".product-area__media");$(window).on("debouncedresize.swiper",updateMediaHeight),updateMediaHeight()}var swiperOpts=_objectSpread({mode:"horizontal",loop:!1,slidesPerView:"auto",resizeReInit:!0,autoHeight:!1,scrollContainer:!0,grabCursor:!0,createPagination:!1,preventClicks:!1,freeMode:!0,freeModeFluid:!0,spaceBetween:20,dynamicBullets:!1,mousewheel:{invert:!0,forceToAxis:!0},scrollbar:{el:$swiperCont.find(".swiper-scrollbar")[0],draggable:!0}},extraSwiperOpts,{breakpoints:{767:_objectSpread({autoHeight:!0,slidesPerView:1,spaceBetween:0,freeMode:!1,freeModeFluid:!1},extraSwiperOpts)},on:{init:function(){lazySizes.autoSizer.checkElems(),$swiperCont.find(".swiper-slide-active .lazyload--manual").removeClass("lazyload--manual").addClass("lazyload"),setTimeout((function(){$swiperCont.find(".lazyload--manual").removeClass("lazyload--manual").addClass("lazyload")}),null===window.localStorage.getItem("is_first_visit")?6e3:2e3)}}});swiper=new Swiper($swiperCont,swiperOpts);var randomId=(new Date).getTime();theme.swipers[randomId]=swiper,$swiperCont.attr("data-swiper-id",randomId);var startIndex=$gallery.find(".current-img").index();startIndex>0&&swiper.slideTo(startIndex,0),isFeaturedProduct&&$gallery.find(".current-img .product-media").addClass("product-media--active-variant"),$gallery.hasClass("featured-product__gallery--single")&&$swiperCont.addClass("swiper-no-swiping"),setTimeout((function(){$(window).trigger("resize"),lazySizes.autoSizer.checkElems(),swiper&&swiper.update()}),isFeaturedProduct?3e3:1e3)}if(variant_images=media_used?find_variant_media(variant_id):find_variant_images(variant_id),!is_array_equal(last_variant_images,variant_images)){last_variant_images=variant_images;var slide_images="",thumb_images="";$.each(variant_images,(function(index,image){media_used?(slide_images+=$("#multi-variant-info .product-media[data-media-id='"+image.id+"']").closest(".swiper-slide").clone().wrap("<div></div>").parent().html(),thumb_images+=$("#multi-variant-thumb .theme-gallery-thumb[data-media-id='"+image.id+"']").clone().wrap("<div></div>").parent().html()):(slide_images+=$("#multi-variant-info .swiper-slide[data-image-id='"+image.id+"']").clone().wrap("<div></div>").parent().html(),thumb_images+=$("#multi-variant-thumb .theme-gallery-thumb[data-image-id='"+image.id+"']").clone().wrap("<div></div>").parent().html())})),$(window).off("ccScrollToMedia"),$(".theme-gallery-thumb").off("click"),$(".carousel-wrapper .carousel").off("init reInit setPosition"),$(".slick-slider").slick("unslick");try{document.querySelector(".swiper-container").swiper.destroy(!0,!0)}catch(e){}$(".theme-gallery .theme-images").html(slide_images),thumbnail_wrapper.html(thumb_images);var swiper,$swiperCont=$(".theme-gallery").find(".swiper-container");if(($gallery=$(".theme-gallery")).off("variantImageSelected"),"function"==typeof _objectSpread)"object"==typeof theme&&theme.viewport.isSm()?($(".theme-gallery .theme-images").find(".lazyload--manual").removeClass("lazyload--manual").addClass("lazyload"),$(".theme-gallery .theme-images .media-column").length&&destroyColumns(),initColumns()):theme.viewport.isXs()&&initSwiper();else if(media_used){var swiperOpts={mode:"horizontal",loop:!1,slidesPerView:"auto",resizeReInit:!0,centeredSlides:1==$gallery.find("img").length,autoHeight:!1,freeMode:!0,freeModeFluid:!0,scrollContainer:!0,grabCursor:!0,createPagination:!1,preventClicks:!1,navigation:{nextEl:$swiperCont.find(".swiper-button-next")[0],prevEl:$swiperCont.find(".swiper-button-prev")[0]},breakpoints:{767:{slidesPerView:1,centeredSlides:1}}};if($gallery.find(".swiper-scrollbar").length){var sectionClass="";if($gallery.closest(".featured-product").length)for(var classes=$gallery.closest(".featured-product")[0].className.split(/\s+/),i=0;i<classes.length;i++)classes[i].indexOf("section-id-")>-1&&(sectionClass="."+classes[i]+" ");$.extend(swiperOpts,{scrollbar:sectionClass+".swiper-scrollbar",scrollbarDraggable:!1,scrollbarHide:!1,scrollbarSnapOnRelease:!0})}swiper=new Swiper($swiperCont,swiperOpts)}else{swiperOpts={mode:"horizontal",loop:!1,slidesPerView:"auto",resizeReInit:!0,centeredSlides:1==$(".theme-gallery").find("img").length,autoHeight:!1,freeMode:!0,freeModeFluid:!0,scrollContainer:!0,grabCursor:!0,createPagination:!1};$(".swiper-scrollbar").length&&$.extend(swiperOpts,{scrollbar:".swiper-scrollbar",scrollbarDraggable:!1,scrollbarHide:!1,scrollbarSnapOnRelease:!0}),swiper=$swiperCont.swiper(swiperOpts)}$(".theme-gallery-thumb a").on("click",(function(e){if(e.preventDefault(),$(".carousel-wrapper .carousel.slick-initialized").length)var index=$(this).parent().attr("data-slick-index");else index=$(this).parent().index();swiper&&swiper.slideTo(index,1e3)}));var slickOptions={autoplay:!1,fade:!1,infinite:!1,useTransform:!0,arrows:!0,dots:!1,slidesToShow:1,centerMode:!1,variableWidth:!0,prevArrow:'<button type="button" class="slick-prev" aria-label="'+theme.strings.previous+'">'+theme.icons.chevronLeft+"</button>",nextArrow:'<button type="button" class="slick-next" aria-label="'+theme.strings.next+'">'+theme.icons.chevronRight+"</button>"};media_used&&(slickOptions={autoplay:!1,fade:!1,infinite:!1,useTransform:!0,arrows:!0,dots:!1,slidesToShow:4,slidesToScroll:4,centerMode:!1,verticalSwiping:!0,vertical:!0,prevArrow:'<button type="button" class="slick-prev" aria-label="'+theme.strings.previous+'">'+theme.icons.chevronDown+"</button>",nextArrow:'<button type="button" class="slick-next" aria-label="'+theme.strings.next+'">'+theme.icons.chevronDown+"</button>",responsive:[{breakpoint:1100,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".carousel-wrapper .carousel:not(.slick-initialized)").each((function(){$(this).on("init reInit setPosition",(function(){var lastSlide=$(this).find(".slick-slide:last");if(lastSlide.length>0){var slideInnerWidth=lastSlide.position().left+lastSlide.outerWidth(!0);$(this).parent().outerWidth(!0)>slideInnerWidth?$(this).find(".slick-next, .slick-prev").addClass("theme-unnecessary").attr("tabindex","-1"):$(this).find(".slick-next, .slick-prev").removeClass("theme-unnecessary").attr("tabindex","0")}})).on("init reInit setPosition",(function($slick){$(".lazyload--manual",this).removeClass("lazyload--manual").addClass("lazyload"),setTimeout((function(){$($slick.target).find(".slick-slide a").attr("tabindex","0")}))})).slick(slickOptions)}));var $swiperImages=$swiperCont.find("img"),$swiperExternalVideos=$swiperCont.find('[data-media-type="external_video"]');"function"!=typeof _objectSpread&&setSwiperContainerHeight();var $gallery=$(".theme-gallery"),isFeaturedProduct=!1;!1===$gallery.data("scroll-to-variant-media")||"object"==typeof theme&&theme.viewport.isXs()||setTimeout((function(){window.scrollTo({behavior:"smooth",top:document.querySelector(".theme-gallery .theme-images").offsetTop})}),500)}}}}),10)
					
			}

			
			run();

	    }

	};
	
	_ql_vImage_();
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	