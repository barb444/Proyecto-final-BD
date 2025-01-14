from operator import concat
from django.db import models
from django.http import JsonResponse

class Employee(models.Model):
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    cedula = models.CharField(max_length=15, unique=True, primary_key=True)
    sede = models.CharField(max_length=200)
    charge = models.CharField(max_length=120)
    salary = models.CharField(max_length=20)

    def __str__(self):
        return"{0} {1}".format(self.name,self.lastname)


def get_employee_data(request, cedula):
    try:
        employee = Employee.objects.get(cedula=cedula)
        data = {
            'name': employee.name,
            'lastname': employee.lastname,
            'cedula': employee.cedula,
            'sede': employee.sede,
            'charge': employee.charge,
            'salary': employee.salary,
        }
        return JsonResponse(data)
    except Employee.DoesNotExist:
        return JsonResponse({'error': 'Empleado no encontrado'}, status=404)
