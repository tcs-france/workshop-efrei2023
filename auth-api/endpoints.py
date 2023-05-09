# coding=utf-8
# Endpoints class.

from flask import jsonify, request, abort
from flask_restful import Resource
import asyncio

from bus import AzureBus


class SignupEndpoint(Resource):
    def post(self):
        data = request.get_json()

        if "first_name" not in data:
            return abort(400, 'No first_name sent')
        if "last_name" not in data:
            return abort(400, 'No last_name sent')
        if "email" not in data:
            return abort(400, 'No email sent')
        
        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']

        bus = AzureBus()
        asyncio.run(bus.send_message(first_name, last_name, email))

        return jsonify({ 'message': 'Your registration is in progress ' + first_name + '!' })

        