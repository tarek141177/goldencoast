import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";
import image8 from "@/assets/image8.jpg";
import image9 from "@/assets/image9.jpg";
import image10 from "@/assets/image10.jpg";
import image11 from "@/assets/image11.jpg";
import image12 from "@/assets/image12.jpg";
import image13 from "@/assets/image13.jpg";
import image14 from "@/assets/image14.jpg";
import image15 from "@/assets/image15.jpg";
import image16 from "@/assets/image16.jpg";
import image17 from "@/assets/image17.jpg";
import image18 from "@/assets/image18.jpg";
import image19 from "@/assets/image19.jpg";
import image20 from "@/assets/image20.jpg";
import image21 from "@/assets/image21.jpg";
import image22 from "@/assets/image22.jpg";

export interface Tour {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  groupSize: string;
  rating: number;
  badge?: string;
  availability: string;
  category: string;
  longDescription: string;
  program: string[];
  included: string[];
  notIncluded: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const tours: Tour[] = [
  {
    slug: "paradise-island-vip-hurghada",
    image: image8,
    title: "Paradise Island Top VIP",
    description: "This exclusive beach on Giftun Island is a true paradise. Sandy beach, turquoise water in Hurghada has been appreciated by tourists for a reason.",
    seoTitle: "Paradise Island Top VIP",
    seoDescription: "This exclusive beach on Giftun Island is a true paradise. Sandy beach, turquoise water in Hurghada has been appreciated by tourists for a reason.",
    price: "From $38",
    duration: "Full day",
    groupSize: "Up to 25 people",
    rating: 4.9,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Experience the perfect combination of adventure and relaxation on a trip to Paradise Island from Hurghada. With expert guides, high-quality equipment, and a refined schedule, this VIP tour is an unforgettable way to discover the enchanting underwater world of the Red Sea.\n\n**Paradise Island: Gateway to Serenity**\nParadise Island, part of the Giftun Islands National Park, is a breathtaking location with beautiful sandy beaches. A haven for those seeking respite. Relax on soft white sand and listen to the waves.\n\n**Program & Attractions:**\n*   **Pickup:** From hotel (time depends on location).\n*   **Snorkeling (2 stops):** Discover the best coral reefs. We provide masks, snorkels, and fins. You might see parrotfish, angelfish, turtles, or dolphins.\n*   **Paradise Island:** Time to relax, beach walk, sunbathe. Sunbeds and umbrellas available.\n*   **VIP Lunch:** Open buffet on a luxury boat (seafood, grill, salads, desserts, veg options).\n*   **Water Sports:** Thrill ride on banana boat and sofa.\n*   **Cruise:** Panoramic views of the Red Sea.\n*   **Return:** In the afternoon (~4:00 PM) transfer to hotel.\n\n\n\n\n\n**Important Info:**\n*   Bring: Beach towel, swimwear, UV cream, sunglasses, cash for small expenses.\n*   Ecology: Do not touch corals.\n*   Safety: Children under adult supervision.",
    program: ["Pickup from hotel (time depends on location).", "Snorkeling (2 stops) at the best coral reefs â€“ masks, snorkels, and fins provided.", "Time to relax on Paradise Island â€“ beach walk, sunbathe, sunbeds and umbrellas available.", "VIP Lunch: Open buffet on a luxury boat (seafood, grill, salads, desserts, veg options).", "Water Sports: Thrill ride on banana boat and sofa.", "Panoramic cruise views of the Red Sea.", "Return transfer to hotel in the afternoon (~4:00 PM)."],
    included: ["Luxury cruise","guide","island entry","VIP lunch","soft drinks","snorkeling gear","water sports."],
    notIncluded: ["Tips","island purchases","photos","transfer from distant regions (Sahl Hasheesh","El Gouna etc. +$)","optional scuba diving (Intro +$15)."]
  },
  {
    slug: "orange-bay-hurghada",
    image: image17,
    title: "Orange Bay Hurghada – Egyptian Maldives",
    description: "Discover Orange Bay Hurghada – a paradise beach known as the Egyptian Maldives! Cruise to Orange Island from Hurghada: snorkeling, VIP lunch, white sand, and turquoise water.",
    seoTitle: "Orange Bay Hurghada – Orange Island (Egypt) | Egyptian Maldives 2026",
    seoDescription: "Discover Orange Bay Hurghada – a paradise beach known as the Egyptian Maldives! Cruise to Orange Island from Hurghada: snorkeling, VIP lunch, white sand, and turquoise water. Book online!",
    price: "From $28",
    duration: "Full day",
    groupSize: "Up to 25 people",
    rating: 4.8,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Orange Bay Island in Hurghada is a place full of charm and exoticism, attracting lovers of adventure and beautiful beaches. This paradise island, with soft white sand and azure water, offers ideal conditions for relaxation and discovering the underwater world.\n\n**Orange Bay: Paradise Location**\nLocated on the Red Sea, Orange Bay is one of Hurghada's most popular attractions. The way to the island leads through crystal clear waters, which is an unforgettable experience in itself.\n\n\n\n\n\n\n\n**Important Info:**\n*   Water near shore is shallow (perfect for kids).\n*   Toilets and bars (paid) are available on the island.\n*   Bring your own towel and sunscreen.",
    program: ["**Pickup:** ~08:00-09:00 AM from hotel and transfer to the port.","**Cruise & Snorkeling:** Sailing out. Two snorkeling stops (~40-50 min each) at coral reefs. We provide masks, snorkels, and fins.","**Island Relaxation:** Visit to Orange Bay beach (~1.5 - 2 hours). Time for sunbathing, swimming in the shallow lagoon (water is 30-40 cm deep at shore, deeper ~30m out).","**Island Attractions:** Famous sea swing, hammock, and water tables â€“ perfect photo backdrops.","**Lunch on Boat:** Rich buffet (salads, rice, pasta, fries, chicken, fish, seafood).","**Drinks:** Cold (Cola, Fanta, Sprite, water) and hot (coffee, tea) on the boat included.","**Water Sports:** Banana boat and sofa water ride.","**Return:** Return cruise and transfer to hotel."],
    included: ["Transfer","cruise","guide","lunch","drinks on boat","snorkeling gear","life jackets","island entry","water sports."],
    notIncluded: ["Tips, drinks/ice cream bought on the island or from \"water supermarket\", photos from photographer.","Transfer from: El Gouna, Sahl Hasheesh, Makadi Bay (+$5/pp), Safaga (+$10/pp)."]
  },
  {
    slug: "dolphin-house-vip-hurghada",
    image: image10,
    title: "Dolphin House VIP",
    description: "The cruise to the dolphin house starts around nine o'clock. Then the driver picks you up from the hotel and takes you to the port where adventure awaits.",
    seoTitle: "Dolphin House VIP",
    seoDescription: "The cruise to the dolphin house starts around nine o'clock. Then the driver picks you up from the hotel and takes you to the port where adventure awaits.",
    price: "From $25",
    duration: "Full day",
    groupSize: "Up to 20 people",
    rating: 4.9,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Dolphin House in Hurghada is a unique place where dreams of meeting dolphins come true. This exclusive tour offers not only a luxury yacht cruise but above all a chance to observe these intelligent mammals in their natural habitat.\n\n**Meeting Nature:**\nWe sail out into the Red Sea to places where wild dolphins most often gather and play. This is not a dolphinarium â€“ it's a real adventure with nature. You have a 95% chance of seeing whole pods of dolphins swimming freely next to the boat.\n\n\n\n\n\n\n\n**Important Info:**\n*   These are wild animals â€“ sighting is very likely (95%) but not 100% guaranteed.\n*   Bring a towel, swimwear, sunscreen, and camera.\n*   If you get seasick, take a pill an hour before the cruise.",
    program: ["**Pickup:** ~09:00 AM from hotel and transfer to the port.","**Cruise:** Sailing towards the \"Dolphin House\".","**Dolphins:** Watching dolphins from the deck. If conditions allow and dolphins are calm, there is a possibility to jump into the water and swim near them (under instructor supervision).","**Snorkeling:** Two snorkeling stops at the most beautiful coral reefs. You will discover the colorful underwater world.","**Lunch on Yacht:** Tasty buffet meal served on board, including cold drinks (Cola, Sprite, water) and hot drinks (coffee, tea).","**Return:** Relaxing return cruise and transfer to hotel."],
    included: ["Transfer","yacht cruise","guide and instructor care","lunch and drinks","snorkeling gear (mask","snorkel","fins)","life tickets."],
    notIncluded: ["Tips, photos/videos from photographer, snacks/ice cream from \"water supermarket\".","Transfer from: El Gouna, Sahl Hasheesh, Makadi Bay (+$5/pp), Safaga (+$10/pp)."]
  },
  {
    slug: "intro-diving-hurghada",
    image: image9,
    title: "Intro Diving",
    description: "Hurghada is an excellent choice for people who love diving. Hot water, unforgettable views. Warm water, breathtaking reef views.",
    seoTitle: "Intro Diving",
    seoDescription: "Hurghada is an excellent choice for people who love diving. Hot water, unforgettable views. Warm water, breathtaking reef views.",
    price: "From $35",
    duration: "8 hours",
    groupSize: "Up to 6 people",
    rating: 4.9,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "The Intro Diving Hurghada tour is the perfect proposal for people who want to discover the beauty of the Red Sea underwater world, even without previous experience. Under the care of professional instructors, you will experience an unforgettable adventure.\n\n**For whom?**\nFor everyone! You don't need a certificate or even be a great swimmer. Good health condition and a desire to experience something extraordinary are enough. This is a safe introduction to diving.\n\n\n\n**What will you see?**\nAmazing coral reefs, colorful fish (goatfish, angelfish, parrotfish), and with a bit of luck sea turtles or rays.",
    program: ["**Start:** Pickup from hotel ~08:00 AM after breakfast and transfer to the port.","**Briefing:** During the cruise, the instructor will explain the rules of equipment use, breathing, and underwater communication.","**Dive 1:** First descent underwater with an instructor (holding your hand) to a suitable depth. Admiring reefs and fish.","**Lunch:** Tasty, varied lunch on the boat and drinks.","**Dive 2:** Second descent in a different location to see another part of the reef.","**Snorkeling:** Free time for snorkeling between dives (equipment available on the boat).","**Return:** Return cruise and transfer to hotel."],
    included: ["Transfer","boat cruise","licensed instructor care","full diving equipment (tank","wetsuit","mask","fins)","lunch and cold drinks on the boat."],
    notIncluded: ["Tips, photos/video from diving (~$25 per couple).","Transfer from: El Gouna, Sahl Hasheesh, Makadi Bay (+$5/pp), Safaga (+$10/pp)."]
  },
  {
    slug: "sharm-el-naga-hurghada",
    image: image1,
    title: "Sharm El Naga Hurghada",
    description: "Snorkeling in Sharm El Naga from Hurghada is an opportunity to see colorful, living reefs right by the beach. No need to take a boat anywhere.",
    seoTitle: "Sharm El Naga Hurghada",
    seoDescription: "Snorkeling in Sharm El Naga from Hurghada is an opportunity to see colorful, living reefs right by the beach. No need to take a boat anywhere.",
    price: "From $50",
    duration: "6 hours",
    groupSize: "Up to 15 people",
    rating: 4.7,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Sharm El Naga is a unique nature reserve and the perfect place for those who want to admire coral reefs straight from the beach, without having to take a boat trip.This picturesque bay offers peace, relaxation, and unforgettable underwater views.\n\n** Oasis of Peace and Nature:**\n    Sharm El Naga Bay is famous for some of the most beautiful and well - preserved coral reefs in the region, accessible just a few steps from the shore.The crystal - clear water makes it a paradise for snorkeling and diving enthusiasts.\n\n** What awaits you ?**\n*   ** Beach & Relax :** Sandy beach equipped with sunbeds and umbrellas(included).Perfect place to rest.\n*   ** Underwater World:** Just step into the water to find yourself in the middle of a vibrant reef.You will see colorful fish, rays, and with a bit of luck even turtles or moray eels.\n*   ** Comfort:** The facility has toilets, showers, a playground for children, and a restaurant.\n*   ** For whom:** Ideal trip for families with children and people who do not like long boat cruises but want to see the beauty of the Red Sea.\n\n** Tour Program:**\n*   ** Pickup:** ~09:00 AM from hotel and transfer by comfortable bus to Sharm El Naga.\n*   ** Beach Time:** Free time for sunbathing, swimming, and snorkeling(equipment available on site).\n*   ** Lunch:** Lunch served in the restaurant between 01:00 PM â€“ 02:00 PM(2 drinks included with lunch).\n*   ** Return:** ~04:00 PM â€“ 05:00 PM return to hotel.\n\n** What is included:**\n    Transfer from / to hotel(Hurghada), entrance to the reserve, sunbeds and umbrellas, snorkeling equipment(mask, snorkel, fins, vest), lunch, and 2 drinks with the meal.\n\n** What is not included:**\n    Tips, extra drinks outside of lunch, scuba diving(optional extra paid on site).\nTransfer from: El Gouna(price depends on number of people), Sahl Hasheesh, Makadi Bay, Safaga(extra charge).\n\n** Why is it worth it ?**\n    Sharm El Naga is a \"little paradise\" on earth.It is a safe, guarded place offering excellent conditions for relaxation away from the hustle and bustle of the city.",
    program: ["Free time on the tour.","Guided activities."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "parasailing-hurghada",
    image: image4,
    title: "Parasailing Hurghada",
    description: "Hurghada parasailing is a several-minute parachute flight pulled by a speedboat over the Red Sea. An attraction in Hurghada worth your attention.",
    seoTitle: "Parasailing Hurghada",
    seoDescription: "Hurghada parasailing is a several-minute parachute flight pulled by a speedboat over the Red Sea. An attraction in Hurghada worth your attention.",
    price: "From $20",
    duration: "2 hours",
    groupSize: "1-2 people",
    rating: 4.8,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Parasailing Hurghada: Attraction Overview and Tourist Information\nWelcome! Today we present information about one of the popular attractions in Egypt, parasailing in Hurghada. During this water sport, you can experience adrenaline and the beauty of the landscape from a bird's eye view.\n\n**What is parasailing?**\nParasailing is an extreme water sport that involves towing a person on a parachute attached to a speedboat. During the flight, the person hangs on a line that allows them to move freely in the air. While parasailing, you can admire the beauty of the surroundings and feel amazing emotions.\n\n**Hurghada â€“ the perfect place for parasailing**\nHurghada is a city in Egypt located on the Red Sea. It is one of the most popular places in the world for parasailing due to its weather conditions and beautiful landscapes. Thanks to the fact that Hurghada is located in the desert, the water temperature is very pleasant, making it an ideal place for water sports. Additionally, Hurghada offers many other attractions, such as diving, windsurfing, and boat cruises.\n\n**What does parasailing look like in Hurghada?**\nParasailing in Hurghada is an unforgettable experience that you can enjoy either alone or as a couple. During the flight, you can admire the beauty of the Red Sea and beaches, and see the city from a completely different perspective. Hurghada has many different routes to offer, so you have the option to choose the route that will be perfect for you.\n\n**Safety first**\nSafety during parasailing in Hurghada is a priority. All boats and parachutes are regularly inspected and maintained. Additionally, before the flight, every person will be thoroughly trained by an instructor who will provide all necessary information about safety and equipment operation.\n\n**When is the best time for parasailing in Hurghada?**\nThe tourist season in Egypt lasts from October to May, but the best period for parasailing in Hurghada is from March to May when weather conditions are most favorable. The water temperature in the Red Sea is then around 25-28Â°C, and the air temperature averages 28-32Â°C.\n\n**What are the age and physical requirements?**\nTo participate in parasailing in Hurghada, you must be at least 14 years old and weigh no more than 100 kg. Persons weighing over 100 kg are not recommended. Before the flight, you must sign a health declaration.\n\n**Price and flight duration**\nParasailing prices in Hurghada depend on the number of people and the route. For example, the price for a flight for two people is around $25. The flight duration is usually 10 to 15 minutes.\n\n**How to prepare for the flight?**\nMake sure you are dressed appropriately before the flight. Wear comfortable and airy clothes. It is also important to wear comfortable shoes or go barefoot.\n\n**Summary**\nParasailing in Hurghada is an unforgettable experience. A flight over the turquoise waters of the Red Sea is an opportunity to admire beautiful views and experience an unforgettable adventure.",
    program: ["Parasailing â€“ Hurghada is a few-minute (7-10 min) parachute flight towed by a speedboat over the Red Sea.","Although the flight is short, the trip takes longer as there are other people on the boat. You can decide if you want to fly higher or lower, or dip in the water.","Price includes: hotel transfer in Hurghada, parachute flight ~10min.","Extra paid: photos/videos, transfer from El Gouna, Sahl Hasheesh, Makadi Bay ($5/person), Safaga ($10/person)."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "private-speedboat-vip-hurghada",
    image: image5,
    title: "Private VIP Speedboat Trip",
    description: "A luxury adventure at sea! A private speedboat trip in Hurghada is relaxation, adrenaline and beautiful views of the Red Sea.",
    seoTitle: "Private VIP Speedboat Trip",
    seoDescription: "A luxury adventure at sea! A private speedboat trip in Hurghada is relaxation, adrenaline and beautiful views of the Red Sea.",
    price: "From $65",
    duration: "4 hours",
    groupSize: "Up to 8 people",
    rating: 5,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Private VIP Speedboat Trip in Hurghada: Unforgettable Half-Day Adventure\nDiscover the magic of the Red Sea with a Private VIP Speedboat Trip in Hurghada. This luxurious half-day expedition, lasting from 8:00 to 12:00, offers unforgettable impressions, including dolphin watching, snorkeling, and relaxing on a paradise island. Check the program details and find out why it's worth choosing this unique trip.\n\n**Tour Highlights**\n**1. Visit to Dolphin House: Meeting the Stars of the Red Sea**\nThe first stop of the trip is the famous Dolphin House, a known place where you can observe dolphins in their natural habitat. These intelligent and sociable animals often swim near the boats, jumping and playing in the waves.\n\n*   **Unforgettable impressions:** See dolphins up close, swimming freely in crystal clear water.\n*   **Magical moments:** Prepare your camera to capture these unique moments.\n\n**2. Relaxation on the Egyptian Maldives Island**\nKnown as the Egyptian Maldives, this island impresses with its pristine beauty. It is an ideal place to rest surrounded by white sand and turquoise water.\n\n*   **Attractions on the island:** Walk on the beach, swim in the sea, or relax in the shade of palm trees.\n*   **Postcard views:** The island offers wonderful photo spots that will delight everyone.\n\n**3. Snorkeling: Discover the Underwater World of the Red Sea**\nThe Red Sea is famous for the diversity of marine life, and snorkeling is the best way to discover it. Watch colorful coral reefs, tropical fish, and other amazing creatures.\n\n*   **Equipment included:** The trip provides all necessary diving equipment.\n*   **Adventure for everyone:** Both beginners and experienced divers will be delighted.\n\n**4. Refreshing Drinks and Fruit on Board**\nDuring the trip, you can enjoy complimentary drinks and fresh fruit that will provide energy and refreshment throughout the cruise.\n\n**5. Perfect Day Plan: Comfort and Adventure**\nThe trip lasts from 8:00 to 12:00, making it an ideal choice for families, couples, or groups of friends. Here is the detailed plan:\n\n*   **8:00:** Departure from the port.\n*   **8:30:** Dolphin watching at Dolphin House.\n*   **9:30:** Snorkeling at the coral reef.\n*   **10:30:** Relaxation on the Egyptian Maldives island.\n*   **11:30:** Serving drinks and fruit on board.\n*   **12:00:** Return to the port.\nThe schedule allows you to fully enjoy the attractions while leaving time for other activities during the day.\n\n**Why Choose the VIP Speedboat Trip?**\n*   **Privacy and exclusivity:** The boat is reserved exclusively for you and your group, guaranteeing comfort and personalized service.\n*   **Flexibility of the plan:** You can adjust the route and time spent in individual places to your preferences.\n*   **Safety and comfort:** A modern boat and experienced crew look after your comfort and safety.\n\n**What to Bring?**\nTo fully enjoy the expedition, pack the following things:\n*   Swimwear and towel\n*   UV filter cream and sunglasses\n*   Hat or cap protecting from the sun\n*   Camera or waterproof phone case\n\n**Summary**\nVISA private speedboat trip in Hurghada is an unforgettable experience combining luxury, adventure, and contact with nature. From swimming with dolphins, through discovering the underwater world, to relaxing on a paradise island â€“ every moment of this expedition will be unique. Book today and see for yourself how beautiful the Red Sea can be!\n\n**Frequently Asked Questions**\n**1. Will I definitely see dolphins?**\nDolphins often appear at Dolphin House, but their presence is not guaranteed as they are wild animals.\n\n**2. Is diving equipment included in the price?**\nYes, all necessary equipment is provided by the tour organizer.\n\n**3. Is the trip suitable for families with children?**\nDefinitely yes! The short duration and flexible plan make the trip ideal for families.\n\n**4. What does the tour price include?**\nThe price includes boat transport, snorkeling equipment, drinks, fruit, and a visit to the island.\n\n**5. Can the route be customized?**\nYes, a private trip allows you to adjust the route and time spent in individual places to your preferences.",
    program: ["Free time on the tour.","Guided activities."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "diving-hurghada",
    image: image3,
    title: "Diving Hurghada",
    description: "Join us for an unforgettable journey to the underwater world, where every dive is a new discovery waiting for you! Regardless of level.",
    seoTitle: "Diving Hurghada",
    seoDescription: "Join us for an unforgettable journey to the underwater world, where every dive is a new discovery waiting for you! Regardless of level.",
    price: "From $50",
    duration: "Full day",
    groupSize: "Up to 8 people",
    rating: 4.9,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Diving Hurghada â€“ One Day Diving Course\nDiscover an unforgettable diving adventure in the Red Sea with our one-day diving course from Hurghada. See amazing coral reefs, colorful fish, and hidden underwater treasures with experienced instructors.\n\nIf you are looking for an exciting diving experience, you are in the right place. Our one-day diving course from Hurghada offers an unforgettable day in the Red Sea, with everything you need to enjoy this underwater adventure. From the moment we meet at the dive site until the last immersion in the blue waters, this course includes everything: amazing dive sites, experienced instructors, a luxury boat, and a delicious lunch to keep you energized. Join us for a day full of exploration and excitement, where every diver discovers a new world full of life.\n\n**What is the one-day diving course from Hurghada?**\nThe one-day diving course from Hurghada is a comprehensive package that offers a full day of diving in the Red Sea. It is designed for both beginners and experienced divers, with a program that balances exploration, safety, and fun. The course will take you to some of the best dive sites in Hurghada, where you will have the opportunity to see an amazing diversity of marine flora and fauna and stunning underwater landscapes. Our experienced instructors will accompany you throughout the day so you can focus on enjoying the experience and creating unforgettable memories.\n\nAs part of the course, you will complete two open water dives, giving you the opportunity to discover different depths and environments. The dive sites are carefully selected to ensure a variety of coral reefs, hidden caves, and fascinating marine creatures. Whether you are interested in colorful tropical fish, majestic manta rays, or mysterious reef sharks, everyone will find something for themselves. We also provide all necessary diving equipment, so you don't have to worry about anythingâ€”just bring your curiosity and desire for adventure.\n\n**Early morning at the dive site**\nThe day begins early in the morning at our exclusive dive site, surrounded by the magnificent mountains of Hurghada. As the sun rises, you will feel the growing excitement meeting other divers and the team who will lead the course. The fresh morning air and vivid sunrise colors create the perfect atmosphere for the approaching adventure.\n\nOur dive site is equipped with everything you need to ensure comfort and safety. Our instructors will welcome you, ensuring everyone is ready for a day full of emotions. After a quick briefing and equipment distribution, you will have time to chat with other participants and admire the landscapes before starting the day. This is a perfect opportunity to meet new friends and share the excitement of the upcoming dives.\n\n**Preparation for an exciting day of diving**\nBefore immersing yourself in the depths of the Red Sea, it is important to attend a briefing session led by our experienced instructors. This session is crucial for ensuring safety and understanding the day's plan. The briefing covers several key aspects, including the sites we will visit, depth profile, safety procedures, and proper use of diving equipment.\n\nYou will learn about the unique features of each dive site, the types of flora and fauna you may encounter, and the safety rules to follow. Our instructors are highly qualified and will answer any questions, ensuring you feel confident and ready for the upcoming adventure. The briefing will also discuss safety procedures while diving in the Red Sea, emphasizing the importance of listening to instructions and staying in designated areas.\n\n**Exploration of the deep waters of the Red Sea**\nThe first dive is the moment when the real adventure begins. As you immerse yourself in the crystal-clear waters of the Red Sea, you will be delighted by the bright colors and diversity of marine fauna surrounding you. This dive reaches depths of up to 30 meters, offering an exciting experience for divers of all skill levels. You will have the opportunity to explore beautiful coral reefs, complex underwater structures, and various marine creatures.\n\nOne of the highlights of this dive is the chance to encounter some of the most interesting inhabitants of the Red Sea. Look out for reef sharks swimming among the waters, majestic manta rays gliding peacefully, and schools of tropical fish moving in and out of the corals. The underwater world is full of life, and every dive is a new moment of discovery. Our instructors will accompany you, pointing out interesting features and ensuring you enjoy every aspect of your dive.\n\n**Rest with a delicious lunch**\nAfter an exciting first dive, it's time for a well-deserved rest. The surface interval is a key element of the diving experience, allowing your body to rest and giving you time to relax and regenerate. During this break, you will enjoy a delicious lunch, with various options to satisfy different tastes. It's also a great moment to share stories with other divers and reflect on the amazing experiences you've already had.\n\nOur luxury dive boat provides comfortable conditions for lunch, with plenty of seating and beautiful views of the Red Sea. You can relax on deck or find a shaded spot to enjoy your meal. The surface interval also offers an opportunity to socialize with other participants and learn more about their diving experiences. It's a perfect opportunity to meet new friends and create lasting bonds with other diving enthusiasts.\n\n**Discovering hidden underwater treasures**\nThe second dive is another exciting encounter with the hidden treasures of the Red Sea. This dive will take you to different places, offering new perspectives on the underwater world. You will have the opportunity to explore hidden caves and discover life-filled coral walls, finding new and fascinating sights at every turn. The variety of dive sites ensures that every dive is a unique experience, with something new to see and discover.\n\nDuring this dive, you will have the opportunity to observe a wide range of marine fauna, from colorful clownfish to majestic sea turtles. The coral walls are impressive, with their complex patterns and bright colors. Our instructors will guide you throughout the dive, pointing out interesting features and helping navigate the underwater landscape. At the end of the day, you will have experienced some of the best dive sites in Hurghada and created unforgettable memories.\n\n**Comprehensive tour package**\nOur one-day diving course from Hurghada has been designed with convenience and comfort in mind. Here is what the tour package includes:\n\n*   **Two open water dives:** Experience the best dive sites in Hurghada with two guided dives.\n*   **Experienced diving instructors:** Our experienced instructors are there to guide you throughout the day, ensuring safety and providing valuable information about marine fauna and dive sites.\n*   **Diving equipment:** We provide all necessary diving equipment, including tanks, regulators, BCDs, and wetsuits. You don't need to bring any equipmentâ€”just you and your passion for adventure.\n*   **Delicious lunch:** Enjoy a hearty lunch during the surface interval, with various options to satisfy different tastes.\n*   **Luxury dive boat:** Our dive boat is equipped with comfortable seating, shaded areas, and breathtaking views of the Red Sea.\n*   **Transport to and from the dive site:** We offer transport to and from the dive site from Hurghada, making it easy to join the course without any hassle.\n\n**Additional costs and considerations**\nWhile the tour package covers most key aspects of the day, there are some additional costs and considerations to keep in mind:\n\n*   **Transfers from specific locations:** If you live in a location outside our designated pickup area, additional transport fees may apply.\n*   **Tips:** Although not required, tips for instructors and crew are welcome if you are satisfied with the service.\n*   **Personal expenses:** Any additional expenses, such as souvenirs or personal items, are not covered by the tour package.\n*   **Diving certification (for experienced divers):** If you are an experienced diver, you may be asked to present proof of certification before participating in open water dives.\n\n**Important details to know**\nBefore booking the one-day diving course from Hurghada, here are a few important details to consider:\n\n*   **Pickup times:** Exact pickup times will be provided after booking. Make sure you are ready at the designated time to avoid delays.\n*   **Course duration:** The course lasts approximately 8 hours, including two dives, surface interval, and transport.\n*   **Meeting and ending point:** The meeting and ending point is the same, making it easy to plan your day and coordinate transport.\n*   **Recommended items to bring:** Bring swimwear, a towel, sunscreen, and any personal items you may need. Although diving equipment is provided, you may want to bring your own mask and snorkel for extra comfort.\n\n**Ready for a diving adventure?**\nIf you are ready to start an unforgettable diving adventure in the Red Sea, our one-day diving course from Hurghada is the perfect choice. With experienced instructors, amazing dive sites, and a comprehensive tour package, you will have everything you need to experience an exciting day full of discovery and exploration. Don't miss the opportunity to experience the beauty and excitement of diving in Hurghada. Book your course today and prepare for the adventure of a lifetime!",
    program: ["Free time on the tour.","Guided activities."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "salem-express-hurghada",
    image: image11,
    title: "Salem Express",
    description: "We invite you to the Salem Express Wreck Diving Safari from Hurghada! It is a one-of-a-kind day full of emotions for certified divers.",
    seoTitle: "Salem Express",
    seoDescription: "We invite you to the Salem Express Wreck Diving Safari from Hurghada! It is a one-of-a-kind day full of emotions for certified divers.",
    price: "From $110",
    duration: "Full day",
    groupSize: "Up to 10 people",
    rating: 4.9,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Salem Express - Wreck Diving from Hurghada\nExperience unforgettable diving on the Salem Express wreck from Hurghada. A unique underwater adventure, including transport, lunch, and private dive guides.\n\n**Introduction**\nIf you are a certified diver looking for adventure, the Red Sea offers some of the most spectacular dive sites in the world. One of them is the Salem Express wreck â€“ mysterious and fascinating, with a history that inspires awe. A one-day trip from Hurghada to the Salem Express wreck provides everything you need to experience an unforgettable adventure, including transport, meals, and private dive guides. Whether you are an experienced wreck diver or just starting your diving adventure, this trip is designed to delight you.\n\n**Salem Express â€“ History and Significance**\n**Wreck History**\nThe Salem Express was a passenger ferry that tragically sank in 1991, causing a huge loss of life. The ship was traveling from Jeddah in Saudi Arabia to Safaga in Egypt when it struck a reef and sank quickly. This tragic accident has transformed into a unique dive site where divers can explore the remains of the ferry while paying tribute to its history. The wreck is well-preserved, with many original elements, offering incredible exploration opportunities.\n\n**Location and Accessibility**\nThe wreck is located about 15 nautical miles from the coast of Safaga and is accessible from Hurghada. The journey from Hurghada to the dive site takes about 1-2 hours, depending on sea conditions. Divers are transported by comfortable boats fully equipped with all necessary amenities.\n\n**Unique Marine Flora and Fauna**\nBesides its historical significance, the Salem Express wreck is rich in diverse marine life. The coral reefs around the wreck are home to many colorful fish, including scorpionfish, snappers, and parrotfish. The wreck's structure provides hiding places for moray eels, and schools of smaller fish move around the ship creating a dynamic underwater landscape. It is an ecosystem that attracts divers from all over the world.\n\n**Your One-Day Dive**\n**Morning Departure from Hurghada**\nThe day starts with a comfortable pickup from your hotel in Hurghada. After a short trip to the port, you board the dive boat where you meet your dive guide and other tour participants. The boat is well-equipped with safety gear and offers a comfortable place to relax during the trip to the dive site. During the cruise, you can enjoy wonderful views of the Red Sea.\n\n**Onboard Experience**\nUpon boarding, you will receive a safety briefing and a detailed dive plan. The crew is friendly and experienced, ensuring a safe and enjoyable experience. During the trip to the Salem Express wreck, you can enjoy free coffee, tea, and snacks. The boat is spacious enough to accommodate your equipment and also offers comfortable resting places.\n\n**Diving**\nAfter arriving at the Salem Express wreck, you gear up and follow your dive guide into the water. The wreck lies at a relatively shallow depth, from 10 to 30 meters, making it accessible to a wide range of certified divers. As you descend, you are greeted by the incredible sight of the huge ferry, whose decks and cabins await discovery. The dive guide leads you through key points of interest such as lifeboats, the captain's bridge, and the car deck. It is a surreal experience that combines history with the beauty of underwater life.\n\n**Lunch Break**\nAfter diving, it's time for a well-deserved lunch break. Various meal options, including vegetarian and vegan dishes, are offered on the boat to meet all dietary preferences. Freshly prepared food, refreshing drinks, and breathtaking sea views make this the perfect break between dives. If you have food allergies or special dietary requirements, please inform the crew in advance.\n\n**Return to Hurghada**\nAfter lunch, you have some time to relax on deck or admire the scenery. As the boat returns to Hurghada, you can summarize the amazing diving experiences and enjoy the sun and sea breeze. Upon arrival at the port, transport back to your hotel is provided, ending the one-day trip with unforgettable memories.\n\n**What Is Included in the Tour?**\nThe one-day trip from Hurghada to the Salem Express wreck is designed to be comprehensive and convenient. The package includes: 2 diving stops, transport from and to your hotel, lunch, coffee, tea, water, and other drinks, as well as private dive guides. Two 12-liter air tanks and weights are also included, so you don't have to worry about extra diving gear (weights/tanks). Everything else is provided by us!\n\n**What to Bring?**\nTo fully enjoy the one-day dive, you need to bring a few basic things. Make sure you have your swimwear, towel, and diving certificate or a photo of your certificate. This trip is exclusively for certified divers, so ensure you have appropriate qualifications. If you plan to take photos or videos, consider bringing a waterproof camera or GoPro. Besides these essentials, we provide everything else!\n\n**Additional Costs and Exclusions**\nAlthough the trip is complete, there are a few things not included in the package. **Diving equipment rental is not provided**, so you will have to bring your own or rent it at a local dive shop. **Coast Guard fees of 5 Euro per person per day** are also not included. Other additional options, such as Nitrox, underwater photo sessions, are available for an extra fee. If you live outside Hurghada, there are also transfer fees: 10 Euro per person for Soma Bay or El Gouna, and 15 Euro per person for Safaga.\n\n**Frequently Asked Questions**\n**Do I need to bring my diving equipment?** It is recommended to bring your own diving equipment, but if you don't have it, you can rent it at a local dive shop in Hurghada. Remember that equipment rental is not included in the tour price.\n\n**What level of diving certificate do I need?** This trip is for certified divers only, so you need at least an Open Water certificate or higher. Make sure you have it with you or a photo of the certificate to confirm your qualifications.\n\n**Is food provided?** Yes, lunch is included in the tour price. Coffee, tea, water, and other drinks are also available. You can request vegetarian or vegan options, but please inform the crew in advance if you have any allergies or special dietary requirements.\n\n**Is there hotel transport?** Yes, transport from and to your hotel in Hurghada is provided. If you are in Soma Bay, El Gouna, or Safaga, there is an additional transfer fee.\n\n**Do I have to pay additional fees?** Yes, there are some additional costs such as Coast Guard fees (5 Euro per day per person) and transfer fees outside Hurghada. Additional options like Nitrox and photo sessions are also available for an extra fee.\n\n**Can I bring a camera?** Of course, but remember you must have a waterproof camera or housing to protect it underwater. If you want professional photos, consider hiring an underwater photographer available on board for an extra fee.\n\n**Summary**\nThe one-day trip from Hurghada to the Salem Express wreck is an unforgettable experience for certified divers. Exploring this historic wreck, rich in colorful marine life, is an experience that combines excitement, learning, and beauty. With a full range of services, including transport, lunch, and private dive guides, everything is designed to ensure you a safe and enjoyable dive. Just bring your swimwear, towel, and diving certificate â€“ we provide the rest!",
    program: ["Free time on the tour.","Guided activities."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "glass-boat-hurghada",
    image: image13,
    title: "Glass Boat",
    description: "Glass Boat in Hurghada is about a 3-hour trip where you will have the opportunity to see the underwater world without entering the water.",
    seoTitle: "Glass Boat",
    seoDescription: "Glass Boat in Hurghada is about a 3-hour trip where you will have the opportunity to see the underwater world without entering the water.",
    price: "From $20",
    duration: "3 hours",
    groupSize: "Up to 30 people",
    rating: 4.6,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Glass Boat in Hurghada â€“ A Great Adventure on the Egyptian Red Sea\nHave you ever wondered what it would be like to swim among beautiful coral reefs and exotic fish? If so, a vacation in Egypt is the perfect opportunity to make your dream come true. The Glass Boat in Hurghada is one of the most interesting attractions of this Egyptian resort, allowing you to explore the underwater world without diving.\n\n**What is a Glass Boat?**\nA Glass Boat, as the name suggests, is a boat with a glass bottom, through which you can admire coral reefs and marine creatures without entering the water. This form of exploring the underwater world is ideal for people who do not want to or cannot scuba dive.\n\n**Glass Boat in Hurghada**\nHurghada is one of the most popular tourist destinations in Egypt, known primarily for its rich underwater world. The Glass Boat is a great way to experience the beauty of the Egyptian Red Sea without getting into the water. Many tour operators offer Glass Boat tours, including various options at different prices to suit customer needs and preferences.\n\nDuring the Glass Boat trip, participants move across the sea on board a boat with a glass bottom. Underwater, you can see coral reefs and thousands of colorful fish. The guide on board provides interesting information about the underwater world and protects tourists from dangers.\n\n**How to prepare for a Glass Boat in Hurghada?**\nPreparing for a Glass Boat trip is simple and easy. First of all, remember to bring sunscreen with a UV filter to protect your skin from harmful solar radiation. It is also recommended to wear comfortable swimwear and bring a towel in case you need to dry off after returning to land.\n\n**Advantages of Glass Boat in Hurghada**\nThe Glass Boat is a great option for people who do not want to or cannot dive, but at the same time want to see the beauty of the underwater world. The Glass Boat trip allows you to admire coral reefs and exotic fish without having to go underwater. It is also a wonderful opportunity to see the underwater world for children and the elderly.\n\n**Summary**\nEgyptian holidays are not just about lounging on the beach, but also the opportunity to visit fascinating monuments, dive in colorful coral reefs, or ride camels through the desert.\nIt is worth noting the richness of Egypt's culture and history and the availability of holidays for every budget. A trip to Egypt can be an ideal choice both for people looking for relaxation and for those who want to combine relaxation with active leisure.",
    program: ["The Glass Boat in Hurghada is about a 3-hour trip where you will have the opportunity to see the underwater world through the panoramic windows of the ship. After reaching the reef, tourists are invited to the lower deck of the ship from where they can observe fish and the coral reef.","Then we sail to the snorkeling station, to which we transfer. There you can snorkel (snorkeling equipment â€“ masks, snorkels, fins are available for rent for free), sunbathe on the upper deck, take photos. At the station, there is a mini restaurant and a shop that can be used for a fee, as well as a free small pool for children.","The glass boat trip is an ideal proposition for people who do not want, or cannot, enter the sea, but would like to see the reef. The trip starts around 10 am. The price of the trip includes transfer from the hotel and return, as well as snorkeling equipment.","*Additional costs:** tips, bar at the station, photos/films bought from the photographer on the ship, drinks, chips, ice cream bought in the \"water supermarket\", transfer from El Gouna, Sahl Hasheesh, Makadi Bay 5$ per person, from Safaga 10$ per person."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "grand-aquarium-hurghada",
    image: image21,
    title: "Grand Aquarium",
    description: "At Grand Aquarium, watch marine life as if you lived among them in a fantasy world. The Grand Aquarium in Hurghada is a 2-hour adventure.",
    seoTitle: "Grand Aquarium",
    seoDescription: "At Grand Aquarium, watch marine life as if you lived among them in a fantasy world. The Grand Aquarium in Hurghada is a 2-hour adventure.",
    price: "From $45",
    duration: "3 hours",
    groupSize: "Unlimited",
    rating: 4.7,
    availability: "Daily",
    category: "City & Attractions",
    longDescription: "Grand Aquarium in Hurghada.\nThe Grand Aquarium in Hurghada is a 2-hour trip to the Grand Aquarium complex, which features: aquariums with marine creatures, tropical forests, a mini ZOO, and fossil exhibits.\nIt is a great opportunity to look closely at all the inhabitants of the Red Sea. Water-filled tunnels, sea turtles and sharks swimming right above your head, a large number of amazing specimens of flora and fauna â€“ all this ensures that the impressions from this place will stay with you for a lifetime!\nThe trip is a great option for the elderly and children. Choose our offer and discover the underwater world of the Red Sea with us.\n\nGolden Coast Excursions will ensure you a day full of impressions. ðŸ˜Š",
    program: ["Free time on the tour.","Guided activities."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "el-gouna-city-tour-hurghada",
    image: image22,
    title: "El Gouna City Tour",
    description: "Experience an amazing journey through El Gouna! Our City Tour guarantees magical moments and unique memories in the 'Egyptian Venice'.",
    seoTitle: "El Gouna City Tour",
    seoDescription: "Experience an amazing journey through El Gouna! Our City Tour guarantees magical moments and unique memories in the 'Egyptian Venice'.",
    price: "From $35",
    duration: "5 hours",
    groupSize: "Up to 15 people",
    rating: 4.7,
    availability: "Daily",
    category: "City & Attractions",
    longDescription: "El Gouna City Tour from Hurghada\nEmbark on an extraordinary tour of El Gouna in Hurghada and discover its hidden treasures. Learn about the rich history of this place while admiring its majestic landscapes. Forget about maps and leave the navigation to the guide, who will ensure you make the most of your time.\n\n**Introduction to El Gouna: \"The Venice of the Red Sea\"**\nEl Gouna is a modern resort on the Red Sea in Egypt, near Hurghada. Using a network of lagoons and canals, not just one strip of beach was created here, but an entire city of beautiful beaches connected by bridges over crystal clear water. That is why El Gouna is called \"The Venice of the Red Sea\". It is a place both elegant and casual, where guests can enjoy excellent amenities and an endless list of adventure and fun possibilities, all in a relaxing and friendly atmosphere. The cornerstone of this beautiful paradise was laid in 1989. El Gouna covers an area of 36.8 kmÂ², is located 25 km from Hurghada airport, and has 18 hotels, including five-star hotels.\n\n\n\n**Discover Abu Tig Marina**\nAdmire luxury yachts and the vibrant atmosphere of Abu Tig Marina, a place full of shops, restaurants, and beautiful views.\n\n**El Gouna Tower**\nClimb the El Gouna Tower to admire the panoramic view of the city. It is the perfect place to watch the sunset, enjoy delicious drinks, and take great photos.\n\n**Lagoon Tour by Modern Boat (45 minutes)**\nExperience the magic of El Gouna's lagoons during a unique boat trip. Sailing on crystal clear water, admire the picturesque surroundings.\n\n**El Gouna Downtown Square (40 minutes)**\nEnd your tour with a visit to the city center square, a bustling place with a pleasant atmosphere, perfect for a walk and shopping.\n\n**Trip Details**\n**Duration:** 3.5 hours\n**Location:** El Gouna in Hurghada\n**Departure Point:** Hotel Pickup\n**Guide:** Professional guide\n**Cancellation Policy:** Full refund for cancellations at least 24 hours before departure\n**Additional Cost:** Transfer from hotels in Sahl Hasheesh, Makadi, and Safaga is an additional $5 per person\n\n**Inclusions and Exclusions**\n\n\n\n\n**Summary**\nThe El Gouna City Tour from Hurghada is an unforgettable experience, offering a unique insight into the beauty and charm of this modern resort. From panoramic views to bustling marinas and peaceful boat cruises, this tour has something for everyone. Book your tour today and discover why El Gouna is the true \"Venice of the Red Sea\".",
    program: ["*Guided City Tour (40 minutes)**","Start your journey with an informative and engaging tour with a professional guide. Discover the fascinating architecture and lively atmosphere of the modern city."],
    included: ["Transfer from and to the hotel","Professional guide"],
    notIncluded: ["Tips","Food and drinks","Any additional expenses not mentioned in the program"]
  },
  {
    slug: "morning-quad-safari-hurghada",
    image: image2,
    title: "Morning Quad Safari",
    description: "Morning quads in Hurghada is the shortest desert trip. Tourists are picked up from the hotel by bus to the quad station around 8 am.",
    seoTitle: "Morning Quad Safari",
    seoDescription: "Morning quads in Hurghada is the shortest desert trip. Tourists are picked up from the hotel by bus to the quad station around 8 am.",
    price: "From $25",
    duration: "3 hours",
    groupSize: "Up to 10 people",
    rating: 4.6,
    availability: "Daily",
    category: "Safari & Adventure",
    longDescription: "Morning quad safari is the perfect option for those who want to feel the adrenaline in the desert while avoiding the greatest heat.It is a short but intense trip during which you will see the beauty of the Egyptian desert in the morning.\n\n** Why Morning Safari ?**\n    Morning hours are when the desert comes to life, and the sun is not yet so scorching.This is an excellent option for families and people who want to have the rest of the day free for sunbathing or other attractions.\n\n** Tour Plan:**\n*   ** Transfer:** Pickup from the hotel around 08:00 AM.\n*   ** Quad Station:** Arrival at the desert base, equipment preparation, and short training on quad operation(test drive).\n*   ** Quad Biking(~25 km):** You set off into the desert! The route leads through sandy dunes and rocky terrains.Approx. 45 minutes of exciting riding one way awaits you.\n*   ** Bedouin Village:** Stop at a traditional village.You will learn about the culture of its inhabitants, drink Bedouin tea, and have the opportunity for a short camel ride.\n*   ** Return:** Ride back on quads to the base(another 45 minutes).\n*   ** End:** Return to the hotel around 11: 30 AM â€“ 12:00 PM.\n\n** What to bring ?**\n    Comfortable shoes, sunglasses, scarf to protect face from sand(available for purchase on site), water.\n\n** Important Info:**\n    The tour takes place in groups.Quads are easy to operate(automatic: gas and brake).Children over 16 can drive a quad independently(with parental consent). Younger children can ride with a parent on one quad(double option).",
    program: ["Free time on the tour.","Guided activities."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "afternoon-quad-safari-hurghada",
    image: image7,
    title: "Afternoon Quad Safari",
    description: "Quad biking in the Sunset desert, camel riding and the opportunity to visit a Bedouin village at sunset.",
    seoTitle: "Afternoon Quad Safari",
    seoDescription: "Quad biking in the Sunset desert, camel riding and the opportunity to visit a Bedouin village at sunset.",
    price: "From $20",
    duration: "5 hours",
    groupSize: "Up to 10 people",
    rating: 4.7,
    availability: "Daily",
    category: "Safari & Adventure",
    longDescription: "Have you ever wondered how to spend an afternoon in the desert ? If you are looking for an unforgettable adventure in Hurghada, a quad trip is one of the best choices.\n\n** Why choose a quad trip ?**\n    A quad trip is an amazing adventure that allows you to discover the beauty of the Egyptian desert.You will see breathtaking landscapes, visit Bedouin villages, and feel the thrill of riding on sandy roads.\n\n** How to prepare ?**\n* Comfortable clothing protecting from sun and dust.\n* Suitable footwear(sports or trekking shoes).\n* Sunglasses, hat / scarf, and UV sunscreen.\n\n** How does the trip look like ?**\n    The guide picks you up from the hotel, and after a short training, you set off.You will visit scenic landscapes and Bedouin villages, learning about local culture.Safety is a priority â€“ instructors take care of the group at all times.\n\n** Tour Program(Afternoon Quad Safari):**\n*   ** Pickup:** Bus transfer from hotel to the desert center.\n*   ** Briefing:** Short training on how to operate a quad.\n*   ** Quad Riding(Stage 1):** ~1h ride one way to the Bedouin village.\n*   ** Bedouin Village:** See traditional houses, drink tea, and taste desert - baked bread.\n*   ** Camels:** Camel ride.\n*   ** Quad Riding(Stage 2):** Return by quads to the base(another hour of riding).\n*   ** Dinner & Show:** Oriental dinner and show(belly dance, whirling dervish). * Optional: can be skipped if informed in advance.*\n\n    It's the perfect opportunity to see the sunset in the desert and escape from everyday life!",
    program: ["Free time on the tour.","Guided activities."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "sahara-park-mega-safari",
    image: image6,
    title: "Sahara Park - Mega Safari",
    description: "Sahara Park from Hurghada Excellent trip for adults and children. Adventure with jeeps, quads and buggies and a visit to the Bedouins.",
    seoTitle: "Sahara Park - Mega Safari",
    seoDescription: "Sahara Park from Hurghada Excellent trip for adults and children. Adventure with jeeps, quads and buggies and a visit to the Bedouins.",
    price: "From $23",
    duration: "Full day",
    groupSize: "Up to 20 people",
    rating: 4.8,
    availability: "Daily",
    category: "Safari & Adventure",
    longDescription: "If you are a lover of adventures and exotic holidays, Sahara Park from Hurghada is the perfect place for you. Here you will find everything needed for an unforgettable expedition in the Egyptian Sahara.\n\n**What is Mega Safari about?**\nMega Safari is a desert trip that will provide you with a large dose of adrenaline and unforgettable impressions. During the safari, you will have the opportunity to ride a camel, go for a quad ride, and experience an exciting jeep ride. You will also visit an Egyptian Bedouin village, learn about their culture and see how they live.\n\n**What to know before the trip?**\nThe Sahara is a harsh environment. Remember warm clothing (in winter), sunscreen, a hat, and a supply of water.\n\n**Why choose Sahara Park?**\nIt is a place where you can feel the real atmosphere of Egypt. Experienced guides and safety are our priority.\n\n\n\n**Additional Info:**\nTransfer from El Gouna, Sahl Hasheesh, Makadi Bay, and Safaga is extra paid (~$10 per person).",
    program: ["**Pickup (~12:30 PM):** Driver picks you up from the hotel by jeep to the desert.","**Quads (30 min):** After briefing, you go for desert madness on quads.","**Buggy (10 min):** Switch to buggy cars for a short ride.","**Bedouin Village:** Jeep drive to the village. Drink Bedouin tea, eat fresh bread, and see local life.","**Camels:** Ride on a camel - the \"ship of the desert\".","**Terrarium (Optional +$2):** Opportunity to see snakes, scorpions, and lizards up close.","**Sunset:** Admire the wonderful sunset in the desert.","**Dinner & Show:** BBQ dinner included. Evening show: whirling dervish, belly dance, fire show.","**Return:** Transfer back to hotel by jeep."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "hurghada-city-tour",
    image: image14,
    title: "Hurghada City Tour",
    description: "Hurghada is a popular tourist city in Egypt, located on the Red Sea. Get to know the local culture, markets and mosque.",
    seoTitle: "Hurghada City Tour",
    seoDescription: "Hurghada is a popular tourist city in Egypt, located on the Red Sea. Get to know the local culture, markets and mosque.",
    price: "From $15",
    duration: "4 hours",
    groupSize: "Up to 15 people",
    rating: 4.5,
    availability: "Daily",
    category: "City & Attractions",
    longDescription: "Hurghada City Tour.\nHurghada is a popular tourist city in Egypt, located on the Red Sea. The city is famous primarily for its beautiful beaches and rich underwater world.",
    program: ["You will be picked up from your hotel in a luxury minibus.","**Hurghada Marina:** Walk along the modern promenade, admiring luxury yachts and nightlife.","**Fish Market:** Visit the market with fresh fish straight from the sea.","*   *Extra:* Opportunity to buy and eat fresh shrimp (approx. $10).","**El Mina Mosque:** Visit the largest mosque in Hurghada (appropriate dress required, provided for women). Learn about culture and religion.","**Shipyard:** Visit the boat building and renovation site.","**Old Town and Baladi CafÃ©:** Relax with authentic Egyptian coffee and shisha. Kofta sandwich included!","**Fruit and Vegetable Market (Souk):** Shopping for fresh local products and visit to a traditional bakery.","**Bamboo Juice:** Fresh sugar cane juice and juice squeezing show.","**Coptic Church:** Learn about the history and traditions of Christians in Egypt.","**Shopping:** Free time at the shopping center (optional).","Golden Coast Excursions makes your day full of impressions."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "sindbad-submarine-hurghada",
    image: image20,
    title: "Sindbad Submarine",
    description: "Hurghada, located on the eastern coast of the Red Sea, is one of the most beautiful places for diving without getting wet.",
    seoTitle: "Sindbad Submarine",
    seoDescription: "Hurghada, located on the eastern coast of the Red Sea, is one of the most beautiful places for diving without getting wet.",
    price: "From $75",
    duration: "2 hours",
    groupSize: "Up to 40 people",
    rating: 4.8,
    availability: "Daily",
    category: "City & Attractions",
    longDescription: "Sindbad Submarine from Hurghada â€“ Unforgettable Underwater Adventure.\nHurghada, located on the eastern coast of the Red Sea, is one of the most beautiful places to explore the underwater world. A trip on the Sindbad submarine is a unique opportunity to see coral reefs and their inhabitants without getting wet.\n\n**About Sindbad Submarine:**\nBuilt in Germany, it is one of the most modern submarines in the world. It holds 44 passengers and features an air-conditioned interior and panoramic windows, giving the impression of being inside a giant aquarium. The vessel holds the TÃœV NORD safety certificate.\n\n\n\n**Why is it worth it?**\n*   Perfect for families with children and non-swimmers.\n*   The only such boat in North Africa/Middle East.\n*   Comfortable conditions and complete safety.\n*   Opportunity to take amazing photos.\n\n\n\n**What to bring:**\nSunglasses, camera/phone, good mood.\n\nGolden Coast Excursions makes your day full of impressions.",
    program: ["**Transfer:** Pickup from the hotel and transfer by air-conditioned vehicle to the pier (pickup from 08:00).","**Boat Ride:** A short boat trip to the submarine docking station.","**The Dive:** Boarding Sindbad. We descend to a depth of up to 22 meters!","**Underwater Tour (approx. 50 min):** A slow cruise (2 knots) along the coral reefs. Through panoramic windows, you will see colorful fish, rays, and maybe even turtles. Pilots ensure safety and the best views.","**Return:** Surfacing, return to land, and transfer to the hotel."],
    included: ["Transfer from/to hotel","professional guide","water","port fees."],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "horse-riding-private-hurghada",
    image: image12,
    title: "Horse Riding Private",
    description: "Hurghada is a popular tourist destination in Egypt, offering many attractions, including horse riding in the desert or on the beach.",
    seoTitle: "Horse Riding Private",
    seoDescription: "Hurghada is a popular tourist destination in Egypt, offering many attractions, including horse riding in the desert or on the beach.",
    price: "From $40",
    duration: "2 hours",
    groupSize: "1-4 people",
    rating: 4.7,
    availability: "Daily",
    category: "Sea & Snorkeling",
    longDescription: "Horse Riding in Hurghada (Private).\n(You can choose the time that suits you during the day, as the trip is private).\n\nHurghada is a popular tourist destination in Egypt, offering many attractions, including horse riding.\n\n**About Horse Riding in Hurghada:**\n*   **Stable Selection & Safety:** We offer proven stables with well-groomed horses and experienced instructors. Safety is a priority, and equipment like helmets are provided.\n*   **Routes:** Scenic routes along the Red Sea coast, among deserts and mountains, tailored to the rider's skills.",
    program: ["You will be picked up from your hotel in a luxury minibus.","**Part 1 (Beach & Sea):** For one hour, we will ride horses through the sea (water up to the waist!) and along the beach. Unforgettable impressions and photos!","**Part 2 (Desert):** You will spend the second hour in the wonderful Hurghada desert, enjoying the sun and space.","*   If you are an experienced rider, you can gallop.","*   If you are a beginner, the instructor will lead the horse by the bridle, ensuring your safety and comfort.","Golden Coast Excursions makes your day full of impressions. ðŸ˜Š"],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "cairo-trip-from-hurghada",
    image: image19,
    title: "Cairo Trip from Hurghada",
    description: "For all lovers of ancient history. Here is a trip to Cairo from Hurghada, full of manifestations of the civilization of pharaohs and ancient nations. Pyramids, Sphinx, Egyptian Museum...",
    seoTitle: "Cairo Trip from Hurghada",
    seoDescription: "For all lovers of ancient history. Here is a trip to Cairo from Hurghada, full of manifestations of the civilization of pharaohs and ancient nations. Pyramids, Sphinx, Egyptian Museum...",
    price: "From $55",
    duration: "Full day",
    groupSize: "Up to 20 people",
    rating: 4.9,
    availability: "Daily",
    category: "Historical",
    longDescription: "If you dream of discovering ancient monuments, a trip to Cairo is an excellent choice. Cairo, the capital of the country, is a city full of history and culture that will surely charm you.\n\n**What will you see in Cairo?**\n*   **Pyramids of Giza:** One of the Seven Wonders of the World (Cheops, Chephren, Mykerinos) and the Sphinx.\n*   **Egyptian Museum:** Thousands of artifacts, including Tutankhamun's gold mask and mummies.\n*   **History & Culture:** A place where history and modernity meet harmoniously.\n\n**Preparation and Safety:**\n*   **Clothing:** Comfortable, airy clothes. Women should remember to cover shoulders and knees (out of respect for culture).\n*   **Safety:** Drink only bottled water. Avoid eating in unknown places.\n*   **Climate:** Remember hydration, UV cream, and headgear â€“ it gets very hot in Cairo.\n\n\n\n**Additional Info:**\nIncluded: Entrance tickets, lunch, guide, transfer.\nExtra paid: Drinks, Nile cruise ($10), camel ride by pyramids ($10), transfer from Safaga/El Gouna.",
    program: ["**Departure (~02:00 AM):** Pickup from hotel by air-conditioned bus with toilet.","**Transfer:** Trip to Cairo (~6h). Stop in Zafarana for coffee/toilet. Arrival in Cairo ~8:00 AM.","**Egyptian Museum:** Sightseeing with an Egyptologist guide (over 1700 objects from Tutankhamun's tomb).","**Lunch:** Buffet meal in a restaurant (drinks extra paid).","**Pyramids & Sphinx:** Visiting the complex in Giza.","**Optional (Nile Cruise):** Boat trip on the Nile (+$10). If not interested, you wait in the bus.","**Shopping:** Visit to perfume or papyrus institute.","**Return:** Departure from Cairo, back in Hurghada around midnight."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "private-cairo-ancient-egypt-hurghada",
    image: image15,
    title: "Private Trip to Cairo & Ancient Egypt",
    description: "Pyramids of Giza, Sphinx, Egyptian Museum, Amr Ibn Al-Aas Mosque, Church of St. Sergius, Church of the Assumption.",
    seoTitle: "Private Trip to Cairo & Ancient Egypt",
    seoDescription: "Pyramids of Giza, Sphinx, Egyptian Museum, Amr Ibn Al-Aas Mosque, Church of St. Sergius, Church of the Assumption.",
    price: "From $90",
    duration: "Full day",
    groupSize: "Up to 6 people",
    rating: 5,
    availability: "Daily",
    category: "Historical",
    longDescription: "Imagine this: a seamless adventure exploring Cairo and Ancient Egypt defined by comfort, exclusivity, and rich historical landscape. This is not just a tour, but a luxury experience tailored to you.\n\n**What distinguishes this tour?**\n*   **Private Luxury:** Transport in a private, comfortable minibus. Pickup just for you and your loved ones.\n*   **Flexibility:** You influence the itinerary. Want to skip shops? No problem. Prefer to see something else? Your guide is at your disposal.\n*   **Comfort:** Pickup from hotel at night (01:00-02:40 AM), return late evening (>11:00 PM). We confirm exact time after booking.\n\n\n\n**What is included?**\nPrivate transport, private Egyptologist guide, entrance tickets, lunch, fees and taxes.\n\n**What to bring?**\nBreakfast box (order at hotel), water, camera, sunscreen, hat, warm sweatshirt (AC in bus can be strong). Passport not required (unless crossing Sinai, but from Hurghada visa is enough).\n\n**Optional extras (paid):**\nNile cruise ($15), camel/horse ride by pyramids ($10). Drinks and tips not included.\n\n**Regional transfers:**\nSahl Hasheesh, Makadi, Safaga, El Gouna: +$5/pp (min. 2 pax) or +$10 (solo).",
    program: ["**Pyramids of Giza:** Stand face to face with the Great Pyramid, the only one of the Seven Wonders of the World.","**Sphinx:** Meet the mysterious guardian of the pyramids.","**Egyptian Museum:** Discover thousands of artifacts, including Tutankhamun's treasures.","**Ancient & Coptic Egypt:** Visit Amr Ibn Al-Aas Mosque, Church of the Virgin Mary (3rd century AD), Saints Sergius and Bacchus Church, and Ben Ezra Synagogue. Immerse yourself in Egypt's religious history.","**Lunch:** Luxury meal with Egyptian cuisine included."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "private-cairo-trip-by-plane-hurghada",
    image: image16,
    title: "Private Cairo Trip by Plane",
    description: "Looking for the best way to explore Cairo and Ancient Egypt...",
    seoTitle: "Private Cairo Trip by Plane",
    seoDescription: "Looking for the best way to explore Cairo and Ancient Egypt...",
    price: "From $265",
    duration: "Full day",
    groupSize: "Up to 6 people",
    rating: 5,
    availability: "Daily",
    category: "Historical",
    longDescription: "Are you tired of the long bus journey? Choose luxury and comfort with a private plane trip from Hurghada to Cairo. Save time and enjoy sightseeing without rushing.\n\n**Why choose Cairo by plane?**\nIt is the fastest and most comfortable way to see the pyramids. Instead of 6 hours on a bus, the flight takes only one hour. You will see Cairo and Ancient Egypt in one day, returning to Hurghada by dinner time relaxed, not tired.\n\n\n\n**What is included?**\nFlight tickets, private transfers (Hurghada & Cairo), private guide, entrance tickets, luxury lunch, taxes.\n\n**What to bring?**\nPassport (required for flight!), breakfast box, water, camera, comfortable shoes, hat.\n\n**Optional extras (paid):**\nNile cruise ($15), camel ride ($10). Drinks and tips not included.\n\n**Regional transfers:**\nTransfer from Sahl Hasheesh, Makadi, Safaga, El Gouna: +$5-10/pp.",
    program: ["**Pickup (~06:30 AM):** Private transfer to Hurghada airport.","**Flight:** Scenic flight over mountains and desert to Cairo.","**Cairo Transfer:** Luxury private minibus with a driver.","**Pyramids of Giza:** Admire the eternal symbols of antiquity â€“ Cheops, Chephren, and Mykerinos pyramids.","**Sphinx:** Meeting the enigmatic guardian of the pyramids.","**Egyptian Museum:** Treasury with thousands of exhibits, including Tutankhamun's mask.","**Religious Cairo:** Amr Ibn Al-Aas Mosque, Hanging Church (3rd century), Saints Sergius Church, Ben Ezra Synagogue.","**Lunch:** Exquisite luxury lunch (Egyptian cuisine).","**Return:** Transfer to airport and flight back to Hurghada."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
  {
    slug: "luxor-valley-of-kings-hurghada",
    image: image18,
    title: "Luxor with Valley of the Kings",
    description: "Hurghada is a popular tourist destination, famous for its beautiful beaches, corals and heavenly coral reefs. One of the biggest attractions of this region of Egypt are trips to Luxor with the Valley of the Kings.",
    seoTitle: "Luxor with Valley of the Kings",
    seoDescription: "Hurghada is a popular tourist destination, famous for its beautiful beaches, corals and heavenly coral reefs. One of the biggest attractions of this region of Egypt are trips to Luxor with the Valley of the Kings.",
    price: "From $60",
    duration: "Full day",
    groupSize: "Up to 20 people",
    rating: 4.9,
    availability: "Daily",
    category: "Historical",
    longDescription: "The trip to Luxor with the Valley of the Kings is an unforgettable experience and a journey deep into the history of ancient Egypt. Luxor, often called the world's greatest open-air museum, hides treasures that must be seen.\n\n**What will you see in Luxor?**\n*   **Karnak Temple:** A huge complex built over 2000 years with the impressive Hypostyle Hall (134 columns).\n*   **Valley of the Kings:** Resting places of pharaohs from the XVIII-XX dynasties. You will enter 3 tombs (usually Ramesses III, IV, and IX). These are true works of art carved in rock, full of paintings.\n*   **Hatshepsut Temple:** Unique terraced temple of the female pharaoh, Deir el-Bahari.\n*   **Colossi of Memnon:** Two giant statues guarding the former temple of Amenhotep III.\n\n**Why choose this tour?**\n*   **Comfort:** You travel in an air-conditioned bus, ensuring comfort in the Egyptian climate.\n*   **Knowledge:** An experienced guide will reveal the secrets of pharaohs and gods to you.\n*   **Comprehensiveness:** You will see the most important monuments in one day (East and West Bank of the Nile).\n\n\n\n**What to bring?**\nComfortable shoes, headgear, sunglasses, water, camera.",
    program: ["**Transfer:** Early departure from Hurghada by air-conditioned bus.","**Karnak Temple:** Visiting the temple complex.","**Nile Crossing:** Short boat trip to the west bank (often combined with lunch).","**Lunch:** Buffet meal in a restaurant included in the price.","**Colossi of Memnon:** Photo stop by the statues.","**Hatshepsut Temple:** Visiting the temple embedded in the cliff.","**Valley of the Kings:** Entrance to three pharaohs' tombs. (Note: Tutankhamun's tomb extra paid).","**Return:** Back to Hurghada in the evening."],
    included: ["Transfer","Guide"],
    notIncluded: ["Personal expenses","Tips"]
  },
];

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find((t) => t.slug === slug);
};

export const safariTours = tours.filter((t) => t.category === "Safari & Adventure");
export const seaTours = tours.filter((t) => t.category === "Sea & Snorkeling");
export const cairoTours = tours.filter((t) => t.category === "Historical");
export const cityTours = tours.filter((t) => t.category === "City & Attractions");

