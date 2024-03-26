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
        'web.assets_wysiwyg': [
            'static/src/snippets/s_airproof_snippet/options.js'
         ],
    }
}