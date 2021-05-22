'''
    @author: Pedro Pereira
    @adress: https://github.com/santospereira

    @to execute: flask run
'''

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/rota")
def hello2():
    return '''
    <style>
        #tela {
            font-family: Arial,Calibri,Helvetica;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            justify-content: center;

            background-color: rgb(196, 196, 196);
            margin-top: 10%;
            padding: -500px;
            padding-right: -500px;
            border-radius: 15px;
        }
    </style>
    <body>
        <div id="tela">
            <h1>Rota atualmente indisponível</h1>
            <p>A página que você procura não existe ou pode ter sido movida.</p>
            <p>Para mais informações contate o administrador do site.</p>
        </div>
    </body>
    '''
