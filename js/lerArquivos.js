const apiUrl = "https://api.github.com/repos/dco-unesp-bauru/tcc-bcc-2024/contents/_posts";
const dadosProjeto = [];

async function lerPosts() {
  const res = await fetch(apiUrl);
  const files = await res.json();
  const mdFiles = files.filter(f => f.name.endsWith('.md'));
  for (const file of mdFiles) {
    const rawUrl = file.download_url;
    const mdRes = await fetch(rawUrl);
    const mdText = await mdRes.text();
    const linhas = mdText.split('\n').filter(l => l.trim() !== '');
    if (linhas.length > 1) {
      const projeto = [];
      for (let i = 1; i < linhas.length; i++) {
        projeto.push(linhas[i].trim());
      }
      dadosProjeto.push(projeto);
    }
  }
  // Exibe no HTML
  document.getElementById('saida').textContent = JSON.stringify(dadosProjeto, null, 2);
}

lerPosts();