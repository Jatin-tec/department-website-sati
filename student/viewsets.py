from rest_framework import viewsets
from student.models import *
from student.serializers import *

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = 'scholar_no'

