from django.urls import path, include 
import student.views as student_views 

urlpatterns = [
    #student api
    path('student-get/<int:scholar_no>', student_views.student_detail_view, name='student-detail'),
    path('student-update/<int:scholar_no>', student_views.student_update_view, name='student-update'),
    path('student-delete/<int:scholar_no>', student_views.student_delete_view, name='student-delete'),
    path('student', student_views.student_list_create_view, name='student-list'),

    #student classroom api
    path('student-classroom-get/<str:uid>', student_views.student_classroom_detail_view, name='student-classroom-detail'),
    path('student-classroom-update/<str:uid>', student_views.student_classroom_update_view, name='student-classroom-update'),
    path('student-classroom-delete/<str:uid>', student_views.student_classroom_delete_view, name='student-classroom-delete'),
    path('student-classroom', student_views.student_classroom_list_create_view, name='student-classroom-list'),
    
]
