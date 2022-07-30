interface DropdownItem<T> {
  value: T;
  selected: boolean;
}
/* interface Email {
  value: string;
  selected: boolean;
} */

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

/* interface ProductNumber {
  value: number;
  selected: boolean;
}

interface TrueFalse {
  value: boolean;
  selected: boolean;
} */

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

/* function createDropdownItem<T>(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email: DropdownItem<string>) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});


numberOfProducts.forEach(function (product: DropdownItem<number>) {
  const item = createDropdownItem(product);
}); */

function createDropdownItem<T extends { toString : Function }>(item: DropdownItem<T>) {
//function createDropdownItem<T extends string | number>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  if (selectTag) {
  	selectTag.appendChild(item);
  }
});


numberOfProducts.forEach(function (product: DropdownItem<number>) {
  const item = createDropdownItem<number>(product);
  const selectTag1 = document.querySelector('#product-dropdown');
  if (selectTag1) {
	selectTag1.appendChild(item);
  }
});