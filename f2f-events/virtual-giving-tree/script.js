// Main donation link – now set to your PayPal Giving Tree payment URL
const DONATION_URL =
  "https://www.paypal.com/ncp/payment/SRV29WL8MNE5E";

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
  const chimeAudio = document.getElementById("vgt-chime-audio");
  const snowLayer = document.querySelector(".vgt-snow-layer");

  let activeTier = null;

  // --- Snowfall setup ---
  if (snowLayer) {
    const FLAKES = 60;
    for (let i = 0; i < FLAKES; i++) {
      const flake = document.createElement("span");
      flake.className = "vgt-snowflake";
      flake.style.left = Math.random() * 100 + "%";
      flake.style.animationDelay = (Math.random() * 10).toFixed(2) + "s";
      flake.style.animationDuration = (8 + Math.random() * 8).toFixed(2) + "s";
      flake.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
      snowLayer.appendChild(flake);
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

    // GA4 event (safe even if gtag is not defined)
    if (window.gtag) {
      window.gtag("event", "select_virtual_tree_tier", {
        tier_id: tier.id,
        tier_title: tier.title,
        amount_label: tier.amountLabel,
      });
    }
  }

  ornaments.forEach((orn) => {
    orn.addEventListener("click", () => {
      setActiveTier(orn.dataset.id);

      // Play chime sound on click (if file exists / allowed)
      if (chimeAudio) {
        try {
          chimeAudio.currentTime = 0;
          chimeAudio.play().catch(() => {});
        } catch (err) {
          // ignore if autoplay is blocked
        }
      }
    });
  });

  donateBtn.addEventListener("click", () => {
    // GA4 event for donate button
    if (window.gtag) {
      window.gtag("event", "click_virtual_tree_donate", {
        tier_id: activeTier ? activeTier.id : null,
        tier_title: activeTier ? activeTier.title : null,
        amount_label: activeTier ? activeTier.amountLabel : null,
      });
    }

    if (DONATION_URL) {
      window.open(DONATION_URL, "_blank");
    }
  });

  // Optionally select a default ornament on load
  // setActiveTier("warm-wishes");
});
