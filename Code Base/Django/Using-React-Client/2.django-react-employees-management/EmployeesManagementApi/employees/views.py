from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
employees = [
    {"id": 1, "name": "Bala Abinesh Surya", "gender": "Male", "village": "Avaraikulam"},
]

def home(request):
    if request.method == 'POST':
        print('apaaaaaaaaadi')
    return JsonResponse(employees, safe=False)