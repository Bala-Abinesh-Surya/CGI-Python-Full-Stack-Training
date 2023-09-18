function appendNames(){
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;

    document.getElementById('result').innerHTML = firstName + ' ' + lastName;
}