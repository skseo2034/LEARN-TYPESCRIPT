interface Product {
	id: number;
	name: string;
	price: number;
	brand: string;
	stock: number;
}

// 1. 상품목록을 받아오기 위한 API	함수
function fetchProducts(): Promise<Product[]> {
	//..
}

// 실무에서 Product 에 내용이 다 오지 않을 수 있다. 그리고 현재는 Product 를 이용할 수 없다.
// Typescript 관점에서는 처음에 javascript 의 타입을 입히고, 그 다음 뭔가 줄여 나가는 것을 고민하게 된다.
// 따라서 일반적으로 shoppingItem: {id: number; name: string; price:number} 는 다른 interface 를 만들게 된다.
// soppingItem: ProductDetail 이될수 있다. 이때 유요한것이 utility type 이다. Pick 사용

/* interface ProductDetail {
	id: number;
	name: string;
	price: number;
} */

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수 (ex, 네이버 쇼핑 > 비타민 상품 검색 > 상품 click > 상품상세)
//function displayProductDetail(shoppingItem:
//	 {id: number; name: string; price:number}) { 
//function displayProductDetail(shoppingItem: ProductDetail) { 
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>		
function displayProductDetail(shoppingItem: shoppingItem) { 
}

// 3. 특정 상품 정보를 업테이트(갱신) 하는 함수
// Product 를 업데이트 하는데 id~stock 까지 다 할 수도 있고, name, price 만 할 수도 있고, brand 만 할수도 있다.
// 즉 Product 의 속성을 나누는 경우의 수만큼 가능하다. updateProductItem(productItem: Product) 이렇게 할 경우 매번 모든 속성을 넘겨야 한다.
// 이렇게 optional 로 정의를 해서 사용할 수 있다. 그러나 위에 정의된 Product 와 중복해서 정의하게 된다.
// 이때 사용할 수 있은 Utility Type 가 Partial(파셜) 이다.
/* interface UpdateProduct {
	id?: number;
	name?: string;
	price?: number;
	brand?: string;
	stock?: number;
} */

type UpdateProduct = Partial<Product>
//function updateProductItem(productItem: Product) {
//function updateProductItem(productItem: UpdateProduct) {	
function updateProductItem(productItem: UpdateProduct) {	
	//
}
//updateProductItem({id:1, name:'seo'});
// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
	username: string;
	email: string;
	profilePhotoUrl: string;
}

// #1
/* type UserProfileUpdate = {
	userName?: UserProfile['username'];
	email?: UserProfile['email'];
	profilePhotoUrl?: UserProfile['profilePhotoUrl'];
} */

// #2
/* type UserProfileUpdate = {
	[p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
}
 */
//type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate = {
	[p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T> = { // 실제로 이것이 Partial 이다
	[p in keyof T]?: T[p]
}