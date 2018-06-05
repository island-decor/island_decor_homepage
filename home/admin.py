from django.contrib.admin import AdminSite


class HomeAdmin(AdminSite):
    site_header = 'Manage Homepage'


admin_site = HomeAdmin(name='homepage_admin')
# admin_site.register(MyModel)
