

// import { renderToElement } from "@web/core/utils/render";
// import publicWidget from "@web/legacy/js/public/public_widget";

// const OSMSnippet = publicWidget.Widget.extend({
//     selector: ".s_osm",
//     start() {
//         this.containerEl = this.$target[0].querySelector(".days_container")
//         // fix the following line
//         this.containerEl.appendChild(renderToElement("osm_website.map",{
//             widget: this
//         })
//         );
//     },
//     destroy(){this.containerEl.remove()}
// });

// publicWidget.registry.s_osm = OSMSnippet;


odoo.define('your_module.your_building_block.controller', function(require){
    "use strict";
    
    var AbstractField = require('web.AbstractField');
    var YourBuildingBlockWidget = AbstractField.extend({
        start: function() {
            console.log("THE HELLO2.JS IS RUNNING");
            this._super.apply(this, arguments);
        }
    })
    return YourBuildingBlockWidget;
});