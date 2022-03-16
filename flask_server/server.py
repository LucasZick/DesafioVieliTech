from flask import Flask

from flask_cors import CORS

from datetime import datetime


app = Flask(__name__)
CORS(app)

@app.route("/saudacao", methods=["GET"])
def GiveString():
    try:
        time = datetime.now()
        horario = time.strftime('%H:%M')
        if int(horario[:2]) in range(4,12):
            saudacao = 'BOM DIA!'

        elif int(horario[:2]) in range(12,18):
            saudacao = 'BOA TARDE!'

        elif int(horario[:2]) in range(18,24):
            saudacao = 'BOA NOITE!'
        
        else:
            saudacao = 'VAI DORMIR QUE TÁ TARDE!'
        print(f'api consumida às {horario}')
        return (saudacao)
    except Exception as error:
        return (f'erro: {error}')


app.run()