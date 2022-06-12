interface PhoneNumberDictionary {
	[phone: string]: {
		num: number;
	};
}

//export interface Contact {
interface Contact {
	name: string;
	address: string;
	phones: PhoneNumberDictionary;
}

//export enum PhoneType {
enum PhoneType {
	Home = 'home',
	Office = 'office',
	Studio = 'studio',
}

export { Contact, PhoneType }; // 각각 export 해도 되나 여러개 할때는 통상 아래에서 한번에 이렇게 한다.