/** @odoo-module **/

import publicWidget from 'web.public.widget';
import {generateGMapLink, generateGMapIframe} from 'website.utils';
// import leaflet from 'osm_website'

console.log("Loaded 000.js")
var map
publicWidget.registry.Osmmap = publicWidget.Widget.extend({
    selector: '.s_map_osm',

    /**
     * @override
     */
    start() {
        // console.log("START inside 000 js");
    //     if (!this.el.querySelector('.s_map_embedded')) {
    //         // The iframe is not found inside the snippet. This is probably due
    //         // the sanitization of a field during the save, like in a product
    //         // description field.
    //         // In such cases, reconstruct the iframe.
    //         const dataset = this.el.dataset;
    //         // if (dataset.mapAddress) {
    //         //     const iframeEl = generateGMapIframe();
    //         //     iframeEl.setAttribute('src', generateGMapLink(dataset));
    //         //     this.el.querySelector('.s_map_osm_color_filter').before(iframeEl);
    //         // }

    //         console.log("dataset.mapAddress")
    //         console.log(dataset.mapAddress)
    //         var map = L.map('s_map_frame').setView([51.505, -0.09], 14);
    //         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //             maxZoom: 19,
    //             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    //         }).addTo(map);
    //         // place=prompt("Place")
    //         fetch("https://nominatim.openstreetmap.org/search?format=json&q="+dataset.mapAddress)
    //             .then(result => result.json())
    //             .then(parsedResult => {
    //                 console.log(parsedResult.length);
    //                 console.log(parsedResult)
    //                 // console.log(parsedResult[0].display_name)
    //                 if(parsedResult.length>0)
    //                 {
    //                     var marker = L.marker([parsedResult[0].lat, parsedResult[0].lon]).addTo(map);parsedResult[0].lat
    //                     map.setView(new L.LatLng(parsedResult[0].lat, parsedResult[0].lon),14)
    //                 }
    //                 else
    //                     console.log("Not Found")
    //             });

    //     }
    //     return this._super(...arguments);

        // if (!this.el.querySelector('#osm_map')) {
        if ( !document.querySelector("#osm_map")) {
            const divEl = document.createElement('div');
                divEl.setAttribute('id', 'osm_map');

                divEl.classList.add('s_map_embedded', 'o_not_editable');
                divEl.setAttribute('width', '100%');
                divEl.setAttribute('height', '100%');
                divEl.setAttribute('frameborder', '0');
                divEl.setAttribute('scrolling', 'no');
                divEl.setAttribute('marginheight', '0');
                divEl.setAttribute('marginwidth', '0');
                    // 'src', generateGMapLink(dataset));
                this.el.querySelector('.s_map_color_filter').before(divEl);
        }
            // The iframe is not found inside the snippet. This is probably due
            // the sanitization of a field during the save, like in a product
            // description field.
            // In such cases, reconstruct the iframe.
            const dataset = this.el.dataset;
            console.log("dataset.mapAddress")
            console.log(dataset.mapAddress)
            if (dataset.mapAddress) {
                // const divEl = document.createElement('div');
                // divEl.setAttribute('id', 'osm_map');
                //     // 'src', generateGMapLink(dataset));
                // this.el.querySelector('.s_map_color_filter').before(divEl);
            
                console.log("LLLLLLLLLLLLLLLLLLLLLL")
                console.log(L)
                console.log("MAAAAPPP0")
                console.log(map)
                if(!map)
                {
                    map = L.map('osm_map').setView([51.505, -0.09], 14);

                    console.log("MAAAAPPP1")
                    console.log(map)
                    // if(map){
                        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            maxZoom: 19,
                            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        }).addTo(map);
                    // }
                    console.log("MAAAAPPP2")
                    console.log(map)
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
                function onMapClick(e) {
                    window.open("https://nominatim.openstreetmap.org/ui/search.html?q="+dataset.mapAddress);
                }
                
                map.on('click', onMapClick);
            }
        // }
        return this._super(...arguments);
    },
    
});

console.log("000 JS before end")

export default publicWidget.registry.Osmmap;
