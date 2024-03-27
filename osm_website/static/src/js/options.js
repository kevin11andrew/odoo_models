/** @odoo-module **/

import {_t} from 'web.core';
import options from 'web_editor.snippets.options';
import {generateGMapIframe, generateGMapLink} from 'website.utils';


console.log("Loaded Options.js")
options.registry.Osmmap = options.Class.extend({
    selector: '.s_map_osm',

    /**
     * @override
     */
    onBuilt() {
        console.log("BUILD MAP IN PROGRESS")
        console.log(this.$target[0])
        // var map = L.map('s_map_frame').setView([51.505, -0.09], 14);
        // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     maxZoom: 19,
        //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // }).addTo(map);
        // this.$target[0].querySelector('s_map_osm_color_filter').before(map);
        // return this._super(...arguments);

        if (!this.$target[0].querySelector('#osm_map')) {
            // const iframeEl = generateGMapIframe();

            const divEl = document.createElement('div');
            divEl.setAttribute('id', 'osm_map');
            // this.el.querySelector('.s_map_color_filter').before(divEl);

            this.$target[0].querySelector('.s_map_osm_color_filter').before(divEl);
            // this._updateSource();
        }
    },

    //--------------------------------------------------------------------------
    // Options
    //--------------------------------------------------------------------------

    /**
     * @see this.selectClass for parameters
     */
    async selectDataAttribute(previewMode, widgetValue, params) {
        console.log("selectDataAttribute")
        console.log(params)
        await this._super(...arguments);
        if (['mapAddress', 'mapType', 'mapZoom'].includes(params.attributeName)) {
            this._updateSource();
        }
    },

    _updateSource() {
        console.log("Update Source Triggered")
        // const dataset = this.$target[0].dataset;
        // const $embedded = this.$target.find('.s_map_embedded');
        // const $info = this.$target.find('.missing_option_warning');
        // if (dataset.mapAddress) {
        //     const url = generateGMapLink(dataset);
        //     if (url !== $embedded.attr('src')) {
        //         $embedded.attr('src', url);
        //     }
        //     $embedded.removeClass('d-none');
        //     $info.addClass('d-none');
        // } else {
        //     $embedded.attr('src', 'about:blank');
        //     $embedded.addClass('d-none');
        //     $info.removeClass('d-none');
        // }
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