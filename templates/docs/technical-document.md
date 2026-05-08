# Technical Document – AI Shopping Assistant

# Project Architecture

The project is built using frontend web technologies.

Technologies used:
- HTML
- CSS
- JavaScript

---

# Folder Structure

ai-shopping-assistant/

- index.html
- style.css
- script.js
- README.md
- docs/
  - product-document.md
  - technical-document.md

---

# Frontend

## HTML

HTML is used to create:
- chat interface
- input field
- send button
- chatbot container

---

## CSS

CSS is used for:
- layout
- colors
- chat styling
- responsive design

---

## JavaScript

JavaScript handles:
- user input
- chatbot responses
- product filtering
- dynamic UI updates

---

# Product Data

Products are stored in an array inside `script.js`.

Each product contains:
- name
- category
- price

Example:

{
  name: "ASUS TUF Gaming",
  category: "laptop",
  price: 65000
}

---

# Recommendation Logic

The system checks whether the user message contains a product category.

Example:
If user types:
"I want a laptop"

The system searches products where:
category = laptop

Matching products are recommended.

---

# Chat Flow

1. User enters message
2. JavaScript reads input
3. Input converted to lowercase
4. Products filtered
5. Recommendations displayed in chatbox

---

# AI Simulation

The project simulates AI behavior using:
- keyword matching
- conversational responses
- product recommendation logic

---

# Failure Handling

## Empty Input

If user enters nothing:
- system ignores message

---

## No Product Found

If no matching category exists:
- chatbot displays fallback message

Example:
"Sorry, no products found."

---

# Advantages

- Lightweight
- Easy to run
- No backend required
- Beginner friendly
- Fast performance

---

# Limitations

- No real AI model
- No database
- No live product APIs
- Limited natural language understanding

---

# Future Enhancements

- OpenAI integration
- Database support
- Real-time product APIs
- User authentication
- Voice search
- Advanced filtering

---

# Conclusion

The AI Shopping Assistant demonstrates how conversational product recommendation systems can be implemented using basic frontend technologies.