from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from flask import g
import os
import json
from datetime import datetime
from datetime import date

date_format = "%d-%m-%Y"

worker_performance_bp = Blueprint('worker_performance', __name__)

def employee_box_and_whiskers_send_data(data,cursor):
    for entry in data:
        emp_id = entry.get('emp_id')
        vendor = entry.get('vendor')
        max_val = entry.get('max_val')
        q3 = entry.get('q3')
        median = entry.get('median')
        q1 = entry.get('q1')
        min_val = entry.get('min_val')
        cursor.execute("INSERT INTO employee_box_and_whiskers (emp_id, vendor, max, q3, med, q1, min) VALUES (%s, %s, %s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE vendor=%s, max=%s, q3=%s, med=%s, q1=%s, min=%s", (emp_id, vendor, max_val, q3, median, q1, min_val, vendor, max_val, q3, median, q1, min_val))
    g.db_connection.commit()

@worker_performance_bp.route("/asc/worker_performance/box", methods=["POST", "GET"])
def employee_box_and_whiskers():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            employee_box_and_whiskers_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM employee_box_and_whiskers")
        data = cursor.fetchall()   
        json_data=[{'emp_id': item[0], 'vendor': item[1], 'max_val': item[2], 'q3': item[3], 'median': item[4], 'q1': item[5], 'min_val': item[6]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405