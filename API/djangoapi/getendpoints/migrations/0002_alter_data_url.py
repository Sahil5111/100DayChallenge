# Generated by Django 4.1.3 on 2022-11-27 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('getendpoints', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='url',
            field=models.URLField(),
        ),
    ]
