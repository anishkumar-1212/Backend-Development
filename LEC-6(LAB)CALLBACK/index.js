function download(url, cb) {
  let urlarr = url.split(":"); //https://www.movies-mafia.com/movies/dhurandhar.mp4
  let https = urlarr[0];

  //for error handling

  if (https != https) {
    return console.log("This url is not secure", null); //error first
  }

  setTimeout(() => {
    console.log("download started");
    let moviesplit = url.split("/");
    let movieFile = moviesplit[moviesplit.length - 1];
    cb(null, movieFile);
  }, 2000);
}

function compress(file, cb) {
  //dhurandhar.mp4---> dhurandhar.zip
  let arr = ["mp2", "mp3", "mp4"];
  arr.forEach((element) => {
    if (element == "mp2" || "mp3" || "mp4") {
      console.log(cb + ".zip");
    }
  });
}

function upload(file, cb) {

}

download("https://www.movies-mafia.com/movies/dhurandhar.mp4", function (err,data) {
  if(err){
    return console.log(err);
  }else{
    
  }
});
