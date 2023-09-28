from django.db import models

# models - representation of our data
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    
    def __str__(self) -> str:
        return self.name
