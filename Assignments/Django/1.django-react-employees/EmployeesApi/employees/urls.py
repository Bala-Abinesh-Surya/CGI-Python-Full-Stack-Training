from django.urls import path

# importing our app's views
from . import views

urlpatterns = [
    path('employees/details', views.home, name='employee-details')
]
