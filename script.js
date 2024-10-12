function calculate() {
    // Get inputs
    const roomLength = parseFloat(document.getElementById("roomLength").value);
    const roomWidth = parseFloat(document.getElementById("roomWidth").value);
    const sqmPerBox = parseFloat(document.getElementById("sqmPerBox").value);
    const boxPrice = parseFloat(document.getElementById("boxPrice").value);
    const fixingCost = parseFloat(document.getElementById("fixingCost").value);
    const numberOfFixes = parseInt(document.getElementById("numberOfFixes").value);

    // Validate inputs
    if (isNaN(roomLength) || isNaN(roomWidth) || isNaN(sqmPerBox) || isNaN(boxPrice) || isNaN(fixingCost) || isNaN(numberOfFixes)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    // Calculate area of the room
    const roomArea = roomLength * roomWidth;

    // Calculate number of boxes needed (rounding up)
    const boxesNeeded = Math.ceil(roomArea / sqmPerBox);

    // Calculate total cost
    const totalBoxCost = boxesNeeded * boxPrice;
    const totalFixingCost = numberOfFixes * fixingCost;
    const totalCost = totalBoxCost + totalFixingCost;

    // Display result
    document.getElementById("result").innerText = `Room Area: ${roomArea.toFixed(2)} m²\nBoxes Needed: ${boxesNeeded}\nTotal Cost (Boxes + Fixing): = R${totalCost.toFixed(2)}`;
}
