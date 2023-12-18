from odoo import api, fields, models
from geopy.geocoders import Nominatim
import werkzeug.urls
class eventInherited(models.Model):
    _inherit = 'event.event'
    mapChoice = fields.Selection([('a', 'Open Street Maps'),('b', 'Google Maps'), ], default='a', required=True, string="Map", tracking=True)
    def _google_map_link(self, zoom=8):
        self.ensure_one()
        if self.address_id:
            if(self.mapChoice=='a'):
                # place=(self.sudo().address_id.street or '')+" "+(self.sudo().address_id.city or '')+" "+(self.sudo().address_id.zip or '')+" "+(self.sudo().address_id.country_id and self.sudo().address_id.country_id.display_name or '')
                # geolocator= Nominatim(user_agent="Odoo_Events_OSM")
                # location = geolocator.geocode(place)
                # place2= place.split()
                # place='%20'.join(place2)
                # return f"https://www.openstreetmap.org/search?query={place}"
            
                params = {
                'q': '%s, %s %s, %s' % (self.sudo().address_id.street or '', self.sudo().address_id.city or '', self.sudo().address_id.zip or '', self.sudo().address_id.country_id and self.sudo().address_id.country_id.display_name or ''),
                'z': zoom,
                }
                print(werkzeug.urls.url_encode(params))
                return 'https://nominatim.openstreetmap.org/ui/search.html?'+werkzeug.urls.url_encode(params)
                # return 'https://www.openstreetmap.org/search?query=Wembley%20HA9%200WS%20London%20United%20Kingdom#map=18/51.55607/-0.27960'
                
                # if location:
                #     f"https://www.openstreetmap.org/search?query={place2}"
                #     # return f"http://www.openstreetmap.org/?lat={location.latitude}&lon={location.longitude}&zoom=17&layers=M"
                # else:
                #     place2=""
                #     place=place.strip()
                #     for i in range(0,len(place)):
                #         if place[i]==' ':
                #             if place2[len(place2)-1]!=' ':
                #                 place2+=' '
                #         else:
                #             place2+=place[i]
                #     place2=place2.replace(' ','%20')
                #     return f"https://www.openstreetmap.org/search?query={place2}"
            else:
                return self.sudo().address_id.google_map_link(zoom=zoom)

        return None


# class Partner(models.Model):
#     _inherit='res.partner'

#     # def open_street_map_link(self):
#     #     params = {
#     #         'q': '%s, %s %s, %s' % (self.street or '', self.city or '', self.zip or '', self.country_id and self.country_id.display_name or ''),
#     #         # 'z': zoom,
#     #     }
#     #     print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
#     #     print(werkzeug.urls.url_encode(params))

#     # def google_map_link(self, zoom=8):
#     #     # res = super(Partner, self).google_map_link(zoom=10)
#     #     return super(Partner, self).google_map_link(zoom=10)
#         # print("HELLO")
#         # print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
#         # print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
#         # # print(eventInherited.choice(self))
#         # # print(self.Parent.mapChoice)
#         # print(zoom)
#         # mapChoice=zoom[len(zoom)-1]
#         # zoom=int(zoom[0:len(zoom)-1])
#         # print(zoom)
#         # print(mapChoice)
#         # print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
#         # print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        
#         # return "https://fsmk.org"
    


#     # print("==================================================================================")
#     # use ensure_one to verify that record is atomic
#     # use use res.partner to read the location
#     # use temp_test to generate link
#     # display OSM link alongside using XML then work on replacement - ie if mapchaoice is a replace gmaps with osm
#     # print("==================================================================================")
#     # def retrieve_data(self):
#     #     print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
#     #     print("self.street=",self.street)
#     #     print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    
# # class resPartnerInherited(models.Model):

#         # res=super()
#         # if super(self).mapChoice=='a':
#         #     print("inside osm")
#         #     print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
#         #     print(werkzeug.urls.url_encode(params))
#         #     print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
#         #     params = {
#         #         'q': '%s, %s %s, %s' % (self.street or '', self.city or '', self.zip or '', self.country_id and self.country_id.display_name or ''),
#         #         'z': zoom,
#         #     }
#         #     return 'https://maps.google.com/maps?' + werkzeug.urls.url_encode(params)
#         # else:
#         #     return "google.com"
# # class inheritedResPartner(models.Model):
# #     _inherit =['event.event']
# #     # _name = 'res.partner'
# #     def _google_map_link(self, zoom=8):
# #         print("HELLO")
# #         print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
# #         print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
# #         print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
# #         print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
# #         return "odoo.com"

class osmManager(models.Model):
    _name = "osms.osm"
    _inherit = ["mail.thread"]
    _description = "osms"

