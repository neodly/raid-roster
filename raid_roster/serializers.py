from rest_framework import serializers
from .models import Character, Raid


class CharacterSerializer(serializers.HyperlinkedModelSerializer):
    roles = serializers.SerializerMethodField()

    def get_roles(self, instance):
        return instance.roles.all().values_list("role", flat=True)

    class Meta:
        model = Character
        fields = "__all__"


class RaidSerializer(serializers.HyperlinkedModelSerializer):
    healers = serializers.SerializerMethodField()
    tanks = serializers.SerializerMethodField()
    dps = serializers.SerializerMethodField()

    def get_healers(self, instance):
        return instance.raiders.filter(roles__role="HEALER").count()

    def get_tanks(self, instance):
        return instance.raiders.filter(roles__role="TANK").count()

    def get_dps(self, instance):
        return instance.raiders.filter(roles__role="DPS").count()

    class Meta:
        model = Raid
        fields = "__all__"
