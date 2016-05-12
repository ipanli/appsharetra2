/**
 * AppShare Transformation
 * By Julian
 * 2016年04月29日10:34:24
 */

;
function AppShare(urls) {
    var url = window.location.href;
    if(urls){
       url =  urls;
    }
    
    var infos = {
        'https://segmentfault.com':'https://segmentfault.com?/a.html',
        'https://baidu.com':'https://fanyi.baidu.com',
        'http://www.panli.com':'http://panli.mu.gg/'
    }
    
    var obj = {
        url:infos[url] ? infos[url]:url,
        title:"哈哈我是测试😄",
        img:"https://testerhome.com/photo/2015/f4a07b35098dc28fa3e4269c8af2fc7b.png"
    }
    
    
   return obj;

    
}
