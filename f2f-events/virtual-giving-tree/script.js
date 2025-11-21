// Main donation URL (PayPal)
const DONATION_URL =
  "https://www.paypal.com/ncp/payment/SRV29WL8MNE5E";

// Ornament tiers – text only, no layout here
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
  const soundEl = document.getElementById("ornamentSound");

  let activeTier = null;

  function playChime() {
    if (!soundEl) return;
    const clone = soundEl.cloneNode();
    clone.play().catch(() => {
      // ignore autoplay errors
    });
  }

  function setActiveTier(tierId) {
    const tier = tiers.find((t) => t.id === tierId);
    if (!tier) return;

    activeTier = tier;

    ornaments.forEach((orn) => {
      orn.classList.toggle("vgt-active", orn.dataset.id === tierId);
    });

    titleEl.textContent = tier.title;
    amountEl.textContent =
      tier.amountLabel === "♥"
        ? "Custom amount"
        : `Suggested gift: ${tier.amountLabel}`;
    descEl.textContent = tier.description;

    // GA4 tracking for ornament selection
    if (window.gtag) {
      window.gtag("event", "vgt_select_tier", {
        event_category: "Virtual Giving Tree",
        event_label: tier.title,
        tier_id: tier.id,
        tier_amount: tier.amountLabel,
      });
    }
  }

  ornaments.forEach((orn) => {
    orn.addEventListener("click", () => {
      setActiveTier(orn.dataset.id);
      playChime();
    });

    // small hover chime (optional, keep quiet)
    orn.addEventListener("mouseenter", () => {
      // playChime(); // uncomment if you actually want hover sound
    });
  });

  donateBtn.addEventListener("click", () => {
    if (window.gtag) {
      window.gtag("event", "vgt_click_donate", {
        event_category: "Virtual Giving Tree",
        event_label: activeTier ? activeTier.title : "No tier selected",
        tier_id: activeTier ? activeTier.id : null,
        tier_amount: activeTier ? activeTier.amountLabel : null,
      });
    }

    if (DONATION_URL) {
      window.open(DONATION_URL, "_blank", "noopener");
    }
  });

  // Default selection when page loads
  setActiveTier("warm-wishes");
});
