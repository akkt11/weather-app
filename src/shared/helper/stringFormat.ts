export const capitalize = (word?: string) => {
  if (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return "";
};

export const uppercase = (word?: string) => {
  if (word) {
    return word.toUpperCase();
  }
  return "";
};
