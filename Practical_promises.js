function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject (new Error("Url does not start with http"));
        }
        else {
            setTimeout(function(){// fake 3 sec download task
                let filename = url.split("/").pop();
                resolve(filename);
            },3000)
        }
    })
}

function resize(filename){
    return new Promise(function(resolve,reject){
        if(!filename.endsWith(".png")){
            reject (new Error("file is not png"));
        }
        else{
            setTimeout(function(){
                let resizedfile = filename.split(".")[0] + "-resized." + filename.split(".")[1];
                resolve(resizedfile);
            },3000)
        }
    })
}
function upload(resizedfileName){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let uploadedfile = "http://imgur.com/" + resizedfileName;
            resolve(uploadedfile);
        },2000)
    })
}
// download("http://cb.lk/logo.jpg")
//     .then(function(filename){
//         resize(filename).then(function(resizedfile){
//             console.log("resizedfile is at: " + resizedfile);
//         })
//             .catch(function(err){
//                 console.log(err);
//             })
//     })

download("http://cb.lk/logo.png")// 2nd method
   .then(resize)
    .then(upload)
    .then(function(uploadedfile){
        console.log("File was uploaded to: " + uploadedfile);
    })

    .catch(function(err){
                console.log(err);
            })