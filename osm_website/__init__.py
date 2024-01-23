from odoo import models, fields, api

class YourBuildingBlock(models.AbstractModel):
    _name = 'your_module.your_building_block'
    _description = 'Your Building Block'

    # name = fields.Char(string='Name')

# class YourBuildingBlockController(models.AbstractModel):
#     _name = 'your_module.your_building_block.controller'
#     _inherit = 'web.AbstractField'