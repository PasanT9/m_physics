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

 export const listMedia = (jwt) => {


   var bearer = 'Bearer ' + jwt;
 
   return fetch('http://192.168.1.101:8081/media/list/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        'Authorization': bearer,
        'Access-Control-Allow-Origin': '*'
      }
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