// 라이브러리 로딩 문법
// 이렇게 하기 위해서는 라이브러리를 설치해야 한다.
// import 변수명 from '라이브러리 이름'

// 변수, 함수 임포트 문법
//import {} from '파일 상대 경로'
import axios, { AxiosResponse } from 'axios';
// import * as Chart from 'chart.js';
import { Chart } from 'chart.js';
// 타입모듈
import {
	CountrySummaryResponse,
	CovidSummaryResponse,
	CovidStauts,
	Country,
	CountrySummaryInfo,
} from './covid/index';

// utils
function $<T extends HTMLElement>(selector: string) {
	const element = document.querySelector(selector);
	return element as T;
}
function getUnixTimestamp(date: Date | string) {
	return new Date(date).getTime();
}

// DOM
// 기본이 되는건 Element 그 보다 더 구체적으로 상속받아서 구현한게 HTMLElement, 그 보다 더 P tag 만을 구현한게 HTMLParagraphElement 이다.
// deathsTotal 은 index.html 에서 보면 <p class="total deaths">0</p> p tag 이다.
// var a: Element | HTMLElement | HTMLParagraphElement;

const confirmedTotal = $<HTMLSpanElement>('.confirmed-total');
const deathsTotal = $<HTMLParagraphElement>('.deaths');
const recoveredTotal = $<HTMLParagraphElement>('.recovered');
const lastUpdatedTime = $<HTMLParagraphElement>('.last-updated-time');
const rankList = $<HTMLOListElement>('.rank-list');
const deathsList = $<HTMLOListElement>('.deaths-list');
const recoveredList = $('.recovered-list') as HTMLOListElement;
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

function createSpinnerElement(id: string) {
	const wrapperDiv = document.createElement('div');
	wrapperDiv.setAttribute('id', id);
	wrapperDiv.setAttribute(
		'class',
		'spinner-wrapper flex justify-center align-center'
	);
	const spinnerDiv = document.createElement('div');
	spinnerDiv.setAttribute('class', 'ripple-spinner');
	spinnerDiv.appendChild(document.createElement('div'));
	spinnerDiv.appendChild(document.createElement('div'));
	wrapperDiv.appendChild(spinnerDiv);
	return wrapperDiv;
}

// state
let isDeathLoading = false;

// api
function fetchCovidSummary(): Promise<AxiosResponse<CovidSummaryResponse>> {
	const url = 'https://api.covid19api.com/summary';
	return axios.get(url);
}

function fetchCountryInfo(
	countryName: string | undefined,
	status: CovidStauts
): Promise<AxiosResponse<CountrySummaryResponse>> {
	// status params: confirmed, recovered, deaths
	const url = `https://api.covid19api.com/country/${countryName}/status/${status}`;
	return axios.get(url);
}

// methods
function startApp() {
	setupData();
	initEvents();
}

// events
function initEvents() {
	if (!rankList) {
		return;
	}
	rankList.addEventListener('click', handleListClick);
}

async function handleListClick(event: Event) {
	let selectedId;
	if (
		event.target instanceof HTMLParagraphElement ||
		event.target instanceof HTMLSpanElement
	) {
		selectedId = event.target.parentElement
			? event.target.parentElement.id
			: undefined;
	}
	if (event.target instanceof HTMLLIElement) {
		selectedId = event.target.id;
	}
	if (isDeathLoading) {
		return;
	}
	clearDeathList();
	clearRecoveredList();
	startLoadingAnimation();
	isDeathLoading = true;
	const { data: deathResponse } = await fetchCountryInfo(
		selectedId,
		CovidStauts.Deaths
	);
	const { data: recoveredResponse } = await fetchCountryInfo(
		selectedId,
		CovidStauts.Recovered
	);
	const { data: confirmedResponse } = await fetchCountryInfo(
		selectedId,
		CovidStauts.Confirmed
	);
	endLoadingAnimation();
	setDeathsList(deathResponse);
	setTotalDeathsByCountry(deathResponse);
	setRecoveredList(recoveredResponse);
	setTotalRecoveredByCountry(recoveredResponse);
	setChartData(confirmedResponse);
	isDeathLoading = false;
}

function setDeathsList(data: CountrySummaryResponse) {
	const sorted = data.sort(
		(a: CountrySummaryInfo, b: CountrySummaryInfo) =>
			getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
	);
	sorted.forEach((value: CountrySummaryInfo) => {
		const li = document.createElement('li');
		li.setAttribute('class', 'list-item-b flex align-center');
		const span = document.createElement('span');
		span.textContent = value.Cases.toString();
		span.setAttribute('class', 'deaths');
		const p = document.createElement('p');
		p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
		li.appendChild(span);
		li.appendChild(p);

		if (!deathsList) {
			return;
		}

		deathsList.appendChild(li);
	});
}

function clearDeathList() {
	if (!deathsList) {
		return;
	}
	deathsList.innerHTML = '';
}

Element;
function setTotalDeathsByCountry(data: CountrySummaryResponse) {
	deathsTotal.innerText = data[0].Cases.toString();
}

function setRecoveredList(data: CountrySummaryResponse) {
	const sorted = data.sort(
		(a: CountrySummaryInfo, b: CountrySummaryInfo) =>
			getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
	);
	sorted.forEach((value: CountrySummaryInfo) => {
		const li = document.createElement('li');
		li.setAttribute('class', 'list-item-b flex align-center');
		const span = document.createElement('span');
		span.textContent = value.Cases.toString();
		span.setAttribute('class', 'recovered');
		const p = document.createElement('p');
		p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
		li.appendChild(span);
		li.appendChild(p);
		recoveredList?.appendChild(li); // 옵셔널 체이닝 연산자
		/* if (recoveredList == null || recoveredList == undefined) {
			return;
		} else {
			recoveredList.appendChild(li);
		} */
	});
}

function clearRecoveredList() {
	recoveredList.innerHTML = '';
}

function setTotalRecoveredByCountry(data: CountrySummaryResponse) {
	recoveredTotal.innerText = data[0].Cases.toString();
}

function startLoadingAnimation() {
	deathsList.appendChild(deathSpinner);
	recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
	deathsList.removeChild(deathSpinner);
	recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
	const { data } = await fetchCovidSummary();
	setTotalConfirmedNumber(data);
	setTotalDeathsByWorld(data);
	setTotalRecoveredByWorld(data);
	setCountryRanksByConfirmedCases(data);
	setLastUpdatedTimestamp(data);
}

//
function renderChart(data: number[], labels: string[]) {
	const canvas = $('#lineChart') as HTMLCanvasElement;
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		return;
	}

	Chart.defaults.color = '#f5eaea';
	Chart.defaults.font.family = 'Exo 2';
	new Chart(ctx, {
		type: 'line',
		data: {
			labels,
			datasets: [
				{
					label: 'Confirmed for the last two weeks',
					backgroundColor: '#feb72b',
					borderColor: '#feb72b',
					data,
				},
			],
		},
		options: {},
	});
}

function setChartData(data: CountrySummaryResponse) {
	const chartData = data
		.slice(-14)
		.map((value: CountrySummaryInfo) => value.Cases);
	const chartLabel = data
		.slice(-14)
		.map((value: CountrySummaryInfo) =>
			new Date(value.Date).toLocaleDateString().slice(5, -1)
		);
	renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data: CovidSummaryResponse) {
	confirmedTotal.innerText = data.Countries.reduce(
		(total: number, current: Country) => (total += current.TotalConfirmed),
		0
	).toString();
}

function setTotalDeathsByWorld(data: CovidSummaryResponse) {
	deathsTotal.innerText = data.Countries.reduce(
		(total: number, current: Country) => (total += current.TotalDeaths),
		0
	).toString();
}

function setTotalRecoveredByWorld(data: CovidSummaryResponse) {
	recoveredTotal.innerText = data.Countries.reduce(
		(total: number, current: Country) => (total += current.TotalRecovered),
		0
	).toString();
}

function setCountryRanksByConfirmedCases(data: CovidSummaryResponse) {
	const sorted = data.Countries.sort(
		(a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed
	);
	sorted.forEach((value: Country) => {
		const li = document.createElement('li');
		li.setAttribute('class', 'list-item flex align-center');
		li.setAttribute('id', value.Slug);
		const span = document.createElement('span');
		span.textContent = value.TotalConfirmed.toString();
		span.setAttribute('class', 'cases');
		const p = document.createElement('p');
		p.setAttribute('class', 'country');
		p.textContent = value.Country;
		li.appendChild(span);
		li.appendChild(p);
		rankList.appendChild(li);
	});
}

function setLastUpdatedTimestamp(data: CovidSummaryResponse) {
	lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();
