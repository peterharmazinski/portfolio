from django.db import models

# Create your models here.

class Request(models.Model):
    name = models.CharField(max_length=255)
    uri = models.CharField(max_length=255)
    source = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)

class API(models.Model):
    name = models.CharField(max_length=255)
    api_key = models.CharField(max_length=255)
    source = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)

