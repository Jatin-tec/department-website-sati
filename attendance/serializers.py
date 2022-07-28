from rest_framework import serializers
from rest_framework.reverse import reverse
from attendance.models import ComputerScience

class ComputerScienceSerializer(serializers.ModelSerializer):
    # number = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ComputerScience
        fields = [
            'primary_key',
            'student',
            'teacher',
            'subject',
            'date',
            'status',
            'active'
        ]

    # def get_number(self, obj):
    #     return obj.mobile_number    