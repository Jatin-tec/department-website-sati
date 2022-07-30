from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from faculty.models import *
from faculty.serializers import *
from department_website_sati.authentication import TokenAuthentication
from department_website_sati.mixins import StaffEditorPermissionMixin
from rest_framework import generics, permissions, mixins, authentication

@api_view(["GET", "POST", "PUT", "DELETE"])
def faculty(request, *args, **kwargs):
    data = {}
   
    if request.method == 'GET':
        instance = ContactDetails.objects.all().order_by("?").first()
        if instance:
            data = ContactDetailsSerializer(instance).data
        
        return Response(data)
    
    if request.method == 'POST':        
        serializers = ContactDetailsSerializer(data=request.data)
        if serializers.is_valid(raise_exception=True):
            instance = serializers.save()
            print(instance)
            return Response(serializers.data)

    return Response({"message": "invalid request"}, status=500)


# ---------------- #
# List ContactDetails view
class ContactDetailsListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = ContactDetails.objects.all()
    serializer_class = ContactDetailsSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

faculty_contact_details_list_create_view = ContactDetailsListCreateAPIView.as_view()

# Delete ContactDetails view 
class ContactDetailsDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = ContactDetails.objects.all()
    serializer_class = ContactDetailsSerializer
    lookup_field = 'faculty_id'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

faculty_contact_details_delete_view = ContactDetailsDeleteAPIView.as_view()

# Update ContactDetails view 
class ContactDetailsUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = ContactDetails.objects.all()
    serializer_class = ContactDetailsSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

faculty_contact_details_update_view = ContactDetailsUpdateAPIView.as_view()

 
# View ContactDetails view
class ContactDetailsDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = ContactDetails.objects.all()
    serializer_class = ContactDetailsSerializer    
    lookup_field = 'faculty_id'

faculty_contact_details_detail_view = ContactDetailsDetailAPIView.as_view()
