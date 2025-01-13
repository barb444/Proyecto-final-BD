from django.shortcuts import redirect, render
from .models import Employee
from .forms import EmployeeForm

def mainview(request):
    employees = Employee.objects.all()
    form_add = EmployeeForm()

    if request.method == "POST":
        form_add = EmployeeForm(request.POST)
        if form_add.is_valid():
            form_add.save()
            print('Guardado')
            return redirect('index')
        else:
            print('No se guardó')

    return render(request, 'index.html', {'employees': employees, 'form_add': form_add})
