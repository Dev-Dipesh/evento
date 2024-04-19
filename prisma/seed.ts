import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const events = [
  {
    id: 1,
    name: "DJ Practice Session",
    slug: "dj-practice-session",
    city: "Austin",
    location: "Austin Music Hall",
    date: "2030-10-12T00:00:00.000Z",
    organizerName: "DJ Inc.",
    imageUrl: "https://source.unsplash.com/random/900x700/?dj-practice-session",
    description:
      "Join us for an immersive DJ practice session at the DJ Beats Workshop! Whether you're a beginner aspiring to spin the decks or an experienced DJ looking to refine your skills, this event is tailored just for you. Dive into the world of beats, mixes, and electronic rhythms under the guidance of seasoned DJs and music producers. Showcase your skills during our open decks session. Share your favorite tracks, experiment with live remixing, and receive applause and feedback from a supportive audience.",
  },
  {
    id: 2,
    name: "Harmony Festival",
    slug: "harmony-festival",
    city: "Austin",
    location: "Austin Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "Music Enthusiasts LLC",
    imageUrl: "https://source.unsplash.com/random/900x700/?harmony-festival",
    description:
      "Harmony Festival is a celebration of all music genres, bringing together musicians, artists, and music enthusiasts from around the world. Experience a day filled with live performances, interactive workshops, and a vibrant atmosphere of creativity and harmony. Join us for an unforgettable musical journey!",
  },
  {
    id: 3,
    name: "3D Animation Workshop",
    slug: "3d-animation-workshop",
    city: "Austin",
    location: "Austin Convention Center",
    date: "2030-12-08T00:00:00.000Z",
    organizerName: "3D Animators Inc.",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?3d-animation-workshop",
    description:
      "Dive into the captivating world of 3D animation at our exclusive 3D Animation Masterclass! Whether you're an aspiring animator, a student studying animation, or a professional looking to enhance your skills, this workshop offers a unique opportunity to learn from industry experts and elevate your animation prowess.",
  },
  {
    id: 4,
    name: "Rock the City Concert",
    slug: "rock-the-city-concert",
    city: "Austin",
    location: "Austin Music Hall",
    date: "2030-11-18T00:00:00.000Z",
    organizerName: "Rock On Productions",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?rock-the-city-concert",
    description:
      "Get ready to rock out at Rock the City Concert! Experience electrifying performances by top rock bands, enjoy high-energy music, and immerse yourself in an unforgettable night of pure rock and roll.",
  },
  {
    id: 5,
    name: "Artisan Craft Fair",
    slug: "artisan-craft-fair",
    city: "Seattle",
    location: "Seattle Exhibition Center",
    date: "2030-12-01T00:00:00.000Z",
    organizerName: "Craftsmanship Guild",
    imageUrl: "https://source.unsplash.com/random/900x700/?artisan-craft-fair",
    description:
      "Discover unique handmade crafts and artworks at the Artisan Craft Fair. Meet talented artisans, shop for one-of-a-kind items, and support local craftsmanship. Join us for a day of creativity and craftsmanship.",
  },
  {
    id: 6,
    name: "Jazz Fusion Night",
    slug: "jazz-fusion-night",
    city: "Austin",
    location: "Austin Jazz Lounge",
    date: "2030-11-29T00:00:00.000Z",
    organizerName: "Groove Masters Productions",
    imageUrl: "https://source.unsplash.com/random/900x700/?jazz-fusion-night",
    description:
      "Indulge in the smooth melodies and rhythmic beats of jazz fusion at Jazz Fusion Night. Experience world-class jazz performances, savor delicious cocktails, and immerse yourself in the soulful ambiance of live jazz music.",
  },
  {
    id: 7,
    name: "Indie Music Showcase",
    slug: "indie-music-showcase",
    city: "Austin",
    location: "Austin Indie Spot",
    date: "2030-11-25T00:00:00.000Z",
    organizerName: "Indie Vibes Records",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?indie-music-showcase",
    description:
      "Discover the next big indie artists at the Indie Music Showcase. Experience live performances by emerging talents, support independent music, and be part of a vibrant community of music enthusiasts and artists.",
  },
  {
    id: 8,
    name: "Global Food Festival",
    slug: "global-food-festival",
    city: "Seattle",
    location: "Seattle Waterfront Park",
    date: "2030-10-30T00:00:00.000Z",
    organizerName: "Foodie Ventures Inc.",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?global-food-festival",
    description:
      "Embark on a culinary journey around the world at the Global Food Festival. Delight your taste buds with international cuisines, cooking demonstrations, and food tastings. Experience the flavors of different cultures in one delicious event.",
  },
  {
    id: 9,
    name: "Tech Innovators Summit",
    slug: "tech-innovators-summit",
    city: "Seattle",
    location: "Seattle Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "InnovateTech Inc.",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?tech-innovators-summit",
    description:
      "The Tech Innovators Summit is where visionaries, entrepreneurs, and tech enthusiasts converge. Explore the latest technological advancements, attend insightful keynotes from industry leaders, and participate in hands-on workshops. Connect with innovators, pitch your ideas, and be a part of shaping the future of technology.",
  },
  {
    id: 10,
    name: "Enchanted Garden Gala",
    slug: "enchanted-garden-gala",
    city: "Austin",
    location: "Austin Museum of Art",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Cultural Garden Society",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?enchanted-garden-gala",
    description:
      "Step into a world of wonder at the Enchanted Garden Gala, a magical evening of art, music, and fantasy. Explore enchanting garden installations, experience live performances by world-class musicians and dancers, and indulge in gourmet delicacies. Dress in your most glamorous attire and immerse yourself in a night of elegance and enchantment.",
  },
  {
    id: 11,
    name: "Comedy Extravaganza",
    slug: "comedy-extravaganza",
    city: "Austin",
    location: "Austin Laugh Factory",
    date: "2030-11-06T00:00:00.000Z",
    organizerName: "Laugh Productions",
    imageUrl: "https://source.unsplash.com/random/900x700/?comedy-extravaganza",
    description:
      "Prepare for a night of laughter with top comedians from around the world. Enjoy stand-up, improv, and sketches that will have you in stitches!",
  },
  {
    id: 12,
    name: "Science and Space Expo",
    slug: "science-space-expo",
    city: "Seattle",
    location: "Seattle Science Center",
    date: "2030-10-29T00:00:00.000Z",
    organizerName: "Cosmic Explorers Society",
    imageUrl: "https://source.unsplash.com/random/900x700/?science-space-expo",
    description:
      "Explore the wonders of science and space at this interactive expo. Engage in hands-on experiments, meet scientists, and learn about the mysteries of the universe.",
  },
  {
    id: 13,
    name: "Fashion Runway",
    slug: "fashion-runway",
    city: "Austin",
    location: "Austin Fashion Week Venue",
    date: "2030-11-12T00:00:00.000Z",
    organizerName: "Chic Trends Agency",
    imageUrl: "https://source.unsplash.com/random/900x700/?fashion-runway",
    description:
      "Witness the latest trends on the runway. Top designers will showcase their collections, setting the stage for the future of fashion.",
  },
  {
    id: 14,
    name: "Culinary Masterclass",
    slug: "culinary-masterclass",
    city: "Seattle",
    location: "Seattle Epicurean Institute",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Gourmet Chefs Society",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?culinary-masterclass",
    description:
      "Join renowned chefs for a culinary journey. Learn cooking techniques, taste exquisite dishes, and elevate your skills in the art of gastronomy.",
  },
  {
    id: 15,
    name: "Film Buffs Symposium",
    slug: "film-buffs-symposium",
    city: "Austin",
    location: "Austin Film Institute",
    date: "2030-11-08T00:00:00.000Z",
    organizerName: "Cinema Society",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?film-buffs-symposium",
    description:
      "A gathering for film enthusiasts! Screen classic movies, engage in discussions with filmmakers, and gain insights into the world of cinema.",
  },
  {
    id: 16,
    name: "Literary Salon",
    slug: "literary-salon",
    city: "Seattle",
    location: "Seattle & Co. Bookstore",
    date: "2030-12-15T00:00:00.000Z",
    organizerName: "Words Society",
    imageUrl: "https://source.unsplash.com/random/900x700/?literary-salon",
    description:
      "Celebrate the written word at this literary gathering. Listen to readings by acclaimed authors, participate in book discussions, and embrace the magic of storytelling.",
  },
  {
    id: 17,
    name: "Wellness Expo",
    slug: "wellness-expo",
    city: "Austin",
    location: "Austin Convention Center",
    date: "2030-11-30T00:00:00.000Z",
    organizerName: "Wellness Warriors Inc.",
    imageUrl: "https://source.unsplash.com/random/900x700/?wellness-expo",
    description:
      "Immerse yourself in the world of fitness and well-being. Attend fitness classes, learn about nutrition, and explore holistic approaches to health.",
  },
  {
    id: 18,
    name: "Digital Art Symposium",
    slug: "digital-art-symposium",
    city: "Seattle",
    location: "Seattle Art Gallery",
    date: "2030-11-01T00:00:00.000Z",
    organizerName: "Tech Creatives Collective",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?digital-art-symposium",
    description:
      "Discover the intersection of technology and art. Experience digital art installations, attend VR workshops, and meet digital artists pushing creative boundaries.",
  },
  {
    id: 19,
    name: "Dance Fusion Festival",
    slug: "dance-fusion-festival",
    city: "Austin",
    location: "Austin Street Dance Studio",
    date: "2030-11-28T00:00:00.000Z",
    organizerName: "Rhythm Revolution",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?dance-fusion-festival",
    description:
      "Experience a blend of dance styles from around the world. Participate in dance workshops, watch electrifying performances, and dance the night away.",
  },
  {
    id: 20,
    name: "Anime Expo",
    slug: "tokyo-anime-expo",
    city: "Tokyo",
    location: "Tokyo Dome",
    date: "2030-10-05T00:00:00.000Z",
    organizerName: "Anime World",
    imageUrl: "https://source.unsplash.com/random/900x700/?tokyo-anime-expo",
    description:
      "Join thousands of anime fans at the Tokyo Anime Expo. Experience cosplay competitions, anime screenings, and meet your favorite manga artists.",
  },
  {
    id: 21,
    name: "Film Marathon",
    slug: "tokyo-film-marathon",
    city: "Tokyo",
    location: "Tokyo International Forum",
    date: "2030-10-25T00:00:00.000Z",
    organizerName: "Cinema Tokyo Group",
    imageUrl: "https://source.unsplash.com/random/900x700/?tokyo-film-marathon",
    description:
      "Enjoy a curated selection of international and Japanese films at the Tokyo Film Marathon. Engage with filmmakers in panel discussions and exclusive screenings.",
  },
  {
    id: 22,
    name: "Gaming Convention",
    slug: "tokyo-gaming-convention",
    city: "Tokyo",
    location: "Big Sight Convention Center",
    date: "2030-12-15T00:00:00.000Z",
    organizerName: "Game On",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?tokyo-gaming-convention",
    description:
      "Dive into the latest in gaming technology, try new game demos, and participate in e-sports tournaments at the Tokyo Gaming Convention.",
  },
  {
    id: 23,
    name: "Fashion Week",
    slug: "tokyo-fashion-week",
    city: "Tokyo",
    location: "Harajuku Park",
    date: "2031-03-20T00:00:00.000Z",
    organizerName: "Fashionista Tokyo",
    imageUrl: "https://source.unsplash.com/random/900x700/?tokyo-fashion-week",
    description:
      "Experience the cutting-edge of fashion at Tokyo Fashion Week. See the latest trends and designs from top Japanese and international designers.",
  },
  {
    id: 24,
    name: "Jazz Festival",
    slug: "tokyo-jazz-festival",
    city: "Tokyo",
    location: "Ueno Park",
    date: "2031-05-05T00:00:00.000Z",
    organizerName: "Jazz Tokyo",
    imageUrl: "https://source.unsplash.com/random/900x700/?tokyo-jazz-festival",
    description:
      "Join us at the Tokyo Jazz Festival for an enchanting evening of jazz. Enjoy performances by renowned jazz musicians from around the world.",
  },
  {
    id: 25,
    name: "International Art Fair",
    slug: "tokyo-international-art-fair",
    city: "Tokyo",
    location: "National Art Center",
    date: "2031-06-25T00:00:00.000Z",
    organizerName: "Art Tokyo",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?tokyo-international-art-fair",
    description:
      "Explore contemporary art from around the globe at the Tokyo International Art Fair. Meet artists and acquire unique artworks in a vibrant atmosphere.",
  },
  {
    id: 26,
    name: "Book Fair",
    slug: "tokyo-book-fair",
    city: "Tokyo",
    location: "Tokyo Metropolitan Gymnasium",
    date: "2031-07-10T00:00:00.000Z",
    organizerName: "Read Japan",
    imageUrl: "https://source.unsplash.com/random/900x700/?tokyo-book-fair",
    description:
      "Discover the latest in literature at the Tokyo Book Fair. Attend book signings, meet authors, and participate in literary workshops.",
  },
  {
    id: 27,
    name: "Literary Festival",
    slug: "london-literary-festival",
    city: "London",
    location: "Queen Elizabeth Hall",
    date: "2030-09-10T00:00:00.000Z",
    organizerName: "Readers United Ltd.",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?london-literary-festival",
    description:
      "Delve into the world of books at the London Literary Festival. Featuring renowned authors and poets for book signings, lectures, and workshops.",
  },
  {
    id: 28,
    name: "Coffee Festival",
    slug: "london-coffee-festival",
    city: "London",
    location: "The Old Truman Brewery",
    date: "2031-04-25T00:00:00.000Z",
    organizerName: "Brew Masters",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?london-coffee-festival",
    description:
      "Experience the vibrant coffee culture at the London Coffee Festival. Taste exceptional coffee blends, attend barista workshops, and engage in live coffee-making competitions.",
  },
  {
    id: 29,
    name: "Tech Symposium",
    slug: "london-tech-symposium",
    city: "London",
    location: "ExCel London",
    date: "2031-01-15T00:00:00.000Z",
    organizerName: "Tech Innovators UK",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?london-tech-symposium",
    description:
      "Join leading technology experts at the London Tech Symposium. Explore the latest advancements in AI, cybersecurity, and software development through interactive exhibits and keynotes.",
  },
  {
    id: 30,
    name: "Jazz Weekend",
    slug: "london-jazz-weekend",
    city: "London",
    location: "Ronnie Scott's Jazz Club",
    date: "2031-06-10T00:00:00.000Z",
    organizerName: "Jazz Live",
    imageUrl: "https://source.unsplash.com/random/900x700/?london-jazz-weekend",
    description:
      "Immerse yourself in smooth jazz at the London Jazz Weekend. Enjoy live performances by some of the best jazz musicians and bands from around the world.",
  },
  {
    id: 31,
    name: "Fashion Parade",
    slug: "london-fashion-parade",
    city: "London",
    location: "Somerset House",
    date: "2031-02-20T00:00:00.000Z",
    organizerName: "Fashion Fest",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?london-fashion-parade",
    description:
      "Witness the grandeur of London Fashion Parade, showcasing innovative designs and collections from top and emerging fashion talents.",
  },
  {
    id: 32,
    name: "Green Expo",
    slug: "london-green-expo",
    city: "London",
    location: "Kew Gardens",
    date: "2031-08-05T00:00:00.000Z",
    organizerName: "Eco World",
    imageUrl: "https://source.unsplash.com/random/900x700/?london-green-expo",
    description:
      "Explore sustainable living at the London Green Expo. Learn about eco-friendly technologies, organic farming, and green energy solutions.",
  },
  {
    id: 33,
    name: "Film Week",
    slug: "london-film-week",
    city: "London",
    location: "BFI Southbank",
    date: "2031-12-01T00:00:00.000Z",
    organizerName: "Cinema City",
    imageUrl: "https://source.unsplash.com/random/900x700/?london-film-week",
    description:
      "Celebrate the art of filmmaking at London Film Week. Enjoy screenings of classic and contemporary films, director Q&As, and industry panels.",
  },
  {
    id: 34,
    name: "Fashion Week",
    slug: "paris-fashion-week",
    city: "Paris",
    location: "Louvre Museum",
    date: "2030-03-01T00:00:00.000Z",
    organizerName: "Fashion Paris",
    imageUrl: "https://source.unsplash.com/random/900x700/?paris-fashion-week",
    description:
      "Experience the pinnacle of haute couture at Paris Fashion Week. Witness groundbreaking designs from the world’s foremost fashion houses.",
  },
  {
    id: 35,
    name: "Wine Festival",
    slug: "paris-wine-festival",
    city: "Paris",
    location: "Palais des Congrès",
    date: "2030-07-15T00:00:00.000Z",
    organizerName: "Vineyards Elite",
    imageUrl: "https://source.unsplash.com/random/900x700/?paris-wine-festival",
    description:
      "Indulge in the finest wines from around France and the world at the Paris Wine Festival. Participate in tastings, workshops, and sommelier-led sessions.",
  },
  {
    id: 36,
    name: "Art Biennale",
    slug: "paris-art-biennale",
    city: "Paris",
    location: "Grand Palais",
    date: "2030-05-20T00:00:00.000Z",
    organizerName: "Art Innovate Paris",
    imageUrl: "https://source.unsplash.com/random/900x700/?paris-art-biennale",
    description:
      "Discover contemporary art trends at the Paris Art Biennale. View installations and artworks from internationally acclaimed artists.",
  },
  {
    id: 37,
    name: "Electronic Music Festival",
    slug: "paris-electronic-music-festival",
    city: "Paris",
    location: "La Villette",
    date: "2030-09-10T00:00:00.000Z",
    organizerName: "Electro Beats",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?paris-electronic-music-festival",
    description:
      "Dance to the beats of top electronic music artists at the Paris Electronic Music Festival. Enjoy an immersive audiovisual experience.",
  },
  {
    id: 38,
    name: "Literature Conference",
    slug: "paris-literature-conference",
    city: "Paris",
    location: "Institut du Monde Arabe",
    date: "2030-11-05T00:00:00.000Z",
    organizerName: "Literary Minds",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?paris-literature-conference",
    description:
      "Engage with contemporary authors and thinkers at the Paris Literature Conference. Attend readings, debates, and workshops on modern literary themes.",
  },
  {
    id: 39,
    name: "Jazz Nights",
    slug: "paris-jazz-nights",
    city: "Paris",
    location: "New Morning Jazz Club",
    date: "2030-06-30T00:00:00.000Z",
    organizerName: "Jazz en Paris",
    imageUrl: "https://source.unsplash.com/random/900x700/?paris-jazz-nights",
    description:
      "Experience the magic of live jazz at Paris Jazz Nights. Featuring performances by legendary and upcoming jazz artists in an intimate setting.",
  },
  {
    id: 40,
    name: "Culinary Expo",
    slug: "paris-culinary-expo",
    city: "Paris",
    location: "Porte de Versailles",
    date: "2030-08-20T00:00:00.000Z",
    organizerName: "Culinary Arts Paris",
    imageUrl: "https://source.unsplash.com/random/900x700/?paris-culinary-expo",
    description:
      "Explore global cuisines and the latest culinary innovations at the Paris Culinary Expo. Attend demonstrations by celebrated chefs and culinary experts.",
  },
  {
    id: 41,
    name: "Film Festival",
    slug: "los-angeles-film-festival",
    city: "Los Angeles",
    location: "Dolby Theatre",
    date: "2030-04-15T00:00:00.000Z",
    organizerName: "LA Cinematic",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?los-angeles-film-festival",
    description:
      "Celebrate the art of filmmaking at the Los Angeles Film Festival. Watch premieres, meet filmmakers, and participate in industry panels.",
  },
  {
    id: 42,
    name: "Food Expo",
    slug: "los-angeles-food-expo",
    city: "Los Angeles",
    location: "LA Convention Center",
    date: "2030-12-05T00:00:00.000Z",
    organizerName: "Culinary Delights Inc.",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?los-angeles-food-expo",
    description:
      "Savor the flavors at the Los Angeles Food Expo. Enjoy culinary demonstrations, taste international dishes, and participate in cooking challenges hosted by celebrity chefs.",
  },
  {
    id: 43,
    name: "Book Fair",
    slug: "los-angeles-book-fair",
    city: "Los Angeles",
    location: "Staples Center",
    date: "2030-10-10T00:00:00.000Z",
    organizerName: "Readers LA",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?los-angeles-book-fair",
    description:
      "Explore a vast selection of books from around the world at the Los Angeles Book Fair. Meet bestselling authors and participate in literary workshops.",
  },
  {
    id: 44,
    name: "Tech Conference",
    slug: "los-angeles-tech-conference",
    city: "Los Angeles",
    location: "Silicon Beach",
    date: "2031-02-20T00:00:00.000Z",
    organizerName: "Tech Innovate LA",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?los-angeles-tech-conference",
    description:
      "Join tech enthusiasts at the Los Angeles Tech Conference to discuss the latest in digital innovation, startups, and Silicon Beach trends.",
  },
  {
    id: 45,
    name: "Jazz Festival",
    slug: "los-angeles-jazz-festival",
    city: "Los Angeles",
    location: "Hollywood Bowl",
    date: "2030-07-25T00:00:00.000Z",
    organizerName: "Jazz LA",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?los-angeles-jazz-festival",
    description:
      "Experience an unforgettable night of jazz under the stars at the Los Angeles Jazz Festival. Featuring world-renowned artists and fresh talents.",
  },
  {
    id: 46,
    name: "Fashion Week",
    slug: "los-angeles-fashion-week",
    city: "Los Angeles",
    location: "Fashion District",
    date: "2030-03-05T00:00:00.000Z",
    organizerName: "LA Style",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?los-angeles-fashion-week",
    description:
      "Showcasing the latest trends from top designers and brands at Los Angeles Fashion Week. Be part of the glamour and excitement.",
  },
  {
    id: 47,
    name: "Green Tech Summit",
    slug: "los-angeles-green-tech-summit",
    city: "Los Angeles",
    location: "The Broad",
    date: "2030-08-30T00:00:00.000Z",
    organizerName: "Eco Tech",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?los-angeles-green-tech-summit",
    description:
      "Explore the forefront of eco-friendly technology at the Los Angeles Green Tech Summit. Learn about sustainable practices and green innovations.",
  },
  {
    id: 48,
    name: "Fashion Showcase",
    slug: "new-york-fashion-showcase",
    city: "New York",
    location: "Brooklyn Navy Yard",
    date: "2030-08-30T00:00:00.000Z",
    organizerName: "Fashion Forward",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?new-york-fashion-showcase",
    description:
      "Step into the spotlight at the New York Fashion Showcase. Witness the latest trends and designs from world-famous fashion designers in one of the fashion capitals of the world.",
  },
  {
    id: 49,
    name: "Tech Expo",
    slug: "new-york-tech-expo",
    city: "New York",
    location: "Javits Center",
    date: "2030-10-15T00:00:00.000Z",
    organizerName: "NY Tech",
    imageUrl: "https://source.unsplash.com/random/900x700/?new-york-tech-expo",
    description:
      "Explore cutting-edge technology at the New York Tech Expo. Network with industry leaders, discover new tech startups, and participate in interactive workshops.",
  },
  {
    id: 50,
    name: "Jazz & Blues Festival",
    slug: "new-york-jazz-blues-festival",
    city: "New York",
    location: "Central Park",
    date: "2030-09-05T00:00:00.000Z",
    organizerName: "Jazz & Blues NYC",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?new-york-jazz-blues-festival",
    description:
      "Enjoy a soulful experience at the New York Jazz & Blues Festival. Celebrate the heritage of jazz and blues with top artists from around the globe.",
  },
  {
    id: 51,
    name: "Literary Retreat",
    slug: "new-york-literary-retreat",
    city: "New York",
    location: "The New York Public Library",
    date: "2030-11-20T00:00:00.000Z",
    organizerName: "Literary NY",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?new-york-literary-retreat",
    description:
      "Immerse yourself in the world of books at the New York Literary Retreat. Engage with authors, attend writing workshops, and explore rare manuscripts.",
  },
  {
    id: 52,
    name: "Art Biennial",
    slug: "new-york-art-biennial",
    city: "New York",
    location: "Whitney Museum",
    date: "2031-04-10T00:00:00.000Z",
    organizerName: "NY Art Scene",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?new-york-art-biennial",
    description:
      "Experience contemporary art at its peak at the New York Art Biennial. Explore groundbreaking installations and paintings from avant-garde artists.",
  },
  {
    id: 53,
    name: "Culinary Festival",
    slug: "new-york-culinary-festival",
    city: "New York",
    location: "Union Square",
    date: "2030-06-25T00:00:00.000Z",
    organizerName: "Culinary NY",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?new-york-culinary-festival",
    description:
      "Taste dishes from world-renowned chefs at the New York Culinary Festival. Participate in food tastings, cooking demos, and gourmet workshops.",
  },
  {
    id: 54,
    name: "Green Tech Summit",
    slug: "new-york-green-tech-summit",
    city: "New York",
    location: "Brooklyn Tech Hub",
    date: "2030-07-20T00:00:00.000Z",
    organizerName: "Green Innovate NY",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?new-york-green-tech-summit",
    description:
      "Discover sustainable technologies at the New York Green Tech Summit. Engage with experts on solar energy, recycling, and sustainable urban living.",
  },
  {
    id: 55,
    name: "Tech Summit",
    slug: "san-francisco-tech-summit",
    city: "San Francisco",
    location: "Moscone Center",
    date: "2030-11-30T00:00:00.000Z",
    organizerName: "Innovate SF",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?san-francisco-tech-summit",
    description:
      "Explore the future of technology at the San Francisco Tech Summit. Engage with tech leaders, startups, and innovators.",
  },
  {
    id: 56,
    name: "Jazz Festival",
    slug: "san-francisco-jazz-festival",
    city: "San Francisco",
    location: "Fillmore Jazz District",
    date: "2031-06-05T00:00:00.000Z",
    organizerName: "Jazz SF",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?san-francisco-jazz-festival",
    description:
      "Enjoy a weekend of live jazz music at the San Francisco Jazz Festival. Featuring local and international jazz artists in the heart of the city.",
  },
  {
    id: 57,
    name: "Film Noir Festival",
    slug: "san-francisco-film-noir-festival",
    city: "San Francisco",
    location: "Castro Theatre",
    date: "2030-10-21T00:00:00.000Z",
    organizerName: "Noir Cinema SF",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?san-francisco-film-noir-festival",
    description:
      "Step back in time and enjoy classic and new film noir at the San Francisco Film Noir Festival. Featuring discussions, screenings, and guest speakers.",
  },
  {
    id: 58,
    name: "Food Carnival",
    slug: "san-francisco-food-carnival",
    city: "San Francisco",
    location: "Pier 39",
    date: "2030-08-15T00:00:00.000Z",
    organizerName: "Foodie SF",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?san-francisco-food-carnival",
    description:
      "Taste your way through San Francisco's best eats at the Food Carnival. Enjoy street food, seafood, and international cuisines.",
  },
  {
    id: 59,
    name: "Art & Design Expo",
    slug: "san-francisco-art-design-expo",
    city: "San Francisco",
    location: "Fort Mason Center",
    date: "2031-03-18T00:00:00.000Z",
    organizerName: "Design SF",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?san-francisco-art-design-expo",
    description:
      "Explore contemporary art and design at the San Francisco Art & Design Expo. Meet artists and designers, and purchase unique pieces.",
  },
  {
    id: 60,
    name: "Green Festival",
    slug: "san-francisco-green-festival",
    city: "San Francisco",
    location: "Golden Gate Park",
    date: "2030-09-10T00:00:00.000Z",
    organizerName: "Eco SF",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?san-francisco-green-festival",
    description:
      "Join the eco-friendly movement at the San Francisco Green Festival. Participate in workshops, eco-tours, and learn about sustainable living.",
  },
  {
    id: 61,
    name: "Literature Days",
    slug: "san-francisco-literature-days",
    city: "San Francisco",
    location: "San Francisco Library",
    date: "2031-07-25T00:00:00.000Z",
    organizerName: "Lit SF",
    imageUrl:
      "https://source.unsplash.com/random/900x700/?san-francisco-literature-days",
    description:
      "Dive into the literary scene at San Francisco Literature Days. Enjoy book readings, author meet-and-greets, and panel discussions on literature.",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.eventoEvent.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
