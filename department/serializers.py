from rest_framework import serializers 
from department.models import Course, Department, Branch, Subject, ClassRoom
from rest_framework.reverse import reverse

class CourseSerializer(serializers.ModelSerializer):
    # edit_url = serializers.SerializerMethodField(read_only=True)
    # url = serializers.HyperlinkedIdentityField(
    #     view_name='course-detail',
    #     lookup_field='course_id'
    # )
    
    class Meta:
        model = Course
        fields = [
            # 'url',
            # 'edit_url',
            'course_id',
            'course_name',
            'no_of_semesters',           
        ]

    # def get_edit_url(self, obj):
    #     request = self.context.get('request')
    #     if request is None:
    #         return None
    #     return reverse("course-update", kwargs={"course_id":obj.course_id}, request=request)   

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = [
            # 'url',
            # 'edit_url',
            'department_id',
            'department_name',
            'course_id',
            'hod_faculty'           
        ]

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = [
            # 'url',
            # 'edit_url',
            'branch_id',
            'branch_name',
            'department_id',          
        ]

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = [
            # 'url',
            # 'edit_url',
            'subject_id',
            'subject_name',
            # 'branch_id',          
        ]

class ClassRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassRoom
        fields = [
            # 'url',
            # 'edit_url',
            'class_room_code',
            'department',
            'branch',
            'faculty_id',
            'faculty_email',
            'course',          
            'subject'          
        ]
        