<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<div>
    <h5>Leads por Dia</h5>
    <canvas id="dailyLeadsChart"></canvas>
</div>

<script>
    const dailyLeads = @json($dailyLeads);

    const leadsCtx = document.getElementById('dailyLeadsChart').getContext('2d');
    new Chart(leadsCtx, {
        type: 'line',
        data: {
            labels: dailyLeads.map(lead => lead.date),
            datasets: [{
                label: 'Total de Leads',
                data: dailyLeads.map(lead => lead.total),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
</script>