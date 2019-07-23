const index = () => {
    return '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>Index</h1><div><a target="_Blank" href="/ygfl.png">员工福利</a></div>'
}

const about = () => {
  return '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>About</h1>'
}

const world = () => {
  return '<div><a href="/">Index</a>&nbsp;&nbsp;&nbsp;<a href="/about">About</a>&nbsp;&nbsp;&nbsp;<a href="/world">World</a></div><h1>World</h1><script>var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象\n' +
      'httpRequest.open(\'POST\', \'postdata\', true); //第二步：打开连接\n' +
      'httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）\n' +
      'httpRequest.send(\'name=teswe&ee=ef\');//发送请求 将情头体写在send中\n' +
      '/**\n' +
      ' * 获取数据后的处理程序\n' +
      ' */\n' +
      'httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中\n' +
      '    if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功\n' +
      '        var json = httpRequest.responseText;//获取到服务端返回的数据\n' +
      '        console.log(json);\n' +
      '    }\n' +
      '};</script>'
}

module.exports = {
  index,
  about,
  world
}