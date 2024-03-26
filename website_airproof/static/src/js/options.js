/** @odoo-module */

import options from 'web_editor.snippets.options';

console.log("options.js loaded")

options.registry.CustomMethodName = options.Class.extend({
    // onBuilt() {
    //     console.log("onBuilt");
    // },
    // start() {
    //     console.log("start");
    // }

    /*
    * @see
    */
    async selectAddress(previewMode, widgetValue, params){
        console.log("OPTIONS.JS IS RUNNING A FUNCTION")
    }

});


export default options.registry.CustomMethodName;