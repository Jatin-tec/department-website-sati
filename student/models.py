from pyexpat import model
from django.db import models
from department.models import *

class Student(models.Model):
    name = models.CharField(max_length=100)
    scholar_no = models.IntegerField(unique=True, primary_key=True)
    enrollment_no = models.CharField(max_length=20, unique=True)
    branch = models.ForeignKey('department.Department', on_delete=models.CASCADE)
    course = models.ForeignKey('department.Course', on_delete=models.CASCADE)

class StudentClassRoom(models.Model):
    student = models.ForeignKey('Student', on_delete=models.CASCADE)    
    class_room = models.ForeignKey('department.ClassRoom', on_delete=models.CASCADE)

    