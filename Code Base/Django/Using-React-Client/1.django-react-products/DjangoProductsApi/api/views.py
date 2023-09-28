from django.shortcuts import render
from django.http import JsonResponse

products = [
    {"id": 1, "name": "Inspiron Laptop", "brand": "DELL", "price": 75000},
    {"id": 2, "name": "Redmi Note 7 Pro", "brand": "Xiaomi", "price": 15000},
    {"id": 3, "name": "Airpods", "brand": "Apple", "price": 30000},
    {"id": 4, "name": "Iphone 15 pro max", "brand": "Apple", "price": 129000},
    {"id": 5, "name": "10000mAh powerbank", "brand": "Samsung", "price": 2000},
    {"id": 7, "name": "64gb pendrive", "brand": "HP", "price": 900},
    {"id": 8, "name": "Gaming mouse", "brand": "Zebronics", "price": 2000},
    {"id": 9, "name": "Type-C charger", "brand": "Xiaomi", "price": 1000},
]

# Create your views here.
def home(request):
    return JsonResponse(products, safe=False)