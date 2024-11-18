<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Отображение данных</title>
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
        import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCd-Kf5smC-xTCksRRFSOBQmpKsegX6lPQ",
            authDomain: "precoinmarket-8af8e.firebaseapp.com",
            databaseURL: "https://precoinmarket-8af8e-default-rtdb.firebaseio.com",
            projectId: "precoinmarket-8af8e",
            storageBucket: "precoinmarket-8af8e.appspot.com",
            messagingSenderId: "11819212336",
            appId: "1:11819212336:web:0ea96456065f66ecca17f5",
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        async function loadFields() {
            const fieldsRef = ref(database, 'fields');
            const snapshot = await get(fieldsRef);
            const fields = snapshot.val() || [];

            const container = document.getElementById('displayContainer');
            container.innerHTML = '';

            fields.forEach(field => {
                const div = document.createElement('div');
                div.innerHTML = `<b>${field.name}</b> — <i>${field.value}</i>`;
                container.appendChild(div);
            });
        }

        window.onload = () => loadFields();
    </script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        #displayContainer div {
            margin-bottom: 10px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>Отображение данных</h1>
    <div id="displayContainer"></div>
</body>
</html>
