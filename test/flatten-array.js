describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

        flattenSortArray = function (arr) {
            return flatten(arr).sort();
        },
        flattenArray = function (arr) {
          arr = [].concat.apply([],arr);
          return arr.some(Array.isArray) ? flattenArray(arr) : arr;
        };
        
        arr = flattenSortArray(arr);
        
    expect(arr).toEqual(expected);
  });
});
