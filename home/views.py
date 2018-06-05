from django.http import HttpResponse
from django.template import loader
# from django.shortcuts import render
# from django.shortcuts import render_to_response


def home_page(request):
    template = loader.get_template('home/index.html')
    return HttpResponse(template.render())