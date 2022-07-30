from rest_framework import generics, permissions, mixins, authentication
from rest_framework.views import APIView
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

# ============= #

# List Assingment view
class AssingmentListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = Assingment.objects.all()
    serializer_class = AssingmentSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

assingment_list_create_view = AssingmentListCreateAPIView.as_view()

# Delete Assingment view 
class AssingmentDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = Assingment.objects.all()
    serializer_class = AssingmentSerializer
    lookup_field = 'primary_key'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

assingment_delete_view = AssingmentDeleteAPIView.as_view()

# Update Assingment view 
class AssingmentUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = Assingment.objects.all()
    serializer_class = AssingmentSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

assingment_update_view = AssingmentUpdateAPIView.as_view()

 
# View Assingment view
class AssingmentDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = Assingment.objects.all()
    serializer_class = AssingmentSerializer    
    lookup_field = 'primary_key'

assingment_detail_view = AssingmentDetailAPIView.as_view()

# ============= #

# List Quiz view
class QuizListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

quiz_list_create_view = QuizListCreateAPIView.as_view()

# Delete Quiz view 
class QuizDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    lookup_field = 'primary_key'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

quiz_delete_view = QuizDeleteAPIView.as_view()

# Update Quiz view 
class QuizUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

quiz_update_view = QuizUpdateAPIView.as_view()

 
# View Quiz view
class QuizDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer    
    lookup_field = 'primary_key'

quiz_detail_view = QuizDetailAPIView.as_view()

# ============= #

# List SubjectiveQuestions view
class SubjectiveQuestionsListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = Subjective_Questions.objects.all()
    serializer_class = SubjectiveQuestionsSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

subjectiveQuestions_list_create_view = SubjectiveQuestionsListCreateAPIView.as_view()

# Delete SubjectiveQuestions view 
class SubjectiveQuestionsDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = Subjective_Questions.objects.all()
    serializer_class = SubjectiveQuestionsSerializer
    lookup_field = 'primary_key'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

subjectiveQuestions_delete_view = SubjectiveQuestionsDeleteAPIView.as_view()

# Update SubjectiveQuestions view 
class SubjectiveQuestionsUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = Subjective_Questions.objects.all()
    serializer_class = SubjectiveQuestionsSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

subjectiveQuestions_update_view = SubjectiveQuestionsUpdateAPIView.as_view()

 
# View SubjectiveQuestions view
class SubjectiveQuestionsDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = Subjective_Questions.objects.all()
    serializer_class = SubjectiveQuestionsSerializer    
    lookup_field = 'primary_key'

subjectiveQuestions_detail_view = SubjectiveQuestionsDetailAPIView.as_view()

# ============= #

# List MCQ_Questions view
class MCQ_QuestionsListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

mcq_questions_list_create_view = MCQ_QuestionsListCreateAPIView.as_view()

# Delete MCQ_Questions view 
class MCQ_QuestionsDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsSerializer
    lookup_field = 'primary_key'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

mcq_questions_delete_view = MCQ_QuestionsDeleteAPIView.as_view()

# Update MCQ_Questions view 
class MCQ_QuestionsUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

mcq_questions_update_view = MCQ_QuestionsUpdateAPIView.as_view()

 
# View MCQ_Questions view
class MCQ_QuestionsDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsSerializer    
    lookup_field = 'primary_key'

mcq_questions_detail_view = MCQ_QuestionsDetailAPIView.as_view()

# ============= #

# List MCQ_QuestionsQuiz view
class MCQ_QuestionsQuizListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsQuizSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

mcq_questions_quiz_list_create_view = MCQ_QuestionsQuizListCreateAPIView.as_view()

# Delete MCQ_QuestionsQuiz view 
class MCQ_QuestionsQuizDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsQuizSerializer
    lookup_field = 'primary_key'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

mcq_questions_quiz_delete_view = MCQ_QuestionsQuizDeleteAPIView.as_view()

# Update MCQ_QuestionsQuiz view 
class MCQ_QuestionsQuizUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsQuizSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

mcq_questions_quiz_update_view = MCQ_QuestionsQuizUpdateAPIView.as_view()

 
# View MCQ_QuestionsQuiz view
class MCQ_QuestionsQuizDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = MCQ_QuestionsQuizSerializer    
    lookup_field = 'primary_key'

mcq_questions_quiz_detail_view = MCQ_QuestionsQuizDetailAPIView.as_view()

# ============= #

# List SubjectiveQuestionsQuiz view
class SubjectiveQuestionsQuizListCreateAPIView(
    StaffEditorPermissionMixin,
    generics.ListCreateAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = SubjectiveQuestionsQuizSerializer

    def perform_create(self, serializer):
        print(serializer)
        serializer.save()

subjective_questions_quiz_list_create_view = SubjectiveQuestionsQuizListCreateAPIView.as_view()

# Delete SubjectiveQuestionsQuiz view 
class SubjectiveQuestionsQuizDeleteAPIView(
    StaffEditorPermissionMixin,
    generics.DestroyAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = SubjectiveQuestionsQuizSerializer
    lookup_field = 'primary_key'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

subjective_questions_quiz_delete_view = SubjectiveQuestionsQuizDeleteAPIView.as_view()

# Update SubjectiveQuestionsQuiz view 
class SubjectiveQuestionsQuizUpdateAPIView(
    StaffEditorPermissionMixin,
    generics.UpdateAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = SubjectiveQuestionsQuizSerializer

    def perform_update(self, serializer):
        instance = serializer.save()

subjective_questions_quiz_update_view = SubjectiveQuestionsQuizUpdateAPIView.as_view()

 
# View SubjectiveQuestionsQuiz view
class SubjectiveQuestionsQuizDetailAPIView(
    StaffEditorPermissionMixin,
    generics.RetrieveAPIView
    ):
    queryset = MCQ_Question.objects.all()
    serializer_class = SubjectiveQuestionsQuizSerializer    
    lookup_field = 'primary_key'

subjective_questions_quiz_detail_view = SubjectiveQuestionsQuizDetailAPIView.as_view()

from .serializers import RegisterUserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

class CustomUserCreate(APIView):
    permissions_classes = [AllowAny]

    def post(self, request):
        print(request.data)
        reg_serializer = RegisterUserSerializer(data=request.data)

        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            
            if newuser:
                return Response(status=status.HTTP_201_CREATED)

        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)        
