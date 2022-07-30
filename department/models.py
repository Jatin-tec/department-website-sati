from asyncio.windows_events import NULL
from datetime import datetime
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from distutils.command.upload import upload
from email.mime import image
from tkinter.messagebox import QUESTION
from unittest import mock
from django.db import models
from pkg_resources import require
from faculty.models import *
from django.utils import timezone 

class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assinged to is_staff=True.'
            )
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assinged to is_superuser=True.'
            )

        return self.create_user(email, first_name, last_name, password, **other_fields)

    def create_user(self, email, first_name, last_name, password, **other_fields):
        if not email:
            raise ValueError(('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name,**other_fields)

        user.set_password(password)
        user.save()
        return user
    
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=30, unique=False, null=True, blank=True)
    username = models.CharField(max_length=50, unique=False, null=True, blank=True)
    last_name = models.CharField(max_length=30, null=True, blank=True)
    role = models.CharField(max_length=20, null=True, blank=True)

    date_joined = models.DateTimeField(default=timezone.now)  
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

from django.db.models.signals import post_save
from django.dispatch import receiver
from student.models import Student
from faculty.models import ContactDetails
from django.conf import settings

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, *args, **kwargs):
    if created:

        if instance.role == 'student':
            student = Student.objects.create(user=instance)
            print(student, 'signal')
        
        if instance.role == 'teacher':
            print(instance)
            faculty = ContactDetails.objects.create(user=instance)
            faculty.save()


class Course(models.Model):
    course_id = models.CharField(max_length=20, unique=True, primary_key=True)
    course_name = models.CharField(max_length=50)
    no_of_semesters = models.IntegerField()
    
    def __str__(self):
        return self.course_name

class Department(models.Model):
    department_id = models.CharField(max_length=20, unique=True, primary_key=True)
    department_name = models.CharField(max_length=10, unique=True)
    course_id = models.ForeignKey('Course', on_delete=models.CASCADE)
    hod_faculty = models.ForeignKey('faculty.ContactDetails', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.department_name
    
class Branch(models.Model):
    branch_id = models.CharField(max_length=20, unique=True, primary_key=True)
    branch_name = models.CharField(max_length=50, unique=True)
    department_id = models.ForeignKey('Department', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.branch_name

class Laboratory(models.Model):
    laboratory_id = models.CharField(max_length=20, unique=True, primary_key=True)
    name = models.CharField(max_length=50, unique=True)    

class DepartmentLaboratory(models.Model):
    branch = models.ForeignKey('Department', on_delete=models.CASCADE)
    laboratory = models.ForeignKey('Laboratory', on_delete=models.CASCADE)   

class Subject(models.Model):
    subject_id = models.CharField(max_length=20, unique=True, primary_key=True)
    subject_name = models.CharField(max_length=50, unique=True)
        
    def __str__(self):
        return self.subject_name

    class Meta:
        verbose_name_plural = "Subject"


class BranchSubject(models.Model):
    uid = models.CharField(max_length=10, primary_key=True)
    branch = models.ForeignKey('Branch', on_delete=models.CASCADE)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)  
    
    def __str__(self):
        return self.branch  

class ClassRoom(models.Model):
    classroom_code = models.CharField(max_length=50, unique=True, primary_key=True)
    class_name = models.CharField(max_length=50, blank=True, null=True)
    department = models.ForeignKey('Department', on_delete=models.CASCADE)
    branch = models.ForeignKey('Branch', models.CASCADE)
    faculty_id = models.ForeignKey('faculty.ContactDetails', on_delete=models.CASCADE)
    faculty_email = models.EmailField(null=False)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE) 
    date_created = models.DateField(auto_now_add=True, verbose_name=u"Date added") 
    
    def __str__(self):
        return self.classroom_code

    class Meta:
        verbose_name_plural = "Class Room"

class Subjective_Questions(models.Model):
    QUESTION_TYPE = (
        ("Very Short Answer", "Very Short Answer"),
        ("Short Answer", "Short Answer"),
        ("Long Answer", "Long Answer"),
    )

    classroom_code = models.ForeignKey('ClassRoom', on_delete=models.CASCADE, null=True, blank=True, default='')
    question_type=models.CharField(max_length=50, choices=QUESTION_TYPE, verbose_name="Type of Question")

    question = models.TextField(blank=False, null=False)
    solution = models.TextField(blank=True, null=True)

    q_image1 = models.ImageField(upload_to = 'questions/images', blank=True, null=True, verbose_name=u"Question image 1")
    q_image2 = models.ImageField(upload_to = 'questions/images', blank=True, null=True, verbose_name=u"Question image 2")
    q_image3 = models.ImageField(upload_to = 'questions/images', blank=True, null=True, verbose_name=u"Question image 3")
    a_image1 = models.ImageField(upload_to = 'questions/images', blank=True, null=True, verbose_name=u"Answer image 1")
    a_image2 = models.ImageField(upload_to = 'questions/images', blank=True, null=True, verbose_name=u"Answer image 2")
    a_image3 = models.ImageField(upload_to = 'questions/images', blank=True, null=True, verbose_name=u"Answer image 3")

    date_added = models.DateField(auto_now_add=True, verbose_name=u"Date added")
    reports = models.IntegerField(blank=False, null=False, default=0, verbose_name="Error reports")
    hits = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.question

    class Meta:
        verbose_name_plural = "Subjective Questions"

class MCQ_Question(models.Model):
    classroom_code = models.ForeignKey('ClassRoom', on_delete=models.CASCADE, null=True, blank=True, default='') 

    primary_key = models.CharField(max_length=10, primary_key=True)

    question = models.TextField(blank=False, null=False, verbose_name=u"Question")
    solution = models.TextField(blank=True, null=True, verbose_name=u"Solution")
    
    ans1 = models.TextField(blank=False, null=False, verbose_name=u"Option 1")
    ans_image1 = models.ImageField(blank=True, null=True, verbose_name=u"Option 1 image")
    ans2 = models.TextField(blank=False, null=False, verbose_name=u"Option 2")
    ans_image2 = models.ImageField(blank=True, null=True, verbose_name=u"Option 2 image")
    ans3 = models.TextField(blank=False, null=False, verbose_name=u"Option 3")
    ans_image3 = models.ImageField(blank=True, null=True, verbose_name=u"Option 3 image")
    ans4 = models.TextField(blank=False, null=False, verbose_name=u"Option 4")
    ans_image4 = models.ImageField(blank=True, null=True, verbose_name=u"Option 4 image")
    
    correct = models.IntegerField(blank=False, null=False, verbose_name=u"Correct Choice")
    developer = models.CharField(max_length=250, blank=True, null=True, verbose_name="Developer name")

    q_image1 = models.ImageField(blank=True, null=True, verbose_name=u"Question image 1")
    q_image2 = models.ImageField(blank=True, null=True, verbose_name=u"Question image 2")
    q_image3 = models.ImageField(blank=True, null=True, verbose_name=u"Question image 3")
    
    a_image1 = models.ImageField(blank=True, null=True, verbose_name=u"Answer image 1")
    a_image2 = models.ImageField(blank=True, null=True, verbose_name=u"Answer image 2")
    a_image3 = models.ImageField(blank=True, null=True, verbose_name=u"Answer image 3")
    
    date_added = models.DateField(auto_now_add=True, verbose_name=u"Date added")
    reports = models.IntegerField(blank=False, null=False, default=0, verbose_name="Error reports")

    def __str__(self):
        return self.question

    class Meta:
        verbose_name_plural = "MCQ Questions"    


class Quiz(models.Model):
    TYPECHOICE = (
        ("Easy", "Easy"),
        ("Medium", "Medium"),
        ("Hard", "Hard")
    )

    classroom_code = models.ForeignKey('ClassRoom', on_delete=models.CASCADE)
    title = models.CharField(max_length=256, null=False, verbose_name="Name of quiz")
    type = models.CharField(max_length=256, choices=TYPECHOICE, null=False, verbose_name="Type of quiz")
    maximum_marks = models.IntegerField(null=False, verbose_name="Total marks of quiz")
    minimum_marks = models.IntegerField(null=True, verbose_name="Passing marks of quiz")
    date_added = models.DateField(auto_now_add=True, verbose_name=u"Date added")
    duration = models.FloatField(null=True, blank=True, verbose_name="Duration in hours", default="")

    primary_key = models.CharField(max_length=10, primary_key=True)

    def __str__(self):
        return self.title

class Assingment(models.Model):
    classroom_code = models.ForeignKey('ClassRoom', on_delete=models.CASCADE)
    title = models.CharField(max_length=256, null=False, verbose_name="Name of quiz")
    question = models.CharField(max_length=1000, null=False, verbose_name="Question")
    assingment_file = models.FileField(upload_to='assingments/file', blank=True, null=True, verbose_name=u"Assingment file")
    image = models.ImageField(upload_to='assingments/image', blank=True, null=True, verbose_name=u"Assingment image")
    maximum_marks = models.IntegerField(verbose_name="Total marks of assingment")

    primary_key = models.CharField(max_length=10, primary_key=True)

    date_added = models.DateField(auto_now_add=True, verbose_name=u"Date added")
    due_date = models.DateField(null=True, blank=True, verbose_name=u"Due added", default="")

    def __str__(self):
        return self.title

class SubjectiveQuestionsQuiz(models.Model):
    primary_key = models.CharField(max_length=10, primary_key=True)
    quiz_id = models.ForeignKey('Quiz', on_delete=models.CASCADE)
    question_id = models.ForeignKey('Subjective_Questions', on_delete=models.CASCADE)

class MCQ_QuestionsQuiz(models.Model):
    primary_key = models.CharField(max_length=10, primary_key=True)
    quiz_id = models.ForeignKey('Quiz', on_delete=models.CASCADE)
    question_id = models.ForeignKey('MCQ_Question', on_delete=models.CASCADE)