from socketserver import ThreadingMixIn
import os
from flask import Flask
from flask import request, jsonify, g
from dotenv import load_dotenv
from flask_cors import CORS
from flask_mysqldb import MySQL

#importing all the routes
from views.routes.demand_forecasting import demand_forecasting_bp
from views.routes.home_page import home_page_bp
from views.routes.workshop_floor import workshop_floor_bp
from views.routes.worker_performance import worker_performance_bp
from views.routes.oem import oem_bp
from views.routes.retailer import retailer_bp

load_dotenv()

authorization_key=os.getenv('Authorization')
class ThreadedServer(ThreadingMixIn, Flask):
    pass

app = ThreadedServer(__name__)
CORS(app)

from flask_mysqldb import MySQL

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'asc'
mysql = MySQL(app)

def connect_db():
    return mysql.connection.cursor()

def close_db(cursor):
    cursor.close()

@app.before_request
def authenticate_request():
    # Retrieve the Authorization header
    # authorization_header = request.headers.get("Authorization")

    # # Check if the header contains the expected value
    # if authorization_header != authorization_key:
    #     return jsonify({"error": "Unauthorized"}), 401
    
    # Create a database connection and attach it to the app context
    g.db_cursor = connect_db()
    g.db_connection = mysql.connection

def after_request(response):
    # Close the database connection
    close_db(g.db_cursor)
    return response


app.register_blueprint(demand_forecasting_bp)
app.register_blueprint(home_page_bp)
app.register_blueprint(workshop_floor_bp)
app.register_blueprint(worker_performance_bp)
app.register_blueprint(oem_bp)
app.register_blueprint(retailer_bp)