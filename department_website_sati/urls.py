from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('faculty/', include('faculty.urls')),
    path('student/', include('student.urls')),
    path('department/', include('department.urls')),
    path('auth/', obtain_auth_token),
    path('v2/', include('department_website_sati.routers'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
