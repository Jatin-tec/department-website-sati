from rest_framework import serializers 
from faculty.models import ContactDetails

class ContactDetailsSerializer(serializers.ModelSerializer):
    number = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ContactDetails
        fields = [
            'faculty_id',
            'adhar_no',
            'faculty_name',
            'designation',
            'date_of_joining',
            'mobile_no',
            'email',
            'email2',
            'faculty_image',
            'number'
        ]

    def get_number(self, obj):
        return obj.mobile_number    