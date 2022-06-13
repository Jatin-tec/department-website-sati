from django.urls import path, include 
import department.views as department_views 

urlpatterns = [
    #course api
    path('course-get/<int:course_id>', department_views.course_detail_view, name='course-detail'),
    path('course-update/<int:course_id>', department_views.course_update_view, name='course-update'),
    path('course-delete/<int:course_id>', department_views.course_delete_view, name='course-delete'),
    path('course', department_views.course_list_create_view, name='course-list'),

    # department api
    path('department-get/<int:course_id>', department_views.department_detail_view, name='department-detail'),
    path('department-update/<int:course_id>', department_views.department_update_view, name='department-update'),
    path('department-delete/<int:course_id>', department_views.department_delete_view, name='department-delete'),
    path('department', department_views.department_list_create_view, name='department-list'),

    # branch api
    path('branch-get/<str:branch_id>', department_views.branch_detail_view, name='branch-detail'),
    path('branch-update/<str:branch_id>', department_views.branch_update_view, name='branch-update'),
    path('branch-delete/<str:branch_id>', department_views.branch_delete_view, name='branch-delete'),
    path('branch', department_views.branch_list_create_view, name='branch-list'),

    #subject api
    path('subject-get/<str:subject_id>', department_views.subject_detail_view, name='subject-detail'),
    path('subject-update/<str:subject_id>', department_views.subject_update_view, name='subject-update'),
    path('subject-delete/<str:subject_id>', department_views.subject_delete_view, name='subject-delete'),
    path('subject', department_views.subject_list_create_view, name='subject-list'),

    #class room api
    path('classroom-get/<str:classRoom_id>', department_views.classRoom_detail_view, name='classroom-detail'),
    path('classroom-update/<str:classRoom_id>', department_views.classRoom_update_view, name='classroom-update'),
    path('classroom-delete/<str:classRoom_id>', department_views.classRoom_delete_view, name='classroom-delete'),
    path('classroom', department_views.classRoom_list_create_view, name='classroom-list'),

]
