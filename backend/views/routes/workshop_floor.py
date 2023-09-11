from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from flask import g
import os
import json
from datetime import datetime
from datetime import date

date_format = "%d-%m-%Y"

# Create a Flask blueprint for embedding API
workshop_floor_bp = Blueprint('workshop_floor', __name__)
def employee_send_data(data,cursor):
    for entry in data:
        emp_id = entry.get('emp_id')
        name = entry.get('name')
        address = entry.get('address')
        designation = entry.get('designation')
        jobs = entry.get('jobs')
        score = entry.get('score')
        img_url= entry.get('img_url')
        best_model=entry.get('best_model')
        actual_series=entry.get('actual_series')
        cursor.execute("INSERT INTO employee_data (emp_id, name, address, designation, jobs, score, img_url, best_model, actual_series) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE name=%s, address=%s, designation=%s, jobs=%s, score=%s, img_url=%s, best_model=%s, actual_series=%s", (emp_id, name, address, designation, jobs, score, img_url, best_model, actual_series ,name, address, designation, jobs, score, img_url, best_model, actual_series))
    g.db_connection.commit()

def job_queue_send_data(data,cursor):
    for entry in data:
        car_model = entry.get('car_model')
        orders = entry.get('orders')
        estimated_day = entry.get('estimated_day')
        emp_id = entry.get('emp_id')
        cursor.execute("INSERT INTO job_queue (car_model, orders, estimated_day, emp_id) VALUES (%s, %s, %s, %s) ON DUPLICATE KEY UPDATE orders=%s, estimated_day=%s, emp_id=%s ", (car_model, orders, estimated_day, emp_id, orders, estimated_day, emp_id))
    g.db_connection.commit()

@workshop_floor_bp.route("/asc/workshop/employee", methods=["POST", "GET"])
def employee():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            employee_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM employee_data")
        data = cursor.fetchall()   
        json_data=[{'emp_id': item[0], 'name': item[1], 'address': item[2], 'designation': item[3], 'jobs': item[4], 'score': item[5], 'img_url': item[6], 'best_model': item[7], 'actual_series': item[8]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@workshop_floor_bp.route("/asc/workshop/job_queue", methods=["POST", "GET"])
def job_queue():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            job_queue_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM job_queue")
        data = cursor.fetchall()   
        json_data=[{'car_model': item[0], 'orders': item[1], 'estimated_day': item[2], 'emp_id': item[3]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405