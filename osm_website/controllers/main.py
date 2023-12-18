# -*- coding: utf-8 -*-

from  odoo import http
from odoo.http import request

class Snippet(http.Controller):
    @http.route('/get_location', auth='public', type='json')
    def get_location(self):
        total_so = request.env['sale.order'].sudo().search([])
        total_sold = sum(total_so.mapped('order_line.products_vom_qty'))
        return total_sold