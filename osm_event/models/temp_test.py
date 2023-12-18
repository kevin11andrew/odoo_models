from geopy.geocoders import Nominatim

place="qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"

geolocator= Nominatim(user_agent="Odoo_Events_OSM")
location = geolocator.geocode(place)
if location:
    print(f"http://www.openstreetmap.org/?lat={location.latitude}&lon={location.longitude}&zoom=17&layers=M")
else:
    place2=""
    place=place.strip()
    for i in range(0,len(place)):
        if place[i]==' ':
            if place2[len(place2)-1]!=' ':
                place2+=' '
        else:
            place2+=place[i]
    place2=place2.replace(' ','%20')
    print(f"https://www.openstreetmap.org/search?query={place2}")