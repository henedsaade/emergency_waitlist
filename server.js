const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Placeholder array to store patient data
let patients = [];

// Route to add a new patient
app.post('/api/patients', (req, res) => {
    const { name, severity } = req.body;
    const waitTime = calculateWaitTime(severity); // Calculate wait time based on severity
    const newPatient = { name, waitTime };
    patients.push(newPatient);
    console.log('Added new patient:', newPatient); // Log the added patient
    console.log('Current patients:', patients); // Log the current list of patients
    res.status(201).json(newPatient);
});

// Route to fetch patients
app.get('/api/patients', (req, res) => {
    console.log('Sending patients:', patients); // Log the patients being sent
    res.json(patients);
});

// Route to validate user credentials and return user role
app.post('/api/login', (req, res) => {
    const { username, role } = req.body;
    if (role === 'admin' && username === 'admin') {
        res.json({ success: true, role });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Function to calculate wait time based on severity
function calculateWaitTime(severity) {
    // Placeholder logic to calculate wait time
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

// Default route handler
app.get('/', (req, res) => {
    res.send('Welcome to Hospital Triage Application!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
