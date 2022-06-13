from rest_framework import permissions
from department_website_sati.permissions import IsStaffEditorPermissions

class StaffEditorPermissionMixin():
    permission_classes = [IsStaffEditorPermissions]
