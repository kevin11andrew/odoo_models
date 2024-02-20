{
    'name': 'osm Manager',
    'author': 'Kevin',
    'version': '1.0.0',
    'category': 'osmManager',
    'description': 'Allows us to create and edit osm building block in website module',
    'depends': ['website'],
    'data': [
        'views/snippets/snippet.xml',
        # 'views/snippets/options.xml'
    ],
    'assets': {
        'web.assets_frontend': [
            '/osm_website/static/src/js/snippet.js',
            '/osm_website/static/src/js/hello.js',
            # 'templates/assets.xml',
            '/osm_website/static/src/js/leaflet.js',
            '/osm_website/static/src/js/test_leaflet.js',
            '/osm_website/static/src/css/leaflet.css',
            '/osm_website/static/src/css/test_leaflet.css',

            '/osm_website/static/src/js/test1.js',
            '/osm_website/static/src/js/test1.js'
        ],
        # 'web.assets_backend': [
        #     '/osm_website/static/src/js/hello.js',
        # ],
    }
}