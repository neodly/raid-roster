# Generated by Django 3.0.4 on 2020-03-10 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('raid_roster', '0003_auto_20200310_2121'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='raid',
            name='characters',
        ),
        migrations.AddField(
            model_name='character',
            name='raids',
            field=models.ManyToManyField(related_name='raiders', to='raid_roster.Raid'),
        ),
    ]
