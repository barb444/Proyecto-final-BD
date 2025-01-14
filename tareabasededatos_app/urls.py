from django.urls import path
from .views import mainview, delete_employee, update_employee 

urlpatterns = [
    path('', mainview, name='index'),
    path('<str:cedula>/', delete_employee, name='delete_employee'),
    path('update/<str:cedula>/', update_employee, name='update_employee'),
]
