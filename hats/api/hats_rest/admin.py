from django.contrib import admin



from .models import Hat, LocationVO


@admin.register(Hat)
class HatApiAdmin(admin.ModelAdmin):
    pass


@admin.register(LocationVO)
class LocationVOAdmin(admin.ModelAdmin):
    pass
