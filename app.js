var fs = require('fs');

challenge 1

fs.readfile("./challenge1/info.txt", "utf8", (data, err) => {
  if(err) {
    console.log(err)
  }else{
    console.log(data);
  }
})

challenge 2
let names = ["Nick", "Marcus", "Dennis", "Greg"];

fs.appendFile("./challenge2/info.txt", names, (data, err) => {
  if(err){
    console.log(err)
  }else {
    console.log(data)
  }
})

challenge 3

fs.renameSync("./challenge3/binfo.txt", './challenge3/info.txt');

challenge 4

fs.mkdir('./challenge4/copyfolder', (data,err) =>{
  if(err){
    console.log(err)
  }else {
    fs.copyFile('./challenge4/info.txt', './challenge4/copyfolder/info.txt')
    (data, err) => {
      if(err){
        console.log(err)
      }else{
        console.log(data)
      }
    }
  }
});

challenge 5

let data = fs.readFileSync('./challenge5/info.txt', 'utf8');
console.log(data)
let newData = '';
for(let i = 0; i < data.length; i++){
  if(data[i] === '-') {
    newData += ' ';
  }else{
    newData += data[i];
  }
}

fs.writeFileSync("./challenges5/info.txt", newData);

challenge 6
let files;
fs.readdir('./challenge6/', (err,data) => {
  if(err){
    console.log(err);
  }else{
    files = data;
    let txtFiles = [];
    for(let i = 0; i < files.length; i++){
      if(files[i].endsWith('.txt',)){
        txtFiles.push(files[i])
      }
    }
    console.log(txtFiles);
  }
})
