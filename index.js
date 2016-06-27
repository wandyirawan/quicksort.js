
function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, propname, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i     = left,
        j     = right;

    if (propname !== undefined) {
        while (i <= j) {
            while (items[i][propname] < pivot[propname]) {
                i++;
            }
            while (items[j][propname] > pivot[propname]) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }

        }
    } else {
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
    }
    return i;
}

function partitionDesc(items, propname, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i     = left,
        j     = right;

    if (propname !== undefined) {
        while (i <= j) {

            while (items[i][propname] > pivot[propname]) {
                i++;
            }
            while (items[j][propname] < pivot[propname]) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
    } else {
        while (i <= j) {

            while (items[i] > pivot) {
                i++;
            }
            while (items[j] < pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
    }
    return i;
}

function quickSort(items, propName, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, propName, left, right);

        if (left < index - 1) {
            quickSort(items, propName, left, index - 1);
        }

        if (index < right) {
            quickSort(items, propName, index, right);
        }
    }

    return items;
}

function quickSortDesc(items, propName, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partitionDesc(items, propName, left, right);

        if (left < index - 1) {
            quickSortDesc(items, propName, left, index - 1);
        }

        if (index < right) {
            quickSortDesc(items, propName, index, right);
        }

    }
    return items;
}

var quicksort = {}
quicksort['asc'] = quickSort
quicksort['desc'] = quickSortDesc

module.exports = quicksort
