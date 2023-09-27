from django.urls import path

# importing our views
from . import views

urlpatterns = [
    path('', views.home, name='home')
]
