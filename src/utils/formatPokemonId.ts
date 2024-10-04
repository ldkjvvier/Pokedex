export const formatPokemonId = (id: number): string => {
  const idStr = id.toString();
  if (idStr.length === 1) {
    return '000' + idStr;
  } else if (idStr.length === 2) {
    return '00' + idStr;
  } else if (idStr.length === 3) {
    return '0' + idStr;
  } else {
    return idStr;
  }
};
