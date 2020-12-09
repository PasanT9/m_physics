export const login = student => {

    const data = {
       student_id: student.student_id,
       password: student.password,
    };

    console.log(data);
  
    return fetch('http://localhost:8081/user/login/', {
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
      else{
         console.log("error");
      }
   })
    .catch(err => {
       console.log(err)
    })
 }

 export const listMedia = student_id => {

   const data = {
      student_id: student_id,
   };

   console.log(data);
 
   return fetch('http://localhost:8081/media/list/', {
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
      else{
         console.log("error");
      }
   })
   .catch(err => {
      console.log(err)
   })
}