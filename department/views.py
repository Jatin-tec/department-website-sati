# from django.shortcuts import render
from rest_framework import generics, permissions, mixins, authentication
# from student.models import Course
# from student.serializers import *
from department.models import *
from department.serializers import *
from department_website_sati.authentication import TokenAuthentication
from department_website_sati.mixins import StaffEditorPermissionMixin

# List Course view
class CourseListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

course_list_create_view = CourseListCreateAPIView.as_view()

# Delete Course view 
class CourseDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = 'course_id'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

course_delete_view = CourseDeleteAPIView.as_view()

# Update Course view 
class CourseUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

course_update_view = CourseUpdateAPIView.as_view()

 
# View Course view
class CourseDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer    
    lookup_field = 'department_id'

course_detail_view = CourseDetailAPIView.as_view()

# ============= #

# List Department view
class DepartmentListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

department_list_create_view = DepartmentListCreateAPIView.as_view()

# Delete Department view 
class DepartmentDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    lookup_field = 'department_id'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

department_delete_view = DepartmentDeleteAPIView.as_view()

# Update Department view 
class DepartmentUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

department_update_view = DepartmentUpdateAPIView.as_view()

 
# View Department view
class DepartmentDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer    
    lookup_field = 'department_id'

department_detail_view = DepartmentDetailAPIView.as_view()
 
# ============= #

# List Branch view
class BranchListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

branch_list_create_view = BranchListCreateAPIView.as_view()

# Delete Branch view 
class BranchDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    lookup_field = 'branch_id'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

branch_delete_view = BranchDeleteAPIView.as_view()

# Update Branch view 
class BranchUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

branch_update_view = BranchUpdateAPIView.as_view()

# View Branch view
class BranchDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer    
    lookup_field = 'branch_id'

branch_detail_view = BranchDetailAPIView.as_view()

# ============= #

# List Subject view
class SubjectListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

subject_list_create_view = SubjectListCreateAPIView.as_view()

# Delete Subject view 
class SubjectDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    lookup_field = 'subject_id'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

subject_delete_view = SubjectDeleteAPIView.as_view()

# Update Subject view 
class SubjectUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

subject_update_view = SubjectUpdateAPIView.as_view()

 
# View Subject view
class SubjectDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer    
    lookup_field = 'subject_id'

subject_detail_view = SubjectDetailAPIView.as_view()

# ============= #

# List ClassRoom view
class ClassRoomListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = ClassRoom.objects.all()
    serializer_class = ClassRoomSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

classRoom_list_create_view = ClassRoomListCreateAPIView.as_view()

# Delete ClassRoom view 
class ClassRoomDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = ClassRoom.objects.all()
    serializer_class = ClassRoomSerializer
    lookup_field = 'ClassRoom_id'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

classRoom_delete_view = ClassRoomDeleteAPIView.as_view()

# Update ClassRoom view 
class ClassRoomUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = ClassRoom.objects.all()
    serializer_class = ClassRoomSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

classRoom_update_view = ClassRoomUpdateAPIView.as_view()

 
# View ClassRoom view
class ClassRoomDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = ClassRoom.objects.all()
    serializer_class = ClassRoomSerializer    
    lookup_field = 'classRoom_code'

classRoom_detail_view = ClassRoomDetailAPIView.as_view()
