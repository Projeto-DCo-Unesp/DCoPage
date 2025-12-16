const dadosProjeto = [];

/* =========================
   CARREGAMENTO
========================= */

async function carregarProjetos(tipo) {
  dadosProjeto.length = 0;

  const indexRes = await fetch(`projetos/${tipo}/index.json`);
  const arquivos = await indexRes.json();

  for (const nome of arquivos) {
    const res = await fetch(`projetos/${tipo}/${nome}`);
    const projeto = await res.json();
    projeto._tipo = tipo;
    dadosProjeto.push(projeto);
  }

  mostrarLista();
}

/* =========================
   LISTAGEM
========================= */

function mostrarLista() {
  const ul = document.getElementById("listaProjetos");
  ul.innerHTML = "";

  dadosProjeto.forEach((p, idx) => {
    const li = document.createElement("li");
    li.style.marginBottom = "2%";

    /* ===== TÍTULO ===== */
    const titulo = document.createElement("p");
    titulo.textContent = p.titulo || `Projeto ${idx + 1}`;
    titulo.style.fontFamily = "ControllerExt";
    titulo.style.fontSize = "25px";
    titulo.style.fontWeight = "bold";
    titulo.style.color = "#3D756C";

    /* ===== DESCRIÇÃO ===== */
    const descricao = document.createElement("p");
    descricao.textContent = p.descricao || "";
    descricao.style.fontFamily = "consolas, monospace";
    descricao.style.fontSize = "17px";
    descricao.style.textAlign = "justify";
    descricao.style.marginTop = "0.2%";

    /* ===== METADADOS ===== */
    const meta = document.createElement("p");
    meta.style.marginTop = "0.2%";

    meta.append(
      bold("Autor: "),
      texto(Array.isArray(p.autor) ? p.autor.join(", ") : p.autor),
      document.createElement("br"),
      bold("Orientador: "),
      texto(p.orientador || "-"),
      document.createElement("br"),
      bold("Ano: "),
      texto(p.data || "-")
    );

    /* ===== GITHUB ===== */
    const github = document.createElement("p");
    github.style.marginTop = "0.2%";

    const label = document.createElement("strong");
    label.textContent = "GitHub: ";
    github.append(label);

    if (Array.isArray(p.autornick)) {
      p.autornick.forEach((nick, i) => {
        const a = document.createElement("a");
        a.href = `https://github.com/${nick}`;
        a.target = "_blank";
        a.textContent = nick;

        github.append(a);
        if (i < p.autornick.length - 1) {
          github.append(document.createTextNode(", "));
        }
      });
    }

    li.append(titulo, descricao, meta, github);
    ul.appendChild(li);
  });

  document.getElementById("listaProjetos").style.display = "";
  document.getElementById("projetoDetalhe").style.display = "none";
}

/* =========================
   UTIL
========================= */

function texto(t) {
  return document.createTextNode(t || "");
}

function bold(txt) {
  const strong = document.createElement("strong");
  strong.textContent = txt;
  return strong;
}

/* =========================
   INIT
========================= */

// carregarProjetos("extensao");
// carregarProjetos("disciplina");
