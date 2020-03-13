from django.contrib import admin

from .models import Role, Character, Raid


class CharacterAdmin(admin.StackedInline):
    model = Character


class RoleAdmin(admin.StackedInline):
    model = Role


class CharacterProfile(admin.ModelAdmin):
    inlines = [RoleAdmin]


class RaidersInline(admin.StackedInline):
    model = Raid.raiders.through


class RaidAdmin(admin.ModelAdmin):
    inlines = [RaidersInline]
    exclude = ("raiders",)


admin.site.register(Character, CharacterProfile)
admin.site.register(Raid, RaidAdmin)
