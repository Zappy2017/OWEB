// Mock API
const mockPlaces = {
  data: [
    {
      country: "France",
      description:
        "Discover the romance of Paris, from the iconic Eiffel Tower to charming cafés, historic streets and world-famous museums. Enjoy beautiful architecture, river cruises and unforgettable French cuisine.",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      name: "Paris",
      popular: true,
      rating: 4.9,
    },
    {
      country: "Japan",
      description:
        "Experience the perfect combination of traditional Japanese culture and modern city life. Explore ancient temples, neon-lit streets, incredible food markets and peaceful gardens.",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      name: "Tokyo",
      popular: true,
      rating: 4.8,
    },
    {
      country: "Italy",
      description:
        "Explore the ancient streets of Rome and discover thousands of years of history. Visit the Colosseum, admire beautiful fountains and enjoy authentic Italian pizza and pasta.",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
      name: "Rome",
      popular: true,
      rating: 4.9,
    },
    {
      country: "Greece",
      description:
        "Escape to a beautiful Mediterranean island famous for its whitewashed buildings, blue domes and spectacular sunsets. Relax by the sea and explore traditional villages.",
      id: 4,
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      name: "Santorini",
      popular: true,
      rating: 4.8,
    },
    {
      country: "Indonesia",
      description:
        "Discover tropical beaches, lush rice terraces, ancient temples and beautiful waterfalls. Bali offers a perfect combination of adventure, relaxation and cultural experiences.",
      id: 5,
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      name: "Bali",
      popular: true,
      rating: 4.7,
    },
    {
      country: "United States",
      description:
        "Explore one of the world's most recognizable cities, featuring towering skyscrapers, Central Park, Times Square and the Statue of Liberty. Experience the energy of the Big Apple.",
      id: 6,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
      name: "New York",
      popular: true,
      rating: 4.8,
    },
    {
      country: "Japan",
      description:
        "Step into traditional Japan with beautiful wooden temples, peaceful bamboo forests and stunning gardens. Kyoto is especially magical during cherry blossom season.",
      id: 7,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      name: "Kyoto",
      popular: false,
      rating: 4.9,
    },
    {
      country: "United Arab Emirates",
      description:
        "Experience luxury, futuristic architecture and incredible entertainment. Visit the world's tallest building, explore enormous shopping malls and enjoy exciting desert adventures.",
      id: 8,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      name: "Dubai",
      popular: true,
      rating: 4.6,
    },
    {
      country: "Netherlands",
      description:
        "Enjoy picturesque canals, historic buildings, colorful flower markets and charming bicycle-filled streets. Amsterdam is perfect for exploring museums and relaxing waterfront cafés.",
      id: 9,
      image:
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&h=600&fit=crop",
      name: "Amsterdam",
      popular: false,
      rating: 4.7,
    },
    {
      country: "Switzerland",
      description:
        "Surround yourself with breathtaking mountain landscapes, crystal-clear lakes and traditional alpine villages. Enjoy hiking, skiing and spectacular panoramic train journeys.",
      id: 10,
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
      name: "Interlaken",
      popular: false,
      rating: 4.9,
    },
    {
      country: "Czech Republic",
      description:
        "Walk through fairytale streets filled with medieval architecture, beautiful bridges and historic castles. Prague offers an unforgettable atmosphere, especially around its old town.",
      id: 11,
      image:
        "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop",
      name: "Prague",
      popular: false,
      rating: 4.8,
    },
    {
      country: "Spain",
      description:
        "Enjoy sunny beaches, impressive architecture and vibrant nightlife. Discover the famous Sagrada Familia, stroll along La Rambla and experience authentic Spanish culture.",
      id: 12,
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop",
      name: "Barcelona",
      popular: true,
      rating: 4.7,
    },
    {
      country: "United Kingdom",
      description:
        "Discover a city where royal history meets modern culture. Visit Buckingham Palace, explore world-class museums and enjoy the incredible atmosphere along the River Thames.",
      id: 13,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      name: "London",
      popular: false,
      rating: 4.6,
    },
    {
      country: "Maldives",
      description:
        "Relax in a tropical paradise surrounded by turquoise waters, white sandy beaches and spectacular coral reefs. Enjoy snorkeling, diving and luxurious overwater villas.",
      id: 14,
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
      name: "Maldives",
      popular: true,
      rating: 4.9,
    },
    {
      country: "Turkey",
      description:
        "Experience a surreal landscape filled with extraordinary rock formations and colorful hot air balloons. Explore underground cities and enjoy unforgettable sunrise views.",
      id: 15,
      image:
        "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&h=600&fit=crop",
      name: "Cappadocia",
      popular: false,
      rating: 4.8,
    },
  ],
};

export function getPlaces() {
  return mockPlaces;
}

export function getUserPlaces() {
  let userPlaces = JSON.parse(localStorage.getItem("places"));
  return userPlaces;
}

export function setUserPlace(placeID, cost) {
  let userPlaces = getUserPlaces() ?? [];

  const place = mockPlaces.data.find((place) => place.id === Number(placeID));

  if (!place) return;

  if (userPlaces.some((p) => p.id === place.id)) return;

  const userPlace = {
    ...place,
    cost: Number(cost),
  };

  userPlaces.push(userPlace);

  localStorage.setItem("places", JSON.stringify(userPlaces));
}

export function removeUserPlace(placeID) {
  let userPlaces = getUserPlaces() ?? [];

  userPlaces = userPlaces.filter((place) => {
    return place.id !== placeID;
  });

  localStorage.setItem("places", JSON.stringify(userPlaces));
}

export function login() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: 1,
      name: "Stefan",
      email: "stefan@example.com",
      role: "admin",
      isLoggedIn: true,
    }),
  );
}

// Likes / dislikes / comments are stored per place in localStorage (mock only)
export function loadFeedback(id) {
  const fallback = { likes: 0, dislikes: 0, vote: null, comments: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(`place-feedback-${id}`));
    return saved ? { ...fallback, ...saved } : fallback;
  } catch {
    return fallback;
  }
}

export function saveFeedback(id, feedback) {
  localStorage.setItem(`place-feedback-${id}`, JSON.stringify(feedback));
}
