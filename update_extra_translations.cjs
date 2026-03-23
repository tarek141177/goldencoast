const fs = require('fs');
const path = require('path');

const translationsPath = path.resolve('./src/data/translations.ts');
let fileContent = fs.readFileSync(translationsPath, 'utf8');

const data = {
  en: {
    agencyIntro: {
      subtitle: "Golden Coast Excursions Hurghada",
      title: "Your Local Travel Agency in Hurghada",
      desc: "Our tours stand out for their highest quality and attention to detail. We offer a wide range of attractions tailored to every taste – from relaxing cruises to exciting safaris. We guarantee professional service and unforgettable experiences.",
      btn: "See all tours"
    },
    testimonials: {
      subtitle: "Reviews",
      title: "What Our Clients Say",
      label: "Tours from Hurghada",
      reviews: [
        { name: "Sarah Mitchell", text: "I went on 3 tours with Golden Coast Excursions and the Luxor trip was absolutely incredible. The guides are amazing people — organization was top notch!" },
        { name: "James Cooper", text: "Exploring Egypt with Golden Coast Excursions was one of the best experiences of my life. The guides were incredibly professional and helpful." },
        { name: "Emma Richardson", text: "We came back from our holiday absolutely delighted! Communication before the trip was lightning fast, and the care on-site was world-class. 100% recommend." },
        { name: "Michael Zhang", text: "Wonderful experiences and unforgettable memories! From Marsa Alam to Cairo — we're impressed by the organization. Already planning our next trip!" }
      ]
    },
    faqs: {
      subtitle: "FAQ",
      title: "Frequently Asked Questions",
      tags: ["Licensed operator", "15 years experience", "24/7 support"],
      items: [
        { q: "Is booking with Golden Coast Excursions safe?", a: "Yes. We are a licensed Egyptian tour operator with 15 years of experience. All tours are led by certified guides." },
        { q: "How do I book a tour?", a: "Online through our website or via WhatsApp. Pay your guide at the start of the tour — no prepayment required." },
        { q: "Do I need to pay upfront?", a: "No. You pay cash to the guide who picks you up from your hotel at the start of the tour." },
        { q: "Are tours available in my language?", a: "Yes, we offer tours in English, Polish, and other languages." },
        { q: "What if I need to cancel?", a: "Free cancellation up to 24 hours before departure. No hidden fees." },
        { q: "Are your prices competitive?", a: "As a local operator, we offer prices 30-50% lower than hotel tour desks." }
      ]
    }
  },
  de: {
    agencyIntro: {
      subtitle: "Golden Coast Excursions Hurghada",
      title: "Ihr lokales Reisebüro in Hurghada",
      desc: "Unsere Touren zeichnen sich durch höchste Qualität und Liebe zum Detail aus. Wir bieten eine große Auswahl an Attraktionen für jeden Geschmack – von entspannenden Kreuzfahrten bis hin zu aufregenden Safaris. Wir garantieren professionellen Service und unvergessliche Erlebnisse.",
      btn: "Alle Touren ansehen"
    },
    testimonials: {
      subtitle: "Bewertungen",
      title: "Was unsere Kunden sagen",
      label: "Touren ab Hurghada",
      reviews: [
        { name: "Sarah Mitchell", text: "Ich habe an 3 Touren mit Golden Coast Excursions teilgenommen und der Luxor-Ausflug war absolut unglaublich. Die Reiseleiter sind tolle Menschen — die Organisation war erstklassig!" },
        { name: "James Cooper", text: "Ägypten mit Golden Coast Excursions zu erkunden, war eine der besten Erfahrungen meines Lebens. Die Führer waren unglaublich professionell und hilfsbereit." },
        { name: "Emma Richardson", text: "Wir kamen absolut begeistert aus unserem Urlaub zurück! Die Kommunikation vor der Reise war blitzschnell und die Betreuung vor Ort war Weltklasse. 100% Empfehlung." },
        { name: "Michael Zhang", text: "Wunderbare Erlebnisse und unvergessliche Erinnerungen! Von Marsa Alam bis Kairo — wir sind von der Organisation beeindruckt. Wir planen bereits unsere nächste Reise!" }
      ]
    },
    faqs: {
      subtitle: "FAQ",
      title: "Häufig gestellte Fragen",
      tags: ["Lizenzierter Veranstalter", "15 Jahre Erfahrung", "24/7 Support"],
      items: [
        { q: "Ist die Buchung bei Golden Coast Excursions sicher?", a: "Ja. Wir sind ein lizenzierter ägyptischer Reiseveranstalter mit 15 Jahren Erfahrung. Alle Touren werden von zertifizierten Führern geleitet." },
        { q: "Wie buche ich eine Tour?", a: "Online über unsere Website oder per WhatsApp. Bezahlen Sie Ihren Reiseleiter zu Beginn der Tour — keine Vorauszahlung erforderlich." },
        { q: "Muss ich im Voraus bezahlen?", a: "Nein. Sie zahlen bar an den Guide, der Sie zu Beginn der Tour von Ihrem Hotel abholt." },
        { q: "Sind Touren in meiner Sprache verfügbar?", a: "Ja, wir bieten Touren in Deutsch, Englisch, Polnisch und anderen Sprachen an." },
        { q: "Was ist, wenn ich stornieren muss?", a: "Kostenlose Stornierung bis 24 Stunden vor Reisebeginn. Keine versteckten Gebühren." },
        { q: "Sind Ihre Preise wettbewerbsfähig?", a: "Als lokaler Veranstalter bieten wir Preise an, die 30-50% unter denen von Hotel-Tourenschaltern liegen." }
      ]
    }
  },
  nl: {
    agencyIntro: {
      subtitle: "Golden Coast Excursions Hurghada",
      title: "Uw lokale reisbureau in Hurghada",
      desc: "Onze tours onderscheiden zich door de hoogste kwaliteit en aandacht voor detail. Wij bieden een breed scala aan attracties voor elke smaak - van ontspannende cruises tot spannende safari's. Wij garanderen professionele service en onvergetelijke ervaringen.",
      btn: "Bekijk alle tours"
    },
    testimonials: {
      subtitle: "Beoordelingen",
      title: "Wat onze klanten zeggen",
      label: "Tours vanuit Hurghada",
      reviews: [
        { name: "Sarah Mitchell", text: "Ik ben op 3 tours geweest met Golden Coast Excursions en de trip naar Luxor was absoluut geweldig. De gidsen zijn geweldige mensen — de organisatie was top!" },
        { name: "James Cooper", text: "Egypte verkennen met Golden Coast Excursions was een van de beste ervaringen in mijn leven. De gidsen waren ongelooflijk professioneel en behulpzaam." },
        { name: "Emma Richardson", text: "We kwamen absoluut blij terug van onze vakantie! De communicatie voor de reis was razendsnel en de zorg ter plekke was van wereldklasse. 100% aanbevolen." },
        { name: "Michael Zhang", text: "Prachtige ervaringen en onvergetelijke herinneringen! Van Marsa Alam tot Caïro — we zijn onder de indruk van de organisatie. We plannen nu al onze volgende reis!" }
      ]
    },
    faqs: {
      subtitle: "FAQ",
      title: "Veelgestelde Vragen",
      tags: ["Gelicentieerde operator", "15 jaar ervaring", "24/7 ondersteuning"],
      items: [
        { q: "Is boeken bij Golden Coast Excursions veilig?", a: "Ja. Wij zijn een gelicentieerde Egyptische touroperator met 15 jaar ervaring. Alle tours worden geleid door gecertificeerde gidsen." },
        { q: "Hoe boek ik een tour?", a: "Online via onze website of via WhatsApp. Betaal uw gids bij aanvang van de tour — geen vooruitbetaling vereist." },
        { q: "Moet ik vooraf betalen?", a: "Nee. U betaalt contant aan de gids die u aan het begin van de tour ophaalt bij uw hotel." },
        { q: "Zijn de tours beschikbaar in mijn taal?", a: "Ja, we bieden tours aan in het Nederlands, Engels, Pools en andere talen." },
        { q: "Wat als ik moet annuleren?", a: "Gratis annuleren tot 24 uur voor vertrek. Geen verborgen kosten." },
        { q: "Zijn jullie prijzen concurrerend?", a: "Als lokale operator bieden we prijzen die 30-50% lager liggen dan die van excursiebalies van hotels." }
      ]
    }
  },
  pl: {
    agencyIntro: {
      subtitle: "Golden Coast Excursions Hurghada",
      title: "Twoje Lokalne Biuro Podróży w Hurghadzie",
      desc: "Nasze wycieczki wyróżniają się najwyższą jakością i dbałością o detale. Oferujemy szeroką gamę atrakcji dopasowanych do każdego gustu – od relaksujących rejsów po ekscytujące safari. Gwarantujemy profesjonalną obsługę i niezapomniane wrażenia.",
      btn: "Zobacz wszystkie wycieczki"
    },
    testimonials: {
      subtitle: "Opinie",
      title: "Co mówią nasi klienci",
      label: "Wycieczki z Hurghady",
      reviews: [
        { name: "Sarah Mitchell", text: "Pojechałam na 3 wycieczki z Golden Coast Excursions i wycieczka do Luksoru była absolutnie niesamowita. Przewodnicy to wspaniali ludzie — organizacja na najwyższym poziomie!" },
        { name: "James Cooper", text: "Odkrywanie Egiptu z Golden Coast Excursions było jednym z najlepszych doświadczeń w moim życiu. Przewodnicy byli niezwykle profesjonalni i pomocni." },
        { name: "Emma Richardson", text: "Wróciliśmy z naszych wakacji absolutnie zachwyceni! Komunikacja przed wyjazdem była błyskawiczna, a opieka na miejscu na światowym poziomie. Polecam w 100%." },
        { name: "Michael Zhang", text: "Cudowne doświadczenia i niezapomniane wspomnienia! Od Marsa Alam po Kair — jesteśmy pod wrażeniem organizacji. Już planujemy naszą kolejną podróż!" }
      ]
    },
    faqs: {
      subtitle: "FAQ",
      title: "Często Zadawane Pytania",
      tags: ["Licencjonowany operator", "15 lat doświadczenia", "Wsparcie 24/7"],
      items: [
        { q: "Czy rezerwacja wycieczek z Golden Coast Excursions jest bezpieczna?", a: "Tak. Jesteśmy licencjonowanym egipskim operatorem turystycznym z 15-letnim doświadczeniem. Wszystkie wycieczki są prowadzone przez certyfikowanych przewodników." },
        { q: "Jak mogę zarezerwować wycieczkę?", a: "Online przez naszą stronę internetową lub przez WhatsApp. Płacisz przewodnikowi na początku wycieczki — przedpłata nie jest wymagana." },
        { q: "Czy muszę płacić z góry?", a: "Nie. Płacisz gotówką przewodnikowi, który odbiera cię z hotelu na początku wycieczki." },
        { q: "Czy wycieczki są dostępne w moim języku?", a: "Tak, oferujemy wycieczki w języku polskim, angielskim i innych." },
        { q: "Co jeśli muszę anulować wycieczkę?", a: "Bezpłatne anulowanie możliwe jest do 24 godzin przed wyjazdem. Brak ukrytych opłat." },
        { q: "Czy wasze ceny są konkurencyjne?", a: "Jako lokalny operator oferujemy ceny o 30-50% niższe niż biura podróży w hotelach." }
      ]
    }
  },
  fr: {
    agencyIntro: {
      subtitle: "Golden Coast Excursions Hurghada",
      title: "Votre Agence de Voyage de Confiance à Hurghada",
      desc: "Nos excursions se distinguent par leur haute qualité et leur attention aux détails. Nous offrons une large gamme d'attractions adaptées à tous les goûts – des croisières de détente aux safaris palpitants. Nous garantissons un service professionnel et des souvenirs inoubliables.",
      btn: "Voir toutes les excursions"
    },
    testimonials: {
      subtitle: "Avis",
      title: "Ce que disent nos clients",
      label: "Excursions depuis Hurghada",
      reviews: [
        { name: "Sarah Mitchell", text: "J'ai participé à 3 excursions avec Golden Coast Excursions et le voyage à Louxor était époustouflant. Les guides sont formidables — l'organisation était de première classe !" },
        { name: "James Cooper", text: "Explorer l'Égypte avec Golden Coast Excursions a été l'une des meilleures expériences de ma vie. Les guides étaient incroyablement professionnels et serviables." },
        { name: "Emma Richardson", text: "Nous sommes rentrés de nos vacances absolument ravis ! La communication avant le voyage a été ultra-rapide et l'assistance sur place était exceptionnelle. Je recommande à 100%." },
        { name: "Michael Zhang", text: "Des expériences merveilleuses et des souvenirs inoubliables ! De Marsa Alam au Caire — l'organisation nous a impressionnés. Nous planifions déjà notre prochain voyage !" }
      ]
    },
    faqs: {
      subtitle: "FAQ",
      title: "Foire Aux Questions",
      tags: ["Opérateur agréé", "15 ans d'expérience", "Assistance 24/7"],
      items: [
        { q: "La réservation avec Golden Coast Excursions est-elle sûre ?", a: "Oui. Nous sommes un voyagiste égyptien agréé avec 15 ans d'expérience. Toutes les excursions sont dirigées par des guides certifiés." },
        { q: "Comment réserver une excursion ?", a: "En ligne sur notre site ou via WhatsApp. Vous payez votre guide au début de l'excursion — aucun prépaiement requis." },
        { q: "Dois-je payer à l'avance ?", a: "Non. Vous payez en espèces au guide qui vient vous chercher à votre hôtel au début de la visite." },
        { q: "Les visites sont-elles disponibles dans ma langue ?", a: "Oui, nous proposons des visites en français, anglais, et d'autres langues." },
        { q: "Que faire si je dois annuler ?", a: "Annulation gratuite jusqu'à 24 heures avant le départ. Pas de frais cachés." },
        { q: "Vos prix sont-ils compétitifs ?", a: "En tant qu'opérateur local, nous offrons des prix 30 à 50% inférieurs à ceux des bureaux d'excursions des hôtels." }
      ]
    }
  }
};

const langs = ['en', 'de', 'nl', 'pl', 'fr'];
langs.forEach(lang => {
  const insertIndex = fileContent.indexOf(`\n  ${lang}: {`) + `\n  ${lang}: {`.length;
  const newProps = `\n    agencyIntro: ${JSON.stringify(data[lang].agencyIntro)},\n    testimonials: ${JSON.stringify(data[lang].testimonials)},\n    faqs: ${JSON.stringify(data[lang].faqs)},`;
  fileContent = fileContent.slice(0, insertIndex) + newProps + fileContent.slice(insertIndex);
});

fs.writeFileSync(translationsPath, fileContent);
console.log('Extra sections translations successfully injected.');
