from django.urls import path

# importing our own views
from . import views

urlpatterns = [
    path('', views.home, name='employee-details')
]
