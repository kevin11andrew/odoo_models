/** @odoo-module **/

import {_t} from 'web.core';
import options from 'web_editor.snippets.options';
import {generateGMapIframe, generateGMapLink} from 'website.utils';


console.log("Loaded Options.js")
options.registry.Osmmap = options.Class.extend({
    /**
     * @override
     */
    onBuilt() {
        // The iframe is added here to the snippet when it is dropped onto the
        // page. However, in the case where a custom snippet saved by the user
        // is dropped, the iframe already exists and doesn't need to be added
        // again.
        console.log("BUILD MAP IN PROGRESS")
        if (!this.$target[0].querySelector('.s_map_embedded')) {
            const iframeEl = generateGMapIframe();
            this.$target[0].querySelector('.s_map_osm_color_filter').before(iframeEl);
            this._updateSource();
        }
    },

    //--------------------------------------------------------------------------
    // Options
    //--------------------------------------------------------------------------

    /**
     * @see this.selectClass for parameters
     */
    async selectDataAttribute(previewMode, widgetValue, params) {
        await this._super(...arguments);
        if (['mapAddress', 'mapType', 'mapZoom'].includes(params.attributeName)) {
            this._updateSource();
        }
    },
    /**
     * @see this.selectClass for parameters
     */
    async showDescription(previewMode, widgetValue, params) {
        const descriptionEl = this.$target[0].querySelector('.description');
        if (widgetValue && !descriptionEl) {
            this.$target.append($(`
                <div class="description">
                    <font>${_t('Visit us:')}</font>
                    <span>${_t('Our office is open Monday – Friday 8:30 a.m. – 4:00 p.m.')}</span>
                </div>`)
            );
        } else if (!widgetValue && descriptionEl) {
            descriptionEl.remove();
        }
    },

    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    /**
     * @override
     */
    _computeWidgetState(methodName, params) {
        if (methodName === 'showDescription') {
            return !!this.$target[0].querySelector('.description');
        }
        return this._super(...arguments);
    },
    /**
     * @private
     */
    _updateSource() {
        const dataset = this.$target[0].dataset;
        const $embedded = this.$target.find('.s_map_embedded');
        const $info = this.$target.find('.missing_option_warning');
        if (dataset.mapAddress) {
            const url = generateGMapLink(dataset);
            if (url !== $embedded.attr('src')) {
                $embedded.attr('src', url);
            }
            $embedded.removeClass('d-none');
            $info.addClass('d-none');
        } else {
            $embedded.attr('src', 'about:blank');
            $embedded.addClass('d-none');
            $info.removeClass('d-none');
        }
    },
});

export default {
    Map: options.registry.Osmmap,
};



///** @odoo-module **/
//import  { renderToElement } from "@web/core/utils/render";
//import publicWidget from "@web/legacy/js/public/public_widget" ;
//const OSMSnippet = publicWidget.Widget.extend({
//    selector: ".s_map_osm",
//    // start()
//    onBuilt()
//    {
//        console.log("HELLO");
//        this.containerEl=this.$target[0].querySelector(".s_map_color_filter");
//        this.containerEl.appendChild(renderToElement("osm_website.map_data",{
//            widget:this
//        })
//        );
//    },
//    destroy() { this.containerEl.remove() }
//});
//
//publicWidget.registry.s_map_osm = OSMSnippet;