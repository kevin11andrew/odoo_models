{
'name': 'osm Manager',
'author': 'Kevin',
'version': '1.0.0',
'category': 'osmManager',
'description': 'Allows us to create, edit and search for osms',
'depends': ['event', 'website', 'website_event'],
'data': [
'security/ir.model.access.csv',
# 'views/menu.xml',
'views/osm.xml',
],
'demo': [],
'installable': True,
'assets': {},
}