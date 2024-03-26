/** @odoo-module */

import options from 'web_editor.snippets.options';

console.log("options.js loaded")

options.registry.CustomMethodName = options.Class.extend({
    onBuilt() {
        console.log("onBuilt");
    },

});


export default options.registry.CustomMethodName;