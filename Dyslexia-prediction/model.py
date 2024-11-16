# from sklearn.svm import SVC
# from sklearn.model_selection import train_test_split
# import numpy as np
# import pandas as pd
# from sklearn.model_selection import GridSearchCV
# from sklearn.ensemble import RandomForestClassifier
# import seaborn as sns
# import matplotlib.pyplot as plt
# from sklearn.preprocessing import StandardScaler
# import pickle
# from sklearn.metrics import classification_report

# #Reading the dataset
# data=pd.read_csv('labelled_dysx.csv')
# #Value to be predicted by the model.
# y=data.Label 
# #Input taken by the model.
# X=data.drop(['Label'],axis=1) 
# data.head()
# X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=10)

# sc=StandardScaler(copy=False)
# sc.fit_transform(X_train)
# sc.transform(X_test)

# #Creating a list of possible n_estimators.
# n_est = {'n_estimators' : [10,100,500,1000]}
# #Creating a RandomForest model using the value of n_estimators given by GridSearch for best result.
# model = GridSearchCV(RandomForestClassifier(random_state=0),n_est,scoring='f1_macro')
# #Training the model
# model.fit(X_train, y_train)

# pickle.dump(model, open('model.pkl','wb'))
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import pickle
from sklearn.metrics import classification_report
from imblearn.over_sampling import RandomOverSampler

# Reading the dataset
data = pd.read_csv('labelled_dysx.csv')

# Value to be predicted by the model.
y = data.Label 
# Input taken by the model.
X = data.drop(['Label'], axis=1) 

# Perform Random Oversampling
ros = RandomOverSampler(random_state=0)
X_resampled, y_resampled = ros.fit_resample(X, y)

# Splitting the resampled dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=10)

sc = StandardScaler(copy=False)
sc.fit_transform(X_train)
sc.transform(X_test)

# Creating a list of possible n_estimators.
n_est = {'n_estimators' : [10,100,500,1000]}
# Creating a RandomForest model using the value of n_estimators given by GridSearch for best result.
model = GridSearchCV(RandomForestClassifier(random_state=0), n_est, scoring='f1_macro')
# Training the model
model.fit(X_train, y_train)

# Dumping the trained model to a file
pickle.dump(model, open('model1.pkl', 'wb'))