// Donation target (your real PayPal link)
const DONATION_URL =
  "https://www.paypal.com/ncp/payment/SRV29WL8MNE5E";

// Tier definitions
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
      "Contributes toward one week of safe, sober housing for someone in crisis. A secure place to sleep can be the first step toward long term recovery.",
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
  const ornamentSound = document.getElementById("ornamentSound");

  let activeTier = null;

  function playChime() {
    if (!ornamentSound) return;
    try {
      ornamentSound.currentTime = 0;
      ornamentSound.play();
    } catch (e) {
      // ignore autoplay blocks
      console.warn("Chime blocked:", e.message);
    }
  }

  function setActiveTier(tierId) {
    const tier = tiers.find((t) => t.id === tierId);
    if (!tier) return;

    activeTier = tier;

    ornaments.forEach((orn) =>
      orn.classList.toggle("vgt-active", orn.dataset.id === tierId)
    );

    titleEl.textContent = tier.title;
    amountEl.textContent =
      tier.amountLabel === "♥"
        ? "Custom amount"
        : `Suggested gift: ${tier.amountLabel}`;
    descEl.textContent = tier.description;

    playChime();

    // GA4 event (safe even if gtag doesn't exist)
    if (typeof gtag === "function") {
      gtag("event", "select_content", {
        content_type: "virtual_giving_tree_tier",
        item_id: tier.id,
        value: tier.amountLabel,
      });
    }
  }

  ornaments.forEach((orn) => {
    orn.addEventListener("click", () => {
      setActiveTier(orn.dataset.id);
    });
  });

  donateBtn.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "virtual_giving_tree_donate_click", {
        method: "PayPal",
        tier_id: activeTier?.id || null,
      });
    }

    if (DONATION_URL) {
      window.open(DONATION_URL, "_blank");
    }
  });

  // INITIAL STATE: neutral intro message (no tier selected)
  titleEl.textContent = "Choose a tag to see your impact";
  amountEl.textContent = "";
  descEl.textContent =
    "Tap an ornament on the tree to learn what your gift can provide – from warm socks and hygiene kits to hot meals and safe housing.";
});
