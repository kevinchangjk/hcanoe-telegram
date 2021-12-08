const utils = {
  /* takes in a two-dimensional array, with rows as master axis
   * returns a one-dimensional array of objects
   *
   *   data = [
   *     ['Name', 'Gender', 'Year'],
   *     ['Jacob', 'M', '1996'],
   *     ['Roxanne', 'F', '1999'],
   *     ['Isaac', 'F', '2000']
   *   ]
   *
   * And the desired output is:
   *
   *   result = [
   *     { Name: 'Jacob', Gender: 'M', Year: '1996' },
   *     { Name: 'Roxanne', Gender: 'F', Year: '1999' },
   *     { Name: 'Isaac', Gender: 'F', Year: '2000' }
   *   ]
   */
  arrayToObject: function (arr) {
    const headers = arr.shift();
    const result = arr.map((e) =>
      headers.reduce(
        (obj, key, index) => ({
          ...obj,
          [key]: e[index],
        }),
        {}
      )
    );
    return result;
  },
};
