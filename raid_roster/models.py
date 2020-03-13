from django.db import models
from django.core.exceptions import ValidationError


class Character(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Role(models.Model):
    RoleType = models.TextChoices("RoleType", "HEALER TANK DPS",)
    role = models.CharField(max_length=200, choices=RoleType.choices, blank=True)
    character = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="roles",)

    def __str__(self):
        return f"{self.character.name} - {self.role}"


class Raid(models.Model):
    RaidType = models.TextChoices("RaidType", "MC BWL",)
    raiders = models.ManyToManyField(Character, related_name="raids")
    date = models.DateTimeField()
    raid = models.CharField(max_length=200, choices=RaidType.choices, blank=False)

    def __str__(self):
        return f"{self.raid} - {self.date}"
