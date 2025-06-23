// Add your code here
function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      // Append the new ID to the DOM
      document.body.innerHTML += object.id;
    })
    .catch(function(error) {
      // Append the error message to the DOM
      document.body.innerHTML += error.message;
    });
}