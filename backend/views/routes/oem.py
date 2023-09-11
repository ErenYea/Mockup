from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from flask import g
import os
import json
from datetime import datetime
from datetime import date

date_format = "%d-%m-%Y"

oem_bp = Blueprint('oem', __name__)

def vehicle_sold_send_data(data,cursor):
    for entry in data:
        model= entry.get('model')
        date_str = entry.get('date')
        value = entry.get('value')
        cursor.execute("INSERT INTO vehicle_sold (model, date, value) VALUES (%s, %s, %s ) ON DUPLICATE KEY UPDATE value=%s", (model, date_str, value, value))
    g.db_connection.commit()

def sunroof_orders_send_data(data,cursor):
    for entry in data:
        model= entry.get('model')
        date_str = entry.get('date')
        value = entry.get('value')
        cursor.execute("INSERT INTO sunroof_orders (model, date, value) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE value=%s", (model, date_str, value, value))
    g.db_connection.commit()

def forecasted_sunroof_market_send_data(data,cursor):
    for entry in data:
        model= entry.get('model')
        date_str = entry.get('date')
        capacity = entry.get('capacity')
        forecast= entry.get('forecast')
        cursor.execute("INSERT INTO forecasted_sunroof_market (model, date, capacity, forecast) VALUES (%s, %s, %s, %s) ON DUPLICATE KEY UPDATE capacity=%s, forecast=%s", (model, date_str, capacity, forecast, capacity, forecast))
    g.db_connection.commit()


@oem_bp.route("/asc/oem/vehicle_sold", methods=["POST", "GET"])
def vehicle_sold():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            vehicle_sold_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM vehicle_sold")
        data = cursor.fetchall()   
        json_data=[{'model':item[0],'date': item[1], 'value': item[2]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@oem_bp.route("/asc/oem/sunroof_orders", methods=["POST", "GET"])
def sunroof_orders():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            sunroof_orders_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM sunroof_orders")
        data = cursor.fetchall()   
        json_data=[{'model':item[0],'date': item[1], 'value': item[2]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@oem_bp.route("/asc/oem/forecasted_sunroof_market", methods=["POST", "GET"])
def forecasted_sunroof_market():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            forecasted_sunroof_market_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM forecasted_sunroof_market")
        data = cursor.fetchall()   
        json_data=[{'model':item[0],'date': item[1], 'capacity': item[2], 'forecast':item[3]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405