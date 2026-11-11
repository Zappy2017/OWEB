const mockPlaces = {
  data: [
    {
      country: "France",
      description:
        "Discover the romance of Paris, from the iconic Eiffel Tower to charming cafés, historic streets and world-famous museums. Enjoy beautiful architecture, river cruises and unforgettable French cuisine.",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame Cathedral",
        "Arc de Triomphe",
        "Montmartre",
      ],
      category: "City",
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
      images: [
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Shibuya Crossing",
        "Tokyo Tower",
        "Senso-ji Temple",
        "Meiji Shrine",
        "Shinjuku Gyoen",
      ],
      category: "City",
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
      images: [
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Colosseum",
        "Trevi Fountain",
        "Pantheon",
        "Roman Forum",
        "Vatican City",
      ],
      category: "Cultural",
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
      images: [
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Oia Village",
        "Fira",
        "Red Beach",
        "Akrotiri Archaeological Site",
        "Skaros Rock",
      ],
      category: "Island",
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
      images: [
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Uluwatu Temple",
        "Tegallalang Rice Terraces",
        "Sacred Monkey Forest",
        "Mount Batur",
        "Tanah Lot Temple",
      ],
      category: "Island",
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
      images: [
        "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Statue of Liberty",
        "Central Park",
        "Times Square",
        "Empire State Building",
        "Brooklyn Bridge",
      ],
      category: "City",
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
      images: [
        "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Fushimi Inari Shrine",
        "Arashiyama Bamboo Grove",
        "Kinkaku-ji Temple",
        "Kiyomizu-dera Temple",
        "Gion District",
      ],
      category: "Cultural",
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
      images: [
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Burj Khalifa",
        "Burj Al Arab",
        "Palm Jumeirah",
        "Dubai Mall",
        "Dubai Marina",
      ],
      category: "City",
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
      images: [
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Rijksmuseum",
        "Anne Frank House",
        "Van Gogh Museum",
        "Jordaan District",
        "Vondelpark",
      ],
      category: "City",
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
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Jungfraujoch",
        "Lake Thun",
        "Lake Brienz",
        "Harder Kulm",
        "Lauterbrunnen Valley",
      ],
      category: "Nature",
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
      images: [
        "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Charles Bridge",
        "Prague Castle",
        "Old Town Square",
        "Astronomical Clock",
        "St. Vitus Cathedral",
      ],
      category: "Cultural",
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
      images: [
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Sagrada Familia",
        "Park Güell",
        "Casa Batlló",
        "Gothic Quarter",
        "La Rambla",
      ],
      category: "City",
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
      images: [
        "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Big Ben",
        "Buckingham Palace",
        "Tower Bridge",
        "London Eye",
        "British Museum",
      ],
      category: "City",
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
      images: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Malé",
        "Banana Reef",
        "Maafushi Island",
        "Vaadhoo Island",
        "HP Reef",
      ],
      category: "Beach",
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
      images: [
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&h=600&fit=crop",
      ],
      must_visit: [
        "Göreme Open-Air Museum",
        "Uçhisar Castle",
        "Love Valley",
        "Derinkuyu Underground City",
        "Pasabag Valley",
      ],
      category: "Nature",
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

// Reviews are stored in localStorage (mock only) - swap for an API call later
export function loadReviews(STORAGE_KEY) {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveReview(review, STORAGE_KEY) {
  const reviews = loadReviews();
  reviews.unshift(review);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}
