from operator import concat
from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    cedula = models.CharField(max_length=15, unique=True, primary_key=True)
    sede = models.CharField(max_length=200)
    charge = models.CharField(max_length=120)
    salary = models.CharField(max_length=20)

    def __str__(self):
        return"{0} {1}".format(self.name,self.lastname)
