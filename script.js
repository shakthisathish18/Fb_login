// Simulated login functionality (Replace with actual authentication logic)

document.getElementById('login-button').addEventListener('click', function() {
    const usermobno = document.getElementById('usermobno').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the server with login credentials

    // const errorMessage = document.getElementById('error-message');

    // usermobno.addEventListener('input', () => {
    //     const usermobnoNumber = usermobno.value.trim();

    //     if (!/^[0-9]*$/.test(usermobno)) {
    //         usermobno.classList.add('error');
    //         errorMessage.textContent = 'Mobile Number Does not contains Alphabets ';
    //     } else if (usermobno.length !== 10) {
    //         usermobno.classList.add('error');
    //         errorMessage.textContent = 'usermobno number must be exactly 10 digits long.';
    //     } else {
    //         usermobno.classList.remove('error');
    //         errorMessage.textContent = '';
    //     }
    // });


    fetch('http://13.53.125.215:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usermobno, password }),
    })
    .then(response => response.json())
    .then(data => {

        if (data.sucess === true) {
            alert('Login successful!');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login.');
    });
});
