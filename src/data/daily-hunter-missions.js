const DailyHunterMissions = [
    {
        range: "6-20",
        locations: ["Astrub", "Champs d'Astrub"],
        token_type: "Jeton grossier",
        resources: {
            items: [
                "Peau de Bouftou",
                "Phéromones de Tofu",
                "Peau de Larve"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Bouftou",
                "Semence de Tofu",
                "Semence de Larve"
            ],
            token_rewards: 2
        }
    },
    {
        range: "21-35",
        locations: ["Astrub", "Champs d'Astrub"],
        token_type: "Jeton rudimentaire",
        resources: {
            items: [
                "Poudre d'os",
                "Bec de piou",
                "Branchopatte"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Essence de Squelette Relevé",
                "Semence de Piou",
                "Semence d'Abrakne"
            ],
            token_rewards: 2
        }
    },
    {
        range: "36-50",
        locations: ["Capitale d'Amakna", "Port d'Ereboria"],
        token_type: "Jeton imparfait",
        resources: {
            items: [
                "Grelot",
                "Crinière champêtre",
                "Dent en or de Craqueleur",
                "Tissu de Pirate",
                "Chair de Mort-Brûlé"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Moogrr",
                "Semence de Plante des champs",
                "Graine de Craqueleur",
                "Essence de Pirate",
                "Essence de Mort-Brûlé"
            ],
            token_rewards: 2
        }
    },
    {
        range: "51-65",
        locations: ["Capitale de Sufokia", "Domaine Sauvage", "Mont Zinit - Plage Sauvage", "Port d'Ereboria"],
        token_type: "Jeton fragile",
        resources: {
            items: [
                "Feuille de Kokoko",
                "Œil de Cwabe",
                "Laine sauvage",
                "Étoffe Bwork",
                "Cuir Nimbo",
                "Nacre",
                "Peau de Skouale"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Kokoko",
                "Semence de Cwabe",
                "Semence de Bouftou Sauvage",
                "Semence de Bwork",
                "Essence de Marteau-Aigri",
                "Semence de Mollusky",
                "Semence de Skouale"
            ],
            token_rewards: 2
        }
    },
    {
        range: "66-80",
        locations: ["Île aux Moines", "Kelba", "Capitale de Bonta"],
        token_type: "Jeton rustique",
        resources: {
            items: [
                "Peau de Gligli",
                "Bec de Truche",
                "Ailes de Moskito",
                "Patte de Mulou",
                "Patte d'Arakne",
                "Bec de Corbac",
                "Serre de Kroapule",
                "Moustache de Rat"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Gligli",
                "Semence de Truche",
                "Semence de Booskito",
                "Semence de Mulou-Garou",
                "Semence d'Arakne",
                "Semence de Corbac",
                "Semence de Kroapule",
                "Semence de Rat"
            ],
            token_rewards: 2
        }
    },
    {
        range: "81-95",
        locations: ["Île aux Moines", "Bilbyza - Plage", "Katrepat"],
        token_type: "Jeton brut",
        resources: {
            items: [
                "Os de chafer",
                "Corne de Scara",
                "Sang périmé",
                "Pourriture",
                "Glas Age",
                "Sable doré",
                "Terre de Slek"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Essence de Chafer",
                "Semence de Scara",
                "Essence mortifiante",
                "Essence mortifiée",
                "Essence de Moine",
                "Semence de la plage Sablée",
                "Semence de Slek"
            ],
            token_rewards: 2
        }
    },
    {
        range: "96-110",
        locations: ["Capitale de Brâkmar", "Bilbyza (Est)", "Capitale d'Amakna"],
        token_type: "Jeton solide",
        resources: {
            items: [
                "Toile Riktus",
                "Cuir de Glagla",
                "Poils-plume des neiges",
                "Tissu de plage",
                "Bave Disgracieuse",
                "Garde-pierre"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Essence de Magik Riktus",
                "Semence de Glagla",
                "Semence des Neiges",
                "Liqueur Bilbyzarre",
                "Extrait de Gelée",
                "Essence de Chuchoteur"
            ],
            token_rewards: 2
        }
    },
    {
        range: "111-125",
        locations: ["Shukrute", "Capitale de Sufokia", "Saharach", "Mont Zinit - Bas Flanc"],
        token_type: "Jeton durable",
        resources: {
            items: [
                "Paille Flaqueuse",
                "Nageoire",
                "Os congelé",
                "Krak-Ertz",
                "Bouboulon",
                "Toile de Cacterre",
                "Essence tourmentée",
                "Coque de Smare"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Flaqueux",
                "Semence de Pichon",
                "Essence de Chafer du Nord",
                "Graine de Craqueleur Polaire",
                "Essence Mékanic",
                "Semence de Cacterre",
                "Semence de Shushu Tourmenté",
                "Semence de Smare"
            ],
            token_rewards: 2
        }
    },
    {
        range: "126-140",
        locations: ["Shukrute", "Île Wabbit", "Souterrains de l'Île Wabbit", "Saharach", "Capitale de Bonta", "Mont Zinit - Bas Flanc"],
        token_type: "Jeton raffiné",
        resources: {
            items: [
                "Racine sombre",
                "Fouwwuwe de Black Wabbit",
                "Foullule de Lenald",
                "Fouwwuwe de Wabbit",
                "Lamelle de Noirespore",
                "Os fanatique",
                "Cuir de Phorreur"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence d'Abraknyde Sombre",
                "Semence de Black Wabbit",
                "Semence de Lenald",
                "Semence de Wabbit",
                "Semence de Noirespore",
                "Semence de Shushu Fanatique",
                "Semence de Phorreur"
            ],
            token_rewards: 2
        }
    },
    {
        range: "141-155",
        locations: ["Capitale de Brâkmar", "Souterrains de l'Île Wabbit", "Srambad", "Enutrosor"],
        token_type: "Jeton précieux",
        resources: {
            items: [
                "Fausse note",
                "Fouwwuwe infectée",
                "Tissu owange",
                "Os dimensionnel",
                "Dorure de cuivre",
                "Tronc commun"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Blop",
                "Semence infectée",
                "Semence bien Gawdée",
                "Semence de Srambad",
                "Semence d'Enutrosor",
                "Semence de Plantala"
            ],
            token_rewards: 2
        }
    },
    {
        range: "156-170",
        locations: ["Capitale de Brâkmar", "Capitale de Sufokia", "Capitale d'Amakna", "Capitale de Bonta", "Mont Zinit - Haut flanc (Sbires de Kali)"],
        token_type: "Jeton exquis",
        resources: {
            items: [
                "Haleine de Brigand",
                "James Bomb",
                "Tissu sombre",
                "Stalagmite",
                "Fragment antique",
                "Plume Engrenée",
                "Sang coagulé"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Essence de Riktus Elite",
                "Essence de Roublard",
                "Essence d'Encapuchonné",
                "Semence de Patapoutre",
                "Semence Réglée",
                "Semence Déréglée",
                "Sang de Sbire de Kali"
            ],
            token_rewards: 2
        }
    },
    {
        range: "171-185",
        locations: ["Moon"],
        token_type: "Jeton mystique",
        resources: {
            items: [
                "Écorce de Tropikoko",
                "Bâton Kanniboul",
                "Cuir de Crocodaille",
                "Racines de Kannivore",
                "Peau de Pandissidan",
                "Peau de Gerbouille"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Tropikoko",
                "Semence de Kanniboul",
                "Semence de Crocodaille",
                "Semence de Kannivore",
                "Semence de Pandissidan",
                "Semence de Gerbouille"
            ],
            token_rewards: 2
        }
    },
    {
        range: "186-200",
        locations: ["Capitale de Brâkmar", "Capitale de Sufokia", "Capitale d'Amakna", "Capitale de Bonta", "Mont Zinit - Grotte du Dor'Mor", "Mont Zinit - Haut flanc (Sbires de Kali)", "Mont Zinit - Sommet"],
        token_type: "Jeton éternel",
        resources: {
            items: [
                "Pelage de Fléopard",
                "Gostoplasme de Pandala",
                "Croc de Blérox",
                "Braises Magmatiques",
                "Coquille de Dragoeuf",
                "Vapeur âpre",
                "Patte de Hibourg"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Fléopard",
                "Essence de Fantôme de Pandala",
                "Semence de Blérox",
                "Laves Magmatiques",
                "Semence de Dragoeuf",
                "Essence Ethernelle",
                "Semence de Hibourg"
            ],
            token_rewards: 2
        }
    },
    {
        range: "201-215",
        locations: ["Osamosa - Îlots des Voyageurs Dimensionnels", "Royaume Chuchoku - Banquise des Mansots"],
        token_type: "Jeton divin",
        resources: {
            items: [
                "Cuir de Vandaliéné",
                "Épicuticule de Cagnardeur",
                "Pince Senrir",
                "Cuir de Toundrasoir",
                "Cuir de Carapatte",
                "Touffe de Plantigarde",
                "Petit pichon orange"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Vandaliéné",
                "Semence de Cagnardeur",
                "Semence de Crustargneux",
                "Semence de Toundrasoir",
                "Semence de Carapatte",
                "Semence de Plantigarde",
                "Semence de Mansot"
            ],
            token_rewards: 2
        }
    },
    {
        range: "216-230",
        locations: ["Shukrute - Croisée des âmes déchues"],
        token_type: "Jeton infernal",
        resources: {
            items: [
                "Pseudopode",
                "Peau de Vidéant",
                "Aile de Démhorrible",
                "Scalp de Réman'hante",
                "Bras de Ravageur",
                "Nageoire de Poisseux abyssal",
                "Ferraille stasifiée"
            ],
            token_rewards: 4
        }, 
        seeds: {
            items: [
                "Semence de Phytomorphe",
                "Semence de Vidéant",
                "Semence de Démhorrible",
                "Semence d'Égaré",
                "Semence de Ravageur",
                "Semence de Poisseux abyssal",
                "Essence de Garde Steamer"
            ],
            token_rewards: 2
        }
    }
];

export default DailyHunterMissions;