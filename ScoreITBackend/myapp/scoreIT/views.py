# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import detail_route, list_route
# Create your views here.
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import User, Tournament, Team, Tournament_Status


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class ScoreITViewSet (ModelViewSet):
    print("hellloo")

    # @list_route(methods=['GET'])
    # def check_campaign(self, request, *args, **kwargs):
    #     print("Hello")
    #     return Response("Hello, world. You're at the polls index.")

    #insert scoreIT_team table
    @list_route(methods=['POST'])
    def insert_team_table(self, request, *args, **kwargs):
            team = Team(Tournament_Name=request.data.get("tournament_name"), Team_A_Name=request.data.get("team_a_name"),
                        Team_B_Name=request.data.get("team_b_name"))
            team.save()


    #Retrive from  scoreIT_team table
    @list_route(methods=['POST'])
    def retrieve_team_table(self, request, *args, **kwargs):
        team = Team.objects.get(Tournament_Name=request.data.get("tournament_name"))
        print(str(team))
        return Response({
            'Tournament_Name' : team.Tournament_Name,
            'Team_A_Name' : team.Team_A_Name,
            'Team_B_Name': team.Team_B_Name
        })






    # insert scoreIT_tournament_status table
    @list_route(methods=['POST'])
    def register_user(self, request, *args, **kwargs):
        tournament_status = Tournament_Status.objects.filter(Email=request.data.get("email"))
        if not tournament_status:
            tournament_status = Tournament_Status(Email=request.data.get("email"), Tournament_Name=request.data.get("Tournament_Name"),
                                                  Team_A_Name=request.data.get("Team_A_Name"), Team_B_Name=request.data.get("Team_B_Name"),
                                                  Team_A_Score=request.data.get("Team_A_Score"), Team_B_Score=request.data.get("Team_B_Score"),
                                                  Tournament_Status=request.data.get("Tournament_Status"), Matches_Played=request.data.get("Matches_Played"), Date=request.data.get("Date"))
            tournament_status.save()
        else:
            print("User is already present in db")
        return Response("Hello, Register user")


    # Retrive from  sscoreIT_tournament_status table
    @list_route(methods=['POST'])
    def retrieve_tournament_role(self, request, *args, **kwargs):
        tournament_status = Tournament_Status.objects.get(Email=request.data.get("email"))
        print(str(tournament_status))
        return Response({
            'Tournament_Name' : tournament_status.Tournament_Name,
            'Team_A_Name' : tournament_status.Team_A_Name,
            'Team_B_Name': tournament_status.Team_B_Name,
            'Team_A_Score': tournament_status.Team_A_Score,
            'Team_B_Score': tournament_status.Team_B_Score,
            'Tournament_Status': tournament_status.Tournament_Status,
            'Matches_Played': tournament_status.Matches_Played,
            'Date': tournament_status.Date

        })

    # Insert from scoreIT_user table
    @list_route(methods=['POST'])
    def register_user(self, request, *args, **kwargs):
        user = User.objects.filter(Email = request.data.get("email"))
        if not user:
            user = User(Email= request.data.get("email"),Fname=request.data.get("fname"),Lname= request.data.get("lname"),Password= request.data.get("password") )
            user.save()
        else:
            print("User is already present in db")
        return Response("Hello, Register user")

    # Retrive from scoreIT_user table
    @list_route(methods=['POST'])
    def login(self, request, *args, **kwargs):
        user = User.objects.filter(Email = request.data.get("email"), Password = request.data.get("password"))
        if not user:
            return Response({"Invalid Username and Password"}, status=400)
        else:
            return Response({"Success"}, status=200)

    # Insert from scoreIT_tournament table
    @list_route(methods=['POST'])
    def insert_tournament(self, request, *args, **kwargs):
        tournament = Tournament.objects.filter(Email=request.data.get("email"))
        if not tournament:
            tournament = Tournament(Email=request.data.get("email"), Tournament_Name=request.data.get("tournament_name"),
                                    Role=request.data.get("role"))
            tournament.save()
        else:
            print("User is already present in db")
            return Response("Hello, Register user")

    # Retrive from  scoreIT_tournament table
    @list_route(methods=['POST'])
    def retrieve_tournament_role(self, request, *args, **kwargs):
        tournament = Tournament.objects.get(Email=request.data.get("email"))
        print(str(tournament))
        return Response({
            'Role' : tournament.Role,
            'Tournament_Name' : tournament.Tournament_Name
        })



    # def list(self, request, *args, **kwargs):
    #     #print("in list")
    #     #print(request.query_params.get('name'))
    #     userRow = get_object_or_404(User,pk='tannu14@gmail.com')
    #     print(str(userRow.Lname))
    #     return Response("Hello, world. You're at the polls index List.")
