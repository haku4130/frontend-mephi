let list = document.getElementById('list');

for (i = 1; i < 101; i++) {
  let p = document.createElement('li');
  p.innerHTML = i;
  p.className = 'item' + i;
  list.appendChild(p);
}
