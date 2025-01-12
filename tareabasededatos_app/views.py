from django.shortcuts import render
from .models import *

# Create your views here.
def mainview(request):
    employees = Employee.objects.all()
    return render(request, 'index.html', {'employees':employees})
