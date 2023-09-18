# palindrome
word = str(input('Enter the word : '))

# reversing the word
temp = word

left = 0
right = len(word)-1

while(left < right):
    if word[left] == word[right]:
        pass
    else:
        print(f'{word} is not a palindrome')
        break
    
    left += 1
    right -= 1

else:
    print(f'{word} is a palindrome')
       