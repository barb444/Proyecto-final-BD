from django import forms
from .models import Employee 

class EmployeeForm(forms.ModelForm):
    cedula = forms.CharField(
        max_length=9, 
        required=True, 
        widget=forms.TextInput(attrs={'type': 'number', 'placeholder': 'Cédula'})
    )
    salary = forms.DecimalField(
        max_digits=9, 
        decimal_places=2, 
        required=True, 
        widget=forms.NumberInput(attrs={'placeholder': 'Salario'})
    )

    OPCIONES_SEDE = [
        ('', 'Seleccione una sede'),
        ('Barcelona', 'Barcelona'),
        ('Lechería', 'Lechería'),
        ('Puerto La Cruz', 'Puerto La Cruz'),
    ]

    sede = forms.ChoiceField(
        choices=OPCIONES_SEDE,
        widget=forms.Select(attrs={'class': 'ddMenu', 'id': 'sedeAdd'}),
        required=True
    )

    class Meta:
        model = Employee
        fields = ['name', 'lastname', 'cedula', 'sede', 'charge', 'salary']

    def clean_cedula(self):
        cedula = self.cleaned_data.get('cedula')
        if not cedula.isdigit():
            raise forms.ValidationError('La cédula debe contener solo números.')
        if len(cedula) > 9:
            raise forms.ValidationError('La cédula no puede tener más de 9 dígitos.')
        return cedula
