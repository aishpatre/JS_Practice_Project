document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getApiData);

function getText(){
    fetch('test.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
   .catch(err => console.log(err));
}

// get data from Json

function getJson(){
    fetch('posts.json')
    .then(res =>res.json())
    .then(data=>{ 
            console.log(data);
            let output = '';
            data.forEach(function(post){
                output += `<li>${post.title}</li>`;
            });
        document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
    }
    
// Get External data
function getApiData (){
    fetch('https://api.github.com/users?since=XXX')
    .then(function(res){
       return res.json();
    })
    .then(function(data){
        console.log(data);
        
        let output = '';
        data.forEach(function(users){
            output += `<li>${users.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}