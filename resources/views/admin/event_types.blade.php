<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<div>
    <h5>Tipos de Espaços de Eventos</h5>
    <canvas id="eventTypesChart"></canvas>
</div>

<script>
    const eventTypeCounts = @json($eventTypeCounts);

    const eventTypesCtx = document.getElementById('eventTypesChart').getContext('2d');
    new Chart(eventTypesCtx, {
        type: 'pie',
        data: {
            labels: Object.keys(eventTypeCounts),
            datasets: [{
                data: Object.values(eventTypeCounts),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        }
    });
</script>