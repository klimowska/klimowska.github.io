export const getAttributeValue = (array) => {
  const newArray = array.filter(Boolean).join(" ");
  return newArray.length ? newArray : nothing;
};
