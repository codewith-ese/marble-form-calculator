// document.getElementById("printResultsButton").addEventListener("click", function() {
//     // Get the results
//     let projectName = document.getElementById("namedemo").innerHTML;
//     let tableTop = document.getElementById("tableTop").innerHTML;
//     let tableLegs = document.getElementById("tableLegs").innerHTML;
//     let date = document.getElementById("date").innerHTML;

//     // Create a new window or tab
//     let printWindow = window.open('', '', 'height=600,width=800');
    
//     // Write the results to the new window with CSS styles
//     printWindow.document.write('<html><head><title>Print Results</title>');
//     printWindow.document.write('<style>');
//     printWindow.document.write('body { padding: 20px; font-family: Arial, sans-serif; }');
//     printWindow.document.write('h2 { color: #333; }');
//     printWindow.document.write('div { margin-bottom: 10px; }');
//     printWindow.document.write('</style>');
//     printWindow.document.write('</head><body>');
//     printWindow.document.write('<h2>Results</h2>');
//     printWindow.document.write('<div>' + projectName + '</div>');
//     printWindow.document.write('<div>' + tableTop + '</div>');
//     printWindow.document.write('<div>' + tableLegs + '</div>');
//     printWindow.document.write('<div>' + date + '</div>');
//     printWindow.document.write('</body></html>');
    
//     // Close the document to finish writing
//     printWindow.document.close();
    
//     // Print the results
//     printWindow.print();
// });


document.getElementById("printResultsButton").addEventListener("click", function() {
    // Get the results
    let projectName = document.getElementById("namedemo").innerHTML;
    let tableTop = document.getElementById("tableTop").innerHTML;
    let tableLegs = document.getElementById("tableLegs").innerHTML;
    let date = document.getElementById("date").innerHTML;

    // Create a new window or tab
    let printWindow = window.open('', '', 'height=600,width=800');
    
    // Write the results to the new window with a link to the external CSS file
    printWindow.document.write('<html><head><title>Print Results</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="print-styles.css">'); // Link to external CSS
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h2>Results</h2>');
    printWindow.document.write('<div>' + projectName + '</div>');
    printWindow.document.write('<div>' + tableTop + '</div>');
    printWindow.document.write('<div>' + tableLegs + '</div>');
    printWindow.document.write('<div>' + date + '</div>');
    printWindow.document.write('</body></html>');
    
    // Close the document to finish writing
    printWindow.document.close();
    
    // Print the results
    printWindow.print();
});