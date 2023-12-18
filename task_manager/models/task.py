from odoo import api, fields, models
from datetime import date
class TaskManager(models.Model):
    _name = "tasks.task"
    _inherit = ["mail.thread"]
    _description = "Tasks"
    name = fields.Char(string="Name", required=True, tracking=True) # Tracking true is given to track it in chatter
    is_completed = fields.Boolean(string="Is Completed", tracking=True)
    content = fields.Text(string="Content")
    priority = fields.Selection([('a', 'High'), ('b', 'Medium'), ('c', 'Low')],required=True, string="Priority", tracking=True)
    today = date.today()
    start_date=fields.Date(string="Start Date",default=today,tracking=True)

    completion_date=fields.Date(string="Completeion Date",tracking=True)
