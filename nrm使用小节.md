全局安装nrm可以快速修改,切换,增加npm镜像地址。

$ npm install -g nrm # 安装nrm
$ nrm add XXXXX http://XXXXXX:4873 # 添加本地的npm镜像地址
$ nrm use XXXX # 使用本址的镜像地址
nrm的其他命令：
$ nrm --help  # 查看nrm命令帮助
$ nrm list # 列出可用的 npm 镜像地址
$ nrm use taobao # 使用`淘宝npm`镜像地址
安装包
安装完成.之后你通过npm install 安装的包,sinopia都会帮你缓存到本地了.试一下吧。

mkdir test && cd test
npm install lodash # sinopia发现本地没有 lodash包,就会从 taobao镜像下载
rm -rf node-modules # 删除目录
npm insatll lodash # 第二次安装就会从缓存下载了,速度很快
创建用户与发布包
创建新用户

1.确保自己已经切换到配置的代理

  nrm ls  

  npm ---- https://registry.npmjs.org/  
  cnpm --- http://r.cnpmjs.org/  
  taobao - http://registry.npm.taobao.org/  
  nj ----- https://registry.nodejitsu.com/  
  rednpm - http://registry.mirror.cqupt.edu.cn  
  npmMirror  https://skimdb.npmjs.com/registry  
* mtinpm  http://10.168.4.143:4873/
2.运行npm adduser,填写信息，注册账号。如果已经有账号，直接运行npm login即可。

  npm adduser --registry http://10.168.4.143:4873/  
  Username: test  
  Password:
3.运行$ npm publish发布新包。