from rest_framework import generics
from .models import Device
from .serializers import DeviceSerializer
class ListBooksAPI(generics.ListAPIView):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer