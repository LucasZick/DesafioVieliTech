"""FIRST HUG API"""
import hug

from hug_middleware_cors import CORSMiddleware

from datetime import datetime

api = hug.API()
api.http.add_middleware(CORSMiddleware(api))

@hug.get("/saudacao")
def Saudacao(response=None):
    """RETURN A STRING CONTAINING THE CORRECT GREETING ACCORDING TO THE HOUR"""
    response and response.set_header('Access-Control-Allow-Origin', '*')
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