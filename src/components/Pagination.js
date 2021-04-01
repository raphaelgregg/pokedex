function createPagination() {
  return (`
    <div class="first">&#171;</div>
    <div class="prev">&lt;</div>
    <div class="numbers"></div>
    <div class="next">&gt;</div>
    <div class="last">&#187;</div>
  `);
}

export default function renderPagination(element) {
  const pagination = createPagination();
  element.innerHTML = pagination;
}