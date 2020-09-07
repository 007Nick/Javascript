function downloadFile(url, downloaded){
    // we are downloading  the file here
    // let's assume it takes 3 seconds to downlaod
    // we use setTimout to generate fake delay
    console.log("Downlaoding file: " + url);
    setTimeout(function(){
        let filepath = "C:\\Downloads\\" + url.split("/").pop()
        console.log("file was downloaded to: " + filepath)
        downloaded(filepath)
    },3000)
}

function resizefile(filepath,resized){
    // we are resizing the file, it takes 2 sec
    // we again use a fake setTimout delay
    console.log("we are resizing: " + filepath)
    setTimeout(function(){
        let newPath = filepath.split(".")[0] + "-resized." + filepath.split(".")[1];
        resized(newPath);
    },2000)
}
function  uploadfile(diskpath,uploaded){
    //we ae uploading the file, it takes 3 sec
    // we again use a fake setTimout delay
    console.log("we are uploading the file" + diskpath);
    setTimeout(function(){
        let uploadedpath = "http://cb.lk/uploads/" + diskpath.split("\\").pop();
        console.log("we uplaoded to "  + uploadedpath);
        uploaded(uploadedpath);
    },3000)

}
downloadFile("http://google.com/logo.png", function(downloadedPath){
    resizefile(downloadedPath,function(path){
        console.log("resized file at: " + path)
        uploadfile(path,function(uploadedurl){
            console.log("uploaded successfully to: " + uploadedurl)
        })
    })
})

