from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import LocationVO, Hat
# Create your views here.


class LocationVODetailEncoder(ModelEncoder):
    model = LocationVO
    properties = [
        "closet_name",
        "section_number",
        "shelf_number",
        "id"
    ]


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style",
        "color",
        "picture_url",
        "id",
    ]

    # encoders = {
    #     "location": LocationVODetailEncoder,
    # }

    def get_extra_data(self, o):
        return {"location": {
            "closet_name": o.location.closet_name,
            "section_number": o.location.section_number,
            }}




# Could do without HatDetail Encoder below since we're putting all the 
# details in the list encoder anyways. If you did that you would need 
# to make sure to change the encoders in your views below

# class HatDetailEncoder(ModelEncoder):
#     model = Hat
#     properties = [
#         "fabric",
#         "style",
#         "color",
#         "picture_url",
#         "id",
#         "location",
#     ]

#     encoders = {
#         "location": LocationVODetailEncoder,
#     }



@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id == None:
            hats = Hat.objects.all()
        else:
            hats = Hat.objects.filter(location=location_vo_id)
        # print("hats***********************************************************",hats.values())
        return JsonResponse(
            {"hats": hats},
            encoder = HatListEncoder,
            safe=False,
        )
    else: # POST
        content = json.loads(request.body)
        try:
            location = LocationVO.objects.get(id=location_vo_id)
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )

        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_show_hat(request, pk):
    if request.method == "DELETE":
        count, _ = Hat.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
