const apiUrl = "https://api.github.com/repos/dco-unesp-bauru/tcc-bcc-2024/contents/_posts";
const dadosProjeto = [];

function parseProjeto(mdText) {
  // Regex para pegar frontmatter
  const regex = /^---\s*([\s\S]*?)---\s*([\s\S]*)$/;
  const match = mdText.match(regex);
  const projeto = {};

  if (match) {
    // Campos do frontmatter (match[1])
    const linhasCampos = match[1].split('\n');
    linhasCampos.forEach(linha => {
      // Ignore linhas vazias
      if (linha.trim() === "") return;
      const [campo, ...resto] = linha.split(':');
      // Junta os valores e remove aspas extras
      projeto[campo.trim()] = resto.join(':').trim().replace(/^"(.*)"$/, '$1');
    });
    // Conteúdo/descrição (match[2])
    projeto.descricao = match[2].trim();
  } else {
    // Se não houver frontmatter, guarda tudo na descrição
    projeto.descricao = mdText.trim();
  }
  return projeto;
}

async function lerPosts() {
  const res = await fetch(apiUrl);
  const files = await res.json();
  const mdFiles = files.filter(f => f.name.endsWith('.md'));
  for (const file of mdFiles) {
    const rawUrl = file.download_url;
    const mdRes = await fetch(rawUrl);
    const mdText = await mdRes.text();
    const projeto = parseProjeto(mdText);
    dadosProjeto.push(projeto);
  }
  mostraListaLinks();
}

function mostraListaLinks() {
  const ul = document.getElementById('listaProjetos');
  ul.innerHTML = '';
  dadosProjeto.forEach((proj, idx) => {
    const li = document.createElement('li');
    li.textContent = `title: "${proj.title || "Projeto "+(idx+1)}"`;
    li.style.cursor = 'pointer';
    li.onclick = () => mostraProjetoIndividual(idx);
    ul.appendChild(li);
  });
  document.getElementById('listaProjetos').style.display = '';
  document.getElementById('cabecalho').style.display = '';
  document.getElementById('projetoDetalhe').style.display = 'none';
}

function mostraProjetoIndividual(idx) {
  document.getElementById('listaProjetos').style.display = 'none';
  document.getElementById('cabecalho').style.display = 'none';
  const div = document.getElementById('projetoDetalhe');
  div.style.display = '';

  // Mostra campos e depois descrição
  const campos = Object.keys(dadosProjeto[idx])
    .filter(k => k !== 'descricao' && dadosProjeto[idx][k]);

  let html = `<h2>${dadosProjeto[idx].title || 'Projeto ' + (idx+1)}</h2>`;
  campos.forEach(campo => {
    if (campo !== 'layout') html += `<b>${campo}:</b> ${dadosProjeto[idx][campo]}<br>`;
  });

  if (dadosProjeto[idx].descricao) {
    html += `<br><b>Descrição do projeto:</b><br>${dadosProjeto[idx].descricao}<br>`;
  }

  html += '<br><button onclick="voltaParaLista()">Voltar</button>';
  div.innerHTML = html;
}

function voltaParaLista() {
  mostraListaLinks();
  document.getElementById('projetoDetalhe').innerHTML = '';
}

window.onload = lerPosts;