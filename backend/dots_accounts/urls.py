from django.urls import re_path, path

from rest_framework_simplejwt import views as jwt_views

from .views import *

urlpatterns = [
    path("login/", UserLoginView.as_view(), name='login'),
    path("register/", UserRegistrationView.as_view(), name='register'),
    path("profile/", UserProfileView.as_view(), name='profile'),
    path("change-password/", UserChangePasswordView.as_view(),
         name='change-password'),
    path("reset-password/", SendPasswordResetEmailView.as_view(),
         name='send_reset_password_email'),
    re_path(r'^reset-password/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$',
            UserPasswordResetView.as_view(), name='reset_password'),
    path("verify/", VerifyTokenView.as_view(), name="verify_token"),
    path("token/refresh/", jwt_views.TokenRefreshView.as_view(),
         name="token_refresh"),
    path("logout/", UserLogoutView.as_view(), name="logout")
]
