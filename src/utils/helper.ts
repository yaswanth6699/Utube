export const viewConverter = (val: number) => {
  return (val / 1000000).toFixed(1) + " M";
};

export const likeConverter = (val: number) => {
  return Math.ceil(val / 1000) + " K";
};
