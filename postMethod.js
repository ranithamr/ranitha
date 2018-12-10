// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const Http = new XMLHttpRequest();
//
// const url='https://jsonplaceholder.typicode.com/posts';
// var obj = { title: 'foo', body: 'bar', userId: 1};
// var myJSON = JSON.stringify(obj);
//
//
//
//
// Http.open('POST', url, true);
// Http.setRequestHeader('Content-type', "application/json; charset=UTF-8");
// Http.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 201){
//         console.log(Http.responseText);
//     }
// }
// Http.send(myJSON);





// var https = require('https');
// https.post = require('https-post');
//
// https.post(' https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function(res){
//     res.on('data', data => {
//         console.log(res.statusCode);
//         function verifystatuscode() {
//             return res.statusCode === 201;
//         }
//         console.log(verifystatuscode());
//         var info = JSON.parse(data);
//         data = JSON.stringify(info);
//         console.log(data);
//         function verifyuserid() {
//             return info.userId === '1';
//         }
//         console.log(verifyuserid());
//     })
//
// });

const request = require('request')

request.post('https://jsonplaceholder.typicode.com/posts', {
    json: {
            title: 'foo',
            body: 'bar',
            userId: 1
          }
}, (error, res, body) => {
    if (error) {
        console.error(error)
        return
    }
    console.log(res.statusCode===201);
   console.log(validateId(res));
    console.log(body)
})

function validateId(res){
    return (JSON.stringify(res).id===101);

}