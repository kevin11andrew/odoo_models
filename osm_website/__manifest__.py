{
    'name': 'osm Manager',
    'author': 'Kevin',
    'version': '1.0.0',
    'category': 'osmManager',
    'description': 'Allows us to create and edit osm building block in website module',
    'depends': ['website'],
    'data': [
        'views/snippet.xml','views/options.xml'
    ],
    'assets': {
        'web.assets_frontend': [
            ('prepend','/osm_website/static/src/js/Display.js'),
            # '/osm_website/static/src/js/OpenLayers.js',
            '/osm_website/static/src/js/snippet.js',
            # '/osm_website/static/src/js/options.js',
            '/osm_website/static/src/js/hello.js',
            '/osm_website/static/src/css/snippet.css',
            '/osm_website/views/myStyle.css',
            # 'templates/assets.xml',
            '/osm_website/static/src/js/leaflet.js',
            '/osm_website/static/src/js/test_leaflet.js',
            '/osm_website/static/src/css/leaflet.css',
            '/osm_website/static/src/css/test_leaflet.css'
        ],
        # 'web.assets_backend': [
        #     '/osm_website/static/src/js/hello.js',
        # ],
        'web.assets_qweb': [
            # '/osm_website/static/src/xml/snippet.xml',
            'templates/assets.xml',
        ]
    }
}