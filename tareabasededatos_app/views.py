from django.shortcuts import get_object_or_404, redirect, render
from .models import Employee
from .forms import EmployeeForm
from django.views.decorators.http import require_POST

from django.http import JsonResponse
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

@require_POST
def delete_employee(request, cedula):
    # Obtener el empleado por su 'cedula'
    print('cedula recv: ',cedula)
    employee_t = get_object_or_404(Employee, cedula=cedula)
    
    # Eliminar el empleado
    employee_t.delete()
    
    # Redirigir a una página de éxito o a la lista de empleados
    return redirect('index')  # Cambia esto al nombre de la vista a la que quieres redirigir

def edit_employee(request, cedula):
    employee = get_object_or_404(Employee, cedula=cedula)
    if request.method == 'POST':
        form = EmployeeForm(request.POST, instance=employee)
        if form.is_valid():
            form.save()
            return redirect('index')  # Cambia a tu vista principal de empleados
    else:
        form = EmployeeForm(instance=employee)

    return render(request, {'form': form, 'employee': employee})



def update_employee(request, cedula):
    # Obtener al empleado por su cédula
    employee = get_object_or_404(Employee, cedula=cedula)
    
    if request.method == 'POST':
        # Crear el formulario con los datos del POST
        form = EmployeeForm(request.POST, instance=employee)
        
        if form.is_valid():
            # Guardar los cambios en el modelo
            form.save()
            
            # Si todo es correcto, redirigir a la página de índice (o al mismo lugar si no se quiere redirigir)
            return redirect('index')  # Cambiar 'index' con la URL adecuada
    else:
        form = EmployeeForm(instance=employee)
    
    # No es necesario renderizar otra página, solo actualizar el formulario en la misma página
    return redirect('index')  # Puedes redirigir a donde consideres necesario después de actualizar
