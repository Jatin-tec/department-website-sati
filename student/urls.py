from django.urls import path, include 
import student.views as student_views 

urlpatterns = [
    #student api
    path('student-get/<int:scholar_no>', student_views.student_detail_view, name='student-detail'),
    path('student-update/<int:scholar_no>', student_views.student_update_view, name='student-update'),
    path('student-delete/<int:scholar_no>', student_views.student_delete_view, name='student-delete'),
    path('student', student_views.student_list_create_view, name='student-list'),

    #student classroom api
    
]
