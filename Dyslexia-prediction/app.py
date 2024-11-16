from flask import Flask, render_template, request, jsonify
import model
import numpy as np
import pickle
from flask_pymongo import PyMongo


app=Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/dyslexia_final"
mongo = PyMongo(app)
model = pickle.load(open('model1.pkl', 'rb'))


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/home.html")
def a():
    return render_template("home.html")

@app.route("/about.html")
def about():
    return render_template("about.html")

@app.route("/survey.html")
def survey():
    return render_template("survey.html")

@app.route("/quiz.html")
def quiz():
    return render_template("quiz.html")

@app.route("/predict.html")
def hello():
    return render_template("index.html")

@app.route('/predict',methods=['POST'])
def predict():
    try:
        form_data = {key: request.form[key] for key in request.form.keys()}
        int_features = [float(x) for x in request.form.values()]

        final_features = [np.array(int_features)]
        prediction = model.predict(final_features)

        output = round(prediction[0], 2)
        output = int(output)

        def pred():
            if output==0:
                return "You definately have Dyslexia, Consult a doctor ASAP!"
            elif output==1:
                return "You might have mild Dyslexia, Kindly consult a doctor!!!"
            else:
                return "You don't have Dyslexia!!" 

        interpretation = {
            0: "You definitely have Dyslexia. Consult a doctor ASAP!",
            1: "You might have mild Dyslexia. Kindly consult a doctor!",
            2: "You don't have Dyslexia!"
        }.get(output)

        data = {
            "features": int_features,
            "prediction": output,
            "interpretation": interpretation,
        }

        # Insert data into MongoDB before rendering the template
        result = mongo.db.data.insert_one(data)
        print(f"Inserted document: {data}")  # Print for debugging

        return render_template('index.html', prediction_text=pred())  # Pass the function directly

    except Exception as e:
        print(f"Error during insertion: {e}")
        return render_template('index.html', prediction_text="Error: Insertion failed.")
        # form_data = {key: request.form[key] for key in request.form.keys()}
        # int_features = [float(x) for x in request.form.values()]
        
        # final_features = [np.array(int_features)]
        # prediction = model.predict(final_features)

        # output = round(prediction[0], 2)
        # output=int(output)
        # def pred():
        #     if output==0:
        #         return "You definately have Dyslexia, Consult a doctor ASAP!"
        #     elif output==1:
        #         return "You might have mild Dyslexia, Kindly consult a doctor!!!"
        #     else:
        #         return "You don't have Dyslexia!!" 
            
        
        # interpretation = {
        #     0: "You definitely have Dyslexia. Consult a doctor ASAP!",
        #     1: "You might have mild Dyslexia. Kindly consult a doctor!",
        #     2: "You don't have Dyslexia!"
        # }.get(output)

        # data = {
        #     "features": int_features,
        #     "prediction": output,
        #     "interpretation": interpretation,
        #     #"timestamp": datetime.datetime.utcnow()  # Include timestamp for tracking
        # }
        # result = mongo.db.inventory.insert_one(data)

        # return render_template('index.html', prediction_text=pred())

@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)

if __name__=="__main__":
    app.run(debug=True)
