# Generated by Django 2.2.10 on 2020-09-30 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0007_pricehistory_close'),
    ]

    operations = [
        migrations.CreateModel(
            name='DailyPriceHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symbol', models.CharField(max_length=50)),
                ('volume', models.FloatField()),
                ('high', models.FloatField()),
                ('low', models.FloatField()),
                ('open', models.FloatField()),
                ('datetime', models.IntegerField()),
                ('close', models.FloatField()),
            ],
            options={
                'db_table': 'daily_price_history',
            },
        ),
        migrations.CreateModel(
            name='HourlyPriceHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symbol', models.CharField(max_length=50)),
                ('volume', models.FloatField()),
                ('high', models.FloatField()),
                ('low', models.FloatField()),
                ('open', models.FloatField()),
                ('datetime', models.IntegerField()),
                ('close', models.FloatField()),
            ],
            options={
                'db_table': 'hourly_price_history',
            },
        ),
        migrations.CreateModel(
            name='MonthlyPriceHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symbol', models.CharField(max_length=50)),
                ('volume', models.FloatField()),
                ('high', models.FloatField()),
                ('low', models.FloatField()),
                ('open', models.FloatField()),
                ('datetime', models.IntegerField()),
                ('close', models.FloatField()),
            ],
            options={
                'db_table': 'monthly_price_history',
            },
        ),
        migrations.CreateModel(
            name='WeeklyPriceHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symbol', models.CharField(max_length=50)),
                ('volume', models.FloatField()),
                ('high', models.FloatField()),
                ('low', models.FloatField()),
                ('open', models.FloatField()),
                ('datetime', models.IntegerField()),
                ('close', models.FloatField()),
            ],
            options={
                'db_table': 'weekly_price_history',
            },
        ),
    ]
