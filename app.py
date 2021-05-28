from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('inicio.html')


@app.route("/moedas/bitcoin")
def bitcoin():
    return render_template('/frame_moedas/bitcoin.html')

# @app.route("/moedas/etherium")
# def bitcoin():
#     return render_template('/frame_moedas/etherium.html')

# @app.route("/moedas/xrp")
# def bitcoin():
#     return render_template('/frame_moedas/xrp.html')

# @app.route("/moedas/litecoin")
# def bitcoin():
#     return render_template('/frame_moedas/litecoin.html')

# @app.route("/moedas/eos")
# def bitcoin():
#     return render_template('/frame_moedas/eos.html')

# @app.route("/moedas/cardano")
# def bitcoin():
#     return render_template('/frame_moedas/cardano.html')

# @app.route("/moedas/binancecoin")
# def bitcoin():
#     return render_template('/frame_moedas/binancecoin.html')

# @app.route("/moedas/stellarlumens")
# def bitcoin():
#     return render_template('/frame_moedas/stellarlumens.html')

# @app.route("/moedas/chainlink")
# def bitcoin():
#     return render_template('/frame_moedas/chainlink.html')

# @app.route("/moedas/neo")
# def bitcoin():
#     return render_template('/frame_moedas/neo.html')

# @app.route("/moedas/reau")
# def bitcoin():
#     return render_template('/frame_moedas/reau.html')
