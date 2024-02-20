/** @odoo-module **/
import  { renderToElement } from "@web/core/utils/render";
import publicWidget from "@web/legacy/js/public/public_widget" ;
const OSMSnippet = publicWidget.Widget.extend({
    selector: ".s_map_osm",
    // start()
    onBuilt()
    {
        console.log("HELLO");
        this.containerEl=this.$target[0].querySelector(".s_map_color_filter");
        this.containerEl.appendChild(renderToElement("osm_website.map_data",{
            widget:this
        })
        );
    },
    destroy() { this.containerEl.remove() }
});

publicWidget.registry.s_map_osm = OSMSnippet;