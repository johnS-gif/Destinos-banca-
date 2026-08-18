const destinations = [
  {name:"Catarata El Salto", province:"Alajuela", type:"Catarata", price:"Económico", desc:"Naturaleza, agua cristalina y senderos.", img:"El_Salto.jpeg"},
  {name:"Playa Dantita", province:"Guanacaste", type:"Playa", price:"Medio", desc:"Una joya escondida de la costa.", img:"Dantita.jpeg"},
  {name:"Bosque de Prusia", province:"Cartago", type:"Montaña", price:"Económico", desc:"Senderos entre bosque y neblina.", img:"Prusia.jpeg"},
  {name:"Cahuita local", province:"Limón", type:"Cultura", price:"Medio", desc:"Sabor caribeño y experiencias auténticas.", img:"Cahuita.jpeg"},
  {name:"Los Quetzales", province:"San José", type:"Montaña", price:"Económico", desc:"Paisajes de altura y biodiversidad.", img:"Quetzales.jpeg"},
  {name:"Poza La Selva", province:"Heredia", type:"Catarata", price:"Económico", desc:"Un rincón verde para desconectarse.", img:"Poza.jpeg"},
  {name:"Isla Chira", province:"Puntarenas", type:"Cultura", price:"Medio", desc:"Comunidad, manglares y cultura local.", img:"Chira.jpeg"},
  {name:"Pueblos de Sarchí", province:"Alajuela", type:"Cultura", price:"Económico", desc:"Artesanía y tradiciones costarricenses.", img:"Sarchi.jpeg"}
];

function renderDestinations(items=destinations){
  const grid = document.getElementById("destinationGrid");
  grid.innerHTML = items.length ? items.map(d => `
    <article class="destination">
      <div class="destination-photo" style="background-image: linear-gradient(to top, rgba(15, 42, 74, 0.75), transparent), url('${d.img}');">
        ${d.name}
      </div>
      <div class="destination-info">
        <h3>${d.name}</h3><p>📍 ${d.province}</p>
        <div class="tags"><span class="tag">${d.type}</span><span class="tag">${d.price}</span></div>
        <p>${d.desc}</p>
      </div>
    </article>`).join("") : `<p>No encontramos destinos con esos filtros.</p>`;
}

function filterDestinations(){
  const p = document.getElementById("provinceFilter").value;
  const pr = document.getElementById("priceFilter").value;
  const t = document.getElementById("typeFilter").value;
  renderDestinations(destinations.filter(d => (!p || d.province === p) && (!pr || d.price === pr) && (!t || d.type === t)));
  document.getElementById("destinos").scrollIntoView({behavior:"smooth"});
}

function openRouteModal() { document.getElementById("routeModal").classList.add("open"); }
function closeRouteModal() { document.getElementById("routeModal").classList.remove("open"); }

function submitRoute(e) {
  e.preventDefault();
  alert("¡Solicitud recibida! En una versión conectada, estos datos se enviarían al equipo para preparar tu ruta.");
  closeRouteModal();
  e.target.reset();
}

function sendContact(e) {
  e.preventDefault();
  alert("¡Mensaje listo! En la versión conectada se enviaría al correo oficial.");
  e.target.reset();
}

function buy(product) {
  alert(`Seleccionaste: ${product}. Aquí se conectaría SINPE Móvil o una pasarela de pago.`);
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("themeToggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
}));

document.getElementById("routeModal").addEventListener("click", e => {
  if (e.target.id === "routeModal") closeRouteModal();
});

// Funcionalidad de Mochi
const mochiTips = [
  "🌿 ¿Sabías que Costa Rica alberga cerca del 5% de la biodiversidad mundial en un territorio tan pequeño?",
  "🦥 Como perezoso experto te lo digo: tómate tu tiempo para explorar los senderos sin prisa y disfrutar del aire puro.",
  "🍛 Apoyamos a pequeños emprendimientos rurales. Cuando visitas una soda local o un hospedaje de pueblo, impulsas toda la comunidad.",
  "🏔️ Cartago guarda rincones de neblina y montaña espectaculares como el Bosque de Prusia. ¡Son imperdibles!",
  "🎟️ Con nuestro Pasaporte Provincias 360 puedes coleccionar sellos digitales y subir de nivel conforme viajas por el país.",
  "🌊 Guanacaste no son solo playas famosas; también hay bahías ocultas y miradores solitarios hermosos.",
  "🧭 ¿No sabes por dónde empezar? Haz clic en 'Diseñá tu ruta' en el menú y te armamos un itinerario a tu medida.",
  "💰 Hay opciones para todos los bolsillos. Revisa nuestra sección de destinos económicos para viajar gastando poco.",
  "☕ ¿Sabías que el café de altura de zonas como Tarrazú es considerado uno de los mejores del mundo?",
  "✨ Cada provincia tiene su magia única. ¡Anímate a descubrir los secretos que la mayoría pasa por alto!",
  "🌱 Costa Rica es un paraíso para los amantes de la naturaleza. ¡Explora nuestros parques nacionales y descubre la belleza salvaje!",
  "🏖️ No te limites a las playas más conocidas. Explora las calas escondidas y disfruta de la tranquilidad del océano.",
  "🛶 Aventúrate en actividades acuáticas como kayak, paddleboard o snorkel en nuestras costas y ríos.",
  "🌄 Los amaneceres y atardeceres en Costa Rica son espectaculares. ¡No olvides tu cámara para capturarlos!",
  "🚶‍♂️ Caminar por senderos naturales te permite conectar con la flora y fauna local. ¡Lleva tus binoculares!",
  "🎨 Descubre la cultura local a través del arte, la música y las festividades tradicionales de cada provincia.",
  "🍍 Prueba la gastronomía típica de cada región. Desde ceviches hasta tamales, cada bocado es una experiencia.",
  "📸 Comparte tus aventuras con nosotros usando el hashtag #DestinosProvincias360 y podrías aparecer en nuestra galería.",
  "🌐 Mantente informado sobre eventos y actividades locales para aprovechar al máximo tu visita a cada provincia.",
  "🛌 Considera hospedarte en alojamientos sostenibles que apoyen la conservación del medio ambiente y la comunidad local."
];

let tipIndex = 0;

function startMochi() {
  document.getElementById('mochiOverlay').classList.add('hidden');
  
  setTimeout(() => {
    const mochiContainer = document.getElementById('mochiWidget');
    mochiContainer.style.display = 'flex';
    
    setTimeout(() => {
      mochiContainer.classList.add('visible');
      document.getElementById('mochiBubble').classList.add('active');
    }, 50);
  }, 500);
}

function toggleMochiBubble(event) {
  if (event) event.stopPropagation();
  const bubble = document.getElementById("mochiBubble");
  bubble.classList.toggle("active");
}

function nextMochiTip() {
  tipIndex = (tipIndex + 1) % mochiTips.length;
  document.getElementById("mochiText").innerHTML = mochiTips[tipIndex];
}

// Iniciar la carga de destinos al abrir la página
renderDestinations();