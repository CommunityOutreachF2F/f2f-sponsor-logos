// Donation URL – your PayPal Virtual Giving Tree link
const DONATION_URL = "https://www.paypal.com/ncp/payment/SRV29WL8MNE5E";

// All tiers live here
const tiers = [
  {
    id: "warm-wishes",
    amountLabel: "$5",
    title: "Warm Wishes",
    description:
      "Your gift helps provide a holiday card and a small snack for someone in transitional housing. It is a simple reminder that they are seen and cared about.",
  },
  {
    id: "cozy-comfort",
    amountLabel: "$10",
    title: "Cozy Comfort",
    description:
      "Helps cover a pair of warm socks or gloves for a resident in need. These small comfort items can make cold days feel a little more bearable.",
  },
  {
    id: "fresh-start-kit",
    amountLabel: "$25",
    title: "Fresh Start Kit",
    description:
      "Helps stock basic hygiene kits for new arrivals. Clean socks, soap, shampoo, and other essentials help people feel human and hopeful on day one.",
  },
  {
    id: "hot-meal-hope",
    amountLabel: "$50",
    title: "Hot Meal and Hope",
    description:
      "Provides a warm, nutritious meal for a client or a family. Sharing a hot meal can bring comfort, connection, and a sense of belonging.",
  },
  {
    id: "bridge-stability",
    amountLabel: "$100",
    title: "Bridge to Stability",
    description:
      "Helps pay for transportation passes or ID fees needed for job applications, appointments, and services. This gift can remove small but powerful barriers to stability.",
  },
  {
    id: "safe-housing",
    amountLabel: "$250",
    title: "One Week of Safe Housing",
    description:
      "Contributes toward one week of safe, sober housing for someone in crisis. A secure place to sleep can be the first step toward long-term recovery.",
  },
  {
    id: "give-heart",
    amountLabel: "♥",
    title: "Give from the Heart",
    description:
      "Prefer a different amount? Choose your own gift and we will use it where it is needed most to support safe housing, essentials, and ongoing recovery support.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const ornaments = document.querySelectorAll(".vgt-ornament");
  const titleEl = document.getElementById("vgt-detail-title");
  const amountEl = document.getElementById("vgt-detail-amount");
  const descEl = document.getElementById("vgt-detail-description");
  const donateBtn = document.getElementById("vgt-donate-button");
  const soundEl = document.getElementById("ornamentSound");

  let activeTier = null;

  // Set labels on ornaments from the tiers array
  ornaments.forEach((orn) => {
    const id = orn.dataset.id;
    const tier = tiers.find((t) => t.id === id);
    const amountSpan = orn.querySelector(".vgt-amount");
    if (tier && amountSpan) {
      amountSpan.textContent = tier.amountLabel;
    }
  });

  function playChime() {
    if (!soundEl) return;
    try {
      soundEl.currentTime = 0;
      soundEl.play().catch(() => {});
    } catch (e) {
      console.warn("Chime play error:", e);
    }
  }

  function setActiveTier(tierId) {
    const tier = tiers.find((t) => t.id === tierId);
    if (!tier) return;

    activeTier = tier;

    // Highlight correct ornament
    ornaments.forEach((orn) => {
      orn.classList.toggle("vgt-active", orn.dataset.id === tierId);
    });

    // Update text on the right
    titleEl.textContent = tier.title;
    if (tier.amountLabel === "♥") {
      amountEl.textContent = "Custom amount";
    } else {
      amountEl.textContent = `Suggested gift: ${tier.amountLabel}`;
    }
    descEl.textContent = tier.description;

    playChime();
  }

  // Click handlers on ornaments
  ornaments.forEach((orn) => {
    orn.addEventListener("click", () => {
      const id = orn.dataset.id;
      setActiveTier(id);
    });
  });

  // Donate button just goes to your main donation URL
  donateBtn.addEventListener("click", () => {
    if (DONATION_URL) {
      window.open(DONATION_URL, "_blank", "noopener");
    }
  });

  // IMPORTANT: do NOT set a default tier here.
  // We leave the intro text from the HTML until the user clicks.
  // If you ever want a default again, call: setActiveTier("warm-wishes");
});
