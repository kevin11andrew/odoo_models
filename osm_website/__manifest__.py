{
    'name': 'osm Manager',
    'author': 'Kevin',
    'version': '1.0.0',
    'category': 'osmManager',
    'description': 'Allows us to create and edit osm building block in website module',
    'depends': ['website'],
    'data': [
        'views/snippet.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            '/osm_website/views/Display.js',
            '/osm_website/views/OpenLayers.js',
            '/osm_website/static/src/js/snippet.js',
            '/osm_website/static/src/css/snippet.css',
            '/osm_website/views/myStyle.css',
        ],
        'web.assets_qweb': [
            '/osm_website/static/src/xml/snippet.xml'
        ]
    }
}