export const numberUtils = {
  numberWithThousandSeperator,
};

function numberWithThousandSeperator(number) {
  console.log(number);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
