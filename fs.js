const fs = require('fs');

// readFile(文件名，回调函数)
fs.readFile('aaa.txt', function(err, data){
    if(err) {
        console.log('读取失败')
    } else {
        console.log(data.toString())
    }
});
/**
 *  写入文件 writeFile(文件名，内容，回调函数)
 */
fs.writeFile('bbb.txt', '11岁阿斯哦dsa啊sadsuai', function(err,data){
    if(err) {
        console.log(err)
    }else {
        console.log('文件写入成功！')
    }
})