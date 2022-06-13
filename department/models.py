from unittest import mock
from django.db import models
from pkg_resources import require
from faculty.models import *

class Course(models.Model):
    course_id = models.CharField(max_length=20, unique=True, primary_key=True)
    course_name = models.CharField(max_length=50)
    no_of_semesters = models.IntegerField()

class Department(models.Model):
    department_id = models.CharField(max_length=20, unique=True, primary_key=True)
    department_name = models.CharField(max_length=10, unique=True)
    course_id = models.ForeignKey('Course', on_delete=models.CASCADE)
    hod_faculty = models.ForeignKey('faculty.ContactDetails', on_delete=models.CASCADE)
    
class Branch(models.Model):
    branch_id = models.CharField(max_length=20, unique=True, primary_key=True)
    branch_name = models.CharField(max_length=50, unique=True)
    department_id = models.ForeignKey('Department', on_delete=models.CASCADE)

class Laboratory(models.Model):
    laboratory_id = models.CharField(max_length=20, unique=True, primary_key=True)
    name = models.CharField(max_length=50, unique=True)    

class DepartmentLaboratory(models.Model):
    branch = models.ForeignKey('Department', on_delete=models.CASCADE)
    laboratory = models.ForeignKey('Laboratory', on_delete=models.CASCADE)   

class Subject(models.Model):
    subject_id = models.CharField(max_length=20, unique=True, primary_key=True)
    subject_name = models.CharField(max_length=50, unique=True)
    # branch_id = models.ForeignKey('Branch', on_delete=models.CASCADE)

class BranchSubject(models.Model):
    branch = models.ForeignKey('Branch', on_delete=models.CASCADE)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)    

class ClassRoom(models.Model):
    class_room_code = models.CharField(max_length=50, unique=True, primary_key=True)
    department = models.ForeignKey('Department', on_delete=models.CASCADE)
    branch = models.ForeignKey('Branch', models.CASCADE)
    faculty_id = models.ForeignKey('faculty.ContactDetails', on_delete=models.CASCADE)
    faculty_email = models.EmailField(null=False)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)  

    