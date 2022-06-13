from rest_framework.routers import DefaultRouter

from student.viewsets import StudentViewSet

router = DefaultRouter()
router.register('student-scholar_no', StudentViewSet, basename='students')

urlpatterns = router.urls
