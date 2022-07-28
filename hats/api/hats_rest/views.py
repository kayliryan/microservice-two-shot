from statistics import harmonic_mean
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

class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style",
        "color",
        "picture_url",
        "id"
    ]

    encoders = {
        "location": LocationVODetailEncoder,
    }



@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id == None:
            hats = Hat.objects.all()
        else:
            hats = Hat.objects.filter(location=location_vo_id)

        return JsonResponse(
            {"hats": hats},
            encoder = HatListEncoder,
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
            encoder=HatDetailEncoder,
            safe=False,
        )