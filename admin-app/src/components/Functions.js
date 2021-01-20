export const login = student => {

    const data = {
       student_id: student.student_id,
       password: student.password,
    };

    console.log(data);
  
    return fetch('http://192.168.1.101:8081/user/login/', {
       method: 'POST',
       headers: {
         "Content-type": "application/json",
         'Access-Control-Allow-Origin': '*'
       },
       body: JSON.stringify(data)
    })
    .then(response => {
      if(response.status == 200) {
         return response.json();
      }
   })
    .catch(err => {
       console.log(err)
    })
 }