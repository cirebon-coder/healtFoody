
const { makanan } = data;

const container = document.querySelector(".content");

function fetchData(data) {
  data.forEach((data) => {
    const card = `
      <div class="card" >
              <img class="desc" data-id="${data.id}" src="${data.gambar}" alt="${data.id}" loading="lazy"/>
            <div class="description">
              <a href="details/detail-eksplorasi.html">
              <h2 class="name" data-id="${data.id}">${data.nama}</h2>
            </a>
              <p class="desc" data-id="${data.id}">${data.deskripsi}
              </p>
              <p class="tag" ><i class="fas fa-tag"></i> ${data.kategori}</p>
            </div>
          </div>
      `;

    container.innerHTML += card;
  });
}

fetchData(makanan);

container.onclick = (e) => {
  // console.log(e.target);
  if (e.target.className == "name" || e.target.className == "desc") {
    const id = e.target.getAttribute("data-id");
    localStorage.setItem("data-food", id);
    window.location.href = "details/detail-eksplorasi.html"
    // console.log(id);
  }
};