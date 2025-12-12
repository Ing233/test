function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr;}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function ($) {
	var $ = jQuery = $;
	var cc = {
		sections: []
	};
	theme.Shopify = {
		formatMoney: function formatMoney(t, r) {
			function e(t, r) {
				return void 0 === t ? r : t;
			}

			function a(t, r, a, o) {
				if (r = e(r, 2), a = e(a, ","), o = e(o, "."), isNaN(t) || null == t) return 0;
				t = (t / 100).toFixed(r);
				var n = t.split(".");
				return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + a) + (n[1] ? o + n[1] : "");
			}

			"string" == typeof t && (t = t.replace(".", ""));
			var o = "",
				n = /\{\{\s*(\w+)\s*\}\}/,
				i = r || this.money_format;

			switch (i.match(n)[1]) {
				case "amount":
					o = a(t, 2);
					break;

				case "amount_no_decimals":
					o = a(t, 0);
					break;

				case "amount_with_comma_separator":
					o = a(t, 2, ".", ",");
					break;

				case "amount_with_space_separator":
					o = a(t, 2, " ", ",");
					break;

				case "amount_with_period_and_space_separator":
					o = a(t, 2, " ", ".");
					break;

				case "amount_no_decimals_with_comma_separator":
					o = a(t, 0, ".", ",");
					break;

				case "amount_no_decimals_with_space_separator":
					o = a(t, 0, " ", "");
					break;

				case "amount_with_apostrophe_separator":
					o = a(t, 2, "'", ".");
					break;

				case "amount_with_decimal_separator":
					o = a(t, 2, ".", ".");
			}

			return i.replace(n, o);
		},
		formatImage: function formatImage(originalImageUrl, format) {
			return originalImageUrl ? originalImageUrl.replace(/^(.*)\.([^\.]*)$/g, '$1_' + format + '.$2') : '';
		},
		Image: {
			imageSize: function imageSize(t) {
				var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
				return null !== e ? e[1] : null;
			},
			getSizedImageUrl: function getSizedImageUrl(t, e) {
				if (null == e) return t;
				if ("master" == e) return this.removeProtocol(t);
				var o = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

				if (null != o) {
					var i = t.split(o[0]),
						r = o[0];
					return this.removeProtocol(i[0] + "_" + e + r);
				}

				return null;
			},
			removeProtocol: function removeProtocol(t) {
				return t.replace(/http(s)?:/, "");
			}
		}
	};

	var ccComponent = /*#__PURE__*/function () {
		"use strict";

		function ccComponent(name) {
			var cssSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".cc-".concat(name);

			_classCallCheck(this, ccComponent);

			var _this = this;

			this.instances = []; // Initialise any instance of this component within a section

			$(document).on('cc:component:load', function (event, component, target) {
				if (component === name) {
					$(target).find("".concat(cssSelector, ":not(.cc-initialized)")).each(function () {
						_this.init(this);
					});
				}
			}); // Destroy any instance of this component within a section

			$(document).on('cc:component:unload', function (event, component, target) {
				if (component === name) {
					$(target).find(cssSelector).each(function () {
						_this.destroy(this);
					});
				}
			}); // Initialise any instance of this component

			$(cssSelector).each(function () {
				_this.init(this);
			});
		}

		_createClass(ccComponent, [{
			key: "init",
			value: function init(container) {
				$(container).addClass('cc-initialized');
			}
		}, {
			key: "destroy",
			value: function destroy(container) {
				$(container).removeClass('cc-initialized');
			}
		}, {
			key: "registerInstance",
			value: function registerInstance(container, instance) {
				this.instances.push({
					container: container,
					instance: instance
				});
			}
		}, {
			key: "destroyInstance",
			value: function destroyInstance(container) {
				this.instances = this.instances.filter(function (item) {
					if (item.container === container) {
						if (typeof item.instance.destroy === 'function') {
							item.instance.destroy();
						}

						return item.container !== container;
					}
				});
			}
		}]);

		return ccComponent;
	}(); // requires: throttled-scroll, debouncedresize

	theme.Sections = new function () {
		var _ = this;
		_._instances = [];
		_._deferredSectionTargets = [];
		_._sections = [];
		_._deferredLoadViewportExcess = 300; // load defferred sections within this many px of viewport
		_._deferredWatcherRunning = false;
		_.init = function () {
			$(document).on('shopify:section:load', function (e) {
				// load a new section
				var target = _._themeSectionTargetFromShopifySectionTarget(e.target);
				if (target) {
					_.sectionLoad(target);
				}
			}).on('shopify:section:unload', function (e) {
				// unload existing section
				var target = _._themeSectionTargetFromShopifySectionTarget(e.target);
				if (target) {
					_.sectionUnload(target);
				}
			});
			$(window).on('throttled-scroll.themeSectionDeferredLoader debouncedresize.themeSectionDeferredLoader', _._processDeferredSections);
			_._deferredWatcherRunning = true;
		}; // register a type of section
		_.register = function (type, section, options) {
			_._sections.push({
				type: type,
				section: section,
				afterSectionLoadCallback: options ? options.afterLoad : null,
				afterSectionUnloadCallback: options ? options.afterUnload : null
			}); // load now
			$('[data-section-type="' + type + '"]').each(function () {
				if (Shopify.designMode || options && options.deferredLoad === false || !_._deferredWatcherRunning) {
					_.sectionLoad(this);
				} else {
					_.sectionDeferredLoad(this, options);
				}
			});
		}; // prepare a section to load later
		_.sectionDeferredLoad = function (target, options) {
			_._deferredSectionTargets.push({
				target: target,
				deferredLoadViewportExcess: options && options.deferredLoadViewportExcess ? options.deferredLoadViewportExcess : _._deferredLoadViewportExcess
			});

			_._processDeferredSections(true);
		}; // load deferred sections if in/near viewport
		_._processDeferredSections = function (firstRunCheck) {
			if (_._deferredSectionTargets.length) {
				var viewportTop = $(window).scrollTop(),
					viewportBottom = viewportTop + $(window).height(),
					loopStart = firstRunCheck === true ? _._deferredSectionTargets.length - 1 : 0;

				for (var i = loopStart; i < _._deferredSectionTargets.length; i++) {
					var target = _._deferredSectionTargets[i].target,
						viewportExcess = _._deferredSectionTargets[i].deferredLoadViewportExcess,
						sectionTop = $(target).offset().top - viewportExcess,
						doLoad = sectionTop > viewportTop && sectionTop < viewportBottom;

					if (!doLoad) {
						var sectionBottom = sectionTop + $(target).outerHeight() + viewportExcess * 2;
						doLoad = sectionBottom > viewportTop && sectionBottom < viewportBottom;
					}

					if (doLoad || sectionTop < viewportTop && sectionBottom > viewportBottom) {
						// in viewport, load
						_.sectionLoad(target); // remove from deferred queue and resume checks
						_._deferredSectionTargets.splice(i, 1);
						i--;
					}
				}
			} // remove event if no more deferred targets left, if not on first run

			if (firstRunCheck !== true && _._deferredSectionTargets.length === 0) {
				_._deferredWatcherRunning = false;
				$(window).off('.themeSectionDeferredLoader');
			}
		}; // load in a section

		_.sectionLoad = function (target) {
			var target = target,
				sectionObj = _._sectionForTarget(target),
				section = false;
			if (sectionObj.section) {
				section = sectionObj.section;
			} else {
				section = sectionObj;
			}
			if (section !== false) {
				var instance = {
					target: target,
					section: section,
					$shopifySectionContainer: $(target).closest('.shopify-section'),
					thisContext: {
						functions: section.functions,
						registeredEventListeners: []
					}
				};
				instance.thisContext.registerEventListener = _._registerEventListener.bind(instance.thisContext);
				_._instances.push(instance); //Initialise any components
				if ($(target).data('components')) {
					//Init each component
					var components = $(target).data('components').split(',');
					components.forEach(function (component) {
						$(document).trigger('cc:component:load', [component, target]);
					});
				}
				_._callSectionWith(section, 'onSectionLoad', target, instance.thisContext);
				_._callSectionWith(section, 'afterSectionLoadCallback', target, instance.thisContext); // attach additional UI events if defined
				if (section.onSectionSelect) {
					instance.$shopifySectionContainer.on('shopify:section:select', function (e) {
						_._callSectionWith(section, 'onSectionSelect', e.target, instance.thisContext);
					});
				}

				if (section.onSectionDeselect) {
					instance.$shopifySectionContainer.on('shopify:section:deselect', function (e) {
						_._callSectionWith(section, 'onSectionDeselect', e.target, instance.thisContext);
					});
				}

				if (section.onBlockSelect) {
					$(target).on('shopify:block:select', function (e) {
						_._callSectionWith(section, 'onBlockSelect', e.target, instance.thisContext);
					});
				}

				if (section.onBlockDeselect) {
					$(target).on('shopify:block:deselect', function (e) {
						_._callSectionWith(section, 'onBlockDeselect', e.target, instance.thisContext);
					});
				}
			}
		}; // unload a section

		_.sectionUnload = function (target) {
			var sectionObj = _._sectionForTarget(target);
			var instanceIndex = -1;
			for (var i = 0; i < _._instances.length; i++) {
				if (_._instances[i].target == target) {
					instanceIndex = i;
				}
			}
			if (instanceIndex > -1) {
				var instance = _._instances[instanceIndex]; // remove events and call unload, if loaded
				$(target).off('shopify:block:select shopify:block:deselect');
				instance.$shopifySectionContainer.off('shopify:section:select shopify:section:deselect');
				_._callSectionWith(instance.section, 'onSectionUnload', target, instance.thisContext);
				_._unloadRegisteredEventListeners(instance.thisContext.registeredEventListeners);
				_._callSectionWith(sectionObj, 'afterSectionUnloadCallback', target, instance.thisContext);
				_._instances.splice(instanceIndex); //Destroy any components
				if ($(target).data('components')) {
					//Init each component
					var components = $(target).data('components').split(',');
					components.forEach(function (component) {
						$(document).trigger('cc:component:unload', [component, target]);
					});
				}
			} else {
				// check if it was a deferred section
				for (var i = 0; i < _._deferredSectionTargets.length; i++) {
					if (_._deferredSectionTargets[i].target == target) {
						_._deferredSectionTargets[i].splice(i, 1);
						break;
					}
				}
			}
		}; // Helpers

		_._registerEventListener = function (element, eventType, callback) {
			element.addEventListener(eventType, callback);
			this.registeredEventListeners.push({
				element: element,
				eventType: eventType,
				callback: callback
			});
		};

		_._unloadRegisteredEventListeners = function (registeredEventListeners) {
			registeredEventListeners.forEach(function (rel) {
				rel.element.removeEventListener(rel.eventType, rel.callback);
			});
		};

		_._callSectionWith = function (section, method, container, thisContext) {
			if (typeof section[method] === 'function') {
				try {
					if (thisContext) {
						section[method].bind(thisContext)(container);
					} else {
						section[method](container);
					}
				} catch (ex) {
					var sectionType = container.dataset['sectionType'];
					console.warn("Theme warning: '".concat(method, "' failed for section '").concat(sectionType, "'"));
					console.debug(container, ex);
				}
			}
		};

		_._themeSectionTargetFromShopifySectionTarget = function (target) {
			var $target = $('[data-section-type]:first', target);

			if ($target.length > 0) {
				return $target[0];
			} else {
				return false;
			}
		};

		_._sectionForTarget = function (target) {
			var type = $(target).attr('data-section-type');

			for (var i = 0; i < _._sections.length; i++) {
				if (_._sections[i].type == type) {
					return _._sections[i];
				}
			}

			return false;
		};

		_._sectionAlreadyRegistered = function (type) {
			for (var i = 0; i < _._sections.length; i++) {
				if (_._sections[i].type == type) {
					return true;
				}
			}

			return false;
		};
	}(); // Loading third party scripts

	theme.scriptsLoaded = {};
	theme.loadScriptOnce = function (src, callback, beforeRun, sync) {
		if (typeof theme.scriptsLoaded[src] === 'undefined') {
			theme.scriptsLoaded[src] = [];
			var tag = document.createElement('script');
			tag.src = src;
			if (sync || beforeRun) {
				tag.async = false;
			}

			if (beforeRun) {
				beforeRun();
			}

			if (typeof callback === 'function') {
				theme.scriptsLoaded[src].push(callback);
				if (tag.readyState) {
					// IE, incl. IE9
					tag.onreadystatechange = function () {
						if (tag.readyState == "loaded" || tag.readyState == "complete") {
							tag.onreadystatechange = null;
							for (var i = 0; i < theme.scriptsLoaded[this].length; i++) {
								theme.scriptsLoaded[this][i]();
							}
							theme.scriptsLoaded[this] = true;
						}
					}.bind(src);
				} else {
					tag.onload = function () {
						// Other browsers
						for (var i = 0; i < theme.scriptsLoaded[this].length; i++) {
							theme.scriptsLoaded[this][i]();
						}
						theme.scriptsLoaded[this] = true;
					}.bind(src);
				}
			}

			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			return true;
		} else if (_typeof(theme.scriptsLoaded[src]) === 'object' && typeof callback === 'function') {
			theme.scriptsLoaded[src].push(callback);
		} else {
			if (typeof callback === 'function') {
				callback();
			}
			return false;
		}
	};

	theme.loadStyleOnce = function (src) {
		var srcWithoutProtocol = src.replace(/^https?:/, '');
		if (!document.querySelector('link[href="' + encodeURI(srcWithoutProtocol) + '"]')) {
			var tag = document.createElement('link');
			tag.href = srcWithoutProtocol;
			tag.rel = 'stylesheet';
			tag.type = 'text/css';
			var firstTag = document.getElementsByTagName('link')[0];
			firstTag.parentNode.insertBefore(tag, firstTag);
		}
	};

	theme.Disclosure = function () {
		var selectors = {
			disclosureList: '[data-disclosure-list]',
			disclosureToggle: '[data-disclosure-toggle]',
			disclosureInput: '[data-disclosure-input]',
			disclosureOptions: '[data-disclosure-option]'
		};
		var classes = {
			listVisible: 'disclosure-list--visible'
		};

		function Disclosure($disclosure) {
			this.$container = $disclosure;
			this.cache = {};
			this._cacheSelectors();
			this._connectOptions();
			this._connectToggle();
			this._onFocusOut();
		}

		Disclosure.prototype = $.extend({}, Disclosure.prototype, {
			_cacheSelectors: function _cacheSelectors() {
				this.cache = {
					$disclosureList: this.$container.find(selectors.disclosureList),
					$disclosureToggle: this.$container.find(selectors.disclosureToggle),
					$disclosureInput: this.$container.find(selectors.disclosureInput),
					$disclosureOptions: this.$container.find(selectors.disclosureOptions)
				};
			},
			_connectToggle: function _connectToggle() {
				this.cache.$disclosureToggle.on('click', function (evt) {
					var ariaExpanded = $(evt.currentTarget).attr('aria-expanded') === 'true';
					$(evt.currentTarget).attr('aria-expanded', !ariaExpanded);
					this.cache.$disclosureList.toggleClass(classes.listVisible);
				}.bind(this));
			},
			_connectOptions: function _connectOptions() {
				this.cache.$disclosureOptions.on('click', function (evt) {
					evt.preventDefault();

					this._submitForm($(evt.currentTarget).data('value'));
				}.bind(this));
			},
			_onFocusOut: function _onFocusOut() {
				this.cache.$disclosureToggle.on('focusout', function (evt) {
					var disclosureLostFocus = this.$container.has(evt.relatedTarget).length === 0;

					if (disclosureLostFocus) {
						this._hideList();
					}
				}.bind(this));
				this.cache.$disclosureList.on('focusout', function (evt) {
					var childInFocus = $(evt.currentTarget).has(evt.relatedTarget).length > 0;
					var isVisible = this.cache.$disclosureList.hasClass(classes.listVisible);

					if (isVisible && !childInFocus) {
						this._hideList();
					}
				}.bind(this));
				this.$container.on('keyup', function (evt) {
					if (evt.which !== 27) return; // escape
					this._hideList();
					this.cache.$disclosureToggle.focus();
				}.bind(this));
				this.bodyOnClick = function (evt) {
					var isOption = this.$container.has(evt.target).length > 0;
					var isVisible = this.cache.$disclosureList.hasClass(classes.listVisible);
					if (isVisible && !isOption) {
						this._hideList();
					}
				}.bind(this);
				$('body').on('click', this.bodyOnClick);
			},
			_submitForm: function _submitForm(value) {
				this.cache.$disclosureInput.val(value);
				this.$container.parents('form').submit();
			},
			_hideList: function _hideList() {
				this.cache.$disclosureList.removeClass(classes.listVisible);
				this.cache.$disclosureToggle.attr('aria-expanded', false);
			},
			unload: function unload() {
				$('body').off('click', this.bodyOnClick);
				this.cache.$disclosureOptions.off();
				this.cache.$disclosureToggle.off();
				this.cache.$disclosureList.off();
				this.$container.off();
			}
		});
		return Disclosure;
	}(); // Show a short-lived text popup above an element

	theme.showQuickPopup = function (message, $origin) {
		var $popup = $('<div class="simple-popup"/>');
		var offs = $origin.offset();
		$popup.html(message).css({
			'left': offs.left,
			'top': offs.top
		}).hide();
		$('body').append($popup);
		$popup.css({
			marginTop: -$popup.outerHeight() - 10,
			marginLeft: -($popup.outerWidth() - $origin.outerWidth()) / 2
		});
		$popup.fadeIn(200).delay(3500).fadeOut(400, function () {
			$(this).remove();
		});
	}; //v1.0
	$.fn.sort = [].sort; // v1.0
	$.fn.fadeOutAndRemove = function (speed, callback) {
		$(this).fadeOut(speed, function () {
			$(this).remove();
			typeof callback == 'function' && callback();
		});
	}; // Turn a <select> tag into clicky boxes
	// Use with: $('select').clickyBoxes()

	// 邮件联系客服 (ql20240701)
	class ContactUs extends HTMLElement {
		constructor() {
			super();

			this.submitBtn = this.querySelector('form .wide-action input[type="submit"]');    //submit
			this.clickBtn = this.querySelector('form .wide-action input[type="button"]');     //send
			this.select = this.querySelector('.qlselect');                                    //售前售后
			this.ipts = this.querySelectorAll('.input-row input,.input-row textarea');        //邮件内容
			this.dialog = document.querySelector('#ql-contact-us');   //对话框
			if (this.dialog) {
				this.form = this.querySelector('form');
				this.form?.setAttribute('target', 'qlcontacttarget');
			}

			this.clickBtn?.classList.add('button');
			this.clickBtn?.addEventListener('click', this.checkForm.bind(this));

			this.select?.addEventListener('change', this.whetherNeedOrder.bind(this));

			if (this.ipts.length) {
				for (let i = 0; i < this.ipts.length; i++) {
					this.ipts[i].addEventListener('change', this.checkEmpty);
				}
			}
		}

		//判空
		checkEmpty(event) {
			let val = this.value.trim();
			if (val && this.parentNode && this.parentNode.querySelector('.order-tip')) {
				this.parentNode.querySelector('.order-tip').style.display = 'none';
			}
		}

		//订单号是否为必填
		whetherNeedOrder() {
			var index = this.select.selectedIndex;
			if (index != -1) {
				var val = this.select.options[index].value,
					order = this.querySelector('.ql-order');
				if (val == 'after-sale') {
					order && (order.style.display = 'block');
					order?.querySelector('input').classList.add('required');
					order && (order.querySelector('input').value = '');
					order && order.querySelector('.order-tip') && (order.querySelector('.order-tip').style.display = 'none');
				} else {
					order && (order.style.display = 'none');
					order?.querySelector('input').classList.remove('required');
				}
			}
		}

		checkForm(event) {
			var hasEmpty = false;
			this.requiredIpts = this.querySelectorAll('#contact_form input.required, #contact_form textarea.required');   //必选
			for (let i = 0; i < this.requiredIpts.length; i++) {
				let ipt = this.requiredIpts[i];
				let text = ipt.value.trim();
				if (!text) {    //必选未填
					if (!ipt.parentNode.querySelector('.order-tip')) {    //没有提示文本，创建提示文本
						let p = document.createElement('p');
						p.classList.add('order-tip');
						if (ipt.getAttribute('id') == 'contact_order') {
							p.innerText = 'Please fill in the order number';
						} else {
							p.innerText = 'This part is required';
						}
						ipt.parentNode.appendChild(p);
					} else {
						ipt.parentNode.querySelector('.order-tip').style.display = 'block';
					}
					hasEmpty = true;
				} else if (ipt.getAttribute('id') == 'contact_order') {    //检查订单号
					var exp = new RegExp("^[a-zA-Z]+[0-9]*");
					let p = ipt.parentNode.querySelector('.order-tip');
					if (!p) {
						p = document.createElement('p');
						p.classList.add('order-tip');
						ipt.parentNode.appendChild(p);
					}
					if (!exp.exec(text)) {
						// 格式错误
						p.innerText = 'Please fill in the order number';
						p.style.display = 'block';
						hasEmpty = true;
					} else {
						p.style.display = 'none';
					}
				}
			}

			if (hasEmpty) {
				return false;
			}

			$(this.submitBtn).trigger('click');     //发送邮件
			var par = this.dialog.querySelector('.ql_popup-content--show'),
			concaContent = par?.querySelector('.concat-content'),
			pageContact = document.querySelector('#page-content .shopify-section contact-us');
			if(this.dialog && par) {
				
				let tip = document.createElement('div');
				tip.classList.add("rte","align-center");
				tip.innerText = "Thanks for contacting us. We'll get back to you as soon as possible.";
				concaContent.style.display = 'none';
				par.appendChild(tip);
				this.dialog.querySelector('.ql-block__show-content').classList.add('success-send');
				// this.style.display = 'none';
			}else if(pageContact){
				pageContact.style.display = 'none';
				let parent = document.querySelector('#page-content .shopify-section');
				let tip = document.createElement('div');
				tip.classList.add("rte","align-center");
				tip.innerHTML = `<div class="-in" data-cc-animate="" data-cc-animate-delay="0.2s" style="">
				<style>
					.id-qlselect{
						display: block;
						margin: 20px 0;
					}
					p.order-tip {
						display: none;
						text-align: left;
						margin: 0;
						color: red;
					}
				</style>
			  <contact-us>
				<form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form" target="qlcontacttarget"><input type="hidden" name="form_type" value="contact"><input type="hidden" name="utf8" value="✓">
				  
					<div class="rte align-center">
					  Thanks for contacting us. We'll get back to you as soon as possible.
					</div>
				</form>
				<iframe width="0" height="0" frameborder="0" id="qlcontacttarget" name="qlcontacttarget"></iframe>
			  </contact-us>
			  </div>`;
			  parent.appendChild(tip);
			}
		}
	}
	customElements.define('contact-us', ContactUs);

	class TContactUs extends HTMLElement {
		constructor(){
			super();
		}
		connectedCallback(){
			this.url = this.getAttribute('data-url');
			const that = this;
			if(!this.url){
				$(this).empty().append('<div>Undefine!</div>');
			}
			this.url && $.get(this.url, function (response) {
				var $pageDetail = $('<div>' + response + '</div>').find('main#page-content .central contact-us');
				$(that).empty().append($pageDetail);
			}).always(function () {
				// theme.currentPageDialog = false;
			});
		}
	}
	customElements.define('t-contact-us', TContactUs);


	class MenuStretch extends HTMLElement{
		constructor(){
			super();
		}
		connectedCallback(){
			this.allLi = this.querySelectorAll('li.has-children > a');
			this.allLi.forEach(li => {
				li.addEventListener('click', this.toggleStretch.bind(li));
			})
		}

		toggleStretch(){
			event.preventDefault();
			if ($(this).siblings('ul').hasClass('show-child-menu')) {
				$(this).siblings('ul').removeClass('show-child-menu');
				$(this).attr('aria-expanded','false');
				// $(this).find('.arr').removeClass('rotate-180');
			} else {
				// 同级菜单只展开一个
				$(this).parent().siblings().find('.show-child-menu').removeClass('show-child-menu');
				$(this).parent().siblings().find('[aria-expanded]').attr('aria-expanded','false');
				// $(this).parent().siblings().find('.rotate-180').removeClass('rotate-180');

				$(this).siblings('ul').addClass('show-child-menu');
				$(this).attr('aria-expanded','true');
				// $(this).find('.arr').addClass('rotate-180');
			}
			return false;
		}
	}
	customElements.define('menu-stretch', MenuStretch)


	class DiscountCountdown extends HTMLElement {
		constructor() {
			super();

			this.handle = this.getAttribute('data-d-handle');      //货号
			this.endDate = this.getAttribute('data-d-end');        //折扣结束时间
			this.startDate = this.getAttribute('data-d-start');    //折扣开始时间
			this.dType = this.getAttribute('data-d-type');         //折扣类型
			this.dValue = this.getAttribute('data-d-value');       //折扣百分比
			this.dCode = this.getAttribute('data-d-code');         //折扣码
			this.pageUrl = this.getAttribute('data-d-url');        //双平台折扣介绍链接
			// this.mbCountdownBox = document.getElementById('ql_discount-countdown');   //移动端折扣倒计时父盒子
			this.mbTextBox = document.getElementById('ql_discount-text');             //移动端折扣文本父盒子，移动端折扣倒计时父盒子
			// 移动端当前应显示的倒计时和文本
			let mbCountdownHtml = this.mbTextBox?.querySelector(`.ql_mb-discount-countdown-box[data-d-handle="${this.handle}"]`);
			let mbTextHtml = this.mbTextBox?.querySelector(`.ql_mb-discount-text-box[data-d-handle="${this.handle}"]`);

			// 点击复制折扣码
			if (this.querySelector('.ql-copy')) {
				let mbCopyBox = mbTextHtml?.querySelector('.ql-copy');
				this.querySelector('.ql-copy').addEventListener('click', this.getCopyCode);
				mbCopyBox?.addEventListener('click', this.getCopyCode.bind(mbCopyBox));
			}

			// 点击显示折扣提示
			if (mbTextHtml && mbTextHtml.querySelector('.ql-d-tip')) {
				let showTip = mbTextHtml.querySelector('.ql-d-tip');
				showTip.addEventListener('click', () => {
					showTip.classList.add('show-tip');
					setTimeout(() => showTip.classList.remove('show-tip'), 3000);
				})
			}
			if (this.querySelector('.ql-d-tip')) {
				let showTip = this.querySelector('.ql-d-tip');
				showTip.addEventListener('click', () => {
					showTip.classList.add('show-tip');
					setTimeout(() => showTip.classList.remove('show-tip'), 3000);
				})
			}

			// 点击显示折扣提示内容弹窗
			if (this.querySelector('.ql-show-dialog')) {
				this.querySelector('.ql-show-dialog').addEventListener('click', this.showDialog)
			}
			if (mbTextHtml && mbTextHtml.querySelector('.ql-show-dialog')) {
				mbTextHtml.querySelector('.ql-show-dialog').addEventListener('click', this.showDialog)
			}

			// 启动倒计时
			this.getCountDown(this);
			mbCountdownHtml && "undefined" != typeof mbCountdownHtml && this.getCountDown(mbCountdownHtml);
		}

		//生成折扣提示弹窗
		showDialog() {
			if (theme.currentPageDialog) {
				theme.currentPageDialog.abort();
			}
			var url = this.getAttribute('data-link');
			showThemeModal("<div class=\"theme-modal theme-modal--fullscreen -harlf-transparent\" id=\"ql-discount-dialog\" role=\"dialog\" aria-modal=\"true\"/>\n <div class=\"theme-modal__loading\">".concat(theme.icons.loading, "</div>\n                    </div>"), 'contact-us', null);
			theme.currentPageDialog = $.get(url, function (response) {
				var $pageModal = $('#ql-discount-dialog');
				// 将响应的内容插入到quick buy弹窗内
				var $pageDetail = $('<div>' + response + '</div>').find('main#page-content');
				$pageDetail.prepend('<a href="#" data-modal-close class="modal-close">&times;</a>')
				$pageModal.find('.theme-modal__loading').replaceWith($pageDetail); //Load the section etc
				theme.initAnimateOnScroll(); //Init the product template section

			}).always(function () {
				theme.currentPageDialog = false;
			});
		}

		// 启动倒计时
		getCountDown(container) {
			var timestamp = this.endDate;
			if (!timestamp) return false;
			var count = setInterval(function () {
				var nowTime = new Date();
				// var endTime = new Date(timestamp * 1000);
				var endTime = new Date(timestamp * 1000);
				var t = endTime.getTime() - nowTime.getTime();
				var days = Math.floor(t / 1000 / 60 / 60 / 24);
				var hours = Math.floor(t / 1000 / 60 / 60 % 24);
				var mins = Math.floor(t / 1000 / 60 % 60);
				var secs = Math.floor(t / 1000 % 60);

				if (days < 10) {
					days = "0" + days;
				}
				if (hours < 10) {
					hours = "0" + hours;
				}
				if (mins < 10) {
					mins = "0" + mins;
				}
				if (secs < 10) {
					secs = "0" + secs;
				}

				if (t < 0) {
					clearInterval(count);
					container.style.display = 'none';
				}
				if (!container.querySelector('[data-launch-days]')) {
					clearInterval(count);
				}

				if (days >= 0 && days != '00' && container.querySelector('[data-launch-days]')) container.querySelector('[data-launch-days]').innerHTML = days + " : ";
				else if(container.querySelector('[data-launch-days]')) container.querySelector('[data-launch-days]').innerHTML = '';
				if (hours >= 0 && container.querySelector('[data-launch-hours]')) container.querySelector('[data-launch-hours]').innerHTML = hours;
				if (mins >= 0 && container.querySelector('[data-launch-mins]')) container.querySelector('[data-launch-mins]').innerHTML = mins;
				if (secs > 0 && container.querySelector('[data-launch-secs]')) container.querySelector('[data-launch-secs]').innerHTML = secs;


			}, 1000);
		}

		// 复制
		getCopyCode() {
			var value = this.getAttribute('data-value');
			navigator.clipboard.writeText(value);
			this.classList.add('copy');
			setTimeout(() => this.classList.remove('copy'), 3000);
		}
	}
	customElements.define('discount-countdown', DiscountCountdown);


	class OtherShop extends HTMLElement {
		constructor() {
			super();
			this.img = this.querySelector('.country--flag img');
			this.hiddenBox = this.querySelector('.choose_ql_site');
		}

		connectedCallback() {
			this.img?.addEventListener('click', () => {
				var model = document.getElementById('other-shop-modal');
				if (model) {
					model.classList.remove('unreveal');
					model.classList.add('reveal');
					document.body.classList.add('modal-active');
					document.body.setAttribute('data-modal-id', 'other-shop-modal');
				} else {
					var cloneEl = '';
					if (this.hiddenBox) {
						cloneEl = this.hiddenBox.cloneNode(true);
						cloneEl.style.display = 'block';
					}
					var createBox = document.createElement('div');
					createBox.classList.add('theme-modal', 'theme-modal--fullscreen', '-harlf-transparent');
					createBox.setAttribute('id', 'other-shop-modal');
					createBox.setAttribute('role', 'dialog');
					createBox.setAttribute('aria-modal', 'true');
					createBox.appendChild(cloneEl);

					// open
					showThemeModal(createBox, 'other-shop-modal', null);
					theme.initAnimateOnScroll();

				}

				this.jumpTo();
			})
		}

		jumpTo() {
			var jumpEl = document.querySelectorAll('#other-shop-modal #HeaderCountryList .wSelect-option-value'),
				jumpBtn = document.querySelector('#other-shop-modal .ql-btn-set1'),
				selectElImg = document.querySelector('#other-shop-modal .wSelect-selected .country--flag img'),
				selectElName = document.querySelector('#other-shop-modal .wSelect-selected .country--name'),
				hoverEl = document.querySelector('#other-shop-modal .wSelect.wSelect-theme-classic');

			hoverEl && hoverEl.addEventListener('mouseover', () => {
				hoverEl.classList.add('ql-show');
			});

			for (let i = 0; i < jumpEl.length; i++) {
				jumpEl[i].addEventListener('click', function(e) {
					e.preventDefault();
					hoverEl && hoverEl.classList.remove('ql-show');
					let srcEl = this.querySelector('.country--flag img');
					let titleEl = this.querySelector('.country--name');
					let url = this.getAttribute('data-href');
					selectElImg.setAttribute('src', srcEl.getAttribute('src'));
					selectElName.innerText = titleEl.innerText;
					jumpBtn.setAttribute('data-url', url);
				})
			}

			jumpBtn.addEventListener('click', function() {
				let url = this.getAttribute('data-url');
				url && (window.open(url));  //新页签打开
			})
		}
	}
	customElements.define('ql-other-shop', OtherShop);


	class ShopByColor extends HTMLElement {
		constructor() {
			super();
			this.collectionHandle = this.getAttribute('data-handle');
			this.colorName = this.getAttribute('data-color_name');
			this.itemNum = this.getAttribute('data-num');
			this.colorParame = this.getAttribute('data-parame');
			this.btnText = this.getAttribute('data-btn_text');

			this.getData();

		}

		getData() {
			if (!this.collectionHandle) return;
			let str_p = JSON.stringify(this.getParame(this.colorParame + '=' + this.colorName));
			let that = this;
			// 像插件api发送get请求，并将数据渲染到页面上
			jQuery.getJSON(`${usf.settings.searchSvcUrl}/search?q=&apiKey=${usf.settings.siteId}&locale=en&getProductDescription=0&collection=${this.collectionHandle}&facetFilters=${str_p}&skip=0&take=${this.itemNum}`, function (result) {
				let itemCount = that.itemNum;
				for (let i = 0; i < result.data.items.length; i++) {
					if (itemCount <= 0) break;
					let item = result.data.items[i];
					let colorIndex = -1;
					let sizeIndex = 0;
					for (let index in item.options) {
						let option = item.options[index];
						let n = option.name.toLowerCase();
						if (window.color_option_name?.indexOf(n) != -1) {
							colorIndex = option.values.indexOf(that.colorName);
						}

						// 默认尺码
						else if (index == 1) {
							sizeIndex = option.values.indexOf('M') != -1 ? option.values.indexOf('M') : option.values.indexOf('36') != -1 ? option.values.indexOf('36') : 0;
						}
					}

					if (colorIndex != -1) {
						let variantId = '';
						let firstImageIndex = 0;
						let variant = item.variants[0];
						for (let v in item.variants) {
							variant = item.variants[v];
							if (variant.options[0] !== colorIndex) continue;
							if (variantId == '') {
								variantId = variant.id;
								firstImageIndex = variant.imageIndex;
							}
							if (variant.options[1] === sizeIndex) {
								variantId = variant.id;
								firstImageIndex = variant.imageIndex;
								break;
							}
						}

						const n = /\{\{\s*(\w+)\s*\}\}/;
						const compareAtPrice = theme.money_format.replace(n, variant.compareAtPrice);
						const currentPrice = theme.money_format.replace(n, variant.price);

						// 折后价
						var v = that.getMetafield(item, "custom", "discount") && JSON.parse(that.getMetafield(item, "custom", "discount"));
						var tag = v && v.filter((m) => {
							var st = new Date(m.start_time),
								et = new Date(m.end_time),
								n = Date.now();
							return !window.__usfShowOriginalPrice && (n - st.getTime() > 0) && (et.getTime() - n > 0) && m.tag;
						});

						let zk_v = 99999999;
						if (tag.length > 0) {
							let m = tag[0];
							let dc = m.discount_value.trim().replace('%', '') - 0;
							let val = Math.ceil(variant.price * 100 - variant.price * dc) * 0.01;
							zk_v = theme.money_format.replace(n, val.toFixed(2));
						}

						itemCount--;
						$(`<div class="product-block__inner">
								<div class="pc-img image">
									<a href="${window.location.origin}/products/${item.urlName}?variant=${variantId}&default=M" class="image-inner"> 
									<div class="image__first">
										<div class="rimage-outer-wrapper">
											<div class="rimage-wrapper lazyload--placeholder">
												<img class="rimage__image lazyload fade-in" srcset="${firstImageIndex >= 0 && item.images[firstImageIndex]?.url}" data-sizes="auto">
											</div>
										</div>
									</div>
									</a>
							</div>
							<div class="text-area">
								<div class="heading">${item.title}</div>
								<div class="price">
								<span class="was-price">${tag.length > 0 ? currentPrice : (variant.compareAtPrice > variant.price) ? compareAtPrice : ''}</span>
								<span class="current-price">${tag.length > 0 ? zk_v : currentPrice}</span>
								</div>
							</div>
							</div>`).appendTo(that);

					}
				}

				result.data.items.length > 0 && $(that).parent().append(`<div style="width:100%;text-align:center;"><a class="shop-all-btn" href="${window.location.origin}/collections/${that.collectionHandle}?${that.colorParame}=${that.colorName}">${that.btnText}</a></div>`);
			})
		}

		getParame(p) {
			var r = [],
				res = {};
			for (var t = p ? p.split("&") : [], n = 0; n < t.length; n++) {
				var i = t[n].split("=")
					, s = i[1];
				if (void 0 !== s) {
					var a = s.split('_usf_');
					if (a.length > 1)
						for (var o = 0; o < a.length; o++)
							a[o] = decodeURIComponent(a[o].replace(/\+/g, " "));
					else {
						a = decodeURIComponent(s.replace(/\+/g, " "));
					}
					r.push([decodeURIComponent(i[0].replace(/\+/g, " ")), a])
				}
			}

			// 将参数转化成usf请求的标准参数
			for (var e, t = r, n = 0; n < t.length; n++) {
				var i = t[n]
					, s = i[0];
				if (s.startsWith("uff_")) {
					var a = "uff_".length
						, o = s.indexOf("_", a)
						, u = s.substring(a, o);
					u = parseInt(u, 36);
					var l = s.substr(o + 1)
						, c = i[1];
					Array.isArray(c) || (c = [c]),
						res[u] = [l, c],
						e = !0
				} else if (s == 'usf_sort') {
					filterStr = filterStr + '&sort=' + i[1];
				}
			}
			return res;
		}

		getMetafield(e, t, i) {
			var r =
				e.metafields &&
				e.metafields.find((e) => e.namespace === t && e.key === i);
			return r && r.value ? r.value : "";
		}
	}
	customElements.define('shop-by-color', ShopByColor);


	class qlImgList extends HTMLElement {
		constructor() {
			super();
			this.isFixed = this.getAttribute('data-fixed');

			if (this.isFixed == "true") {
				this.getFixed()
			}
		}

		getFixed() {
			let that = this;
			window.addEventListener("resize", function() {
				let navHeight = $('#site-control .site-control__inner').outerHeight();
				$(that).css('top', navHeight + 'px');
				$(that).css('position', 'fixed');
			})

			$(document).on('scroll', function() {
				let scrollY = $(this).scrollTop();
				let navHeight = $('#site-control .site-control__inner').outerHeight();
				if (scrollY > 20) {

					$(that).css('top', navHeight + 'px');
					$(that).css('position', 'fixed');
				} else {
					$(that).css('position', 'relative');
					$(that).css('top', '0px');
				}
			})
		}
	}
	customElements.define('ql-img-list', qlImgList);


	function _ql_create_ootd($parent, handle, $thisOption) {
		if($parent.length == 0) return;
		// 点击出现推荐链接的按钮  ootd
		const _ql_ootd_arr = JSON.parse($parent.find('#_ql_ootd_arr').html());
		if (_ql_ootd_arr && _ql_ootd_arr.length > 0) {
			var has_ootd = false;
			var $ootd_btn = '<button class="shop_this_look">Shop this look</button>'
			for (let i = 0; i < _ql_ootd_arr.length; i++) {
				var obj_temp = _ql_ootd_arr[i];
				if ($thisOption != obj_temp.color || handle != obj_temp.handle) continue;
				$parent.find(`#ootd_show_${i}`).css("opacity", 0).css("visibility", "hidden").css("display", "none");

				var $target_pic = $parent.find('.theme-gallery .theme-images .theme-img[aria-hidden="false"]').eq(obj_temp.img_pos - 1);

				/** ootd展示图 */
				if ($parent.find(`#init_ootd_show>div:eq(${i})>a`).length > 0) {
					has_ootd = true;
					if ($target_pic.find(`#ootd_show_${i}`).length == 0) {
						var ql_ootd_show = `<div id="ootd_show_${i}" class="ql_ootd_show theme-modal theme-modal--small" style="display: none;">
                                    <a class="modal-close" data-modal-close href="#">×</a>
                                    <h3 style="text-align: center;color:#fff">Shop this look</h3>
                                  </div>`
						$(ql_ootd_show).appendTo($target_pic);
						$parent.find(`#init_ootd_show>div:eq(${i})`).clone().appendTo($(`#ootd_show_${i}`));
					}


					/** ootd按钮 */
					if (!$target_pic.find('button.shop_this_look').length) {
						$($ootd_btn).appendTo($target_pic);
					}

					var $this_ootd_btn = $target_pic.find("button.shop_this_look");
					$this_ootd_btn.css("visibility", "visible");
					$this_ootd_btn.attr("data-pos", i);

					// ootd
					$this_ootd_btn.off('click').on('click', function (event) {
						event.stopPropagation()
						event.preventDefault()
						$parent.find(`#ootd_show_${i}`).css("opacity", 1).css("visibility", "visible").css("display", "flex");
						$parent.find(`#ootd_show_${i}>div`).attr("aria-hidden", false);
						$this_ootd_btn.css("visibility", "hidden");
					});
					// 关闭按钮
					$parent.find(`#ootd_show_${i}>a.modal-close`).off('click').on('click', function (event) {
						event.preventDefault();
						event.stopPropagation();
						$this_ootd_btn.css("visibility", "visible");
						$parent.find(`#ootd_show_${i}`).css("opacity", 0).css("visibility", "hidden").css("display", "none");
					});
				}
			}

			if (!has_ootd) {
				$parent.find('button.shop_this_look').css("visibility", "hidden");
				// $this_ootd_btn.remove();
				$parent.find(`.ql_ootd_show`).css("opacity", 0).css("visibility", "hidden").css("display", "none");
			}
		}
	}


	function _ql_create_ootd_2($parent, handle, $thisOption) {
		if($parent.length == 0) return;
		//算媒体图个数
		let len = $parent.find('.theme-gallery .theme-images .theme-img[aria-hidden="false"]').length;
		if (len > 1) $parent.find('.product-area .product-area__media .swiper-container:not(.swiper-container-horizontal) .swiper-wrapper').addClass('g-two-col');
		else $parent.find('.product-area .product-area__media .swiper-container:not(.swiper-container-horizontal) .swiper-wrapper').removeClass('g-two-col');
		
		// 点击出现推荐链接的按钮  ootd
		const _ql_ootd_arr = JSON.parse($parent.find('#_ql_ootd_arr').html());
		if (_ql_ootd_arr && _ql_ootd_arr.length > 0) {
			var has_ootd = false;
			for (let i = 0; i < _ql_ootd_arr.length; i++) {
				var obj_temp = _ql_ootd_arr[i];
				if ($thisOption != obj_temp.color || handle != obj_temp.handle) continue;

				if ($parent && $parent.find(`#init_ootd_show>div:eq(${i})>a`).length > 0) {

					has_ootd = true;

					/** ootd展示图 */
					$parent.find('#ql-recommendation-box').css("display", "flex");
					var $recommendation_link = $parent.find('#ql-recommendation-box #recommendation-link');
					var $ql_ootd_data = $parent.find(`#init_ootd_show>div:eq(${i})`).children().clone();

					// 删除之前的所有子节点
					$recommendation_link.empty();
					$ql_ootd_data.appendTo($recommendation_link);
				}
			}

			if(!has_ootd) {
				$parent.find('#ql-recommendation-box').css("display", "none");
			}
		}

		// 关联产品 DTRY_
		let $second_pic = $parent.find('.theme-gallery .theme-images .theme-img[aria-hidden="false"]').eq(1);
		if($second_pic.find('.has-diff-style .shop_this_look').length == 0 && $(`#has-diff-style .has-diff-style[data-handle="${handle}"] .shop_this_look`).length > 0){
				$parent.find(`#has-diff-style .has-diff-style[data-handle="${handle}"]`)?.clone().appendTo($second_pic);
		}
	}


	$.fn.clickyBoxes = function (prefix) {
		if (prefix == 'destroy') {
			$(this).off('.clickyboxes');
			$(this).next('.clickyboxes').off('.clickyboxes');
		} else {
			return $(this).filter('select:not(.clickybox-replaced)').addClass('clickybox-replaced').each(function () {
				// option name 
				var ql_select_type = this.getAttribute('ql-swatch-type'),
				that = this;

				// option swatches 点击事件
				$(this.parentNode).on('click.clickyboxes', 'a.qlselect', function () {
					if (!$(this).hasClass('active')) {
						var $clicky = $(this).closest('.clickyboxes');
						$(that).val($(this).data('value')).trigger('change');
						$clicky.trigger('change');
					}
					// ootd
					if($(this).attr("data-handle") !== undefined){
						// _ql_create_ootd($(this).parents('#page-content'), $(this).attr("data-handle"), $(this).attr("data-value"));
						_ql_create_ootd_2($(this).parents('#page-content'), $(this).attr("data-handle"), $(this).attr("data-value"));
					}
					return false;
				});


				var $optCont = $(this.parentNode).find('.clickyboxes');
				var $label;
				if ($(this).is('[id]')) {
					$label = $('label[for="' + $(this).attr('id') + '"]');
				} else {
					$label = $(this).siblings('label');
				}
				if ($label.length > 0) {
					$optCont.addClass('options--' + $(this).attr('ql-swatch-type'));
				}

				
				// 移动端快速加购：判断是否显示滚动指引标志
				let p_l = $optCont?.parent().width();
				// let li_l = $optCont?.find('li')?.width() * $optCont?.find('li').length;
				let li_l = 40 * $optCont?.find('li').length;
				if (li_l > p_l) $optCont.addClass('ql_show-scroll-mark');
				else $optCont.removeClass('ql_show-scroll-mark');

				// 颜色推荐模块
				$(this).hide().addClass('replaced').on('change.clickyboxes keyup.clickyboxes', function () {
					//Choose the right option to show
					var val = $(this).val();
					var $this_option = $optCont.find('a').removeClass('active').filter(function () {
						return $(this).attr('data-value') == val;
					}).addClass('active');

					// 顶部选中产品弹窗--颜色swatch
					if ($('#quick-buy-modal').length === 0) {
						$('#ql-selected-variant-info .actios .qlselect').attr('data-value', $('.option--color .active').text()).text($('.option--color .active').text());
					}

					// 颜色推荐模块
					if (window.color_option_name?.indexOf(ql_select_type) != -1 && ql_show_remomend_color.length > 0 && $this_option.parents('.ql-color-group-list').length > 0 && $('#quick-buy-modal').length == 0) {
						var $recommend_el = $this_option.parents('.ql-color-group-list').find('.ql-recommend-color');
						if (ql_show_remomend_color.indexOf($this_option.attr('data-value')) !== -1) {
							var ql_department = $recommend_el.attr('data-department');
							$recommend_el.attr('href', `${window.location.origin}/collections/shop-all?uff_${window.shopall_color}_option:Color=${$this_option.attr('data-value')}${ql_department && window.shopall_sex ? '&uff_'+window.shopall_sex+'_tags='+ ql_department : ''}`);
							$('.ql-recommend-color').addClass('hidden');
							$recommend_el.removeClass('hidden');

							// 清空当前轮播并重新填充数据
							if($('#ql-remomend-color-box .ql-re-body').children().length > 0){
								$('#ql-remomend-color-box .ql-re-body').slick('slickGoTo', 0);
								$('#ql-remomend-color-box .ql-re-body').slick('unslick').off('init'); // 先销毁 Slick
							}
							$('#ql-remomend-color-box .ql-re-body').empty();

							// 像插件api发送get请求，并将数据渲染到页面上
							jQuery.getJSON(`${usf.settings.searchSvcUrl}/search?q=&apiKey=${usf.settings.siteId}&locale=en&getProductDescription=0&collection=shop-all&facetFilters={"${parseInt(window.shopall_color, 36)}":["option:Color",["${$this_option.attr('data-value')}"]] ${ql_department && window.shopall_sex ? ', "'+parseInt(window.shopall_sex,36)+'":["tags",["'+ql_department+'"]]' : ''}}&skip=0&take=10`, function (result) {
								let itemCount = 9;
								for (let i = 0; i < result.data.items.length; i++) {
									if (itemCount <= 0) break;
									let item = result.data.items[i];
									// 不展示当前货号的产品
									if($this_option.attr('data-handle') == item.urlName) continue;
									let colorIndex = -1;
									let sizeIndex1 = -1;
									for (let index in item.options) {
										let option = item.options[index];
										let n = option.name.toLowerCase();
										if (window.color_option_name?.indexOf(n) != -1) {
											colorIndex = option.values.indexOf($this_option.attr('data-value'));
										}

										// 默认尺码
										else if (index == 1) {
											sizeIndex1 = option.values.indexOf('M') != -1 ? option.values.indexOf('M') : option.values.indexOf('36') != -1 ? option.values.indexOf('36') : 0;
										}
									}

									if (colorIndex != -1) {
										let variantId = '';
										let firstImageIndex = 0;
										let variant = item.variants[0];
										for (let v in item.variants) {
											variant = item.variants[v];
											if (variant.options[0] !== colorIndex) continue;
											if (variantId == '') {
												variantId = variant.id;
												firstImageIndex = variant.imageIndex;
											}
											if (variant.options.length > 1 && variant.options[1] === sizeIndex1) {
												variantId = variant.id;
												firstImageIndex = variant.imageIndex;
												break;
											}
										}

										// size variants
										let sizeOptions = '';
										let cartHtml = '';
										if(item.options.length > 1){
											const sizeVariants = item.variants.filter(v => v.options[0] == colorIndex);
											sizeVariants.forEach((v) => {
												sizeOptions += `<option value="${v.id}" data-inventory="${v.available}" data-stock="${v.available == 0 ? 'out' : ''}" ${v.available == 0 ? 'disabled' : ''}>${item.options[1].values[v.options[1]]}</option>`
											});
											cartHtml = `
													<div class="size-option">
														<select name="id" class="form-control">
															<option value="${variantId}" style="color: #E0E0E0;">Select Size</option>
															${sizeOptions}
														</select>
													</div>		
											`
										}else{
											cartHtml = `<input type="hidden" name="id" value="${variantId}">`
										}

										const n = /\{\{\s*(\w+)\s*\}\}/;
										const compareAtPrice = theme.money_format.replace(n, variant.compareAtPrice);
										const currentPrice = theme.money_format.replace(n, variant.price);
										itemCount--;
										$(`<div class="product-block__inner">
												<div class="pc-img image">
													<a href="${window.location.origin}/products/${item.urlName}?variant=${variantId}&default=M" class="image-inner"> 
													<div class="image__first">
														<div class="rimage-outer-wrapper">
															<div class="rimage-wrapper lazyload--placeholder">
																<img class="rimage__image lazyload fade-in" srcset="${item.images[firstImageIndex]?.url}" data-sizes="auto">
															</div>
														</div>
													</div>
													</a>
											</div>
											<div class="text-area">
												<div class="heading">${item.title}</div>
												<div class="price">
												<span class="was-price">${(variant.compareAtPrice > variant.price) ? compareAtPrice : ''}</span>
												<span class="current-price">${currentPrice}</span>
												</div>
											</div>
											<div class="options-area">
												<div class="color-option"><span class="color-group">Color</span>&nbsp;<span class="color-name">${$this_option.attr('data-value')}</span></div>
												<form method="post" action="/cart/add" accept-charset="UTF-8" class="product-purchase-form feedback-add_in_modal" enctype="multipart/form-data">
													<input type="hidden" name="form_type" value="product">
													<input type="hidden" name="utf8" value="✓">
													<input type="hidden" name="quantity" value="1">
													<input type="hidden" name="product-id" value="${item.id}">
													${cartHtml}
													<button class="add-to-card button" type="submit" name="add">
														ADD TO CART
													</button>
												</form>

											</div>
											</div>`).appendTo('#ql-remomend-color-box .ql-re-body');

									}
								}
								$('#ql-remomend-color-box .ql-re-title .qlselect').attr('data-value', $this_option.attr('data-value')).text($this_option.attr('data-value'));
								$('#ql-remomend-color-box .re-color').text($this_option.attr('data-value'));
								$('#ql-remomend-color-box .ql-re-title .ql-link').attr('href', `${window.location.origin}/collections/shop-all?uff_${window.shopall_color}_option:Color=${$this_option.attr('data-value')}${ql_department && window.shopall_sex ? '&uff_'+window.shopall_sex+'_tags='+ ql_department : ''}`);
								$('#ql-remomend-color-box').css('display', '');
								theme.applyAjaxToProductForm($('[data-ajax-add-to-cart="true"]'));

								$('#ql-remomend-color-box .ql-re-body').slick({
									slidesToShow: 3, // 默认显示 3 个产品
									slidesToScroll: 1,
									arrows: true, // 显示左右箭头
									dots: false,
									infinite: false, // 不循环（可根据需求调整）
									prevArrow: '<button type="button" class="slick-prev slick-arrow slick-disabled swiper-button-prev" aria-label="Previous" aria-disabled="true" style=""><svg xmlns="http://www.w3.org/2000/svg" role="img" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle" stroke="#FFFFFF" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#FFFFFF"> <title id="chevronLeftIconTitle">Chevron Left</title> <polyline points="14 18 8 12 14 6 14 6"/> </svg></button>',
									nextArrow: '<button type="button" class="slick-next slick-arrow swiper-button-next" aria-label="Next" style="" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" role="img" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle" stroke="#FFFFFF" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#FFFFFF"> <title id="chevronRightIconTitle">Chevron Right</title> <polyline points="10 6 16 12 10 18 10 18"/> </svg></button>',
									responsive: [
										{
											breakpoint: 768,
											settings: {
											slidesToShow: 2,
											}
										}
									]

								});

							})
						} else {
							$('.ql-recommend-color').addClass('hidden');
							$('#ql-remomend-color-box').css('display', 'none')
						}
					}
				}).trigger('keyup'); //Initial value

			});
		}
	}; // v1.0

	//Find out how wide scrollbars are on this browser
	$.scrollBarWidth = function () {
		var $temp = $('<div/>').css({
			width: 100,
			height: 100,
			overflow: 'scroll',
			position: 'absolute',
			top: -9999
		}).prependTo('body');
		var w = $temp[0].offsetWidth - $temp[0].clientWidth;
		$temp.remove();
		return w;
	}; //Restyle all select dropdowns


	//NOTE: Only for us on showcase until this can be replaced with jquery.selectreplace.v1.0.js
	var chevronDownIcon = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><path d="M0-.75h24v24H0z" fill="none"/></svg>';
	$.fn.selectReplace = function (leaveLabel) {
		return $(this).filter('select:not(.replaced, .noreplace)').each(function () {
			//Add formatting containers
			var $opts = $(this).find('option');
			var initialText = $opts.filter(':selected').length > 0 ? $opts.filter(':selected').text() : $opts.first().text();
			var $cont = $(this).addClass('replaced').wrap('<div class="pretty-select">').parent().addClass('id-' + $(this).attr('id')).append('<span class="text"><span class="value">' + initialText + '</span></span>' + chevronDownIcon); //Label? Move inside

			if ($(this).attr('id')) {
				//Find label
				var $label = $('label[for="' + $(this).attr('id') + '"]'); //If table cells used for layout, do not move the label

				var $selectTD = $(this).closest('td');
				var $labelTD = $label.closest('td');

				if (!leaveLabel && ($selectTD.length == 0 || $labelTD.length == 0 || $selectTD[0] == $labelTD[0])) {
					//Add to dropdown
					var $labelSpan = $('<span class="label">').html($label.html()).prependTo($cont.find('.text')); //Add colon, if it doesn't exist

					if ($labelSpan.slice(-1) != ':') {
						$labelSpan.append(':');
					} // remove label element and use aria


					$cont.find('select').attr('aria-label', $label.text());
					$label.remove();
				}
			}
		}).on('change keyup', function () {
			$(this).siblings('.text').find('.value').html($(this).find(':selected').html());
		});
	};

	$.fn.ccHoverLine = function (opts) {
		$(this).each(function () {
			var $this = $(this);

			if (!$this.hasClass('cc-init')) {
				var updateLine = function updateLine() {
					var $link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $this.find('li a[aria-selected="true"], li a.active');

					if ($link.length === 1) {
						$hoverLine.css({
							width: $link.width(),
							top: $link.position().top + $link.outerHeight(),
							left: $link.position().left
						});
					}
				};

				$this.addClass('cc-init');
				var $hoverLine = $(this).find(".cc-hover-line");

				if (opts && opts.lineCss) {
					$hoverLine.css(opts.lineCss);
				}

				updateLine();

				if ($(window).outerWidth() < 768) {
					$(this).find("li").click(function () {
						var $link = $(this).find('a');

						if ($link.length === 1) {
							updateLine($link);
						}
					});
				} else {
					$(this).find("li").hover(function () {
						var $link = $(this).find('a');

						if ($link.length === 1) {
							updateLine($link);
						}
					}, function () {
						updateLine();
					});
				}

				$(window).on('debouncedresizewidth', function () {
					updateLine();
				});
			}
		});
	};

	(function () {
		function throttle(callback, threshold) {
			var debounceTimeoutId = -1;
			var tick = false;
			return function () {
				clearTimeout(debounceTimeoutId);
				debounceTimeoutId = setTimeout(callback, threshold);

				if (!tick) {
					callback.call();
					tick = true;
					setTimeout(function () {
						tick = false;
					}, threshold);
				}
			};
		}

		function debounce(fn, delay){
			let timer;
			return function(){
				clearTimeout(timer);
				timer = setTimeout(() => {
					fn.apply(this, arguments);
				}, delay);
			};
		}

		var scrollEvent = document.createEvent('Event');
		scrollEvent.initEvent('throttled-scroll', true, true);
		window.addEventListener("scroll", throttle(function () {
			window.dispatchEvent(scrollEvent);
		}, 200));


		var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop,
		headerEl = document.getElementById('site-control'),
		productEl = document.querySelector('#page-content .product-area');
		var productElHeight = productEl?.getBoundingClientRect().height ?? 9999999;
		window.addEventListener("scroll", throttle(function () {

			//详情页移动端，向上滚显示/向下滚隐藏 搜索栏
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			let headerElHeight = headerEl.getBoundingClientRect().height;
			if(scrollTop < lastScrollTop){
				!headerEl.classList.contains('search-show') && headerEl.classList.add('search-show');
			}else{
				headerEl.classList.remove('search-show');
			}
			
			//顶部快速加购栏
			let quickbuySiteEl = document.querySelector('#ql-selected-variant-info.site-control');
			quickbuySiteEl && (quickbuySiteEl.style.top = headerElHeight + 'px');
			if(quickbuySiteEl && scrollTop >= productElHeight){
				quickbuySiteEl.style.height = 'auto';
			}else if(quickbuySiteEl){
				quickbuySiteEl.style.height = '0px';
			}

			lastScrollTop = scrollTop;

		}, 100));
	})();

	theme.cartNoteMonitor = {
		load: function load($notes) {
			$notes.on('change.themeCartNoteMonitor paste.themeCartNoteMonitor keyup.themeCartNoteMonitor', function () {
				theme.cartNoteMonitor.postUpdate($(this).val());
			});
		},
		unload: function unload($notes) {
			$notes.off('.themeCartNoteMonitor');
		},
		updateThrottleTimeoutId: -1,
		updateThrottleInterval: 500,
		postUpdate: function postUpdate(val) {
			clearTimeout(theme.cartNoteMonitor.updateThrottleTimeoutId);
			theme.cartNoteMonitor.updateThrottleTimeoutId = setTimeout(function () {
				$.post(theme.routes.cart_url + '/update.js', {
					note: val
				}, function (data) { }, 'json');
			}, theme.cartNoteMonitor.updateThrottleInterval);
		}
	};
	// Source: https://davidwalsh.name/javascript-debounce-function
	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.


	theme.debounce = function (func) {
		var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;
		var immediate = arguments.length > 2 ? arguments[2] : undefined;
		var timeout;
		return function () {
			var context = this,
				args = arguments;
			var later = function later() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};


	new ( /*#__PURE__*/function (_ccComponent) {
		"use strict";

		_inherits(_class, _ccComponent);

		var _super = _createSuper(_class);

		function _class() {
			_classCallCheck(this, _class);
			return _super.apply(this, arguments);
		}

		_createClass(_class, [{
			key: "init",
			value: function init(container) {
				_get(_getPrototypeOf(_class.prototype), "init", this).call(this, container);

				var $container = $(container); //Emit's an event to indicate a tab is being changed. Also includes the difference in height
				//between the closing and opening tab

				function dispatchTabChangedEvent() {
					var event = new CustomEvent("cc-tab-changed");
					window.dispatchEvent(event);
				}

				$container.on('click', '[data-cc-toggle-panel]', function () {
					var $tabs = $(this).closest('.cc-tabs');
					var tabIndexToShow = $(this).data('cc-toggle-panel');
					var $tabToClose = $tabs.find('.cc-tabs__tab__panel:visible');
					var $tabToOpen = $tabs.find(".cc-tabs__tab .cc-tabs__tab__panel[aria-labelledby=\"product-tab-panel".concat(tabIndexToShow, "\"]"));
					var openAllTabs = $(this).closest('.cc-tabs[data-cc-tab-allow-multi-open="true"]').length;

					if ($tabs.hasClass('cc-tabs--tab-mode')) {
						$tabToClose.attr('hidden', '');
						$tabToOpen.removeAttr('hidden');
						$tabs.find('[role="tab"] [aria-selected="true"]').removeAttr('aria-selected');
						$tabs.find("[data-cc-toggle-panel=\"".concat(tabIndexToShow, "\"]")).attr('aria-selected', 'true');
					} else {
						var accordionSpeed = 300;

						if (!openAllTabs) {
							var tabNeedsClosing = $tabToClose.length;
							var tabNeedsOpening = $tabToOpen.attr('id') !== $tabToClose.attr('id') && $tabToOpen.length;
						} else {
							if ($tabToOpen.is(':visible')) {
								var tabNeedsClosing = true;
								var tabNeedsOpening = false;
								$tabToClose = $tabToOpen;
							} else {
								var tabNeedsClosing = false;
								var tabNeedsOpening = true;
							}
						} // On mobile, all accordions can be open at once


						if ($(window).outerWidth() < 768) {
							if ($tabToOpen.is(':visible')) {
								tabNeedsClosing = true;
								tabNeedsOpening = false;
								$tabToClose = $tabToOpen;
							} else {
								tabNeedsClosing = false;
							}
						}

						if (tabNeedsClosing) {
							$tabToClose.slideUp(accordionSpeed, function () {
								$(this).attr('hidden', '');

								if (!tabNeedsOpening) {
									dispatchTabChangedEvent();
								}
							});
							$tabToClose.prev().removeAttr('aria-selected');
						}

						if (tabNeedsOpening) {
							$tabToOpen.css('display', 'none').removeAttr('hidden').slideDown(accordionSpeed, dispatchTabChangedEvent);
							$tabToOpen.prev().attr('aria-selected', 'true');
						}
					}

					return false;
				});

				if ($container.hasClass('cc-tabs--tab-mode')) {
					$container.find('.cc-tabs__tab-headers').ccHoverLine();
				}
			}
		}, {
			key: "destroy",
			value: function destroy(container) {
				_get(_getPrototypeOf(_class.prototype), "destroy", this).call(this, container);

				$(container).off('click', '[data-cc-toggle-panel]');
			}
		}]);

		return _class;
	}(ccComponent))('tabs');


	(function () {
		theme.initAnimateOnScroll = function () {
			if (document.body.classList.contains('cc-animate-enabled') && window.innerWidth >= 768) {
				var animationTimeout = typeof document.body.dataset.ccAnimateTimeout !== "undefined" ? document.body.dataset.ccAnimateTimeout : 200;

				if ('IntersectionObserver' in window) {
					var intersectionObserver = new IntersectionObserver(function (entries, observer) {
						entries.forEach(function (entry) {
							// In view and hasn't been animated yet
							if (entry.isIntersecting && !entry.target.classList.contains("cc-animate-complete")) {
								setTimeout(function () {
									entry.target.classList.add("-in", "cc-animate-complete");
								}, animationTimeout);
								setTimeout(function () {
									//Once the animation is complete (assume 5 seconds), remove the animate attribute to remove all css
									entry.target.classList.remove("data-cc-animate");
									entry.target.style.transitionDuration = null;
									entry.target.style.transitionDelay = null;
								}, 3000); // Remove observer after animation

								observer.unobserve(entry.target);
							}
						});
					});
					document.querySelectorAll('[data-cc-animate]:not(.cc-animate-init)').forEach(function (elem) {
						//Set the animation delay
						if (elem.dataset.ccAnimateDelay) {
							elem.style.transitionDelay = elem.dataset.ccAnimateDelay;
						} //Set the animation duration


						if (elem.dataset.ccAnimateDuration) {
							elem.style.transitionDuration = elem.dataset.ccAnimateDuration;
						} //Init the animation


						if (elem.dataset.ccAnimate) {
							elem.classList.add(elem.dataset.ccAnimate);
						}

						elem.classList.add("cc-animate-init"); //Watch for elem

						intersectionObserver.observe(elem);
					});
				} else {
					//Fallback, load all the animations now
					var elems = document.querySelectorAll('[data-cc-animate]:not(.cc-animate-init)');

					for (var _i = 0; _i < elems.length; _i++) {
						elems[_i].classList.add("-in", "cc-animate-complete");
					}
				}
			}
		};


		theme.initAnimateOnScroll();
		document.addEventListener('shopify:section:load', function () {
			setTimeout(theme.initAnimateOnScroll, 100);
		}); //Reload animations when changing from mobile to desktop


		try {
			window.matchMedia('(min-width: 768px)').addEventListener('change', function (event) {
				if (event.matches) {
					setTimeout(theme.initAnimateOnScroll, 100);
				}
			});
		} catch (e) { }
	})();

	var ccPopup = /*#__PURE__*/function () {
		"use strict";

		function ccPopup($container, namespace) {
			_classCallCheck(this, ccPopup);

			this.$container = $container;
			this.namespace = namespace;
			this.cssClasses = {
				visible: 'cc-popup--visible',
				bodyNoScroll: 'cc-popup-no-scroll',
				bodyNoScrollPadRight: 'cc-popup-no-scroll-pad-right'
			};
		}


		/**
		 * Open popup on timer / local storage - move focus to input ensure you can tab to submit and close
		 * Add the cc-popup--visible class
		 * Update aria to visible
		 */
		_createClass(ccPopup, [{
			key: "open",
			value: function open(callback) {
				var _this2 = this;

				// Prevent the body from scrolling
				if (this.$container.data('freeze-scroll')) {
					$('body').addClass(this.cssClasses.bodyNoScroll); // Add any padding necessary to the body to compensate for the scrollbar that just disappeared

					var scrollDiv = document.createElement('div');
					scrollDiv.className = 'popup-scrollbar-measure';
					document.body.appendChild(scrollDiv);
					var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
					document.body.removeChild(scrollDiv);

					if (scrollbarWidth > 0) {
						$('body').css('padding-right', scrollbarWidth + 'px').addClass(this.cssClasses.bodyNoScrollPadRight);
					}
				} // Add reveal class

				this.$container.addClass(this.cssClasses.visible); // Track previously focused element
				this.$container.closest('#shopify-section-popup').addClass('section-popup--visible');

				this.previouslyActiveElement = document.activeElement; // Focus on the close button after the animation in has completed

				setTimeout(function () {
					_this2.$container.find('.cc-popup-close')[0]?.focus();
				}, 500); // Pressing escape closes the modal

				$(window).on('keydown' + this.namespace, function (event) {
					if (event.keyCode === 27) {
						_this2.close();
					}
				});

				if (callback) {
					callback();
				}
			}
		}, {
			key: "close",

			/**
			 * Close popup on click of close button or background - where does the focus go back to?
			 * Remove the cc-popup--visible class
			 */
			value: function close(callback) {
				var _this3 = this;

				// Remove reveal class
				this.$container.removeClass(this.cssClasses.visible); // Revert focus
				this.$container.closest('#shopify-section-popup').removeClass('section-popup--visible');

				if (this.previouslyActiveElement) {
					$(this.previouslyActiveElement).focus();
				} // Destroy the escape event listener


				$(window).off('keydown' + this.namespace); // Allow the body to scroll and remove any scrollbar-compensating padding

				if (this.$container.data('freeze-scroll')) {
					var transitionDuration = 500;
					var $innerModal = this.$container.find('.cc-popup-modal');

					if ($innerModal.length) {
						transitionDuration = parseFloat(getComputedStyle($innerModal[0])['transitionDuration']);

						if (transitionDuration && transitionDuration > 0) {
							transitionDuration *= 1000;
						}
					}

					setTimeout(function () {
						$('body').removeClass(_this3.cssClasses.bodyNoScroll).removeClass(_this3.cssClasses.bodyNoScrollPadRight).css('padding-right', '0');
					}, transitionDuration);
				}

				if (callback) {
					callback();
				}
			}
		}]);

		return ccPopup;
	}();



	var PriceRangeInstance = /*#__PURE__*/function () {
		"use strict";

		function PriceRangeInstance(container) {
			var _this4 = this;

			_classCallCheck(this, PriceRangeInstance);

			this.container = container;
			this.selectors = {
				inputMin: '.cc-price-range__input--min',
				inputMax: '.cc-price-range__input--max',
				control: '.cc-price-range__control',
				controlMin: '.cc-price-range__control--min',
				controlMax: '.cc-price-range__control--max',
				bar: '.cc-price-range__bar',
				activeBar: '.cc-price-range__bar-active'
			};
			this.controls = {
				min: {
					barControl: container.querySelector(this.selectors.controlMin),
					input: container.querySelector(this.selectors.inputMin)
				},
				max: {
					barControl: container.querySelector(this.selectors.controlMax),
					input: container.querySelector(this.selectors.inputMax)
				}
			};
			this.controls.min.value = parseInt(this.controls.min.input.value === '' ? this.controls.min.input.placeholder : this.controls.min.input.value);
			this.controls.max.value = parseInt(this.controls.max.input.value === '' ? this.controls.max.input.placeholder : this.controls.max.input.value);
			this.valueMin = this.controls.min.input.min;
			this.valueMax = this.controls.min.input.max;
			this.valueRange = this.valueMax - this.valueMin;
			[this.controls.min, this.controls.max].forEach(function (item) {
				item.barControl.setAttribute('aria-valuemin', _this4.valueMin);
				item.barControl.setAttribute('aria-valuemax', _this4.valueMax);
				item.barControl.setAttribute('tabindex', 0);
			});
			this.controls.min.barControl.setAttribute('aria-valuenow', this.controls.min.value);
			this.controls.max.barControl.setAttribute('aria-valuenow', this.controls.max.value);
			this.bar = container.querySelector(this.selectors.bar);
			this.activeBar = container.querySelector(this.selectors.activeBar);
			this.inDrag = false;
			this.bindEvents();
			this.render();
		}

		_createClass(PriceRangeInstance, [{
			key: "getPxToValueRatio",
			value: function getPxToValueRatio() {
				return this.bar.clientWidth / (this.valueMax - this.valueMin);
			}
		}, {
			key: "getPcToValueRatio",
			value: function getPcToValueRatio() {
				return 100.0 / (this.valueMax - this.valueMin);
			}
		}, {
			key: "setActiveControlValue",
			value: function setActiveControlValue(value) {
				// only accept valid numbers
				if (isNaN(parseInt(value))) return; // clamp & default

				if (this.activeControl === this.controls.min) {
					if (value === '') {
						value = this.valueMin;
					}

					value = Math.max(this.valueMin, value);
					value = Math.min(value, this.controls.max.value);
				} else {
					if (value === '') {
						value = this.valueMax;
					}

					value = Math.min(this.valueMax, value);
					value = Math.max(value, this.controls.min.value);
				} // round


				this.activeControl.value = Math.round(value); // update input

				if (this.activeControl.input.value != this.activeControl.value) {
					if (this.activeControl.value == this.activeControl.input.placeholder) {
						this.activeControl.input.value = '';
					} else {
						this.activeControl.input.value = this.activeControl.value;
					}

					this.activeControl.input.dispatchEvent(new CustomEvent('change', {
						bubbles: true,
						cancelable: false,
						detail: {
							sender: 'theme:component:price_range'
						}
					}));
				} // a11y


				this.activeControl.barControl.setAttribute('aria-valuenow', this.activeControl.value);
			}
		}, {
			key: "render",
			value: function render() {
				this.drawControl(this.controls.min);
				this.drawControl(this.controls.max);
				this.drawActiveBar();
			}
		}, {
			key: "drawControl",
			value: function drawControl(control) {
				control.barControl.style.left = (control.value - this.valueMin) * this.getPcToValueRatio() + '%';
			}
		}, {
			key: "drawActiveBar",
			value: function drawActiveBar() {
				this.activeBar.style.left = (this.controls.min.value - this.valueMin) * this.getPcToValueRatio() + '%';
				this.activeBar.style.right = (this.valueMax - this.controls.max.value) * this.getPcToValueRatio() + '%';
			}
		}, {
			key: "handleControlTouchStart",
			value: function handleControlTouchStart(e) {
				e.preventDefault();
				this.startDrag(e.target, e.touches[0].clientX);
				this.boundControlTouchMoveEvent = this.handleControlTouchMove.bind(this);
				this.boundControlTouchEndEvent = this.handleControlTouchEnd.bind(this);
				window.addEventListener('touchmove', this.boundControlTouchMoveEvent);
				window.addEventListener('touchend', this.boundControlTouchEndEvent);
			}
		}, {
			key: "handleControlTouchMove",
			value: function handleControlTouchMove(e) {
				this.moveDrag(e.touches[0].clientX);
			}
		}, {
			key: "handleControlTouchEnd",
			value: function handleControlTouchEnd(e) {
				e.preventDefault();
				window.removeEventListener('touchmove', this.boundControlTouchMoveEvent);
				window.removeEventListener('touchend', this.boundControlTouchEndEvent);
				this.stopDrag();
			}
		}, {
			key: "handleControlMouseDown",
			value: function handleControlMouseDown(e) {
				e.preventDefault();
				this.startDrag(e.target, e.clientX);
				this.boundControlMouseMoveEvent = this.handleControlMouseMove.bind(this);
				this.boundControlMouseUpEvent = this.handleControlMouseUp.bind(this);
				window.addEventListener('mousemove', this.boundControlMouseMoveEvent);
				window.addEventListener('mouseup', this.boundControlMouseUpEvent);
			}
		}, {
			key: "handleControlMouseMove",
			value: function handleControlMouseMove(e) {
				this.moveDrag(e.clientX);
			}
		}, {
			key: "handleControlMouseUp",
			value: function handleControlMouseUp(e) {
				e.preventDefault();
				window.removeEventListener('mousemove', this.boundControlMouseMoveEvent);
				window.removeEventListener('mouseup', this.boundControlMouseUpEvent);
				this.stopDrag();
			}
		}, {
			key: "startDrag",
			value: function startDrag(target, startX) {
				if (this.controls.min.barControl === target) {
					this.activeControl = this.controls.min;
				} else {
					this.activeControl = this.controls.max;
				}

				this.dragStartX = startX;
				this.dragStartValue = this.activeControl.value;
				this.inDrag = true;
			}
		}, {
			key: "moveDrag",
			value: function moveDrag(moveX) {
				if (this.inDrag) {
					var value = this.dragStartValue + (moveX - this.dragStartX) / this.getPxToValueRatio();
					this.setActiveControlValue(value);
					this.render();
				}
			}
		}, {
			key: "stopDrag",
			value: function stopDrag() {
				this.inDrag = false;
			}
		}, {
			key: "handleControlKeyDown",
			value: function handleControlKeyDown(e) {
				if (e.key === 'ArrowRight') {
					this.incrementControlFromKeypress(e.target, 10.0);
				} else if (e.key === 'ArrowLeft') {
					this.incrementControlFromKeypress(e.target, -10.0);
				}
			}
		}, {
			key: "incrementControlFromKeypress",
			value: function incrementControlFromKeypress(control, pxAmount) {
				if (this.controls.min.barControl === control) {
					this.activeControl = this.controls.min;
				} else {
					this.activeControl = this.controls.max;
				}

				this.setActiveControlValue(this.activeControl.value + pxAmount / this.getPxToValueRatio());
				this.render();
			}
		}, {
			key: "handleInputChange",
			value: function handleInputChange(e) {
				// strip out non numeric values
				e.target.value = e.target.value.replace(/\D/g, '');

				if (!e.detail || e.detail.sender != 'theme:component:price_range') {
					if (this.controls.min.input === e.target) {
						this.activeControl = this.controls.min;
					} else {
						this.activeControl = this.controls.max;
					}

					this.setActiveControlValue(e.target.value);
					this.render();
				}
			}
		}, {
			key: "handleInputKeyup",
			value: function handleInputKeyup(e) {
				// enforce numeric chars in the input
				setTimeout(function () {
					this.value = this.value.replace(/\D/g, '');
				}.bind(e.target), 10);
			}
		}, {
			key: "bindEvents",
			value: function bindEvents() {
				var _this5 = this;

				[this.controls.min, this.controls.max].forEach(function (item) {
					item.barControl.addEventListener('touchstart', _this5.handleControlTouchStart.bind(_this5));
					item.barControl.addEventListener('mousedown', _this5.handleControlMouseDown.bind(_this5));
					item.barControl.addEventListener('keydown', _this5.handleControlKeyDown.bind(_this5));
					item.input.addEventListener('change', _this5.handleInputChange.bind(_this5));
					item.input.addEventListener('keyup', _this5.handleInputKeyup.bind(_this5));
				});
			}
		}, {
			key: "destroy",
			value: function destroy() { }
		}]);

		return PriceRangeInstance;
	}();

	var PriceRange = /*#__PURE__*/function (_ccComponent2) {
		"use strict";

		_inherits(PriceRange, _ccComponent2);

		var _super2 = _createSuper(PriceRange);

		function PriceRange() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'price-range';
			var cssSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".cc-".concat(name);

			_classCallCheck(this, PriceRange);

			return _super2.call(this, name, cssSelector);
		}

		_createClass(PriceRange, [{
			key: "init",
			value: function init(container) {
				_get(_getPrototypeOf(PriceRange.prototype), "init", this).call(this, container);

				this.registerInstance(container, new PriceRangeInstance(container));
			}
		}, {
			key: "destroy",
			value: function destroy(container) {
				this.destroyInstance(container);

				_get(_getPrototypeOf(PriceRange.prototype), "destroy", this).call(this, container);
			}
		}]);

		return PriceRange;
	}(ccComponent);

	new PriceRange();

	var AccordionInstance = /*#__PURE__*/function () {
		"use strict";

		function AccordionInstance(container) {
			_classCallCheck(this, AccordionInstance);

			this.accordion = container;
			this.itemClass = '.cc-accordion-item';
			this.titleClass = '.cc-accordion-item__title';
			this.panelClass = '.cc-accordion-item__panel';
			this.allowMultiOpen = this.accordion.dataset.allowMultiOpen === 'true'; // If multiple open items not allowed, set open item as active (if there is one)

			if (!this.allowMultiOpen) {
				this.activeItem = this.accordion.querySelector("".concat(this.itemClass, "[open]"));
			}

			this.bindEvents();
		}
		/**
		 * Adds inline 'height' style to a panel, to trigger open transition
		 * @param {HTMLDivElement} panel - The accordion item content panel
		 */


		_createClass(AccordionInstance, [{
			key: "open",

			/**
			 * Opens an accordion item
			 * @param {HTMLDetailsElement} item - The accordion item
			 * @param {HTMLDivElement} panel - The accordion item content panel
			 */
			value: function open(item, panel) {
				panel.style.height = '0'; // Set item to open. Blocking the default click action and opening it this way prevents a
				// slight delay which causes the panel height to be set to '0' (because item's not open yet)

				item.open = true;
				AccordionInstance.addPanelHeight(panel); // Slight delay required before starting transitions

				setTimeout(function () {
					item.classList.add('is-open');
				}, 10);

				if (!this.allowMultiOpen) {
					// If there's an active item and it's not the opened item, close it
					if (this.activeItem && this.activeItem !== item) {
						var activePanel = this.activeItem.querySelector(this.panelClass);
						this.close(this.activeItem, activePanel);
					}

					this.activeItem = item;
				}
			}
			/**
			 * Closes an accordion item
			 * @param {HTMLDetailsElement} item - The accordion item
			 * @param {HTMLDivElement} panel - The accordion item content panel
			 */

		}, {
			key: "close",
			value: function close(item, panel) {
				AccordionInstance.addPanelHeight(panel);
				item.classList.remove('is-open');
				item.classList.add('is-closing');

				if (this.activeItem === item) {
					this.activeItem = null;
				} // Slight delay required to allow scroll height to be applied before changing to '0'


				setTimeout(function () {
					panel.style.height = '0';
				}, 10);
			}
			/**
			 * Handles 'click' event on the accordion
			 * @param {Object} e - The event object
			 */

		}, {
			key: "handleClick",
			value: function handleClick(e) {
				// Ignore clicks not on a toggle (<summary> element)
				if (!e.target.matches(this.titleClass)) return; // Prevent the default action
				// We'll trigger it manually after open transition initiated or close transition complete

				e.preventDefault();
				var item = e.target.parentNode;
				var panel = e.target.nextElementSibling;

				if (item.open) {
					this.close(item, panel);
				} else {
					this.open(item, panel);
				}
			}
			/**
			 * Handles 'transitionend' event in the accordion
			 * @param {Object} e - The event object
			 */

		}, {
			key: "handleTransition",
			value: function handleTransition(e) {
				// Ignore transitions not on a panel element
				if (!e.target.matches(this.panelClass)) return;
				var panel = e.target;
				var item = panel.parentNode;

				if (item.classList.contains('is-closing')) {
					item.classList.remove('is-closing');
					item.open = false;
				}

				AccordionInstance.removePanelHeight(panel);
			}
		}, {
			key: "bindEvents",
			value: function bindEvents() {
				// Need to assign the function calls to variables because bind creates a new function,
				// which means the event listeners can't be removed in the usual way
				this.clickHandler = this.handleClick.bind(this);
				this.transitionHandler = this.handleTransition.bind(this);
				this.accordion.addEventListener('click', this.clickHandler);
				this.accordion.addEventListener('transitionend', this.transitionHandler);
			}
		}, {
			key: "destroy",
			value: function destroy() {
				this.accordion.removeEventListener('click', this.clickHandler);
				this.accordion.removeEventListener('transitionend', this.transitionHandler);
			}
		}], [{
			key: "addPanelHeight",
			value: function addPanelHeight(panel) {
				panel.style.height = "".concat(panel.scrollHeight, "px");
			}
			/**
			 * Removes inline 'height' style from a panel, to trigger close transition
			 * @param {HTMLDivElement} panel - The accordion item content panel
			 */

		}, {
			key: "removePanelHeight",
			value: function removePanelHeight(panel) {
				panel.getAttribute('style'); // Fix Safari bug (doesn't remove attribute without this first!)

				panel.removeAttribute('style');
			}
		}]);

		return AccordionInstance;
	}();

	var Accordion = /*#__PURE__*/function (_ccComponent3) {
		"use strict";

		_inherits(Accordion, _ccComponent3);

		var _super3 = _createSuper(Accordion);

		function Accordion() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion';
			var cssSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".cc-".concat(name);

			_classCallCheck(this, Accordion);

			return _super3.call(this, name, cssSelector);
		}

		_createClass(Accordion, [{
			key: "init",
			value: function init(container) {
				_get(_getPrototypeOf(Accordion.prototype), "init", this).call(this, container);

				this.registerInstance(container, new AccordionInstance(container));
			}
		}, {
			key: "destroy",
			value: function destroy(container) {
				this.destroyInstance(container);

				_get(_getPrototypeOf(Accordion.prototype), "destroy", this).call(this, container);
			}
		}]);

		return Accordion;
	}(ccComponent);

	new Accordion(); // Manage videos

	theme.VideoManager = new function () {
		var _ = this;

		_._permitPlayback = function (container) {
			return !($(container).hasClass('video-container--background') && $(window).outerWidth() < 768);
		}; // Youtube


		_.youtubeVars = {
			incrementor: 0,
			apiReady: false,
			videoData: {},
			toProcessSelector: '.video-container[data-video-type="youtube"]:not(.video--init)'
		};

		_.youtubeApiReady = function () {
			_.youtubeVars.apiReady = true;

			_._loadYoutubeVideos();
		};

		_._loadYoutubeVideos = function (container) {
			if ($(_.youtubeVars.toProcessSelector, container).length) {
				if (_.youtubeVars.apiReady) {
					// play those videos
					$(_.youtubeVars.toProcessSelector, container).each(function () {
						// Don't init background videos on mobile
						if (_._permitPlayback($(this))) {
							$(this).addClass('video--init');
							_.youtubeVars.incrementor++;
							var containerId = 'theme-yt-video-' + _.youtubeVars.incrementor;
							$(this).data('video-container-id', containerId);
							var videoElement = $('<div class="video-container__video-element">').attr('id', containerId).appendTo($('.video-container__video', this));
							var autoplay = $(this).data('video-autoplay');
							var loop = $(this).data('video-loop');
							var player = new YT.Player(containerId, {
								height: '360',
								width: '640',
								videoId: $(this).data('video-id'),
								playerVars: {
									iv_load_policy: 3,
									modestbranding: 1,
									autoplay: 0,
									loop: loop ? 1 : 0,
									playlist: $(this).data('video-id'),
									rel: 0,
									showinfo: 0
								},
								events: {
									onReady: _._onYoutubePlayerReady.bind({
										autoplay: autoplay,
										loop: loop,
										$container: $(this)
									}),
									onStateChange: _._onYoutubePlayerStateChange.bind({
										autoplay: autoplay,
										loop: loop,
										$container: $(this)
									})
								}
							});
							_.youtubeVars.videoData[containerId] = {
								id: containerId,
								container: this,
								videoElement: videoElement,
								player: player
							};
						}
					});
				} else {
					// load api
					theme.loadScriptOnce('https://www.youtube.com/iframe_api');
				}
			}
		};

		_._onYoutubePlayerReady = function (event) {
			event.target.setPlaybackQuality('hd1080');

			if (this.autoplay) {
				event.target.mute();
				event.target.playVideo();
			}

			_._initBackgroundVideo(this.$container);
		};

		_._onYoutubePlayerStateChange = function (event) {
			if (event.data == YT.PlayerState.PLAYING) {
				this.$container.addClass('video--play-started');

				if (this.autoplay) {
					event.target.mute();
				}

				if (this.loop) {
					// 4 times a second, check if we're in the final second of the video. If so, loop it for a more seamless loop
					var finalSecond = event.target.getDuration() - 1;

					if (finalSecond > 2) {
						var loopTheVideo = function loopTheVideo() {
							if (event.target.getCurrentTime() > finalSecond) {
								event.target.seekTo(0);
							}

							setTimeout(loopTheVideo, 250);
						};

						loopTheVideo();
					}
				}
			}
		};

		_._unloadYoutubeVideos = function (container) {
			for (var dataKey in _.youtubeVars.videoData) {
				var data = _.youtubeVars.videoData[dataKey];

				if ($(container).find(data.container).length) {
					data.player.destroy();
					delete _.youtubeVars.videoData[dataKey];
					return;
				}
			}
		}; // Vimeo


		_.vimeoVars = {
			incrementor: 0,
			apiReady: false,
			videoData: {},
			toProcessSelector: '.video-container[data-video-type="vimeo"]:not(.video--init)'
		};

		_.vimeoApiReady = function () {
			_.vimeoVars.apiReady = true;

			_._loadVimeoVideos();
		};

		_._loadVimeoVideos = function (container) {
			if ($(_.vimeoVars.toProcessSelector, container).length) {
				if (_.vimeoVars.apiReady) {
					// play those videos
					$(_.vimeoVars.toProcessSelector, container).each(function () {
						// Don't init background videos on mobile
						if (_._permitPlayback($(this))) {
							$(this).addClass('video--init');
							_.vimeoVars.incrementor++;
							var $this = $(this);
							var containerId = 'theme-vi-video-' + _.vimeoVars.incrementor;
							$(this).data('video-container-id', containerId);
							var videoElement = $('<div class="video-container__video-element">').attr('id', containerId).appendTo($('.video-container__video', this));
							var autoplay = !!$(this).data('video-autoplay');
							var player = new Vimeo.Player(containerId, {
								url: $(this).data('video-url'),
								width: 640,
								loop: $(this).data('video-autoplay'),
								autoplay: autoplay,
								muted: $this.hasClass('video-container--background')
							});
							player.on('playing', function () {
								$(this).addClass('video--play-started');
							}.bind(this));
							player.ready().then(function () {
								if (autoplay) {
									player.setVolume(0);
									player.play();
								}

								if (player.element && player.element.width && player.element.height) {
									var ratio = parseInt(player.element.height) / parseInt(player.element.width);
									$this.find('.video-container__video').css('padding-bottom', ratio * 100 + '%');
								}

								_._initBackgroundVideo($this);
							});
							_.vimeoVars.videoData[containerId] = {
								id: containerId,
								container: this,
								videoElement: videoElement,
								player: player,
								autoPlay: autoplay
							};
						}
					});
				} else {
					// load api
					if (window.define) {
						// workaround for third parties using RequireJS
						theme.loadScriptOnce('https://player.vimeo.com/api/player.js', function () {
							_.vimeoVars.apiReady = true;

							_._loadVimeoVideos();

							window.define = window.tempDefine;
						}, function () {
							window.tempDefine = window.define;
							window.define = null;
						});
					} else {
						theme.loadScriptOnce('https://player.vimeo.com/api/player.js', function () {
							_.vimeoVars.apiReady = true;

							_._loadVimeoVideos();
						});
					}
				}
			}
		};

		_._unloadVimeoVideos = function (container) {
			for (var dataKey in _.vimeoVars.videoData) {
				var data = _.vimeoVars.videoData[dataKey];

				if ($(container).find(data.container).length) {
					data.player.unload();
					delete _.vimeoVars.videoData[dataKey];
					return;
				}
			}
		}; // Init third party apis - Youtube and Vimeo


		_._loadThirdPartyApis = function (container) {
			//Don't init youtube or vimeo background videos on mobile
			if (_._permitPlayback($('.video-container', container))) {
				_._loadYoutubeVideos(container);

				_._loadVimeoVideos(container);
			}
		}; // Mp4


		_.mp4Vars = {
			incrementor: 0,
			videoData: {},
			toProcessSelector: '.video-container[data-video-type="mp4"]:not(.video--init)'
		};

		_._loadMp4Videos = function (container) {
			if ($(_.mp4Vars.toProcessSelector, container).length) {
				// play those videos
				$(_.mp4Vars.toProcessSelector, container).addClass('video--init').each(function () {
					_.mp4Vars.incrementor++;
					var $this = $(this);
					var containerId = 'theme-mp-video-' + _.mp4Vars.incrementor;
					$(this).data('video-container-id', containerId);
					var videoElement = $('<div class="video-container__video-element">').attr('id', containerId).appendTo($('.video-container__video', this));
					var $video = $('<video playsinline>');

					if ($(this).data('video-loop')) {
						$video.attr('loop', 'loop');
					}

					if ($(this).data('video-autoplay')) {
						$video.attr({
							autoplay: 'autoplay',
							muted: 'muted'
						});
						$video[0].muted = true; // required by Chrome - ignores attribute

						$video.one('loadeddata', function () {
							this.play();
						});
					}

					$video.on('playing', function () {
						$(this).addClass('video--play-started');
					}.bind(this));
					$video.attr('src', $(this).data('video-url')).appendTo(videoElement);
				});
			}
		};

		_._unloadMp4Videos = function (container) { }; // background video placement for iframes


		_._initBackgroundVideo = function ($container) {
			if ($container.hasClass('video-container--background') && $container.find('.video-container__video iframe').length) {
				var assessBackgroundVideo = function assessBackgroundVideo() {
					var $container = this,
						cw = $container.width(),
						ch = $container.height(),
						cr = cw / ch,
						$frame = $('.video-container__video iframe', this),
						vr = $frame.attr('width') / $frame.attr('height'),
						$pan = $('.video-container__video', this),
						vCrop = 75; // pushes video outside container to hide controls

					if (cr > vr) {
						var vh = cw / vr + vCrop * 2;
						$pan.css({
							marginTop: (ch - vh) / 2 - vCrop,
							marginLeft: '',
							height: vh + vCrop * 2,
							width: ''
						});
					} else {
						var vw = cw * vr + vCrop * 2 * vr;
						$pan.css({
							marginTop: -vCrop,
							marginLeft: (cw - vw) / 2,
							height: ch + vCrop * 2,
							width: vw
						});
					}
				};

				assessBackgroundVideo.bind($container)();
				$(window).on('debouncedresize.' + $container.data('video-container-id'), assessBackgroundVideo.bind($container));
			}
		}; // Compatibility with Sections


		this.onSectionLoad = function (container) {
			// url only - infer type
			$('.video-container[data-video-url]:not([data-video-type])').each(function () {
				var url = $(this).data('video-url');

				if (url.indexOf('.mp4') > -1) {
					$(this).attr('data-video-type', 'mp4');
				}

				if (url.indexOf('vimeo.com') > -1) {
					$(this).attr('data-video-type', 'vimeo');
					$(this).attr('data-video-id', url.split('?')[0].split('/').pop());
				}

				if (url.indexOf('youtu.be') > -1 || url.indexOf('youtube.com') > -1) {
					$(this).attr('data-video-type', 'youtube');

					if (url.indexOf('v=') > -1) {
						$(this).attr('data-video-id', url.split('v=').pop().split('&')[0]);
					} else {
						$(this).attr('data-video-id', url.split('?')[0].split('/').pop());
					}
				}
			});

			_._loadThirdPartyApis(container);

			_._loadMp4Videos(container);

			$(window).on('debouncedresize.video-manager-resize', function () {
				_._loadThirdPartyApis(container);
			}); // play button

			$('.video-container__play', container).on('click', function (evt) {
				evt.preventDefault();
				var $container = $(this).closest('.video-container'); // reveal

				$container.addClass('video-container--playing'); // broadcast a play event on the section container

				$(container).trigger("cc:video:play"); // play

				var id = $container.data('video-container-id');

				if (id.indexOf('theme-yt-video') === 0) {
					_.youtubeVars.videoData[id].player.playVideo();
				} else {
					_.vimeoVars.videoData[id].player.play();
				}
			}); // modal close button

			$('.video-container__stop', container).on('click', function (evt) {
				evt.preventDefault();
				var $container = $(this).closest('.video-container'); // hide

				$container.removeClass('video-container--playing'); // broadcast a stop event on the section container

				$(container).trigger("cc:video:stop"); // play

				var id = $container.data('video-container-id');

				if (id.indexOf('theme-yt-video') === 0) {
					_.youtubeVars.videoData[id].player.stopVideo();
				} else {
					_.vimeoVars.videoData[id].player.pause();

					_.vimeoVars.videoData[id].player.setCurrentTime(0);
				}
			});
		};

		this.onSectionUnload = function (container) {
			$('.video-container__play, .video-container__stop', container).off('click');
			$(window).off('.' + $('.video-container').data('video-container-id'));
			$(window).off('debouncedresize.video-manager-resize');

			_._unloadYoutubeVideos(container);

			_._unloadVimeoVideos(container);

			_._unloadMp4Videos(container);

			$(container).trigger("cc:video:stop");
		};
	}(); // Youtube API callback

	window.onYouTubeIframeAPIReady = function () {
		theme.VideoManager.youtubeApiReady();
	}; // Register the section


	cc.sections.push({
		name: 'video',
		section: theme.VideoManager
	});

	theme.MapSection = new function () {
		var _ = this;
		_.config = {
			zoom: 14,
			styles: {
				"default": [],
				silver: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				}, {
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				}, {
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				}, {
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#f5f5f5"
					}]
				}, {
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#bdbdbd"
					}]
				}, {
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				}, {
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#ffffff"
					}]
				}, {
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dadada"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				}, {
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				}, {
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e5e5e5"
					}]
				}, {
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [{
						"color": "#eeeeee"
					}]
				}, {
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#c9c9c9"
					}]
				}, {
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				}],
				retro: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#ebe3cd"
					}]
				}, {
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#523735"
					}]
				}, {
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#f5f1e6"
					}]
				}, {
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#c9b2a6"
					}]
				}, {
					"featureType": "administrative.land_parcel",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#dcd2be"
					}]
				}, {
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#ae9e90"
					}]
				}, {
					"featureType": "landscape.natural",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dfd2ae"
					}]
				}, {
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dfd2ae"
					}]
				}, {
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#93817c"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#a5b076"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#447530"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#f5f1e6"
					}]
				}, {
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [{
						"color": "#fdfcf8"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#f8c967"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#e9bc62"
					}]
				}, {
					"featureType": "road.highway.controlled_access",
					"elementType": "geometry",
					"stylers": [{
						"color": "#e98d58"
					}]
				}, {
					"featureType": "road.highway.controlled_access",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#db8555"
					}]
				}, {
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#806b63"
					}]
				}, {
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dfd2ae"
					}]
				}, {
					"featureType": "transit.line",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#8f7d77"
					}]
				}, {
					"featureType": "transit.line",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#ebe3cd"
					}]
				}, {
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [{
						"color": "#dfd2ae"
					}]
				}, {
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#b9d3c2"
					}]
				}, {
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#92998d"
					}]
				}],
				dark: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#212121"
					}]
				}, {
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				}, {
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				}, {
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#212121"
					}]
				}, {
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "administrative.country",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9e9e9e"
					}]
				}, {
					"featureType": "administrative.land_parcel",
					"stylers": [{
						"visibility": "off"
					}]
				}, {
					"featureType": "administrative.locality",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#bdbdbd"
					}]
				}, {
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#181818"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1b1b1b"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#2c2c2c"
					}]
				}, {
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#8a8a8a"
					}]
				}, {
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [{
						"color": "#373737"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#3c3c3c"
					}]
				}, {
					"featureType": "road.highway.controlled_access",
					"elementType": "geometry",
					"stylers": [{
						"color": "#4e4e4e"
					}]
				}, {
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#616161"
					}]
				}, {
					"featureType": "transit",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#757575"
					}]
				}, {
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#000000"
					}]
				}, {
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#3d3d3d"
					}]
				}],
				night: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#242f3e"
					}]
				}, {
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#746855"
					}]
				}, {
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#242f3e"
					}]
				}, {
					"featureType": "administrative.locality",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#d59563"
					}]
				}, {
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#d59563"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{
						"color": "#263c3f"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#6b9a76"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#38414e"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#212a37"
					}]
				}, {
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9ca5b3"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#746855"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#1f2835"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#f3d19c"
					}]
				}, {
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [{
						"color": "#2f3948"
					}]
				}, {
					"featureType": "transit.station",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#d59563"
					}]
				}, {
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#17263c"
					}]
				}, {
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#515c6d"
					}]
				}, {
					"featureType": "water",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#17263c"
					}]
				}],
				aubergine: [{
					"elementType": "geometry",
					"stylers": [{
						"color": "#1d2c4d"
					}]
				}, {
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#8ec3b9"
					}]
				}, {
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1a3646"
					}]
				}, {
					"featureType": "administrative.country",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#4b6878"
					}]
				}, {
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#64779e"
					}]
				}, {
					"featureType": "administrative.province",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#4b6878"
					}]
				}, {
					"featureType": "landscape.man_made",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#334e87"
					}]
				}, {
					"featureType": "landscape.natural",
					"elementType": "geometry",
					"stylers": [{
						"color": "#023e58"
					}]
				}, {
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [{
						"color": "#283d6a"
					}]
				}, {
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#6f9ba5"
					}]
				}, {
					"featureType": "poi",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1d2c4d"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#023e58"
					}]
				}, {
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#3C7680"
					}]
				}, {
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [{
						"color": "#304a7d"
					}]
				}, {
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#98a5be"
					}]
				}, {
					"featureType": "road",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1d2c4d"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [{
						"color": "#2c6675"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [{
						"color": "#255763"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#b0d5ce"
					}]
				}, {
					"featureType": "road.highway",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#023e58"
					}]
				}, {
					"featureType": "transit",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#98a5be"
					}]
				}, {
					"featureType": "transit",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"color": "#1d2c4d"
					}]
				}, {
					"featureType": "transit.line",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#283d6a"
					}]
				}, {
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [{
						"color": "#3a4762"
					}]
				}, {
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [{
						"color": "#0e1626"
					}]
				}, {
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#4e6d70"
					}]
				}]
			}
		};
		_.apiStatus = null;

		this.geolocate = function ($map) {
			var deferred = $.Deferred();
			var geocoder = new google.maps.Geocoder();
			var address = $map.data('address-setting');
			geocoder.geocode({
				address: address
			}, function (results, status) {
				if (status !== google.maps.GeocoderStatus.OK) {
					deferred.reject(status);
				}

				deferred.resolve(results);
			});
			return deferred;
		};

		this.createMap = function (container) {
			var $map = $('.map-section__map-container', container);
			return _.geolocate($map).then(function (results) {
				var mapOptions = {
					zoom: _.config.zoom,
					styles: _.config.styles[$(container).data('map-style')],
					center: results[0].geometry.location,
					scrollwheel: false,
					disableDoubleClickZoom: true,
					disableDefaultUI: true,
					zoomControl: true
				};
				_.map = new google.maps.Map($map[0], mapOptions);
				_.center = _.map.getCenter();
				var marker = new google.maps.Marker({
					map: _.map,
					position: _.center,
					clickable: false
				});
				google.maps.event.addDomListener(window, 'resize', function () {
					google.maps.event.trigger(_.map, 'resize');

					_.map.setCenter(_.center);
				});
			}.bind(this)).fail(function () {
				var errorMessage;

				switch (status) {
					case 'ZERO_RESULTS':
						errorMessage = theme.strings.addressNoResults;
						break;

					case 'OVER_QUERY_LIMIT':
						errorMessage = theme.strings.addressQueryLimit;
						break;

					default:
						errorMessage = theme.strings.addressError;
						break;
				} // Only show error in the theme editor


				if (Shopify.designMode) {
					var $mapContainer = $map.parents('.map-section');
					$mapContainer.addClass('page-width map-section--load-error');
					$mapContainer.find('.map-section__wrapper').html('<div class="errors text-center">' + errorMessage + '</div>');
				}
			});
		};

		this.onSectionLoad = function (target) {
			var $container = $(target); // Global function called by Google on auth errors

			window.gm_authFailure = function () {
				if (!Shopify.designMode) return;
				$container.addClass('page-width map-section--load-error');
				$container.find('.map-section__wrapper').html('<div class="errors text-center">' + theme.strings.authError + '</div>');
			}; // create maps


			var key = $container.data('api-key');

			if (typeof key !== 'string' || key === '') {
				return;
			} // load map


			theme.loadScriptOnce('https://maps.googleapis.com/maps/api/js?key=' + key, function () {
				_.createMap($container);
			});
		};

		this.onSectionUnload = function (target) {
			if (typeof window.google !== 'undefined' && typeof google.maps !== 'undefined') {
				google.maps.event.clearListeners(this.map, 'resize');
			}
		};
	}(); // Register the section

	cc.sections.push({
		name: 'map',
		section: theme.MapSection
	});


	// Popup Section Script
	theme.Popup = new function () {
		/**
		 * Popup section constructor. Runs on page load as well as Theme Editor
		 * `section:load` events.
		 * @param {string} container - selector for the section container DOM element
		 */
		var dismissedStorageKey = 'cc-theme-popup-dismissed';

		this.onSectionLoad = function (container) {
			var _this6 = this;

			this.namespace = theme.namespaceFromSection(container);
			this.$container = $(container);
			this.popup = new ccPopup(this.$container, this.namespace);
			var dismissForDays = this.$container.data('dismiss-for-days'),
				dismissForHours = this.$container.data('dismiss-for-hours'),
				dismissForDMins = this.$container.data('dismiss-for-mins'),
              customerAcceptsMarketing = this.$container.data('accepts_marketing'),
				delaySeconds = this.$container.data('delay-seconds'),
				showPopup = true,
				testMode = this.$container.data('test-mode'),
				lastDismissed = window.localStorage.getItem(dismissedStorageKey); // Should we show it during this page view?
			dismissForDMins = Number(dismissForDMins) + (dismissForDays * 24 * 60) + (dismissForHours * 60);
			// Check when it was last dismissed

			if (lastDismissed) {
				var dismissedDaysAgo = (new Date().getTime() - lastDismissed) / (1000 * 60);

				if (dismissedDaysAgo < dismissForDMins || customerAcceptsMarketing) {
					showPopup = false;
				}
			} // Check for error or success messages


			if (this.$container.find('.cc-popup-form__response').length) {
				showPopup = true;
				delaySeconds = 1; // If success, set as dismissed

				if (this.$container.find('.cc-popup-form__response--success').length) {
					this.functions.popupSetAsDismissed.call(this);
				}
			} // Prevent popup on Shopify robot challenge page


			if (document.querySelector('.shopify-challenge__container')) {
				showPopup = false;
			} // Show popup, if appropriate


			if (showPopup || testMode) {
				setTimeout(function () {
					_this6.popup.open();
				}, delaySeconds * 1000);
			} // Click on close button or modal background


			this.$container.closest('#shopify-section-popup').on('click' + this.namespace, '.cc-popup-close, .cc-popup-background', function () {
				_this6.popup.close(function () {
					_this6.functions.popupSetAsDismissed.call(_this6);
				});
			});
			
		};

		this.onSectionSelect = function () {
			this.popup.open();
		};

		this.functions = {
			/**
			 * Use localStorage to set as dismissed
			 */
			popupSetAsDismissed: function popupSetAsDismissed() {
				window.localStorage.setItem(dismissedStorageKey, new Date().getTime());
			}
		};
		/**
		 * Event callback for Theme Editor `section:unload` event
		 */

		this.onSectionUnload = function () {
			this.$container.off(this.namespace);
		};
	}(); // Register section

	cc.sections.push({
		name: 'newsletter-popup',
		section: theme.Popup
	});


	/**
	 * StoreAvailability Section Script
	 * ------------------------------------------------------------------------------
	 * @namespace StoreAvailability
	 */

	theme.StoreAvailability = function (container) {
		var loadingClass = 'store-availability-loading';
		var initClass = 'store-availability-initialized';
		var storageKey = 'cc-location';

		this.onSectionLoad = function (container) {
			var _this7 = this;
			this.namespace = theme.namespaceFromSection(container);
			this.$container = $(container);
			this.productId = this.$container.data('store-availability-container');
			this.sectionUrl = this.$container.data('section-url');
			this.$modal;
			var firstRun = true; // Handle when a variant is selected

			$(window).on("cc-variant-updated".concat(this.namespace).concat(this.productId), function (e, args) {
				if (args.product.id === _this7.productId) {
					_this7.functions.updateContent.bind(_this7)(args.variant.id, args.product.title, firstRun, _this7.$container.data('has-only-default-variant'), typeof args.variant.available !== "undefined");

					firstRun = false;
				}
			}); // Handle single variant products

			if (this.$container.data('single-variant-id')) {
				this.functions.updateContent.bind(this)(this.$container.data('single-variant-id'), this.$container.data('single-variant-product-title'), firstRun, this.$container.data('has-only-default-variant'), this.$container.data('single-variant-product-available'));
				firstRun = false;
			}
		};

		this.onSectionUnload = function () {
			$(window).off("cc-variant-updated".concat(this.namespace).concat(this.productId));
			this.$container.off('click');

			if (this.$modal) {
				this.$modal.off('click');
			}
		};

		this.functions = {
			// Returns the users location data (if allowed)
			getUserLocation: function getUserLocation() {
				return new Promise(function (resolve, reject) {
					var storedCoords;

					if (sessionStorage[storageKey]) {
						storedCoords = JSON.parse(sessionStorage[storageKey]);
					}

					if (storedCoords) {
						resolve(storedCoords);
					} else {
						if (navigator.geolocation) {
							navigator.geolocation.getCurrentPosition(function (position) {
								var coords = {
									latitude: position.coords.latitude,
									longitude: position.coords.longitude
								}; //Set the localization api

								fetch('/localization.json', {
									method: 'PUT',
									headers: {
										'Content-Type': 'application/json'
									},
									body: JSON.stringify(coords)
								}); //Write to a session storage

								sessionStorage[storageKey] = JSON.stringify(coords);
								resolve(coords);
							}, function () {
								resolve(false);
							}, {
								maximumAge: 3600000,
								// 1 hour
								timeout: 5000
							});
						} else {
							resolve(false);
						}
					}
				});
			},
			// Requests the available stores and calls the callback
			getAvailableStores: function getAvailableStores(variantId, cb) {
				return $.get(this.sectionUrl.replace('VARIANT_ID', variantId), cb);
			},
			// Haversine Distance
			// The haversine formula is an equation giving great-circle distances between
			// two points on a sphere from their longitudes and latitudes
			calculateDistance: function calculateDistance(coords1, coords2, unitSystem) {
				var dtor = Math.PI / 180;
				var radius = unitSystem === 'metric' ? 6378.14 : 3959;
				var rlat1 = coords1.latitude * dtor;
				var rlong1 = coords1.longitude * dtor;
				var rlat2 = coords2.latitude * dtor;
				var rlong2 = coords2.longitude * dtor;
				var dlon = rlong1 - rlong2;
				var dlat = rlat1 - rlat2;
				var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(dlon / 2), 2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				return radius * c;
			},
			// Updates the existing modal pickup with locations with distances from the user
			updateLocationDistances: function updateLocationDistances(coords) {
				var unitSystem = this.$modal.find('[data-unit-system]').data('unit-system');
				var self = this;
				this.$modal.find('[data-distance="false"]').each(function () {
					var _this8 = this;

					var thisCoords = {
						latitude: parseFloat($(this).data('latitude')),
						longitude: parseFloat($(this).data('longitude'))
					};

					if (thisCoords.latitude && thisCoords.longitude) {
						var distance = self.functions.calculateDistance(coords, thisCoords, unitSystem).toFixed(1);
						$(this).html(distance); //Timeout to trigger animation

						setTimeout(function () {
							$(_this8).closest('.store-availability-list__location__distance').addClass('-in');
						}, 0);
					}

					$(this).attr('data-distance', 'true');
				});
			},
			// Requests the available stores and updates the page with info below Add to Basket, and append the modal to the page
			updateContent: function updateContent(variantId, productTitle, firstRun, isSingleDefaultVariant, isVariantAvailable) {
				var _this9 = this;

				this.$container.off('click', '[data-store-availability-modal-open]');
				this.$container.off('click' + this.namespace, '.cc-popup-close, .cc-popup-background');
				$('.store-availabilities-modal').remove();

				if (firstRun) {
					this.$container.hide();
				} else if (!isVariantAvailable) {
					//If the variant is Unavailable (not the same as Out of Stock) - hide the store pickup completely
					this.$container.addClass(loadingClass).addClass(initClass);
					this.$container.css('height', '0px');
				} else {
					this.$container.addClass(loadingClass).addClass(initClass);
					this.$container.css('height', this.$container.outerHeight() > 0 ? this.$container.outerHeight() + 'px' : 'auto');
				}

				if (isVariantAvailable) {
					this.functions.getAvailableStores.call(this, variantId, function (response) {
						if (response.trim().length > 0 && !response.includes('NO_PICKUP')) {
							_this9.$container.html(response);

							_this9.$container.html(_this9.$container.children().first().html()); // editor bug workaround


							_this9.$container.find('[data-store-availability-modal-product-title]').html(productTitle);

							if (isSingleDefaultVariant) {
								_this9.$container.find('.store-availabilities-modal__variant-title').remove();
							}

							_this9.$container.find('.cc-popup').appendTo('body');

							_this9.$modal = $('body').find('.store-availabilities-modal');
							var popup = new ccPopup(_this9.$modal, _this9.namespace);

							_this9.$container.on('click', '[data-store-availability-modal-open]', function () {
								popup.open(); //When the modal is opened, try and get the users location

								_this9.functions.getUserLocation().then(function (coords) {
									if (coords && _this9.$modal.find('[data-distance="false"]').length) {
										//Re-retrieve the available stores location modal contents
										_this9.functions.getAvailableStores.call(_this9, variantId, function (response) {
											_this9.$modal.find('.store-availabilities-list').html($(response).find('.store-availabilities-list').html());

											_this9.functions.updateLocationDistances.bind(_this9)(coords);
										});
									}
								});

								return false;
							});

							_this9.$modal.on('click' + _this9.namespace, '.cc-popup-close, .cc-popup-background', function () {
								popup.close();
							});

							if (firstRun) {
								_this9.$container.slideDown(300);
							} else {
								_this9.$container.removeClass(loadingClass);

								var newHeight = _this9.$container.find('.store-availability-container').outerHeight();

								_this9.$container.css('height', newHeight > 0 ? newHeight + 'px' : 'auto');
							}
						}
					});
				}
			}
		}; // Initialise the section when it's instantiated

		this.onSectionLoad(container);
	}; // Register section


	cc.sections.push({
		name: 'store-availability',
		section: theme.StoreAvailability
	}); // ensure root_url ends in a slash

	if (!/\/$/.test(theme.routes.root_url)) theme.routes.root_url += '/';
	/*================ General Barry Bits ================*/

	theme.icons = {
		left: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
		right: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
		close: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
		chevronLightLeft: '<svg fill="#000000" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 14.51,6.51 14,6 8,12 14,18 14.51,17.49 9.03,12 Z"></path></svg>',
		chevronLightRight: '<svg fill="#000000" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 10,6 9.49,6.51 14.97,12 9.49,17.49 10,18 16,12 Z"></path></svg>',
		chevronDown: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><path d="M0-.75h24v24H0z" fill="none"/></svg>',
		chevronUp: '<svg role="img" style="fill:none;" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="chevronUpIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000"> <title id="chevronUpIconTitle">Chevron Up</title> <polyline points="6 14 12 8 18 14 18 14"/> </svg>',
		tick: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
		add: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
		loading: '<svg xmlns="http://www.w3.org/2000/svg" style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="5" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(263.279 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg>',
		chevronRight: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0-.25H24v24H0Z" transform="translate(0 0.25)" style="fill:none"></path><polyline points="10 17.83 15.4 12.43 10 7.03" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:8;stroke-width:1.5px"></polyline></svg>',
		chevronLeft: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0-.25H24v24H0Z" transform="translate(0 0.25)" style="fill:none"/> <polyline points="14.4 7.03 9 12.43 14.4 17.83" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:8;stroke-width:1.5px"/></svg>',
		clickIcon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="图层_1" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;background: #93150d;" xml:space="preserve"><style type="text/css">.ql-click-icon1{fill:#FFFFFF;}.ql-click-icon2{fill:none;stroke:#FFFFFF;stroke-width:3.5;stroke-linecap:round;stroke-miterlimit:10;}</style><g><path class="ql-click-icon1" d="M30.7,31.9l8.4,27.6c0.3,0.9,1.6,0.9,1.9,0l4-13.8c0.1-0.3,0.4-0.6,0.7-0.7l13.8-4c1-0.3,1-1.6,0-1.9   l-27.6-8.4C31.2,30.5,30.5,31.2,30.7,31.9z"/><path class="ql-click-icon2" d="M22.8,41.2c-4.2-5.1-4-12.7,0.8-17.5s12.4-5.1,17.5-0.8"/></g></svg>'
	};
	theme.swipers = {};
	theme.productData = {};
	theme.viewport = {
		isXs: function isXs() {
			return $(window).outerWidth() < 768;
		},
		isSm: function isSm() {
			return $(window).outerWidth() >= 768;
		},
		isMd: function isMd() {
			return $(window).outerWidth() >= 992;
		},
		isLg: function isLg() {
			return $(window).outerWidth() >= 1200;
		},
		isXlg: function isXlg() {
			return $(window).outerWidth() >= 1441;
		},
		scrollTo: function scrollTo($elem) {
			var scrollTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
			var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
			var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

			if ($elem && typeof $elem === 'string') {
				$elem = $($elem);
			}

			if (scrollTop === -1 && $elem && $elem.length) {
				scrollTop = $elem.offset().top - theme.Nav().bar.height() - offset;
			}

			$('html,body').animate({
				scrollTop: scrollTop
			}, speed);
		} // ,
		// isElementInView: (el) => {
		//   // Special bonus for those using jQuery
		//   if (typeof jQuery === "function" && el instanceof jQuery) {
		//     el = el[0];
		//   }
		//
		//   var rect = el.getBoundingClientRect();
		//
		//   return (
		//     rect.top >= 0 &&
		//     rect.left >= 0 &&
		//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		//   );
		// },

	};
	theme.device = {
		cache: {
			isTouch: null,
			isRetinaDisplay: null
		},
		isTouch: function isTouch() {
			if (theme.device.cache.isTouch !== null) {
				return theme.device.cache.isTouch;
			} else {
				try {
					document.createEvent("TouchEvent");
					theme.device.cache.isTouch = true;
				} catch (e) {
					theme.device.cache.isTouch = false;
				} finally {
					return theme.device.cache.isTouch;
				}
			}
		},
		isRetinaDisplay: function isRetinaDisplay() {
			if (theme.device.cache.isRetinaDisplay !== null) {
				return theme.device.cache.isRetinaDisplay;
			} else {
				if (window.matchMedia) {
					var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
					theme.device.cache.isRetinaDisplay = mq && mq.matches || window.devicePixelRatio > 1;
					return theme.device.cache.isRetinaDisplay;
				}
			}
		}
	};


	if (window.Element && !Element.prototype.closest) {
		Element.prototype.closest = function (s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i,
				el = this;

			do {
				i = matches.length;

				while (--i >= 0 && matches.item(i) !== el) { }

				;
			} while (i < 0 && (el = el.parentElement));

			return el;
		};
	}


	/*================ Components ================*/
	theme.Nav = function () {
		var $navBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#site-control');
		var $shopContainer = $('#shopify-section-section-shop-container');
		return {
			bar: {
				//Actions
				turnOpaque: function turnOpaque(_turnOpaque) {
					if (_turnOpaque) {
						$navBar.addClass('nav-opaque');
					} else {
						$navBar.removeClass('nav-opaque');
					}
				},
				hide: function hide(_hide) {
					if (_hide) {
						$navBar.addClass('nav-hidden');
					} else {
						$navBar.removeClass('nav-hidden');
					}
				},
				fadeOut: function fadeOut(_fadeOut) {
					if (_fadeOut) {
						$navBar.addClass('nav-fade-out');
					} else {
						$navBar.removeClass('nav-fade-out');
					}
				},
				hideAnnouncement: function hideAnnouncement(hide) {
					if (hide) {
						$navBar.addClass('announcement-hidden');
						$shopContainer?.addClass('container-hidden');
					} else {
						$navBar.removeClass('announcement-hidden');
						$shopContainer?.removeClass('container-hidden');

					}
				},
				//Note: Don't reference $navBar below as the object may have changed (if in theme editor)
				//Settings
				hasOpaqueSetting: function hasOpaqueSetting() {
					return $('#site-control').data('opacity').includes('opaque');
				},
				hasStickySetting: function hasStickySetting() {
					return $('#site-control').data('positioning') === "sticky";
				},
				isInline: function isInline() {
					return $('#site-control').data('positioning') === "inline";
				},
				hasInlineLinks: function hasInlineLinks() {
					return $('#site-control.nav-inline-desktop').length === 1;
				},
				getPositionSetting: function getPositionSetting() {
					return $('#site-control').data('positioning');
				},
				getOpacitySetting: function getOpacitySetting() {
					return $('#site-control').data('opacity');
				},
				//Current state
				isCurrentlyOpaque: function isCurrentlyOpaque() {
					return $('#site-control').hasClass('nav-opaque');
				},
				isAnnouncementBar: function isAnnouncementBar() {
					return $('#site-control').find('.cc-announcement__inner').length === 1;
				},
				hasLocalization: function hasLocalization() {
					return $('#site-control').hasClass('has-localization');
				},
				heightExcludingAnnouncementBar: function heightExcludingAnnouncementBar() {
					return $('#site-control').find('.site-control__inner').outerHeight();
				},
				heightOfAnnouncementBar: function heightOfAnnouncementBar() {
					return $('#site-control').find('.announcement').outerHeight();
				},
				height: function height() {
					//Returns the height including the announcement bar
					return $('.section-shop-container').length > 0 ? $('.section-shop-container').outerHeight() + $('#site-control').outerHeight() : $('#site-control').outerHeight();
				},
				shopContainerHeight: function shopContainerHeight(){
					return $('.section-shop-container').length > 0 ? $('.section-shop-container').outerHeight() : 0;
				},
				navHeight: function navHeight(){
					return $('#site-control').outerHeight();
				}
			}
		};
	};

	theme.ProductMediaGallery = function ($gallery, $thumbs, isFeaturedProduct, isQuickbuy, galleryId) {
		var _this = this;
		var isFirstRun = true;
		var currentMedia;
		var initialisedMedia = {};
		var $viewInSpaceButton = $gallery.find('.view-in-space');
		var $swiperCont = $gallery.find('.swiper-container');
		var swiper;
		var mediaCount = $gallery.find('.theme-img:visible').length;
		var preventSizeRedraw = false;
		var $productThumbnails = $gallery.closest('.product-area').find('.product-area__thumbs');
		var vimeoApiReady = false;
		var isMediaGroupingEnabled = $gallery.data('variant-image-grouping');
		var nav = theme.Nav();

		this.Image = function ($elem, autoplay) {
			this.show = function () {
				$elem.addClass('product-media--activated');
				$elem.show();
			};

			this.play = function () {
				$gallery.find('.product-media--current').removeClass('product-media--current');
				$elem.addClass('product-media--current');
			};

			this.destroy = function () { };

			this.pause = function () {
				$elem.removeClass('product-media--activated');
			};

			this.hide = function () {
				$elem.hide();
			}; //Init the image


			this.show();
		};

		this.Video = function ($elem, autoplay) {
			var _video = this;

			var playerObj = {
				play: function play() { },
				pause: function pause() { },
				destroy: function destroy() { }
			};
			var videoElement = $elem.find('video')[0];

			this.show = function () {
				$elem.addClass('product-media--activated');
				$elem.show();

				_this.slideshowTabFix();
			};

			this.play = function () {
				$gallery.find('.product-media--current').removeClass('product-media--current');
				$elem.addClass('product-media--current');

				_video.show();

				playerObj.play();
			};

			this.pause = function () {
				playerObj.pause();
				$elem.removeClass('product-media--activated');
			};

			this.hide = function () {
				playerObj.pause();
				$elem.hide();
			};

			this.destroy = function () {
				playerObj.destroy();
				$(videoElement).off('playing', handlePlay);
				$(document).off('fullscreenchange', delayedSwiperResize);
			}; //Init the video


			theme.loadStyleOnce('https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.css'); // set up a controller for Plyr video

			window.Shopify.loadFeatures([{
				name: 'video-ui',
				version: '1.0',
				onLoad: function () {
					playerObj = {
						playerType: 'html5',
						element: videoElement,
						plyr: new Shopify.Plyr(videoElement, {
							controls: ['play', 'progress', 'mute', 'volume', 'play-large', 'fullscreen'],
							loop: {
								active: $elem.data('enable-video-looping')
							},
							autoplay: theme.viewport.isSm() && autoplay,
							hideControlsOnPause: true,
							iconUrl: '//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg',
							tooltips: {
								controls: false,
								seek: true
							}
						}),
						play: function play() {
							this.plyr.play();
						},
						pause: function pause() {
							this.plyr.pause();
						},
						destroy: function destroy() {
							this.plyr.destroy();
						}
					};
					$elem.addClass('product-media--video-loaded'); // Disable swipe on the model

					$elem.find('.plyr__controls').addClass('swiper-no-swiping');
					initialisedMedia[$elem.data('media-id')] = _video;
				}.bind(this)
			}]);

			function handlePlay() {
				_this.pauseAllMedia($elem.data('media-id'));
			}

			$(videoElement).on('playing', handlePlay);

			function delayedSwiperResize(event) {
				preventSizeRedraw = true; // If not fullscreen

				if (window.innerHeight !== screen.height) {
					setTimeout(function () {
						preventSizeRedraw = true;
					}, 200);
				}
			} //When fullscreen ends, trigger a delayed resize to ensure swiper resets correctly


			$(document).on('fullscreenchange', delayedSwiperResize);

			_video.show();
		};

		this.ExternalVideo = function ($elem, autoplay) {
			var isPlaying = false;

			var _video = this;

			var playerObj = {
				play: function play() { },
				pause: function pause() { },
				destroy: function destroy() { }
			};
			var iframeElement = $elem.find('iframe')[0];

			this.play = function () {
				$gallery.find('.product-media--current').removeClass('product-media--current');
				$elem.addClass('product-media--current');

				_video.show();

				playerObj.play();
			};

			this.togglePlayPause = function () {
				if (isPlaying) {
					_video.pause();
				} else {
					_video.play();
				}
			};

			this.pause = function () {
				playerObj.pause();
				$elem.removeClass('product-media--activated');
			};

			this.show = function () {
				$elem.addClass('product-media--activated');
				$elem.show();

				_this.slideshowTabFix();
			};

			this.hide = function () {
				playerObj.pause();
				$elem.hide();
			};

			this.destroy = function () {
				playerObj.destroy();
				$elem.off('click', '.product-media--video-mask', _video.togglePlayPause);
			}; //Init the external video


			if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(iframeElement.src)) {
				var loadYoutubeVideo = function loadYoutubeVideo() {
					playerObj = {
						playerType: 'youtube',
						element: iframeElement,
						player: new YT.Player(iframeElement, {
							videoId: $elem.data('video-id'),
							events: {
								onReady: function onReady() {
									initialisedMedia[$elem.data('media-id')] = _video;
									$elem.addClass('product-media--video-loaded');

									if (autoplay && theme.viewport.isSm()) {
										_video.play();
									}
								},
								onStateChange: function onStateChange(event) {
									if (event.data === 1) {
										_this.pauseAllMedia($elem.data('media-id'));
									}

									isPlaying = event.data === YT.PlayerState.PLAYING || event.data === YT.PlayerState.BUFFERING || event.data === YT.PlayerState.UNSTARTED;

									if (event.data === 0 && $elem.data('enable-video-looping')) {
										event.target.seekTo(0);
									}
								}
							}
						}),
						play: function play() {
							this.player.playVideo();
						},
						pause: function pause() {
							this.player.pauseVideo();
						},
						destroy: function destroy() {
							this.player.destroy();
						}
					};
				};

				if (window.YT && window.YT.Player) {
					loadYoutubeVideo();
				} else {
					// set up a controller for YouTube video
					var temp = window.onYouTubeIframeAPIReady;

					window.onYouTubeIframeAPIReady = function () {
						temp();
						loadYoutubeVideo();
					};

					theme.loadScriptOnce('https://www.youtube.com/iframe_api');
				}
			} else if (/vimeo\.com/.test(iframeElement.src)) {
				var loadVimeoVideos = function loadVimeoVideos() {
					if (vimeoApiReady) {
						if ($elem.data('enable-video-looping')) {
							iframeElement.setAttribute('src', iframeElement.getAttribute('src') + '&loop=1');
						}

						if (autoplay && $(window).width() >= 768) {
							iframeElement.setAttribute('src', iframeElement.getAttribute('src') + '&autoplay=1');
						}

						playerObj = {
							playerType: 'vimeo',
							element: iframeElement,
							player: new Vimeo.Player(iframeElement),
							play: function play() {
								this.player.play();
							},
							pause: function pause() {
								this.player.pause();
							},
							destroy: function destroy() {
								this.player.destroy();
							}
						};
						playerObj.player.ready().then(function () {
							initialisedMedia[$elem.data('media-id')] = _video;
							$elem.addClass('product-media--video-loaded');
						});
					} else {
						theme.loadScriptOnce('https://player.vimeo.com/api/player.js', function () {
							vimeoApiReady = true;
							loadVimeoVideos();
						});
					}
				};

				loadVimeoVideos();
			}

			$elem.on('click', '.product-media--video-mask', _video.togglePlayPause);

			_video.show();
		};

		this.Model = function ($elem, autoplay) {
			var _model = this;

			var playerObj = {
				play: function play() { },
				pause: function pause() { },
				destroy: function destroy() { }
			};
			var modelElement = $elem.find('model-viewer')[0];

			this.show = function () {
				$elem.show();
				$elem.addClass('product-media--activated');

				_this.slideshowTabFix();

				_model.updateViewInSpaceButton();
			};

			this.updateViewInSpaceButton = function () {
				if (window.ShopifyXR && $viewInSpaceButton.length) {
					//Change the view in space button to launch this model
					$viewInSpaceButton.attr('data-shopify-model3d-id', $elem.data('media-id'));
					window.ShopifyXR.setupXRElements();
				}
			};

			this.play = function () {
				$gallery.find('.product-media--current').removeClass('product-media--current');
				$elem.addClass('product-media--current');

				_model.show();

				playerObj.play();
			};

			this.pause = function () {
				$elem.removeClass('product-media--activated');
				playerObj.pause();
			};

			this.hide = function () {
				playerObj.pause();
				$elem.hide();

				if (window.ShopifyXR && $viewInSpaceButton.length) {
					//Reset the view in space button to launch the first model
					$viewInSpaceButton.attr('data-shopify-model3d-id', $viewInSpaceButton.data('shopify-model3d-first-id'));
					$viewInSpaceButton.attr('data-shopify-title', $viewInSpaceButton.data('shopify-first-title'));
					window.ShopifyXR.setupXRElements();
				}
			};

			this.destroy = function () {//Nothing needed
			};

			this.initAugmentedReality = function () {
				if ($('.model-json', $gallery).length) {
					var doInit = function doInit() {
						if (!window.ShopifyXR) {
							document.addEventListener('shopify_xr_initialized', function shopifyXrEventListener(event) {
								doInit(); //Ensure this only fires once

								event.target.removeEventListener(event.type, shopifyXrEventListener);
							});
							return;
						}

						window.ShopifyXR.addModels(JSON.parse($('.model-json', $gallery).html()));
						window.ShopifyXR.setupXRElements();
					};

					window.Shopify.loadFeatures([{
						name: 'shopify-xr',
						version: '1.0',
						onLoad: doInit
					}]);
				}
			}; //Init the model


			theme.loadStyleOnce('https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css');
			window.Shopify.loadFeatures([{
				name: 'model-viewer-ui',
				version: '1.0',
				onLoad: function () {
					playerObj = new Shopify.ModelViewerUI(modelElement);
					$elem.addClass('product-media--model-loaded');

					if (autoplay && theme.viewport.isSm()) {
						_model.play();
					} // add mouseup event proxy to fix carousel swipe gestures


					$('<div class="theme-event-proxy">').on('mouseup', function (e) {
						e.stopPropagation();
						e.preventDefault();
						document.dispatchEvent(new MouseEvent('mouseup'));
					}).appendTo($(this).find('.shopify-model-viewer-ui__controls-overlay')); // Prevent the buttons from submitting the form

					$elem.find('button').attr('type', 'button'); // Disable swipe on the model

					$elem.find('.shopify-model-viewer-ui').addClass('swiper-no-swiping');
				}.bind(this)
			}]);
			$elem.find('model-viewer').on('shopify_model_viewer_ui_toggle_play', function () {
				_this.pauseAllMedia($elem.data('media-id'));

				$elem.addClass('product-media-model--playing');
				$gallery.on('click', '.product-media:not([data-media-type="model"])', _model.pause);
			});
			$elem.find('model-viewer').on('shopify_model_viewer_ui_toggle_pause', function () {
				$elem.removeClass('product-media-model--playing');
				$gallery.off('click', '.product-media:not([data-media-type="model"])', _model.pause);
			});
			$elem.on('click', '.product-media--model-mask', function () {
				if (isFeaturedProduct) {
					//If we're on a featured product, delay the initialisation of the model until the current slide has changed
					_this.swipeToSlideIfNotCurrent($elem);

					setTimeout(_model.play, 500);
				} else {
					_model.play();
				}
			});
			initialisedMedia[$elem.data('media-id')] = _model;

			_model.show();

			if (!window.ShopifyXR) {
				_model.initAugmentedReality();
			}
		};

		this.pauseAllMedia = function (ignoreKey) {
			for (var key in initialisedMedia) {
				if (initialisedMedia.hasOwnProperty(key) && (!ignoreKey || key != ignoreKey)) {
					initialisedMedia[key].pause();
				}
			}
		};

		this.showMedia = function ($mediaToShow, autoplay, preventHide) {
			//In with the new
			if ($mediaToShow.length) {
				//Out with the old
				if (currentMedia && !preventHide) {
					currentMedia.pause();
				} //Function to instantiate and return the relevant media


				var getMedia = function getMedia(MediaType) {
					var media;

					if (initialisedMedia.hasOwnProperty($mediaToShow.data('media-id'))) {
						media = initialisedMedia[$mediaToShow.data('media-id')];
						// console.log("media == " + JSON.stringify(media))
						if (autoplay && theme.viewport.isSm()) {
							media.show();

							//Delay play so its easier for users to understand that it paused
							setTimeout(media.play, 250);
						} else {
							media.show();
						}
					} else {
						media = new MediaType($mediaToShow, autoplay);
					}

					return media;
				}; //Initialise the media


				if ($mediaToShow.data('media-type') === "image") {
					currentMedia = getMedia(_this.Image);
				} else if ($mediaToShow.data('media-type') === "video") {
					currentMedia = getMedia(_this.Video);
				} else if ($mediaToShow.data('media-type') === "external_video") {
					currentMedia = getMedia(_this.ExternalVideo);
				} else if ($mediaToShow.data('media-type') === "model") {
					currentMedia = getMedia(_this.Model);
				} else {
					console.warn('Media is unknown', $mediaToShow);
					$gallery.find('.product-media:visible').hide();
					$mediaToShow.show();
				}
			}
		};

		this.swipeToSlideIfNotCurrent = function ($elem) {
			var $slide = $elem.closest('.swiper-slide');
			swiper.slideTo($slide.index(), 500);
		};

		this.destroy = function () {
			for (var i = 0; i < initialisedMedia.length; i++) {
				initialisedMedia[i].destroy();
			}

			if (!isFeaturedProduct) {
				$(window).off("load.productTemplateGallery".concat(galleryId, " scroll.productTemplateGallery").concat(galleryId), detectHeaderOverGallery);
			}

			$gallery.closest('.product-area').off('click', '.product-area__details__thumbs__thumb a', handleThumbnailClick);
			$gallery.off('click', '[data-full-size]', handleImageClick);
			$gallery.off('variantImageSelected', _this.pauseAllMedia);
			$(window).off("ccScrollToMedia.productTemplateGallery".concat(galleryId));

			if ($thumbs && $thumbs.length) {
				$thumbs.off('click');
			}
		};

		this.slideshowTabFix = function () {
			if (swiper) {
				// which slide are we going to?
				var $activeMedia = $swiperCont.find('.product-media--current'),
					$activeSlide = null;

				if ($activeMedia.length) {
					$activeSlide = $activeMedia.closest('.swiper-slide');
				} else {
					$activeSlide = $swiperCont.find('.swiper-slide.swiper-slide-active');
				} // tabindex everything to prevent tabbing into hidden slides


				$activeSlide.find('a, input, button, select, iframe, video, model-viewer, [tabindex]').each(function () {
					if (typeof $(this).data('theme-slideshow-original-tabindex') !== 'undefined') {
						if ($(this).data('theme-slideshow-original-tabindex') === false) {
							$(this).removeAttr('tabindex');
						} else {
							$(this).attr('tabindex', $(this).data('theme-slideshow-original-tabindex'));
						}
					} else {
						$(this).removeAttr('tabindex');
					}
				});
				$($swiperCont.find('.swiper-slide')).not($activeSlide).find('a, input, button, select, iframe, video, model-viewer, [tabindex]').each(function () {
					if (typeof $(this).data('theme-slideshow-original-tabindex') === 'undefined') {
						$(this).data('theme-slideshow-original-tabindex', typeof $(this).attr('tabindex') !== 'undefined' ? $(this).attr('tabindex') : false);
					}

					$(this).attr('tabindex', '-1');
				});
			}
		};


		// 点击swatch跳转到对应的 variant image 
		this.scrollToMedia = function (mediaId) {
			var $variantImage = $("[data-media-id=\"".concat(mediaId, "\"]"));
			//Scroll to that variant image
			if ($variantImage.length && ($('body').hasClass('template-product') || isQuickbuy) && theme.viewport.isSm()) {
				var offset = parseInt($gallery.find('.theme-images').css('padding-top').replace('px', ''));
				var scrollAmount;

				if (!isQuickbuy) {
					scrollAmount = $variantImage.offset().top - offset + 1; //If the nav is opaque and sticky, compensate for the nav when scrolling

					if (nav.bar.hasOpaqueSetting() && nav.bar.hasStickySetting() || $gallery.data('column-count') > 1 && $(window).outerWidth() >= 1100) {
						scrollAmount -= nav.bar.heightExcludingAnnouncementBar();
					} //If scrolling up and the nav is set hide on scroll down, subtract the nav from the new position


					if (scrollAmount < $(window).scrollTop() && nav.bar.getPositionSetting() === 'peek' && nav.bar.hasOpaqueSetting()) {
						scrollAmount -= nav.bar.heightExcludingAnnouncementBar();
					}

					scrollAmount = scrollAmount < 200 ? 0 : scrollAmount;
				} else {
					scrollAmount = $variantImage.offset().top - $(window).scrollTop();
				}

				if ($gallery.data('column-count') === 1 && $(window).outerWidth() >= 1100 && $gallery.closest('.product-area').hasClass('product-area--restrict-width')) {
					scrollAmount -= 25; //The gap between the images
				}

				if ($gallery.data('column-count') > 1) {
					$gallery.find('.product-media--active-variant').removeClass('product-media--active-variant');
					$variantImage.addClass('product-media--active-variant');

					if (theme.viewport.isMd() && !isQuickbuy) {
						var $column = $variantImage.closest('.media-column[data-scrollax]');

						if ($column.length) {
							var $scrollaxParent = $column.closest('[data-scrollax-parent]');

							if ($scrollaxParent.length) {
								// Find out how far down the top of the variant image is as a percentage of the parent
								var parentHeight = $scrollaxParent.outerHeight();
								var imageOffset = $variantImage.parent().position().top + ($scrollaxParent.outerHeight() - $column.outerHeight()); // Get that as a percentage of the parallax percent (20 is the % parallax to compensate - in product-media.js)

								var percentageFromTopOfParent = (100 / parentHeight * imageOffset).toFixed(2);
								var percentageOfParallaxOffset = 20 * (percentageFromTopOfParent / 100); //Work out the px to compensate

								var parallaxOffset = parentHeight * (percentageOfParallaxOffset / 100);

								if (parallaxOffset > 0) {
									//40 is the padding top between the column and scrollax parent
									scrollAmount -= parallaxOffset;
								}
							}
						}
					}
				}

				if (isQuickbuy) {
					$('#quick-buy-modal').animate({
						scrollTop: scrollAmount + $('#quick-buy-modal').scrollTop()
					}, 1000);
				} else {
					$('html,body').animate({
						scrollTop: scrollAmount
					}, 1000);
				}
			}
		};

		function detectHeaderOverGallery() {
			var nav = theme.Nav();
			$('body').toggleClass('header-over-gallery', $(window).scrollTop() < $gallery.height() - nav.bar.height());
		}

		function initColumns() {
			var isFirstSection = $gallery.closest('.shopify-section').index() === 0;
			var columns = $gallery.data('column-count');
			var $elements = $gallery.find('.theme-img');
			var elementsPerCol = Math.ceil($elements.length / columns);
			var $colContainer = $gallery.find('.theme-images');
			var currentCol = -1;
			var $colWrapper;

			if (columns > 1 && $elements.length > 1) {
				if (theme.settings.productImageParallax && !isQuickbuy && isFirstSection) {
					$gallery.attr('data-scrollax-parent', 'true');
				}

				$elements.each(function (i) {
					if (currentCol < Math.floor(i / elementsPerCol)) {
						var additionalAttrs = "";

						if (theme.settings.productImageParallax && !isQuickbuy) {
							if (currentCol === -1) {
								//Note if changing the 20% below, also change the 20% in manifest.js variantImageSelected scroll
								additionalAttrs = "data-scrollax=\"properties: { 'translateY': '-20%' }\"";
							} else if (currentCol === 0) {// additionalAttrs = "data-scrollax=\"properties: { 'translateY': '100px' }\"";
							} else if (currentCol === 1) {
								additionalAttrs = "data-scrollax=\"properties: { 'translateY': '-10%' }\"";
							}
						}

						$colWrapper = $("<div class=\"media-column\" ".concat(additionalAttrs, "></div>")).appendTo($colContainer);
						currentCol++;
					}

					$(this).appendTo($colWrapper);
				});

				if (theme.settings.productImageParallax && !isQuickbuy) {
					if (columns === 2) {
						//Keep the first column the same height or shorter than the second column
						var $firstColumn = $colContainer.find('.media-column').eq(0);
						var $secondColumn = $colContainer.find('.media-column').eq(1);

						if ($secondColumn.outerHeight() > 4000) {
							var maintainFirstColumnHeight = function maintainFirstColumnHeight() {
								if ($secondColumn.outerHeight() < $firstColumn.outerHeight()) {
									$firstColumn.css('height', $secondColumn.outerHeight() + 'px');
								}
							};

							maintainFirstColumnHeight();
							$(window).on('debouncedresize.columnheights', maintainFirstColumnHeight);
						}
					}

					$(window).Scrollax({
						offset: nav.bar.height()
					});
					$(window).Scrollax('reload');
				}
			}
		}

		function destroyColumns() {
			var $colContainer = $gallery.find('.theme-images');
			$colContainer.find('.theme-img').each(function () {
				$(this).appendTo($colContainer);
			});
			$(window).off('debouncedresize.columnheights');
			$colContainer.find('.media-column').remove();

			if (theme.settings.productImageParallax && !isQuickbuy) {
				$gallery.removeAttr('data-scrollax-parent', 'true');
				$(window).Scrollax('destroy');
			}
		} 

		//Check if media should be displayed in columns
		if (theme.viewport.isSm()) {
			initColumns();
		} 

		//Init all media
		$gallery.find('.product-media').each(function (index) {
			_this.showMedia($(this), false, true);
		}); //Init swiper

		var $swiperExternalVideos = $swiperCont.find('[data-media-type="external_video"]'); //Scrolls to the media of the clicked thumbnail

		function handleThumbnailClick(e) {
			e.preventDefault();
			var mediaId = $(this).closest('[data-media-id]').data('media-id');
			var $media = $gallery.find(".product-media[data-media-id=\"".concat(mediaId, "\"]")); //Scroll to that variant image

			if ($media.length) {
				//fixed and not data-opacity="transparent"
				$gallery.closest('.product-area').find('.thumb-active').removeClass('thumb-active');
				$(this).addClass('thumb-active');

				_this.scrollToMedia(mediaId);
			}

			return false;
		} //Opens the zoom modal


		// 图片放大
		function handleImageClick(event) {
			var nav = theme.Nav();
			
			if (theme.viewport.isSm()) {
				const imageEl = event.currentTarget.querySelector('.rimage-wrapper');
				imageEl?.classList.toggle('zoom-out');

			}
		} // Bind listeners

		// 图片放大--鼠标经过
		function handleImageMousemove(event){
			const rect = event.target?.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const percentX = (x / rect.width) * 100;
			const percentY = (y / rect.height) * 100;
			event.target.style.transformOrigin = `${percentX}% ${percentY}%`;
		}

		// 图片放大--鼠标离开取消图片放大
		function handleImageMouseleave(event){
			const imageEl = event.currentTarget.querySelector('.rimage-wrapper');
			imageEl?.classList.remove('zoom-out');
		}

		if ($gallery.hasClass('theme-gallery--thumbs-enabled')) {
			$gallery.closest('.product-area').on('click', '.product-area__details__thumbs__thumb a', handleThumbnailClick);
		}

		// 图片放大
		if ($gallery.hasClass('theme-gallery--zoom-enabled')) {
			$gallery.on('click', '[data-full-size]', handleImageClick);
			$gallery.on('mousemove', '[data-full-size]',handleImageMousemove);
			$gallery.on('mouseleave', '[data-full-size]',handleImageMouseleave);
		}

		$(window).off("ccScrollToMedia.productTemplateGallery".concat(galleryId)).on("ccScrollToMedia.productTemplateGallery".concat(galleryId), function (e, mediaId) {
			if ($gallery.data('scroll-to-variant-media') !== false || theme.viewport.isXs()) {
				_this.scrollToMedia(mediaId);
			}
		});

		if (!isFeaturedProduct) {
			$(detectHeaderOverGallery); // indicate if header over the gallery

			$(window).on("scroll.productTemplateGallery".concat(galleryId), detectHeaderOverGallery);
		} else {
			// set external video dimensions for featured products
			$swiperExternalVideos.each(function () {
				$(this).width($gallery.outerHeight() * $(this).data('aspectratio'));
			});
		}



		// Hides the irrelevant variant media
		function initVariantImageGrouping() {
			var productData = theme.OptionManager.getProductData(null, $gallery.data('product-id'));
			if (productData.media && productData.media.length > 1 &&
				productData.variants && productData.variants.length > 1 &&
				productData.options && productData.options.length > 0) {

				// 确定当前选中的是哪个option的值
				var getFirstMatchingOptionIndex = function getFirstMatchingOptionIndex(productOptions) {
					productOptions = productOptions.map((option) => option.toLowerCase());
					var colorOptions = $gallery.data('variant-image-grouping-option').split(',');
					for (var colorOption of colorOptions) {
						var index = productOptions.indexOf(colorOption.trim());
						if (index > -1) {
							return index;
						}
					}
					return -1;
				};

				var colorOptionIndex = getFirstMatchingOptionIndex(productData.options);
				//If this product contains a grouping field (eg Color)
				if (colorOptionIndex > -1) {
					var mediaByVariantColor = [];
					productData.variants.forEach((variant) => {
						if (variant.featured_media) {
							if (!mediaByVariantColor[variant.featured_media.id]) {
								mediaByVariantColor[variant.featured_media.id] = [];
							}
							// 拿到当前选定swatch的选项值
							mediaByVariantColor[variant.featured_media.id].push(variant.options[colorOptionIndex]);
						}
					});

					var previousColor;
					var slideContainer = $gallery[0].querySelector('.theme-images');
					var allSlides = $gallery[0].querySelectorAll('.theme-img');
					$gallery.on('variantImageSelected', (e, variant) => {
						var ql_oldProductData = productData;
						// 货号改变时
						if (productData.id != $gallery.attr("data-product-id")) {
							ql_oldProductData.media.forEach((media) => {
								var $mediaElement = $gallery.eq(0).find("[data-media-id=\"".concat(media.id, "\"]"));
								$mediaElement.parent().attr('aria-hidden', true);

								// $productThumbnails  缩略图父盒子
								if ($productThumbnails.length) {
									var thumbnailElement = $productThumbnails[0].querySelector("[data-media-thumb-id=\"".concat(media.id, "\"]"));
									if (thumbnailElement) {
										thumbnailElement.setAttribute('data-cc-hidden', true);
									}
								}
							})

							productData = theme.productData[$gallery.attr("data-product-id")];

							// 更新 新数据
							productData.variants.forEach((variant) => {
								if (variant.featured_media) {
									if (!mediaByVariantColor[variant.featured_media.id]) {
										mediaByVariantColor[variant.featured_media.id] = [];
									}
									mediaByVariantColor[variant.featured_media.id].push(variant.options[colorOptionIndex]);
								}
							});
						}

						var targetColor = variant.options[colorOptionIndex];
						var currentColor, newMediaVisible = false;

						//Only update the thumbnails when the color changes
						if (previousColor != targetColor) {
							if (theme.viewport.isXs()) {
								slideContainer.innerHTML = "";
								slideContainer.append(...allSlides);
							}

							// 缩略图
							if ($productThumbnails.length) {
								// 幻灯片插件
								$('.slick-slider', $productThumbnails).slick('slickUnfilter');
							}

							productData.media.forEach((media) => {
								if (mediaByVariantColor[media.id]) {
									currentColor = mediaByVariantColor[media.id];
								}
								var mediaElement = $gallery[0].querySelector("[data-media-id=\"".concat(media.id, "\"]"));
								if (mediaElement) {
									var showMedia = !!(currentColor && currentColor.includes(targetColor));
									if (mediaElement.parentElement.getAttribute('aria-hidden') == showMedia.toString()) {
										newMediaVisible = true;
									}
									//Remove images which precede any variant image
									if (!currentColor) {
										mediaElement.parentElement.remove();
									}

									mediaElement.parentElement.setAttribute('aria-hidden', !showMedia);

									if (theme.viewport.isXs()) {
										if (showMedia) {
											// Lazy load any media that needs it
											var lazyImage = mediaElement.querySelector('.lazyload--manual');
											if (lazyImage) {
												lazyImage.classList.remove('lazyload--manual');
												lazyImage.classList.add('lazyload');
											}
										} else {
											mediaElement.parentElement.remove();
										}
									}
									// $productThumbnails  缩略图父盒子
									if ($productThumbnails.length) {
										var thumbnailElement = $productThumbnails[0].querySelector("[data-media-thumb-id=\"".concat(media.id, "\"]"));
										if (thumbnailElement) {
											thumbnailElement.setAttribute('data-cc-hidden', !showMedia);
										}
									}
								}
							});

							$('.product-area .product-area__media .theme-img.ql_is-first-img').removeClass('ql_is-first-img');
							$('.product-area .product-area__media .theme-img[aria-hidden=false]').eq(0).addClass('ql_is-first-img');

							if (newMediaVisible) {
								updateSwiperSlidesPerView();
							}

							if (theme.viewport.isSm() && $gallery.data('column-count') === 2 && !isFirstRun && newMediaVisible) {
								//Reinit columns/collage
								setTimeout(() => {
									destroyColumns();
									initColumns();
								}, 0);
							}

							if ($productThumbnails.length) {
								setTimeout(toggleThumbnailVisibility, 0);
							}

							isFirstRun = false;
							previousColor = targetColor;
						}
					});
				}
			}
		}

		// Check the number of visible media and update the carousel options accordingly
		function updateSwiperSlidesPerView() {
			var visibleSlides = $gallery[0].querySelectorAll('.theme-img:not([aria-hidden="true"])');
			var swiperId = $gallery.find('.swiper-container:first').attr('data-swiper-id');
			if (swiperId) {
				var thisSwiper = theme.swipers[swiperId];
				if (thisSwiper && thisSwiper.params) {
					thisSwiper.params.breakpoints[10000].slidesPerView = visibleSlides.length < 2 ? 1 : 2;
					$gallery.attr('data-media-count', visibleSlides.length);
					thisSwiper.currentBreakpoint = false;
					thisSwiper.update();
				}
			}
		}


		if (isMediaGroupingEnabled) {
			initVariantImageGrouping();
		}

		$gallery.on('variantImageSelected', _this.pauseAllMedia);

		function initSwiper() {
			destroyColumns();
			var extraSwiperOpts = {};

			if ($swiperCont.data('swiper-nav-style') === 'dots') {
				extraSwiperOpts = {
					dynamicBullets: true,
					pagination: {
						el: $swiperCont.find('.swiper-pagination')[0],
						dynamicBullets: true
					}
				};
			} else if($swiperCont.data('swiper-nav-style') === 'progressbar'){
				extraSwiperOpts = {
					dynamicBullets: true,
					pagination: {
						el: $swiperCont.find('.swiper-pagination')[0],
						type: 'progressbar',
						renderProgressbar: function (progressbarFillClass) {
							return '<span class="' + progressbarFillClass + '"></span>';
						}
					}
				};
			} else {
				extraSwiperOpts = {
					navigation: {
						nextEl: $swiperCont.find('.swiper-button-next')[0],
						prevEl: $swiperCont.find('.swiper-button-prev')[0]
					}
				};
			} //Maintain the height of the carousel on desktop


			if (isFeaturedProduct) {
				var updateMediaHeight = function updateMediaHeight() {
					if (theme.viewport.isSm()) {
						$productMedia.css('height', $productDetails.outerHeight() + 'px');
					} else {
						$productMedia.css('height', 'auto');
					}
				};

				var $productDetails = $gallery.closest('.product-area').find('.product-area__details .product-area__details__inner');
				var $productMedia = $gallery.closest('.product-area').find('.product-area__media');
				$(window).on('debouncedresize.swiper', updateMediaHeight);
				updateMediaHeight();
			}
			//Init swiper
			var swiperOpts = _objectSpread({
				mode: 'horizontal',
				loop: false,
				// slidesPerView: 'auto',
				slidesPerView: mediaCount > 1 ? 2 : 1,
				resizeReInit: true,
				autoHeight: false,
				scrollContainer: true,
				grabCursor: true,
				createPagination: false,
				preventClicks: false,
				freeMode: true,
				freeModeFluid: true,
				spaceBetween: 20,
				dynamicBullets: false,
				mousewheel: {
					invert: true,
					forceToAxis: true
				},
				scrollbar: {
					el: $swiperCont.find('.swiper-scrollbar')[0],
					draggable: true
				}
			}, extraSwiperOpts, {
				breakpoints: {
					767: _objectSpread({
						autoHeight: true,
						slidesPerView: 1,
						spaceBetween: 0,
						freeMode: false,
						freeModeFluid: false
					}, extraSwiperOpts),
					10000: {
						slidesPerView: mediaCount > 1 ? 2 : 1
					}

				},
				on: {
					init: function init() {
						lazySizes.autoSizer.checkElems();
						$swiperCont.find('.swiper-slide-active .lazyload--manual').removeClass('lazyload--manual').addClass('lazyload'); //Lazy load all slider images

						setTimeout(function () {
							$swiperCont.find('.lazyload--manual').removeClass('lazyload--manual').addClass('lazyload');
						}, window.localStorage.getItem('is_first_visit') === null ? 6000 : 2000); //Hack for iPhone X - where loading the page on slower connection sometimes causes Swiper to steal focus

						if (theme.viewport.isXs() && $('.product-detail__form__options a:not(.size-chart-link)').length && !isFeaturedProduct) {
							$('.product-detail__form__options a:not(.size-chart-link):first').focus();
							setTimeout(function () {
								$(window).scrollTop(0);
							}, 500);
						} //Hack for Safari (2021/08) - where images don't always draw on mobile screens - switching display mode forces it to redraw correctly


						if (theme.viewport.isXs() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
							setTimeout(function () {
								$swiperCont.find('.swiper-wrapper').css('display', 'inline-flex');
							}, 500);
							setTimeout(function () {
								$swiperCont.find('.swiper-wrapper').css('display', '');
							}, 1000);
						}
					},
					slideChangeTransitionStart: function slideChangeTransitionStart() {
						//Load the next image if not already
						$swiperCont.find('.swiper-slide-active .lazyload--manual').removeClass('lazyload--manual').addClass('lazyload');
					},
					slideChangeTransitionEnd: function slideChangeTransitionEnd(e) {
						// Pause any media after changing slide
						_this.pauseAllMedia(); // Update the view in space button on swipe
						if (theme.viewport.isXs() || isFeaturedProduct) {
							var $activeMedia = $gallery.find('.swiper-slide-active .product-media');
							var activeMediaObj = initialisedMedia[$activeMedia.data('media-id')];
							if (activeMediaObj) {
								if ($activeMedia.data('media-type') === 'model') {
									activeMediaObj.updateViewInSpaceButton();
								} else if (window.ShopifyXR && $viewInSpaceButton.length) {
									//Reset the view in space button to launch the first model
									$viewInSpaceButton.attr('data-shopify-model3d-id', $viewInSpaceButton.data('shopify-model3d-first-id'));
									$viewInSpaceButton.attr('data-shopify-title', $viewInSpaceButton.data('shopify-first-title'));
									window.ShopifyXR.setupXRElements();
								}
							}
						}
						_this.slideshowTabFix();
					}
				}
			});

			swiper = new Swiper($swiperCont, swiperOpts);
			var randomId = new Date().getTime();
			theme.swipers[randomId] = swiper;
			$swiperCont.attr('data-swiper-id', randomId);
			var startIndex = $gallery.find('.current-img').index();
			if (startIndex > 0) {
				swiper.slideTo(startIndex, 0);
				// swiper.slideTo(0, 0);
			}

			if (isFeaturedProduct) {
				$gallery.find('.current-img .product-media').addClass('product-media--active-variant');
			} //Disable swipe on single products within the featured product slider


			if ($gallery.hasClass('featured-product__gallery--single')) {
				$swiperCont.addClass('swiper-no-swiping');
			} //Fixes bug where the last slide gets cut off if its a model


			setTimeout(function () {
				$(window).trigger('resize'); //Load lazy images

				lazySizes.autoSizer.checkElems();

				if (swiper) {
					swiper.update();
				} //Autoplay the active slide on desktop


				if (theme.viewport.isSm() && !isFeaturedProduct) {
					_this.showMedia($swiperCont.find('.swiper-slide.swiper-slide-active .product-media'), false, true);
				}

				if (isFeaturedProduct) {
					_this.slideshowTabFix();
				}
			}, isFeaturedProduct ? 3000 : 1000);
		}

		function destroySwiper() {
			$swiperCont.removeClass('swiper-no-swiping');
			swiper.destroy(false);
			initColumns();
		}

		var swiperEnabled = false;

		function toggleSwiper() {
			if (theme.viewport.isXs() && !swiperEnabled) {
				swiperEnabled = true;
				initSwiper();
			} else if (theme.viewport.isSm() && swiperEnabled) {
				swiperEnabled = false;
				destroySwiper();
				$swiperCont.find('.lazyload--manual').removeClass('lazyload--manual').addClass('lazyload');
			} else if (theme.viewport.isSm()) {
				$swiperCont.find('.lazyload--manual').removeClass('lazyload--manual').addClass('lazyload');
			}
		}

		$(function () {
			if (isFeaturedProduct) {
				initSwiper();
			} else {
				toggleSwiper();
				$(window).on('debouncedresize.swiper', toggleSwiper);
			}
			// 点击出现推荐链接的按钮  ootd
			let $targetBtn = $('.ql-color-group-list .active');
			// $targetBtn.length > 0 && _ql_create_ootd($targetBtn.parents('#page-content'), $targetBtn.attr("data-handle"), $targetBtn.attr("data-value"));
			$targetBtn.length > 0 && _ql_create_ootd_2($targetBtn.parents('#page-content'), $targetBtn.attr("data-handle"), $targetBtn.attr("data-value"));
		});
	};

	theme.initContentSlider = function (target, afterChange) {
		$('.slideshow', target).each(function () {
			var autoplaySpeed = $(this).data('autoplay-speed') * 1000;
			var speed = $(this).data('transition') == 'instant' ? 0 : 300;
			var pcSlides = $(this).data('pc-slides') ? Number($(this).data('pc-slides')) : 1;
			var pcSlidesJump = $(this).data('pc-slides-jump') ? Number($(this).data('pc-slides-jump')) : 1;
			var mbSlides = $(this).data('mb-slides') ? $(this).data('mb-slides') == 2 ? 2 : $(this).data('mb-slides') : 1;
			//   var fade = $(this).data('transition') === 'slide' && theme.viewport.isXs() ? false : true;
			$(this).on('init', function () {
				$('.slick-current .lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload'); //Lazyload all slide images after a few seconds

				$(function () {
					var _this10 = this;

					setTimeout(function () {
						$('.lazyload--manual', _this10).removeClass('lazyload--manual').addClass('lazyload');
					}, window.localStorage.getItem('is_first_visit') === null ? 500 : 200);
				});
			}).slick({
				slidesToShow: pcSlides,
				slidesToScroll: pcSlidesJump,
				autoplay: $(this).data('autoplay'),
				// fade: $(this).data('transition') === 'slide' && theme.viewport.isXs() ? false : true,
				fade: $(this).data('transition') === 'slide' ? false : true,
				speed: speed,
				autoplaySpeed: autoplaySpeed,
				arrows: $(this).data('navigation') == 'arrows' || $(this).data('pc-navigation') == 'arrows',
				dots: $(this).data('navigation') == 'dots' || $(this).data('pc-navigation') == 'dots',
				// pauseOnHover: $(this).data('transition') != 'instant' || $(this).data('autoplay-speed') > 2, // no pause when quick & instant
				infinite: $(this).data('uninfinite') ? false : true,
				useTransform: true,  // 启用/禁用CSS转换
				prevArrow: '<button type="button" class="slick-prev" aria-label="' + theme.strings.previous + '">' + theme.icons.chevronLeft + '</button>',
				nextArrow: '<button type="button" class="slick-next" aria-label="' + theme.strings.next + '">' + theme.icons.chevronRight + '</button>',
				pauseOnHover: false,
				cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
				lazyLoad: $(this).find('[data-lazy]').length > 0 ? 'ondemand' : null,
				customPaging: function customPaging(slider, i) {
					return "<button class=\"custom-dot\" type=\"button\" data-role=\"none\" role=\"button\" tabindex=\"0\">" + "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"30px\" height=\"30px\" viewBox=\"0 0 30 30\" xml:space=\"preserve\">" + "<circle class=\"circle-one\" cx=\"15\" cy=\"15\" r=\"13\" />" + "<circle class=\"circle-two\" cx=\"15\" cy=\"15\" r=\"13\" style=\"animation-duration: ".concat(autoplaySpeed + speed, "ms\" />") + "</svg>" + "</button>";
				},
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: mbSlides,
						slidesToScroll: mbSlides,
						arrows: false || $(this).data('mb-navigation') == 'arrows',
						//$(this).data('navigation') == 'arrows',
						dots: $(this).data('navigation') != 'none',
						// $(this).data('navigation') == 'none' || $(this).data('navigation') == 'dots',
						lazyLoad: $(this).find('[data-lazy]').length > 0 ? 'progressive' : null
					}
				}]
			}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
				//Lazy load the next slide image if not already loaded
				var $unloadedImage = $(slick.$slides.get(nextSlide)).find('.lazyload--manual');

				if ($unloadedImage.length) {
					$unloadedImage.removeClass('lazyload--manual').addClass('lazyload');
				}

				if ($(this).data('transition') === 'slide' || $(this).data('transition') === 'zoom') {
					var $outgoingSlide = $(slick.$slides.get(currentSlide));
					$outgoingSlide.addClass('slick--leaving');
				}
				
			}).on('afterChange', function (event, slick, currentSlide) {
				$(slick.$slides).filter('.slick--leaving').removeClass('slick--leaving');

				if (afterChange) {
					afterChange(currentSlide);
				}
			});
		});
	};

	theme.initProductSlider = function ($swiperCont) {
		var isBlog = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var slidesInView = $swiperCont.data('products-in-view');
		var mbSlidesInView = $swiperCont.data('mb-products-in-view');
		var breakpoints = {
			767: {
				slidesPerView: mbSlidesInView ? mbSlidesInView : 1.2,
				spaceBetween: 10
			},
			900: {
				slidesPerView: slidesInView === 4 || slidesInView === 3 ? 2 : mbSlidesInView ? mbSlidesInView : slidesInView
			},
			1439: {
				slidesPerView: slidesInView === 4 || slidesInView === 3 ? 3 : slidesInView
			},
			3000: {
				slidesPerView: slidesInView,
				spaceBetween: 20
			}
		};

		if (isBlog) {
			var isFirstPostBig = $swiperCont.data('first-post-big');

			if (isFirstPostBig) {
				breakpoints = {
					767: {
						slidesPerView: 1.2,
						spaceBetween: 10
					},
					1024: {
						slidesPerView: 'auto'
					},
					1600: {
						slidesPerView: 'auto'
					},
					3000: {
						slidesPerView: 'auto',
						spaceBetween: 20
					}
				};
			} else {
				breakpoints = {
					767: {
						slidesPerView: 1.2,
						spaceBetween: 10
					},
					1024: {
						slidesPerView: 2
					},
					1600: {
						slidesPerView: 3
					},
					3000: {
						slidesPerView: 4,
						spaceBetween: 20
					}
				};
			}
		}
		//Init swiper
		new Swiper($swiperCont, {
			mode: 'horizontal',
			loop: false,
			resizeReInit: true,
			freeMode: true,
			freeModeFluid: true,
			scrollContainer: true,
			grabCursor: true,
			createPagination: false,
			slidesPerView: slidesInView,
			spaceBetween: 20,
			mousewheel: {
				invert: true,
				forceToAxis: true
			},
			scrollbar: {
				el: $swiperCont.find('.swiper-scrollbar')[0],
				draggable: true
			},
			pagination: {
				el: $swiperCont.find('.swiper-pagination')[0],
				dynamicBullets: false
			},
			navigation: {
				nextEl: $swiperCont.find('.swiper-button-next')[0],
				prevEl: $swiperCont.find('.swiper-button-prev')[0]
			},
			breakpoints: breakpoints,
			on: {
				init: function init() {
					lazySizes.autoSizer.checkElems();
				}
			}
		});
	};

	theme.convertOptionsToBoxes = function (container) {
		// show box-style options
		var $clickies = $(container).find('select[data-make-box]').each(function () {
			$(this).find('option[value=""]').remove(); //Remove 'Pick a' option, if exists
		}).clickyBoxes().parent().addClass('has-clickyboxes');

		//metafields: QLTH   length
		$(container).find('ul[ql_metafields-qlth]').on('click', 'a.ql_qlth', function(){
			
			const handle = $(this).attr('data-handle');
			const sectionId = $(this).parents('ul').attr('data-section-id');

			if(!handle|| !sectionId) return;

			$(container).find('a.ql_qlth.active').removeClass('active');
			$(this).addClass('active');
			fetch(window.Shopify.routes.root + 'products/' + handle + '?section_id=' + sectionId)
			.then(res => res.text())
			.then(html => {
				const temDiv = document.createElement('div');
				temDiv.innerHTML = html;
				const newSection = temDiv.querySelector(`#shopify-section-${sectionId}`);
				const sectionDiv = document.querySelector(`#shopify-section-${sectionId}`);
				window.Shopify.isQlth = true;
				

				if(!sectionDiv || !newSection) return;

				const qlthSize = $(sectionDiv).find('.product-detail__form__options .clickyboxes.options--size .active').attr('data-value');

				window.history.replaceState({}, '', handle);
				sectionDiv.innerHTML = newSection.innerHTML;
				
				
				theme.initAnimateOnScroll(); //Init the product template section

				theme.ProductTemplateSection.onSectionLoad($(sectionDiv).find('.product-area'), false); //Initialise any components

				var $clicky = $(sectionDiv).find('.clickyboxes.options--size');
				var $select = $(sectionDiv).find('select[ql-swatch-type="size"]')
				$select.val(qlthSize).trigger('change');
				$clicky.trigger('change');

				theme.initComponents($('#page-content')); //Load product reviews

				theme.tryRefreshProductReviews(); //Load shopify payments button

				theme.initShopifyPaymentButtons($('#page-content'));
				$(window).one('ccModalClosing', function () {
					theme.ProductTemplateSection.onSectionUnload($(sectionDiv).find('.product-area'), false);
				});
				console.log('---加载完成');
				window.Shopify.isQlth = false;
			})
			
		});


		//默认尺码
		var url = window.location.href;
		var is_quickview = $(container).parents('#quick-buy-modal');
		if ((typeof m_current_variant != "undefined" && typeof new_options != "undefined") 
			&& (url.indexOf('&default=M') != -1 || url.indexOf('variant') == -1)
			&& !window.Shopify.isQlth && is_quickview.length == 0
		) {
			if (url.indexOf('variant') != -1) {
				url = url.split('?variant')[0];
				url = url + '?variant=' + m_current_variant.id;
			}
			if(url.indexOf('&default=M') != -1){
				url = url.replace('&default=M', '');
				window.history.replaceState({
					path: url
				}, '', url);
			}


			$('[ql-swatch-type]').each(function(i) {
				$(this).val(new_options[i]);
			});

			var $mSize = $(container).find(`.product-detail__form__options .clickyboxes.options--size [data-value="${m_current_variant.option2}"]`);
			$(container).find('.product-detail__form__options .clickyboxes.options--size').find('.active').removeClass('active');
			$mSize.addClass('active');
			$(container).find('.product-purchase-form .original-selector').val(m_current_variant.id);

		}

		$('.selector-wrapper:not(.cc-swatches) .clickyboxes').ccHoverLine({
			lineCss: {
				height: '2px'
			}
		});

		// If we have clicky boxes, add the disabled-state to options that have no valid variants
		if ($clickies.length > 0) {
			var productData = theme.OptionManager.getProductData($(container)); // each option

			for (var optionIndex = 0; optionIndex < productData.options.length; optionIndex++) {
				// list each value for this option
				var optionValues = {};

				for (var variantIndex = 0; variantIndex < productData.variants.length; variantIndex++) {
					var variant = productData.variants[variantIndex];

					if (typeof optionValues[variant.options[optionIndex]] === 'undefined') {
						optionValues[variant.options[optionIndex]] = false;
					} // mark true if an option is available


					if (variant.available) {
						optionValues[variant.options[optionIndex]] = true;
					}
				} // mark any completely unavailable options


				for (var key in optionValues) {
					if (!optionValues[key]) {
						$('.selector-wrapper:eq(' + optionIndex + ') .clickyboxes li a', container).filter(function () {
							return $(this).attr('data-value') == key;
						}).addClass('unavailable');
					}
				}
			}
		}
	};

	theme.loadInfiniteScroll = function (container) {
		var infiniteLoadCount = 1; // Pagination-replacement

		$('[data-infinite-scroll-container] .pagination.infiniscroll:not(.infinit)', container).addClass('infinit').each(function () {
			var waitForTrigger = $(this).hasClass('wait-for-trigger');
			var $pager = $('<div class="pager-button"><a href="#" aria-label="' + theme.strings.loadMore + '">' + theme.icons.loading + '</a></div>');
			$(this).replaceWith($pager);
			$pager.find('a').attr('href', $(this).find('.next a').attr('href'));
			$pager.on('click', 'a', function (e) {
				if ($(this).hasClass('loading')) {
					return false;
				} //Show spinner


				$(this).addClass('loading'); //Load next page

				var $link = $(this);
				$.get($(this).attr('href'), function (data) {
					infiniteLoadCount++;
					var isCollage = false; // var $data = $($.parseHTML(data));
					// //Grab products & insert into page
					// var indexOffset = $('.product-list .product-block').length;
					// var $newProducts = $data.find('.product-list .product-block').hide().appendTo('.product-list').filter('.product-block').each(function(index){
					//   $(this).removeAttr('data-loop-index').data('loop-index', indexOffset + index);
					// });

					var $data = $($.parseHTML(data)); //Grab products & insert into page

					if ($('[data-infinite-scroll-results].product-list--columns', container).length) {
						//Collage
						isCollage = true;
						var $newProducts = $data.find('[data-infinite-scroll-results]').hide();
						$newProducts.prepend('<h2>' + theme.strings.page.replace('{{ page }}', infiniteLoadCount) + '</h2>');
						var $newProducts = $newProducts.insertBefore('[data-infinite-scroll-container] .pager-button');
					} else {
						//Not collage
						var $newProducts = $data.find('[data-infinite-scroll-results] .product-block').hide().appendTo('[data-infinite-scroll-results]');
					}

					$('[data-infinite-scroll-container]', container).filter('.product-block').each(function (index) {
						$(this).removeAttr('data-loop-index').data('loop-index', index);
						i++;
					}); //Sort by offset from the top
					//Fix height

					if (!isCollage) {
						$('[data-infinite-scroll-results]', container).height($('[data-infinite-scroll-results]', container).height()); //Prep entry transitions

						$newProducts.addClass('pre-trans').css('display', ''); //Find total height to slide to

						var newHeight = 0;
						$('[data-infinite-scroll-results]', container).children().each(function () {
							var h = $(this).position().top + $(this).height();
							if (h > newHeight) newHeight = h;
						}); //Slide down, reveal & prep for more

						$('[data-infinite-scroll-results]', container).animate({
							height: newHeight
						}, 500, function () {
							$(this).css('height', ''); //At this point, we're ready to transition in & load more

							$newProducts.removeClass('pre-trans');
							setTimeout(theme.tryRefreshProductReviews, 500);
							theme.inlineVideos.init(container);
							theme.initAnimateOnScroll();
							new ProductBlock();
							lazySizes.autoSizer.checkElems();
						});
					} else {
						setTimeout(function () {
							$newProducts.fadeIn();
							setTimeout(theme.tryRefreshProductReviews, 500);
							theme.inlineVideos.init(container);
							theme.initAnimateOnScroll();
							lazySizes.autoSizer.checkElems();
						}, 300);
					} //Spin no more


					var $next = $data.find('[data-infinite-scroll-container] .pagination .next a');

					if ($next.length == 0) {
						//We are out of products
						$pager.slideUp();
					} else {
						//More to show
						$link.attr('href', $next.attr('href')).removeClass('loading');
					}
				});
				return false;
			});

			if (!waitForTrigger) {
				//Infiniscroll
				$(window).on('throttled-scroll.infiniscroll', function () {
					if ($(window).scrollTop() + $(window).height() > $pager.offset().top - 500) {
						$pager.find('a').trigger('click');
					}
				});
			}
		});
	};

	theme.unloadInfiniteScroll = function (container) {
		if (container) {
			$('.pagination.infiniscroll.infinit', container).removeClass('infinit');
		}

		$(window).off('throttled-scroll.infiniscroll');
	};

	theme.applyAjaxToProductForm = function ($formContainer) {
		var shopifyAjaxAddURL = theme.routes.cart_add_url + '.js';
		$formContainer.filter('[data-ajax-add-to-cart="true"]:not(.feedback-go_to_cart)').find('.product-purchase-form').off('submit');
		$formContainer.filter('[data-ajax-add-to-cart="true"]:not(.feedback-go_to_cart)').find('.product-purchase-form').on('submit', function (e) {
			e.preventDefault();
			var $form = $(this); //Disable add button

			var $btn = $(this).find('[type=submit]').attr('disabled', 'disabled').addClass('confirmation adding');
			$btn.data('originalHtml', $btn.html()).html(theme.strings.productAddingToCart);
			var $stickyBtn = $('.product-area__add-to-cart-xs button');
			var updateStickyButton = theme.viewport.isXs() && $stickyBtn.length;

			if (updateStickyButton) {
				$stickyBtn.attr('disabled', 'disabled');
				$stickyBtn.data('originalHtml', $stickyBtn.html()).html(theme.strings.productAddingToCart);
			} //Add to cart

			$.post(shopifyAjaxAddURL, $form.serialize(), function (itemData) {
				//Enable add button
				$btn.html(theme.icons.tick + ' ' + theme.strings.productAddedToCart);

				if (updateStickyButton) {
					$stickyBtn.html(theme.icons.tick + ' ' + theme.strings.productAddedToCart);
				}

				setTimeout(function () {
					$btn.removeAttr('disabled').removeClass('confirmation').html($btn.data('originalHtml'));

					if (updateStickyButton) {
						$stickyBtn.removeAttr('disabled').removeClass('confirmation').html($stickyBtn.data('originalHtml'));
					}
				}, 4000);

				if ($form.hasClass('feedback-add_in_modal') || $form.hasClass('feedback-add_in_modal_no_checkout')) {
					var product = $.parseJSON(itemData);
					var noCheckoutButton = $form.hasClass('feedback-add_in_modal_no_checkout'); //Preload the thumbnail image

					var thumbUrl = theme.Shopify.formatImage(product.image, '300x');
					var img = new Image();
					img.src = thumbUrl;
					$btn.removeClass('adding');
					var variantHtml = "";

					if (product.selling_plan_allocation && product.selling_plan_allocation.selling_plan.name) {
						variantHtml += "<p class=\"cart-product__content__meta\">".concat(product.selling_plan_allocation.selling_plan.name, "</p>");
					}

					if (product.options_with_values && product.options_with_values.length) {
						for (var _i2 = 0; _i2 < product.options_with_values.length; _i2++) {
							var option = product.options_with_values[_i2];

							if (option.name !== "Title" && option.value !== "Default Title") {
								variantHtml += "<p class=\"cart-product__content__meta\">".concat(option.name, ": ").concat(option.value, "</p>");
							}
						}
					} // let $priceElem = $form.closest('.product-area__details__inner').find('.price-area .current-price');
					// if($priceElem.length){
					//   variantHtml += `<p class="cart-product__content__price">${$priceElem.text()}</p>`;
					// }


					var offset = 25;
					var nav = theme.Nav();

					if (nav.bar.getPositionSetting() !== "inline") {
						offset = nav.bar.height();
					}

					showThemeModal(['<div id="added-to-cart" class="theme-modal theme-modal--small" role="dialog" aria-modal="true" aria-labelledby="added-to-cart-title">', "<div class=\"inner\" style=\"transform: translateY(0px);top:".concat(offset, "px\">"), '<a href="#" data-modal-close class="modal-close">&times;</a>', '<h4 id="added-to-cart-title">' + theme.icons.tick + theme.strings.productAddedToCart + '</h4>', '<div class="cart-product">', "<div class=\"cart-product__image\"><img src=\"".concat(thumbUrl, "\" alt=\"").concat(product.featured_image.alt, "\"/></div>"), '<div class="cart-product__content">' + '<p class="cart-product__content__title">', product.product_title, '</p>' + "".concat(variantHtml ? variantHtml : '') + '</div>', '</div>', "<p class=\"links ".concat(noCheckoutButton ? 'links--no-checkout' : '', "\">"), '<a href="' + theme.routes.cart_url + "\" class=\"button ".concat(noCheckoutButton ? '' : 'alt', "\">") + theme.strings.viewCart + '</a>', '<a href="' + theme.routes.checkout + '" class="button button--checkout" [data-cc-checkout-button]>' + theme.strings.popupCheckout + '</a> ', '</p>', '</div>', '</div>'].join(''), "added-to-cart", null);
				} // Update header (& cart if on cart)


				$.get(theme.routes.cart_url, function (data) {
					var cartUpdateSelector = '#site-control .cart:not(.nav-search), [data-section-type="cart-template"]';
					var $newCartObj = $($.parseHTML('<div>' + data + '</div>')).find(cartUpdateSelector);
					$(cartUpdateSelector).each(function (index) {
						$($newCartObj[index]).find('[data-cc-animate]').removeAttr('data-cc-animate');
						$(this).replaceWith($newCartObj[index]);
						$(this).parent().find('[data-cc-animate]').removeAttr('data-cc-animate');
					});
				});
			}, 'text').fail(function (data) {
				//Enable add button
				$btn.removeAttr('disabled').removeClass('confirmation').html($btn.data('originalHtml'));

				if (updateStickyButton) {
					$stickyBtn.removeAttr('disabled').removeClass('confirmation').html($stickyBtn.data('originalHtml'));
				} //Not added, show message


				if (typeof data != 'undefined' && typeof data.status != 'undefined') {
					var jsonRes = $.parseJSON(data.responseText);
					var $statusMessageContainer = $form.find('.product-status-message');
					$statusMessageContainer.html(jsonRes.description);
					$statusMessageContainer.slideDown().fadeIn();
					setTimeout(function () {
						$statusMessageContainer.slideUp();
					}, 8000);
				} else {
					//Some unknown error? Disable ajax and submit the old-fashioned way.
					$form.attr('ajax-add-to-cart', 'false').submit();
				}
			});
		});
	};

	theme.removeAjaxFromProductForm = function ($formContainer) {
		$formContainer.find('form.product-purchase-form').off('submit');
	};

	// Manage option dropdowns
	theme.OptionManager = new function () {
		var _ = this,
		completedProduct = [];

		_._getVariantOptionElement = function (variant, $container) {
			return $container.find('select[name="id"] option[value="' + variant.id + '"]');
		};

		_.selectors = {
			container: '.product-area',
			gallery: '.theme-gallery',
			priceArea: '.price-area',
			variantIdInputs: '[name="id"]',
			submitButton: '.product-detail__form input[type=submit], .product-detail__form button[type=submit]',
			multiOption: '.option-selectors'
		};
		_.strings = {
			priceNonExistent: theme.strings.priceNonExistent,
			buttonDefault: theme.strings.buttonDefault,
			buttonNoStock: theme.strings.buttonNoStock,
			buttonNoVariant: theme.strings.buttonNoVariant,
			unitPriceSeparator: theme.strings.unitPriceSeparator,
			inventoryNotice: theme.strings.onlyXLeft,
			priceSoldOut: theme.strings.priceSoldOut
		};

		_._getString = function (key, variant) {
			var string = _.strings[key];

			if (variant) {
				if (string) {
					string = string.replace('[PRICE]', '<span class="theme-money">' + theme.Shopify.formatMoney(variant.price, theme.money_format) + '</span>');
				} else {
					console.warn("No string for key '".concat(key, "' was found."));
				}
			}

			return string;
		};

		// 从main-product.liquid中获取到的product的json数据 //
		_.getProductData = function ($form, productId) {
			if (!productId) {
				productId = $form.data('product-id');
			}
			var data = null;
			if (!theme.productData[productId]) {
				// 获取product数据
				theme.productData[productId] = JSON.parse(document.getElementById('cc-product-json-' + productId).innerHTML);
			}
			data = theme.productData[productId];

			// 修改下product.options内容，使其与liquid获取的数据一致
			const options = data.options.map((option) => {
				if(option.name) return option.name;
				else return option;
			});
			data.options = options;
			if (!data) {
				console.log('Product data missing (id: ' + $form.data('product-id') + ')');
			}
			return data;
		};

		_.getBaseUnit = function (variant) {
			return variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
		}, _.addVariantUrlToHistory = function (variant) {
			if (variant) {
				var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
				window.history.replaceState({
					path: newurl
				}, '', newurl);
			}
		};

		_.updateSku = function (variant, $container) {
			$container.find('.sku .sku__value').html(variant ? variant.sku : '');
			$container.find('.sku').toggleClass('sku--no-sku', !variant || !variant.sku);
		};

		_.updateBarcode = function (variant, $container) {
			$container.find('.barcode .barcode__value').html(variant ? variant.barcode : '');
			$container.find('.barcode').toggleClass('barcode--no-barcode', !variant || !variant.barcode);
		};

		_.updateInventoryNotice = function (variant, $container) {
			var inventoryData = _._getVariantOptionElement(variant, $container).data('inventory');

			if (inventoryData) {
				$container.find('.product-inventory-notice').removeClass('product-inventory-notice--no-inventory').html('(<span class="bd-bt">'+ _._getString('inventoryNotice').replace('[[ quantity ]]', inventoryData)+'</span>)');
			} else {
				$container.find('.product-inventory-notice').addClass('product-inventory-notice--no-inventory');
			}
		};

		_.updateBackorder = function (variant, $container) {
			var $backorder = $container.find('.backorder');

			if ($backorder.length) {
				if (variant && variant.available) {
					if (variant.inventory_management && _._getVariantOptionElement(variant, $container).data('stock') == 'out') {
						var productData = _.getProductData($container);

						$backorder.find('.backorder__variant').html(productData.title + (variant.title.indexOf('Default') >= 0 ? '' : ' - ' + variant.title));
						$backorder.show();
					} else {
						$backorder.hide();
					}
				} else {
					$backorder.hide();
				}
			}
		};

		_.updatePrice = function (variant, $container) {
			var $priceArea = $container.find(_.selectors.priceArea);

			// 顶部弹窗 价格标签
			var $topPriceArea = $('#ql-selected-variant-info .price');
			if($('#quick-buy-modal').length === 0) {
				$topPriceArea.removeClass('on-sale');
			}
			$priceArea.removeClass('on-sale');

			if (variant && variant.available == true) {
				var $newPriceArea = $('<div>');
				if(variant.qlDiscount && !window.__usfShowOriginalPrice) {
					// was price
					$('<span class="was-price theme-money">').html(theme.Shopify.formatMoney(variant.price, theme.money_format)).appendTo($newPriceArea);
					$newPriceArea.append(' ');
					$priceArea.addClass('on-sale');
					if ($('#quick-buy-modal').length === 0) $topPriceArea.addClass('on-sale');

					// 是否显示折后价
					const productHandle = $container.find('.ql_discount-price--click__mb').attr('data-product-handle') ?? '';
					const showPrice = productHandle == variant.productHandle && $container.find('.ql_discount-price--click__mb').css('display') == 'none';
					if(window._usfShowDiscountPrice || showPrice || completedProduct.includes(variant.productHandle)){
						// discount price
						var val = variant.price - variant.price * variant.qlDiscount * 0.01;
						var html = theme.Shopify.formatMoney(val, theme.money_format);
						var h = html[0];
						for(let i = 1; i < html.length - 1; i++){
						h += '<span><\/sapn>' + html[i];
						}
						h += html[html.length - 1];
						html = html.split('.');
						$(`<span class="current-price theme-money red-color" data-theme-int="${html[0]}" data-theme-point="${html.length > 1 && '.' + html[1]}">`).appendTo($newPriceArea);
						$container.find('.ql_discount-price--click__mb, .ql_discount-price--click__pc')?.attr({
							'data-variant-price': variant.price,
							'data-discount-price': variant.qlDiscount,
							'data-product-handle': variant.productHandle
						}).css({'display': 'none', 'opacity': 0});
					}else{
						$container.find('.ql_discount-price--click__mb, .ql_discount-price--click__pc')?.attr({
							'data-variant-price': variant.price,
							'data-discount-price': variant.qlDiscount,
							'data-product-handle': variant.productHandle
						}).css({'display': 'inline-flex', 'opacity': 1});
						$container.find('.ql_discount-price--click__mb .slide-thumb')?.css('left', 0);
					}
					
				}
				else {
					$container.find('.ql_discount-price--click__mb, .ql_discount-price--click__pc').css({'display': 'none', 'opacity': 0});
					// compare at price
					if(variant.compare_at_price > variant.price){
						$('<span class="was-price theme-money">').html(theme.Shopify.formatMoney(variant.compare_at_price, theme.money_format)).appendTo($newPriceArea);
						$newPriceArea.append(' ');
						$priceArea.addClass('on-sale');
						if($('#quick-buy-modal').length === 0) $topPriceArea.addClass('on-sale');
					}

					// price
					var val = variant.price;
					var html = theme.Shopify.formatMoney(val, theme.money_format);
					html = html.split('.');
					$(`<span class="current-price theme-money" data-theme-int="${html[0]}" data-theme-point="${html.length > 1 && '.' + html[1]}">`).appendTo($newPriceArea);
				}

				if (variant.unit_price_measurement) {
					var $newUnitPriceArea = $('<div class="unit-price">').appendTo($newPriceArea);
					$('<span class="unit-price__price theme-money">').html(theme.Shopify.formatMoney(variant.unit_price, theme.money_format)).appendTo($newUnitPriceArea);
					$('<span class="unit-price__separator">').html(_._getString('unitPriceSeparator')).appendTo($newUnitPriceArea);
					$('<span class="unit-price__unit">').html(_.getBaseUnit(variant)).appendTo($newUnitPriceArea);
				}

				$priceArea.html($newPriceArea.html());

				if($('#quick-buy-modal').length === 0) $topPriceArea.html($newPriceArea.html());
			} else {
				if (variant) {
					$priceArea.html('<span>' + _._getString('priceSoldOut', variant) + '</span>');
					if($('#quick-buy-modal').length === 0) $topPriceArea.html('<span>' + _._getString('priceSoldOut', variant) + '</span>');
				} else {
					$priceArea.html('<span>' + _._getString('priceNonExistent', variant) + '</span>');
					if($('#quick-buy-modal').length === 0) $topPriceArea.html('<span>' + _._getString('priceNonExistent', variant) + '</span>');
				}
			}
				
		};

		_.qlShowPcDiscountPrice = function($priceArea, $target, otherEl){
			$target.on('click', function(){
				// discount price
				const price = this.getAttribute('data-variant-price');
				const qlDiscount = this.getAttribute('data-discount-price');
				const handle = this.getAttribute('data-product-handle');
				var val = price - price * qlDiscount * 0.01;
				var html = theme.Shopify.formatMoney(val, theme.money_format);
				html = html.split('.');
				if($priceArea.find('.current-price').length == 0 ){
					$(`<span class="current-price theme-money red-color" data-theme-int="${html[0]}" data-theme-point="${html.length > 1 && '.' + html[1]}">`).appendTo($priceArea);
				}else{
					$priceArea.find('.current-price').attr({
						'data-theme-int': html[0],
						'data-theme-point': html.length > 1 && '.' + html[1]
					});
				}

				this.style.display = 'none';
				if(otherEl != undefined) otherEl.style.display = 'none';
				handle && completedProduct.push(handle);
			})
		}

		//移动端右滑 显示折扣价
		_.qlShowMbDiscountPrice = function($priceArea, $target, otherEl){
			const slideTrack = $target[0];
			if(slideTrack == undefined) return;
        	const slideThumb = slideTrack.querySelector('.slide-thumb');
			
			let isDragging = false;
			let startX = 0;
			let currentX = 0;
			var currentPriceEl;

			slideThumb?.addEventListener('touchstart', (e) => {
				isDragging = true;
				startX = e.touches[0].clientX - slideThumb.getBoundingClientRect().left;
				e.preventDefault(); // 防止默认行为（如滚动）

				// discount price
				const price = slideTrack.getAttribute('data-variant-price');
				const qlDiscount = slideTrack.getAttribute('data-discount-price');
				
				var val = price - price * qlDiscount * 0.01;
				var html = theme.Shopify.formatMoney(val, theme.money_format);
				html = html.split('.');

				if($priceArea.find('.current-price').length == 0 ){
					$(`<span class="current-price theme-money red-color" data-theme-int="${html[0]}" data-theme-point="${html.length > 1 && '.' + html[1]}" style="opacity: 0;">`).appendTo($priceArea);
				}else{
					$priceArea.find('.current-price').attr({
						'data-theme-int': html[0],
						'data-theme-point': html.length > 1 && '.' + html[1]
					}).css('opacity', 0);
				}
				currentPriceEl = $priceArea.find('.current-price');
			});
			document.addEventListener('touchmove', (e) => {
				if (!isDragging) return;

				currentX = e.touches[0].clientX - startX - slideTrack.getBoundingClientRect().left;

				// 限制滑动范围
				const maxX = slideTrack.offsetWidth - slideThumb.offsetWidth;
				currentX = Math.max(0, Math.min(currentX, maxX));

				slideThumb.style.left = `${currentX}px`;

				// 隐藏
				slideTrack.style.opacity = 1 - (currentX / maxX);
				(currentX / maxX) > 0.3 && currentPriceEl.css("opacity", (currentX / maxX));
			});

			document.addEventListener('touchend', () => {
				if (!isDragging) return;
				isDragging = false;
				const maxX = slideTrack.offsetWidth - slideThumb.offsetWidth;

				// 判断是否滑动到最右（解锁）
				if (currentX >= maxX * 0.8) { // 80% 即可解锁
					const handle = slideTrack.getAttribute('data-product-handle');
					slideTrack.style.display = 'none';
					slideThumb.style.left = `${maxX}px`;
					slideTrack.style.opacity = 0;
					if(otherEl != undefined) otherEl.style.display = 'none';
					handle && !completedProduct.includes(handle) && completedProduct.push(handle);
				} else {
					// 未解锁则回弹
					slideThumb.style.left = '0';
					slideTrack.style.opacity = 1;
					currentPriceEl.css("opacity", 0);
				}
			});

		}

		// 更新加购按钮文本
		_._updateButtonText = function ($button, string, variant) {
			$button.each(function () {
				var newVal;
				newVal = _._getString('button' + string, variant);

				if (newVal !== false) {
					if ($(this).is('input')) {
						$(this).val(newVal);
					} else {
						$(this).html(newVal);
					}
				}
			});
		};

		_.updateButtons = function (variant, $container) {
			var $button = $container.find(_.selectors.submitButton);

			// 顶部弹窗的加购按钮
			var $topBtn = $('#ql-selected-variant-info .actios button');

			if (variant && variant.available == true) {
				$button.removeAttr('disabled');
				_._updateButtonText($button, 'Default', variant);

				if($('#quick-buy-modal').length === 0) {
					$topBtn.removeAttr('disabled');
					_._updateButtonText($topBtn, 'Default', variant);
				}
			} else {
				$button.attr('disabled', 'disabled');

				if($('#quick-buy-modal').length === 0) {
					$topBtn.attr('disabled', 'disabled');
				}


				if (variant) {
					_._updateButtonText($button, 'NoStock', variant);
					if($('#quick-buy-modal').length === 0) _._updateButtonText($topBtn, 'NoStock', variant);
				} else {
					_._updateButtonText($button, 'NoVariant', variant);
					if($('#quick-buy-modal').length === 0) _._updateButtonText($topBtn, 'NoVariant', variant);
				}
			}
		};

		_.updateContainerStatusClasses = function (variant, $container) {
			$container.toggleClass('variant-status--unavailable', !variant.available);
			$container.toggleClass('variant-status--backorder', variant.available && variant.inventory_management && _._getVariantOptionElement(variant, $container).data('stock') == 'out');
		};

		_.updateVariantOptionStatusClasses = function (variant, $container) {
			var productData = _.getProductData($container); //For the given array of option values, find variants which share the same options
			var _ql_all_handels_variants = JSON.parse($container.parents('.section-product-template').find('#_ql_all_handels_variants').html());

			function getMatchingVariants(optionValues) {
				// console.log(`Finding variants with option values: ${optionValues}`);
				var tempVariants = productData.variants;
				var matchingVariants = tempVariants.filter(function (thisVariant) {
					var variantMatches = true;

					for (var j = 0; j < optionValues.length; j++) {
						if (thisVariant.options[j] !== optionValues[j]) {
							variantMatches = false;
							break;
						}
					}

					return variantMatches;
				});
				return matchingVariants;
			} //Returns an object of all the possible values for the given option with each option set to false


			function getAllValuesForOption(i) {
				var allOptionValues = {};

				for (var l = 0; l < productData.variants.length; l++) {
					var value = productData.variants[l].options[i];

					if (value) {
						allOptionValues[value] = false;
					}
				}

				return allOptionValues;
			}

			if (variant === false) {
				//The variant is unavailable, fabricate variant options based on the current selection
				variant = {
					options: []
				};
				$container.find('.selector-wrapper a.active[data-value]').each(function () {
					variant.options.push($(this).data('value'));
				});
			}

			if (variant && variant.options && variant.options.length > 1) {

				function _ql_getCurrentOptionByName(name) {
					var current_option = '';
					var other_options = [];
					var this_option = '';
					var arr_options = productData.options;

					var len = arr_options.length;

					for (var i = 0; i < len; i++) {
						this_option = 'option' + (i + 1);

						if (arr_options[i] == name || arr_options[i].name == name) {
							current_option = this_option;
							continue;
						}

						other_options.push(this_option);
					}

					if (len < 2) other_options.push('option2');
					if (len < 3) other_options.push('option3');

					return [current_option, other_options];
				}

				function _ql_setColorHref(vid, obj) {
					if (!vid || !obj) return 1;

					var url = obj.getAttribute('href');
					if (!url || url == '#') return 1;

					var arr_url = url.split('?variant=');

					obj.setAttribute('href', arr_url[0] + '?variant=' + vid);
				}

				// 判断选中的options组合是否有库存
				function _ql_set_availability(current_variant, current_option, other_options, arr_variants, element) {
					// 添加option1, option2, option3这三个属性
					// 当前选中的是不存在的组合，所以variant不存在，对应的option1，2，3属性也不存在
					if (typeof (current_variant['option1']) == "undefined" || current_variant['option1'] == "") {

						for (let i = 0; i < current_variant.options.length; i++) {
							let value = current_variant.options[i]
							if (i == 0) {
								let this_value = value;
								if (value.split('_ql_').length > 2) {
									this_value = value.split('_ql_')[1];
								}
								current_variant['option' + (i + 1)] = this_value;
							} else {
								current_variant['option' + (i + 1)] = value;
							}
						}
					}

					var available = false;
					var color_sold_out = true;

					// var arr_variants = [];
					// if ($('#quick-buy-modal').length > 0 && typeof _ql_all_handels_variants_quick !== 'undefined') {
					// 	arr_variants = _ql_all_handels_variants_quick;
					// } else if ($('#quick-buy-modal').length == 0 && typeof (_ql_all_handels_variants) !== 'undefined') {
					// 	arr_variants = _ql_all_handels_variants;
					// } else if ($('.section-featured-product').length > 0 && typeof _ql_all_handels_variants_featured !== 'undefined') {
					// 	arr_variants = _ql_all_handels_variants_featured;
					// }
					// else {
					// 	arr_variants = productData.variants;
					// }

					arr_variants.forEach(function (this_variant) {
						if (this_variant[current_option] != element.getAttribute('data-value')) return;

						// if (this_variant[other_options[0]] != current_variant[other_options[0]]) return;
						// if (this_variant[other_options[1]] != current_variant[other_options[1]]) return;

						if (current_option == 'option1' && this_variant.available) color_sold_out = false;

						if(this_variant[other_options[0]] == current_variant[other_options[0]] && this_variant[other_options[1]] == current_variant[other_options[1]]){
							if (current_option == 'option1') _ql_setColorHref(this_variant['id'], element);

							if (!this_variant.available) return;

							available = true;
						}
						
					});

					if (available) {
						element.classList.remove("unavailable");
					} else {
						element.classList.add("unavailable");
					}

					if(current_option == 'option1' && color_sold_out){
						element.parentNode.classList.add("hidden-switch");
					}else{
						element.parentNode.classList.remove("hidden-switch");
					}
				}

				// 指定唯一窗口的option父盒子
				$container.find('.option-selectors .selector-wrapper').each(function() {

					var type = this.getAttribute('data-option-name');
					if (!type) return 0;

					var this_optionName = this.getAttribute('data-option-name');
					var _qlres = _ql_getCurrentOptionByName(this_optionName);
					var current_option = _qlres[0];
					var other_options = _qlres[1];
					var that = this;

					var arr_variants = [];
					if ($('#quick-buy-modal').length > 0 && typeof _ql_all_handels_variants_quick !== 'undefined') {
						arr_variants = _ql_all_handels_variants_quick;
					} else if ($('#quick-buy-modal').length == 0 && typeof (_ql_all_handels_variants) !== 'undefined') {
						arr_variants = _ql_all_handels_variants;
					} else if ($('.section-featured-product').length > 0 && typeof _ql_all_handels_variants_featured !== 'undefined') {
						arr_variants = _ql_all_handels_variants_featured;
					}
					else {
						arr_variants = productData.variants;
					}
					
					$(that).find('.clickyboxes a').each(function() {
						_ql_set_availability(variant, current_option, other_options, arr_variants, this);
					});
				});

			}
		};

		_.initProductOptions = function ($productForm) {
			if ($productForm.hasClass('theme-init')) return;
			var productData = _.getProductData($productForm);
			const $parent = $productForm.parents('.section-product-template');
			var _ql_tending_obj = $parent.find('#_ql_tending_obj').length ? 
								JSON.parse($parent.find('#_ql_tending_obj').html()) : [];
			var _ql_all_subtitle_data = $parent.find('#_ql_all_subtitle_data').length ?
										JSON.parse($parent.find('#_ql_all_subtitle_data').html()) : [];
			if(window.all_subtitle_data == undefined ) window.all_subtitle_data = {};
			_ql_all_subtitle_data.map((item) => {
				const arr_temp = item.split("__ql__");
				if(arr_temp.size < 2) return;
				window.all_subtitle_data[arr_temp[0]] = arr_temp[1];
			});

			$productForm.addClass('theme-init'); // init option selectors

			// 绑定顶部加购弹窗 加购按钮的点击事件
			$('#ql-selected-variant-info .actios button').on('click', function() {
				$('.product-detail__form input[type=submit], .product-detail__form button[type=submit]').submit();
			});

			//初始化榜单: 只有带参时，才需要修改 (ql20250201)
			if (_ql_tending_obj && typeof ql_tending != "undefined" && typeof _ql_tending_obj != "undefined") {
				let t_h = $productForm.find(_.selectors.multiOption).find('select').eq(0).find('option:selected').attr('ql-data-handle');
				const obj_tending = _ql_tending_obj.filter((item) => item.handle == t_h);
				let topObj;
				if (!obj_tending) {
					obj_tending = [];
					$('.ql-trending-rank').css('display', 'none');
				}
				for (let i = 0; ql_tending && i < obj_tending.length; i++) {  //带参
					let tobj = obj_tending[i];
					if (tobj.page != ql_tending) continue;
					topObj = tobj;
					break;
				}

				if (topObj && topObj.handle) {
					let t_top = topObj.top <= 9 ? '0' + topObj.top : topObj.top;
					$('.ql-trending-rank').css('display', 'block');
					$('.ql-trending-rank>a').attr('href', '/pages/' + topObj.page);
					$('.ql-trending-rank p>span').text(topObj.title);
					$('.ql-trending-rank .ql-trending-content .ql-trending-top').text("TOP " + t_top);
				}
			}

			// ql-add 滑动或点击时, 显示折扣按钮
			if(!window._usfShowDiscountPrice){
				_.qlShowMbDiscountPrice($productForm.find('.ql_price-and-discount .price-area'),$productForm.find('.ql_discount-price--click__mb'),$productForm.find('.ql_discount-price--click__pc')[0]);
				_.qlShowPcDiscountPrice($productForm.find('.ql_price-and-review .price-area'),$productForm.find('.ql_discount-price--click__pc'),$productForm.find('.ql_discount-price--click__mb')[0]);
			}
			


			$productForm.find(_.selectors.multiOption).on('change.themeProductOptions', 'select', function () {
				var selectedOptions = [];
				var ql_this_handle = $(this).closest(_.selectors.multiOption).find('select').eq(0).find('option:selected').attr('ql-data-handle');

				// 拿到当前选定的options值 （颜色+尺码）
				$(this).closest(_.selectors.multiOption).find('select[ql-swatch-type]').each(function () {
					selectedOptions.push($(this).val());
				}); // find variant

				// 非当前product的情况下
				if (ql_this_handle && productData.handle !== ql_this_handle) {

					// 折扣倒计时
					var all_discount = document.querySelectorAll('discount-countdown, .ql_mb-discount-text-box, .ql_mb-discount-countdown-box');
					for (let i = 0; i < all_discount.length; i++) {
						all_discount[i].style.display = 'none';
					}
					var all_target_discount = document.querySelectorAll(`discount-countdown[data-d-handle="${ql_this_handle}"], .ql_mb-discount-text-box[data-d-handle="${ql_this_handle}"], .ql_mb-discount-countdown-box[data-d-handle="${ql_this_handle}"]`);
					for (let i = 0; i < all_target_discount.length; i++) {
						if(!all_target_discount[i] || all_target_discount[i] == undefined) continue;
						if(all_target_discount[i].classList.contains('ql_mb-discount-text-box'))
							all_target_discount[i].style.display = 'inline-block';
						else
							all_target_discount[i].style.display = 'block';
					}


					// 亚马逊跳转链接
					var all_amazon_btn = document.querySelectorAll('.ql-discount-amazon-btn');
					for (let i = 0; i < all_amazon_btn.length; i++) {
						all_amazon_btn[i].style.display = 'none';
					}
					var targetBtn = document.querySelector(`.ql-discount-amazon-btn[data-d-handle="${ql_this_handle}"]`);
					targetBtn && (targetBtn.style.display = 'block');

					// trending 榜单: 货号切换时 (ql20250201)
					if (_ql_tending_obj != undefined) {
						let obj_tending = _ql_tending_obj.filter((item) => item.handle == ql_this_handle);
						let topObj, top = 21;
						if (!obj_tending) {
							obj_tending = [];
							$('.ql-trending-rank').css('display', 'none');
						}

						if (typeof ql_tending != "undefined") {
							for (let i = 0; ql_tending && i < obj_tending.length; i++) {  //带参
								let tobj = obj_tending[i];
								if (tobj.page != ql_tending) continue;
								topObj = tobj;
								break;
							}
						}

						if (!topObj) {
							for (let i = 0; i < obj_tending.length; i++) {  //不带惨
								let tobj = obj_tending[i];
								if (tobj.top < top) {
									top = tobj.top;
									topObj = tobj;
								}
							}
						}

						if (topObj && topObj.handle) {
							let t_top = topObj.top <= 9 ? '0' + topObj.top : topObj.top;
							$('.ql-trending-rank').css('display', 'block');
							$('.ql-trending-rank>a').attr('href', '/pages/' + topObj.page);
							$('.ql-trending-rank p>span').text(topObj.title);
							$('.ql-trending-rank .ql-trending-content .ql-trending-top').text("TOP " + t_top);
						} else {
							$('.ql-trending-rank').css('display', 'none');
						}
					}


					$.ajaxSettings.async = false;
					jQuery.getJSON(window.Shopify.routes.root + 'products/' + ql_this_handle + '.js', function (product) {
						if ($('#quick-buy-modal').length == 0) window.history.replaceState({}, '', ql_this_handle);
						productData = product;
						$productForm.data("product-id", productData.id);
						$productForm.attr('data-product-id', productData.id)
						$productForm.find(".theme-gallery").attr('data-product-id', productData.id);
						theme.productData[product.id] = product;
						if ($('#quick-buy-modal').length === 0) $('#ql-selected-variant-info h3').text(product.title);

						var variant = false;
						for (var i = 0; i < productData.variants.length; i++) {
							var v = productData.variants[i];
							var matchCount = 0;

							for (var j = 0; j < selectedOptions.length; j++) {
								if (v.options[j] == selectedOptions[j]) {
									matchCount++;
								}
							}

							if (matchCount == selectedOptions.length) {
								variant = v;
								break;
							}
						} // trigger change


						if (variant) {
							//加入购物车的select
							$productForm.find(_.selectors.variantIdInputs).val(variant.id);
						} // a jQuery event may not be picked up by all listeners

						//标题
						$('.product-area__details__title')?.text(product.title);

						// 副标题
						const subtitle = window.all_subtitle_data[product.handle];
						if(subtitle !== undefined ){
							$productForm.find('.product-area__subtitle')?.show().text(subtitle);
						}
						else $productForm.find('.product-area__subtitle')?.hide();


						//产品详情
						$('.cc-tabs__tab__panel[data-show-description="true"]')?.html(product.description);


						$productForm.find(_.selectors.variantIdInputs).each(function () {
							this.dispatchEvent(new CustomEvent('change', {
								bubbles: true,
								cancelable: false,
								detail: variant
							}));
						});
					})
					$.ajaxSettings.async = true;
					return;
				}

				// find current selected variant  【范围】 current product
				var variant = false;
				for (var i = 0; i < productData.variants.length; i++) {
					var v = productData.variants[i];
					var matchCount = 0;

					for (var j = 0; j < selectedOptions.length; j++) {
						if (v.options[j] == selectedOptions[j]) {
							matchCount++;
						}
					}

					if (matchCount == selectedOptions.length) {
						variant = v;
						break;
					}
				} // trigger change


				if (variant) {
					// 加入购物车的select
					$productForm.find(_.selectors.variantIdInputs).val(variant.id);
				} // a jQuery event may not be picked up by all listeners


				$productForm.find(_.selectors.variantIdInputs).each(function () {
					this.dispatchEvent(new CustomEvent('change', {
						bubbles: true,
						cancelable: false,
						detail: variant
					}));
				});
			});

			// init variant ids
			$productForm.find(_.selectors.variantIdInputs).each(function () {
				// change state for original dropdown
				$(this).on('change.themeProductOptions firstrun.themeProductOptions', function (e) {
					if ($(this).is('input[type=radio]:not(:checked)')) {
						return; // handle radios - only update for checked
					}

					var variant = e.detail,
					val = $(this).val() ?? $(this).find('option[selected]').attr('value');
					if (!variant || typeof variant == undefined) {
						
						for (var i = 0; i < productData.variants.length; i++) {
							if (productData.variants[i].id == val) {
								variant = productData.variants[i];
							}
						}
					}

					var $container = $(this).closest(_.selectors.container); // string overrides

					var $addToCart = $container.find(_.selectors.submitButton).filter('[data-add-to-cart-text]');

					if ($addToCart.length) {
						_.strings.buttonDefault = $addToCart.data('add-to-cart-text');
					}

					// 更新顶部加购弹窗的媒体图片和选中组合
					if (variant && $('#quick-buy-modal').length === 0) {
						$('#ql-selected-variant-info.site-control .variant-info img').attr('src', variant.featured_image ? variant.featured_image.src : '#');
						let optionsEl = $('#ql-selected-variant-info .actios .option-name');
						for (let i = 0; i < optionsEl.length; i++) {
							optionsEl.eq(i).find('span').text(variant.options[i]);
						}
					}

					// quick view 切换颜色时，将媒体图归为到第一个
					if ($('#quick-buy-modal').length > 0) {
						$('#quick-buy-modal .theme-images.swiper-wrapper').css('transform', 'translate(0px)');
					}

					var discount_value = val && $(this).find(`option[value="${val}"]`).attr('data-discount');
					var product_handle = val && $(this).find(`option[value="${val}"]`).attr('data-handle');
					discount_value && variant && ((variant.qlDiscount = Number(discount_value)), (variant.productHandle = product_handle)) ;

					// update price
					_.updatePrice(variant, $container);

					// update buttons
					_.updateButtons(variant, $container);


					// emit an event to broadcast the variant update
					$(window).trigger('cc-variant-updated', {
						variant: variant,
						product: productData
					});

					// variant images 选中的variant 对应的 展示图
					if (variant && variant.featured_media) {
						$container.find(_.selectors.gallery).trigger('variantImageSelected', variant);
					}


					// extra details
					_.updateBarcode(variant, $container);

					_.updateSku(variant, $container);

					_.updateInventoryNotice(variant, $container); //_.updateTransferNotice(variant, $container);


					_.updateBackorder(variant, $container);

					_.updateContainerStatusClasses(variant, $container);

					// 改变尺寸时，判断其他option的库存状态
					if ($productForm.find('[data-show-realtime-availability="true"]').length > 0) {
						_.updateVariantOptionStatusClasses(variant, $productForm);
					} // variant urls


					if ($('#quick-buy-modal').length == 0 && $productForm.data('enable-history-state') && e.type == 'change') {
						_.addVariantUrlToHistory(variant);
					} // notify quickbuy of content change


					$productForm.find('.quickbuy-container').trigger('changedsize'); // allow other things to hook on

					$productForm.trigger('variantChanged', variant);
				}); // first-run

				$(this).trigger('firstrun');

				// 当Sale和Exclusive颜色组的所有颜色都没库存时，隐藏整个组
				$productForm.find('.ql-color-group-list').each(function(){
					const colorName = $(this).attr('ql-data');
					if(colorName.toLowerCase() !== 'sale' && colorName.toLowerCase() !== 'exclusive') return;
					const hasStockSwatch = $(this).find('ul.clickyboxes li:not(.hidden-switch)');
					if(hasStockSwatch.length == 0) $(this).addClass('hidden');
				});
			}); // ajax

			theme.applyAjaxToProductForm($productForm);
		};

		_.unloadProductOptions = function ($productForm) {
			$productForm.removeClass('theme-init').each(function () {
				$(this).trigger('unloading').off('.themeProductOptions');
				$(this).find(_.selectors.multiOption).off('.themeProductOptions');
				theme.removeAjaxFromProductForm($productForm);
			});
		};
	}();
	;

	theme.addControlPaddingToModal = function () {
		$('.theme-modal.reveal > .inner').css('padding-top', theme.Nav().bar.height());
	}; // Maintain padding at the top of the body to reserve space


	theme.updateBodyPadding = function () {
		$('body').css('padding-top', Math.round(theme.Nav().bar.height()));
    	$('.custom--filtering-box')?.css('top', Math.floor(theme.Nav().bar.navHeight()));
	};

	theme.assessTopSectionPadding = function () {
		var $topBlogSection = $('#page-content .shopify-section:first-child.section-featured-blog .slideshow-blog');

		if ($topBlogSection.length) {
			$topBlogSection.addClass('slideshow-blog--top');
			var nav = theme.Nav();

			if ($topBlogSection.find('.slideshow-blog__title').length) {
				$topBlogSection.find('.slideshow-blog__title').css('top', nav.bar.height());
			}

			if ($topBlogSection.find('.slideshow-blog__view-all').length) {
				$topBlogSection.find('.slideshow-blog__view-all').css('top', nav.bar.height());
			}
		}
	};

	theme.allowRTEFullWidthImages = function (container) {
		$('.rte--allow-full-width-images p > img, .rte--allow-full-width-images div > img', container).each(function () {
			if ($(this).siblings().length == 0) {
				$(this).unwrap().wrap('<div class="no-side-pad">');
			}
		});
		$('.rte--allow-full-width-images p > a > img, .rte--allow-full-width-images div > a > img', container).each(function () {
			if ($(this).siblings().length == 0 && $(this).parent().siblings().length == 0) {
				$(this).parent().unwrap().wrap('<div class="no-side-pad">');
			}
		});
	};

	theme.browserHas3DTransforms = function () {
		var el = document.createElement('p'),
			has3d,
			transforms = {
				'webkitTransform': '-webkit-transform',
				'OTransform': '-o-transform',
				'msTransform': '-ms-transform',
				'MozTransform': '-moz-transform',
				'transform': 'transform'
			}; // Add it to the body to get the computed style.

		document.body.insertBefore(el, null);

		for (var t in transforms) {
			if (el.style[t] !== undefined) {
				el.style[t] = "translate3d(1px,1px,1px)";
				has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
			}
		}

		document.body.removeChild(el);
		return has3d !== undefined && has3d.length > 0 && has3d !== "none";
	};

	if (theme.browserHas3DTransforms()) {
		$('html').addClass('supports-transforms');
	}

	theme.namespaceFromSection = function (container) {
		return ['.', $(container).data('section-type'), $(container).data('section-id')].join('');
	}; //Try and trigger the reviews stuff to render, but fail silently


	theme.tryRefreshProductReviews = function () {
		if (window.SPR) {
			try {
				SPR.initRatingHandler();
				SPR.initDomEls();
				SPR.loadProducts();
				SPR.loadBadges();
			} catch (err) { }
		}
	};

	theme.inlineVideos = {
		init: function init(target) {
			$('.section-background-video--inline', target).each(function () {
				theme.VideoManager.onSectionLoad($(this)[0]);
				$(this).addClass('cc-init');
			});
		},
		destroy: function destroy(target) {
			$('.section-background-video--inline', target).each(function () {
				theme.VideoManager.onSectionUnload($(this)[0]);
				$(this).removeClass('cc-init');
			});
		}
	}; //Load shopify payments button

	theme.initShopifyPaymentButtons = function ($elem) {
		if (Shopify.PaymentButton && $elem.find('.shopify-payment-button').length) {
			// resize after loading extra payment buttons
			var _f = null;

			_f = function f() {
				document.removeEventListener('shopify:payment_button:loaded', _f);
				$elem.trigger('changedsize');
			};

			document.addEventListener('shopify:payment_button:loaded', _f);
			Shopify.PaymentButton.init();
		}
	}; //Initialise any components in the passed element


	theme.initComponents = function ($elem) {
		var $components = $elem.find("[data-components]");

		if ($components.length) {
			//Init each component
			var components = $components.data('components').split(',');
			components.forEach(function (component) {
				$(document).trigger('cc:component:load', [component, $elem[0]]);
			});
		}
	} //Keep elements full height where appropriate


	jQuery(function ($) {
		// 邮件联系客服 (ql20240701)
		$(document).on('click', '#nebula_div_btn', function () {
			$('body').addClass('full-screen-style');
			document.querySelector('.section-page-dialog')?.classList.add('ql_pop-open');
			$('#ql-contact-us').css('--top', theme.Nav().bar.height() + 'px');
		});
		$(document).on('click', '#nebula_div_btn--close, #ql-contact-us .contact-us--close', function () {
			$('body').removeClass('full-screen-style');
			document.querySelector('.section-page-dialog')?.classList.remove('ql_pop-open');
		});


		// PC: 快速加购
		$(document).on('click', '[data-cc-quick-buy]', function () {
			var nav = theme.Nav();
			var productUrl = $(this).attr('href'); // Cancel current request if one exists

			if (theme.currentQuickbuyRequest) {
				theme.currentQuickbuyRequest.abort();
			}

			// quick view 弹窗初始框架 ，并插入到body标签中
			showThemeModal("<div class=\"theme-modal theme-modal--fullscreen theme-modal--quickbuy -light\" id=\"quick-buy-modal\" role=\"dialog\" aria-modal=\"true\"/>\n                        <div class=\"theme-modal__loading\">".concat(theme.icons.loading, "</div>\n                    </div>"), 'quick-buy', null); // load in content

			var ajaxUrl = productUrl; // ajaxUrl += ajaxUrl.indexOf('?') >= 0 ? '&view=ajax' : '?view=ajax';

			theme.currentQuickbuyRequest = $.get(ajaxUrl, function (response) {
				var $quickbuyModal = $('#quick-buy-modal');
				// 将响应的内容插入到quick buy弹窗内
				var $productDetail = $('<div>' + response + '</div>').find('.section-product-template');
				var $section = $productDetail.find('[data-section-type="product-template"]')[0]; //Prepare the html
				$quickbuyModal.find('.theme-modal__loading').replaceWith($productDetail); //Load the section etc

				theme.initAnimateOnScroll(); //Init the product template section

				theme.ProductTemplateSection.onSectionLoad($section, true); //Initialise any components

				theme.initComponents($quickbuyModal); //Load product reviews

				theme.tryRefreshProductReviews(); //Load shopify payments button

				theme.initShopifyPaymentButtons($quickbuyModal);
				$(window).one('ccModalClosing', function () {
					theme.ProductTemplateSection.onSectionUnload($section, true);
				});

				if ($('#quick-buy-modal').length > 0) {

					// swiper-button-prev
					$('#quick-buy-modal .swiper-button-prev').on('click', function (event) {
						event.preventDefault();
						var numOfShowPic = $('#quick-buy-modal .product-area .product-area__media .theme-img[aria-hidden=false]').length;
						var perPicWidth = $('#quick-buy-modal .theme-images').innerWidth();
						var picWidth = perPicWidth * (numOfShowPic - 1);
						var currTranslate = $('#quick-buy-modal .theme-images.swiper-wrapper').css('transform').split(/[()]/)[1];
						var posx = currTranslate.split(',')[4]

						var nextTranslate = Number(posx) + perPicWidth;
						if (nextTranslate > 0) {
							nextTranslate = -picWidth;
						}

						$('#quick-buy-modal .theme-images.swiper-wrapper').css('transform', 'translate(' + nextTranslate + 'px)');
					});
					// swiper-button-next
					$('#quick-buy-modal .swiper-button-next').on('click', function (event) {
						event.preventDefault();
						var numOfShowPic = $('#quick-buy-modal .product-area .product-area__media .theme-img[aria-hidden=false]').length;
						var perPicWidth = $('#quick-buy-modal .theme-images').innerWidth();
						var picWidth = perPicWidth * (numOfShowPic - 1);
						var currTranslate = $('#quick-buy-modal .theme-images.swiper-wrapper').css('transform').split(/[()]/)[1];
						var posx = currTranslate.split(',')[4]
						var nextTranslate = posx - perPicWidth;
						if (nextTranslate < -picWidth) {
							nextTranslate = 0;
						}
						$('#quick-buy-modal .theme-images.swiper-wrapper').css('transform', 'translate(' + nextTranslate + 'px)');
					})
					$('#quick-buy-modal .section-product-template').css('--top', Math.round(theme.Nav().bar.navHeight())  + 'px');
				}
			}).always(function () {
				theme.currentQuickbuyRequest = false;
			});
			return false;
		});

		

	});


	var ProductBlockInstance = /*#__PURE__*/function () {
		"use strict";

		function ProductBlockInstance(container) {
			_classCallCheck(this, ProductBlockInstance);

			this.productBlock = container;
			this.productBlockImageContainer = this.productBlock.querySelector('.image');
			this.imageContainer = this.productBlock.querySelector('.image-inner');
			this.swatchesContainer = this.productBlock.querySelector('.cc-swatches');
			this.slideDuration = 1000;
			this.swatchImagesPreloaded = false;
			this.imageSliderLoaded = false;
			this.widths = [460, 540, 720, 900, 1080, 1296, 1512, 1728, 2048];
			this.imageWidth;
			this.hoverTimeout;
			this.preloadedImages = [];
			this.swatches = [];
			this.bindEvents();

			if (this.productBlock.querySelector('[data-section-type="background-video"]')) {
				this.initImageSlider();
			}
		}
		/**
		 * Shows the next image in the product block
		 */


		_createClass(ProductBlockInstance, [{
			key: "showNextSlideImage",
			value: function showNextSlideImage() {
				var _this11 = this;

				this.hoverTimeout = setTimeout(function () {
					var slides = _this11.imageContainer.querySelectorAll('.product-block--slide');

					if (slides && slides.length > 1) {
						if (!_this11.imageContainer.querySelector('.product-block--slide.-in')) {
							_this11.imageContainer.querySelector('.image__first').classList.add('-out');

							slides[1].classList.add('-in');
						} else {
							for (var _i5 = 0; _i5 < slides.length; _i5++) {
								//Trigger the next one to be visible
								if (slides[_i5].classList.contains('-in')) {
									slides[_i5].classList.remove('-in');

									if (_i5 === slides.length - 1) {
										//If this is the last slide, loop round
										_this11.destroyImageSliderLoadingBar();

										slides[0].classList.add('-in');

										_this11.initImageSliderLoadingBar();
									} else {
										//Show the next image
										slides[_i5 + 1].classList.add('-in');
									}

									break;
								}
							}
						}
					}

					_this11.showNextSlideImage();
				}, this.slideDuration);
			}
			/**
			 * Show a specific slide with the passed image
			 * @param imageUrl
			 */

		}, {
			key: "showSpecificSlideImage",
			value: function showSpecificSlideImage(imageUrl) {
				var imageUrlStart = imageUrl.substring(0, imageUrl.lastIndexOf('_'));
				var nextSlide = this.imageContainer.querySelector(".product-block--slide[src^=\"".concat(imageUrlStart, "\"]"));

				if (nextSlide) {
					var currentSlide = this.imageContainer.querySelector(".product-block--slide.-in");

					if (currentSlide) {
						currentSlide.classList.remove('-in');
					}

					this.imageContainer.querySelector('.image__first').classList.add('-out');
					nextSlide.classList.add('-in');
				} else {
					console.warn('No next slide for ', imageUrlStart);
				}
			}
			/**
			 * Preload an image
			 * @param imageUrl
			 */

		}, {
			key: "preloadImage",
			value: function preloadImage(imageUrl) {
				if (!this.preloadedImages.includes(imageUrl)) {
					var imageElem = new Image();
					imageElem.src = imageUrl;
					this.preloadedImages.push(imageUrl);
				}
			}
			/**
			 * Resolves the image url for the passed placeholder image url
			 * @param url
			 * @returns {*}
			 */

		}, {
			key: "getImageUrl",
			value: function getImageUrl(url) {
				//Up the image width to get a decent quality image for retina
				var imageContainerWidth = theme.device.isRetinaDisplay() ? this.productBlock.clientWidth * 2 : this.productBlock.clientWidth;

				for (var _i6 = 0; _i6 < this.widths.length; _i6++) {
					if (this.widths[_i6] >= imageContainerWidth) {
						this.imageWidth = this.widths[_i6];
						return url.replace('{width}', this.widths[_i6]);
					}
				}
			}
			/**
			 * Initialises the image slider for this product block
			 */

		}, {
			key: "initImageSlider",
			value: function initImageSlider() {
				var _this12 = this;

				if (this.productBlock) {
					var allImages = this.productBlock.dataset.productImages;

					if (allImages && !this.imageSliderLoaded) {
						var allImagesArr = allImages.split(',');
						var sliderHtml = "";
						allImagesArr.forEach(function (image) {
							sliderHtml += "<img class=\"product-block--slide\" tabindex=\"-1\" src=\"".concat(_this12.getImageUrl(image), "\"/>");
						});
						this.imageContainer.innerHTML += sliderHtml;
						this.imageSliderLoaded = true;
					}
				}
			}
			/**
			 * Destroys the image slider
			 */

		}, {
			key: "destroyImageSlider",
			value: function destroyImageSlider() {
				if (this.imageSliderLoaded) {
					var slides = this.imageContainer.querySelectorAll('.product-block--slide');

					if (slides) {
						slides.forEach(function (slide) {
							slide.remove();
						});
					}

					this.imageSliderLoaded = false;
				}
			}
			/**
			 * When the mouse hovers a swatch - replace the main image
			 * @param e
			 */

		}, {
			key: "handleMouseEnterSwatch",
			value: function handleMouseEnterSwatch(e) {
				if (e.target.dataset.variantImage) {
					if (!this.imageSliderLoaded) {
						this.initImageSlider();
					}

					var colorUl = e.target.parentNode.parentNode;
					if(colorUl && colorUl.querySelector('.choosed')) {
						colorUl.querySelector('.choosed').classList.remove('choosed');
					}

					var thisParent = e.target.parentNode;
					thisParent.classList.add('choosed');

					var newUrl = this.getImageUrl(e.target.dataset.variantImage);
					this.showSpecificSlideImage(newUrl);
				}
			}
			/**
			 * Remove focus from the image slider slides
			 * @param e
			 */

		}, {
			key: "handleMouseLeaveSwatch",
			value: function handleMouseLeaveSwatch(e) {
				console.log("Mouse away~");
				// var currentSlide = this.imageContainer.querySelector(".product-block--slide.-in");

				// if (currentSlide) {
				//   currentSlide.classList.remove('-in');
				// }

				// this.imageContainer.querySelector('.image__first').classList.remove('-out');
			}
			/**
			 * On mobile, don't redirect the page when a swatch is clicked
			 * @param e
			 */

		}, {
			key: "handleClickSwatch",
			value: function handleClickSwatch(e) {
				e.preventDefault();
			}
			/**
			 * Preload all swatch images and init the slider on mouseover the product block
			 * @param e
			 */

		}, {
			key: "handleMouseEnterProductBlock",
			value: function handleMouseEnterProductBlock(e) {
				var _this13 = this;

				//Preload swatch images if present
				if (!this.swatchImagesPreloaded) {
					this.productBlock.querySelectorAll('.cc-swatches a').forEach(function (swatch) {
						if (swatch.dataset.variantImage) {
							_this13.preloadImage(_this13.getImageUrl(swatch.dataset.variantImage));
						}
					});
					this.swatchImagesPreloaded = true;
				} //Init the image slider


				if (this.productBlock.dataset.productImages && !this.imageSliderLoaded) {
					if (this.productBlock.classList.contains('all-images')) {
						this.initImageSlider();
					} else {
						setTimeout(this.initImageSlider, 500);
					}
				}
			}
			/**
			 * Show the next image in the slider when hovering over the image
			 * @param e
			 */

		}, {
			key: "handleEnterImageContainer",
			value: function handleEnterImageContainer(e) {
				if (this.productBlock.classList.contains('all-images')) {
					this.showNextSlideImage(); //Init the loading bar

					this.initImageSliderLoadingBar();
				}
			}
			/**
			 * Mouse leaves a product block
			 * @param e
			 */

		}, {
			key: "handleLeaveImageContainer",
			value: function handleLeaveImageContainer(e) {
				clearTimeout(this.hoverTimeout);

				if (this.imageSliderLoaded) {
					var activeSlide = this.imageContainer.querySelector('.product-block--slide.-in');

					if (activeSlide) {
						activeSlide.classList.remove('-in');
						this.imageContainer.querySelector('.image__first').classList.remove('-out');
					}

					this.destroyImageSliderLoadingBar();
				}
			}
			/**
			 * Creates and starts the image slider loading bar
			 */

		}, {
			key: "initImageSliderLoadingBar",
			value: function initImageSliderLoadingBar() {
				var loadingBarAnimateDelay = 100;
				var slides = this.imageContainer.querySelectorAll('.product-block--slide');
				var transitionDuration = slides.length * this.slideDuration - loadingBarAnimateDelay;
				var loadingBar = document.createElement('div');
				loadingBar.classList.add('loading-bar');
				loadingBar.style.transitionDuration = transitionDuration + 'ms';
				this.productBlockImageContainer.append(loadingBar);
				setTimeout(function () {
					loadingBar.classList.add('-in');
				}, loadingBarAnimateDelay);
			}
			/**
			 * Remove the image slider loading bar
			 */

		}, {
			key: "destroyImageSliderLoadingBar",
			value: function destroyImageSliderLoadingBar() {
				var loadingBar = this.productBlockImageContainer.querySelector('.loading-bar');

				if (loadingBar) {
					loadingBar.remove();
				}
			}
			/**
			 * When the window is resized, check if image quality needs updating and if so destroy
			 * the sliders (which re-init when needed)
			 */

		}, {
			key: "handleWindowResize",
			value: function handleWindowResize() {
				if (this.imageWidth && this.productBlock.clientWidth > this.imageWidth) {
					for (var _i7 = 0; _i7 < this.widths.length; _i7++) {
						if (this.widths[_i7] >= this.productBlock.clientWidth && this.widths[_i7] > this.imageWidth) {
							this.destroyImageSlider();
							break;
						}
					}
				}
			}
			/**
			* Bind various listeners
			*/

		}, {
			key: "bindEvents",
			value: function bindEvents() {
				var _this14 = this;

				this.focusSwatchHandler = this.handleMouseEnterSwatch.bind(this);
				this.mouseEnterSwatchHandler = theme.debounce(this.handleMouseEnterSwatch.bind(this), 150);
				// this.mouseLeaveSwatchHandler = theme.debounce(this.handleMouseLeaveSwatch.bind(this), 150);
				this.touchDeviceClickHandler = this.handleClickSwatch.bind(this);
				this.mouseEnterProductBlockHandler = this.handleMouseEnterProductBlock.bind(this);
				this.mouseEnterImageContainerHandler = this.handleEnterImageContainer.bind(this);
				this.mouseLeaveImageContainerHandler = this.handleLeaveImageContainer.bind(this);
				this.windowResizeHandler = theme.debounce(this.handleWindowResize.bind(this));
				this.productBlock.querySelectorAll('.cc-swatches a').forEach(function (swatch) {
					swatch.addEventListener('mouseenter', _this14.mouseEnterSwatchHandler);
					swatch.addEventListener('focus', _this14.focusSwatchHandler);

					_this14.swatches.push(swatch);

					if (theme.device.isTouch()) {
						swatch.addEventListener('click', _this14.touchDeviceClickHandler);
					}
				});

				// if (this.swatchesContainer) {
				//   this.swatchesContainer.addEventListener('mouseleave', this.mouseLeaveSwatchHandler);
				// }

				this.productBlock.addEventListener('mouseenter', this.mouseEnterProductBlockHandler);
				if(this.imageContainer) this.imageContainer.addEventListener('mouseenter', this.mouseEnterImageContainerHandler);
				if(this.imageContainer) this.imageContainer.addEventListener('mouseleave', this.mouseLeaveImageContainerHandler);
				window.addEventListener('resize', this.windowResizeHandler);
			}
			/**
			 * Destroy the listeners
			 */

		}, {
			key: "destroy",
			value: function destroy() {
				var _this15 = this;

				this.swatches.forEach(function (swatch) {
					swatch.removeEventListener('mouseenter', _this15.mouseEnterSwatchHandler);
					swatch.removeEventListener('click', _this15.touchDeviceClickHandler);
				});
				this.productBlock.removeEventListener('mouseenter', this.mouseEnterProductBlockHandler);
				this.productBlock.removeEventListener('mouseenter', this.mouseEnterImageContainerHandler);
				this.productBlock.removeEventListener('mouseleave', this.mouseLeaveImageContainerHandler);
				window.removeEventListener('resize', this.windowResizeHandler);

				// if (this.swatchesContainer) {
				//   this.swatchesContainer.removeEventListener('mouseleave', this.mouseLeaveSwatchHandler);
				// }
			}
		}]);

		return ProductBlockInstance;
	}();

	var ProductBlock = /*#__PURE__*/function (_ccComponent4) {
		"use strict";

		_inherits(ProductBlock, _ccComponent4);

		var _super4 = _createSuper(ProductBlock);

		function ProductBlock() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'product-block';
			var cssSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".cc-".concat(name);

			_classCallCheck(this, ProductBlock);

			return _super4.call(this, name, cssSelector);
		}

		_createClass(ProductBlock, [{
			key: "init",
			value: function init(container) {
				_get(_getPrototypeOf(ProductBlock.prototype), "init", this).call(this, container);

				this.registerInstance(container, new ProductBlockInstance(container));
			}
		}, {
			key: "destroy",
			value: function destroy(container) {
				this.destroyInstance(container);

				_get(_getPrototypeOf(ProductBlock.prototype), "destroy", this).call(this, container);
			}
		}]);

		return ProductBlock;
	}(ccComponent);

	new ProductBlock();
	;
	/*================ Sections ================*/

	theme.HeaderSection = new function () {
		var c;
		var currentScrollTop = 0;
		var default_threshold = 100;

		handleScroll = function handleScroll(nav, positioning, opacity) {
			if (opacity === 'opaque_on_scroll' || opacity === 'opaque_on_scroll_alt') {
				if ($(window).scrollTop() < 100) {
					nav.bar.turnOpaque(false);
				} else {
					nav.bar.turnOpaque(true);
				}
			} else if (opacity !== 'opaque') {
				nav.bar.turnOpaque(false);
			}

			var scrollTop = $(window).scrollTop();

			if ((positioning === 'peek' || nav.bar.isAnnouncementBar() && positioning == "sticky") && scrollTop > 100) {
				currentScrollTop = scrollTop;

				if (positioning != "sticky") {
					if (c < currentScrollTop && scrollTop > default_threshold) {
						nav.bar.hide(true);
					} else if (c > currentScrollTop && !(scrollTop <= 50)) {
						nav.bar.hide(false);
					}
				}

				c = currentScrollTop;
			} else {
				nav.bar.hide(false);
			}

			if (positioning == "sticky" || positioning == "peek") {
				if (scrollTop <= 50) {
					nav.bar.hideAnnouncement(false);
				} else {
					nav.bar.hideAnnouncement(true);
				}
			}
		};

		this.onSectionLoad = function (target) {
			theme.addControlPaddingToModal();
			theme.updateBodyPadding();
			$('body').toggleClass('modal-active', $('.theme-modal.reveal').length > 0);
			$('#page-menu a', target).attr('tabindex', '-1');
			$('#page-menu .main-nav li:has(ul)', target).addClass('has-children');
			$('#page-menu.nav-uses-modal .main-nav>ul>li.has-children > a', target).append('<span class="arr">' + theme.icons.chevronLightRight + '</span>');
			$('#page-menu.nav-uses-modal .main-nav>ul>li.has-children li.has-children > a', target).append('<span class="animated-plus"></span>');
			$('.disclosure', target).each(function () {
				$(this).data('disclosure', new theme.Disclosure($(this)));
			});
			var nav = new theme.Nav();
			var positioning = nav.bar.getPositionSetting();
			var opacity = nav.bar.getOpacitySetting();

			if (opacity === "opaque") {
				$('body').addClass('nav-opaque');
			} else {
				$('body').removeClass('nav-opaque');
			}

			if (positioning === "inline") {
				$('body').addClass('nav-inline');
			} else {
				$('body').removeClass('nav-inline');
			}

			if (nav.bar.isAnnouncementBar()) {
				$('body').addClass('showing-announcement');
			} else {
				$('body').removeClass('showing-announcement');
			}

			if (opacity === 'opaque_on_scroll' || opacity === 'opaque_on_scroll_alt' || positioning === 'peek' || nav.bar.isAnnouncementBar()) {
				currentScrollTop = 0;
				$(window).on('throttled-scroll.nav', function () {
					handleScroll(nav, positioning, opacity);
				});
			}

			$(document).on('click.video-section', '.video-container__play', function () {
				if (theme.viewport.isXs()) {
					nav.bar.fadeOut(true);
				}
			});
			$(document).on('click.video-section', '.video-container__stop', function () {
				if (theme.viewport.isXs()) {
					nav.bar.fadeOut(false);
				}
			}); // Keep the logo width equal to toolbar width

			if (nav.bar.hasInlineLinks() && nav.bar.hasLocalization()) {
				var doNavResizeEvents = function doNavResizeEvents() {
					if (theme.viewport.isXlg() && $toolbarRight.width() > $logo.width()) {
						$logo.css('width', $toolbarRight.outerWidth() - 20 + 'px');
					} else {
						$logo.css('width', '');
					}
				};

				var $logo = $('.logo', target);
				var $toolbarRight = $('.nav-right-side', target);
				$(window).on('debouncedresize.headerSection doNavResizeEvents.headerSection', doNavResizeEvents).trigger('doNavResizeEvents');
			} //Lazy load nav promo images


			setTimeout(function () {
				$('.lazyload--manual', target).removeClass('lazyload--manual').addClass('lazyload');
			}, 5000);
			theme.checkViewportFillers();
			theme.assessAltLogo();
			$(window).trigger('cc-header-updated');
		};

		this.onSectionUnload = function (target) {
			$('.disclosure', target).each(function () {
				$(this).data('disclosure').unload();
			});
			$(window).off('throttled-scroll.nav');
			$(window).off('headerSection');
			$(document).on('click.video-section');
		};
	}();
	theme.SlideshowSection = new function () {
		this.onSectionLoad = function (target) {
			theme.initContentSlider(target);
			$(window).trigger('slideshowfillheight');
			theme.checkViewportFillers();
			theme.assessAltLogo();
			//快速加购小弹窗
			if($(target).find('[data-ajax-add-to-cart="true"]').length > 0) theme.applyAjaxToProductForm($(target).find('[data-ajax-add-to-cart="true"]'));
		};

		this.onSectionUnload = function (target) {
			$('.slick-slider', target).slick('unslick').off('init');
			$(window).off('.slideshowSection');
		};

		this.onBlockSelect = function (target) {
			$(target).closest('.slick-slider').slick('slickGoTo', $(target).data('slick-index')).slick('slickPause');
		};

		this.onBlockDeselect = function (target) {
			$(target).closest('.slick-slider').slick('slickPlay');
		};
	}();
	theme.FooterSection = new function () {
		this.onSectionLoad = function (container) {
			$('.disclosure', container).each(function () {
				$(this).data('disclosure', new theme.Disclosure($(this)));
			});

			$('.section-footer__menu-block .section-footer__title', container).each(function(){
				$(this).on('click', () => {
					const isExpanded = $(this).attr('aria-expanded') == 'true';
					$(this).attr('aria-expanded', !isExpanded);
				})
				
			})

		};

		this.onSectionUnload = function (container) {
			$('.disclosure', container).each(function () {
				$(this).data('disclosure').unload();
			});
		};
	}();
	theme.FeaturedBlogSection = new function () {
		this.onSectionLoad = function (target) {
			if ($('.carousel-blog', target).length) {
				var $swiperCont = $('.swiper-container', target);

				if ($swiperCont.length === 1) {
					theme.initProductSlider($swiperCont, true);
				}
			}

			if ($('.slideshow-blog', target).length) {
				theme.initContentSlider(target, function (slide) {
					$('.slideshow-blog__titles__active', target).removeClass('slideshow-blog__titles__active');
					$("[data-go-to-slide=\"".concat(slide, "\"]"), target).parent().addClass('slideshow-blog__titles__active');
				});
				var $slideshowTitles = $('.slideshow-blog__titles', target);

				if ($('.slideshow[data-title-navigation="true"]', target).length) {
					var checkTitleNavHeight = function checkTitleNavHeight() {
						if (theme.viewport.isSm()) {
							$('.overlay-type .inner', target).css('padding-bottom', $slideshowTitles.height() + 50 + 'px');
						} else {
							$('.overlay-type .inner', target).removeAttr('style');
						}
					};

					checkTitleNavHeight();
					$(window).on('debouncedresize.titleNavHeight', checkTitleNavHeight);
					$('[data-go-to-slide]', target).on('click', function () {
						var slideNum = $(this).data('go-to-slide');
						$('.slideshow', target).slick('slickGoTo', slideNum).slick('slickPause');
						$('.slideshow-blog', target).addClass('slideshow--paused');
						;
						return false;
					});
					$('[data-go-to-slide]:first', target).parent().addClass('slideshow-blog__titles__active');
				}

				$(window).trigger('slideshowfillheight');
			}

			theme.checkViewportFillers();
			theme.assessAltLogo();
		};

		this.onSectionUnload = function (target) {
			$('.slick-slider', target).slick('unslick').off('init');
			$(window).off('debouncedresize.titleNavHeight');
			$('[data-go-to-slide]', target).off('click');
		};
	}();
	theme.ImageWithTextOverlay = new function () {
		var _ = this;

		_.checkTextOverImageHeights = function () {
			$('[data-section-type="image-with-text-overlay"], [data-nested-section-type="image-with-text-overlay"]').each(function () {
				var $imageContainer = $('.rimage-outer-wrapper', this);
				var imageHeight = $('.rimage-wrapper', this).outerHeight();
				var textVerticalPadding = parseInt($('.overlay', this).css('padding-top'));
				var textHeight = $('.overlay__content', this).height() + textVerticalPadding * 2;

				if (textHeight > imageHeight + 2) {
					// +2 for rounding errors
					$imageContainer.css('height', textHeight);
				} else {
					$imageContainer.css('height', '');
				}
			});
		};

		this.onSectionLoad = function (target) {
			$(window).off('.imageWithTextOverlaySection');

			if ($('.overlay__content', target).length) {
				$(_.checkTextOverImageHeights);
				$(window).on('debouncedresize.imageWithTextOverlaySection', _.checkTextOverImageHeights);
			}

			theme.checkViewportFillers();
		};

		this.onSectionUnload = function (target) {
			$(window).off('.imageWithTextOverlaySection');
		};
	}();
	theme.ImageBesideImageSection = new function () {
		var _ = this;

		_.checkTextOverImageHeights = function () {
			$('.image-beside-image__image').each(function () {
				var $imageContainer = $('.rimage-outer-wrapper', this);
				var imageHeight = $('.rimage-wrapper', this).outerHeight();
				var textVerticalPadding = parseInt($('.overlay', this).css('padding-top'));
				var textHeight = $('.overlay__content', this).height() + textVerticalPadding * 2;

				if (textHeight > imageHeight + 2) {
					// +2 for rounding errors
					$imageContainer.css('height', textHeight);
				} else {
					$imageContainer.css('height', '');
				}
			});
		};

		this.onSectionLoad = function (target) {
			$(window).off('.imageBesideImageSection');

			if ($('.overlay__content', target).length) {
				$(_.checkTextOverImageHeights);
				$(window).on('debouncedresize.imageBesideImageSection', _.checkTextOverImageHeights);
			}

			theme.checkViewportFillers();
		};

		this.onSectionUnload = function (target) {
			$(window).off('.imageBesideImageSection');
		};
	}();
	theme.ProductTemplateSection = new function () {
		var nav = theme.Nav();
		var galleries = {};

		// _ql_ 
		this.onSectionLoad = function (target) {
			var isQuickbuy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var sectionUniqueId = new Date().getTime();
			$(target).attr('data-section-id', sectionUniqueId);
			var isFeaturedProduct = $(target).data('is-featured-product') || false; // Init store availability if applicable

			if (!isFeaturedProduct && !isQuickbuy && $('[data-store-availability-container]', target).length) {
				this.storeAvailability = new theme.StoreAvailability($('[data-store-availability-container]', target)[0]);
			} // header assessment first (affects gallery height)


			theme.checkViewportFillers();
			theme.assessAltLogo();

			if (nav.bar.isCurrentlyOpaque() && !isFeaturedProduct && !isQuickbuy) {
				$('body').removeClass('header-section-overlap');
			} // Product page upper gallery


			var $gallery = $('.theme-gallery', target);

			if ($gallery.length > 0) {
				galleries[sectionUniqueId] = new theme.ProductMediaGallery($gallery, $('.theme-gallery-thumb', target), isFeaturedProduct, isQuickbuy, sectionUniqueId);
			}
			var $stickyAddToCart = $('.product-area__add-to-cart-xs', target);
			var stickyAddToCartInitialised = !$stickyAddToCart.length;
			var stickyAddToCartIsUnstuck = false;
			var stickyAddToCartThreshold = $('.section-product-template').outerHeight();
			var $productMedia = $('.product-area__media', target);
			var $productHeader = $('.product-area__details__header', target);
			var $productDetails = $('.product-area__details', target); // Work out the tallest product tab and compensate the height of the details area
			// (for position:sticky to work in this case, it needs a fixed height).

			function resizeProductDetails() {
				if (theme.viewport.isSm()) {
					$productDetails.find('.product-area__details__inner').css('top', nav.bar.height()  + 'px');
					$('.theme-gallery.product-slider').css('top', nav.bar.height()  + 'px');
					$productHeader.css('margin-top', 0); // If the product details is too close to the top (due to the height of the media panel)

					if ($productDetails.offset().top < nav.bar.height() - 1) {
						$productHeader.css('margin-top', nav.bar.height() - 20 + 'px');
					}
				} else {
					if ($('body').hasClass('header-section-overlap') && !nav.bar.isInline()) {
						$productMedia.css('margin-top', nav.bar.height());
						$productHeader.css('margin-top', 0);
					} else {
						$productMedia.css('margin-top', 0);
						$productHeader.css('margin-top', 0);
					}

					if (!stickyAddToCartInitialised && !isQuickbuy) {
						$(window).on('throttled-scroll.sticky-add-to-cart', function () {
							if ($(window).scrollTop() > stickyAddToCartThreshold) {
								if (!stickyAddToCartIsUnstuck) {
									$stickyAddToCart.addClass('-out');
									stickyAddToCartIsUnstuck = true;
								}
							} else {
								if (stickyAddToCartIsUnstuck) {
									$stickyAddToCart.removeClass('-out');
									stickyAddToCartIsUnstuck = false;
								}
							}
						});
						$('.product-area__add-to-cart-xs button', target).on('click', function (e) {
							$('.product-detail__form form:first', target).submit();
						});
						stickyAddToCartInitialised = true;
					}
				}
			}

			if (!isFeaturedProduct) {
				$(window).on("debouncedresizewidth.productDetails".concat(sectionUniqueId), resizeProductDetails);
				$(window).on("cc-header-updated.productDetails".concat(sectionUniqueId), resizeProductDetails);
				$(window).on("shopify:section:reorder.productDetails".concat(sectionUniqueId), resizeProductDetails);
				resizeProductDetails();
			} // Thumb carousels


			if ($('.product-area__details__thumbs').length) {
				$('.carousel-wrapper .carousel:not(.slick-initialized)', target).each(function ($slick) {
					$(this).on('init reInit setPosition', function () {
						var lastSlide = $(this).find('.slick-slide:last');

						if (lastSlide.length > 0) {
							var slideInnerWidth = lastSlide.position().left + lastSlide.outerWidth(true);
							var $carouselWrapper = $(this).parent();
							var carouselWidth = $carouselWrapper.outerWidth(true);

							if (carouselWidth > slideInnerWidth) {
								$(this).find('.slick-next, .slick-prev').addClass('theme-unnecessary').attr('tabindex', '-1');
							} else {
								$(this).find('.slick-next, .slick-prev').removeClass('theme-unnecessary').attr('tabindex', '0');
							}
						}
					}).on('init reInit setPosition', function ($slick) {
						$('.lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload');
						setTimeout(function () {
							$($slick.target).find('.slick-slide a').attr('tabindex', '0');
						});
					}).slick({
						autoplay: false,
						fade: false,
						infinite: false,
						useTransform: true,
						arrows: true,
						dots: false,
						slidesToShow: 4,
						slidesToScroll: 4,
						centerMode: false,
						verticalSwiping: true,
						vertical: true,
						prevArrow: '<button type="button" class="slick-prev" aria-label="' + theme.strings.previous + '">' + theme.icons.chevronDown + '</button>',
						nextArrow: '<button type="button" class="slick-next" aria-label="' + theme.strings.next + '">' + theme.icons.chevronDown + '</button>',
						responsive: [{
							breakpoint: 1100,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						}]
					});
				});
			} // Boxed-options (do before initProductOptions - which applies classes to these boxes)


			theme.convertOptionsToBoxes(target); // Product options

			theme.OptionManager.initProductOptions($(target)); // Visual style of dropdowns
			// Size chart
			$('select:not(.original-selector)').selectReplace().closest('.selector-wrapper').addClass('has-pretty-select');

			$('.size-chart-link', target).on('click', function () {
				$.colorbox({
					inline: true,
					href: '#size-chart-content > .size-chart'
				});
				return false;
			});
			// Keep colour swatches updated
			$(window).on("cc-variant-updated.product-swatches".concat(sectionUniqueId), function (e, args) {
				var $swatchesContainer = $('.selector-wrapper', target);

				if ($swatchesContainer.length) {

					$swatchesContainer.find('.cc-swatches__label').html('');

					$swatchesContainer.find('.active').each(function() {
						var this_active_val = $(this).text(),
							$parent_el = $(this).closest('div');

							$parent_el.find('.cc-swatches__label').html(this_active_val);
								
					});
				}
			}); // Trigger the animations

			theme.initAnimateOnScroll();
			theme.checkViewportFillers();
			theme.tryRefreshProductReviews();
			theme.initShopifyPaymentButtons($(target));
		};

		this.onSectionUnload = function (target, isQuickbuy) {
			var sectionUniqueId = $(target).attr('data-section-id');

			if (!isQuickbuy) {
				$(window).off('throttled-scroll.sticky-add-to-cart');
			}

			$(window).off(".productDetails".concat(sectionUniqueId));
			$(window).off("cc-variant-updated.product-swatches".concat(sectionUniqueId));
			$('.spr-container', target).off('click');
			$('.theme-gallery-thumb', target).off('click');
			$('.carousel-wrapper .carousel', target).off('init reInit setPosition');
			$('.slick-slider', target).slick('unslick');
			$('.size-chart-link', target).off('click');
			$('.product-area__add-to-cart-xs button', target).off('click');
			theme.OptionManager.unloadProductOptions($(target));

			if (galleries[sectionUniqueId]) {
				galleries[sectionUniqueId].destroy();
			} else {
				console.warn('No galleries found');
			}

			if (this.storeAvailability && !isQuickbuy) {
				this.storeAvailability.onSectionUnload();
			}
		};
	}();
	theme.CollectionTemplateSection = new function () {
		this.onSectionLoad = function (container) {
			this.namespace = theme.namespaceFromSection(container);
			this.$container = $(container); // ajax filter & sort

			if (this.$container.data('ajax-filtering')) {
				// ajax load on link click
				this.$container.on('click' + this.namespace, '.pagination a,.active-filter-controls a', this.functions.ajaxLoadLink.bind(this)); // click on the mobile 'show filters' button

				this.$container.on('click' + this.namespace, '[data-show-collection-filter]', this.functions.toggleCollectionFilter.bind(this)); // ajax load form submission

				this.$container.on('change' + this.namespace + ' submit' + this.namespace, '#CollectionFilterForm', theme.debounce(this.functions.ajaxLoadForm.bind(this), 700)); // handle back button

				this.registerEventListener(window, 'popstate', this.functions.ajaxPopState.bind(this));
			} else {
				this.$container.on('change' + this.namespace, '#CollectionFilterForm', this.functions.submitForm);
			}

			if ($('.cc-product-filter', this.$container).length) {
				this.functions.mainStickySideBarTop.call(this);
				$(window).on("debouncedresizewidth.".concat(this.namespace), this.functions.mainStickySideBarTop.bind(this));
				$(window).on("doNavResizeEvents.".concat(this.namespace), this.functions.mainStickySideBarTop.bind(this));
			}

			theme.updateBodyPadding();
			theme.loadInfiniteScroll(container);
			theme.checkViewportFillers();
			theme.assessAltLogo();
			this.functions.refreshSelects();
		};

		this.onSectionUnload = function (container) {
			this.$container.off(this.namespace);
			$(window).off(this.namespace);
			$(document).off(this.namespace);
			theme.unloadInfiniteScroll();
		};

		this.functions = {
			submitForm: function submitForm(e) {
				e.currentTarget.submit();
			},
			toggleCollectionFilter: function toggleCollectionFilter() {
				var $filterBtn = $('[data-show-collection-filter]', this.$container);
				var $productFilter = $('.cc-product-filter', this.$container);
				var nav = theme.Nav();

				if ($productFilter.hasClass('-in')) {
					$filterBtn.text($filterBtn.data('open-text'));
					nav.bar.fadeOut(false);
				} else {
					$filterBtn.text($filterBtn.data('close-text'));
					nav.bar.fadeOut(true);
				}

				$productFilter.toggleClass('-in');
				return false;
			},
			mainStickySideBarTop: function mainStickySideBarTop() {
				if (theme.viewport.isSm()) {
					var nav = theme.Nav();
					$('.cc-product-filter', this.$container).css('top', nav.bar.isInline() ? '-1px' : nav.bar.heightExcludingAnnouncementBar() + 20);
				}
			},
			ajaxLoadLink: function ajaxLoadLink(evt) {
				evt.preventDefault();
				this.functions.ajaxLoadUrl.call(this, $(evt.currentTarget).attr('href'));
			},
			ajaxLoadForm: function ajaxLoadForm(evt) {
				if (evt.type === 'submit') {
					evt.preventDefault();
				}

				var queryVals = [];
				evt.currentTarget.querySelectorAll('input, select').forEach(function (input) {
					if ((input.type !== 'checkbox' && input.type !== 'radio' || input.checked) && // is an active input value
						input.value !== '' // has a value
					) {
						// if no value, check for the default and include
						if (input.value === '' && input.dataset.currentValue) {
							queryVals.push([input.name, encodeURIComponent(input.dataset.currentValue)]);
						} else {
							queryVals.push([input.name, encodeURIComponent(input.value)]);
						}
					}
				});
				evt.currentTarget.querySelectorAll('[data-current-value]').forEach(function (input) {
					input.setAttribute('value', input.dataset.currentValue);
				});
				var data = new FormData(evt.currentTarget);
				var queryString = new URLSearchParams(data).toString();
				this.functions.ajaxLoadUrl.call(this, this.$container.data('collection-url') + '?' + queryString);
			},
			ajaxPopState: function ajaxPopState(event) {
				this.functions.ajaxLoadUrl.call(this, document.location.href);
			},
			initFilterResults: function initFilterResults() {
				theme.loadInfiniteScroll(this.container);
				theme.tryRefreshProductReviews();
				theme.inlineVideos.init(this.container);
				this.functions.mainStickySideBarTop(); // init scroll animations

				theme.initAnimateOnScroll(); // init theme components

				var $components = this.$container.closest('[data-components]');

				if ($components.length) {
					var components = $components.data('components').split(',');
					components.forEach(function (component) {
						$(document).trigger('cc:component:load', [component, $components[0]]);
					}.bind(this));
				}
			},
			refreshSelects: function refreshSelects() {
				$('select:not(.original-selector)', this.$container).selectReplace().closest('.selector-wrapper').addClass('has-pretty-select');
			},
			ajaxLoadUrl: function ajaxLoadUrl(url) {
				var _this = this; // update url history
				var fullUrl = url;

				if (fullUrl.slice(0, 1) === '/') {
					fullUrl = window.location.protocol + '//' + window.location.host + fullUrl;
				} // start fetching URL


				var refreshContainerSelector = '[data-ajax-container]',
					$ajaxContainers = this.$container.find(refreshContainerSelector); // loading state

				$ajaxContainers.addClass('cc-product-filter-container--loading');
				$ajaxContainers.find('.product-list').append("<span class=\"loading\" aria-label=\"".concat(theme.strings.loading, "\">").concat(theme.icons.loading, " </span>"));
				theme.unloadInfiniteScroll(this.$container);
				theme.inlineVideos.destroy(this.$container); // fetch content

				if (this.currentAjaxLoadUrlFetch) {
					this.currentAjaxLoadUrlFetch.abort();
				}

				this.currentAjaxLoadUrlFetch = $.get(url, function (data) {
					this.currentAjaxLoadUrlFetch = null;
					var $newPage = $($.parseHTML(data));
					var newTitleTag = $newPage.filter('title').text().trim();
					document.title = newTitleTag;
					window.history.pushState({
						path: fullUrl
					}, newTitleTag, fullUrl); // save active element

					if (document.activeElement) {
						this.activeElementId = document.activeElement.id;
					} // replace contents


					var $newAjaxContainers = $("<div>".concat(data, "</div>")).find(refreshContainerSelector);
					$newAjaxContainers.each(function (index) {
						var $newAjaxContainer = $(this); // preserve accordion state

						$($ajaxContainers[index]).find('.cc-accordion-item').each(function () {
							var accordionIndex = $(this).closest('.cc-accordion').index();

							if ($(this).hasClass('is-open')) {
								$newAjaxContainer.find(".cc-accordion:nth-child(".concat(accordionIndex + 1, ") .cc-accordion-item")).addClass('is-open').attr('open', '');
							} else {
								$newAjaxContainer.find(".cc-accordion:nth-child(".concat(accordionIndex + 1, ") .cc-accordion-item")).removeClass('is-open').removeAttr('open');
							}
						}); // maintain mobile filter menu state

						if ($('.cc-product-filter', _this.$container).length && $('.cc-product-filter', _this.$container).hasClass('-in')) {
							$newAjaxContainer.find('.cc-product-filter').addClass('-in');
						}

						$($ajaxContainers[index]).html($newAjaxContainer.html());

						_this.functions.refreshSelects();
					}); // init js

					this.functions.initFilterResults.call(this); //Update the mobile 'Close filters' button text

					var $filterSidebar = $('.cc-product-filter', _this.$container);
					var $filterBtn = $('[data-show-collection-filter]', _this.$container);

					if ($filterSidebar.length && $filterSidebar.hasClass('-in')) {
						var buttonText;
						var resultCount = $('.product-list', _this.$container).data('result-count');

						if (resultCount === 1) {
							buttonText = $filterBtn.data('result-count-text-singular').replace("[x]", resultCount);
						} else {
							buttonText = $filterBtn.data('result-count-text').replace("[x]", resultCount);
						}

						$filterBtn.text(buttonText);
					} // remove loading state


					$ajaxContainers.removeClass('cc-product-filter-container--loading'); // restore active element

					if (this.activeElementId) {
						var el = document.getElementById(this.activeElementId);

						if (el) {
							el.focus();
						}
					}

					var $collectionContainer = $('[data-ajax-scroll-to]:first', this.$container);

					if ($(window).scrollTop() - 200 > $collectionContainer.offset().top) {
						theme.viewport.scrollTo($collectionContainer, -1, 1000, 25);
					}
				}.bind(this));
			}
		};
	}();
	theme.ListCollectionsSection = new function () {
		this.onSectionLoad = function (target) { };
	}();
	theme.SearchTemplateSection = new function () {
		this.onSectionLoad = function (target) {
			theme.loadInfiniteScroll(target);
		};

		this.onSectionUnload = function (target) {
			theme.unloadInfiniteScroll();
		};
	}();
	theme.BlogTemplateSection = new function () {
		this.onSectionLoad = function (target) {
			// Visual style of dropdowns
			$('select').selectReplace();
			theme.allowRTEFullWidthImages(target);
		};
	}();
	theme.ArticleTemplateSection = new function () {
		this.onSectionLoad = function (target) {
			theme.checkViewportFillers();
			theme.assessAltLogo();
			theme.allowRTEFullWidthImages(target);
		};
	}();
	theme.CartTemplateSection = new function () {
		this.onSectionLoad = function (target) {
			theme.cartNoteMonitor.load($('#cartform [name="note"]', target)); // terms and conditions checkbox

			if ($('#cartform input#terms', target).length > 0) {
				$(document).on('click.cartTemplateSection', '#cartform [name="checkout"]:submit, .additional-checkout-buttons :submit, .additional-checkout-buttons input[type=image], a[href="/checkout"]', function () {
					if ($('#cartform input#terms:checked').length == 0) {
						alert(theme.strings.cartConfirmation);
						return false;
					}
				});
			}
		};

		this.onSectionUnload = function (target) {
			theme.cartNoteMonitor.unload($('#cartform [name="note"]', target));
			$(document).off('.cartTemplateSection');
		};
	}();
	theme.CollectionListSection = new function () {
		this.onSectionLoad = function (target) {
			var $swiperCont = $('.swiper-container', target);

			if ($swiperCont.length === 1) {
				theme.initProductSlider($swiperCont);
			}
		};
	}();
	theme.FeaturedCollectionSection = new function () {
		this.onSectionLoad = function (target) {
			var $swiperCont = $('.swiper-container', target);

			if ($swiperCont.length === 1) {
				theme.initProductSlider($swiperCont);
			}
		};
	}();
	theme.ProductRecommendations = new function () {
		this.onSectionLoad = function (container) {
			// Look for an element with class 'product-recommendations'
			var productRecommendationsSection = document.querySelector(".product-recommendations");

			if (productRecommendationsSection === null) {
				return;
			} // Create request and submit it using Ajax


			var request = new XMLHttpRequest();
			request.open("GET", productRecommendationsSection.dataset.url, true);

			request.onload = function () {
				if (request.status >= 200 && request.status < 300) {
					var container = document.createElement("div");
					container.innerHTML = request.response;
					productRecommendationsSection.innerHTML = container.querySelector(".product-recommendations").innerHTML;
					theme.initAnimateOnScroll();
					var $swiperCont = $('.section-product-recommendations .swiper-container');

					if ($swiperCont.length === 1) {
						theme.initProductSlider($swiperCont);
						setTimeout(function () {
							theme.tryRefreshProductReviews();
							theme.inlineVideos.init(productRecommendationsSection.parentElement);
							new ProductBlock();
						}, 500);
					} else {
						console.warn('Unable to find .section-product-recommendations');
					}
				}
			};

			request.send();
		};

		this.onSectionUnload = function (container) {
			theme.inlineVideos.destroy(container);
		};
	}();
	theme.GallerySection = new function () {
		this.onSectionLoad = function (container) {
			var $carouselGallery = $('.gallery--mobile-carousel', container);

			if ($carouselGallery.length) {
				var assessCarouselFunction = function assessCarouselFunction() {
					var isCarousel = $carouselGallery.hasClass('slick-slider'),
						shouldShowCarousel = theme.viewport.isXs();

					if (!shouldShowCarousel) {
						$('.lazyload--manual', $carouselGallery).removeClass('lazyload--manual').addClass('lazyload');
					}

					if (isCarousel && !shouldShowCarousel) {
						// Destroy carousel
						// - unload slick
						$carouselGallery.slick('unslick').off('init');
						$carouselGallery.removeAttr('data-transition');
						$carouselGallery.removeClass('slideshow');
						$carouselGallery.find('a, .gallery__item').removeAttr('tabindex').removeAttr('role'); // - re-row items

						var rowLimit = $carouselGallery.data('grid');
						var $currentRow = null;
						$carouselGallery.find('.gallery__item').each(function (index) {
							if (index % rowLimit === 0) {
								$currentRow = $('<div class="gallery__row">').appendTo($carouselGallery);
							}

							$(this).appendTo($currentRow);
						});
					} else if (!isCarousel && shouldShowCarousel) {
						// Create carousel
						$carouselGallery.find('[data-cc-animate]').removeAttr('data-cc-animate'); // - de-row items

						$carouselGallery.find('.gallery__item').appendTo($carouselGallery).addClass('slide');
						$carouselGallery.find('.gallery__row').remove();
						$carouselGallery.attr('data-transition', 'slide');
						$carouselGallery.addClass('slideshow'); // - init carousel

						$carouselGallery.on('init', function () {
							$('.lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload');
						}).slick({
							autoplay: false,
							fade: true,
							speed: 1000,
							infinite: true,
							useTransform: true,
							arrows: false,
							dots: true,
							customPaging: function customPaging(slider, i) {
								return "<button class=\"custom-dot\" type=\"button\" data-role=\"none\" role=\"button\" tabindex=\"0\">" + "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"30px\" height=\"30px\" viewBox=\"0 0 30 30\" xml:space=\"preserve\">" + "<circle class=\"circle-one\" cx=\"15\" cy=\"15\" r=\"13\" />" + "<circle class=\"circle-two\" cx=\"15\" cy=\"15\" r=\"13\" />" + "</svg>" + "</button>";
							}
						}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
							var $outgoingSlide = $(slick.$slides.get(currentSlide));
							$outgoingSlide.addClass('slick--leaving');
						}).on('afterChange', function (event, slick, currentSlide) {
							$(slick.$slides).filter('.slick--leaving').removeClass('slick--leaving');
						});
					}
				};

				assessCarouselFunction();
				$(window).on('debouncedresize.themeSection' + container.id, assessCarouselFunction);
			}
		};

		this.onSectionUnload = function (container) {
			$(window).off('.themeSection' + container.id);
			$('.slick-slider', container).each(function () {
				$(this).slick('unslick').off('init');
			});
		};

		this.onBlockSelect = function (block) {
			$(block).closest('.slick-slider').each(function () {
				$(this).slick('slickGoTo', $(this).data('slick-index')).slick('slickPause');
			});
		};

		this.onBlockDeselect = function (block) {
			$(block).closest('.slick-slider').each(function () {
				$(this).slick('slickPlay');
			});
		};
	}();
	theme.TestimonialsSection = new function () {
		var scrollax;

		this.onSectionLoad = function (container) {
			if (theme.settings.animationEnabledDesktop && theme.viewport.isSm()) {
				scrollax = new Scrollax(window).init();
			}
		};

		this.onSectionUnload = function (container) {
			if (scrollax && scrollax.Scrollax) {
				scrollax.Scrollax('destroy');
			}
		};
	}();


	jQuery(function ($) {
		lazySizesConfig.minSize = 200;
		var initialisedSectionVariants = [];
    	theme.updateBodyPadding();

		// Gallery variant images
		$(document).on('variantImageSelected', '.theme-gallery', function (e, args) {
			var $container = $(this);
			var sectionId = $container.closest('[data-section-id]').data('section-id');

			if ($(this).find('.swiper-container-horizontal').length) {
				var $swiperImgLinks = $('.swiper-container:first .swiper-slide .product-media', this);
				var swiperId = $('.swiper-container:first', this).data('swiper-id');
				var swiper = theme.swipers[swiperId];
				var toMatch = args.featured_media.id;
				var $match = $swiperImgLinks.filter(function () {
					return $(this).data('media-id') == toMatch;
				}).first();

				if ($match.length) {
					setTimeout(function () {
						swiper.update();
						// 点击color swatch时，更新图片
						// swiper.slideTo($match.parent().index(), 1000);
						// swiper.slideTo(0, 1000);
						$container.find('.product-media--active-variant').removeClass('product-media--active-variant');
						$match.closest('.product-media').addClass('product-media--active-variant');
					}, args.eventType === 'firstrun' ? 1500 : 0);
					//Above: If its the first page load, wait 1.5s for media to load
				}
			}
			else if (!$(this).hasClass('featured-product__gallery')) {
				var isFirstSection = $container.closest('.shopify-section').index() === 0;
				if (isFirstSection || initialisedSectionVariants.includes(sectionId)) {
					$(window).trigger('ccScrollToMedia', args.featured_media.id);
				}

				initialisedSectionVariants.push(sectionId);
			}

			//If thumbs, scroll to the active one and add a class to it
			var $thumbSlider = $(this).closest('.shopify-section').find('.product-area__details__thumbs .carousel');

			if ($thumbSlider.length === 1 && ($container.data('scroll-to-variant-media') !== false || theme.viewport.isXs())) {
				var $activeSlide = $thumbSlider.find("[data-media-id=\"".concat(args.featured_media.id, "\"]:first"));
				if ($activeSlide.length) {
					$thumbSlider.find('.thumb-active').removeClass('thumb-active');

					$activeSlide.find('a').addClass('thumb-active');
					$thumbSlider.slick('slickGoTo', $activeSlide.data('slick-index'));
				}
			}
		});
		// Visual style of dropdowns
		$('select:not(.original-selector)').selectReplace().closest('.selector-wrapper').addClass('has-pretty-select');
		// General-purpose lightbox
		$('a[rel=lightbox]').colorbox(); // Galleries (only on large screens)
		if (theme.viewport.isSm()) {
			$('a[rel="gallery"]').colorbox({
				rel: 'gallery'
			});
		}
		// Translations for colorbox
		$.extend($.colorbox.settings, {
			previous: theme.strings.colorBoxPrevious,
			next: theme.strings.colorBoxNext,
			close: theme.icons.close
		});

		// Image-links
		$('.rte a img').closest('a').addClass('contains-img');

		// Check if using correct logo (would be nice to assess on section move/load/unload as well)
		theme.assessAltLogo();

		// On any section reload
		$(document).on('shopify:section:reorder', function (e) {
			theme.checkViewportFillers();
			theme.assessAltLogo();
			theme.updateBodyPadding();
			theme.assessTopSectionPadding();
		});
		$(document).on('shopify:section:load', function (e) {
			// Image-links inside any rte block
			$('.rte a img', e.target).closest('a').addClass('contains-img'); // Feature-sized headers have a little fluff

			if ($('.feature-header', e.target).length) {
				$(window).trigger('assessFeatureHeaders');
			}

			// Init any inline videos
			theme.inlineVideos.init(e.target);
			theme.checkViewportFillers();
			theme.assessAltLogo();
			theme.updateBodyPadding();
			theme.assessTopSectionPadding();
		});
		// end of shopify:section:load
		$(document).on('shopify:section:unload', function (e) {
			// Unload any inline videos
			theme.inlineVideos.destroy(e.target);
			setTimeout(function () {
				theme.checkViewportFillers();
				theme.assessAltLogo();
				theme.updateBodyPadding();
				theme.assessTopSectionPadding();
			}, 0);
		});
		theme.assessTopSectionPadding();
		$(window).on('debouncedresizewidth.assessTopSectionPadding', theme.assessTopSectionPadding); // Slideshow fills viewport

		theme.lastViewportWidth = 0;
		$(window).on('debouncedresize slideshowfillheight', function (e) {
			// if only height changed, don't do anything, to avoid issue with viewport-size-change on mobile-scroll
			if (e.type == 'debouncedresize' && theme.lastViewportWidth == $(window).width()) {
				return;
			}

			var nav = theme.Nav(); // set height of slideshows

			var desiredHeight = $(window).height();

			if (nav.bar.isAnnouncementBar()) {
				desiredHeight -= nav.bar.heightOfAnnouncementBar();
			}

			$('.slideshow.fill-viewport, .slideshow.fill-viewport .slide').css('min-height', desiredHeight); // check for content that must be contained

			$('.slideshow.fill-viewport').each(function () {
				var inner = 0;
				$(this).find('.slide').each(function () {
					var t = 0;
					$('.fill-viewport__contain', this).each(function () {
						t += $(this).outerHeight(true);
					});

					if (inner < t) {
						inner = t;
					}
				});

				if (inner > desiredHeight) {
					$(this).css('min-height', inner);
					$('.slide', this).css('min-height', inner);
				}
			});
			theme.lastViewportWidth = $(window).width(); // bump down any header-overlap areas to cater for announcements

			if ($('body.header-section-overlap').length && nav.bar.isAnnouncementBar()) {
				$('#page-content').css('margin-top', nav.bar.heightOfAnnouncementBar());
			} else {
				$('#page-content').css('margin-top', '');
			}
		}); // Some states are dependent on scroll position

		$(window).on('scroll assessFeatureHeaders', function () {
			var scrollTop = $(window).scrollTop();
			var appearenceBuffer = 60;
			var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
			$('body').toggleClass('scrolled-down', scrollTop > 0);
			theme.assessAltLogo();
			$('.feature-header:not(.feature-header--visible)').filter(function () {
				var offset = $(this).offset().top;
				var height = $(this).outerHeight();
				return offset + height >= scrollTop && offset <= windowBottom;
			}).addClass('feature-header--visible');
		});
		$(function () {
			$(window).trigger('slideshowfillheight');
			$(window).trigger('assessFeatureHeaders');
		}); // Side up and remove

		$.fn.slideUpAndRemove = function () {
			var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
			$(this).each(function () {
				$(this).slideUp(speed, function () {
					$(this).remove();
				});
			});
		}; // Overlay menu nav


		var previousNavRoutes = ['_root'];

		updateNavCtas = function updateNavCtas() {
			var trimmedTitle = previousNavRoutes[previousNavRoutes.length - 1];
			var $ctasToShow = $("#page-menu .nav-ctas__container[data-for-nav-item=\"".concat(trimmedTitle, "\"]:hidden"));

			if ($ctasToShow.length > 0) {
				if ($('#page-menu .nav-ctas__container:visible').length) {
					$('#page-menu .nav-ctas__container:visible').fadeOut(drilldownTransSpeed, function () {
						$ctasToShow.fadeIn(drilldownTransSpeed);
					});
				} else {
					setTimeout(function () {
						$ctasToShow.fadeIn(drilldownTransSpeed);
					}, drilldownTransSpeed);
				}
			} else {
				$('#page-menu .nav-ctas__container:visible').fadeOut(drilldownTransSpeed);
			}
		}; //Drill down


		// 抽屉式菜单
		var drilldownTransSpeed = 250;
		$(document).on('click', '#page-menu.nav-uses-modal .main-nav>ul>li.has-children > a', function () {
			var trimmedTitle = $(this).text().replace(/^\s\s*/, '').replace(/\s\s*$/, '').toLowerCase();
			previousNavRoutes.push(trimmedTitle); //- Links

			var $content = $('<div class="container growth-area"/>').append($(this).siblings('ul').clone().wrap("<menu-stretch class=\"nav-body main-nav growth-area\"/>").parent()); //- Title, in its own menu row, using subnav style for the other links

			  var $menuList = $content.find('.main-nav > ul').wrap('<li/>').parent().wrap('<ul/>').parent();
			
			  if (theme.strings.back.length > 0) {
			    $menuList.prepend("<li class=\"main-nav__back\" data-nav-title=\"".concat(trimmedTitle, "\"><a href=\"#\" data-revert-back><span class=\"arr arr--left\">").concat(theme.icons.chevronLeft, "</span>").concat(trimmedTitle, "</a></li>"));
			  } //Hide current & show new


			  var $containers = $('#page-menu > .inner > .nav-container > .container:not(.inactive)');
			  $containers.addClass('inactive').fadeOut(drilldownTransSpeed, function () {
			    $content.hide().insertAfter($containers.last()).fadeIn(drilldownTransSpeed);
			    $content.closest('.theme-modal').focus(); // add focus for keyboard scrolling
			  });

			updateNavCtas(); //Hide the footer links

			$('#page-menu > .inner > .nav-container > .nav-footer-links').fadeOut(drilldownTransSpeed);
			return false;
		}); //Drill back up

		//客服
		$(document).on('click', '#ql-contact-us .ql-blocks-conten>ul:not(.follow-block)>li>a', function(){
      $('#ql-contact-us .ql-block__show-content').removeClass('success-send');
			const $content = $('<div class="ql_popup-content--show"/>').append($(this).siblings('ul').find('.ql_popup-content > *').clone()); 
			const cHeight = $('#ql-contact-us .ql-blocks-conten').outerHeight();
			$content.appendTo($('#ql-contact-us .ql-block__show-content').empty());
			$('#ql-contact-us .ql-blocks-conten').css('display', 'none');
			$('#ql-contact-us .ql_revert-back').css('display', 'inline-block');
			$('#ql-contact-us .ql-block__show-content').css({'display': 'block', 'height' : cHeight +  'px'});
		});

      $(document).on('click', '#ql-contact-us .show_concat_us', function(){
            $('#ql-contact-us .ql-block__show-content').removeClass('success-send');
			const $content = $('<div class="ql_popup-content--show"/>').append($('#ql-contact-us .ql-block.concat_us-block>li>ul').find('.ql_popup-content > *').clone()); 
			const cHeight = $('#ql-contact-us .ql-blocks-conten').outerHeight();
			$content.appendTo($('#ql-contact-us .ql-block__show-content').empty());
			$('#ql-contact-us .ql-blocks-conten').css('display', 'none');
			$('#ql-contact-us .ql_revert-back').css('display', 'inline-block');
			$('#ql-contact-us .ql-block__show-content').css({'display': 'block', 'height' : cHeight +  'px'});
		});
      
		$('#ql-contact-us .ql_revert-back').on('click', function(){
			
			$('#ql-contact-us .ql_revert-back').css('display', 'none');
			$('#ql-contact-us .ql-block__show-content').css({'display': 'none', 'height' : '0px'});
			$('#ql-contact-us .ql-blocks-conten').css('display', 'block');
		})

		$(document).on('click', '#page-menu.nav-uses-modal a[data-revert-back]', function () {
			previousNavRoutes.pop();
			updateNavCtas();
			$('#page-menu.nav-uses-modal > .inner > .nav-container > .container:not(.inactive)').fadeOutAndRemove(drilldownTransSpeed, function () {
				var $menuToShow = $('#page-menu.nav-uses-modal > .inner > .nav-container > .container.inactive:last');
				$menuToShow.removeClass('inactive').fadeIn(drilldownTransSpeed);

				if ($menuToShow.data('root-nav')) {
					$('#page-menu > .inner > .nav-container > .nav-footer-links').fadeIn(drilldownTransSpeed);
				}
			});
			return false;
		}); //Close and reset nav

		$(document).on('reset-modal', '#page-menu.nav-uses-modal', function () {
			closeThemeModal();
			setTimeout(function () {
				$('#page-menu.nav-uses-modal > .inner > .nav-container > .container').removeClass('inactive').show().slice(1).remove();
			}, 300); // Delay to match transition on .theme-modal.reveal

			return false;
		}).on('click', 'a[data-reset-and-close]', function () {
			$('#page-menu.nav-uses-modal').trigger('reset-modal');
			return false;
		}); // Inline nav links
		//Handle expanding nav

		theme.lastHoverInteractionTimestamp = -1;
		$(document).on('click keydown', '.multi-level-nav .nav-rows .contains-children > a', function (e) {
			if (e.type == 'click' || e.key == 'Enter') {
				$(this).parent().find('ul:first').slideToggle(300);
				return false;
			}
		});
		$(document).on(theme.device.isTouch() ? 'click forceopen forceclose' : 'forceopen forceclose', '.multi-level-nav .contains-mega-menu a.has-children', function (e) {
			$('.nav-ctas__cta .lazyload--manual').removeClass('lazyload--manual').addClass('lazyload'); // skip column headings

			if ($(this).hasClass('column-title')) {
				return true;
			}

			var navAnimSpeed = 200; // check if mouse + click events occurred in same event chain

			var thisInteractionTimestamp = Date.now();

			if (e.type == 'click' && thisInteractionTimestamp - theme.lastHoverInteractionTimestamp < 500) {
				return false;
			}

			if (e.type == 'forceopen' || e.type == 'forceclose') {
				theme.lastHoverInteractionTimestamp = thisInteractionTimestamp;
			} //Set some useful vars


			var $tierEl = $(this).closest('[class^="tier-"]');
			var $tierCont = $tierEl.parent();
			var targetTierNum = parseInt($tierEl.attr('class').split('-')[1]) + 1;
			var targetTierClass = 'tier-' + targetTierNum; //Remove nav for all tiers higher than this one (unless we're opening on same level on hover)

			if (e.type != 'forceopen') {
				$tierCont.children().each(function () {
					if (parseInt($(this).attr('class').split('-')[1]) >= targetTierNum) {
						if (e.type == 'forceclose') {
							$(this).removeClass('tier-appeared');
							var $this = $(this);
							theme.hoverRemoveTierTimeoutId = setTimeout(function () {
								$this.remove();
							}, 260);
						} else {
							$(this).slideUpAndRemove(navAnimSpeed);
						}
					}
				});
			} //Are we expanding or collapsing


			if ($(this).hasClass('expanded') && e.type != 'forceopen') {
				//Collapsing. Reset state
				$(this).removeClass('expanded').removeAttr('aria-expanded').removeAttr('aria-controls');
			} else {
				//Show nav
				//Reset other nav items at this level
				$tierEl.find('a.expanded').removeClass('expanded').removeAttr('aria-expanded');
				clearTimeout(theme.hoverRemoveTierTimeoutId); //If next tier div doesn't exist, make it

				var $targetTierEl = $tierCont.children('.' + targetTierClass);

				if ($targetTierEl.length == 0) {
					$targetTierEl = $('<div />').addClass(targetTierClass).attr('id', 'menu-' + targetTierClass).appendTo($tierCont);

					if (navAnimSpeed > 0) {
						// new tier, start at 0 height
						$targetTierEl.css('height', '0px');
					}
				} else {
					if (navAnimSpeed > 0) {
						// tier exists, fix its height before replacing contents
						$targetTierEl.css('height', $targetTierEl.height() + 'px');
					}
				} // populate new tier


				$targetTierEl.empty().stop(true, false).append($(this).siblings('ul').clone().attr('style', ''));

				if (navAnimSpeed > 0) {
					// transition to correct height, then clear height css
					$targetTierEl.animate({
						height: $targetTierEl.children().outerHeight()
					}, navAnimSpeed, function () {
						$(this).css('height', '');
					});
				} // add class after reflow, for any transitions


				setTimeout(function () {
					$targetTierEl.addClass('tier-appeared');
				}, 10); //Mark as expanded

				$(this).addClass('expanded').attr('aria-expanded', 'true').attr('aria-controls', 'menu-' + targetTierClass);
				$('body').addClass('nav-mega-open');
			}

			return false;
		}); // Expanding nav on hover

		theme.closeOpenMenuItem = function () {
			$('body').removeClass('nav-mega-open');
			$('.multi-level-nav.reveal-on-hover .has-children.expanded').trigger('forceclose');
		};

		$(document).on('mouseenter mouseleave', '.multi-level-nav.reveal-on-hover .tier-1 .contains-mega-menu', function (e) {
			if (theme.viewport.isSm()) {
				clearTimeout(theme.closeOpenMenuItemTimeoutId);

				if (e.type == 'mouseenter') {
					$(this).children('a').trigger('forceopen');
				} else {
					theme.closeOpenMenuItemTimeoutId = setTimeout(theme.closeOpenMenuItem, 200);
				}
			}
		});
		$(document).on('mouseleave', '.multi-level-nav.reveal-on-hover .tier-appeared', function (e) {
			if (theme.viewport.isSm()) {
				clearTimeout(theme.closeOpenMenuItemTimeoutId);
				theme.closeOpenMenuItemTimeoutId = setTimeout(theme.closeOpenMenuItem, 50);
			}
		});
		$(document).on('mouseenter', '.multi-level-nav.reveal-on-hover .tier-2, .multi-level-nav.reveal-on-hover .tier-3', function (e) {
			if (theme.viewport.isSm()) {
				clearTimeout(theme.closeOpenMenuItemTimeoutId);
			}
		}); // Keyboard access

		$(document).on('keydown', '.multi-level-nav .contains-children > a.has-children', function (e) {
			if (e.key == 'Enter') {
				if ($(this).parent().hasClass('contains-mega-menu')) {
					if ($(this).attr('aria-expanded') == 'true') {
						theme.closeOpenMenuItem();
					} else {
						$(this).trigger('forceopen');
					}
				} else {
					$(this).parent().toggleClass('reveal-child');
				}

				return false;
			}
		});

		function isPageScrollin() {
			return $('#page-content').outerHeight() > $(window).height();
		} // Modal windows


		var removeModalTimeoutID = -1;
		var closeModalDelay = 300;

		window.closeThemeModal = function (immediate, callbackFn) {
			$('a[data-modal-toggle].active').removeClass('active');
			var $modal = $('.theme-modal.reveal');
			$modal.removeClass('reveal').addClass('unreveal');

			if ($('html.supports-transforms').length && (typeof immediate == 'undefined' || !immediate)) {
				removeModalTimeoutID = setTimeout(function () {
					$('body').removeClass('modal-active');
					$('body, #page-content, #site-control').css('padding-right', '');
				}, closeModalDelay); // Delay to match transition on .theme-modal.reveal
			} else {
				$('body').removeClass('modal-active');
				$('body, #site-control').css('padding-right', '');
			} // tabindex


			$modal.find('a').attr('tabindex', '-1');

			if (immediate) {
				$('body').removeAttr('data-modal-id');
			} else {
				setTimeout(function () {
					$('body').removeAttr('data-modal-id');
				}, 200);
			}

			$(window).trigger('ccModalClosing');
			setTimeout(function () {
				$('body').removeClass('modal-closing');

				if ($modal.attr('id') === 'quick-buy-modal' || $modal.attr('id') === 'ql-contact-us' || $modal.attr('id') === 'ql-discount-dialog') {
					$modal.remove();
				}

				if (callbackFn) {
					callbackFn();
				}

				$(window).trigger('ccModalClosed');
			}, 300);
			$('#search-modal').removeClass('-in');
		}; //Show arbitrary content in modal window


		window.showThemeModal = function (el, id, callbackFn) {
			//Close current
			closeThemeModal(true); //Remove any existing temporary modals

			$('.theme-modal.temp').remove();
			theme.Nav().bar.hide(false); //Actually add to the page

			var $el = $(el);
			// 将新建的标签插入到body标签中
			$el.appendTo('body');
			setTimeout(function () {
				$el.addClass('reveal');
			}, 10);
			theme.addControlPaddingToModal(); //When body is under a modal & has scrollbar, it is not allowed to scroll,
			//so we overflow:hidden it and add a padding the same size as the scrollbar

			// if (isPageScrollin()) {
			// $('#page-content, #site-control').css('padding-right', $.scrollBarWidth());
			// } //Set page state


			if(id != 'contact-us') $('body').addClass('modal-active modal-opening');

			if (id) {
				$('body').attr('data-modal-id', id);
			}

			setTimeout(function () {
				if ($('.theme-modal:visible [data-modal-close]').length) {
					$('.theme-modal:visible [data-modal-close]').focus();
				}

				$('body').removeClass('modal-opening');
			}, 300);

			if (callbackFn) {
				callbackFn($el);
			}
		}; //Show existing modal container hidden on page


		window.showInPageModal = function ($target) {
			$target.removeClass('unreveal').addClass('reveal');
			theme.addControlPaddingToModal();
			if($target.attr('data-search-modal')){
				if($(window).scrollTop() <= 50)
					$('#search-modal.theme-modal.reveal > .inner').css('margin-top', theme.Nav().bar.height());
				else
					$('#search-modal.theme-modal.reveal > .inner').css('margin-top', theme.Nav().bar.navHeight());
			}
			var $inputs = $target.find('.focus-me'); //Any inputs to highlight?

			$(this).addClass('active'); //When body is under a modal, it is not allowed to scroll, so we need this to keep it the same width

			// if (isPageScrollin()) {
			// $('body, #site-control').css('padding-right', $.scrollBarWidth());
			// }

			$('body').addClass('modal-active modal-opening').attr('data-modal-id', $target.attr('id'));
			$('a[tabindex]', $target).removeAttr('tabindex');

			if ($inputs.length == 0) {
				$target.closest('.theme-modal').focus(); // add focus for keyboard scrolling
			} else {
				if (theme.viewport.isSm()) {
					$inputs.focus();
				}
			}

			if ($target.attr('id') === "search-modal") {
				setTimeout(function () {
					$('#search-modal').addClass('-in');
				}, 400);
			}

			setTimeout(function () {
				$('body').removeClass('modal-opening');
			}, 400);
		};
    
		$(document).on('click', 'body:not(.modal-active) a[data-modal-toggle]', function (e) {
			e.preventDefault();
			window.showInPageModal($($(this).data('modal-toggle')));
		}); //Close modal on escape keypress

		$(document).on('keyup', function (e) {
			if (e.which == 27) {
				closeThemeModal();
			}
		}); //Close modal button

		$(document).on('click', 'body.modal-active a[data-modal-close], #ql-discount-dialog a[data-modal-close]', function () {
			closeThemeModal();
			return false;
		}); //Click outside container to close modal

		// $(document).on('click', 'body a[data-modal-close].contact-us--close', function () {
		// 	//客服按钮 恢复
		// 	$('.section-page-dialog').removeClass('ql_pop-open');
		// 	closeThemeModal();
		// 	return false;
		// }); //Click outside container to close modal



		$(document).on('click', '.theme-modal', function (e) {
			if (e.target == this) {
				closeThemeModal(); //Trigger any reset events (e.g. in drilldown nav)

				$(this).trigger('reset-modal');
				return false;
			}
		}); //Switch to a different modal

		$(document).on('click', 'body.modal-active a[data-modal-toggle]', function () {
			closeThemeModal(true);
			$(this).click();
			return false;
		});
		$(document).on('click', '.site-control a[data-modal-nav-toggle]', function () {
			if ($('body.modal-active').length) {
				closeThemeModal(true);
				setTimeout(function () {
					$('#page-menu .crumbs a:first').trigger('click');
				}, 305); // after modal fade-out
			} else {
				$('.nav-ctas__cta .lazyload--manual').removeClass('lazyload--manual').addClass('lazyload');
				window.showInPageModal($('#page-menu'));
			}

			return false;
		}); //Immmediately select contents when focussing on some inputs

		$(document).on('focusin click', 'input.select-on-focus', function () {
			$(this).select();
		}).on('mouseup', 'input.select-on-focus', function (e) {
			e.preventDefault(); //Prevent mouseup killing select()
		}); //Textareas increase size as you type

		$('#template textarea').each(function () {
			$(this).autogrow({
				animate: false,
				onInitialize: true
			});
		});
		$(document).on('click', '.quantity-wrapper [data-quantity]', function () {
			var adj = $(this).data('quantity') == 'up' ? 1 : -1;
			var $qty = $(this).closest('.quantity-wrapper').find('[name=quantity]');
			$qty.val(Math.max(1, parseInt($qty.val()) + adj));
			$('form [name="quantity"]').val(parseInt($qty.val()));
			return false;
		}); // Redirection dropdowns

		$(document).on('change', 'select.redirecter', function () {
			window.location = $(this).val();
		});

		theme.getUrlParameter = function (name) {
			name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
			var results = regex.exec(location.search);
			return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		}; // Scroll to the newsletter when necessary


		var formType = theme.getUrlParameter('form_type');

		if (theme.getUrlParameter('customer_posted') || formType && formType === 'customer') {
			if ($('#footer_newsletter_signup').length) {
				setTimeout(function () {
					$('html,body').animate({
						scrollTop: $('#footer_newsletter_signup').offset().top - 100
					}, 1000);
				}, 100);
			}
		} // Detect android for 100vh fix


		if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
			$('html').addClass('os-android');
		} // Bind checkout button clicks


		$(document).on('click', '[data-cc-checkout-button]', function (e) {
			if ($('#cc-checkout-form').length) {
				$('#cc-checkout-form').submit();
				return false;
			} else {
				console.warn('Unable to find form with id cc-checkout-form');
			}
		}); // Bind pseudo-page-to-page animation event

		$(document).on('click', '[data-cc-animate-click]', function (e) {
			if (theme.settings.animationEnabledDesktop && theme.viewport.isSm() || theme.settings.animationEnabledMobile && theme.viewport.isXs()) {
				if ((window.location.hostname === this.hostname || !this.hostname.length) && $(this).attr('href').length > 0 && $(this).attr('href') !== '#') {
					e.preventDefault();
					var pageNavigateDelay = 200;
					var loaderVisibleDuration = 1300;
					var $veil = $('#cc-veil');
					var isLoadingAnimation = $veil.hasClass('cc-veil--animate');
					var url = $(this).attr('href');
					$('body').append("<link rel=\"prefetch\" href=\"".concat(url, "\">"));
					$veil.addClass('-in');

					if (isLoadingAnimation) {
						setTimeout(function () {
							$veil.addClass('cc-veil--animate--in').addClass('cc-veil--animate--running');
						}, pageNavigateDelay + 100);
					}

					setTimeout(function () {
						$veil.removeClass('cc-veil--animate--in');
						window.location.href = url;
					}, isLoadingAnimation ? loaderVisibleDuration : pageNavigateDelay); //Failsafe - remove the veil after a few second just in case

					setTimeout(function () {
						$('#cc-veil').removeClass('-in');
					}, 8000);
					return false;
				}
			}
		});


		// ql-add collection--filters-content
		$('.ql_collection--filters-content .filter--content').on('click', function(){
			const usf_facet = $(this).attr('data-usf-facet');
			const usf_facet_label = $(this).attr('data-usf-facet-label');
			if(usf_facet && usf_facet_label){
				$(`[data-usf-facet="${usf_facet}"] [data-usf-facet-label="${usf_facet_label}"]`).trigger('click');
			}
		});

		// ql-add  seo-richtext
		$('.ql_seo-richtext .rich-text-btn').on('click', function(){
			$(this).parent('.ql_seo-richtext').toggleClass('rich-text-close');
		});

		$(window).on('debouncedresizewidth.updateBodyPadding', theme.updateBodyPadding); // Process lazy loaded images on page load

		setTimeout(lazySizes.autoSizer.checkElems, 1000); // Watch for tabbing

		function handleFirstTab(e) {
			if (e.keyCode === 9) {
				// 9 == tab
				$('body').addClass('user-is-tabbing');
				window.removeEventListener('keydown', handleFirstTab);
			}
		}

		window.addEventListener('keydown', handleFirstTab); //Hide the footer on the challenge page

		if (document.querySelector('.shopify-challenge__container')) {
			document.getElementById('shopify-section-footer').style.display = 'none';
		}

		if (theme.device.isTouch()) {
			document.getElementsByTagName('html')[0].classList.add('touch');
		} //Remove the scroll animation from the first element for new users


		var firstSection = document.body.querySelector('.template-index #page-content .shopify-section:first-child [data-cc-animate]');

		if (firstSection && window.localStorage.getItem('is_first_visit') === null) {
			firstSection.removeAttribute('data-cc-animate');
		}

		window.localStorage.setItem('is_first_visit', 'false');
		var deferredLoadViewportExcess = 1200; // Register all sections

		theme.Sections.init();
		theme.Sections.register('header', theme.HeaderSection, {
			deferredLoad: false
		});
		theme.Sections.register('slideshow', theme.SlideshowSection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('footer', theme.FooterSection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('video', theme.VideoManager, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('background-video', theme.VideoManager, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('image-with-text-overlay', theme.ImageWithTextOverlay, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('image-beside-image', theme.ImageBesideImageSection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});

		/*
		theme.Sections.register('featured-collection', theme.FeaturedCollectionSection, {
		  deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		*/

		theme.Sections.register('collection-list', theme.CollectionListSection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('featured-blog', theme.FeaturedBlogSection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('product-template', theme.ProductTemplateSection, {
			deferredLoadViewportExcess: 200
		});
		theme.Sections.register('collection-template', theme.CollectionTemplateSection, {
			deferredLoad: false
		});
		theme.Sections.register('search-template', theme.SearchTemplateSection, {
			deferredLoad: false
		});
		theme.Sections.register('blog-template', theme.BlogTemplateSection, {
			deferredLoad: false
		});
		theme.Sections.register('article-template', theme.ArticleTemplateSection, {
			deferredLoad: false
		});
		theme.Sections.register('list-collections', theme.ListCollectionsSection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('cart-template', theme.CartTemplateSection, {
			deferredLoad: false
		});
		theme.Sections.register('product-recommendations', theme.ProductRecommendations, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('gallery', theme.GallerySection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
		theme.Sections.register('testimonials', theme.TestimonialsSection, {
			deferredLoadViewportExcess: deferredLoadViewportExcess
		});
	}); //Register dynamically pulled in sections

	$(function ($) {
		if (cc.sections.length) {
			cc.sections.forEach(function (section) {
				try {
					theme.Sections.register(section.name, section.section);
				} catch (err) {
					console.error("Unable to register section ".concat(section.name, "."), err);
				}
			});
		} else {
			console.warn('Barry: No common sections have been registered.');
		}
	});
})(theme.jQuery);
/* Built with Barry v1.0.7 */