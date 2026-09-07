(async function(){
  const link = document.getElementById("download");
  const note = document.getElementById("release");
  try {
    const response = await fetch("https://api.github.com/repos/Diekins/clippilot-releases/releases/latest?site=" + Date.now(), {
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error("release");
    const release = await response.json();
    const asset = (release.assets || []).find((item) => /ClipPilot-Setup-.*\.exe$/i.test(item.name));
    if (asset) {
      link.href = asset.browser_download_url;
      note.textContent = release.tag_name + " · " + (asset.size / 1048576).toFixed(0) + " MB · instalador para Windows";
    }
  } catch (_) {
    link.href = "https://github.com/Diekins/clippilot-releases/releases/download/v0.2.11/ClipPilot-Setup-0.2.11.exe";
    note.textContent = "Versão atual · instalador para Windows";
  }
})();
