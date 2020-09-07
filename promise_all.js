function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject (new Error("Url does not start with http"));
        }
        else {
            console.log("Start download: " + url);
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
            console.log("start resize: " + filename);
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
Promise.all([
    download("http://cb.lk/logo.png"),
    download("http://cb.lk/banner.png"),
    download("http://cb.lk/promo.png")
]).then(function(downloadvalues){
    return Promise.all(downloadvalues.map(resize));
}).then(function(resizevalues){
    return Promise.all(resizevalues.map(upload));
}).then(function(uploadvalues){
    console.log(uploadvalues);
})
    .catch(function(err){
    console.log(err);
})