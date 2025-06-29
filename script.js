body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1, h2 {
    color: #2874f0;
    text-align: center;
}

.form-container {
    margin-bottom: 30px;
}

fieldset {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
}

legend {
    font-weight: bold;
    padding: 0 10px;
}

.blue-fieldset {
    border-color: #1a73e8;
    background-color: #e8f0fe;
}

.blue-fieldset legend {
    color: #1a73e8;
}

.purple-fieldset {
    border-color: #8e24aa;
    background-color: #f3e5f5;
}

.purple-fieldset legend {
    color: #8e24aa;
}

.yellow-fieldset {
    border-color: #ffb300;
    background-color: #fff8e1;
}

.yellow-fieldset legend {
    color: #ffb300;
}

.green-fieldset {
    border-color: #43a047;
    background-color: #e8f5e9;
}

.green-fieldset legend {
    color: #43a047;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="url"],
select,
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

textarea {
    height: 100px;
    resize: vertical;
}

small {
    font-size: 0.8em;
    color: #666;
}

.form-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

button[type="reset"] {
    background-color: #f44336;
    color: white;
}

#addProductBtn {
    background-color: #4caf50;
    color: white;
}

#reviewProductsBtn {
    background-color: #2196f3;
    color: white;
}

.products-list {
    margin-top: 30px;
}

.products-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    background-color: white;
    position: relative;
}

.product-card h3 {
    margin-top: 0;
    color: #2874f0;
}

.product-card p {
    margin: 5px 0;
}

.delete-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 12px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .form-actions {
        flex-direction: column;
        gap: 10px;
    }
    
    .products-container {
        grid-template-columns: 1fr;
    }
}
