var product_class, _usfImageWidths, usfFilesUrl;
window._ql_advertising_position = window._ql_advertising_position || false
var _usfLabels = `
  <span v-if="isSoldOut && _usfGlobalSettings.show_sold_out_label && usf.settings.search.showSoldOut" class="product-label unavailable" :class="{'product-label--marquee-on-hover': _usfGlobalSettings.prod_label_layout == 'marquee_on_hover','product-label--marquee': _usfGlobalSettings.prod_label_layout == 'marquee' || _usfGlobalSettings.prod_label_layout == 'marquee_on_hover'}">
      <span v-html="_usfSoldOutText"></span>
      <template v-if="_usfGlobalSettings.prod_label_layout == 'marquee' || _usfGlobalSettings.prod_label_layout == 'marquee_on_hover'">
          <span v-for="i in 20" v-html="_usfSoldOutText"></span>
      </template>
  </span>
  <span v-else-if="hasDiscount && _usfGlobalSettings.show_sale_label && usf.settings.search.showSale" class="product-label sale" :class="{'product-label--marquee-on-hover': _usfGlobalSettings.prod_label_layout == 'marquee_on_hover','product-label--marquee': _usfGlobalSettings.prod_label_layout == 'marquee' || _usfGlobalSettings.prod_label_layout == 'marquee_on_hover'}">
      <span v-html="_usfSaleText"></span>
      <template v-if="_usfGlobalSettings.prod_label_layout == 'marquee' || _usfGlobalSettings.prod_label_layout == 'marquee_on_hover'">
          <span  v-for="i in 20" v-html="_usfSaleText"></span>
      </template>
  </span>
  <span v-else-if="_usfGlobalSettings.show_new_label && _usfIsNew(product)" class="product-label product-label--new" :class="{'product-label--marquee-on-hover': _usfGlobalSettings.prod_label_layout == 'marquee_on_hover','product-label--marquee': _usfGlobalSettings.prod_label_layout == 'marquee' || _usfGlobalSettings.prod_label_layout == 'marquee_on_hover'}">
      <span v-html="_usfNewText"></span>
      <template v-if="_usfGlobalSettings.prod_label_layout == 'marquee' || _usfGlobalSettings.prod_label_layout == 'marquee_on_hover'">
          <span  v-for="i in 20" v-html="_usfNewText"></span>
      </template>
  </span>
`;
// define templates for the Showcase theme 
var _usfFilterBodyTemplate =
  /*inc_begin_filter-body*/
  `<!-- Range filter -->
<div v-if="isRange" class="usf-facet-values usf-facet-range">
    <!-- Range inputs -->
    <div class="usf-slider-inputs usf-clear">
        <span class="usf-slider-input__from">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[0]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[0], 0)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
        <span class="usf-slider-div">-</span>
        <span class="usf-slider-input__to">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[1]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[1], 1)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
    </div>
	<!-- See API reference of this component at https://docs.sobooster.com/search/storefront-js-api/slider-component -->
    <usf-slider :color="facet.sliderColor" :symbols="facet.sliderValueSymbols" :prefix="facet.sliderPrefix" :suffix="facet.sliderSuffix" :min="facet.min" :max="facet.max" :pips="facet.range[0]" :step="facet.range[1]" :decimals="rangeDecimals" :value="range" :converter="rangeConverter" @input="onRangeSliderInput" @change="onRangeSliderChange"></usf-slider>
</div>
<!-- List + Swatch filter -->
<div v-else ref="values" :class="'usf-facet-values usf-facet-values--' + facet.display + (facet.navigationCollections ? ' usf-navigation' : '') + (facet.valuesTransformation ? (' usf-' + facet.valuesTransformation.toLowerCase()) : '') + (facet.circleSwatch ? ' usf-facet-values--circle' : '')" :style="!usf.isMobile && facet.maxHeight ? { maxHeight: facet.maxHeight } : null">
    <!-- Filter options -->                
    <usf-filter-option v-for="o in visibleOptions" :facet="facet" :option="o" :key="o.label"></usf-filter-option>
</div>

<!-- More -->
<div v-if="isMoreVisible" class="usf-more" @click="onShowMore" v-html="loc.more"></div>`;
/*inc_end_filter-body*/ var _usfSearchResultsSkeletonItemTpl = `
<div v-if="view === 'grid'" class="usf-sr-product grid__item product-block cc-product-block usf-skeleton" :class="[_usf_product_class]">
    <div class="grid-view-item" v-if="true">
        <div class="usf-img"></div>
        <div class="usf-meta">            
        </div>
    </div>
</div>
<a class="usf-sr-product list-view-item usf-skeleton" v-else>
    <!-- Image column -->
    <div class="list-view-item__image-column" v-if="true">
        <div class="list-view-item__image-wrapper" v-if="true">
            <div class="usf-img"></div>
        </div>
    </div>

    <!-- Title and Vendor column -->
    <div class="list-view-item__title-column" v-if="true">
        <div class="list-view-item__title"></div>
        <div class="list-view-item__vendor"></div>
    </div>

    <!-- Prices -->
    <div class="list-view-item__price-column" v-if="true">
        <div class="usf-price product-price__price"></div>
    </div>
</a>
`;

var _usfProductPriceTemplate = `
<a :href="productUrl" class="price">
   <span v-if="priceVaries && !product.selectedVariantId" v-html="_usfFromText"></span>
   <span class="theme-money" v-html="priceVaries && !product.selectedVariantId ? displayMinDiscountedPrice : displayDiscountedPrice"></span>
   <span class="was-price theme-money" v-if="hasDiscount" v-html="displayPrice"></span>
</a>
`;

var _usfSearchResultsSummaryTpl =
  /*inc_begin_search-summary*/
  `<span class="usf-sr-summary" v-html="loader === true ? '&nbsp;' : usf.utils.format(term ? loc.productSearchResultWithTermSummary : loc.productSearchResultSummary, result.total, term)"></span>`;
/*inc_end_search-summary*/ var _usfSearchResultsViewsTpl =
  /*inc_begin_search-views*/
  `<div class="usf-views">
    <button class="usf-view usf-grid usf-btn" :class="{'usf-active': view === 'grid'}" @click.prevent="onGridViewClick"><svg role="presentation" viewBox="0 0 36 36"><path fill="currentColor" d="M8 0L0 0L0 8L8 8L8 0ZM14 0L22 0L22 8L14 8L14 0ZM36 0L28 0L28 8L36 8L36 0ZM0 14L8 14L8 22L0 22L0 14ZM22 14L14 14L14 22L22 22L22 14ZM28 14L36 14L36 22L28 22L28 14ZM8 28L0 28L0 36L8 36L8 28ZM14 28L22 28L22 36L14 36L14 28ZM28 36L28 28L36 28L36 36L28 36Z"/></svg></button>
    <button class="usf-view usf-list usf-btn" :class="{'usf-active': view === 'list'}" @click.prevent="onListViewClick"><svg role="presentation" viewBox="0 0 18 18"><path d="M8 1.030067h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-7-15h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" fill="currentColor"></path></svg></button>
</div>`;
/*inc_end_search-views*/ var _usfSearchResultsSortByTpl =
  /*inc_begin_search-sortby*/
  `<usf-dropdown :value="sortBy" :options="sortByOptions" @input="onSortByChanged"></usf-dropdown>`;
/*inc_end_search-sortby*/ usf.templates = {
  // application
  /*inc_begin_app*/
  app: `<div id="usf_container" class="usf-zone usf-clear" :class="{'usf-filters-horz': usf.settings.filters.horz}">
    <usf-filters></usf-filters>
    <usf-sr></usf-sr>
</div>`,
  /*inc_end_app*/ searchResults:
    `
<div class="usf-sr-container" :class="{'usf-no-facets': noFacets, 'usf-empty': !loader && !hasResults, 'usf-nosearch': !showSearchBox}">
    <!-- Search form -->
    <form v-if="showSearchBox" action="/search" method="get" role="search" class="usf-sr-inputbox">
        <input name="q" autocomplete="off" ref="searchInput" v-model="termModel">
        <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><circle class="usf-path" cx="10.981" cy="10.982" r="9.786"></circle> <line class="usf-path" x1="23.804" y1="23.804" x2="17.902" y2="17.901"></line></svg>
        </button>
        <span v-if="termModel" class="usf-remove" @click="clearSearch"></span>
    </form>

    <div class="usf-sr-config" v-if="usf.isMobile">
        <div class="usf-sr-config__mobile-filters-wrapper">
            ` +
    _usfSearchResultsSortByTpl +
    `
            <div class="usf-filters" :class="{'usf-has-filters': !!facetFilters}" @click="document.body.classList.toggle('usf-mobile-filters')">
                <span class="usf-icon"><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><g fill="currentColor" fill-rule="evenodd"><rect x="2" width="1" height="5" rx=".5"></rect><rect x="8" width="1" height="9" rx=".5"></rect><rect x="14" width="1" height="3" rx=".5"></rect><rect x="2" y="8" width="1" height="8" rx=".5"></rect><rect x="8" y="12" width="1" height="4" rx=".5"></rect><rect x="14" y="6" width="1" height="10" rx=".5"></rect><path d="M2.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill-rule="nonzero"></path></g></svg></span>
                <span v-html="loc.filters"></span>
            </div>
        </div>
        
        ` +
    _usfSearchResultsSummaryTpl +
    _usfSearchResultsViewsTpl +
    `
    </div>
    <div class="usf-sr-config" v-else>
        ` +
    _usfSearchResultsSummaryTpl +
    _usfSearchResultsSortByTpl +
    _usfSearchResultsViewsTpl +
    `
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && !result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <div :class="(view === \'grid\' ? _usf_grid_class  : \'list-view-items\') + \' usf-results usf-\' + view" :data-result-count="loader!=true && result.total">
        <template v-if="loader===true">` +
    _usfSearchResultsSkeletonItemTpl +
    _usfSearchResultsSkeletonItemTpl +
    _usfSearchResultsSkeletonItemTpl +
    _usfSearchResultsSkeletonItemTpl +
    `</template> 
        <template v-else>
            <template v-if="loader === true || hasResults">
                <template v-if="view === 'grid'">
                    <template v-for="(p,index) in result.items">
                    <template v-if="window._ql_advertising_position && typeof _ql_advertising_position !== 'undefined' && window._ql_advertising_position && _ql_advertising_position.length>0">
                            <template v-for="(pos, i) in _ql_advertising_position">
                                <template v-if="index == pos">
                                    <div class="product-block advertising_position cc-product-block column quarter cc-initialized" :data-value="pos">
                                        <div class="product-block__inner">
                                            <div class="pc-img image">
                                                <a :href="_advert_block[pos].url" class="image-inner"> 
                                                <div class="image__first">
                                                    <div class="rimage-outer-wrapper"  :style="'max-width: ' + _advert_block[pos].pc_img.width + 'px'">
                                                        <div class="rimage-wrapper lazyload--placeholder" :style="'padding-top:' + 100/_advert_block[pos].pc_img.img_ratio + '%'">
                                                            <img class="rimage__image lazyload fade-in" :data-src="_usfGetScaledImageUrl(_advert_block[pos].pc_img.url)" :data-widths="'[' + _advert_block[pos].pc_img.width + ']'" data-sizes="auto">
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div class="mobile-img image">
                                                <a :href="_advert_block[pos].url" class="image-inner"> 
                                                <div class="image__first">
                                                    <div class="rimage-outer-wrapper"  :style="'max-width: ' + _advert_block[pos].mobile_img.width + 'px'">
                                                        <div class="rimage-wrapper lazyload--placeholder" :style="'padding-top:' + 100/1.73 + '%'">
                                                            <img class="rimage__image lazyload fade-in" :data-src="_usfGetScaledImageUrl(_advert_block[pos].mobile_img.url)" :data-widths="'[' + _advert_block[pos].mobile_img.width + ']'" data-sizes="auto">
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            
                                            <div class="text-area">
                                            <div class="heading">{{_advert_block[pos].ad_title}}</div>
                                            <span class="description">{{_advert_block[pos].ad_scription}}</span> 
                                            </div>
                                            <span class="show-now-btn">
                                                <a :href="_advert_block[pos].url">{{_advert_block[pos].ad_btn}}</a>
                                                <span style="white-space: nowrap;"><svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="ctaLinkIcon-3XB0n" focusable="false" role="img" aria-hidden="true" data-testid="link-arrow-icon"><path d="m10.53 2.47 5 5a.75.75 0 0 1 .01 1.04l-5 5-.35-.35a1 1 0 0 1 0-1.42l3-3H5a1 1 0 0 1-1-1v-.5h9.18l-3-3a1 1 0 0 1 0-1.42l.35-.35ZM2 7.25a1 1 0 0 1 1 1v.5H1a1 1 0 0 1-1-1v-.5Z" fill="currentColor" fill-rule="evenodd"></path></svg></span>
                                            </span>
                                            
                                        </div>
                                         
                                        
                                        
                                    </div>
                                </template>
                            </template>
                        </template>
                    
                    <usf-showcase-griditem :product="p" :productIndex="index" :result="result"></usf-showcase-griditem>
                    </template>
                    <template v-for="(pos, i) in _ql_advertising_position">
                                <template v-if="result.items.length == pos">
                                    <div class="product-block advertising_position cc-product-block column quarter cc-initialized" :data-value="pos">
                                        <div class="product-block__inner">
                                            <div class="pc-img image">
                                                <a :href="_advert_block[pos].url" class="image-inner"> 
                                                <div class="image__first">
                                                    <div class="rimage-outer-wrapper"  :style="'max-width: ' + _advert_block[pos].pc_img.width + 'px'">
                                                        <div class="rimage-wrapper lazyload--placeholder" :style="'padding-top:' + 100/_advert_block[pos].pc_img.img_ratio + '%'">
                                                            <img class="rimage__image lazyload fade-in" :data-src="_usfGetScaledImageUrl(_advert_block[pos].pc_img.url)" :data-widths="'[' + _advert_block[pos].pc_img.width + ']'" data-sizes="auto">
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div class="mobile-img image">
                                                <a :href="_advert_block[pos].url" class="image-inner"> 
                                                <div class="image__first">
                                                    <div class="rimage-outer-wrapper"  :style="'max-width: ' + _advert_block[pos].mobile_img.width + 'px'">
                                                        <div class="rimage-wrapper lazyload--placeholder" :style="'padding-top:' + 100/1.73 + '%'">
                                                            <img class="rimage__image lazyload fade-in" :data-src="_usfGetScaledImageUrl(_advert_block[pos].mobile_img.url)" :data-widths="'[' + _advert_block[pos].mobile_img.width + ']'" data-sizes="auto">
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            
                                            <div class="text-area">
                                            <div class="heading">{{_advert_block[pos].ad_title}}</div>
                                            <span class="description">{{_advert_block[pos].ad_scription}}</span> 
                                            </div>
                                            <span class="show-now-btn">
                                                <a :href="_advert_block[pos].url">{{_advert_block[pos].ad_btn}}</a>
                                                <span style="white-space: nowrap;"><svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="ctaLinkIcon-3XB0n" focusable="false" role="img" aria-hidden="true" data-testid="link-arrow-icon"><path d="m10.53 2.47 5 5a.75.75 0 0 1 .01 1.04l-5 5-.35-.35a1 1 0 0 1 0-1.42l3-3H5a1 1 0 0 1-1-1v-.5h9.18l-3-3a1 1 0 0 1 0-1.42l.35-.35ZM2 7.25a1 1 0 0 1 1 1v.5H1a1 1 0 0 1-1-1v-.5Z" fill="currentColor" fill-rule="evenodd"></path></svg></span>
                                            </span>
                                            
                                        </div>
                                         
                                        
                                        
                                    </div>
                                </template>
                    </template>
                </template>
                <template v-else>
                    <template v-for="p in result.items"><usf-sr-listitem :product="p" :result="result"></usf-sr-listitem></template>
                </template>
            </template>
            <template v-else>
                <!-- Empty result -->
                <div class="usf-sr-empty">
                    <div class="usf-icon"></div>
                    <span v-html="term ? usf.utils.format(loc.productSearchNoResults, term) : loc.productSearchNoResultsEmptyTerm"></span>
                </div>
            </template>
        </template>
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Paging & load more -->
    <div class="usf-sr-paging" v-if="loader !== true">
        <div class="usf-sr-loader" v-if="loader === 'more'">
            <div class="usf-spinner"></div>
        </div>        
        
        <!-- Load more -->
        <div class="usf-sr-more" v-else-if="hasResults && usf.settings.search.more === 'more'">
            <div class="usf-title" v-html="usf.utils.format(loc.youHaveViewed, itemsLoaded, result.total)"></div>
            <div class="usf-progress">
                <div :style="{width: (itemsLoaded * 100 / result.total) + '%'}"></div>
            </div>
            <div v-if="itemsLoaded < result.total" class="usf-load-more" @click="onLoadMore" v-html="loc.loadMore"></div>
        </div>
        <usf-sr-pages v-else-if="hasResults && usf.settings.search.more === 'page'" :page="page" :pages-total="pagesTotal" :pages-to-display="4" :side-pages-to-display="1"></usf-sr-pages>
    </div>
</div>
`,
  searchResultsGridViewItem:
    `
<div class="product-block cc-product-block" :class="[_usf_product_class,{'sold-out': isSoldOut,'on-sale':hasDiscount,'hover-image': _usfGlobalSettings.prod_hover == 'second_image' && hoverImage,'layout-right':product.tags.includes('meta-layout-right'),'product-block--marquee-on-hover': _usfGlobalSettings.prod_label_layout == 'marquee_on_hover','product-block--quickbuy': _usfGlobalSettings.quickbuy_enabled,'all-images': _usfGlobalSettings.prod_hover == 'all_images' && hoverImage,'product-block--has-swatches':productHasSwatches}]" :data-loop-index="(productIndex + 1)" :key="product.Id" :data-product-images="_usfGetDataImages(product, productHasSwatches)">
    <div class="product-block__inner">
        <div class="image" :class="{'image--hover-second': _usfGlobalSettings.prod_hover == 'second_image' && hoverImage,'image--same-aspect-ratio': _usfGlobalSettings.prod_hover == 'second_image' && hoverImage && (selectedImgRatio == hoverImgRatio)}">
            <!--labels-->
            <div v-if="_usfGlobalSettings.prod_label_layout.includes('marquee')" class="product-marquee">
                ` +
    _usfLabels +
    `
            </div>

            <a data-cc-animate-click class="image-inner" :href="productUrl" @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" :aria-label="product.title" tabindex="-1">
                <!-- Wishlist -->
                <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                <!-- Labels -->
                <usf-plugin name="searchResultsProductLabel" :data="pluginData"></usf-plugin>
                <div class="image__first">
                    <div class="rimage-outer-wrapper" :style="'max-width: ' + selectedImage.width + 'px'">
                        <div class="rimage-wrapper lazyload--placeholder" :style="'padding-top:' + 100/selectedImgRatio + '%'">
                            <img class="rimage__image lazyload fade-in" :data-src="_usfGetScaledImageUrl(scaledSelectedImageUrl)" :data-widths="'[' + _usfImageWidths + ']'" :data-aspectratio="selectedImgRatio" data-sizes="auto" :alt="selectedImage.alt" :width="selectedImage.width" :height="selectedImage.height">
                        </div>
                    </div>
                    <!--labels-->
                    <div v-if="!_usfGlobalSettings.prod_label_layout.includes('marquee')">
                        ` +
    _usfLabels +
    `
                    </div>
                </div>
                <div v-if="_usfGlobalSettings.prod_hover == 'second_image' && hoverImage" class="image__second">
                    <div class="rimage-outer-wrapper" :style="'max-width: ' + hoverImage.width + 'px'">
                        <div class="rimage-wrapper lazyload--placeholder" :style="'padding-top:' + 100/hoverImgRatio + '%'">
                            <img class="rimage__image lazyload fade-in" :data-src="_usfGetScaledImageUrl(scaledHoverImageUrl)" :data-widths="'[' + _usfImageWidths + ']'" :data-aspectratio="selectedImgRatio" data-sizes="auto" :alt="hoverImage.alt" :width="hoverImage.width" :height="hoverImage.height">
                        </div>
                    </div>
                </div>
            </a>
            <div class="ql-bag-icon" @click="onQuickAddToBag">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.772 3.95H9.28V2.814C9.28 1.262 8.057 0 6.553 0 5.05 0 3.826 1.262 3.826 2.814V3.95H.335A.342.342 0 0 0 0 4.295V17.13c0 .19.151.346.335.346h7.529a5.097 5.097 0 0 1 5.243-8.684V4.294a.342.342 0 0 0-.335-.345ZM4.496 2.814c0-1.171.923-2.122 2.057-2.122 1.135 0 2.057.951 2.057 2.122V3.95H4.496V2.814Z" fill="#000"/><path d="M10.922 9.32a4.078 4.078 0 1 0 0 8.156 4.078 4.078 0 0 0 0-8.156Zm1.801 4.44h-1.438V15.2a.363.363 0 0 1-.725 0v-1.438H9.12a.362.362 0 0 1 0-.725h1.439v-1.439a.363.363 0 0 1 .725 0v1.439h1.438a.362.362 0 0 1 0 .725Z" fill="#000"/></svg>
            </div>
        </div>
        <!--swatchs-->
        <usf-swatches v-if="_usfGlobalSettings.swatch_enabled && _usfGlobalSettings.prod_block_swatches" :product="product" :optionWithValues="colorValues" :option="colorOption" :option_index="colorOptionIndex"></usf-swatches>
        <!--quick view-->
            <div v-if="_usfGlobalSettings.quickbuy_enabled"  class="cc-quick-buy-btn-container">
                <a :href="quickProductUrl" data-cc-quick-buy class="button alt cc-quick-buy-btn" v-html="loc.quickView"></a>
            </div>

        <a data-cc-animate-click :href="productUrl" class="caption upper">
            <span class="title" v-html="product.title"></span>
            <!--vendor-->
            <span v-if="usf.settings.search.showVendor && _usfSectionSettings.show_vendor" class="vendor" v-html="product.vendor"></span>

            <div class="price">
                {{ priceVaries && !product.selectedVariantId ? _usfFromText : '' }}
                <span class="theme-money" v-html="priceVaries && !product.selectedVariantId ? displayMinDiscountedPrice : displayDiscountedPrice"></span>
                <span v-if="hasDiscount" class="was-price theme-money" v-html="displayPrice"></span>
            </div>
			<span class="title" v-html="product.subtitle" style="box-sizing:border-box;color:rgb(151, 151, 151);font-family:arquitecta, Arial, sans-serif;font-size:14px;font-weight:400;height:14px;line-height:14px;text-size-adjust:100%;margin-top:-5px;"></span>
        </a>
        <!-- Product review -->
        <a v-if="_usfGlobalSettings.show_product_block_reviews" data-cc-animate-click :href="productUrl" class="themed-product-reviews" tabindex="-1">
            <span class="shopify-product-reviews-badge" :data-id="product.id"></span>
        </a>
        <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
        <!-- Swatchs-->
        <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
    </div>
</div>
`,

  // Search result pages
  searchResultsPages: `
<div class="pagination central content">
    <template v-for="e in elements">
        <span v-if="e.type === 'prev'" class="prev">
            <a href="javascript:void(0)" :title="loc.prevPage" @click="onPrev" style="font-size:14px">←</a>
        </span>
        <span v-else-if="e.type === 'dots'" class="deco" style="padding:0 7px">…</span>
        <span v-else-if="e.type === 'page' && e.current" class="page current" style="padding:0 7px">{{e.page}}</span>
        <span v-else-if="e.type === 'page' && !e.current" class="page" style="padding:0 7px"><a href="javascript:void(0)" @click="ev=>onPage(e.page,ev)" :title="usf.utils.format(loc.gotoPage,e.page)">{{e.page}}</a></span>
        <span v-else-if="e.type === 'next'" class="next" style="padding:0 7px">
            <a href="javascript:void(0)" :title="loc.nextPage" @click="onNext" style="font-size:14px">→</a>
        </span>
    </template>
</div>
`,

  searchResultsListViewItem:
    `
<a class="usf-sr-product list-view-item" @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" :href="productUrl" :key="product.id">
    <!-- Image column -->
    <div class="list-view-item__image-column">
        <div class="list-view-item__image-wrapper">
            <img class="list-view-item__image" :src="imageUrl">
            <!--sale label-->
            <span v-if="isSoldOut && usf.settings.search.showSoldOut && _usfGlobalSettings.show_sold_out_label" class="product-label unavailable"><span v-html="loc.soldOut"></span></span>
            <span v-else-if="hasDiscount && usf.settings.search.showSale && _usfGlobalSettings.show_sale_label" class="product-label sale"><span v-html="loc.sale"></span></span>
        </div>
    </div>
    <!-- Title and Vendor column -->
    <div class="list-view-item__title-column">
        <div class="list-view-item__title" v-html="product.title"></div>
        <div class="list-view-item__vendor" v-if="usf.settings.search.showVendor" v-html="product.vendor"></div>
        <template v-if="usf.isMobile">` +
    _usfProductPriceTemplate +
    `</template>
    </div>
    <!-- Prices -->
    <div v-if="!usf.isMobile" class="list-view-item__price-column">
        ` +
    _usfProductPriceTemplate +
    `
    </div>
</a>
`,
  // AddToCart Plugin
  /*inc_begin_addtocart-plugin*/
  addToCartPlugin: `<form class="usf-add-to-cart" :data-form-variant-id="variant.id" method="POST" enctype="multipart/form-data" :action="usf.platform.addToCartUrl">
    <input type="hidden" name="form_type" value="product">
    <input type="hidden" name="utf8" value="✓">
    <input type="hidden" name="quantity" value="1">
    <input type="hidden" name="id" :value="variant.id">
    <button type="submit" name="add" :class="{'usf-visible': args.isHover}" class="usf-add-to-cart-btn" v-html="loc.addToCart" :style="{borderColor:settings.buttonBorderColor,color:settings.buttonTextColor,backgroundColor:settings.buttonBackgroundColor}"></button>
</form>`,
  /*inc_end_addtocart-plugin*/ // Preview Plugin
  /*inc_begin_preview-plugin*/
  previewPlugin: `<div class="usf-sr-preview" :class="[{'usf-visible': args.isHover},'usf-sr-' + settings.buttonPosition]" @click="onShowModal" :style="{backgroundColor:settings.iconBackgroundColor}">
    <div><svg :style="'width:initial;height:initial;fill:' + settings.iconTextColor" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g transform="translate(0.000000,281.000000) scale(0.100000,-0.100000)"><path d="M4808.6,2770.8c-1219.3-67-2423.2-610.6-3684.6-1659.5C884.8,912.3,100,140.9,100,104.6c0-34.4,794.3-819.2,1004.9-993.4c1138.9-941.7,2195.4-1468.1,3273-1630.8c306.3-45.9,821.1-55.5,1110.2-19.1C6663.3-2391.4,7832.8-1807.6,9023.4-774C9274.1-553.9,9900,73.9,9900,108.4c0,30.6-803.9,823-1004.9,989.6c-1098.7,909.2-2151.4,1445.1-3177.3,1617.4c-189.5,32.5-625.9,70.8-735,65.1C4944.5,2778.5,4866,2774.7,4808.6,2770.8z M5497.7,2296.2c1181-158.9,2425.1-846,3590.8-1983l212.5-206.7l-231.6-225.9c-1158-1135-2434.7-1829.8-3629.1-1977.2c-227.8-26.8-700.5-23-937.9,7.7c-417.3,57.4-851.8,181.8-1282.4,369.4C2452.4-1384.6,1543.2-743.4,865.6-60L702.9,104.6l172.3,174.2c509.1,513,1248,1075.7,1856.6,1410.7c562.7,310.1,1196.3,530.2,1751.4,606.8C4728.2,2330.6,5250.7,2330.6,5497.7,2296.2z"/><path d="M4670.8,1855.9c-671.8-128.2-1213.5-633.6-1397.3-1307.3c-59.3-212.5-59.3-675.7,0-888.1c172.3-625.9,654.6-1110.2,1276.7-1280.5c222-61.3,677.6-61.3,899.6,0c622.1,170.3,1104.4,654.6,1276.7,1280.5c59.3,212.5,59.3,675.7,0,888.1c-172.3,627.8-662.3,1117.8-1276.7,1280.5C5246.9,1880.8,4875.6,1894.2,4670.8,1855.9z M5373.2,1387c233.5-72.7,386.6-166.5,566.6-344.5c268-266.1,388.6-557,388.6-937.9c0-379-120.6-669.9-390.5-937.9c-268-269.9-558.9-390.5-937.9-390.5c-241.2,0-386.6,34.4-612.5,145.5c-130.2,63.2-195.2,111-325.4,243.1c-273.7,275.6-392.4,557-392.4,939.8c0,382.8,118.7,664.2,392.4,937.9c210.5,212.5,436.4,331.1,723.5,382.8C4929.2,1452.1,5222,1432.9,5373.2,1387z"/><path d="M4818.2,508.4c-283.3-132.1-348.4-509.1-122.5-723.5c281.4-266,744.6-68.9,744.6,319.7c0,179.9-109.1,342.6-271.8,409.6C5072.7,554.4,4912,552.4,4818.2,508.4z"/></g></svg></div>
    <span v-html="loc.quickView" :style="{color:settings.iconTextColor}"></span>
</div>`,
  /*inc_end_preview-plugin*/ /*inc_begin_preview-modal*/
  previewPluginModal: `<div><div class="usf-backdrop"></div><div class="usf-preview__wrapper usf-zone">
    <div class="usf-preview">
        <!-- Close button -->
        <div class="usf-remove" @click="onClose"></div>

        <!-- Body content -->
        <div class="usf-preview__body">
            <!-- left - images of product -->
            <div class="usf-preview__content-left">
                <!-- Big image -->
                <div class="usf-preview__image-slider">
                    <div type="button" title="Prev" class="usf-preview__image-slider__prev" @click="onPrevImage(0)" v-if="showBigImageNav">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M358 512c4 0 7-1 9-4 5-5 5-13 0-18L146 269 367 47c5-5 5-13 0-18s-13-5-18 0L119 260c-5 5-5 13 0 18l230 230c3 3 6 4 9 4z"></path></svg>
                    </div>

                    <div class="usf-preview__image-slider__track" :style="'max-width:' + ((image.height/image.width*imageMaxWidth > imageMaxHeight) ? (imageMaxHeight*image.width/image.height) + 'px' : '100%') + ';padding-bottom:' + ((image.height/image.width*imageMaxWidth > imageMaxHeight) ? (imageMaxHeight*100/imageMaxWidth) : (image.height/image.width*100)) + '%'">
                        <div v-for="i in images" class="usf-preview__image" :class="{'usf-active': image === i}">
                            <div class="usf-preview__image-img-wrapper">
                                <img :src="usf.platform.getImageUrl(i.url, 1024)">
                            </div>
                        </div>
                    </div>

                    <div type="button" title="Next" class="usf-preview__image-slider__next" @click="onNextImage(0)" v-if="showBigImageNav">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M128 512c-3 0-7-1-9-4-5-5-5-13 0-18l221-221L119 47c-5-5-5-13 0-18s13-5 18 0l230 231c5 5 5 13 0 18L137 508c-2 3-6 4-9 4z"></path></svg>
                    </div>

                    <ul class="usf-preview__image-slider__dots" v-if="showImageIndices && false">
                        <li :class="{'active':i===image}" v-for="(i,index) in images"  @click="onThumbClick(i)"><button type="button">{{index+1}}</button></li>
                    </ul>
                </div>

                <!-- Thumbnails -->
                <div class="usf-preview__thumbs usf-clear" v-if="showThumbs">
                    <div v-if="showThumbNav" class="usf-preview__thumbs-prev" @click="onPrevImage">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M358 512c4 0 7-1 9-4 5-5 5-13 0-18L146 269 367 47c5-5 5-13 0-18s-13-5-18 0L119 260c-5 5-5 13 0 18l230 230c3 3 6 4 9 4z"></path></svg>
                    </div>

                    <div class="usf-preview__thumbs-inner">
                        <div v-for="i in images" class="usf-preview__thumb" :class="{'usf-active': image === i}">
                            <img :src="usf.platform.getImageUrl(i.url, 'small')" @click="onThumbClick(i)">
                        </div>
                    </div>

                    <div v-if="showThumbNav" class="usf-preview__thumbs-next" @click="onNextImage">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M128 512c-3 0-7-1-9-4-5-5-5-13 0-18l221-221L119 47c-5-5-5-13 0-18s13-5 18 0l230 231c5 5 5 13 0 18L137 508c-2 3-6 4-9 4z"></path></svg>                        
                    </div>
                </div>
            </div>

            <!-- right - info of the product -->
            <div class="usf-preview__content-right">
                <!-- Product title -->
                <h1 class="usf-preview__title" v-html="product.title"></h1>

                <!-- Vendor -->
                <div class="usf-preview__vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

                <!--Prices -->
                <div class="usf-preview__price-wrapper price" :class="{'price--sold-out': isSoldOut}">
                    <span class="usf-price product-price__price" :class="{'usf-has-discount': hasDiscount}" v-html="usf.utils.getDisplayPrice(selectedVariant.compareAtPrice || selectedVariant.price)"></span>
                    <span v-if="hasDiscount" class="usf-discount product-price__price product-price__sale" v-html="usf.utils.getDisplayPrice(selectedVariant.price)"></span>

                    <div v-if="false" class="price__badges price__badges--listing">
                        <span class="price__badge price__badge--sale" aria-hidden="true" v-if="hasDiscount && usf.settings.search.showSale">
                            <span v-html="loc.sale"></span>
                        </span>
                        <span class="price__badge price__badge--sold-out" v-if="isSoldOut && usf.settings.search.showSoldOut">
                            <span v-html="loc.soldOut"></span>
                        </span>
                    </div>
                </div>

                <!-- Description -->
                <div class="usf-preview__description" :class="{'usf-loader':description===undefined}" v-html="description"></div>

                <!-- Add to cart form -->
                <form method="post" enctype="multipart/form-data" :action="usf.platform.addToCartUrl">
                    <!-- variant ID -->
                    <input type="hidden" name="id" :value="selectedVariant.id" />

                    <!-- Options -->
                    <template v-for="(o,index) in product.options">
                        <usf-preview-modal-option :option="o" :index="index"></usf-preview-modal-option>
                    </template>

                    <!-- add to card button -->
                    <div class="usf-preview__field">
                        <label v-html="loc.quantity"></label>
                        <div class="usf-flex usf-preview__add-to-cart">
                            <input pattern="[0-9]*" min="1" :value="quantity" name="quantity" type="number" />
                            <button :title="!hasAvailableVariant ? loc.selectedVariantNotAvailable : ''" :disabled="!hasAvailableVariant" type="submit" name="add" class="usf-preview--add-to-cart-btn" :class="{ 'usf-disabled': !hasAvailableVariant}" :style="{color:settings.buttonTextColor,backgroundColor:settings.buttonBackgroundColor}" v-html="loc.addToCart"></button>
                        </div>
                    </div>
                </form>

                <!-- See details link -->
                <div class="usf-preview__link-wrapper">
                    <a class="usf-preview__link" :href="productUrl" v-html="loc.seeFullDetails"></a>
                </div>
            </div>
        </div>
    </div>
</div></div>`,
  /*inc_end_preview-modal*/ /*inc_begin_goto-top*/
  gotoTop: `<div class="usf-goto-top">
    <div class="usf-icon usf-icon-up"></div>
</div>`,
  /*inc_end_goto-top*/ /*inc_begin_search-banner*/
  searchResultsBanner: `<div class="usf-sr-banner">
    <a :href="banner.url || 'javascript:void(0)'" :alt="banner.description">
        <img :src="banner.mediaUrl" style="max-width:100%">
    </a>
</div>
`,
  /*inc_end_search-banner*/ ////////////////////////
  // Filter templates
  // facet filters breadcrumb
  /*inc_begin_filters-breadcrumb*/
  filtersBreadcrumb: `<div v-if="usf.settings.filterNavigation.showFilterArea && root.facetFilters && root.facets && facetFilterIds.length" class="usf-refineby">
    <!-- Breadcrumb Header -->
    <div class="usf-title usf-clear">
        <span class="usf-pull-left usf-icon usf-icon-equalizer"></span>
        <span class="usf-label" v-html="loc.filters"></span>

        <!-- Clear all -->
        <button class="usf-clear-all usf-btn" v-html="loc.clearAll" @click="root.removeAllFacetFilters" :aria-label="loc.clearAllFilters"></button>
    </div>

    <!-- Breadcrumb Values -->
    <div class="usf-refineby__body">
        <template v-for="facetId in facetFilterIds" v-if="(facet = root.facets.find(fc => fc.id === facetId)) && (f = root.facetFilters[facetId])">
            <template v-for="queryValStr in f[1]">
                <div class="usf-refineby__item usf-pointer usf-clear" @click="root.removeFacetFilter(facetId, queryValStr)">
                    <button class="usf-btn"><span class="usf-filter-label" v-html="facet.title + ': '"></span><b v-html="root.formatBreadcrumbLabel(facet, f[0], queryValStr)"></b></button><span class="usf-remove"></span>
                </div>
            </template>
        </template>
    </div>
 </div>`,
  /*inc_end_filters-breadcrumb*/ // facet filters
  /*inc_begin_filters*/
  filters:
    // Vert & Horz modes have different render order
    `<div class="usf-facets usf-no-select usf-zone">
<!-- Mobile view -->
<template v-if="usf.isMobile">
    <div class="usf-close" @click="onMobileBack(1)"></div>
    <div class="usf-facets-wrapper">
        <!-- Header. shows 'Filters', facet name, etc. -->
        <div class="usf-header">
            <!-- Single facet mode -->
            <template v-if="isSingleFacetMode">
                <div class="usf-title" @click="onMobileBack(0)" v-html="facets[0].title"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clear"></div>
            </template>

            <!-- When a filter is selected -->
            <template v-else-if="mobileSelectedFacet">
                <div class="usf-title usf-back" @click="onMobileBack(0)" v-html="mobileSelectedFacet.title"></div>
                <div v-if="facetFilters && facetFilters[mobileSelectedFacet.id]" class="usf-clear" @click="removeFacetFilter(mobileSelectedFacet.id)" v-html="loc.clear"></div>
                <div v-else class="usf-all" v-html="loc.all"></div>
            </template>

            <!-- When no filter is selected -->
            <template v-else>
                <div class="usf-title" @click="onMobileBack(0)" v-html="loc.filters"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clearAll"></div>
            </template>
        </div>

        <div class="usf-body">
            <!-- List all filter options, in single facet mode -->
            <usf-filter v-if="isSingleFacetMode" :facet="facets[0]"></usf-filter>

            <!-- List all filter options, when a filter is selected -->
            <usf-filter v-else-if="mobileSelectedFacet" :facet="mobileSelectedFacet"></usf-filter>

            <!-- List all when there are more than one facet -->
            <template v-else :key="f.id" v-for="f in facets">
                <template v-if="canShowFilter(f)">
                    <div class="usf-facet-value" @click="onMobileSelectFacet(f)">
                        <span class="usf-title" v-html="f.title"></span>
                        <div v-if="(selectedFilterOptionValues = facetFilters && (ff = facetFilters[f.id]) ? ff[1] : null)" class="usf-dimmed">
                            <span v-for="cf in selectedFilterOptionValues" v-html="formatBreadcrumbLabel(f, f.facetName, cf)"></span>
                        </div>
                    </div>
                </template>
            </template>
        </div>

        <!-- View items -->
        <div class="usf-footer">
            <div @click="onMobileBack(1)" v-html="loc.viewItems"></div>
        </div>
    </div>
</template>

<!-- Desktop view -->
<template v-else>
    <usf-filter-breadcrumb></usf-filter-breadcrumb>    
    <!-- Filters Loader -->
    <div v-if="!facets" class="usf-facets__first-loader">
        <template v-for="i in 3">
            <div class="usf-facet"><div class="usf-title usf-no-select"><span class="usf-label"></span></div>
                <div v-if="!usf.settings.filters.horz" class="usf-container"><div class="usf-facet-values usf-facet-values--List"><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div></div></div>
            </div>
        </template>
    </div>
    <!-- Facets body -->
    <div v-else class="usf-facets__body">
        <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
    </div>
</template>
</div>`,
  /*inc_end_filters*/ // facet filter item
  /*inc_begin_filter*/
  filter:
    `<div v-if="canShow" class="usf-facet" :class="{'usf-collapsed': collapsed && !usf.isMobile, 'usf-has-filter': isInBreadcrumb}">
    <!-- Mobile filter -->
    <div v-if="usf.isMobile" class="usf-container">
        <!-- Search box -->
        <input v-if="hasSearchBox" class="usf-search-box" :aria-label="loc.filterOptions" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

        <!-- Values -->
        ` +
    _usfFilterBodyTemplate +
    `</div>

    <!-- Desktop filter -->
    <template v-else>
        <!-- Filter title -->
        <div class="usf-clear">
            <div class="usf-title usf-no-select" @click="onExpandCollapse">
                <button class="usf-label usf-btn" v-html="facet.title" :aria-label="usf.utils.format(loc.filterBy,facet.title)" :aria-expanded="!collapsed"></button>
                <usf-helptip v-if="facet.tooltip" :tooltip="facet.tooltip"></usf-helptip>            
                <!-- 'Clear all' button to clear the current facet filter. -->
                <button v-if="isInBreadcrumb" class="usf-clear-all usf-btn" :title="loc.clearFilterOptions" :aria-label="usf.utils.format(loc.clearFiltersBy,facet.title)" @click="onClear" v-html="loc.clear"></button>
            </div>
        </div>

        <!-- Filter body -->
        <div class="usf-container">
            <!-- Search box -->
            <input v-if="hasSearchBox" class="usf-search-box" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

            ` +
    _usfFilterBodyTemplate +
    `
        </div>
    </template>
</div>`,
  /*inc_end_filter*/ // facet filter option
  /*inc_begin_filter-option*/
  filterOption: `<div v-if="children" :class="(isSelected ? 'usf-selected ' : '') + ' usf-relative usf-facet-value usf-facet-value-single usf-with-children' + (collapsed ? ' usf-collapsed' : '')">
    <!-- option label -->
    <button class="usf-children-toggle usf-btn" v-if="children" @click="onToggleChildren"></button>
    <button class="usf-label usf-btn" v-html="label" @click="onToggle"></button>

    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobile)) && option.value !== undefined" class="usf-value">{{option.value}}</span>    

    <div class="usf-children-container" v-if="children && !collapsed">
        <button :class="'usf-child-item usf-btn usf-facet-value' + (isChildSelected(c) ? ' usf-selected' : '')" v-for="c in children" v-html="getChildLabel(c)" @click="onChildClick(c)"></span>
    </div>
</div>
<div v-else :class="(isSelected ? 'usf-selected ' : '') + (swatchImage ? ' usf-facet-value--with-background' : '') + (' usf-relative usf-facet-value usf-facet-value-' + (facet.multiple ? 'multiple' : 'single'))" :title="isSwatch || isBox ? option.label + ' (' + option.value + ')' : undefined" :style="usf.isMobile ? null : swatchStyle" @click="onToggle">
    <!-- checkbox -->
    <div v-if="!isBox && !isSwatch && facet.multiple" :class="'usf-checkbox' + (isSelected ? ' usf-checked' : '')">
        <span class="usf-checkbox-inner"></span>
    </div>

    <!-- swatch image in mobile -->
    <div v-if="swatchImage && usf.isMobile" class="usf-mobile-swatch" :style="swatchStyle"></div>

    <!-- option label -->
    <button class="usf-label usf-btn" v-html="label"></button>

    <!-- helper for swatch -->
    <button v-if="isSwatch" class="usf-btn-helper usf-btn" :aria-checked="isSelected" role="checkbox"></button>
    
    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobile)) && option.value !== undefined" class="usf-value">{{option.value}}</span>
</div>`,
  /*inc_end_filter-option*/ // Instant search popup
  /*inc_begin_instantsearch*/
  instantSearch: `<div :class="'usf-popup usf-zone usf-is usf-is--' + position + (shouldShow ? '' : ' usf-hide') + (isEmpty ? ' usf-empty' : '') + (firstLoader ? ' usf-is--first-loader': '')"  :style="usf.isMobile ? null : {left: this.left + 'px',top: this.top + 'px',width: this.width + 'px'}">
    <!-- Mobile search box -->
    <div v-if="usf.isMobile">
        <form class="usf-is__inputbox" :action="searchUrl" method="get" role="search">
            <span class="usf-icon usf-icon-back usf-close" @click="close"></span>
            <input name="q" autocomplete="off" ref="searchInput" :value="term" @input="onSearchBoxInput">
            <span class="usf-remove" v-if="term" @click="onClear"></span>
        </form>
    </div>

    <!-- First loader -->
    <div class="usf-is__first-loader" v-if="firstLoader">
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
    </div>

    <!-- All JS files loaded -->
    <template v-else>
        <!-- Empty view -->
        <div v-if="isEmpty" class="usf-is__no-results">
            <div style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-items.png?t=2') center no-repeat;min-height:160px"></div>
            <div v-html="usf.utils.format(loc.noMatchesFoundFor, term)"></div>
        </div>
        <template v-else>
            <!-- Body content -->
            <div class="usf-is__content">
                <!-- Products -->
                <div class="usf-is__matches">
                    <div class="usf-title" v-html="loc.productMatches"></div>
                    
                    <div class="usf-is__products" v-if="result.items.length">
                        <!-- Product -->
                        <usf-is-item v-for="p in result.items" :product="p" :result="result" :key="p.id + '-' + p.selectedVariantId"></usf-is-item>
                    </div>
                    <div class="usf-is__products" v-else style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-products.png?t=2') center no-repeat;min-height:250px"></div>
                </div>

                <!-- Suggestions, Collections, Pages -->
                <div class="usf-is__suggestions">
                    <!-- Suggestions -->
                    <template v-if="result.suggestions && result.suggestions.length">
                        <div class="usf-title" v-html="loc.searchSuggestions"></div>
                        <span v-for="s in result.suggestions" class="usf-is__suggestion" v-html="usf.utils.highlight(s, result.query)" @click="search(s)"></span>
                    </template>
                    
                    <!-- Collections -->
                    <template v-if="result.collections && result.collections.length">
                        <div class="usf-title" v-html="loc.collections"></div>

                        <template v-if="result.collections">
                            <span v-for="c in result.collections" class="usf-is__suggestion" v-html="usf.utils.highlight(c.title, result.query)" @click="selectCollection(c)"></span>
                        </template>
                    </template>

                    <!-- Pages -->
                    <template v-if="result.pages && result.pages.length">
                        <div class="usf-title" v-html="loc.pages"></div>

                        <template v-if="result.pages">
                            <span v-for="p in result.pages" class="usf-is__suggestion" v-html="usf.utils.highlight(p.title, result.query)" @click="selectPage(p)"></span>
                        </template>
                    </template>
                </div>
            </div>

            <!-- Footer -->
            <div class="usf-is__viewall">
                <span @click="search(queryOrTerm)" v-html="usf.utils.format(queryOrTerm ? loc.viewAllResultsFor : loc.viewAllResults, queryOrTerm)"></span>
            </div>
            
            <!-- Loader -->
            <div v-if="loader" class="usf-is__loader">
                <div class="usf-spinner"></div>
            </div>
        </template>
    </template>
</div>`,
  /*inc_end_instantsearch*/
  // Instant search item
  /*inc_begin_instantsearch-item*/
  instantSearchItem: `<span class="usf-is__product usf-clear" @click="onItemClick">
    <!-- Image -->
    <div class="usf-img-wrapper usf-pull-left">
        <img class="usf-img" :src="selectedImageUrl">
    </div>
    
    <div class="usf-pull-left">
        <!-- Title -->
        <div class="usf-title" v-html="usf.utils.highlight(product.title, result.query)"></div>

        <!-- Vendor -->
        <div class="usf-vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

        <!-- Prices -->
        <div class="usf-price-wrapper">
            <span class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice"></span>
            <span v-if="hasDiscount" class="usf-discount product-price__price product-price__sale" v-html="displayDiscountedPrice"></span>
        </div>
    </div>
</span>`,
  /*inc_end_instantsearch-item*/
};

usf.event.add("init", function () {
  var nodes = document.head.children;
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    if (
      n.href &&
      (n.href.indexOf("theme.scss.css") !== -1 ||
        n.href.indexOf("styles.css") !== -1)
    ) {
      usfFilesUrl = n.href;
      var m = usfFilesUrl.indexOf("/assets/");
      while (usfFilesUrl[--m] !== "/");
      while (usfFilesUrl[--m] !== "/");
      usfFilesUrl = usfFilesUrl.substring(0, m) + "/files/";
      break;
    }
  }
  usf.event.add(["sr_updated", "sr_viewChanged", "rerender"], function () {
    setTimeout(function () {
      theme.Sections.init();
      theme.Sections.register(
        "collection-template",
        theme.CollectionTemplateSection,
        {
          deferredLoad: false,
        }
      );
      theme.Sections.register("search-template", theme.SearchTemplateSection, {
        deferredLoad: false,
      });
    }, 300);
  });

  _usfSetDefaultSettings();

  _usfImageWidths = _usfIsDynamicImage
    ? [180, 220, 300, 360, 460, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]
    : [usf.settings.search.imageSize];

  var ShowcaseGridItem = {
    mixins: [usf.components.SearchResultsGridItem],
    template: usf.templates.ShowcaseGridViewItem,
    props: {
      product: Object,
      term: String,
      result: Object,
      imageSize: { type: String, default: "list" },
      productIndex: Number,
    },
    data() {
      this.product["subtitle"] = _ql_usf_getTitle(this.product.tags);

      var _ql_colornum = _ql_usf_getColorNum(this.product.tags);

      this.product["colornum2"] = _ql_colornum;

      if (this.product.options.length == 1) {
        this.product["colornum"] =
          _ql_colornum > this.product.variants.length
            ? _ql_colornum
            : this.product.variants.length;
      } else {
        this.product["colornum"] = _ql_colornum;
      }

      var product = this.product;
      var option, option_handle;
      var option_index = 0;
      var optionWithValues = [];
      var optionRendereds = {};
      var product_has_swatches = false;
      if (
        _usfGlobalSettings.swatch_enabled &&
        _usfGlobalSettings.prod_block_swatches
      ) {
        for (let i = 0; i < product.options.length; i++) {
          var o = product.options[i];
          var o_name = _usfHandlezie(o.name);
          if (o.name == _usfGlobalSettings.swatch_option_name) {
            option_handle = o_name;
            option_index = i;
            option = o;
            product_has_swatches = true;
            break;
          }
        }
      }
      if (option) {
        option.values.filter((o) => {
          for (let x = 0; x < product.variants.length; x++) {
            var v = product.variants[x];
            if (v.options[option_index] != undefined) {
              var vrOpt = option.values[v.options[option_index]];
              if (o === vrOpt && !optionRendereds[o]) {
                optionRendereds[o] = 1;
                optionWithValues.push({
                  value: o,
                  image: product.images[v.imageIndex],
                  variant: v,
                });
              }
            }
          }
        });
      }

      return {
        productHasSwatches: product_has_swatches,
        colorOption: option,
        colorValues: optionWithValues,
        colorOptionIndex: option_index,
      };
    },
    computed: {
      selectedImgRatio() {
        return _usfGetImageRatio(this.selectedImage);
      },
      hoverImgRatio() {
        return _usfGetImageRatio(this.hoverImage);
      },
    },
  };
  usf.register(ShowcaseGridItem, null, "usf-showcase-griditem");

  /**
   * color swatch component
   * */
  var UsfSwatches = {
    props: {
      product: Object,
      optionWithValues: Array,
      option: Object,
      option_index: Number,
    },
    methods: {
      _variantUrl(v) {
        return _usfAddQuery(this.$parent.productUrl, `variant=${v.id}`);
      },
    },
    render(h) {
      return h("div", null, [
        this.optionWithValues.length && this.option
          ? h(
          "ul",
          {
            class:
              "cc-swatches " +
              (_usfGlobalSettings.swatch_use_prod_images
                ? `cc-swatches-prod-img cc-swatches-prod-img-${_usfGlobalSettings.swatch_prod_images_shape}`
                : ""),
            attrs: {
              "data-option-name": this.option.name,
            },
          },
          [
            this.product.options.length == 1
              ? this.product.variants.map((v, index) => {
                  if (index <= 3) {
                    var img = this.product.images[v.imageIndex];
                    var _sold = usf.utils.isVariantSoldOut(v);
                    var optValue =
                      this.option.values[v.options[this.option_index]];
                    var attrs = {
                      rel: "nofollow",
                      href: this._variantUrl(v),
                      title: optValue,
                      "data-variant-image": img
                        ? _usfGetOriginImgWithSize(img.url, "{width}x")
                        : false,
                    };
                    var style = "";
                    if (
                      _usfGlobalSettings.swatch_method == "image" &&
                      _usfGlobalSettings.swatch_use_prod_images == false
                    ) {
                      var optHandle = _usfHandlezie(optValue);
                      var url =
                        usfFilesUrl + optHandle + "_48x48_crop_center.png";
                      attrs["data-bgset"] = url;
                    } else if (
                      _usfGlobalSettings.swatch_use_prod_images &&
                      img
                    ) {
                      attrs["data-bgset"] = _usfGetOriginImgWithSize(
                        img.url,
                        "72x_crop_center"
                      );
                      if (
                        _usfGlobalSettings.swatch_prod_images_shape == "natural"
                      ) {
                        style =
                          "padding-top:" + 100 / _usfGetImageRatio(img) + "%;";
                      }
                    } else {
                      style = "background-color:" + optHandle;
                    }
                    return h(
                      "li", 
                    {
                      class: "choosed",
                      attrs: {
                        "data-value": optValue,
                      },
                    },
                    [
                      h(
                        "a",
                        {
                          attrs: attrs,
                          staticClass: "lazyload",
                          style: style,
                          class: {
                            unavailable: usf.utils.isVariantSoldOut(v),
                          },
                        },
                        [optValue]
                      ),
                    ]
                    );
                  }
                })
              : null,

            this.product.options.length > 1
              ? this.optionWithValues.map((o, index) => {
                  if (index <= 3) {
                    var img = o.image;
                    var v = o.variant;
                    var _sold = usf.utils.isVariantSoldOut(v);
                    var optValue = o.value;
                    var attrs = {
                      rel: "nofollow",
                      href: this._variantUrl(v),
                      title: optValue,
                      "data-variant-image": img
                        ? _usfGetOriginImgWithSize(img.url, "{width}x")
                        : false,
                    };
                    var style = "";
                    if (
                      _usfGlobalSettings.swatch_method == "image" &&
                      _usfGlobalSettings.swatch_use_prod_images == false
                    ) {
                      var optHandle = _usfHandlezie(optValue);
                      var url =
                        usfFilesUrl + optHandle + "_48x48_crop_center.png";
                      attrs["data-bgset"] = url;
                    } else if (
                      _usfGlobalSettings.swatch_use_prod_images &&
                      img
                    ) {
                      attrs["data-bgset"] = _usfGetOriginImgWithSize(
                        img.url,
                        "72x_crop_center"
                      );
                      if (
                        _usfGlobalSettings.swatch_prod_images_shape == "natural"
                      ) {
                        style =
                          "padding-top:" + 100 / _usfGetImageRatio(img) + "%;";
                      }
                    } else {
                      style = "background-color:" + optHandle;
                    }
                    return h(
                      "li",
                    {
                      class: index == 0 ? "choosed" : "",
                      attrs: {
                        "data-value": optValue,
                      },
                    },
                     [
                      h(
                        "a",
                        {
                          attrs: attrs,
                          staticClass: "lazyload",
                          style: style,
                          class: {
                            unavailable: usf.utils.isVariantSoldOut(v),
                          },
                        },
                        [optValue]
                      ),
                    ]
                    );
                  }
                })
              : null,

            /*
                this.product.options.length == 1 && this.product.variants.length > 4 ? h('li', { class: 'product-block__more-label' }, [
                    h('span', ['+ ' + (this.product.variants.length - 4)])
                ]) : null,
				
                this.product.options.length > 1 && this.optionWithValues.length > 4 ? h('li', { class: 'product-block__more-label' }, [
                    h('span', ['+ ' + (this.optionWithValues.length - 4)])
                ]) : null,
				*/

            this.product.options.length == 1 && this.product.colornum > 4
              ? h("li", { class: "product-block__more-label" }, [
                  h("span", ["+" + (this.product.colornum - 4)]),
                ])
              : null,

            this.product.options.length > 1 &&
            (this.product.colornum > 4 || this.optionWithValues.length > 4)
              ? this.product.colornum > this.optionWithValues.length
                ? h("li", { class: "product-block__more-label" }, [
                    h("span", ["+" + (this.product.colornum - 4)]),
                  ])
                : h("li", { class: "product-block__more-label" }, [
                    h("span", ["+" + (this.optionWithValues.length - 4)]),
                  ])
              : null,
          ]
          )
          : null,
          this.product.options.map((option, index) => {
            if (index == 1) {
              return h(
                "div",
                {
                  class: "ql-mb-size",
                },
                [
                  h(
                    "div",
                    {
                      class: "header",
                    },
                    [
                      h("p", "SELECT SIZE"),
                      h("span", this.product.title),
                      h(
                        "a",
                        {
                          class: "modal-close",
                          attrs: {
                            "data-modal-close": "",
                          },
                        },
                        "×"
                      ),
                    ]
                  ),
                  h(
                    "ul",
                    {
                      class: "clickyboxes cc-init ql-size-clickboxes",
                      attrs: {
                        "data-option-name": option.name.toLowerCase(),
                      },
                    },
                    [
                      option.values.map((value, index) => {
                        return h("li", [
                          h(
                            "a",
                            {
                              class: "lazyload",
                              attrs: {
                                "data-option-item": value.toLowerCase(),
                              },
                            },
                            [value]
                          ),
                        ]);
                      }),
                    ]
                  ),
                ]
              );
            }
            return;
          }),
        ]);
    },
  };
  usf.register(UsfSwatches, null, "usf-swatches");

  if (usf.isMobile && usf.settings.instantSearch.online) {
    var searchBtn = document.querySelector(".cart.nav-search");
    if (searchBtn)
      searchBtn.addEventListener("click", function () {
        event.preventDefault();
        var inputs = document.querySelectorAll(
          usf.settings.instantSearch.searchBoxSelector
        );
        if (inputs.length) {
          usf.event.raise("is_show", inputs[0]);
        }
      });
    // this delegate is executed when the instant search is shown
    var dlg = function () {
      setTimeout(function () {
        var btnClose = document.querySelector(".modal-close");
        if (btnClose) btnClose.click();
      }, 400);
    };

    // if the instant search is already showing, execute the dlg
    if (usf.isInstantSearchShowing) dlg();

    // still register to 'is_show' event to hide the drawer.
    usf.event.add("is_show", dlg);
  }

  var input = document.querySelector(
    '#search-modal .search-form input[name="q"]'
  );
  if (input) {
    input.addEventListener("keyup", function (event) {
      if (event.keyCode == 13) {
        var inputs = document.querySelectorAll(
          usf.settings.instantSearch.searchBoxSelector
        );
        for (el of inputs) {
          el.value = input.value;
        }

        var btnClose = document.querySelector("[data-modal-nav-toggle]");
        if (btnClose) btnClose.click();
      }
    });

    var submitButton = document.querySelector(
      '#search-modal .search-form button[type="submit"]'
    );
    if (submitButton)
      submitButton.addEventListener("click", function () {
        var inputs = document.querySelectorAll(
          usf.settings.instantSearch.searchBoxSelector
        );
        for (el of inputs) {
          el.value = input.value;
        }
        var btnClose = document.querySelector("[data-modal-nav-toggle]");
        if (btnClose) btnClose.click();
      });
  }
});

function _usfGetVariantTitle(options, p) {
  if (!p.options.length) return "Default title";
  var arrs = [];
  for (let i = 0; i < options.length; i++) {
    var o = options[i];
    arrs.push(p.options[i].values[o]);
  }
  return arrs.join(" / ");
}

function _usfGetDataImages(p, productHasSwatches) {
  if (p.images.length > 1) {
    if (productHasSwatches || _usfGlobalSettings.prod_hover == "all_images") {
      return p.images
        .map((img) => _usfGetOriginImgWithSize(img.url, "{width}x"))
        .join(",");
    } else return false;
  } else return false;
}
var _usfIsNew = function (p) {
  if (_usfGlobalSettings.prod_new_method == "tag") {
    return p.tags.includes("New");
  } else if (_usfGlobalSettings.prod_new_method == "date") {
    var day = p.date;
    var dayNow = new Date(Date.now());
    var productDate = new Date(day);
    var distance = dayNow - productDate;
    var diffDays = Math.floor(distance / (1000 * 60 * 60 * 24));

    return diffDays < _usfGlobalSettings.prod_new_limit_int;
  } else {
    for (let i = 0; i < p.collections.length; i++) {
      var colId = p.collections[i];
      var colHandle = _usfCollectionById[colId];
      var splitColHandle = colHandle.split("-");
      return splitColHandle.includes("new");
    }
  }
};

function _usfSetDefaultSettings() {
  window._usf_grid_class =
    window._usf_grid_class ||
    " product-list cf product-list--rows mob-two-col grid--uniform ";
  window._usf_product_class = window._usf_product_class || "column quarter";
  window._usfGlobalSettings = window._usfGlobalSettings || {
    prod_hover: "second_image",
    prod_label_layout: "standard",
    quickbuy_enabled: true,
    show_product_block_reviews: false,
    swatch_enabled: true,
    prod_block_swatches: true,
    swatch_option_name: "Color",
    swatch_use_prod_images: false,
    swatch_prod_images_shape: "natural",
    swatch_method: "image",
    show_sold_out_label: true,
    show_sale_label: true,
    show_new_label: true,
    prod_new_method: "tag",
    prod_new_limit_int: 40,
  };
  window._usfSectionSettings = window._usfSectionSettings || {
    show_vendor: false,
  };
  window._usfFromText = window._usfFromText || usf.settings.translation.from;
  window._usfSoldOutText =
    window._usfSoldOutText || usf.settings.translation.soldOut;
  window._usfSaleText = window._usfSaleText || usf.settings.translation.sale;
  window._usfNewText = window._usfNewText || "New in";
  window._usfCollectionById = window._usfCollectionById || {};
}