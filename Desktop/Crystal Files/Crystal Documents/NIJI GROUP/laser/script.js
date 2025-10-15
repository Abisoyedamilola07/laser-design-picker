// Your designs array - UPDATE THESE WITH YOUR ACTUAL IMAGES
const designs = [
  {
    name: "Star Pattern",
    description:
      "Beautiful starry laser engraving perfect for personalization and gifts",
    price: "#40,000",
    img: "https://picsum.photos/400/300?random=1", // Update with your actual image filename
  },
  {
    name: "Heart Design",
    description:
      "Romantic heart-shaped laser cut ideal for jewelry or wedding decor",
    price: "#35,000",
    img: "imagesNLD-002.jpg", // Update with your actual image filename
  },
  {
    name: "Geometric Circle",
    description:
      "Modern circular geometric pattern for contemporary home decor",
    price: "#35,000",
    img: "imagesNLD-003.jpg", // Update with your actual image filename
  },
  {
    name: "Floral Motif",
    description: "Delicate floral laser design perfect for elegant accessories",
    price: "#35,000",
    img: "imagesNLD-004.jpg", // Update with your actual image filename
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
