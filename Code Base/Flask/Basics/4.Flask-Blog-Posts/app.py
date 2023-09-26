from flask import Flask, redirect, render_template, url_for, request

app = Flask(__name__)


# blog posts
posts = []


@app.route('/')
def home():
    return render_template('home.html', posts=posts)



@app.route('/create-post', methods=['GET', 'POST'])
def create_post():
    if request.method == 'POST':
        # user has filled the form
        title = request.form.get('title')
        content = request.form.get('content')
        
        if title and content:
            posts.append({"title": title, "content": content})
            
            #redirecting the user to the home page
            return redirect(url_for('home'))
    
    
    return render_template('create-post.html')



if __name__ == "__main__":
    app.run(debug=True)