
function filterByCity(targetCity, listingCityArray) {
  let matchingIndices = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      matchingIndices.push(i);
    }
  }
  return matchingIndices;
}
 filterByCityTest();

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let matchingIndices = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] > minPrice && listingPriceArray[i] < maxPrice) {
      matchingIndices.push(i);
    }
  }
  return matchingIndices;
}
 filterByPriceTest()

// LEVEL UP!
function filterByTypes(targetTypes, listingTypeArray) {
  let matchingIndices = [];
  for (let i = 0; i < targetTypes.length; i++) {
    for (let t = 0; t < listingTypeArray.length; t++) {
      if (listingTypeArray[t] === targetTypes[i]) {
        matchingIndices.push(t);
      }
    }
  }
  return matchingIndices;
}
 filterByTypesTest();
