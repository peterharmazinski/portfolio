from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import API, Request
from cachetools import cached, TTLCache
import requests
import json
import logging
logger = logging.getLogger('django')


@api_view()
def get_weather(request):
    return query_weather_api()

@cached(cache=TTLCache(maxsize=40, ttl=60))
def query_weather_api():
    '''
    Logic is separated from view function for caching
    '''
    logger.info('Getting weather data from api. app=weather, file=views.py, function=get_weather')
    api_key = API.objects.get(name = 'weather forecast').api_key
    uri = Request.objects.get(name = 'houston weather').uri
    response = Response(requests.get(uri + api_key).json())
    return response