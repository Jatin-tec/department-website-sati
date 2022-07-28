from django.db import models
from department.models import *
from datetime import date

class ComputerScience(models.Model):
    STATUS = (
        ("PRESENT", "Present"),
        ("ABSENT", "Absent"),
        ("LEAVE", "Leave"),
    )
    primary_key = models.CharField(max_length=50, primary_key=True)
    student = models.ForeignKey('student.Student', on_delete=models.CASCADE)
    teacher = models.ForeignKey('faculty.ContactDetails', on_delete=models.CASCADE)
    subject = models.ForeignKey('department.Subject', on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=STATUS, verbose_name="status")
    active = models.BooleanField(default=True)
    date = models.DateField(default = date.today())
