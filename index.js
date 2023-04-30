function geradoraCor() {
  const chars = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return color;
}

document.getElementById("btnColor").addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    let color = geradoraCor();
    let divColor = document.getElementById(`color ${i + 1}`);
    divColor.style.backgroundColor = color;
    let textoCor = document.getElementById(`text-colors ${i + 1}`);
    textoCor.textContent = `${color}`;
  }
});
