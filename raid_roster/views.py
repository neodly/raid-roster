from rest_framework.decorators import action
from rest_framework import viewsets
from .models import Character, Raid
from .serializers import CharacterSerializer, RaidSerializer


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


class RaidViewSet(viewsets.ModelViewSet):
    queryset = Raid.objects.all()
    serializer_class = RaidSerializer
