// 타입들을 모아 놓은 파일.
// covid 라고 하는 api의 어떤 특정도메인 또는 데이터 구분, 데이터 종류들을 모아 놓은 파일 임.
export interface Country {
	Country: string;
	CountryCode: string;
	Date: string;
	ID: string;
	NewConfirmed: number;
	NewDeaths: number;
	NewRecovered: number;
	Premium: any;
	Slug: string;
	TotalConfirmed: number;
	TotalDeaths: number;
	TotalRecovered: number;
}

export interface Global {
	Date: string;
	NewConfirmed: number;
	NewDeaths: number;
	NewRecovered: number;
	TotalConfirmed: number;
	TotalDeaths: number;
	TotalRecovered: number;
}

export enum CovidStauts {
	Confirmed = 'confirmed',
	Recovered = 'recovered',
	Deaths = 'deaths',
}

export interface CovidSummaryResponse {
	Countries: Country[];
	Date: string;
	Global: Global;
	Message: string;
}

interface CountrySummaryInfo {
	Cases: number;
	City: string;
	CityCode: string;
	Country: string;
	CountryCode: string;
	Date: string;
	Lat: string;
	Lon: string;
	Province: string;
	Status: CovidStauts;
}

export type CountrySummaryResponse = CountrySummaryInfo[];

export interface CountrySummaryResponse1 {
	countrySummaryInfo: CountrySummaryInfo[];
}
