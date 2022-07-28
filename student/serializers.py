from rest_framework import serializers 
from student.models import Student, StudentClassRoom
from rest_framework.reverse import reverse

class StudentSerializer(serializers.ModelSerializer):
    edit_url = serializers.SerializerMethodField(read_only=True)
    url = serializers.HyperlinkedIdentityField(
        view_name='student-detail',
        lookup_field='scholar_no'
    )
    
    class Meta:
        model = Student
        fields = [
            'scholar_no',
            'url',
            'edit_url',
            'name',
            'enrollment_no',   
            'branch',
            'course'        
        ]

    def get_edit_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("student-update", kwargs={"scholar_no":obj.scholar_no}, request=request)   
   
    # def get_number(self, obj):
    #     return obj.mobile_number    

class StudentClassRoomSerializer(serializers.ModelSerializer):
    # edit_url = serializers.SerializerMethodField(read_only=True)
    # url = serializers.HyperlinkedIdentityField(
    #     view_name='student-detail',
    #     lookup_field='scholar_no'
    # )
    
    class Meta:
        model = StudentClassRoom
        fields = [
            # 'url',
            # 'edit_url',
            'uid',
            'student',
            'class_room',           
        ]

    # def get_edit_url(self, obj):
    #     request = self.context.get('request')
    #     if request is None:
    #         return None
    #     return reverse("student-update", kwargs={"scholar_no":obj.scholar_no}, request=request)   
   