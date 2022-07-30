from django.db import models
from django.conf import settings
from django.utils import timezone 


class ContactDetails(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    faculty_id = models.CharField(max_length = 100, primary_key = True)
    adhar_no = models.CharField(max_length = 100, unique = True)
    faculty_name = models.CharField(max_length = 100)
    designation = models.CharField(max_length = 100, blank = True, null = True)
    date_of_joining = models.DateField(default=timezone.now)
    mobile_no = models.CharField(max_length = 20)
    email = models.EmailField()
    email2 = models.EmailField(null = True, blank = True)
    faculty_image = models.ImageField(upload_to = 'faculty/images', default = '', blank = True, null = True)

    @property
    def mobile_number(self):
        return self.mobile_no

class Event(models.Model):
    title_of_event =  models.CharField(max_length = 200, unique = True, primary_key=True)
    enclosure_no = models.IntegerField(unique = True)
    attended = models.CharField(max_length = 10000, default = '[]')
    organised = models.CharField(max_length = 10000, default = '[]')
    category = models.CharField(max_length = 100)
    location = models.TextField()
    duration = models.DateTimeField()
    year = models.DateField()

class Faculty_Event(models.Model):
    event_id = models.ForeignKey('Event', on_delete = models.CASCADE) 
    faculty_id = models.ForeignKey('ContactDetails', on_delete = models.CASCADE)

class OutreachActivity(models.Model):
    enclosure_no = models.IntegerField(primary_key=True, unique=True)
    organisation = models.CharField(max_length=100)
    nameOfActivity = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    date = models.DateField()

class FacultyOutreachActivity(models.Model):
    faculty_id = models.ForeignKey('ContactDetails', on_delete = models.CASCADE)
    organisation = models.ForeignKey('OutreachActivity', on_delete = models.CASCADE)
            