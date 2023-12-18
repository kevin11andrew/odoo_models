odoo.define('osm_website.snippet', function(require)
{
    'use strict';
    var ajax = require('web.ajax');
    var publicWidget = require('web.public.widget');

    var DynamicSnippet = publicWidget.Widget.extend({

        selector: '.js_dynamic_snippet_osm',

        start: function(){
            var self=this
            ajax.jsonRpc('/get_location', 'call', {}).then(function(res){
                console.log( )
                if(res){ 
                    self.$el.find('js_product_sold').html(res)
                }
            })
        }

    });

    publicWidget.registry.DynamicSnippetOSM=DynamicSnippet;
    return DynamicSnippet;

}); 