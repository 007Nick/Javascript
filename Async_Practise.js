function downloadFile(url,downloaded){
    console.log("Downloading file: " + url);
    setTimeout(function(){
        let filepath = "C:\\Downloads\\" + url.split("/").pop();
        console.log("File was downloaded to:" + filepath);
        downloaded(filepath);
    },2000)
}
function resizeFile(downloadedpath,resized){
    console.log("we are resizing: " + downloadedpath);
    setTimeout(function(){
        let newpath = downloadedpath.split(".")[0] + "-resized." + downloadedpath.split(".")[1];
        resized(newpath);
    },2000)
}
function uploadFile(newpath,uploaded){
    console.log("we are uploading the file: " +newpath);
    setTimeout(function(){
        uploadedpath = "http://cb.lk/uploads/" + newpath.split("\\").pop();
        console.log("we uploaded to : " + uploadedpath);
        uploaded(uploadedpath);
    },2000)
}


downloadFile("http://google.com/logo.png",function(downloadedpath){
    resizeFile(downloadedpath,function(newpath){
        console.log("resized file at: " + newpath);
        uploadFile(newpath,function(uploadedurl){
            console.log("uploaded successfully to: " + uploadedurl);
        })
    })
})