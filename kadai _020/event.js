const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',() => {
  text.innerHTML = 'ボタンがクリックされました！';
});