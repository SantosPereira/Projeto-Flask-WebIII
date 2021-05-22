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

@app.route("/trynow")
def trynow():
    return render_template('trynow/index.html')

@app.route("/download")
def download():
    return render_template('download/index.html')

@app.route("/faq")
def faq():
    return render_template("faq/index.html")



@app.route("/rota")
def hello2():
    return '''
    <style>
        body {
            display: flex;align-items: center;justify-content: center;
        }
        #tela {
            margin-top: 10%;width: 600px;font-family: Arial,Calibri,Helvetica;display: flex;flex-direction: column;flex-wrap: wrap;justify-content: center;align-items: center;background-color: rgb(196, 196, 196);border-radius: 15px;
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
