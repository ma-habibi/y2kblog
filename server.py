from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', animation="sin")

@app.route("/projects")
def projects():
    animation = "sin"
    return render_template('projects.html', animation="matrix")

@app.route("/snake")
def snake():
    return render_template('snake.html', animation="matrix")

@app.route("/universe")
def universe():
    return render_template('universe.html', animation="halloween")

@app.route("/spiral")
def spiral():
    return render_template("spiral.html", animation="spiral")

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)
