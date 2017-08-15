/**
 * Created by zhulizhe on 2017/8/14.
 */
var express = require('express');
var app = express();

const fs = require("fs")
const formidable = require('formidable')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', require('connect-history-api-fallback')()); // Add
app.use('/', express.static('public'));


// 图片上传
app.post("/upload",function(req,res){
    // 跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");

    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8'; // 编码
    form.keepExtensions = true; // 保留扩展名
    form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
    form.uploadDir = __dirname + '/public/images'  // 存储路径
    form.parse(req,function(err,fileds,files){ // 解析 formData数据
        if(err){ return console.log(JSON.parse(files)) }
        let imgPath = files.logo.path // 获取文件路径
        let imgName = "./upload." + files.logo.type.split("/")[1] // 修改之后的名字
        let data = fs.readFileSync(imgPath) // 同步读取文件

        fs.writeFile(imgName,data,function(err){ // 存储文件
            if(err){ return console.log(err) }
            // fs.unlink(imgPath,function(){}) // 删除文件
            res.json({code:1,name:files,data:data})
        })
    })
})


var server = app.listen(2000, function() {
    var port = server.address().port;
    console.log('Open http://localhost:%s', port);
});