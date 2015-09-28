# 台灣正名器

## 來源
台灣正名器的目的，是提供海外台人一個通報的平台，來改善這個狀況，集結群眾的力量為台灣正名，我們收到通報之後，經過查證屬實，將以北美FAPA(Formosa Association for Public Affairs)名義向該機關提出正名要求，並追蹤該機構是否回應我方訴求．這些年北美FAPA致力於正名活動，已向許多官方及民間機構提出訴求並成功正名，其中包含：移民署，FDA，Apple…等等

##如何通報？

Step 1: 發現需要改正的機構網站，事由填入『報案區』的表格


Step 2: 將台灣誤植為中國，或是找不到台灣為國籍的的選單畫面，擷取上傳到『報案區』


Step 3: 提供該網站或該機構官方網站，並且提供該網站機關聯絡人


Step 4: 附上您的姓名及email，方便我們與您聯繫


Step 5: 按下Submit鍵，您會收到一封認證email，請讀取後按確認，我們認證後會向該機關提出正名訴求


Step 6: 通報步驟完成後，『已知案件』區會看到您上傳的案件，認證後狀態會從『等待認證中』轉為『已寄出』



## Instructions to Contribute

Base boiler plate thanks to [choonkending's React-Webpack-Node](https://github.com/choonkending/react-webpack-node)

1. `npm install`
2. `npm run dev` to run locally

There are 3 different "modes" you can develop in:
1. Development -  without react-hot-loader
2. Development - with react-hot-loader
3. Production

### Development build (without Hot loader)

1. `npm run watch` watches and recompiles on file changes
2. `npm run dev` will run the server locally without a proxy. The difference between `dev` and `npm start` is that `npm start` requires you to access your site over HTTPS, otherwise session cookies will not be set. 

### Development build with Hot Loader

We use [react-hot-loader](https://github.com/gaearon/react-hot-loader), which is about the greatest thing that has ever happened. No browser refreshes needed.

1. `npm run devHotLoader` to build with webpack and start the server. We use webpack-dev-server as a proxy server to serve assets. Changes made are not saved to disk, as that is not what webpack-dev-server is for. However, `npm run watchHotLoader` IF you want to reload the page and see the change in the server-rendered React.

### Production build

Run the commands below for a production build, i.e. what is deployed to Heroku. If you are deploying to Heroku or similar, we assume that you serving the pages over HTTPS.

1. `npm run build && npm start`

#### Bundling with webpack

1. `npm run build` runs `webpack` will run configurations within webpack.config.js.
2. `npm run watch` runs `webpack --watch` to watch and recompile for changes.

##### Where do you compile your scss?
We use [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) to extract compiled css in our [webpack config file](https://github.com/choonkending/react-webpack-node/blob/master/webpack.config.js)

#### What loaders do you use for ES6/ ES2015?
[babel-loader](https://github.com/babel/babel-loader). Seriously, try it!

### Setting up your Database

Install MongoDB:

1. `brew update`
2. `brew install mongodb`
3. `mongod` (Make sure you have the permissions to the directory /data/db)

Put in your own Mandrill Key!
