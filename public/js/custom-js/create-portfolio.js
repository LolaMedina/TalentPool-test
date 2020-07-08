

const portfolioForm = document.getElementById('modalRegisterForm');
var userStory = JSON.parse(localStorage.getItem("user"));

// const userInfo = JSON.parse(atob(userInformation.token.split('.')[1]));

portfolioForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value
    const description =document.getElementById('description').value
    const link = document.getElementById('link').value

    axios.post(`https://api.lancers.app/v1/employee/portfolio/${userStory.userId}`,{
        title: title,
        description: description,
        link: link,
        'Content-Type': `application/json; charset=UTF-8`,
        headers:{
            Authorization: `Bearer ${userInformation.token}`
        }
      })
      .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
})


















// document.getElementById('modalRegisterForm').addEventListener('submit', performPostRequest);

// function performPostRequest(e){
//     const title = document.getElementById('title').value
//     const description =document.getElementById('description').value
//     const link = document.getElementById('link').value
//     const headers = {
//         'Content-Type': 'application/json',
//   'Authorization':"token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1sb2xhLm9zZW5pQGdtYWlsLmNvbSIsInVzZXJJZCI6IjQ3NzZlYjA4LTk2N2ItNGQ3MC1hNjMyLTVhZTZjOGNmYzczZSIsInVzZXJSb2xlIjoiUk9MLUVNUExPWUVFIiwidXNlclR5cGVJZCI6bnVsbCwiaWF0IjoxNTk0MjAxNjAxLCJleHAiOjE1OTQyODgwMDF9.ory9PsI9YKJU2rMoGWXymz25oOfkFlKVCTJCfxiOR6I"
//     };

//     axios.post('https://api.lancers.app/v1/employee/portfolio', {
//         employee_id: '1',
//         title: title,
//         description: description,
//         link: link,
//         headers: headers
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
      
//       e.preventDefault();

//       console.log('clicked')

// }