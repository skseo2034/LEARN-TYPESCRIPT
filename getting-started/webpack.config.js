var path = require('path');

module.exports = {
	mode: 'development', // 'production', //'none',
	//entry: './src/main/webapp/ts/index.ts', // webpack build 대상 파일
	entry: './src/main/webapp/js/index.js', // webpack build 대상 파일
	output: { // build 결과물 정의
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	module: { // entry -> output 으로 변환 할때 중간에 개입하는 것이 module 임.
		rules: [{
			test: /\.?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader', //로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성입니다.
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}],
		rules: [{
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      	}],
	},
	stats: {
			colors: true
	},
	devtool: 'source-map',
	resolve: {
    // 확장자를 배열로 넣어둠
    extensions: [
      '.ts', '.js',
    ],
  },
};
