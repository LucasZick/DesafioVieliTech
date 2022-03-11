from flask import Flask

app = Flask('Saudacao')

@app.route('/olamundo', methods=['GET'])
def olaMundo():
    return {'ola' : 'mundo'}

app.run()