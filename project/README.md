## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다


...
## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바 스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트 프로젝트 생성 : 우리는 이미 생성된 프로젝트로 함으로 실제로는 타입스크립트 기본 환경 구성 이 맞다.
	project > 마우스 오른쪽 통합 터미널 오픈(Open in integrated terminal)
	- [x] NPM 초기화 : pm init -y 실행 package.json 생성
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
## Tip
- TS 오류 발생시 오류 코드를 활용하거나 중요문장을 COPY 하여 구글에서 검색 한다.
- 이미 React, vue 등 다른 front-end framework를 썼을때, 이미 빌드 시스템이 들어가 있는 프로게트인 경우에는
여러가지 방법으로 진행 해 볼 수 있다. 여기서 타입스크립트를 적용하는 경우에는 복잡해 질 수 있다.
이때는 아예 프로젝트를 하나 새로 만들어서(타입스크립트 기본환경을 만들어서) 기존에 있는 소스코드들을 하나씩 들고 와서 입히는 것이 좋다.
- 처음 부터 무리하게 구체적인 타입을 정의하지 말고, 일단은 `noImplicitAny : true` 로 인해 에러나는 부분은 최대한 `any` 로 정의를 한다.
## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
- [tsc CLI Option](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## 기타
- node 로 javascript 실행하기 : 해당 js 파일이 있는 폴더 이동 > 통합터미널 열기 > 명령어 실행(node js파일명) 예) node arrow-function.js