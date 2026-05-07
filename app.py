from flask import Flask, request, jsonify, render_template
import json

app = Flask(__name__)

# Load products
with open("products.json") as f:
    products = json.load(f)

# Home page
@app.route("/")
def home():
    return render_template("index.html")

# Chat API
@app.route("/chat", methods=["POST"])
def chat():

    user_input = request.json["message"].lower()

    results = []

    budget = None

    # Extract budget number
    words = user_input.split()

    for word in words:

        if word.isdigit():

            budget = int(word)

    # -------------------------
    # PHONE SEARCH
    # -------------------------

    if (
        "phone" in user_input or
        "mobile" in user_input or
        "smartphone" in user_input
    ):

        for p in products:

            if p["category"] == "phone":

                # Cheap / under budget
                if (
                    "under" in user_input or
                    "below" in user_input or
                    "cheap" in user_input
                ):

                    if budget:

                        if p["price"] <= budget:

                            results.append(p)

                # Expensive / above budget
                elif (
                    "above" in user_input or
                    "expensive" in user_input
                ):

                    if budget:

                        if p["price"] >= budget:

                            results.append(p)

                # Show all phones
                else:

                    results.append(p)

    # -------------------------
    # SHOES SEARCH
    # -------------------------

    elif (
        "shoes" in user_input or
        "sneakers" in user_input or
        "nike" in user_input or
        "adidas" in user_input
    ):

        for p in products:

            if p["category"] == "shoes":

                # Nike filter
                if "nike" in user_input:

                    if "nike" in p["name"].lower():

                        results.append(p)

                # Adidas filter
                elif "adidas" in user_input:

                    if "adidas" in p["name"].lower():

                        results.append(p)

                # Cheap shoes
                elif (
                    "under" in user_input or
                    "below" in user_input or
                    "cheap" in user_input
                ):

                    if budget:

                        if p["price"] <= budget:

                            results.append(p)

                # Expensive shoes
                elif (
                    "above" in user_input or
                    "expensive" in user_input
                ):

                    if budget:

                        if p["price"] >= budget:

                            results.append(p)

                # Show all shoes
                else:

                    results.append(p)

    # -------------------------
    # SHOW ALL PRODUCTS
    # -------------------------

    elif (
        "all" in user_input or
        "everything" in user_input or
        "show products" in user_input
    ):

        results = products

    # -------------------------
    # INVALID INPUT
    # -------------------------

    else:

        return jsonify({
            "reply": "Please ask about phones or shoes.",
            "products": []
        })

    # -------------------------
    # NO RESULTS
    # -------------------------

    if len(results) == 0:

        return jsonify({
            "reply": "No matching products found.",
            "products": []
        })

    # -------------------------
    # SUCCESS
    # -------------------------

    return jsonify({
        "reply": "Here are some products for you:",
        "products": results
    })

# Run app
if __name__ == "__main__":
    app.run(debug=True)