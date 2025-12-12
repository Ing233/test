
var _ql_accordion = function() {
  var item = $(".js-accordion-info");
  var trigger = $(".js-accordion-trigger");
  var items = item.hide(); //hide all items
  var activeClass = "js-active";

  trigger.click(function() {
	var thisItem = $(this).attr("href");

	//recalculate single product fixed box position on accordion changes
	//added delay to wait for accordion to finish animating
	setTimeout(function() {
	  $(".js-product-single-box").trigger("resize");
	}, 400);

	//review stars scroll and open
	if ($(this).hasClass("js-accordion-scroll")) {
	  var outsideAccordion = $(".js-accordion").find(
		"[href='" + $(this).attr("href") + "']"
	  );

	  //check if sticky header and set correct offset
	  if ($(".js-header").hasClass("js-header-sticky")) {
		scrollOffset = $(".js-header").outerHeight() + 18;
	  } else {
		scrollOffset = 18;
	  }

	  //scroll
	  $("html,body").animate(
		{
		  scrollTop: outsideAccordion.offset().top - scrollOffset
		},
		800
	  );

	  //open accordion
	  $(thisItem)
		.addClass(activeClass)
		.stop()
		.slideDown();
	  outsideAccordion.addClass(activeClass);

	  return false;
	}

	//check if clicked is active
	if ($(thisItem).hasClass(activeClass)) {
	  //close current item
	  $(this).removeClass(activeClass);
	  $(thisItem)
		.removeClass(activeClass)
		.stop()
		.slideUp();
	} else {
	  //open and activate this item
	  $(thisItem)
		.addClass(activeClass)
		.stop()
		.slideDown();
	  $(this).addClass(activeClass);
	}

	return false;
  });

  //FAQ page autocomplete with accordion scroll
  if (typeof faq_items != "undefined") {
	$(".js-faq-autocomplete").autocomplete({
	  lookup: faq_items,
	  lookupFilter: function(suggestion, query, queryLowerCase) {
		var content = suggestion.content.toLowerCase(),
		  value = suggestion.value.toLowerCase();

		return (
		  content.indexOf(queryLowerCase) > -1 ||
		  value.indexOf(queryLowerCase) > -1
		);
	  },
	  onSelect: function(suggestion) {
		//check if sticky header and set correct offset
		if ($(".js-header").hasClass("js-header-sticky")) {
		  scrollOffset = $(".js-header").outerHeight() + 18;
		} else {
		  scrollOffset = 18;
		}

		//scroll
		$("html,body").animate(
		  {
			scrollTop:
			  $(".js-accordion")
				.find("[href='#" + suggestion.data + "']")
				.offset().top - scrollOffset
		  },
		  800
		);

		setTimeout(function() {
		  //open accordion
		  $("#" + suggestion.data)
			.addClass(activeClass)
			.stop()
			.slideDown();
		  $(".js-accordion")
			.find("[href='#" + suggestion.data + "']")
			.addClass(activeClass);
		}, 800);

		$(this).val('');
	  }
	});
	//disable browser autocomplete
	$(".js-faq-autocomplete").disableAutoFill();
  }
};


setTimeout(function(){
    _ql_accordion();  

},1000);

