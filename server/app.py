from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS, cross_origin
import os
import glob
import json
# docker command to run built image: docker run -d --rm -p 5000:5000 -v (pathtothefiles):/app --name server (imagename)
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/hello', methods=['GET','POST'] )
def hello():
    textfile=open('test.txt', 'r+')
    hello=[]
    textfile.write(x)
    if request.method=='POST':
        textfile.write(request.json.get('j') +'\n')
    for line in textfile:
        hello.append(line)
    textfile.close()
    if len(hello)==0:
        return jsonify('Empty')
    return jsonify(hello)


if __name__== "__main__":
    app.run(debug=True,host='0.0.0.0')
