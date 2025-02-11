function fillOptionList(data) {
  const optionElement = document.querySelector('#dish');

  let optionList = '';
  for (let index in data) {
    optionList += ` 
    <option class="opt">${data[index].toUpperCase()}</option>`;
  }
  optionElement.innerHTML =
    `<option class="opt">Select ingredient...</option>` + optionList;
  return optionList;
}
