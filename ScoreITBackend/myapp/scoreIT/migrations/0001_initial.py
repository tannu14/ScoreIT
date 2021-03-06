# Generated by Django 2.0.3 on 2018-03-30 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.CharField(default='', max_length=30)),
                ('Tournament_Name', models.CharField(max_length=30)),
                ('Team_A_Name', models.CharField(max_length=30)),
                ('Team_B_Name', models.CharField(max_length=30)),
                ('Tournament_Type', models.CharField(default='singles', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Tournament',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.CharField(max_length=200)),
                ('Tournament_Name', models.CharField(max_length=200)),
                ('Role', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Tournament_Status',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.CharField(max_length=200)),
                ('Tournament_Name', models.CharField(max_length=200)),
                ('Team_A_Name', models.CharField(max_length=200)),
                ('Team_B_Name', models.CharField(max_length=200)),
                ('Team_A_Score', models.CharField(max_length=200)),
                ('Team_B_Score', models.CharField(max_length=200)),
                ('Tournament_Status', models.CharField(max_length=200)),
                ('Matches_Played', models.CharField(max_length=200)),
                ('Date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('Email', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('Fname', models.CharField(max_length=30)),
                ('Lname', models.CharField(max_length=30)),
                ('Password', models.CharField(max_length=30)),
            ],
        ),
    ]
