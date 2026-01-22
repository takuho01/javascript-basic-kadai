

const btn = document.getElementById('btn');
const text = document.getElementById('text');

// クリック後、２秒後にテキストを変更
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});