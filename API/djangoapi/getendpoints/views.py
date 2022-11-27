from rest_framework.response import Response
from rest_framework.decorators import api_view
from django_rest import serializers
from .models import data
import random
# from django.core import serializers
from rest_framework import serializers

class dataSerializer(serializers.Serializer):
    text=serializers.CharField(max_length=20)
    url=serializers.URLField(max_length=200)  

# Create your views here.
@api_view(["GET"])
def getdata(request):
    temp=data.objects.all()
    index=random.randint(0,9)
    serializer= dataSerializer(temp[index])
    return Response(serializer.data)

@api_view(['GET'])
def getall(request):
    temp=data.objects.all()
    serializer= dataSerializer(temp,many=True)
    return Response(serializer.data)