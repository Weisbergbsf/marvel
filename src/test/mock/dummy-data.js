const initialState = {
  charactersFavorites: [],
  characters: {
    total: 1493,
    results: [
      {
        id: 1011334,
        name: "3-D Man",
        description: "",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
        isFavorite: true,
        isUpdate: true
      },
      {
        id: 1017100,
        name: "A-Bomb (HAS)",
        description:
          "Rick Jones has been Hulk's best bud since day one,…it like a giant bowling ball of destruction! !!!!",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
        isFavorite: false,
        isUpdate: true
      },
      {
        id: 1009144,
        name: "A.I.M.",
        description:
          "AIM is a terrorist organization bent on destroying the world.",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg",
        isFavorite: false,
        isUpdate: false
      },
      {
        id: 1010699,
        name: "Aaron Stack",
        description: "",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
        isFavorite: false,
        isUpdate: true
      },
      {
        id: 1009146,
        name: "Abomination (Emil Blonsky)",
        description:
          "Formerly known as Emil Blonsky, a spy of Soviet Yu…ransformed Bruce Banner into the incredible Hulk.",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg",
        isFavorite: false,
        isUpdate: true
      },
      {
        id: 1016823,
        name: "Abomination (Ultimate)",
        description: "",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
        isFavorite: false,
        isUpdate: true
      },
      {
        id: 1009148,
        name: "Absorbing Man",
        description: "",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg",
        isFavorite: false,
        isUpdate: true
      },
      {
        id: 1009149,
        name: "Abyss",
        description: "",
        thumbnail:
          "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64.jpg",
        isFavorite: false,
        isUpdate: true
      }
    ]
  },
  loading: false,
  charactersForSelect: [],
  loadingForSelect: false,
  series: [],
  loadingSeries: false,
  errors: null,
  message: null
};

export default initialState;
