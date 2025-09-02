type DownloadFilesFunction = (message : string , url : string) => void;

const message  = "Downloading files from : "
const url = "Website.com";

const waitingForFileDownload : DownloadFilesFunction = (message, url) => {
  setTimeout(() => {
    console.log("Files downloaded!")
  }, 2000);
}

const downloadFiles : DownloadFilesFunction = (message, url)=> {
  console.log(message + url)
  waitingForFileDownload(message , url);
}

downloadFiles(message , url);