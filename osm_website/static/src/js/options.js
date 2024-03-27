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
        // The iframe is added here to the snippet when it is dropped onto the
        // page. However, in the case where a custom snippet saved by the user
        // is dropped, the iframe already exists and doesn't need to be added
        // again.
        console.log("BUILD MAP IN PROGRESS")
        console.log("START IN PROGRESS inside 000 js")
        if (!this.el.querySelector('.s_map_embedded')) {
            // The iframe is not found inside the snippet. This is probably due
            // the sanitization of a field during the save, like in a product
            // description field.
            // In such cases, reconstruct the iframe.
            const dataset = this.el.dataset;
            // if (dataset.mapAddress) {
            //     const iframeEl = generateGMapIframe();
            //     iframeEl.setAttribute('src', generateGMapLink(dataset));
            //     this.el.querySelector('.s_map_osm_color_filter').before(iframeEl);
            // }

            // console.log("dataset.mapAddress")
            // console.log(dataset.mapAddress)
            var map = L.map('s_map_frame').setView([51.505, -0.09], 14);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            // place=prompt("Place")
            // fetch("https://nominatim.openstreetmap.org/search?format=json&q="+dataset.mapAddress)
            //     .then(result => result.json())
            //     .then(parsedResult => {
            //         console.log(parsedResult.length);
            //         console.log(parsedResult)
            //         // console.log(parsedResult[0].display_name)
            //         if(parsedResult.length>0)
            //         {
            //             var marker = L.marker([parsedResult[0].lat, parsedResult[0].lon]).addTo(map);parsedResult[0].lat
            //             map.setView(new L.LatLng(parsedResult[0].lat, parsedResult[0].lon),14)
            //         }
            //         else
            //             console.log("Not Found")
            //     });

        }
        return this._super(...arguments);
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