from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views as faculty_views

urlpatterns = [
    path('get-faculty/', faculty_views.faculty),
    path('faculty-contact-details-get/<str:faculty_id>', faculty_views.faculty_contact_details_detail_view, name='contact-detail'),
    path('faculty-contact-details-update/<str:faculty_id>', faculty_views.faculty_contact_details_update_view, name='contact-update'),
    path('faculty-contact-details-delete/<str:faculty_id>', faculty_views.faculty_contact_details_delete_view, name='contact-delete'),
    path('faculty-contact-details', faculty_views.faculty_contact_details_list_create_view, name='contact-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)