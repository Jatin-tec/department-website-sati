from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views as attendance_views

urlpatterns = [
    path('computer-science-attendace-get/<str:faculty_id>', attendance_views.computer_science_attendace_detail_view, name='computer-science-attendece-detail'),
    path('computer-science-attendace-update/<str:faculty_id>', attendance_views.computer_science_attendace_update_view, name='computer-science-attendece-update'),
    path('computer-science-attendace-delete/<str:faculty_id>', attendance_views.computer_science_attendace_delete_view, name='computer-science-attendece-delete'),
    path('computer-science-attendace', attendance_views.computer_science_attendace_list_create_view, name='computer-science-attendece-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)