## Clerk Help Center (gulp-scss)

---

### Prerequisites

1.  Node.js(v16) + npm(v8)  
    \- Install NodeJS:  [https://nodejs.org/en/download](https://nodejs.org/en/download)  
    \- Install NVM: Refer to this [link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).  
    \- Check out the current Node version:   `node --version`  
    \- Switch Node version: `nvm use 16`
2.  Gulp installed globally: `npm install gulp --global`
3.  Install a webserver (one time): `npm i -g superstatic`
4.  Install the [Requestly chrome extension](https://chrome.google.com/webstore/detail/requestly-open-source-htt/mdnleldcmiljblolnjhpnblkcekpdkpa) and [Allow CORS extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)  
    \- Go to: [https://app.requestly.io/rules/editor/create/Replace](https://app.requestly.io/rules/editor/create/Replace)  
    \- Set `Replace` to `https://s3-us-west-1.amazonaws.com/assets.support.clerky.com`  
    \- Set `With` to `http://localhost:3474/`, Save this rule.  
    \- Click on Allow CORS extension and turn on the extension by clicking on the left panel where you see character C.  
     

### Development

#### 1\. Clone repo

```plaintext
git clone https://github.com/clerky/help-center-front-end.git
```

#### 2\. Go inside the cloned repo

```plaintext
cd help-center-front-end
```

#### 3\. Install all dependencies (make sure nodejs with npm is installed on your machine)

```plaintext
npm install
```

#### 4\. Run default gulp task

```plaintext
gulp watch
```

This command watches your changes and builds minified CSS and JS files to `assets/stylesheets/application.css` & `assets/javascripts/application.js`. 

#### 5\. Open a new terminal and run the server from the root folder.

```plaintext
superstatic .
```

A successful run shows this message: `Superstatic started. Visit http://localhost:3474 to view your app.`  
You can check if the server is serving asset files correctly by visiting these URLs.  
[http://localhost:3474/assets/javascripts/application.js](http://localhost:3474/assets/javascripts/application.js)  
[http://localhost:3474/assets/stylesheets/application.css](http://localhost:3474/assets/stylesheets/application.css)

#### 6\. Going to [https://help.clerkey.com](https://help.clerkey.com) should show updates in real time.  If you don't see any updates, please clean the browser cache.