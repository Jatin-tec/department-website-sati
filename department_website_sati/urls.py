from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)
from .tokens import MyTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('faculty/', include('faculty.urls')),
    path('student/', include('student.urls')),
    path('department/', include('department.urls')),
    path('attendance/', include('attendance.urls')), 
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   
    # path('auth/', obtain_auth_token),
    path('v2/', include('department_website_sati.routers'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
