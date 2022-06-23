## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다


...
## 자바스크립트 프로젝트에 타입스크립트 적용하기
- 참조 링크
	-  [모듈화 진행을 위한 타입스크립트 구성](https://github.com/joshua1988/learn-typescript/tree/master/setup)

0. 자바 스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트 프로젝트 생성 : 우리는 이미 생성된 프로젝트로 함으로 실제로는 타입스크립트 기본 환경 구성 이 맞다.
	project > 마우스 오른쪽 통합 터미널 오픈(Open in integrated terminal)
	- [x] NPM 초기화 : npm init -y 실행 package.json 생성
	- [x] 타입스크립트 라이브러리 설치 : npm i typescript --save-dev 실행 하여 타입스크립트 설치
	- [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
	```
	project > 마우스 오른쪽 새파일(New File) 클릭하여 tsconfig.json 을 만든다.
	그리고 파일에 설정을 추가 한다.

	"allowJs": true // 자바크립스파일을 타입스트립트에서 인식해서 그대로 쓰겠다는 옵션

	"target": "ES5" // tsc 로 ts 파일을 js 파일로 변환(컴파일) 할때 대상이 자바스크립트 버전을 선택,
    	        // IE 까지 커버한다고 하면 추가 설정이 필요하기는 하지만 ES5 로 설정한다.

	"outDir": "./built" // 컴파일된 js 파일이 어디로 들어갈 것인가 설정. 해당 project 밑에 built 폴더로 넣겠다.

	"moduleResolution": "Node" // 컴파일러가 import가 무엇을 참조하는지 알아내기 위해 사용하는 프로세스입니다. 경로 탐색 프로세스이다. 대부분 Node 사용한다.
    	                   // promise 를 인식 시키기 위해서 Node 넣어 줌.

	"include": ["./src/**/*"] // 이 프로젝트에서 어떤 파일들을 대상으로 해서 ts 파일을 컴파일 할것 인가를 지정하는것.
    	                  // src 밑에 있는것을 몇 단계 밑이던 상관없이 다 컴파일 하겠다.

	"lib": ["ES2015", "DOM", "DOM.Iterable"] // lib의 내용을 보면 배열형태로 사용할 라이브러리들을 정의하고 있습니다.
						// 만약 lib 항목을 정의하지 않았다면 target 항목에서 지정한 ECMAScript의 버전에 따라 기본값이 정의됩니다.
						// ES5의 기본 값: dom, es5, scripthost
						// ES6의 기본 값: dom, dom.iterable, es6, scripthost
						// 위의 기본 값 대신에 커스텀하게 라이브러리를 쓰려고 할 때, lib을 정의하여 사용합니다.					  
	```

	```
	{
	"compilerOptions": {
		"allowJs": true,
		"target": "ES5",
		"outDir": "./built",
		"moduleResolution": "Node",
		"lib": ["ES2015", "DOM", "DOM.Iterable"],
		"noImplicitAny": true
	},
	"include": ["./src/**/*"],
	"exclude": ["node_modules", "built"]
}
	```

	```
	allowJs 를 true 로 하면 js 를 그대로 js 컴파일 할수 있다.
	즉, tsc 명령어로 js 파일을 js로 컴파일 된다. 물론 내용은 달라진다.
	이것은 실무에서 많은 javascript 가 있을때, 점진적으로 ts 로 변경하기에 적합하다.
	100개 라면 10개는 바꾸고 나머지 90개는 그대로 사용 할 수 있다.
	테스트 app.ts 가 아니라 app.js 를 src 밑에 두고 npm run build 하면 built 폴더에 app.js 가 컴파일 되어서 그대로 생성 된다.
	참고로 app.ts 로 해서 app.js 로 변경 할때 컴파일 에러가 날 수 있으나, 대부분 type 에러 이다.
	즉 컴파일 오류가 난다고 해서 컴파일 된 app.js 가 동작 하지 않는 것은 아니다. 컴파일 오류와 동작은 별개다.
	```
	- [x] 자바스크립트 파일을 타입스크립트 파일로 변환 // .js 파일을 .ts로 변경, src/app.js -> src/app.ts
	- [x] `tsc` 명령어로 타입스크립트 컴파일 하기

	
	```
	테스트를 위해 컴파일 해 본다.
	package.json 에 script 에 "build": "tsc" 추가 > 저장
	터미널에서 npm run build 해 본다. 에러가 나야 정상이다. (단순히 .js -> .ts 로 변경했으니까...)
	```
2. 명시적인 `any` 선언하기
	- `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
	- 가능한한 구체적인 타입으로 타입정의

3. 점진적인 타입 적용을 위한 프로젝트 환경 구성
- [ ] 프로젝트 라이브러리 설치
```
npm i -D @babel/core @babel/preset-env @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier eslint-plugin-prettier
```
- [ ] ESLint 설정 후 ESLint 플러그인 에러 해결
	- project 폴더 밑에 .eslintrc.js 파일생성
	- 저장 후 app.ts 에 보이지 않던 에러 보이기 시작한다.
	- ESLint 플러그인 옵션설정
		- VSCode 에서 ctrl + shipt + p (mac은 cmd + shift + p) 키를 이용하여 명령어 실행창 열기
		- 명령어 실행 창에 open setting (JSON) 선택
			- VSCode 에서 기본적으로 설정 된 것 이외에 사용자가 임의로 어떤 단축키를 쓰고 싶어, 어떤 밑줄을 쳐주고 싶어 할때 사용하는 파일
			- 실제로 settings 를 열어서(ctrl + , / cmd + ,) 설정한 각각의 옵션 들이 모두 들어가 있는 파일이다.(settings.json)
	- settings 를 열어서(ctrl + , / cmd + ,) format on save 검색 하여 Editor: Format on save 체크 해제 해 준다.
		- 체크를 해제 해야 ESLint 에서 정리하는 파일과 다른 formatter 과 기타 formattion 도구들이 정리하는 코드들이 충돌이 일어나지 않는다.
	- 최종설정 확인
		- app.ts 에 가서 var a=10; 해서 저장하면 const a = 10; 간격도 띄워주고 알아서 바꿔준다. ESLint 에서 자동으로 정리해 주는 기능이다.
	- .eslintignore 파일 생성
	- 참고
		- ESLint 를 Typescript 에 사용하는 이유 TSLint 가 있는데도 그것을사용 하지 않고 사용하는 이유는
			- 성능이슈 즉, TSLint 보다 ESLint 가 성능이 좋다 라고 Typescript 개발팀에서 결론을 내서 그 이후로 계속 사용하고 하고 있다.

```

// .eslintrc.js 파일내용 그대로 복사하면 된다.
// 강의 노트에서 일부 수정 useTabs: true, tabWidth: 4, endOfLine: 'auto'
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
};

```
```
// settings.json 제일 아래에 추가 한다.
"editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": [
      {"mode": "auto"}
  ],
  "eslint.validate": [
      "javascript",
      "typescript"
  ],

```
```
// .eslintignore 파일 내용.
node_modules
```
4. 외부 라이브러리 모둘화
	- index.html 에서 아래 부분이 외부 모듈이다.
	```
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
	```
	- 서비스코드 즉 app.ts 에서 import 하면 된다.
	```
	라이브러리 로딩 문법 : import 변수명 from '라이브러리 이름'
	이렇게 하기 위해서는 라이브러리를 설치해야 한다.

	 변수, 함수 임포트 문법 : import {} from '파일 상대 경로'
	```
	- 외부 라이브러리 설치
		- axios 설치
			- npm i axios
				- 없이 설치(--save-dev) 즉, depencies 에 설치
			- 설치 후 소스상에서 (app.ts)
				- import axios from 'axios' 할수 있다. 자동완성된다. depencies에 설치 했으므로	
	```
	// package.json 에 추가된 모습
	  "dependencies": {
    "axios": "^0.27.2"
  }		
	```
			- [Axios 깃헙 리포지토리](https://github.com/axios/axios)
		- chart.js 설치
			- [Chart.js 공식 문서](https://www.chartjs.org/)
			- npm i chart.js
	```
	// package.json 에 추가된 모습
	"dependencies": {
		"axios": "^0.27.2",
		"chart.js": "^3.8.0"
	}
	```
			- 설치 후 소스상에서 (app.ts)
				- import Chart from 'chart.js' 할수 있다. 자동완성된다. depencies에 설치 했으므로				
## Tip
- TS 오류 발생시 오류 코드를 활용하거나 중요문장을 COPY 하여 구글에서 검색 한다.
- 이미 React, vue 등 다른 front-end framework를 썼을때, 이미 빌드 시스템이 들어가 있는 프로게트인 경우에는
여러가지 방법으로 진행 해 볼 수 있다. 여기서 타입스크립트를 적용하는 경우에는 복잡해 질 수 있다.
이때는 아예 프로젝트를 하나 새로 만들어서(타입스크립트 기본환경을 만들어서) 기존에 있는 소스코드들을 하나씩 들고 와서 입히는 것이 좋다.
- 처음 부터 무리하게 구체적인 타입을 정의하지 말고, 일단은 `noImplicitAny : true` 로 인해 에러나는 부분은 최대한 `any` 로 정의를 한다.
- 잘못된 라이브러리 제거 (npm uninstall 라이브러리) 현재 typescript 는 devDependencies 에 설치되어야 하나 dependencies 에 설치
따라서 npm uninstall typescript 후 재 설치 한다. dependencies 는 어플리케이션 로직에 직접적으로 관여하는 jQuery, chart Library, react, vue 가 들어간다.
devDenpencies 는 개발 할 때만 써는 라이브러리가 들어간다. 즉 배포할때 포함되는 라이브러리는 dependencies 에, 포함 안되는 라이브러리는 devDenpendencies 에 
들어가면 된다.
## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
- [tsc CLI Option](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [모듈화 진행을 위한 타입스크립트 구성](https://github.com/joshua1988/learn-typescript/tree/master/setup)
- [NPM 설치 명령어 차이점](https://joshua1988.github.io/webpack-guide/build/npm-module-install.html##npm-설치-명령어)
- [개발용 라이브러리와 배포용 라이브러리 구분하기](https://joshua1988.github.io/webpack-guide/build/npm-module-install.#개발용-라이브러리와-배포용-라이브러리-구분하기)

## 라이브러리 소개
- 바벨(Babel)
	- 최신 JavaScript 문법을 좀 더 많은 브라우져가 호환할 수 있는 형태로 바꿔 주는 도구 이다.
	- [바벨 공식 문서](https://babeljs.io/)
		- Try it out 에서 테스트 해 보면 된다.
	- [바벨 소개 문서](https://babeljs.io/docs/en/)
	- [바벨 구성하기 문서](https://babeljs.io/docs/en/configuration)
	- [바벨 프리셋 문서](https://babeljs.io/docs/en/presets)
	- [babel-preset-env 깃헙 리포지토리](https://github.com/babel/babel-preset-env)
- ESLint 소게
	- [ESLint 공식 문서](https://eslint.org/)
	- Javascript 코드에서 문제를 찾고, 고치는 도구, 잠재적인 에러 가능성을 코드 레벨에서 줄여 주는 코드 문법 보조 도구.
	- 코드의 자동완성 또는 포맷을 정돈해 주는 용도로도 사용한다.
- Prettier 소개
	- [Prettier 공식 문서](https://prettier.io/)
	- 어떤 규칙을 가지고 코드를 정리해 주는 코드 정리 도구, 개인의 취향 대로 정리할 수 있다.
	- 팀단위 코딩 컨벤션을 만들어서 컨벤션에 맞춰 코드를 정의할 때 많이 사용 된다.
	- 실전에서도 Prettier 을 설정해 놓고, 안해 놓고의 차이는 나중에 가면 가독성의 차이가 어마어마 하게 난다.
	- 실전에서 가급적 세팅하는 것을 추천 한다.
## 기타
- node 로 javascript 실행하기 : 해당 js 파일이 있는 폴더 이동 > 통합터미널 열기 > 명령어 실행(node js파일명) 예) node arrow-function.js
- 파일형식 중 . 은 숨김파일이고, *rc 이면 설정파일을 의미한다. 설정파일은 js, yml, json 확장자를 가질수 있다. js 주석처리가 자유로워서 개인적으로 선호 한다.
	- 예) .eslintrc.js, .babelrc.js 등