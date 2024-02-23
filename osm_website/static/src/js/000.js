/** @odoo-module **/

import publicWidget from 'web.public.widget';
import {generateGMapLink, generateGMapIframe} from 'website.utils';

console.log("Loaded 000.js")

publicWidget.registry.Osmmap = publicWidget.Widget.extend({
    selector: '.s_map_osm',

    /**
     * @override
     */
    start() {
        console.log("START IN PROGRESS inside 000 js")
        if (!this.el.querySelector('.s_map_embedded')) {
            // The iframe is not found inside the snippet. This is probably due
            // the sanitization of a field during the save, like in a product
            // description field.
            // In such cases, reconstruct the iframe.
            const dataset = this.el.dataset;
            if (dataset.mapAddress) {
                const iframeEl = generateGMapIframe();
                iframeEl.setAttribute('src', generateGMapLink(dataset));
                this.el.querySelector('.s_map_osm_color_filter').before(iframeEl);
            }
        }
        return this._super(...arguments);
    },
});

console.log("000 JS before end")

export default publicWidget.registry.Osmmap;
