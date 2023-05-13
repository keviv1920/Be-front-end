# Importing necessary libraries
from flask import Flask,request,jsonify,render_template
# import uvicorn
import pickle
# from pydantic import BaseModel
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# import pandas as pd
# from keras.models import load_model
# Initializing the fast API server
# app = FastAPI()

app=Flask(__name__)

# origins = [
#     "http://localhost.tiangolo.com",
#     "https://localhost.tiangolo.com",
#     "http://localhost",
#     "http://localhost:8080",
#     "http://localhost:3000",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# Loading up the trained model
coal = pickle.load(open('coal.pickle', 'rb'))
# natural_gas = pickle.load(open('../model/natural_gas.pickle', 'rb'))
# petroleum = pickle.load(open('../model/petroleum.pickle', 'rb'))

# model3 = pickle.load(open('../model/decision.pkl', 'rb'))

# Defining the model input types
# class Candidate(BaseModel):
#     Gender: int
#     Hemoglobin: float
#     MCH: float
#     MCHC: float
#     MCV: float
natural_gasPred = coal
print("sdjsj",natural_gasPred)
# Setting up the home route
@app.get("/")
def read_root():
    natural_gasPred = coal.predict()
    print("hidhjsdbjdwj")
    return {"data": "Welcome to online Anemia prediction model"}

# Setting up the prediction route
@app.post("/prediction")
async def get_predict():
    print("hiiiiiiiii")
    # sample = [[
    #     data.Gender,
    #     data.Hemoglobin,
    #     data.MCH,
    #     data.MCHC,
    #     data.MCV
    # ]]
    
    # coalPred = coal.results.get_forecast(steps= 120)
    natural_gasPred = natural_gas.predict()
    # petroleumPred = petroleum.predict(sample).tolist()[0]
    
    # rfAndKnn=(rfPred+knnPred)/2;
    # rfAndNb=(rfPred+nbPred)/2;
    # knnAndNb=(knnPred+nbPred)/2;
    # rf_knn_nb=(rfAndKnn+knnAndNb+rfAndNb)/3

    # FinalPred=((rfAndNb+rfAndKnn+knnAndNb+rf_knn_nb)/4)*100;
    FinalPred=[natural_gasPred]


    # probability=((result+result2+result4)/3)*100;
    # print("result",result, "->",result2,"->",result4)
    print(natural_gasPred)
    
    return {
        "data": {
            'result': FinalPred,
         }
    }

# Configuring the server host and port
if __name__ == '__main__':
    app.run(debug=True)