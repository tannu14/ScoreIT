# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    Email = models.CharField(max_length=30, primary_key=True)
    Fname = models.CharField(max_length=30)
    Lname = models.CharField(max_length=30)
    Password = models.CharField(max_length=30)

class Team(models.Model):
    Tournament_Name = models.CharField(max_length=30, primary_key=True)
    Team_A_Name = models.CharField(max_length=30)
    Team_B_Name = models.CharField(max_length=30)

class Tournament(models.Model):
    Email = models.CharField(max_length=200, primary_key=True)
    Tournament_Name = models.CharField(max_length=200)
    Role = models.CharField(max_length=200)


class Tournament_Status(models.Model):
    Email = models.CharField(max_length=200, primary_key=True)
    Tournament_Name = models.CharField(max_length=200)
    Team_A_Name = models.CharField(max_length=200)
    Team_B_Name = models.CharField(max_length=200)
    Team_A_Score = models.CharField(max_length=200)
    Team_B_Score = models.CharField(max_length=200)
    Tournament_Status = models.CharField(max_length=200)
    Matches_Played = models.CharField(max_length=200)
    Date = models.DateTimeField(auto_now_add=True)


