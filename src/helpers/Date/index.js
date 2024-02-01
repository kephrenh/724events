export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};
// Ajouter +1 pour faire commencer index du tableau à 1 et afficher le bon mois
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
