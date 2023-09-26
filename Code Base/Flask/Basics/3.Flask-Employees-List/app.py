from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

employees = []

@app.route('/')
def index():
    return render_template('index.html', employees=employees)


@app.route('/add-employee', methods=['POST'])
def add_employee():
    if request.method == 'POST':
        employee = request.form.get('employee')
        
        if employee:
            employees.append(employee)
            
    return redirect(url_for('index'))


if __name__ == "__main__":
    app.run(debug=True)