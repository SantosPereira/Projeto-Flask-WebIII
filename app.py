from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('inicio.html')

def pegaImagem():
    # request.
    pass
    