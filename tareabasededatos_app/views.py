from django.shortcuts import redirect, render
from .models import *
from .forms import EmployeeForm

# Create your views here.
def mainview(request):
    employees = Employee.objects.all()
    form_add = EmployeeForm()
    if request.method == "POST":
        form_add = EmployeeForm(request.POST)
        if form_add.is_valid():
            form_add.save()
            print('guardadp')
            return redirect('index')

        else:
            print('not saved')

    return render(request, 'index.html', {'employees':employees, 'form_add':form_add})
