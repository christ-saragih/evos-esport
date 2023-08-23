// 1. togle class active untuk menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// 1. toggle class active untuk search form (Part 2)
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault(); // aksi defaultnya tidak dilakukan
};

// 2. toggle class active untuk shopping card (Part 2)
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// 2. klik di luar elemen
const menu = document.querySelector("#menu");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// 3 dan 4. button kirim pesan
// menampilkan alert saat mengklik button jika ada data yang belum terisi
// menampilkan animasi button saat mengklik button tersebut jika data telah terisi semua
const submit_btn = document.querySelector(".btn-submit");

submit_btn.addEventListener("click", (event) => {
  // Cek apakah field pada form sudah terisi semua
  let formValid = true;
  const formFields =
    document.forms["myForm"].querySelectorAll("input,textarea");

  formFields.forEach((field) => {
    if (field.value.trim() === "") {
      formValid = false;
      alert(field.name + " harus diisi");
    }
  });

  if (formValid) {
    // Animasi loading pada tombol
    submit_btn.classList.add("submiting");
    submit_btn.innerHTML = "";

    setTimeout(() => {
      submit_btn.classList.remove("submiting");
      submit_btn.innerHTML = "Terkirim";
    }, 2500);
  }

  event.preventDefault();
});

// 5. buat button baca selengkapnya dan baca lebih sedikit
const parentContainer = document.querySelector(".row");
parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("btn-baca-selengkapnya");
  if (!isReadMoreBtn) return;
  const currentText =
    event.target.parentNode.querySelector(".baca-selengkapnya");
  currentText.classList.toggle("baca-selengkapnya--tampil");
  current.textContent = current.textContent.includes("Baca selengkapnya")
    ? "Baca lebih sedikit..."
    : "Baca selengkapnya...";
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
