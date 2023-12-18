{
'name': 'Task Manager',
'author': 'Kevin',
'version': '1.0.0',
'category': 'TaskManager',
'description': 'Allows us to create, edit and search for tasks',
'depends': ['mail'],
'data': [
'security/ir.model.access.csv',
'views/menu.xml',
'views/task.xml',
],
'demo': [],
'installable': True,
'assets': {},
}