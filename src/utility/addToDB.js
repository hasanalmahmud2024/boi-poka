const getStoredBook = () => {
    const storedBooksSTR = localStorage.getItem('readList');
    if (storedBooksSTR) {
        const storedBooksData = JSON.parse(storedBooksSTR);
        return storedBooksData;
    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedBooksData = getStoredBook();
    if (storedBooksData.includes(id)) {
        alert('Bro this book already exists')
    } else {
        storedBooksData.push(id);
        // store data
        const data = JSON.stringify(storedBooksData);
        localStorage.setItem("readList", data)

    }
}


export { addToStoredDB, getStoredBook };