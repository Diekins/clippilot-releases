(async function(){
  const links = Array.from(document.querySelectorAll("[data-download]"));
  const note = document.getElementById("release");
  const manifesto = new URL("latest.yml", document.baseURI);
  const deixarIndisponivel = (mensagem) => {
    links.forEach((link) => {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.classList.add("disabled");
    });
    if (note) note.textContent = mensagem;
  };
  try {
    const response = await fetch(manifesto.href + "?versao=" + Date.now(), {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("manifesto indisponível");
    const texto = await response.text();
    const versao = /^version:\s*(.+)$/m.exec(texto)?.[1]?.trim();
    const arquivo = /^path:\s*(.+)$/m.exec(texto)?.[1]?.trim();
    if (!versao || !arquivo || !/^Vicutra-Setup-[\w.-]+\.exe$/i.test(arquivo)) throw new Error("instalador não publicado");
    const download = new URL(arquivo, manifesto);
    if (download.origin !== window.location.origin) throw new Error("download fora do site oficial");
    links.forEach((link) => {
      link.href = download.href;
      link.removeAttribute("aria-disabled");
      link.classList.remove("disabled");
    });
    if (note) note.textContent = versao + " · instalador oficial para Windows";
  } catch (_) {
    deixarIndisponivel("O instalador oficial está sendo preparado. Tente novamente em instantes.");
  }
})();
