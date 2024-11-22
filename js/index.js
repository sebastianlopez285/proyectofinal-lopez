document.addEventListener("DOMContentLoaded", () => {
    const simulateBtn = document.getElementById("simulateBtn");
    const inputValue = document.getElementById("inputValue");
    const resultDiv = document.getElementById("result");
    const storedDataDiv = document.getElementById("storedData");

    // Cargar datos al iniciar la página
    loadStoredData();

    simulateBtn.addEventListener("click", () => {
        const value = parseFloat(inputValue.value);
        if (isNaN(value)) {
            updateResult("Por favor, ingresa un valor válido.");
            return;
        }
        const processedResult = simulateProcess(value);
        updateResult(`Resultado de la simulación: ${processedResult}`);
        storeData(value, processedResult);
        loadStoredData();
    });

    function simulateProcess(value) {
        // Simula un proceso, como multiplicar por 2
        return value * 2;
    }

    function updateResult(message) {
        resultDiv.textContent = message;
    }

    function storeData(input, result) {
        // Almacenar datos en localStorage
        const data = { input, result };
        localStorage.setItem(`simulation-${Date.now()}`, JSON.stringify(data));
    }

    function loadStoredData() {
        // Cargar y mostrar datos almacenados
        storedDataDiv.innerHTML = "<h3>Datos Almacenados:</h3>";
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const data = JSON.parse(value);
            storedDataDiv.innerHTML += `<p>Entrada: ${data.input}, Resultado: ${data.result}</p>`;
        }
    }
});
