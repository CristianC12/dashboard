const themes = {
    light: {
      background: 'white',
      text: 'black',
    },
    dark: {
        bodyBgColor: '#141721',

        mainBgColor: '#202432',
        mainColor: '#458AF2',
        mainText: '#EDEFF2',
        secondaryText: '#8D96A6' ,
        optionsMainText: '#F7F8F9',
        valoresText: '#FFFFFF',
        buttonText: '#202432',

        contratarBgColor: '#292E3D',

        bgTable: '#333948',
        pagesTable: '#4364E8',
    }
  };

  function setTheme(newTheme) {
    const themeColors = themes[newTheme]; // Seleciona o tema para aplicar
  
    Object.keys(themeColors).map(function(key) {
      html.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
    });
  }