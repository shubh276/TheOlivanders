from django.db import models

class Wands(models.Model):
    name = models.CharField(max_length=250)
    price = models.IntegerField()
    wand_image = models.CharField(max_length=2000)
    previous_owner = models.CharField(max_length=250, default='haha')
    length = models.CharField(max_length=250, default='haha')
    made_of = models.CharField(max_length=250, default='haha')

    def __str__(self):
        return self.name