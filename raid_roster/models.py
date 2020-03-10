from django.db import models


class Character(models.Model):
    name = models.CharField(max_length=200)


class Role(models.Model):
    RoleType = models.TextChoices("RoleType", "HEALER TANK DPS")
    name = models.CharField(max_length=200, choices=RoleType.choices, blank=True)
    character = models.ForeignKey(Character)
