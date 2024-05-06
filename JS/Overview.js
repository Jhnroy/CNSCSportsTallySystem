firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    const table = document.getElementById('OverviewTableContainer');

    // Function to delete a document from Firestore and remove the corresponding row from the table
    function deleteDocument(row, docId) {
        firestore.collection("Casathletes").doc(docId).delete().then(() => {
            table.deleteRow(row.rowIndex);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    firestore.collection("Casathletes").orderBy("lastName").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = table.insertRow(-1);
            row.insertCell(0).textContent = data.studentID; 
            row.insertCell(1).textContent = data.firstName;
            row.insertCell(2).textContent = data.lastName;
            row.insertCell(3).textContent = data.age;
            row.insertCell(4).textContent = data.gender;
            row.insertCell(5).textContent = data.sport;
            row.insertCell(6).textContent = data.address;
            row.insertCell(7).textContent = data.department;

            const checkboxCell = row.insertCell(0);
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxCell.appendChild(checkbox);
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    row.classList.add('selected');
                } else {
                    row.classList.remove('selected');
                }
            });
        });
    });

    document.querySelector('.btn.btn-outline-danger').addEventListener('click', function() {
        const rows = document.querySelectorAll('#OverviewTableContainer tr.selected');
        rows.forEach((row) => {
            const docId = row.cells[1].textContent; // Assuming Student ID is in the second cell
            deleteDocument(row, docId);
        });
    });