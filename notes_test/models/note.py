from odoo import api, fields, models
class NotesTest(models.Model):
    _name = "notes.note"
    _inherit = ["mail.thread"]
    _description = "Notes"
    name = fields.Char(string="Name", required=True, tracking=True) # Tracking true is given to track it in chatter
    is_completed = fields.Boolean(string="Is Completed", tracking=True)
    notes = fields.Text(string="Notes")
    category = fields.Selection([('a', 'A'), ('b', 'B'), ('c', 'C')], string="Category", tracking=True)