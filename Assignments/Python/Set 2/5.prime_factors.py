def prime_factors(n):
    factors = []
    divisor = 2

    while divisor <= n:
        if n % divisor == 0:
            if divisor not in factors:
                factors.append(divisor)
            n = n // divisor
        
        else:
            divisor += 1

    return factors

# Input a number
num = int(input("Enter a number: "))

if num < 2:
    print("Prime factors are not defined for numbers less than 2.")
else:
    factors = prime_factors(num)
    print(f"Prime factors of {num} are: {factors}")
