import image1 from "../assets/gallery/image1.PNG";
import image2 from "../assets/gallery/image2.PNG";
import image3 from "../assets/gallery/image3.PNG";
import image4 from "../assets/gallery/image4.PNG";
import image5 from "../assets/gallery/image5.PNG";
import image6 from "../assets/gallery/image6.PNG";
import image7 from "../assets/gallery/image7.PNG";
import image8 from "../assets/gallery/image8.PNG";
import image9 from "../assets/gallery/drinks-img.jpg";

import png1 from "../assets/pngs/toque.png";
import png2 from "../assets/pngs/dress-code.png";
import png3 from "../assets/pngs/service-voiturier.png";

import event1 from "../assets/events/events-img-1.PNG";
import event2 from "../assets/events/events-img-2.PNG";
import event3 from "../assets/events/events-img-3.PNG";

import meal1 from "../assets/meals/antipasti-di-terra.JPG";
import meal2 from "../assets/meals/antipasti-di-mare.JPG";
import meal3 from "../assets/meals/insalaton.JPG";
import meal4 from "../assets/meals/pasti.JPG";
import meal5 from "../assets/meals/desert.JPG";
import meal6 from "../assets/meals/gelato.JPG";
import meal7 from "../assets/meals/pizza.JPG";

import chef1 from "../assets/chefs/chef1.jpg";

import location1 from "../assets/location/agadir-location.JPG";
import location2 from "../assets/location/marrakech-location.JPG";

const restaurantInfo = {
  name: "Little Italy",
  description: "Pourquoi aller en Italie quand l'Italie vient à toi?",
  hashtags: ["quelafêtecommence", "littleItaly", "restaurant", "événement"],
  locations: [
    {
      name: "Little Italy - Agadir",
      location: "Agadir",
      phone: "+𝟮𝟭𝟮 5 28 82 00 39",
      email: "littleitalyagadir@gmail.com",
      addressImage: location1,
      address: "Av Hassan 2, en face de la place Al Amal",
      facebook: "https://www.facebook.com/",
      tripAdviser: "https://www.tripadvisor.fr/",
      instagram: "https://www.instagram.com/littleitaly_agadir/",
      googleMapsLink:
        "https://www.google.com/maps/dir/?api=1&destination=Little+Italy,+Av.+Hassan+II,+Agadir+80000",
    },
    {
      name: "Little Italy - Marrakech",
      location: "Marrakech",
      phone: "+𝟮𝟭𝟮 𝟴 𝟬𝟴 𝟱𝟰 𝟱𝟮 𝟵𝟭",
      email: "littleitalymarrakech@gmail.com",
      addressImage: location2,
      address: "48 Rue Mohamed el Beqal - Guéliz Villa Biaritz - Marrakech",
      facebook: "https://www.facebook.com/Little.Italy.Marrakech.Ristorante",
      instagram: "https://www.instagram.com/littleitaly_marrakech/",
      tripAdviser:
        "https://www.tripadvisor.fr/Restaurant_Review-g293734-d23731772-Reviews-Little_Italy_Marrakech-Marrakech_Marrakech_Safi.html",
      googleMapsLink:
        "https://www.google.com/maps/dir/?api=1&destination=91%20Rue%20Mohammed%20el%20Beqal,%20Marrakech%2040000,%20Maroc",
    },
  ],
};

const galleryImages = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
];

const advantages = [
  {
    icon: png3,
    title: "VOITURIER",
    description:
      "Le restaurant dispose d'un service voiturier à l'arrivée du restaurant.",
  },
  {
    icon: png1,
    title: "Cuisine gastronomique",
    description:
      "Le Chef GIANFRANCO ANZINI est un spécialiste multimédaillé de la cuisine Gastronomique Italienne.",
  },
  {
    icon: png2,
    title: "Dress Code",
    description:
      "Nous n'imposons pas un dress code strict en revanche les débardeurs, shorts et tongues sont interdits.",
  },
];

const menuCategories = [
  { href: "/menu", name: "Repas", image: image1 },
  { href: "/menu/sorrento", name: "Sorrento", image: image5 },
  { href: "/menu", name: "Boissons", image: image9 },
];

const eventsList = [
  {
    id: "sorrento-opening",
    name: "Sorrento Opening",
    date: "09 déc. 2021, 12:00",
    address: "Marrakech, 48 Rue Mohammed el Beqal, Marrakech 40000, Morocco",
    img: event1,
  },
  {
    id: "opening-gourmet",
    name: "Opening Gourmet Restaurant",
    date: "12 fév. 2021, 15:00",
    address:
      "Rue Abou Hayan Taouhidi, Rue Abou Hayan Taouhidi, Marrakesh 40000, Maroc",
    img: event2,
  },
  {
    id: "gianfranco-anzini",
    name: "Chef Multimédaillé GIANFRANCO ANZINI",
    date: "12 fév. 2021, 14:20",
    address:
      "Rue Abou Hayan Taouhidi, Rue Abou Hayan Taouhidi, Marrakesh 40000, Maroc",
    img: event3,
  },
];

const sorrentoMenu = [
  {
    name: "terra",
    image: image8,
    description:
      "Découvrez un menu gastronomique aux saveurs de la terre et visitez les plus grands classiques de l'Italie.",
    meals: [
      {
        name: "Carpaccio Ciprian",
        ingredients: "Carpaccio de boeuf",
      },
      {
        name: "Paté di anatra all’arancia e mandorle",
        ingredients: "Pâté de canard à l’orange et amandes",
      },
      {
        name: "Lingotto di quinoa al gorgonzola",
        ingredients:
          "Lingot de quinoa avec légumes et mousse de gorgonzola de buffle",
      },
      {
        name: "Tagliatelle al tartufo con fondue di parmigiano",
        ingredients: "Tagliatelle à la truffe avec fondue de parmesan",
      },
      {
        name: "Gnocchi di zucca del Monaco",
        ingredients:
          "Gnocchi de potiron sur coulis de tomates cerises jaunes et provolone del Monaco",
      },
      {
        name: "Filetto di manzo al miele di castagna",
        ingredients:
          "Filet de boeuf au miel de châtaignier avec baby carottes au beurre et betterave au citron",
      },
      {
        name: "Selezione di formaggi DOC",
        ingredients: "Selection de fromages italiens avec leur sauces",
      },
    ],
  },
  {
    name: "mare",
    image: image7,
    description:
      "Le Chef Gianfranco Anzini a élaboré un menu de la mer, contemporain, moderne et haut en couleur.",
    meals: [
      {
        name: "Salmone marinato all’arancia",
        ingredients: "Saumon mariné à l’orange",
      },
      {
        name: "Ostriche in salsa mignonette",
        ingredients: "Huitres en sauce mignonette",
      },
      {
        name: "Carpaccio di gamberi rossi",
        ingredients: "Carpaccio de gambas royales rouges",
      },
      {
        name: "Zuppetta di mare",
        ingredients: "Soupe de poissons et fruits de mer",
      },
      {
        name: "Ravioli all’astice e zafferano",
        ingredients: "Ravioli à l’homard et safran",
      },
      {
        name: "Risotto con capesante, lime e pistacchio",
        ingredients: "Risotto aux Saint Jacques, lime et pistaches",
      },
      {
        name: "Filetto di rombo ai lamponi",
        ingredients:
          "Filet de turbot aux framboises avec pommes de terre au réglisse et choux de Bruxelles",
      },
    ],
  },
];

const mealsList = [
  {
    image: meal1,
    category: "ANTIPASTI DE TERRA",
    meals: [
      {
        name: "VITELLO TONNATO",
        ingredients: "RÔTI DE VEAU FROID AVEC SAUCE AU THON",
        price: 130,
      },
      {
        name: "CARPACCIO DI MANZO AL TARTUFO",
        ingredients: "CARPACIO DE BOEUF AUX TRUFFES",
        price: 150,
      },
      {
        name: "BRESAOLA",
        ingredients: "BRESAOLA, PARMESAN ET ROQUETTE",
        price: 130,
      },
      {
        name: "MOZZARELLA CAPRESE",
        ingredients: "TOMATE, MOZZARELLA ET BASILIC",
        price: 90,
      },
      {
        name: "BURRATA RUCOLA E FRAGOLE",
        ingredients: "BURRATA AVEC ROQUETTE ET FRAISES",
        price: 120,
      },
      {
        name: "PARMIGIANA DI MELANZANE",
        ingredients: null,
        price: 90,
      },
    ],
  },
  {
    image: meal2,
    category: "ANTIPASTI DI MARE",
    meals: [
      {
        name: "COCKTAIL DI GAMBERI",
        ingredients: "AVOCAT AUX CREVETTES, SAUCE COCKTAIL",
        price: 130,
      },
      {
        name: "TARTARE DI SALMONE",
        ingredients:
          "TARTARE DE SAUMON SUR LIT DʼAVOCAT AVEC SAUCE DE CONCOMBRE",
        price: 110,
      },
      {
        name: "POLPO ALLA BRACE",
        ingredients:
          "POULPE GRILLÉ SUR CRÈME DE POMMES DE TERRE AU CITRON ET CIBOULETTE",
        price: 140,
      },
      {
        name: "FRITTURA DI CALAMARI",
        ingredients: "FRITURE DE CALAMAR",
        price: 140,
      },
      {
        name: "CARPACCIO DI POLPO",
        ingredients: "CARPACCIO DE POULPE",
        price: 120,
      },
    ],
  },
  {
    image: meal3,
    category: "LE INSALATONE",
    meals: [
      {
        name: "INSALATA CESAR",
        ingredients:
          "SALDE MIXTE, CROUTONS À LʼAIL, POULET GRILLÉ, SAUCE CESAR",
        price: 130,
      },
      {
        name: "INSALATA CON SALMONE E GAMBERETTI",
        ingredients: "SALADE MIXTE, SAUMON ET CREVETTES",
        price: 130,
      },
      {
        name: "INSALATA ESOTICA",
        ingredients:
          "SALDE MIXTE, TOMATE CERISE, ORANGE, CITRON, MANGUE, FRAMBOISE",
        price: 150,
      },
    ],
  },
  {
    image: meal4,
    category: "PRIMI PASTI",
    meals: [
      {
        name: "LINGUINE ALL'ARAGOSTA",
        ingredients: "LINGUINE À LA LANGOUSTE",
        price: 150,
      },
      {
        name: "SPAGHETTI ALLA PESCATORA",
        ingredients: "SPAGHETTI AUX FRUITS DE MER",
        price: 150,
      },
      {
        name: "PENNE SALMONE",
        ingredients: "PENNE AU SAUMON",
        price: 150,
      },
      {
        name: "PENNE VEGETARIANA",
        ingredients: "PENNE VEGETARIENNE",
        price: 110,
      },
      {
        name: "RAVIOLI RICOTTA E SPINACI",
        ingredients:
          "RAVIOLI À LA RICOTTA ET ÉPINARDS AVEC TOMATES CERISES ET BASILIC",
        price: 110,
      },
      {
        name: "GNOCCHI GORGONZOLA E NOCI",
        ingredients: "GNOCCHI GORGONZOLA ET NOIX",
        price: 110,
      },
      {
        name: "LASAGNA",
        ingredients: "LASAGNE",
        price: 110,
      },
      {
        name: "TAGLIATELLE BOLOGNESE",
        ingredients: "TAGLIATELLES BOLOGNAISE",
        price: 100,
      },
    ],
  },
  {
    image: meal4,
    category: "SECONDI PASTI",
    meals: [
      {
        name: "SUPREMA DI POLLO",
        ingredients:
          "SUPRÈME DE POULET AVEC ASPERGES ET MILLES FEUILLES DE POMMES DE TERRE ET SAUCE MOUTARDE",
        price: 150,
      },
      {
        name: "ENTRECOTE DI MANZO",
        ingredients: "ENTRECÔTE À LA SAUCE CHAMPIGNONS ET JARDIN DE LEGUMES",
        price: 180,
      },
      {
        name: "FILETTO DI MANZO",
        ingredients:
          "FILET DE BOEUF AVEC BROCOLIS, MOUSSE DE POMMES DE TERRE AUX TRUFFES, SAUCE GORGONZOLA ET MARSCARPONE",
        price: 190,
      },
      {
        name: "COSTINE DI AGNELLO",
        ingredients:
          "CÔTE DʼAGNEAU AVEC PURÉE DE POMMES DE TERRE ET AUBERGINES GRILLÉES",
        price: 160,
      },
      {
        name: "TAGLIATA DI MANZO CON RUCOLA, POMODORI E PARMIGIANO",
        ingredients: "TAGLIATA DE BOEUF AVEC ROQUETTE, TOMATE ET PARMESAN",
        price: 200,
      },
      {
        name: "SAN PIETRO ALLA SICILIANA",
        ingredients:
          "SAINT PIERRE À LA SICILIENNE AVEC TOMATE FARCIE À LA MOUSSE DE SAUMON",
        price: 170,
      },
      {
        name: "SALMONE AL FORNO",
        ingredients: "PAVÉ DE SAUMON AU FOUR AVEC FLAN DE LEGUMES",
        price: 200,
      },
      {
        name: "PESCATO DEL GIORNO",
        ingredients: null,
        price: "100G / 50DH",
      },
    ],
  },
  {
    image: meal5,
    category: "DESSERT",
    meals: [
      {
        name: "TIRAMISU LITTLE ITALY ",
        ingredients: null,
        price: 90,
      },
      {
        name: "TORTA AL LIMONE",
        ingredients: "TARTE AU CITRON",
        price: 90,
      },
      {
        name: "TORTINO AL CIOCCOLATO CON GELATO ALLA VANIGLIA",
        ingredients: "FONDANT AU CHOCOLAT AVEC BOULE DE GLACE VANILLE",
        price: 90,
      },
      {
        name: "TORTINO ALLA CREMA DI PISTACCHIO",
        ingredients:
          "FONDANT À LA CRÈME DE PISTACHE AVEC BOULE DE GLACE VANILLE",
        price: 120,
      },
      {
        name: "FRUTTA MISTA",
        ingredients: "SALADE DE FRUITS",
        price: 100,
      },
      {
        name: "DOLCI DEL GIORNO",
        ingredients: "DESSERT DU JOUR",
        price: 90,
      },
    ],
  },
  {
    image: meal6,
    category: "GELATO",
    meals: [
      {
        name: "GLACES 2 BOULES",
        ingredients: "CHOCOLAT, PISTACHE, VANILLE",
        price: 70,
      },
      {
        name: "SORBETTO",
        ingredients: "CITRON, FRUITS ROUGES, MANGO",
        price: 70,
      },
      {
        name: "SUPPLEMENT",
        subMeals: [
          {
            name: "BOULE DE GLACE",
            price: 35,
          },
          {
            name: "CREME CHANTILLY",
            price: 10,
          },
        ],
      },
    ],
  },
  {
    image: meal7,
    category: "LE PIZZE",
    meals: [
      {
        name: "FOCACCIA",
        ingredients: null,
        price: 40,
      },
      {
        name: "MARINARA",
        ingredients: "TOMATE, ORIGAN, HUILE, AIL",
        price: 50,
      },
      {
        name: "MARGHERITA",
        ingredients: "TOMATE, MOZZARELLA, ORIGAN, HUILE",
        price: 60,
      },
      {
        name: "NAPOLETANA",
        ingredients: "TOMATE, MOZZARELLA, ANCHOIS, ORIGAN, BASILIC",
        price: 70,
      },
      {
        name: "VEGETARIANA",
        ingredients:
          "TOMATES FRAÎCHES, MOZZARELLA, AUBERGINES, COURGETTES, POIVRONS, CHAMPIGNONS, OLIVES, ORIGAN, HUILE",
        price: 70,
      },
      {
        name: "BUFALOTTA",
        ingredients: "TOMATE, MOZZARELLA DE BUFALA, BASILIC",
        price: 120,
      },
      {
        name: "PROSCIUTTO E FUNGHI*",
        ingredients:
          "TOMATE, MOZZARELLA, JAMBON CUIT, CHAMPIGNONS, ORIGAN, HUILE",
        price: 90,
      },
      {
        name: "DIAVOLA",
        ingredients: "TOMATE, MOZZARELLA, SALAMI EPICÉ, HUILE, ORIGAN",
        price: 90,
      },
      {
        name: "CAPRICCIOSA*",
        ingredients:
          "TOMATE, MOZZARELLA, JAMBON CUIT, CHAMPIGNONS, ARTICHAUTS, OLIVES",
        price: 90,
      },
      {
        name: "BRESAOLA",
        ingredients:
          "MOZZARELLA, BRESAOLA, TOMATES CERISES, BASILIC, ROQUETTE, PARMESAN",
        price: 180,
      },
      {
        name: "TONNARA",
        ingredients: "TOMATE, MOZZARELLA, THON, OIGNONS, ORIGAN",
        price: 100,
      },
      {
        name: "SALMONE",
        ingredients: "MOZZARELLA, CRÈME FRAÎCHE, SAUMON",
        price: 100,
      },
      {
        name: "PARMA",
        ingredients: "TTOMATE, MOZZARELLA, JAMBON DE PARME, ORIGAN, HUILE",
        price: 110,
      },
      {
        name: "FRUITS DE MER",
        ingredients: "TOMATE, MOZZARELLA, CREVETTES, CALAMARS, POULPE",
        price: 110,
      },
      {
        name: "SICILIANA",
        ingredients: "TOMATE, MOZZARELLA, ORIGAN, OLIVES, AUBERGINES, BASILIC",
        price: 70,
      },
      {
        name: "4 FORMAGGI",
        ingredients: "MOZZARELLA, GORGONZOLA, EMMENTAL, PARMESAN",
        price: 90,
      },
      {
        name: "CALZONE RIPIENO*",
        ingredients: "TOMATE, MOZZARELLA, JAMBON CUIT, CHAMPIGNONS, HUILE",
        price: 100,
      },
      {
        name: "LITTLE ITALY*",
        ingredients: "SAUCE BLANCHE, MOZZARELLA, CRÈME DE TRUFFE",
        price: 140,
      },
      {
        name: "4 FORMAGGI",
        ingredients:
          "PIZZA DIVISEE EN QUARTS : MARGHERITA, PESTO ET STRACCIATELLA, JAMBON CHAMPIGNONS, FRUITS DE MER",
        price: 120,
      },
    ],
    extra:
      "*INGREDIENT AU CHOIX : JAMBON DE DINDE SUPPLEMENT : POISSON 35 DH / FROMAGE : 30 DH / LEGUME : 25 DH",
  },
];

const drinksList = [
  {
    category: "apéritifs",
    drinks: [
      { name: "RICARD", price: 70 },
      { name: "PASTIS 51", price: 80 },
      { name: "CAMPARI", price: 80 },
      { name: "APEROL", price: 80 },
      { name: "PORTO BLANC & ROUGE", price: 80 },
      { name: "KIR ROYAL OU BLANC", price: 100 },
      { name: "COUPE DE CHAMPAGNE", price: 150 },
      { name: "COUPE DE PROSECCO", price: 120 },
      { name: "MARTINI ROUGE OU BLANC", price: 70 },
    ],
  },
  {
    category: "bières",
    drinks: [
      { name: "CASABLANCA", price: 80 },
      { name: "CORONA", price: 80 },
      { name: "BUDWEISER", price: 80 },
    ],
  },
  {
    category: "WHISKIES",
    drinks: [
      { name: "JACK DANIEL'S", price: 120 },
      { name: "CHIVAS REGAL 12 YEAR OLD", price: 130 },
      { name: "JOHNNIE WALKER BLACK LABEL", price: 130 },
      { name: "JOHNNIE WALKER RED LABEL", price: 100 },
      { name: "GLENFIDDICH 12 YEAR OLD", price: 140 },
    ],
  },
  {
    category: "RHUMS",
    drinks: [
      { name: "ZACAPA XO", price: 250 },
      { name: "HAVANA CLUB 3 ANNI", price: 120 },
      { name: "HAVANA CLUB 7 ANNI", price: 140 },
      { name: "ZACAPA CENT 23 ANNI", price: 150 },
      { name: "BACARDI", price: 100 },
    ],
  },
  {
    category: "VODKAS",
    drinks: [
      { name: "BELVEDERE", price: 130 },
      { name: "GREY GOOSE", price: 130 },
      { name: "ABSOLUT", price: 100 },
    ],
  },
  {
    category: "GINS",
    drinks: [
      { name: "HENDRICK’S", price: 120 },
      { name: "BOMBAY SAPHIRE", price: 100 },
      { name: "TANQUERAY", price: 120 },
      { name: "GORDON'S", price: 100 },
    ],
  },
  {
    category: "TEQUILAS",
    drinks: [
      { name: "PATRON SILVER", price: 120 },
      { name: "PATRON XO CAFÉ", price: 110 },
      { name: "PATRON ANEJO", price: 150 },
      { name: "CAMINO", price: 100 },
    ],
  },
  {
    category: "softs",
    drinks: [
      { name: "SIDI ALI 75CL", price: 40 },
      { name: "OULMES 75CL", price: 40 },
      { name: "COCA", price: 40 },
      { name: "COCA ZERO", price: 40 },
      { name: "SPRITE", price: 40 },
      { name: "SCHWEPPES TONIC", price: 40 },
      { name: "SCHWEPPES CITRON", price: 40 },
      { name: "RED BULL", price: 60 },
      { name: "CAFÉ ESPRESSO", price: 30 },
      { name: "CAFÉ MACCHIATO", price: 30 },
      { name: "DECAFFEINATO", price: 35 },
      { name: "CAPPUCCINO", price: 40 },
      { name: "AMERICANO", price: 40 },
      { name: "TE NERO / THÉ NOIR", price: 40 },
      { name: "NFUSION", price: 40 },
    ],
  },
  // {
  //   category: "vins italiani",
  //   subCategorys: [
  //     {
  //       name: "ROSSI / ROUGES ",
  //       drinks: [
  //         { name: "CAMPANIA AGLIANICO 2016", price: 350 },
  //         { name: `IRPINIA AGLIANICO "SIRV" 2015`, price: 450 },
  //         { name: `CAMPANIA AGLIANICO"RAFE" 2017`, price: 600 },
  //         { name: `TAURASI 2012`, price: 1200 },
  //         { name: `IRPINIA CAMPI TAURASINI "CORE" 2012`, price: 1500 },
  //         { name: `TAURASI RISERVA 2008`, price: 3000 },
  //         { name: `TAURASI RISERVA 2008 MAGNUM`, price: 5600 },
  //         { name: `ROSSO DI MONTALCINO “PIAN DELLE VIGNE"`, price: 800 },
  //       ],
  //     },
  //     {
  //       name: "BIANCHI / BLANCS ",
  //       drinks: [
  //         { name: "IRPINIA FALANGHINA", price: 350 },
  //         { name: `IRPINIA CODA DI VOLPI " OTTANT'ANNI"`, price: 450 },
  //         { name: `FIANO DI AVELLINO "GOLD"`, price: 480 },
  //         { name: `GRECO DI TUFO "OLTRE"`, price: 650 },
  //         { name: `“CORTE GIARA” PINOT GRIGIO DELLE VENEZIE`, price: 350 },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: "VINI FRANCESI",
  //   subCategorys: [
  //     {
  //       name: "ROSSI / ROUGES ",
  //       drinks: [
  //         { name: "COTE DU RHON, LA MAISON CASTEL SYRAH", price: 350 },
  //         { name: `HERITAGE CHASE SPLEEN MERLAN`, price: 900 },
  //       ],
  //     },
  //     {
  //       name: "BIANCHI / BLANCS ",
  //       drinks: [
  //         { name: "CHABLIS ALBERT BICHOT", price: 600 },
  //         { name: `SANCERRE DOMAINE SAUTEREAU`, price: 800 },
  //       ],
  //     },
  //     {
  //       name: "ROSÉ",
  //       drinks: [
  //         { name: "CASTEL COTE DE PROVINCE SYRAH", price: 350 },
  //         { name: `CUVEE SERP SERPOLET SYRAH`, price: 400 },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   category: "VINI MAROCCHINI",
  //   subCategorys: [
  //     {
  //       name: "ROSSI / ROUGES ",
  //       drinks: [
  //         { name: "CHATEAU ROSLANE", price: 500 },
  //         { name: `ECLIPSE`, price: 400 },
  //         { name: `TERRES ROUGES`, price: 350 },
  //         { name: `MEDAILLON`, price: 300 },
  //       ],
  //     },
  //     {
  //       name: "BIANCHI / BLANCS ",
  //       drinks: [
  //         { name: "CHATEAU ROSLANE BLANC", price: 500 },
  //         { name: `VOLUBILIA`, price: 350 },
  //         { name: `TERRE BLANC`, price: 350 },
  //         { name: `MEDAILLON`, price: 300 },
  //       ],
  //     },
  //     {
  //       name: "ROSÉ",
  //       drinks: [
  //         { name: "BACCARI ROSÉ", price: 350 },
  //         { name: `MEDAILLON`, price: 300 },
  //         { name: `DOMAINE DE SAHARI RESERVE VERRE`, price: 400 },
  //       ],
  //     },
  //   ],
  // },
  {
    category: "VINO AL BICCHIERE/VINS AU VERRE",
    drinks: [
      { name: "MAROCCHINI", price: 60 },
      { name: "ITALIANI", price: 80 },
    ],
  },
  {
    category: "champagne",
    drinks: [
      { name: "Dom Pérignon brut", price: 4700 },
      { name: "Ruinart Rosé", price: 2400 },
      { name: "Ruinart blanc de blanc", price: 2250 },
      { name: "Ruinart brut", price: 1400 },
      { name: "Moët chandon brut", price: 1200 },
      { name: "MOËT CHANDON ROSÉ", price: 2000 },
      { name: "VEUVE CLICQUOT BRUT", price: 2000 },
      { name: "LOUIS ROEDERER BRUT CRISTAL", price: 4500 },
    ],
  },
  {
    category: "digestifs",
    drinks: [
      { name: "LIMONCELLO", price: 90 },
      { name: "GRAPPA", price: 90 },
      { name: "POIRE WILLIAM", price: 90 },
      { name: "JAGERMEISTER", price: 90 },
      { name: "SAMBUCA", price: 90 },
      { name: "COINTREAU", price: 90 },
      { name: "GRAND MARNIER", price: 100 },
      { name: "AMARETTO DISARONNO", price: 100 },
      { name: "GET 27", price: 90 },
      { name: "BAILEYS", price: 900 },
    ],
  },
  {
    category: "COGNAC",
    drinks: [
      { name: "REMY MARTIN VSOP", price: 120 },
      { name: "REMY MARTIN XO", price: 240 },
    ],
  },
  {
    category: "cocktails",
    drinks: [
      {
        name: "NEGRONI",
        ingredients: "CAMPARI, MARTINI ROUGE, GIN",
        price: 120,
      },
      {
        name: "AMERICANO",
        ingredients: "CAMPARI, MARTINI ROUGE, SODA",
        price: 120,
      },
      {
        name: "MOJITO CLASSIQUE",
        ingredients: "CITRON, MENTHE, RHUM, SODA",
        price: 120,
      },
      {
        name: "MARGARITA",
        ingredients: "JUS DE CITRON, COINTREAU, TEQUILLA",
        price: 120,
      },
      {
        name: "COSMOPOLITAN",
        ingredients: "JUS DE CITRON, CRANBERRY, VODKA, TRIPLE SEC",
        price: 120,
      },
      {
        name: "BLOODY MARY",
        ingredients:
          "JUS DE CITRON, JUS DE TOMATE, TABASCO, SEL, POIVRE, SAUCE ANGLAISE, VODKA",
        price: 130,
      },
      {
        name: "PINA COLADA",
        ingredients: "CREME DE COCO, JUS ANANAS, RHUM",
        price: 130,
      },
      {
        name: "MOSCOW MULE",
        ingredients: "JUS DE CITRON, GINGER ALE, VODKA",
        price: 130,
      },
      {
        name: "EXPRESSO MARTINI",
        ingredients: "VODKA, CAFÉ, KHALUA, SUCRE DE CANNE",
        price: 130,
      },
    ],
  },
  {
    category: "cocktails little italy",
    drinks: [
      {
        name: "SMASH BASILICO",
        ingredients: "JUS DE CITRON, SUCRE, BASILIC FRAIS, GIN",
        price: 130,
      },
      {
        name: "AMARETTO MANGUE",
        ingredients: "JUS DE MANGUE, JUS DE CITRON,SWEETANDSOUR, AMARETTO",
        price: 130,
      },
      {
        name: "PASSION COOLER",
        ingredients: "VODKA, SWEET AND SOUR, FRUITS PASSION, SIROP DE VANILLE",
        price: 130,
      },
      {
        name: "ROYAL HAWAIIAN",
        ingredients: "JUS D'ANANAS, JUS DE CITRON,SIROP ALMOND,GIN",
        price: 130,
      },
      {
        name: "WHISKY SOUR",
        ingredients:
          "JUS DE CITRON, SIROP DE MIEL, INFUSION DE CANELLE, WHISKY",
        price: 150,
      },
      {
        name: "YELLOW ORDONNANCE",
        ingredients:
          "JUS DE CITRON, SIROP DʼAGAVE, INFUSION LES ÉTOILES DʼANIS, TEQUILLA",
        price: 150,
      },
    ],
  },
  {
    category: "cocktails no alcool",
    drinks: [
      {
        name: "BLUE SKY",
        ingredients: "CURAÇAO BLEU, SIROP DʼORGEAT, CRÈME, JUS DʼANANAS",
        price: 80,
      },
      {
        name: "CARNAVAL",
        ingredients:
          "ANANAS FRAIS, FRAMBOISE FRAIS, SIROP DʼORGEAT, JUS CITRON",
        price: 80,
      },
      {
        name: "LEMON UP",
        ingredients: "GINGEMBRE FRAIS, MENTHE, CITRON, GINGER ALE",
        price: 80,
      },
      {
        name: "EXTRA PASSION",
        ingredients:
          "JUS ORANGE, JUS DʼANANAS, JUS CITRON, FRUITS DE LA PASSION, SIROP DE GRENADINE",
        price: 80,
      },
      {
        name: "LE ROUGE",
        ingredients:
          "FRAMBOISE, JUS CRANBERRY, JUS DʼANANAS, JUS DE CITRON, SIROP LITCHI",
        price: 80,
      },
      {
        name: "VIRGIN COLADA",
        ingredients: null,
        price: 80,
      },
      {
        name: "VIRGIN MOJITO",
        ingredients: null,
        price: 80,
      },
    ],
  },
];

const chefsList = [
  {
    image: chef1,
    name: "gianfranco anzini",
  },
  {
    image: chef1,
    name: "gianfranco anzini",
  },
  {
    image: chef1,
    name: "gianfranco anzini",
  },
  {
    image: chef1,
    name: "gianfranco anzini",
  },
  {
    image: chef1,
    name: "gianfranco anzini",
  },
];

export {
  chefsList,
  mealsList,
  drinksList,
  advantages,
  eventsList,
  sorrentoMenu,
  galleryImages,
  restaurantInfo,
  menuCategories,
};
