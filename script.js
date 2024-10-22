const shapeSelect = document.getElementById('shape');
const unitSelect = document.getElementById('unit');
const widthInput = document.getElementById('width');
const lengthInput = document.getElementById('length');
const radiusInput = document.getElementById('radius');
const sqmDisplay = document.getElementById('sqm');
const tileBagsDisplay = document.getElementById('tile-bags');

function calculateArea() {
    let area = 0;
    let shape = shapeSelect.value;
    let unit = unitSelect.value;

    if (shape === 'rectangle') {
        const width = parseFloat(widthInput.value);
        const length = parseFloat(lengthInput.value);

        if (!isNaN(width) && !isNaN(length)) {
            area = width * length;
        }
    } else if (shape === 'circle') {
        const radius = parseFloat(radiusInput.value);

        if (!isNaN(radius)) {
            area = Math.PI * Math.pow(radius, 2);
        }
    }

    // Convert to square meters if unit is in feet
    if (unit === 'feet') {
        area = area * 0.092903; // 1 sq ft = 0.092903 sq meters
    }

    if (area > 0) {
        sqmDisplay.textContent = area.toFixed(2);
        const tileBags = Math.ceil(area / 5); // Assuming 1 bag covers 5 sqm
        tileBagsDisplay.textContent = tileBags;
    } else {
        sqmDisplay.textContent = '0';
        tileBagsDisplay.textContent = '0';
    }
}

// Listen for input changes
widthInput.addEventListener('input', calculateArea);
lengthInput.addEventListener('input', calculateArea);
radiusInput.addEventListener('input', calculateArea);
shapeSelect.addEventListener('change', function() {
    if (shapeSelect.value === 'circle') {
        document.getElementById('rectangle-inputs').style.display = 'none';
        document.getElementById('circle-inputs').style.display = 'block';
    } else {
        document.getElementById('rectangle-inputs').style.display = 'block';
        document.getElementById('circle-inputs').style.display = 'none';
    }
    calculateArea();
});
unitSelect.addEventListener('change', calculateArea);
