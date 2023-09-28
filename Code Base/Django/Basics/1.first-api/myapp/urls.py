from django.urls import path

# importing our app's views
from . import views

# configuring our app's urls
urlpatterns = [
    path('api/items', views.home, name='items')
]
