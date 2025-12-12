(function () {
	window.sizeChartsRelentless = window.sizeChartsRelentless || {};

	if (sizeChartsRelentless.ran) return;
	sizeChartsRelentless.ran = true;

	sizeChartsRelentless.backwardsCompatible = function (data) {
		var metafield = {};
		if (Array.isArray(data)) {
			metafield.charts = data;
		} else if (typeof data === 'object') {
			metafield = data;
		}
		var charts = metafield.charts;
		if (charts === undefined) return metafield; // new shop

		// fix charts bug... don't know where it's coming from
		if (typeof metafield.charts === 'string') {
			delete metafield.charts;
			return metafield;
		}

		for (var i = 0; i < charts.length; i += 1) {
			var oldChart = charts[i].chart;
			if (oldChart) {
				charts[i].title = oldChart.title;
				charts[i].descriptionTop = oldChart.descriptionTop;
				charts[i].values = oldChart.values;
				charts[i].descriptionBottom = oldChart.descriptionBottom;
				charts[i].buttonPlacement = oldChart.buttonPlacement;
				if (charts[i].buttonPlacement) {
					if (charts[i].buttonPlacement === 'above-atc') { charts[i].buttonPlacement === 'above-add-to-cart'; }
					if (charts[i].buttonPlacement === 'below-atc') { charts[i].buttonPlacement === 'below-add-to-cart'; }
				}
				delete charts[i].chart;
			}

			if (!charts[i].conditions) charts[i].conditions = [];
			if (!charts[i].conditionsOperator) charts[i].conditionsOperator = 'products-matching-any-condition-below';

			var oldCollections = charts[i].collections;
			if (oldCollections) {
				for (var j = 0; j < oldCollections.length; j += 1) {
					charts[i].conditions.push({
						type: 'collection',
						operator: 'is equal to',
						id: oldCollections[j].id,
						title: oldCollections[j].title
					});
				}
				delete charts[i].collections;
			}

			var oldProducts = charts[i].products;
			if (oldProducts) {
				for (var j = 0; j < oldProducts.length; j += 1) {
					charts[i].conditions.push({
						type: 'product',
						operator: 'is equal to',
						id: oldProducts[j].id,
						title: oldProducts[j].title
					});
				}
				delete charts[i].products;
			}
		}
		return metafield;
	};

	if (!sizeChartsRelentless.product ||
	!sizeChartsRelentless.productCollections) {
		return;
	}

	// sizeChartsRelentless.charts           is the old array metafield
	// sizeChartsRelentless.metafield.charts is new
	var metafield = sizeChartsRelentless.charts || sizeChartsRelentless.metafield;
	if (!metafield) return;
	metafield = sizeChartsRelentless.backwardsCompatible(metafield);
	if (!metafield.charts) return;

	var sizeChartInstances = [];
	var frame = 0;
	var searching = true;
	var form, addToCarts;
	var manualButtons;
	var $j;
	var atcStr = '#CartButtons-product-template, [data-shopify="payment-button"].shopify-payment-button, .atc-btn-container, [name="add"], .add-to-cart-btn, input#pre-order[type=submit], .add_to_cart, .add-to-cart, .addToCart, [type="submit"], .product-actions-row, .product-form--button-container, button, .tt-btn--cart, .cwsCallforPrice';

	(function render() {
		if (frame === 60) {
			var script = document.createElement('SCRIPT');
			script.type = 'text/javascript';
			script.onload = function() {
				$j = window.jQuery.noConflict();
			};
			script.src = 'https://size-charts-relentless.herokuapp.com/js/jquery-3.3.1.min.js';
			document.getElementsByTagName('head')[0].appendChild(script);
		}
		if (frame % 30 === 0) {
			if (window.$ && $.fn && $.fn.jquery) {
				$j = $;
			} else if (window.jQuery && jQuery.fn && jQuery.fn.jquery) {
				$j = jQuery;
			}

			if ($j) {
				// hide manual buttons
				manualButtons = $j('.scr-open-parent, .best-fit-size-chart');
				manualButtons.hide();

				form = $j();
				addToCarts = $j();

				if (sizeChartsRelentless.manualForm) {
					form = $j(sizeChartsRelentless.manualForm).first();
					addToCarts = form.find(atcStr);
				}

				if (!form.length) {
					var forms = $j('form[action*="/cart/add"]:not(.ssw-product-form):not(#add-item-qv), .product-form.unavailable');
					forms.each(function (i, el) {
						$el = $j(el);
						if (el.className === 'product-form unavailable' ||
						$el.find('[name="id"]').length && $el.is(':visible') && !$el.closest('.globomenu-item, .mega-menu.dropdown, .header-search__product, [data-sticky-add-to-cart], .slick-slide, .owl-item, .kt-stickyAddCart').length) {
							addToCarts = $el.find(atcStr).not('.product__sticky-button, .js-qty__adjust, .qty-minus, .qty-plus, .adjust-minus, .adjust-plus, .ProductForm__Item, [aria-controls="modal-size-chart"], .QuantitySelector__Button');
							if (addToCarts.length === 0) {
								addToCarts = $j('[data-pf-type="ProductATC"]');
							}
							if (addToCarts.length) {
								form = $el;
								return false;
							}
						}
					});
					// if (addToCarts.length === 0) {
					// 	form = forms.first();
					// }
					form = form.first();
				}

				sizeChartsRelentless.form = form;

				addToCarts.each(function () {
					sizeChartsRelentless.addToCart = $j(this);
					if (sizeChartsRelentless.addToCart.is(':visible')) {
						return false;
					}
				});

				if ((sizeChartsRelentless.addToCart && sizeChartsRelentless.addToCart.length) || manualButtons.length) {
					searching = false;

					setupProductPage();
					if (typeof sizeChartsRelentless.done === 'function') {
						sizeChartsRelentless.done(form, sizeChartsRelentless.addToCart);
					}
				} else {
					sizeChartsRelentless.status = 'no addtocart button found';
				}
			}
		}

		frame += 1;

		if (searching) {
			requestAnimationFrame(render);
		}
	}());

	function setupProductPage() {
		// REMOVED $j(function () {     }); FROM HERE
		sizeChartsRelentless.shadow = $j('<div class="scr-shadow"> </div>');
		sizeChartsRelentless.modal = $j(
			'<div class="scr-modal">' +
				'<div class="scr-close"></div>' +
			'</div>'
		);
		$j('body').append(sizeChartsRelentless.shadow);
		$j('body').append(sizeChartsRelentless.modal);

		var foundMatch = matchSizeChart();
		sizeChartsRelentless.foundMatch = foundMatch;

		if (foundMatch) {
			new SizeChart(foundMatch);

			var foundChildren = findChildren(foundMatch);
			sizeChartsRelentless.foundChildren = foundChildren;
			for (var i = 0; i < foundChildren.length; i += 1) {
				new SizeChart(foundChildren[i]);
			}
			sizeChartsRelentless.modal.find('.scr').remove();
			for (var i = 0; i < sizeChartInstances.length; i += 1) {
				sizeChartsRelentless.modal.append(sizeChartInstances[i].element);
			}
			var buttonPlacement = foundMatch.buttonPlacement && foundMatch.buttonPlacement !== 'use-global' ? foundMatch.buttonPlacement : metafield.buttonPlacement;
			addButton(buttonPlacement, metafield.buttonIcon, metafield.buttonText, metafield.buttonSize);
		} else {
			sizeChartsRelentless.status = 'no chart found';
		}

		var opening = false;

		$j('body').on('click touchend', '', function (e) {
			var el = $j(e.target);
			if (el.closest('.scr-modal').length || opening) return;
			closeModal();
		});

		$j('body').on('click touchend', '.scr-close', closeModal);
		$j(window).keyup(function (e) {
			if (e.which === 27) closeModal();
		});

		$j('body').on('click touchend', '.scr-open-size-chart', function () {
			sizeChartsRelentless.shadow.css({opacity: 1, visibility: 'visible'});
			sizeChartsRelentless.modal.css({opacity: 1, visibility: 'visible', transform: 'translate(-50%, 0%) scale(1)'});
			opening = true;
			setTimeout(function () {
				opening = false;
			}, 800);
		});

		// // put last 3 events first
		// if ($j._data) {
		// 	var data = $j._data(document.body);
		// 	if (data && data.events && data.events.click) {
		// 		data.events.click.unshift(data.events.click.pop());
		// 		data.events.click.unshift(data.events.click.pop());
		// 		data.events.click.unshift(data.events.click.pop());
		// 	}
		// }
	}

	function matchSizeChart() {
		var cs = metafield.charts;
		for (var i = 0; i < cs.length; i += 1) {
			if (cs[i].conditionsOperator && cs[i].conditionsOperator === 'all-products') {
				return cs[i];
			} else if (cs[i].conditions && cs[i].conditions.length) {
				for (var j = 0; j < cs[i].conditions.length; j += 1) {
					switch (cs[i].conditions[j].type) {
						case 'collection':
							for (var k = 0; k < sizeChartsRelentless.productCollections.length; k += 1) {
								if (Number(cs[i].conditions[j].id) === sizeChartsRelentless.productCollections[k].id) {
									return cs[i];
								}
							}
						break;
						case 'product':
							if (Number(cs[i].conditions[j].id) === sizeChartsRelentless.product.id) {
								return cs[i];
							}
						break;
						case 'vendor':
							if (cs[i].conditions[j].title === sizeChartsRelentless.product.vendor) {
								return cs[i];
							}
						break;
						case 'tag':
							if (sizeChartsRelentless.product.tags.indexOf(cs[i].conditions[j].title) !== -1) {
								return cs[i];
							}
						break;
					}
				}
			}
		}
		return false;
	}

	function SizeChart(data) {
		sizeChartInstances.push(this);
		this.style = 'basic';
		this.open = false;
		this.element = $j(
			'<div class="scr ' + this.style + '">' +
				'<h2>' + (data.values && data.title ? data.title : '') + '</h2>' +
				(data.descriptionTop ? '<div class="top-description">' + data.descriptionTop + '</div>': '') +
				'<table class="scr-table"></table>' +
				(data.descriptionBottom ? '<div class="bottom-description">' + data.descriptionBottom + '</div>': '') +
			'</div>'
		);

		if (data.values && data.values[0] && data.values[0].length) {
			if (data.values[0].length !== 1 || data.values[0][0] !== '') {
				var values = data.values;

				var text = '';
				for (var i = 0; i < values.length; i += 1) {
					text += values[i].join ? values[i].join('') : '';
				}
				if (!text) return;

				var table = this.element.find('.scr-table');
				for (var i = 0; i < values.length; i += 1) {
					table.append('<tr>');
					for (var j = 0; j < values[i].length; j += 1) {
						table.find('tr:nth-child(' + (i + 1) + ')').append('<td>' + values[i][j] + '</td>');
					}
				}
			}
		}
	}

	function findChildren(foundMatch) {
		var children = [];
		for (var i = 0; i < metafield.charts.length; i += 1) {
			if (metafield.charts[i].parentSizeChart && metafield.charts[i].parentSizeChart === foundMatch.id) {
				children.push(metafield.charts[i]);
			}
		}
		return children;
	}

	function addButton(placement, icon, text, size) {
		icon = icon || 'ruler3';
		text = text || 'Size Chart';
		size = size || '';
		var el;

		// get el
		if (manualButtons.length) {
			el = manualButtons;
			el.show();
		} else {
			el = $j('<div class="best-fit-size-chart"></div>');
		}

		// add button
		el.each(function () {
			if ($j(this).find('button').length === 0) {
				$j(this).append('<!-- Best Fit - Size Charts by Relentless Apps -->\n<!-- https://apps.shopify.com/size-charts-by-relentless -->\n<button type="button" class="scr-open-size-chart ' + icon + ' ' + size + '">' + text + '</button>');
			}
		});

		if (sizeChartsRelentless.addToCart && sizeChartsRelentless.addToCart.length) {
			if (sizeChartsRelentless.addToCart.is(':disabled')) {
				$j('.shopify-payment-button').hide();
			}
		}

		// place auto button
		if (manualButtons.length === 0) {
			if (sizeChartsRelentless.addToCart && sizeChartsRelentless.addToCart.length) {
				sizeChartsRelentless.addToCart.parent().css({flexWrap: 'wrap'});
				if (placement === 'above-add-to-cart') {
					return sizeChartsRelentless.addToCart.before(el);
				} else if (placement === 'below-add-to-cart') {
					return sizeChartsRelentless.addToCart.after(el);
				}
			}
			form.append(el);
		}
	}

	function closeModal() {
		sizeChartsRelentless.shadow.css({opacity: 0, visibility: 'hidden'});
		sizeChartsRelentless.modal.css({opacity: 0, visibility: 'hidden', transform: 'translate(-50%, 0%) scale(0.5)'});
	}
}());

/*
<script src="https://best-fit.ngrok.io/js/size-charts-relentless-dev.js"></script>
<script src="http://localhost:5000/js/size-charts-relentless-dev.js"></script>
*/
