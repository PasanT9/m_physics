export const login = student => {
    const data = {
       student_id: student.student_id,
       password: student.password,
    };

    console.log(data);
  
    return fetch('http://192.168.8.101:8081/user/login/', {
       method: 'POST',
       headers: {
         "Content-type": "application/json"
       },
       body: JSON.stringify(data)
    })
    .then(response => {
       return response;
    })
    .catch(err => {
       console.log(err)
    })
 }