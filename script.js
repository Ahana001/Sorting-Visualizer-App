let array = [];
const arrayContainer = document.getElementById("array-container");

function generateArray(size = 50) {
    array = [];
    arrayContainer.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        array.push(value);
        const bar = document.createElement("div");
        bar.classList.add("array-bar");
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    }
}

async function bubbleSort() {
    const bars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
            await sleep(50);
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                bars[j].style.height = `${array[j] * 3}px`;
                bars[j + 1].style.height = `${array[j + 1] * 3}px`;
            }
            bars[j].style.backgroundColor = "blue";
            bars[j + 1].style.backgroundColor = "blue";
        }
    }
}

async function insertionSort() {
    const bars = document.getElementsByClassName("array-bar");
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        bars[i].style.backgroundColor = "red";
        await sleep(50);
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = `${array[j] * 3}px`;
            bars[j + 1].style.backgroundColor = "red";
            j = j - 1;
            await sleep(50);
        }
        array[j + 1] = key;
        bars[j + 1].style.height = `${key * 3}px`;
        for (let k = 0; k <= i; k++) {
            bars[k].style.backgroundColor = "blue";
        }
    }
}

async function selectionSort() {
    const bars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        bars[minIdx].style.backgroundColor = "red";
        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = "red";
            await sleep(50);
            if (array[j] < array[minIdx]) {
                bars[minIdx].style.backgroundColor = "blue";
                minIdx = j;
                bars[minIdx].style.backgroundColor = "red";
            } else {
                bars[j].style.backgroundColor = "blue";
            }
        }
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
        bars[i].style.height = `${array[i] * 3}px`;
        bars[minIdx].style.height = `${array[minIdx] * 3}px`;
        bars[minIdx].style.backgroundColor = "blue";
        bars[i].style.backgroundColor = "blue";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate initial array
generateArray();
