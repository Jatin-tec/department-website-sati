from django.shortcuts import render
from attendance.models import ComputerScience
from attendance.serializers import ComputerScienceSerializer
from department_website_sati.authentication import TokenAuthentication
from department_website_sati.mixins import StaffEditorPermissionMixin
from rest_framework import generics

# View ComputerScience view    
class ComputerScienceDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = ComputerScience.objects.all()
    serializer_class = ComputerScienceSerializer    
    lookup_field = 'primary_key'

computer_science_attendace_detail_view = ComputerScienceDetailAPIView.as_view()

# List ComputerScience view    
class ComputerScienceListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = ComputerScience.objects.all()
    serializer_class = ComputerScienceSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

computer_science_attendace_list_create_view = ComputerScienceListCreateAPIView.as_view()

# Update ComputerScience view    
class ComputerScienceUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = ComputerScience.objects.all()
    serializer_class = ComputerScienceSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

computer_science_attendace_update_view = ComputerScienceUpdateAPIView.as_view()

# Delete ComputerScience view    
class ComputerScienceDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = ComputerScience.objects.all()
    serializer_class = ComputerScienceSerializer
    lookup_field = 'primary_key'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

computer_science_attendace_delete_view = ComputerScienceDeleteAPIView.as_view()