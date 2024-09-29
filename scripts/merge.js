async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;

    // Create temp arrays
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await delay(time);
        ele[low + i].style.background = 'orange'; // Highlight the left part being merged
        left[i] = ele[low + i].style.height;
    }

    for (let i = 0; i < n2; i++) {
        await delay(time);
        ele[mid + 1 + i].style.background = 'yellow'; // Highlight the right part being merged
        right[i] = ele[mid + 1 + i].style.height;
    }

    await delay(time);

    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        await delay(time);

        if (parseInt(left[i]) <= parseInt(right[j])) {
            ele[k].style.height = left[i];
            i++;
        } else {
            ele[k].style.height = right[j];
            j++;
        }
        ele[k].style.background = '#47ff41ea'; // Mark as sorted
        k++;
    }

    while (i < n1) {
        await delay(time);
        ele[k].style.height = left[i];
        ele[k].style.background = '#47ff41ea'; // Mark as sorted
        i++;
        k++;
    }

    while (j < n2) {
        await delay(time);
        ele[k].style.height = right[j];
        ele[k].style.background = '#47ff41ea'; // Mark as sorted
        j++;
        k++;
    }
}

async function mergeSort(ele, low, high) {
    if (low >= high) {
        return;
    }
    const mid = low + Math.floor((high - low) / 2);
    await mergeSort(ele, low, mid);
    await mergeSort(ele, mid + 1, high);
    await merge(ele, low, mid, high);
}

document.getElementById('merge').addEventListener('click', async function () {
    const ele = document.querySelectorAll('.sort');

    // Update time complexity
    document.getElementById("Time_Worst").innerHTML = "O(N log N)";
    document.getElementById("Time_Average").innerHTML = "&Theta;(N log N)";  
    document.getElementById("Time_Best").innerHTML = "&Omega;(N log N)";

    // Update space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    disableSizeSlider();
    disableSortingBtn();
    await mergeSort(ele, 0, ele.length - 1);
    enableSizeSlider();
    enableSortingBtn();
});
