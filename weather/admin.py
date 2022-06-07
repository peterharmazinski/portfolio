from django.contrib import admin
from .models import API, Request

admin.site.register(Request)
admin.site.register(API)