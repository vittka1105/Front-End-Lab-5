function validateForm() {
    // Отримання значень полів форми
    let fullName = document.getElementById('fullName').value;
    let faculty = document.getElementById('faculty').value;
    let birthday = document.getElementById('birthday').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;

    // Регулярні вирази для перевірки відповідності формату
    let fullNamePattern = /^[А-ЯІЇЄ][а-яіїє']+\s[А-ЯІЇЄ][а-яіїє']+\s[А-ЯІЇЄ][а-яіїє']+$/;
    let facultyPattern = /^[А-ЯІЇЄ]{4}$/;
    let birthdayPattern = /^\d{2}\.\d{2}\.\d{4}$/;
    let addressPattern = /^м\.\s[А-ЯІЇЄҐа-яіїєґ]+$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid = true;
    if (!fullNamePattern.test(fullName)) {
        document.getElementById('fullName').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('fullName').classList.remove('error');
    }

    if (!facultyPattern.test(faculty)) {
        document.getElementById('faculty').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('faculty').classList.remove('error');
    }

    if (!birthdayPattern.test(birthday)) {
        document.getElementById('birthday').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('birthday').classList.remove('error');
    }

    if (!addressPattern.test(address)) {
        document.getElementById('address').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('address').classList.remove('error');
    }

    if (!emailPattern.test(email)) {
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('error');
    }

    // Виведення результатів
    if (isValid) {
        let result = "ПІБ: " + fullName + "\nФакультет: " + faculty + "\nДата народження: " + birthday
            + "\nАдреса: " + address + "\nЕлектронна пошта: " + email;
        console.log(result);
        alert(result);
    }
}

const table = document.getElementById("colorTable");
const colorPicker = document.getElementById("colorPicker");
let selectedRow = -1;

// Функція для генерації випадкового кольору
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функція для створення таблиці та встановлення обробників подій
function createTable() {
    for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            const cellNumber = i * 6 + j + 1;
            cell.innerText = cellNumber;

            // Обробник події при наведенні на клітинку
            cell.addEventListener("mouseover", function () {
                if (cellNumber === 20) {
                    const color = getRandomColor();
                    cell.style.backgroundColor = color;
                }
            });

            // Обробник події при кліці на клітинку
            cell.addEventListener("click", function () {
                const color = colorPicker.value;
                cell.style.backgroundColor = color;
            });

            // Обробник події при подвійному кліці на клітинку
            cell.addEventListener("dblclick", function () {
                const rowNumber = i;
                selectedRow = rowNumber;
                changeRowColors(selectedRow);
            });
        }
    }
}

// Функція для зміни кольору клітинок в рядку
function changeRowColors(rowNumber) {
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
            if (i === rowNumber && j % 2 === 0) {
                const color = colorPicker.value || getRandomColor();
                cells[j].style.backgroundColor = color;
            }
        }
    }
}

// Виклик функції для створення таблиці та встановлення обробників подій
createTable();