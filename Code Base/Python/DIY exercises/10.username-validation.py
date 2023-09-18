# username validation using regex
import regex as re

username = str(input('Enter your username : '))

user_regex = r'[A-Za-z][A-Za-z_0-9]{5,10}'

pat = re.compile(user_regex)

if(re.fullmatch(pat, username)):
    print('Valid username')
else:
    print('Invalid username')