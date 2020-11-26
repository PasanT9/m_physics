export const login = student => {
    const data = {
       student_id: student.student_id,
       password: password,
    };
 
    return fetch(global.config.backend + '/api/login/', {
       method: 'POST',
       headers: {},
       body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(response => {
       return response;
    })
    .catch(err => {
       console.log(err)
    })
 }