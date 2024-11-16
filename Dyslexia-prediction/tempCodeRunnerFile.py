@app.route("/")
def home():
    return render_template("home.html")

@app.route("/home.html")
def a():
    return render_template("home.html")