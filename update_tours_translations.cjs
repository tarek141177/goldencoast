const fs = require('fs');
const translationsPath = './src/data/translations.ts';

const data = {
  toursPage: {
    en: {
      title: "All Our Tours",
      subtitle: "Discover all the amazing experiences we offer in and around Hurghada. From desert safaris to historical trips.",
      groups: {
        sea: { title: "Sea & Snorkeling", desc: "Discover the Red Sea paradise! Orange Bay, Giftun Island, dolphin snorkeling and coral reefs." },
        safari: { title: "Safari & Adventure", desc: "Experience an unforgettable desert adventure! Quad biking, buggy rides, and a visit to a Bedouin village." },
        history: { title: "Historical Trips", desc: "Discover the wonders of ancient Egypt! Pyramids of Giza, Sphinx, Grand Egyptian Museum, and Luxor." },
        city: { title: "City & Attractions", desc: "Explore the beauty of Hurghada, El Gouna, and top local attractions like the Grand Aquarium." }
      }
    },
    de: {
      title: "Alle unsere Touren",
      subtitle: "Entdecken Sie all die erstaunlichen Erlebnisse, die wir in und um Hurghada anbieten. Von Wüstensafaris bis hin zu historischen Ausflügen.",
      groups: {
        sea: { title: "Meer & Schnorcheln", desc: "Entdecken Sie das Rote Meer-Paradies! Orange Bay, Giftun Island, Delfin-Schnorcheln und Korallenriffe." },
        safari: { title: "Safari & Abenteuer", desc: "Erleben Sie ein unvergessliches Wüstenabenteuer! Quadfahren, Buggyfahrten und ein Besuch in einem Beduinendorf." },
        history: { title: "Historische Ausflüge", desc: "Entdecken Sie die Wunder des alten Ägypten! Pyramiden von Gizeh, Sphinx, Großes Ägyptisches Museum und Luxor." },
        city: { title: "Stadt & Attraktionen", desc: "Erkunden Sie die Schönheit von Hurghada, El Gouna und Top-Attraktionen der Umgebung wie das Grand Aquarium." }
      }
    },
    nl: {
      title: "Al Onze Tours",
      subtitle: "Ontdek alle geweldige ervaringen die wij aanbieden in en rond Hurghada. Van woestijnsafari's tot historische trips.",
      groups: {
        sea: { title: "Zee & Snorkelen", desc: "Ontdek het Rode Zee paradijs! Orange Bay, Giftun eiland, dolfijnen snorkelen en koraalriffen." },
        safari: { title: "Safari & Avontuur", desc: "Beleef een onvergetelijk woestijnavontuur! Quadrijden, buggyritten en een bezoek aan een bedoeïenendorp." },
        history: { title: "Historische Trips", desc: "Ontdek de wonderen van het oude Egypte! Piramides van Gizeh, Sfinx, Groot Egyptisch Museum en Luxor." },
        city: { title: "Stad & Attracties", desc: "Verken de schoonheid van Hurghada, El Gouna en top lokale attracties zoals het Grand Aquarium." }
      }
    },
    pl: {
      title: "Wszystkie Nasze Wycieczki",
      subtitle: "Odkryj wszystkie niesamowite doświadczenia, które oferujemy w okolicach Hurghady. Od safari na pustyni po wycieczki historyczne.",
      groups: {
        sea: { title: "Morze i Snorkeling", desc: "Odkryj raj Morza Czerwonego! Orange Bay, wyspa Giftun, snorkeling z delfinami i rafy koralowe." },
        safari: { title: "Safari i Przygoda", desc: "Przeżyj niezapomnianą przygodę na pustyni! Jazda quadami, przewoźne buggy i wizyta w wiosce Beduinów." },
        history: { title: "Wycieczki Historyczne", desc: "Odkryj cuda starożytnego Egiptu! Piramidy w Gizie, Sfinks, Wielkie Muzeum Egipskie i Luksor." },
        city: { title: "Miasto i Atrakcje", desc: "Poznaj piękno Hurghady, El Gouna oraz najważniejsze lokalne atrakcje, takie jak Grand Aquarium." }
      }
    },
    fr: {
      title: "Toutes Nos Excursions",
      subtitle: "Découvrez toutes les expériences incroyables que nous proposons dans et autour d'Hurghada. Des safaris dans le désert aux voyages historiques.",
      groups: {
        sea: { title: "Mer et Plongée", desc: "Découvrez le paradis de la mer Rouge ! Orange Bay, l'île de Giftun, plongée avec les dauphins et récifs coralliens." },
        safari: { title: "Safari et Aventure", desc: "Vivez une aventure inoubliable dans le désert ! Randonnée en quad, promenades en buggy et visite d'un village bédouin." },
        history: { title: "Voyages Historiques", desc: "Découvrez les merveilles de l'Égypte ancienne ! Pyramides de Gizeh, Sphinx, Grand Musée égyptien et Louxor." },
        city: { title: "Ville et Attractions", desc: "Explorez la beauté d'Hurghada, de l'El Gouna et des principales attractions locales telles que le Grand Aquarium." }
      }
    }
  },
  toursSection: {
    en: {
      groups: {
        safari: { label: "Quad, Buggy & Adventure", title: "Desert Safari from Hurghada", desc: "Experience an unforgettable desert adventure! Quad biking, buggy rides, and a visit to a Bedouin village." },
        sea: { label: "Snorkeling & Islands", title: "Sea Trips from Hurghada", desc: "Discover the Red Sea paradise! Orange Bay, Giftun Island, dolphin snorkeling and coral reefs. ✓ Equipment included ✓ Lunch and drinks ✓ Hotel pickup. Book today!" },
        cairo: { label: "Pyramids, Museum & Sphinx", title: "Cairo Trip from Hurghada", desc: "Discover the wonders of ancient Egypt! Pyramids of Giza, Sphinx, Grand Egyptian Museum. ✓ By plane ✓ Professional guide ✓ Lunch. Book the day trip!" }
      }
    },
    de: {
      groups: {
        safari: { label: "Quad, Buggy & Abenteuer", title: "Wüstensafari ab Hurghada", desc: "Erleben Sie ein unvergessliches Wüstenabenteuer! Quadfahren, Buggyfahrten und ein Besuch in einem Beduinendorf." },
        sea: { label: "Schnorcheln & Inseln", title: "Meeresausflüge ab Hurghada", desc: "Entdecken Sie das Rote Meer-Paradies! Orange Bay, Giftun Island, Delfin-Schnorcheln und Korallenriffe. ✓ Ausrüstung inklusive ✓ Mittagessen und Getränke ✓ Hotelabholung. Buchen Sie heute!" },
        cairo: { label: "Pyramiden, Museum & Sphinx", title: "Kairo-Ausflug ab Hurghada", desc: "Entdecken Sie die Wunder des alten Ägypten! Pyramiden von Gizeh, Sphinx, Großes Ägyptisches Museum. ✓ Mit dem Flugzeug ✓ Professioneller Reiseleiter ✓ Mittagessen. Buchen Sie den Tagesausflug!" }
      }
    },
    nl: {
      groups: {
        safari: { label: "Quad, Buggy & Avontuur", title: "Woestijnsafari vanuit Hurghada", desc: "Beleef een onvergetelijk woestijnavontuur! Quadrijden, buggyritten en een bezoek aan een bedoeïenendorp." },
        sea: { label: "Snorkelen & Eilanden", title: "Zeetochten vanuit Hurghada", desc: "Ontdek het Rode Zee paradijs! Orange Bay, Giftun Eiland, dolfijnen snorkelen en koraalriffen. ✓ Uitrusting inbegrepen ✓ Lunch en drankjes ✓ Ophaalservice vanaf hotel. Boek vandaag!" },
        cairo: { label: "Piramides, Museum & Sfinx", title: "Caïro Trip vanuit Hurghada", desc: "Ontdek de wonderen van het oude Egypte! Piramides van Gizeh, Sfinx, Groot Egyptisch Museum. ✓ Per vliegtuig ✓ Professionele gids ✓ Lunch. Boek de dagtocht!" }
      }
    },
    pl: {
      groups: {
        safari: { label: "Quad, Buggy i Przygoda", title: "Safari na Pustyni z Hurghady", desc: "Przeżyj niezapomnianą przygodę na pustyni! Jazda quadami, przewoźne buggy i wizyta w wiosce Beduinów." },
        sea: { label: "Snorkeling i Wyspy", title: "Rejsy Morskie z Hurghady", desc: "Odkryj raj Morza Czerwonego! Orange Bay, wyspa Giftun, snorkeling z delfinami i rafy koralowe. ✓ Sprzęt w cenie ✓ Lunch i napoje ✓ Odbiór z hotelu. Zarezerwuj już dziś!" },
        cairo: { label: "Piramidy, Muzeum i Sfinks", title: "Wycieczka do Kairu z Hurghady", desc: "Odkryj cuda starożytnego Egiptu! Piramidy w Gizie, Sfinks, Wielkie Muzeum Egipskie. ✓ Samolotem ✓ Profesjonalny przewodnik ✓ Lunch. Zarezerwuj jednodniową wycieczkę!" }
      }
    },
    fr: {
      groups: {
        safari: { label: "Quad, Buggy et Aventure", title: "Safari dans le Désert depuis Hurghada", desc: "Vivez une aventure inoubliable dans le désert ! Randonnée en quad, promenades en buggy et visite d'un village bédouin." },
        sea: { label: "Plongée et Îles", title: "Excursions en Mer depuis Hurghada", desc: "Découvrez le paradis de la mer Rouge ! Orange Bay, l'île de Giftun, plongée avec les dauphins et récifs coralliens. ✓ Équipement inclus ✓ Déjeuner et boissons ✓ Prise en charge à l'hôtel. Réservez aujourd'hui !" },
        cairo: { label: "Pyramides, Musée et Sphinx", title: "Excursion au Caire depuis Hurghada", desc: "Découvrez les merveilles de l'Égypte ancienne ! Pyramides de Gizeh, Sphinx, Grand Musée égyptien. ✓ En avion ✓ Guide professionnel ✓ Déjeuner. Réservez cette excursion d'une journée !" }
      }
    }
  },
  tourDetail: {
    en: {
      notFound: "Tour Not Found",
      backHome: "Back to Home",
      backTours: "Back to all tours",
      fromPrice: "From",
      stats: { duration: "Duration", group: "Group size", rating: "Rating", availability: "Availability" },
      aboutLabel: "Tour Details",
      aboutTitle: "About This Tour",
      programTitle: "Tour Program",
      includedTitle: "What's Included",
      notIncludedTitle: "Not Included",
      bookingLabel: "Booking",
      pricePerPerson: "Price per person",
      bookViaWhatsApp: "Book via WhatsApp",
      noPrepayment: "No prepayment required. Pay your guide on the day.",
      brand: "Golden Coast Excursions"
    },
    de: {
      notFound: "Tour nicht gefunden",
      backHome: "Zurück zur Startseite",
      backTours: "Zurück zu allen Touren",
      fromPrice: "Ab",
      stats: { duration: "Dauer", group: "Gruppengröße", rating: "Bewertung", availability: "Verfügbarkeit" },
      aboutLabel: "Tour Details",
      aboutTitle: "Über diese Tour",
      programTitle: "Tourprogramm",
      includedTitle: "Was inklusive ist",
      notIncludedTitle: "Nicht inklusive",
      bookingLabel: "Buchung",
      pricePerPerson: "Preis pro Person",
      bookViaWhatsApp: "Buchen über WhatsApp",
      noPrepayment: "Keine Vorauszahlung erforderlich. Zahlen Sie am Tag bei Ihrem Begleiter.",
      brand: "Golden Coast Excursions"
    },
    nl: {
      notFound: "Tour Niet Gevonden",
      backHome: "Terug naar Home",
      backTours: "Terug naar alle tours",
      fromPrice: "Vanaf",
      stats: { duration: "Duur", group: "Groepsgrootte", rating: "Beoordeling", availability: "Beschikbaarheid" },
      aboutLabel: "Tour Details",
      aboutTitle: "Over Deze Tour",
      programTitle: "Tourprogramma",
      includedTitle: "Wat Is Inbegrepen",
      notIncludedTitle: "Niet Inbegrepen",
      bookingLabel: "Boeking",
      pricePerPerson: "Prijs per persoon",
      bookViaWhatsApp: "Boek via WhatsApp",
      noPrepayment: "Geen vooruitbetaling vereist. Betaal uw gids op de dag zelf.",
      brand: "Golden Coast Excursions"
    },
    pl: {
      notFound: "Nie Znaleziono Wycieczki",
      backHome: "Powrót do Strony Głównej",
      backTours: "Powrót do wszystkich wycieczek",
      fromPrice: "Cena Od",
      stats: { duration: "Czas trwania", group: "Wielkość grupy", rating: "Ocena", availability: "Dostępność" },
      aboutLabel: "Szczegóły Wycieczki",
      aboutTitle: "O Tej Wycieczce",
      programTitle: "Program Wycieczki",
      includedTitle: "Co Jest Wliczone",
      notIncludedTitle: "Co Nie Jest Wliczone",
      bookingLabel: "Rezerwacja",
      pricePerPerson: "Cena za osobę",
      bookViaWhatsApp: "Zarezerwuj przez WhatsApp",
      noPrepayment: "Brak przedpłaty. Zapłać swojemu przewodnikowi w dniu wycieczki.",
      brand: "Golden Coast Excursions"
    },
    fr: {
      notFound: "Excursion Non Trouvée",
      backHome: "Retour à l'Accueil",
      backTours: "Retour à toutes les excursions",
      fromPrice: "À partir de",
      stats: { duration: "Durée", group: "Taille du groupe", rating: "Évaluation", availability: "Disponibilité" },
      aboutLabel: "Détails de l'Excursion",
      aboutTitle: "À Propos de Cette Excursion",
      programTitle: "Programme de l'Excursion",
      includedTitle: "Ce Qui Est Inclus",
      notIncludedTitle: "Non Inclus",
      bookingLabel: "Réservation",
      pricePerPerson: "Prix par personne",
      bookViaWhatsApp: "Réserver via WhatsApp",
      noPrepayment: "Aucun paiement à l'avance requis. Payer votre guide le jour même.",
      brand: "Golden Coast Excursions"
    }
  }
};

let fileContent = fs.readFileSync(translationsPath, 'utf8');

const langs = ['en', 'de', 'nl', 'pl', 'fr'];
langs.forEach(lang => {
  const insertIndex = fileContent.indexOf(`\n  ${lang}: {`) + `\n  ${lang}: {`.length;
  const newProps = `\n    toursPage: ${JSON.stringify(data.toursPage[lang])},\n    toursSection: ${JSON.stringify(data.toursSection[lang])},\n    tourDetail: ${JSON.stringify(data.tourDetail[lang])},`;
  fileContent = fileContent.slice(0, insertIndex) + newProps + fileContent.slice(insertIndex);
});

fs.writeFileSync(translationsPath, fileContent);
console.log('Tours translations updated.');
