/** @odoo-module **/

import publicWidget from 'web.public.widget';
import {generateGMapLink, generateGMapIframe} from 'website.utils';
// import leaflet from 'osm_website'

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
            // if (dataset.mapAddress) {
            //     const iframeEl = generateGMapIframe();
            //     iframeEl.setAttribute('src', generateGMapLink(dataset));
            //     this.el.querySelector('.s_map_osm_color_filter').before(iframeEl);
            // }

            console.log("dataset.mapAddress")
            console.log(dataset.mapAddress)
            var map = L.map('s_map_frame').setView([51.505, -0.09], 14);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            // place=prompt("Place")
            fetch("https://nominatim.openstreetmap.org/search?format=json&q="+dataset.mapAddress)
                .then(result => result.json())
                .then(parsedResult => {
                    console.log(parsedResult.length);
                    console.log(parsedResult)
                    // console.log(parsedResult[0].display_name)
                    if(parsedResult.length>0)
                    {
                        var marker = L.marker([parsedResult[0].lat, parsedResult[0].lon]).addTo(map);parsedResult[0].lat
                        map.setView(new L.LatLng(parsedResult[0].lat, parsedResult[0].lon),14)
                    }
                    else
                        console.log("Not Found")
                });

        }
        return this._super(...arguments);
    },
});

console.log("000 JS before end")

export default publicWidget.registry.Osmmap;
