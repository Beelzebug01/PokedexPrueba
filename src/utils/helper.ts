export const typesColors = {
    normal: 'light',
    fighting: 'danger',
    flying: 'indigo',
    poison: 'violet',
    ground: 'amber',
    rock: 'amber',
    bug: 'lime',
    ghost: 'violet',
    steel: 'trueGray',
    fire: 'red',
    water: 'blue',
    grass: 'green',
    electric: 'yellow',
    psychic: 'pink',
    ice: 'lightBlue',
    dragon: 'purple',
    dark: 'dark',
    fairy: 'pink',
    unknown: 'gray',
    shadow: 'dark',
  };
  
  export const getTypeColor = (type: string) => {
    return typesColors[type as keyof typeof typesColors] || 'light';
  };
  
  export const formatNumber = (num: number) => {
    return num.toString().padStart(3, '0');
  };
  
  export const removeEscapeCharacters = (str: string) => {
    return str.replace(/[\n\r\t\f]/g, ' ');
  };