var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Http = new XMLHttpRequest();

const url='https://jsonplaceholder.typicode.com/posts/1';

Http.open("GET", url);
Http.send();
Http.onreadystatechange=function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(Http.responseText);
        console.log(response());
    }

}
function response(){
    var responseData = JSON.parse(Http.responseText);
    return responseData.userId === 1;
}

