from django.urls import path, include 
import department.views as department_views 
from django.conf import settings
from django.conf.urls.static import static

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

    #assingment api
    path('assingment-get/<str:primary_key>', department_views.assingment_detail_view, name='assingment-detail'),
    path('assingment-update/<str:primary_key>', department_views.assingment_update_view, name='assingment-update'),
    path('assingment-delete/<str:primary_key>', department_views.assingment_delete_view, name='assingment-delete'),
    path('assingment', department_views.assingment_list_create_view, name='assingment-list'),

    #quiz api
    path('quiz-get/<str:primary_key>', department_views.quiz_detail_view, name='quiz-detail'),
    path('quiz-update/<str:primary_key>', department_views.quiz_update_view, name='quiz-update'),
    path('quiz-delete/<str:primary_key>', department_views.quiz_delete_view, name='quiz-delete'),
    path('quiz', department_views.quiz_list_create_view, name='quiz-list'),
    

    #subjective questions api
    path('subjective-questions-get/<str:primary_key>', department_views.subjectiveQuestions_detail_view, name='subjective-questions-detail'),
    path('subjective-questions-update/<str:primary_key>', department_views.subjectiveQuestions_update_view, name='subjective-questions-update'),
    path('subjective-questions-delete/<str:primary_key>', department_views.subjectiveQuestions_delete_view, name='subjective-questions-delete'),
    path('subjective-questions', department_views.subjectiveQuestions_list_create_view, name='subjective-questions-list'),
    
    #mcq questions api
    path('mcq-questions-get/<str:primary_key>', department_views.mcq_questions_detail_view, name='mcq-questions-detail'),
    path('mcq-questions-update/<str:primary_key>', department_views.mcq_questions_update_view, name='mcq-questions-update'),
    path('mcq-questions-delete/<str:primary_key>', department_views.mcq_questions_delete_view, name='mcq-questions-delete'),
    path('mcq-questions', department_views.mcq_questions_list_create_view, name='mcq-questions-list'),
    
    #mcq questions quiz api
    path('mcq-questions-quiz-get/<str:primary_key>', department_views.mcq_questions_quiz_detail_view, name='mcq-questions-quiz-detail'),
    path('mcq-questions-quiz-update/<str:primary_key>', department_views.mcq_questions_quiz_update_view, name='mcq-questions-quiz-update'),
    path('mcq-questions-quiz-delete/<str:primary_key>', department_views.mcq_questions_quiz_delete_view, name='mcq-questions-quiz-delete'),
    path('mcq-questions-quiz', department_views.mcq_questions_quiz_list_create_view, name='mcq-questions-quiz-list'),
    
    #subjective questions quiz api
    path('subjective-questions-quiz-get/<str:primary_key>', department_views.subjective_questions_quiz_detail_view, name='subjective-questions-quiz-detail'),
    path('subjective-questions-quiz-update/<str:primary_key>', department_views.subjective_questions_quiz_update_view, name='subjective-questions-quiz-update'),
    path('subjective-questions-quiz-delete/<str:primary_key>', department_views.subjective_questions_quiz_delete_view, name='subjective-questions-quiz-delete'),
    path('subjective-questions-quiz', department_views.subjective_questions_quiz_list_create_view, name='subjective-questions-quiz-list'),

    path('register/', department_views.CustomUserCreate.as_view(), name="create_user")   

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
