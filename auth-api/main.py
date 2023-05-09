# coding=utf-8
# Main class.

import os
from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from endpoints import SignupEndpoint

app = Flask(__name__)
api = Api(app)
api.add_resource(SignupEndpoint, '/signup')
cors = CORS(app, resources={'/signup': {'origins': '*'}}, supports_credentials=True)

if __name__ == '__main__':
    try:
        api_port = os.environ['API_PORT']
    except KeyError: 
        api_port = 3000

    app.run(host="0.0.0.0", port=api_port)