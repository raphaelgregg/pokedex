function Pagination() {
  const Pagination = document.createElement('div');
  const First = document.createElement('div');
  const Prev = document.createElement('div')
  const Numbers = document.createElement('div');
  const NumberPage = document.createElement('div');
  const Next = document.createElement('div')
  const Last = document.createElement('div');

  Pagination.append(First);
  Pagination.append(Prev);
  Pagination.append(Numbers);
  Numbers.append(NumberPage);
  Pagination.append(Next);
  Pagination.append(Last);

  Pagination.classList.add('pagination');  
  First.classList.add('first');
  Prev.classList.add('prev');
  Numbers.classList.add('numbers');
  Next.classList.add('next');
  Last.classList.add('last');

  First.innerHTML = '&#171;';
  Prev.innerHTML = '&lt;';
  NumberPage.innerHTML = '1';
  Next.innerHTML = '&gt;';
  Last.innerHTML = '&#187;';

  return Pagination;
}

export {Pagination};