/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let SpichoneeA, SpichoneeB, SpichoneeC, i;
  let triangles = 0;

  for (i=0; i<preferences.length; i++) {
    SpichoneeA = preferences[i];
    SpichoneeB = preferences[SpichoneeA-1];
    SpichoneeC = preferences[SpichoneeB-1];
    if (i+1 == SpichoneeC && i+1 != SpichoneeA) triangles++;    
  }
  return triangles / 3;
};

