from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def home(request):
    details = [
        {"id": 1, "first-name": "Bala Abinesh", "last-name": "Surya", "address": "Avaraikulam"},
        {"id": 2, "first-name": "Asir Paul", "last-name": "null", "address": "Vadakkankulam"},
        {"id": 3, "first-name": "Ebinesh", "last-name": "null", "address": "Avaraikulam"},
        {"id": 4, "first-name": "Jeya Hari", "last-name": "Prasath", "address": "Madurai"},
        {"id": 5, "first-name": "Ajin", "last-name": "null", "address": "Nagercoil"},
    ]
    
    return JsonResponse(details, safe=False)