from pyexpat import model
from django.db import models
from department.models import *
from django.conf import settings

class Student(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    scholar_no = models.IntegerField(unique=True, primary_key=True)
    enrollment_no = models.CharField(max_length=20, unique=True)
    branch = models.ForeignKey('department.Branch', on_delete=models.CASCADE, blank=True, null=True) 
    course = models.ForeignKey('department.Course', on_delete=models.CASCADE, blank=True, null=True)

class StudentClassRoom(models.Model):
    uid = models.CharField(max_length=10, primary_key=True, default=datetime.now)
    student = models.ForeignKey('Student', on_delete=models.CASCADE)    
    class_room = models.ForeignKey('department.ClassRoom', on_delete=models.CASCADE)

    