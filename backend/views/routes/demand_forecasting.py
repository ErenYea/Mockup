from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from flask import g
import os
import json
from datetime import datetime
from datetime import date
from flask_cors import cross_origin

date_format = "%d-%m-%Y"

# Create a Flask blueprint for embedding API
demand_forecasting_bp = Blueprint('demand_forecasting', __name__)

def sunroof_forecast_send_data(data,cursor):
    for entry in data:
        date_str = entry.get('date')
        oem_capacity = entry.get('OEM_capacity')
        forecast = entry.get('forecast')
        cursor.execute("INSERT INTO sunroof_forecast (date, OEM_capacity, forecast) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE OEM_capacity=%s, forecast=%s", (datetime.strptime(date_str, date_format), oem_capacity, forecast, oem_capacity, forecast))
    g.db_connection.commit()

def projected_installations_per_month_send_data(data,cursor):
    for entry in data:
        year=entry.get('year')
        month= entry.get('month')
        ford_vehicles= entry.get('ford_vehicles')
        nissan_vehicles=entry.get('nissan_vehicles')
        hyundai_vehicles=entry.get('hyundai_vehicles')
        honda_vehicles=entry.get('honda_vehicles')
        toyota_vehicles=entry.get('toyota_vehicles')
        cursor.execute("INSERT INTO projected_installations_per_month (year, month, ford_vehicles, nissan_vehicles, hyundai_vehicles, honda_vehicles, toyota_vehicles) VALUES (%s, %s, %s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE ford_vehicles=%s, nissan_vehicles=%s, hyundai_vehicles=%s, honda_vehicles=%s, toyota_vehicles=%s", (year, month, ford_vehicles, nissan_vehicles, hyundai_vehicles, honda_vehicles, toyota_vehicles, ford_vehicles, nissan_vehicles, hyundai_vehicles, honda_vehicles, toyota_vehicles))
    g.db_connection.commit()

def automotive_parts_projection_send_data(data,cursor):
    for entry in data:
        quarter = entry.get('quarter')
        manufacturer = entry.get('manufacturer')
        category = entry.get('category')
        value = entry.get('value')
        cursor.execute("INSERT INTO automotive_parts_projection (quarter, manufacturer, category, value ) VALUES (%s, %s, %s, %s) ON DUPLICATE KEY UPDATE manufacturer=%s, category=%s, value=%s", (quarter, manufacturer, category, value, manufacturer, category, value ))
    g.db_connection.commit()


@demand_forecasting_bp.route("/asc/demandforecasting/sunroof_forecast", methods=["POST", "GET"])
def sunroof_forecast():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            sunroof_forecast_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM sunroof_forecast")
        data = cursor.fetchall()   
        data_lst=[[d.isoformat() if isinstance(d, date) else d for d in item] for item in data]
        json_data=[{'date': item[0], 'OEM_capacity': item[1], 'forecast': item[2]} for item in data_lst]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@demand_forecasting_bp.route("/asc/demandforecasting/projected_installations_per_month", methods=["POST", "GET"])
def projected_installations_per_month():
    cursor=g.db_cursor
    if request.method == "POST": 
        try:
            projected_data=request.get_json()
            projected_installations_per_month_send_data(projected_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM projected_installations_per_month")
        data = cursor.fetchall()   
        json_data=[{'year': item[0], 'month': item[1], 'ford_vehicles': item[2], 'nissan_vehicles': item[3],'hyundai_vehicles': item[4], 'honda_vehicles': item[5], 'toyota_vehicles': item[6]} for item in data]
        return jsonify(data=json_data), 200
    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@demand_forecasting_bp.route("/asc/demandforecasting/automotive_parts_projection", methods=["POST", "GET"])
@cross_origin()
def automotive_parts_projection():
    cursor=g.db_cursor
    if request.method == "POST": 
        try:
            projected_data = request.get_json()
            automotive_parts_projection_send_data(projected_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400        
    elif request.method == "GET":
        manufacturer = request.args.get('manufacturer')
        category = request.args.get('category')
        sql_query="SELECT * FROM automotive_parts_projection"
        conditions = []
        if manufacturer:
            conditions.append(f"manufacturer = '{manufacturer}'")
        if category:
            conditions.append(f"category = '{category}'")
        if conditions:
            sql_query += " WHERE " + " AND ".join(conditions)
        cursor.execute(sql_query)
        data = cursor.fetchall()   
        json_data=[{'quarter': item[0], 'manufacturer': item[1], 'category': item[2],'value': item[3]} for item in data]
        return jsonify(data=json_data), 200
    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405