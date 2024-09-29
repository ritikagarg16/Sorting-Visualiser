//hi ritika how are you
async function heapify(ele, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2

    ele[i].style.background = 'red'; // Highlight the current node

    if (left < n) {
        ele[left].style.background = 'brown';
        await delay(time);
        if (parseInt(ele[left].style.height) > parseInt(ele[largest].style.height)) {
            largest = left;
        }
        ele[left].style.background = 'yellow'; // Reset color after comparison
    }

    if (right < n) {
        ele[right].style.background = 'brown';
        await delay(time);
        if (parseInt(ele[right].style.height) > parseInt(ele[largest].style.height)) {
            largest = right;
        }
        ele[right].style.background = 'yellow'; // Reset color after comparison
    }

    // Swap and heapify the affected subtree
    if (largest !== i) {
        swap(ele[i], ele[largest]);
        ele[i].style.background = 'orange';
        ele[largest].style.background = 'orange';
        await delay(time);
        await heapify(ele, n, largest);
    }

    ele[i].style.background = 'yellow'; // Reset color of the current element
}

async function heapSort(ele) {
    const n = ele.length;

    // Build heap (rearrange the array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(ele, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        swap(ele[0], ele[i]); // Swap the root with the last element
        ele[i].style.background = 'green'; // Mark the element as sorted
        await delay(time);

        // Heapify the reduced heap
        await heapify(ele, i, 0);
    }

    ele[0].style.background = 'green'; // Mark the last element as sorted
}

// Event listener for Heap Sort button
document.getElementById('heap').addEventListener('click', async function () {
    let ele = document.querySelectorAll('.sort'); // Grab all bar elements
    
    // Set time and space complexities for heap sort
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";
    document.getElementById("Space_Worst").innerText = "O(1)";

    disableSizeSlider();
    disableSortingBtn();
    await heapSort(ele);
    enableSizeSlider();
    enableSortingBtn();
});

// Delay function for animations
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Swap function for swapping bars
function swap(ele1, ele2) {
    let tempHeight = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = tempHeight;
}
