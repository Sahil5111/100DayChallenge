from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class data(models.Model):
    text=models.CharField(max_length=20)
    url=models.URLField(max_length=200)
