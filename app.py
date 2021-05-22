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
    <body>
        <h1>Rota atualmente indisponível</h1>
        <p>A página que você procura não existe ou pode ter sido movida.</p>
        <p>Para mais informações contate o administrador do site.</p>
    </body>
    '''
