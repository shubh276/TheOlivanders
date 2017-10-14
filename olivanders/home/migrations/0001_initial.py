# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-09-05 14:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Wands',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('price', models.IntegerField(max_length=10)),
                ('wand_image', models.CharField(max_length=2000)),
            ],
        ),
    ]