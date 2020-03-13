# Generated by Django 3.0.4 on 2020-03-10 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('raid_roster', '0004_auto_20200310_2133'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='raids',
        ),
        migrations.AddField(
            model_name='raid',
            name='character',
            field=models.ManyToManyField(related_name='raids', to='raid_roster.Character'),
        ),
    ]
