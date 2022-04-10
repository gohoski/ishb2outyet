document.addEventListener('DOMContentLoaded', async () => {
  const resp = await fetch('http://raptisoft.net/go.php?exe=Gm8YDmFuC1MLHHQcEAQHR2wIEREcERYBaQVTpxoZD0cJDgMJEBBPRUUTFAUNX1VUFwkXCgodDAJIMVhcWVtfMTYaR0tVDSFdKFEDMAIxCzYDAytEUyopXjw%3d%3d'); // Hamsterball 2 News URL
  const news = await resp.text();
  const title = document.querySelector('div.title');
  const progress = document.querySelector('progress');
  progress.style.display = 'none';
  title.style.display = 'block';
  if (news.includes('fopen(hamsterball2.news): failed to open stream'))
    title.innerText = 'NO';
  else
    title.innerText = 'YES';
})
