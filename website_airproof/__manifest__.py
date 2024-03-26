{
    'name': 'TESTMODEL',
    'author': 'Kevin',
    'version': '1.0.0',
    'category': 'TEST',
    'description': 'TESTING BASIC MODULE',
    'depends': ['website'],
    'data': [
        'views/snippets/s_airproof_snippet.xml',
        # 'views/snippets/options.xml',
        
    ],
    'assets': {
        'web.assets_frontend': [
            # The following 2 ways of specification do not work
            # 'static/src/snippets/s_airproof_snippet/options.js',
            # '/static/src/js/options.js',
            'website_airproof/static/src/js/options.js'
            # 'static/src/snippets/s_airproof_snippet/000.js'
         ],
        #  'web.assets_backend': [
        #     'static/src/snippets/s_airproof_snippet/options.js'
        #  ],
    }
}