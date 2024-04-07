from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser

from .manager import UserManager

import uuid


class User(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(
        verbose_name='Email Address',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=200)
    avatar = models.ImageField(upload_to="avatars", blank=True, null=True)
    tc = models.BooleanField()

    friends = models.ManyToManyField("self")
    friends_count = models.IntegerField(default=0)

    people_you_may_know = models.ManyToManyField("self")

    post_count = models.IntegerField(default=0)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'tc']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    def get_avatar(self):
        if self.avatar:
            return settings.WEBSITE_URL + self.avatar.url
        else:
            return 'https://picsum.photos/200/200'

    @property
    def is_staff(self):
        return self.is_admin
