# Generated by Django 2.2.10 on 2020-09-30 03:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0006_watchlist'),
    ]

    operations = [
        migrations.AddField(
            model_name='pricehistory',
            name='close',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]