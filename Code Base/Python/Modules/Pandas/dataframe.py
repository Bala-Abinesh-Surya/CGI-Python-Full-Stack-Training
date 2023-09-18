import pandas as pd

# data
data = {
    'Name': ['Bala Abinesh Surya', 'Ajin', 'Jeya Hari Prasath'],
    'Age': [21, 72, 40],
    'City': ['Avaraikulam', 'Coimbatore', 'Madurai']
}

# converting the dictionary to dataframe
df = pd.DataFrame(data)

# selecting only the single column
#print(df['Name'])

# printing only the subset from the dataframe
#print(df[['Name', 'Age']])


# grouping together
group = df.groupby('Name')['Age'].mean()
#print(group)

# sorting the dataframe
#print('\n\n\n\nSorting')
#print(df.sort_values('Age', ascending=False))

# adding a new column
#df['Gender'] = ['Male', 'Male', 'Male']
#print('\n\n\n\n\nAfter adding gender column\n', df)

# dropping a column
#df.drop(columns=['Gender'], inplace=True)
#print('\n\n\n\n\nAfter dropping gender column\n', df)

# applying a method on the dataframe
def classify_age(age):
    if age < 20:
        return 'Kid'
    elif 20 < age < 50:
        return 'Man'
    else:
        return 'Senior Citizen'
    
df['Age Category'] = df['Age'].apply(classify_age)
print(df)