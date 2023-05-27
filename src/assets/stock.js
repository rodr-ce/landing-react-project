const albumsStock = [
    {
      id: 1,
      artist: "Luis Alberto Spinetta",
      album: "Artaud",
      year: 1973,
      price: 150.00,
      img: "https://example.com/artaud.jpg"
    },
    {
      id: 2,
      artist: "Vox Dei",
      album: "La Biblia",
      year: 1971,
      price: 120.00,
      img: "https://example.com/labiblia.jpg"
    },
    {
      id: 3,
      artist: "Charly García",
      album: "Clics modernos",
      year: 1983,
      price: 180.00,
      img: "https://example.com/clicsmodernos.jpg"
    },
    {
      id: 4,
      artist: "Fito Páez",
      album: "El amor después del amor",
      year: 1992,
      price: 200.00,
      img: "https://example.com/eamordespuesdelamor.jpg"
    },
    {
      id: 5,
      artist: "Invisible",
      album: "Música del alma",
      year: 1974,
      price: 140.00,
      img: "https://example.com/musicadelalma.jpg"
    },
    {
      id: 6,
      artist: "Sui Generis",
      album: "Sui Generis Vida",
      year: 1972,
      price: 130.00,
      img: "https://example.com/suigenerisvida.jpg"
    },
    {
      id: 7,
      artist: "Patricio Rey y sus Redonditos de Ricota",
      album: "Oktubre",
      year: 1986,
      price: 170.00,
      img: "https://example.com/oktubre.jpg"
    },
    {
      id: 8,
      artist: "Sui Generis",
      album: "La grasa de las capitales",
      year: 1972,
      price: 125.00,
      img: "https://example.com/lagrasadelascapitales.jpg"
    },
    {
      id: 9,
      artist: "Soda Stereo",
      album: "Signos",
      year: 1986,
      price: 190.00,
      img: "https://example.com/signos.jpg"
    },
    {
      id: 10,
      artist: "Charly García",
      album: "Piano Bar",
      year: 1984,
      price: 160.00,
      img: "https://example.com/pianobar.jpg"
    },
    {
      id: 11,
      artist: "Invisible",
      album: "El jardín de los presentes",
      year: 1976,
      price: 145.00,
      img: "https://example.com/eljardindelospresentes.jpg"
    },
    {
      id: 12,
      artist: "Los Piojos",
      album: "Ritual",
      year: 2000,
      price: 220.00,
      img: "https://example.com/ritual.jpg"
    },
    {
      id: 13,
      artist: "Gustavo Cerati",
      album: "Ahí vamos",
      year: 2006,
      price: 180.00,
      img: "https://example.com/ahivamos.jpg"
    },
    {
      id: 14,
      artist: "Soda Stereo",
      album: "Nada personal",
      year: 1985,
      price: 175.00,
      img: "https://example.com/nadapersonal.jpg"
    },
    {
      id: 15,
      artist: "Los Nocheros",
      album: "Signos",
      year: 1994,
      price: 130.00,
      img: "https://example.com/signosnocheros.jpg"
    },
    {
      id: 16,
      artist: "Molotov",
      album: "¿Dónde jugarán las niñas?",
      year: 1997,
      price: 190.00,
      img: "https://example.com/dondejugaranlasninas.jpg"
    },
    {
      id: 17,
      artist: "Los Fabulosos Cadillacs",
      album: "El León",
      year: 1992,
      price: 200.00,
      img: "https://example.com/elleon.jpg"
    },
    {
      id: 18,
      artist: "Sui Generis",
      album: "Eiti Leda",
      year: 1973,
      price: 135.00,
      img: "https://example.com/eitileda.jpg"
    },
    {
      id: 19,
      artist: "Soda Stereo",
      album: "Canción Animal",
      year: 1990,
      price: 195.00,
      img: "https://example.com/cancionanimal.jpg"
    },
    {
      id: 20,
      artist: "Gustavo Cerati",
      album: "Bocanada",
      year: 1999,
      price: 210.00,
      img: "https://example.com/bocanada.jpg"
    }
  ];

  const booksStock = [
    {
      id: "0001",
      author: "Jorge Luis Borges",
      title: "Ficciones",
      year: 1944,
      price: 250.00,
      img: "https://example.com/ficciones.jpg"
    },
    {
      id: "0002",
      author: "Julio Cortázar",
      title: "Rayuela",
      year: 1963,
      price: 280.00,
      img: "https://example.com/rayuela.jpg"
    },
    {
      id: "0003",
      author: "Ernesto Sabato",
      title: "El túnel",
      year: 1948,
      price: 220.00,
      img: "https://example.com/eltunel.jpg"
    },
    {
      id: "0004",
      author: "Adolfo Bioy Casares",
      title: "La invención de Morel",
      year: 1940,
      price: 200.00,
      img: "https://example.com/lainvenciondemorel.jpg"
    },
    {
      id: "0005",
      author: "Silvina Ocampo",
      title: "Las armas secretas",
      year: 1959,
      price: 180.00,
      img: "https://example.com/lasarmassecretas.jpg"
    },
    {
      id: "0006",
      author: "Roberto Arlt",
      title: "Los siete locos",
      year: 1929,
      price: 190.00,
      img: "https://example.com/lossietelocos.jpg"
    },
    {
      id: "0007",
      author: "Alejandra Pizarnik",
      title: "Árbol de Diana",
      year: 1962,
      price: 150.00,
      img: "https://example.com/arbolDEDiana.jpg"
    },
    {
      id: "0008",
      author: "Victoria Ocampo",
      title: "Autobiografía de Victoria Ocampo",
      year: 1948,
      price: 240.00,
      img: "https://example.com/autobiografiaDEVictoriaOcampo.jpg"
    },
    {
      id: "0009",
      author: "César Aira",
      title: "Cómo me hice monja",
      year: 1993,
      price: 170.00,
      img: "https://example.com/comomehicemonja.jpg"
    },
    {
      id: "0010",
      author: "Gabriela Cabezón Cámara",
      title: "Las aventuras de la China Iron",
      year: 2017,
      price: 280.00,
      img: "https://example.com/lasaventurasdelaChinaIron.jpg"
    },
    {
      id: "0011",
      author: "Eduardo Sacheri",
      title: "La pregunta de sus ojos",
      year: 2005,
      price: 190.00,
      img: "https://example.com/lapreguntadesusojos.jpg"
    },
    {
      id: "0012",
      author: "Angélica Gorodischer",
      title: "Kalpa imperial",
      year: 1983,
      price: 210.00,
      img: "https://example.com/kalpaimperial.jpg"
    },
    {
      id: "0013",
      author: "Manuel Puig",
      title: "El beso de la mujer araña",
      year: 1976,
      price: 220.00,
      img: "https://example.com/elbesodelamujeraraña.jpg"
    },
    {
      id: "0014",
      author: "Luisa Valenzuela",
      title: "Hay que sonreír",
      year: 1978,
      price: 180.00,
      img: "https://example.com/hayquesonreir.jpg"
    },
    {
      id: "0015",
      author: "Samanta Schweblin",
      title: "Distancia de rescate",
      year: 2014,
      price: 200.00,
      img: "https://example.com/distanciaderescate.jpg"
    },
    {
      id: "0016",
      author: "Ricardo Piglia",
      title: "Respiración artificial",
      year: 1980,
      price: 230.00,
      img: "https://example.com/respiracionartificial.jpg"
    },
    {
      id: "0017",
      author: "María Elena Walsh",
      title: "Manuelita ¿dónde vas?",
      year: 1970,
      price: 150.00,
      img: "https://example.com/manuelitadondevas.jpg"
    },
    {
      id: "0018",
      author: "Felisberto Hernández",
      title: "Nadie encendía las lámparas",
      year: 1947,
      price: 210.00,
      img: "https://example.com/nadieencendialaslamparas.jpg"
    },
    {
      id: "0019",
      author: "Luis María Pescetti",
      title: "¡Quién hubiera escuchado esto!",
      year: 2001,
      price: 160.00,
      img: "https://example.com/quienhubieraescuchadoesto.jpg"
    },
    {
      id: "0020",
      author: "Héctor Tizón",
      title: "La casa inundada",
      year: 1966,
      price: 190.00,
      img: "https://example.com/lacasainundada.jpg"
    }
  ];