
function generateCertificate() {
    // Create the certificate content
    const certificateContent = `
        <h2>Leave / Outing</h2>
        <p><b>LeaveID: </b><strong>${userDatabase[0][0]}</strong></p>
        <p><b>Visit Place: </b><strong>${userDatabase[0][1]}</strong></p>
        <p><b>Reason: </b><strong>${userDatabase[0][2]}</strong></p>
        <p><b>Leave type: </b><strong>${userDatabase[0][3]}</strong></p>
        <p><b>From time: </b><strong>${userDatabase[0][4]}</strong></p>
        <p><b>To time: </b><strong>${userDatabase[0][5]}</strong></p>
        <p><b>Status: </b><strong>${userDatabase[0][6]}</strong></p>
    `;

    // Display the certificate
    document.getElementById('certificateOutput').innerHTML = certificateContent;
}
