const tickerList = document.getElementById("tickerList");

async function fetchTickers() {
  try {
    const response = await fetch("http://localhost:8000/details");
    const data = await response.json();
    const details = data?.data;
    console.log("Data:", details);

    // Create the table
    const table = document.createElement("table");
    table.classList.add("table");
    table.style.border = "none"; // Remove table border

    // Create table header row and set its background color to gray
    const thead = document.createElement("thead");
    thead.style.backgroundColor = "#191d28";
    thead.style.fontWeight = 800;
    thead.style.color = "gray"; // Set text color to gray
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
      <th><h4>#</h4></th>
      <th><h4>Name</h4></th>
      <th><h4>Last</h4></th>
      <th><h4>Buy/Sell</h4></th>
      <th><h4>Volume</h4></th>
      <th><h4>Base Unit</h4></th>
    `;
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Populate table body with ticker data
    const tbody = document.createElement("tbody");

    details.forEach((data, index) => {
      const row = document.createElement("tr");
      // Set background color for rows to gray
      row.style.backgroundColor = "gray";
      // Set margin-bottom to create a gap of 20px between rows
      row.style.marginBottom = "20px";
      // Set text color to white
      row.style.color = "white";
      row.style.fontWeight = 800;
      // Remove border for table cells
      row.style.border = "none";

      row.innerHTML = `
        <td><h4>${index + 1}</h4></td>
        <td style="padding: 10px;"><h4>${data.name}</h4></td>
        <td style="padding: 10px;"><h4>$ ${data.last}</h4></td>
        <td style="padding: 10px;"><h4>$ ${data.buy}/${data.sell}</h4></td>
        <td style="padding: 10px;"><h4>${data.volume}</h4></td>
        <td style="padding: 10px;"><h4>${data.base_unit}</h4></td>
      `;
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tickerList.appendChild(table);
  } catch (error) {
    console.error("Error fetching ticker data:", error);
  }
}

fetchTickers();
