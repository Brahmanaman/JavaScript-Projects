const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "UTF-8");

const replaceVal = (tempval, orgVal)=>{
    let temperature = tempval.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main)
    return temperature;
   
};

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=ac1d81c69ad6bb0d866caa9e47741156")
            .on('data', (chunk) => {
                const objdata=JSON.parse(chunk); //convertinf json data into js object
                const arrData = [objdata];
                // console.log(arrData);
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realTimeData);
                // console.log(realTimeData);
                
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
               
            });
    } else{
        res.end("File not found");
    }
});

server.listen(3000, "127.0.0.1", ()=>{
    console.log(`server running at http://127.0.0.1:3000`);
});