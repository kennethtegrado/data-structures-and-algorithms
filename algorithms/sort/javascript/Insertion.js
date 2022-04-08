// INSERTION SORT IMPLEMENTATION

const Insertion = (array) => {
    for (let iteration = 1; iteration < array.length; iteration++) {
        // GET THE CURRENT KEY VALUE
        const currentKeyValue = array[iteration];

        // INSERTION SORT
        for (
            let sortingIterator = iteration;
            sortingIterator > 0;
            sortingIterator--
        ) {
            // GUARD CLAUSE
            if (!(currentKeyValue < array[sortingIterator - 1])) break;

            // SWAPPING
            array[sortingIterator] = array[sortingIterator - 1];
            array[sortingIterator - 1] = currentKeyValue;
        }
    }

    return array;
};
