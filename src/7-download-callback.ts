const downloadFiles = (message : string , url : string) => {
  console.log(message + url)
  
  setTimeout(() => {
    console.log("Files downloaded!")
  }, 2000);
}


const message = "Downloading files from : "


const url = "Website.com";


downloadFiles(message , url);