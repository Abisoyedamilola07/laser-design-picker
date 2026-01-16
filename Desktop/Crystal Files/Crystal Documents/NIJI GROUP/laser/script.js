const designs = [
  {
    name: "NLD-01",
    description:
      "Beautiful starry laser engraving perfect for personalization and gifts",
    price: "#40,000",
    img: "images/nld-1.jpg",
  },
  {
    name: "NLD-02",
    description:
      "Romantic heart-shaped laser cut ideal for jewelry or wedding decor",
    price: "#35,000",
    img: "images/nld-2.jpg",
  },
  {
    name: "NLD-03",
    description:
      "Modern circular geometric pattern for contemporary home decor",
    price: "#35,000",
    img: "images/nld-3.jpg",
  },
  {
    name: "NLD-04",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-4.jpg",
  },
  {
    name: "NLD-05",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-5.jpg",
  },
  {
    name: "NLD-06",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-6.jpg",
  },
  {
    name: "NLD-07",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-7.jpg",
  },
  {
    name: "NLD-08",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-8.jpg",
  },
  {
    name: "NLD-09",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-9.jpg",
  },
  {
    name: "NLD-10",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-10.jpg",
  },
  {
    name: "NLD-11",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-11.jpg",
  },
  {
    name: "NLD-12",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-12.jpg",
  },
  {
    name: "NLD-13",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-13.jpg",
  },
  {
    name: "NLD-14",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-14.jpg",
  },
  {
    name: "NLD-15",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-15.jpg",
  },
  {
    name: "NLD-16",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-16.jpg",
  },
  {
    name: "NLD-17",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-17.jpg",
  },
  {
    name: "NLD-18",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "images/nld-18.jpg", // ← no comma after last item (safe style)
  },
];

// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {
  displayDesigns();
});

function displayDesigns() {
  const designsDiv = document.getElementById("designs");

  designs.forEach((design, index) => {
    // Create card container
    const card = document.createElement("div");
    card.className = "design-card";
    card.dataset.index = index;

    // Image container
    const imgContainer = document.createElement("div");
    imgContainer.className = "image-container";

    const img = document.createElement("img");
    img.src = design.img;
    img.alt = `${design.name} laser design`;
    img.className = "design-image";
    img.loading = "lazy";

    // Fallback for broken images
    img.onerror = function () {
      this.style.display = "none";
      const fallback = document.createElement("div");
      fallback.className = "image-fallback";
      fallback.textContent = "🖼️ Image Loading...";
      imgContainer.appendChild(fallback);
    };

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    // Design details
    const name = document.createElement("h3");
    name.textContent = design.name;
    card.appendChild(name);

    const desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = design.description;
    card.appendChild(desc);

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = design.price;
    card.appendChild(price);

    // Select button
    const button = document.createElement("button");
    button.className = "select-btn";
    button.textContent = "Select Design";
    button.onclick = (e) => selectDesign(design, card);
    card.appendChild(button);

    designsDiv.appendChild(card);
  });
}

let selectedDesign = null;

function selectDesign(design, cardElement) {
  selectedDesign = design;

  // Update hidden form field
  document.getElementById("selected-design").value = JSON.stringify(design);

  // Visual feedback
  document.querySelectorAll(".design-card").forEach((c) => {
    c.classList.remove("selected");
  });
  cardElement.classList.add("selected");

  // Show selection message
  const messageDiv = document.getElementById("selection-message");
  messageDiv.style.display = "block";
  messageDiv.innerHTML = `
        <strong>✅ Selected:</strong> ${design.name}<br>
        <strong>💰 Price:</strong> ${design.price}<br>
        <em>Fill out details below to place order</em>
    `;

  // Enable submit button
  document.getElementById("submit-btn").disabled = false;

  // Scroll to form
  document.getElementById("order-form").scrollIntoView({ behavior: "smooth" });
}

// Form submission
document.getElementById("picker-form").addEventListener("submit", function (e) {
  if (!selectedDesign) {
    e.preventDefault();
    alert("Please select a design first!");
    return;
  }

  // Formspree will handle the submission
  // You can add loading state if desired
  document.getElementById("submit-btn").textContent = "Sending...";
  document.getElementById("submit-btn").disabled = true;
});
