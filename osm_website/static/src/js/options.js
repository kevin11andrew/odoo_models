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
            const aEl = document.createElement('a');
            aEl.setAttribute('id', 'osm_map_link');
            divEl.setAttribute('id', 'osm_map');

            // divEl.classList.add('o_not_editable');
            divEl.classList.add('row');
            divEl.setAttribute('width', '100%');
            divEl.setAttribute('height', '100%');
            divEl.setAttribute('frameborder', '0');
            divEl.setAttribute('scrolling', 'no');
            divEl.setAttribute('marginheight', '0');
            divEl.setAttribute('marginwidth', '0');

            // this.el.querySelector('.s_map_color_filter').before(divEl);
            this.$target[0].querySelector('.s_map_osm_color_filter').before(divEl);
            this.$target[0].querySelector('.s_map_osm_color_filter').before(divEl);
            // this._updateSource();

           
        }
    },
    // destroy()
    // {
    //     this.$target[0].querySelector('#osm_map').remove()
    // }


});

export default {
    Map: options.registry.Osmmap,
};