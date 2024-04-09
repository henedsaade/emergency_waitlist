// Placeholder array to store patient data (simulate server-side data)
let patients = [];

// Function to display patients in the user panel
function displayPatients() {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = ''; // Clear previous patient list

    if (patients.length === 0) {
        patientList.innerHTML = '<li>No patients in the queue.</li>';
    } else {
        patients.forEach(patient => {
            const li = document.createElement('li');
            li.textContent = `${patient.name} (${patient.waitTime})`;
            patientList.appendChild(li);
        });
    }
}

// Fetch initial patient data when the page loads
window.addEventListener('load', () => {
    fetchPatients(); // Fetch initial patient data
});

// Function to fetch patient data from the server (simulated)
function fetchPatients() {
    // Simulate fetching patient data from the server
    // You can replace this with an actual AJAX request to your server
    setTimeout(() => {
        // Update the patients array with fetched data
        patients = [
            { name: 'John Doe', waitTime: '30 mins' },
            { name: 'Jane Smith', waitTime: '45 mins' },
            { name: 'Michael Johnson', waitTime: '1 hour' }
        ];
        displayPatients(); // Display the fetched patient data
    }, 1000); // Simulate delay for loading patients
}

// Function to calculate wait time based on severity
function calculateWaitTime(severity) {
    // Placeholder logic to calculate wait time
    // You can replace this with your actual logic to estimate wait time based on severity
    if (severity === 'Low') {
        return '30 mins';
    } else if (severity === 'Medium') {
        return '45 mins';
    } else if (severity === 'High') {
        return '1 hour';
    } else {
        return 'Unknown';
    }
}

// Example: Handle user interactions (e.g., submitting a new patient form)
const newPatientForm = document.getElementById('new-patient-form');
newPatientForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(newPatientForm);
    const patientName = formData.get('name');
    const severity = formData.get('severity');

    // Simulate adding a new patient (replace this with actual server-side logic)
    // Instead of 'Estimated time', calculate wait time based on severity
    const waitTime = calculateWaitTime(severity);
    const newPatient = { name: patientName, waitTime: waitTime };
    patients.push(newPatient); // Add the new patient to the patients array
    displayPatients(); // Update the patient list
    alert(`New patient added: ${patientName} (Severity: ${severity})`);
    newPatientForm.reset(); // Clear the form fields after successful submission
});
