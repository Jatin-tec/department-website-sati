from django.db import models

class ContactDetails(models.Model):
    adhar_no = models.CharField(max_length=100, primary_key=True)
    faculty_name = models.CharField(max_length=100, blank=False, null=False)
    designation = models.CharField(max_length=100, blank=False, null=False)
