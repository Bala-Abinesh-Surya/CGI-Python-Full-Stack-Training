from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def home(request):
    items = [
        {"name": "Item 1", "description": "Description 1"},
        {"name": "Item 1", "description": "Description 1"}
    ]
    
    return JsonResponse(items, safe=False)