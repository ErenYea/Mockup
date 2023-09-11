from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from flask import g
import os
import json
from datetime import datetime
from datetime import date

date_format = "%d-%m-%Y"

retailer_bp = Blueprint('retailer', __name__)

def total_sunroof_market_demand_send_data(data,cursor):
    for entry in data:
        model= entry.get('model')
        date_str = entry.get('date')
        capacity = entry.get('capacity')
        forecast= entry.get('forecast')
        prediction= entry.get('prediction')
        cursor.execute("INSERT INTO total_sunroof_market_demand (model, date, capacity, forecast, prediction) VALUES (%s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE capacity=%s, forecast=%s, prediction=%s", (model, date_str, capacity, forecast, prediction, capacity, forecast, prediction))
    g.db_connection.commit()


@retailer_bp.route("/asc/retailer/total_sunroof_market_demand", methods=["POST", "GET"])
def total_sunroof_market_demand():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            total_sunroof_market_demand_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM total_sunroof_market_demand")
        data = cursor.fetchall()   
        json_data=[{'model':item[0],'date': item[1], 'capacity': item[2], 'forecast':item[3], 'prediction':item[4]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    