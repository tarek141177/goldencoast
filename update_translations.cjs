const fs = require('fs');

const data = {
  aboutSection: {
    en: {
      subtitle: "About Golden Coast Excursions",
      title: "Creating Unforgettable Memories Since 2010",
      description: "At Golden Coast Excursions, we believe travel should be an extraordinary experience. For over a decade, we've guided guests through the wonders of Hurghada — from the spectacular underwater world of the Red Sea to the mystical beauty of the Eastern Desert.",
      features: {
        guides: "Expert Guides", guidesDesc: "English-speaking guides with deep knowledge of Egypt.",
        service: "Personalized Service", serviceDesc: "Every tour tailored to your preferences.",
        safety: "Safety First", safetyDesc: "Certified equipment and trained professionals.",
        eco: "Eco Tourism", ecoDesc: "Protecting the Red Sea ecosystem."
      }
    },
    de: {
      subtitle: "Über Golden Coast Excursions",
      title: "Wir schaffen unvergessliche Erinnerungen seit 2010",
      description: "Wir bei Golden Coast Excursions glauben, dass Reisen ein außergewöhnliches Erlebnis sein sollte. Seit über einem Jahrzehnt führen wir Gäste durch die Wunder von Hurghada – von der spektakulären Unterwasserwelt des Roten Meeres bis zur mystischen Schönheit der östlichen Wüste.",
      features: {
        guides: "Erfahrene Reiseleiter", guidesDesc: "Englischsprachige Reiseleiter mit tiefgründigem Wissen über Ägypten.",
        service: "Persönlicher Service", serviceDesc: "Jede Tour wird nach Ihren Wünschen individuell gestaltet.",
        safety: "Sicherheit zuerst", safetyDesc: "Zertifizierte Ausrüstung und ausgebildete Profis.",
        eco: "Ökotourismus", ecoDesc: "Schutz des Ökosystems des Roten Meeres."
      }
    },
    nl: {
      subtitle: "Over Golden Coast Excursions",
      title: "We creëren onvergetelijke herinneringen sinds 2010",
      description: "Bij Golden Coast Excursions geloven we dat reizen een buitengewone ervaring moet zijn. Al meer dan een decennium begeleiden we gasten door de wonderen van Hurghada — van de spectaculaire onderwaterwereld van de Rode Zee tot de mystieke schoonheid van de oosterse woestijn.",
      features: {
        guides: "Deskundige Gidsen", guidesDesc: "Engelssprekende gidsen met diepgaande kennis van Egypte.",
        service: "Persoonlijke Service", serviceDesc: "Elke tour afgestemd op uw voorkeuren.",
        safety: "Veiligheid Voorop", safetyDesc: "Gecertificeerde apparatuur en getrainde professionals.",
        eco: "Ecotourisme", ecoDesc: "Bescherming van het ecosysteem van de Rode Zee."
      }
    },
    pl: {
      subtitle: "O Golden Coast Excursions",
      title: "Tworzymy niezapomniane wspomnienia od 2010 roku",
      description: "W Golden Coast Excursions wierzymy, że podróżowanie powinno być niezwykłym przeżyciem. Od ponad dekady oprowadzamy gości po cudach Hurghady — od spektakularnego podwodnego świata Morza Czerwonego po mistyczne piękno Pustyni Wschodniej.",
      features: {
        guides: "Praktyczni Przewodnicy", guidesDesc: "Anglojęzyczni przewodnicy z głęboką wiedzą o Egipcie.",
        service: "Spersonalizowana Obsługa", serviceDesc: "Każda wycieczka dostosowana do Twoich preferencji.",
        safety: "Bezpieczeństwo Przede Wszystkim", safetyDesc: "Certyfikowany sprzęt i wyszkoleni profesjonaliści.",
        eco: "Ekoturystyka", ecoDesc: "Ochrona ekosystemu Morza Czerwonego."
      }
    },
    fr: {
      subtitle: "À propos de Golden Coast Excursions",
      title: "Créer des souvenirs inoubliables depuis 2010",
      description: "Chez Golden Coast Excursions, nous pensons que le voyage doit être une expérience extraordinaire. Depuis plus d'une décennie, nous guidons nos clients à travers les merveilles d'Hurghada — du monde sous-marin spectaculaire de la mer Rouge à la beauté mystique du désert oriental.",
      features: {
        guides: "Guides Experts", guidesDesc: "Guides anglophones avec une connaissance approfondie de l'Égypte.",
        service: "Service Personnalisé", serviceDesc: "Chaque excursion est adaptée à vos préférences.",
        safety: "Priorité à la Sécurité", safetyDesc: "Équipement certifié et professionnels formés.",
        eco: "Écotourisme", ecoDesc: "Protéger l'écosystème de la mer Rouge."
      }
    }
  },
  contactSection: {
    en: {
      subtitle: "Start Your Journey", title: "Ready for Magical Moments?", description: "Let us create your perfect adventure in Hurghada.",
      location: "Location", locationValue: "Hurghada Marina, Red Sea, Egypt",
      phone: "Phone", email: "Email",
      hours: "Working Hours", hoursValue: "Daily: 7:00 AM - 10:00 PM",
      form: { firstName: "First Name", lastName: "Last Name", email: "Email", interest: "Select a tour...", message: "Message", submit: "Send Message" }
    },
    de: {
      subtitle: "Beginnen Sie Ihre Reise", title: "Bereit für magische Momente?", description: "Lassen Sie uns Ihr perfektes Abenteuer in Hurghada kreieren.",
      location: "Standort", locationValue: "Hurghada Marina, Rotes Meer, Ägypten",
      phone: "Telefon", email: "E-Mail",
      hours: "Arbeitszeiten", hoursValue: "Täglich: 7:00 - 22:00 Uhr",
      form: { firstName: "Vorname", lastName: "Nachname", email: "E-Mail", interest: "Wählen Sie eine Tour...", message: "Nachricht", submit: "Nachricht Senden" }
    },
    nl: {
      subtitle: "Begin uw reis", title: "Klaar voor magische momenten?", description: "Laat ons uw perfecte avontuur in Hurghada samenstellen.",
      location: "Locatie", locationValue: "Hurghada Marina, Rode Zee, Egypte",
      phone: "Telefoon", email: "E-mail",
      hours: "Werktijden", hoursValue: "Dagelijks: 7:00 - 22:00 uur",
      form: { firstName: "Voornaam", lastName: "Achternaam", email: "E-mail", interest: "Selecteer een tour...", message: "Bericht", submit: "Verstuur Bericht" }
    },
    pl: {
      subtitle: "Rozpocznij swoją podróż", title: "Gotowy na magiczne chwile?", description: "Pozwól nam stworzyć Twoją idealną przygodę w Hurghadzie.",
      location: "Lokalizacja", locationValue: "Hurghada Marina, Morze Czerwone, Egipt",
      phone: "Telefon", email: "E-mail",
      hours: "Godziny pracy", hoursValue: "Codziennie: 7:00 - 22:00",
      form: { firstName: "Imię", lastName: "Nazwisko", email: "E-mail", interest: "Wybierz wycieczkę...", message: "Wiadomość", submit: "Wyślij Wiadomość" }
    },
    fr: {
      subtitle: "Commencez votre voyage", title: "Prêt pour des moments magiques ?", description: "Laissez-nous créer votre aventure parfaite à Hurghada.",
      location: "Emplacement", locationValue: "Marina d'Hurghada, Mer Rouge, Égypte",
      phone: "Téléphone", email: "E-mail",
      hours: "Heures de travail", hoursValue: "Tous les jours : 7h00 - 22h00",
      form: { firstName: "Prénom", lastName: "Nom de famille", email: "E-mail", interest: "Sélectionnez une excursion...", message: "Message", submit: "Envoyer le Message" }
    }
  },
  aboutPage: {
    en: {
      title: "About Us",
      subtitle: "Who we are, what we do, and why we are your best choice for discovering the beauty of Hurghada.",
      welcome: "Welcome to Golden Coast Excursions. We are a passionate team of local experts dedicated to showcasing the absolute best that Hurghada and the Red Sea have to offer.",
      missionTitle: "Our Mission",
      missionDesc: "Our mission is simple: to provide unforgettable, safe, and high-quality tours that allow our guests to experience the true magic of Egypt. Whether you're plunging into the crystal-clear waters of the Red Sea to explore vibrant coral reefs, speeding across the desert dunes on a quad bike, or walking through the ancient temples of Luxor, we are here to make your dream vacation a reality.",
      whyUsTitle: "Why Choose Us?",
      whyUs: {
        expertiseLabel: "Local Expertise:", expertiseDesc: "Our guides aren't just knowledgeable; they are locals who are passionate about their home and eager to share its secrets with you.",
        safetyLabel: "Uncompromising Safety:", safetyDesc: "Your safety is our top priority. All our equipment is maintained to the highest standards, and our staff undergo rigorous safety training.",
        valueLabel: "Value for Money:", valueDesc: "We believe exceptional experiences shouldn't break the bank. We offer competitive pricing with no hidden fees."
      },
      stats: { guests: "Happy Guests", tours: "Unique Tours", experience: "Years Experience", photos: "Photos Taken" }
    },
    de: {
      title: "Über uns",
      subtitle: "Wer wir sind, was wir tun und warum wir Ihre beste Wahl sind, um die Schönheit von Hurghada zu entdecken.",
      welcome: "Willkommen bei Golden Coast Excursions. Wir sind ein leidenschaftliches Team von lokalen Experten, das sich darauf konzentriert, das absolut Beste zu zeigen, was Hurghada und das Rote Meer zu bieten haben.",
      missionTitle: "Unsere Mission",
      missionDesc: "Unsere Mission ist einfach: unvergessliche, sichere und hochwertige Touren anzubieten, die unseren Gästen ermöglichen, die wahre Magie Ägyptens zu erleben. Ob Sie in das kristallklare Wasser des Roten Meeres tauchen, um lebhafte Korallenriffe zu erkunden, auf einem Quad über die Wüstendünen flitzen oder durch die antiken Tempel von Luxor spazieren, wir sind hier, um Ihren Traumurlaub Wirklichkeit werden zu lassen.",
      whyUsTitle: "Warum uns wählen?",
      whyUs: {
        expertiseLabel: "Lokale Expertise:", expertiseDesc: "Unsere Reiseleiter sind nicht nur sachkundig; sie sind Einheimische, die ihre Heimat lieben und ihre Geheimnisse gerne mit Ihnen teilen.",
        safetyLabel: "Kompromisslose Sicherheit:", safetyDesc: "Ihre Sicherheit hat bei uns oberste Priorität. Unsere gesamte Ausrüstung wird nach den höchsten Standards gewartet und unsere Mitarbeiter durchlaufen strenge Sicherheitstrainings.",
        valueLabel: "Preis-Leistungs-Verhältnis:", valueDesc: "Wir glauben, dass außergewöhnliche Erlebnisse nicht teuer sein müssen. Wir bieten wettbewerbsfähige Preise ohne versteckte Gebühren."
      },
      stats: { guests: "Glückliche Gäste", tours: "Einzigartige Touren", experience: "Jahre Erfahrung", photos: "Fotos aufgenommen" }
    },
    nl: {
      title: "Over Ons",
      subtitle: "Wie we zijn, wat we doen en waarom wij uw beste keuze zijn voor het ontdekken van de schoonheid van Hurghada.",
      welcome: "Welkom bij Golden Coast Excursions. Wij zijn een gepassioneerd team van lokale experts die zich toeleggen op het tonen van het absolute beste dat Hurghada en de Rode Zee te bieden hebben.",
      missionTitle: "Onze Missie",
      missionDesc: "Onze missie is simpel: onvergetelijke, veilige en hoogwaardige tours bieden die onze gasten in staat stellen om de ware magie van Egypte te ervaren. Of u nu in het kristalheldere water van de Rode Zee duikt om levendige koraalriffen te verkennen, op een quad over de woestijnduinen racet of door de oude tempels van Luxor wandelt, wij zijn hier om uw droomvakantie werkelijkheid te maken.",
      whyUsTitle: "Waarom voor ons kiezen?",
      whyUs: {
        expertiseLabel: "Lokale Expertise:", expertiseDesc: "Onze gidsen zijn niet alleen deskundig; het zijn de lokale bevolking die gepassioneerd is over hun thuis en graag de geheimen met u deelt.",
        safetyLabel: "Compromisloze Veiligheid:", safetyDesc: "Uw veiligheid is onze topprioriteit. Al onze apparatuur wordt onderhouden volgens de hoogste normen en ons personeel ondergaat strenge veiligheidstrainingen.",
        valueLabel: "Waar voor uw geld:", valueDesc: "Wij geloven dat buitengewone ervaringen niet te veel hoeven te kosten. Wij bieden scherpe prijzen zonder verborgen kosten."
      },
      stats: { guests: "Blije Gasten", tours: "Unieke Tours", experience: "Jaren Ervaring", photos: "Foto's Gemaakt" }
    },
    pl: {
      title: "O Nas",
      subtitle: "Kim jesteśmy, co robimy i dlaczego jesteśmy najlepszym wyborem do odkrywania piękna Hurghady.",
      welcome: "Witamy w Golden Coast Excursions. Jesteśmy pełnym pasji zespołem lokalnych ekspertów, którzy chcą pokazać to, co Hurghada i Morze Czerwone mają najlepszego do zaoferowania.",
      missionTitle: "Nasza Misja",
      missionDesc: "Nasza misja jest prosta: zapewnić niezapomniane, bezpieczne i wysokiej jakości wycieczki, które pozwolą naszym gościom doświadczyć prawdziwej magii Egiptu. Niezależnie od tego, czy zanurzasz się w krystalicznie czystych wodach Morza Czerwonego, aby odkrywać tętniące życiem rafy koralowe, pędzisz przez wydmy pustyni na quadzie, czy spacerujesz po starożytnych świątyniach Luksoru, jesteśmy tutaj, aby Twoje wymarzone wakacje stały się rzeczywistością.",
      whyUsTitle: "Dlaczego my?",
      whyUs: {
        expertiseLabel: "Lokalna Ekspertyza:", expertiseDesc: "Nasi przewodnicy to nie tylko specjaliści w swojej dziedzinie; to mieszkańcy, którzy pasjonują się swoim domem i chętnie dzielą się jego sekretami.",
        safetyLabel: "Bezkompromisowe Bezpieczeństwo:", safetyDesc: "Twoje bezpieczeństwo jest naszym najwyższym priorytetem. Cały nasz sprzęt jest utrzymywany w najwyższych standardach, a nasz personel przechodzi rygorystyczne szkolenia z zakresu bezpieczeństwa.",
        valueLabel: "Wartość za pieniądze:", valueDesc: "Wierzymy, że wyjątkowe doświadczenia nie muszą rozbijać banku. Oferujemy konkurencyjne ceny bez ukrytych opłat."
      },
      stats: { guests: "Zadowoleni Goście", tours: "Unikalne Wycieczki", experience: "Lata Doświadczenia", photos: "Zrobione Zdjęcia" }
    },
    fr: {
      title: "À Propos de Nous",
      subtitle: "Qui nous sommes, ce que nous faisons et pourquoi nous sommes votre meilleur choix pour découvrir la beauté d'Hurghada.",
      welcome: "Bienvenue chez Golden Coast Excursions. Nous sommes une équipe passionnée d'experts locaux qui se consacrent à mettre en valeur le nec plus ultra d'Hurghada et de la mer Rouge.",
      missionTitle: "Notre Mission",
      missionDesc: "Notre mission est simple : proposer des excursions inoubliables, sûres et de haute qualité qui permettent à nos clients de vivre la véritable magie de l'Égypte. Que vous plongiez dans les eaux cristallines de la mer Rouge pour explorer des récifs coralliens vibrants, que vous traversiez les dunes du désert en quad ou que vous vous promeniez dans les anciens temples de Louxor, nous sommes là pour faire de vos vacances de rêve une réalité.",
      whyUsTitle: "Pourquoi Nous Choisir ?",
      whyUs: {
        expertiseLabel: "Expertise Locale :", expertiseDesc: "Nos guides ne sont pas seulement bien informés ; ce sont des habitants passionnés par leur région et désireux d'en partager les secrets avec vous.",
        safetyLabel: "Sécurité Intransigeante :", safetyDesc: "Votre sécurité est notre priorité absolue. Tous nos équipements sont maintenus aux normes les plus élevées et notre personnel suit une formation rigoureuse en matière de sécurité.",
        valueLabel: "Rapport Qualité-Prix :", valueDesc: "Nous croyons que des expériences exceptionnelles ne doivent pas vous ruiner. Nous proposons des tarifs très compétitifs sans frais cachés."
      },
      stats: { guests: "Clients Heureux", tours: "Excursions Uniques", experience: "Années d'Expérience", photos: "Photos Prises" }
    }
  }
};

const translationsPath = './src/data/translations.ts';
let fileContent = fs.readFileSync(translationsPath, 'utf8');

const langs = ['en', 'de', 'nl', 'pl', 'fr'];
langs.forEach(lang => {
  const insertIndex = fileContent.indexOf(`\n  ${lang}: {`) + `\n  ${lang}: {`.length;
  
  const newProps = `
    aboutSection: ${JSON.stringify(data.aboutSection[lang])},
    contactSection: ${JSON.stringify(data.contactSection[lang])},
    aboutPage: ${JSON.stringify(data.aboutPage[lang])},`;
    
  fileContent = fileContent.slice(0, insertIndex) + newProps + fileContent.slice(insertIndex);
});

fs.writeFileSync(translationsPath, fileContent);
console.log('Translations updated.');
