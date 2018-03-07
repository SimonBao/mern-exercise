#Issues
* Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema
	* [FIX] ``` npm uninstall webpack --save-dev ```
	* [FIX] ``` npm install webpack@2.1.0-beta.22 --save-dev ```
* Error: fileSystem.statSync is not a function in 7.1.4
	*[FIX] ``` "babel-loader": "7.1.4" ```
	*[FIX] ``` "babel-loader": "7.1.1" ```
* Webpack doesn't re-pack after code changes
	*[FIX] ```  "start": "nodemon --exec babel-node server.js" ```
	*[FIX] ```  "start": "nodemon --exec babel-node server.js webpack.config.js" ```
