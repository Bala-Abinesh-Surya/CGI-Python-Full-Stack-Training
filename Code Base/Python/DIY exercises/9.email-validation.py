import regex as re

email = str(input('Enter your email address : '))

email_regex = r'[A-Za-z0-9]+@[A-za-z]+'

pattern = re.compile(email_regex)

if(re.fullmatch(pattern, email)):
    print('Valid email address')
    
else:
    print('Invalid email address')