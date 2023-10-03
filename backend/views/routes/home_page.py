from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from flask import g
import os
import json
from datetime import datetime
from datetime import date

date_format = "%d-%m-%Y"

home_page_bp = Blueprint('home_page', __name__)

def home_page_jobs_per_month_send_data(data,cursor):
    for entry in data:
        month_str = entry.get('month')
        booked_jobs = entry.get('booked_jobs')
        predicted_jobs = entry.get('predicted_jobs')
        cursor.execute("INSERT INTO home_page_jobs_per_month (month, booked_jobs, predicted_jobs) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE booked_jobs=%s, predicted_jobs=%s", (month_str, booked_jobs, predicted_jobs, booked_jobs, predicted_jobs))
    g.db_connection.commit()

def home_page_upcoming_weekly_outlook_send_data(data,cursor):
    for entry in data:
        day_str = entry.get('day')
        active_jobs = entry.get('active_jobs')
        pending_jobs = entry.get('pending_jobs')
        cursor.execute("INSERT INTO home_page_upcoming_weekly_outlook (day, active_jobs, pending_jobs) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE active_jobs=%s, pending_jobs=%s", (day_str, active_jobs, pending_jobs, active_jobs, pending_jobs))
    g.db_connection.commit()

def predicted_incoming_jobs_send_data(data,cursor):
    for entry in data:
        date_str = entry.get('date')
        ford_jobs = entry.get('ford')
        nissan_jobs = entry.get('nissan')
        hyundai_jobs = entry.get('hyundai')
        honda_jobs = entry.get('honda')
        toyota_jobs = entry.get('toyota')
        cursor.execute("INSERT INTO predicted_incoming_jobs (date, ford, nissan, hyundai, honda, toyota) VALUES (%s, %s, %s, %s, %s, %s) ON DUPLICATE KEY UPDATE ford=%s, nissan=%s, hyundai=%s, honda=%s, toyota=%s", (date_str, ford_jobs, nissan_jobs, hyundai_jobs, honda_jobs, toyota_jobs, ford_jobs, nissan_jobs, hyundai_jobs, honda_jobs, toyota_jobs))
    g.db_connection.commit()

def product_variation_send_data(data,cursor):
    for entry in data:
        date_str = entry.get('date')
        value = entry.get('value')
        cursor.execute("INSERT INTO product_variation (date, value) VALUES (%s, %s) ON DUPLICATE KEY UPDATE value=%s", (date_str, value, value))
    g.db_connection.commit()

def quality_control_send_data(data,cursor):
    for entry in data:
        vendor = entry.get('vendor')
        value = entry.get('value')
        cursor.execute("INSERT INTO quality_control (vendor, value) VALUES (%s, %s ) ON DUPLICATE KEY UPDATE value=%s", (vendor, value, value))
    g.db_connection.commit()

def customer_satisfaction_send_data(data,cursor):
    for entry in data:
        year = entry.get('year')
        value = entry.get('value')
        cursor.execute("INSERT INTO customer_satisfaction (year, value) VALUES (%s, %s ) ON DUPLICATE KEY UPDATE value=%s", (year, value, value))
    g.db_connection.commit()

def defect_loses_send_data(data,cursor):
    for entry in data:
        date_str = entry.get('date')
        value = entry.get('value')
        cursor.execute("INSERT INTO defect_loses (date, value) VALUES (%s, %s ) ON DUPLICATE KEY UPDATE value=%s", (datetime.strptime(date_str, date_format), value, value))
    g.db_connection.commit()

def man_hours_utilized_send_data(data,cursor):
    for entry in data:
        date_str = entry.get('date')
        value = entry.get('value')
        cursor.execute("INSERT INTO man_hours_utilized (date, value) VALUES (%s, %s ) ON DUPLICATE KEY UPDATE value=%s", (date_str, value, value))
    g.db_connection.commit()

@home_page_bp.route("/asc/home/jobs_per_month", methods=["POST", "GET"])
def jobs_per_month():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            home_page_jobs_per_month_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM home_page_jobs_per_month")
        data = cursor.fetchall()   
        json_data=[{'month': item[0], 'booked_jobs': item[1], 'predicted_jobs': item[2]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@home_page_bp.route("/asc/home/upcoming_weekly_outlook", methods=["POST", "GET"])
def upcoming_weekly_outlook():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            home_page_upcoming_weekly_outlook_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM home_page_upcoming_weekly_outlook")
        data = cursor.fetchall()   
        json_data=[{'day': item[0], 'active_jobs': item[1], 'pending_jobs': item[2]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@home_page_bp.route("/asc/home/predicted_incoming_jobs", methods=["POST", "GET"])
def predicted_incoming_jobs():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            predicted_incoming_jobs_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM predicted_incoming_jobs")
        data = cursor.fetchall()   
        json_data=[{'date': item[0], 'ford': item[1], 'nissan': item[2], 'hyundai': item[3], 'honda': item[4], 'toyota': item[5]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@home_page_bp.route("/asc/home/product_variation", methods=["POST", "GET"])
def product_variation():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            product_variation_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM product_variation")
        data = cursor.fetchall()   
        json_data=[{'date': item[0], 'value': item[1]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@home_page_bp.route("/asc/home/quality_control", methods=["POST", "GET"])
def quality_control():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            quality_control_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM quality_control")
        data = cursor.fetchall()   
        json_data=[{'vendor': item[0], 'value': item[1]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405

@home_page_bp.route("/asc/home/customer_satisfaction", methods=["POST", "GET"])
def customer_satisfaction():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            customer_satisfaction_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM customer_satisfaction")
        data = cursor.fetchall()   
        json_data=[{'year': item[0], 'value': item[1]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405
    
@home_page_bp.route("/asc/home/defect_loses", methods=["POST", "GET"])
def defect_loses():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            defect_loses_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM defect_loses")
        data = cursor.fetchall()   
        data_lst=[[d.isoformat() if isinstance(d, date) else d for d in item] for item in data]
        json_data=[{'date': item[0], 'value': item[1]} for item in data_lst]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405

@home_page_bp.route("/asc/home/man_hours_utilized", methods=["POST", "GET"])
def man_hours_utilized():
    cursor=g.db_cursor
    if request.method == "POST":
        try:
            forecast_data = request.get_json()
            man_hours_utilized_send_data(forecast_data,cursor)
            return jsonify({"message": "success"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        cursor.execute("SELECT * FROM man_hours_utilized")
        data = cursor.fetchall()   
        json_data=[{'date': item[0], 'value': item[1]} for item in data]
        return jsonify(data=json_data), 200

    else:
        # For other request methods, return an error message
        return jsonify({"error": "Method not allowed"}), 405