document.addEventListener("DOMContentLoaded", function() {
    // Data untuk setiap ULP/UP
    const data = {
        ulp1: { label: 'ULP Lubuk Pakam', data: [8.04, 7.89, 5.32, 8.71, 8.79, 7.65, 8.88, 6.17, 7.06, 7.48, 7.21, 5.62], borderColor: 'rgba(54, 162, 235, 1)' },
        ulp2: { label: 'ULP Tanjung Morawa', data: [4.14, 4.48, 3.57, 4.92, 3.06], borderColor: 'rgba(255, 99, 132, 1)' },
        ulp3: { label: 'ULP Perbaungan', data: [8.08, 8.03, 7.67, 7.48, 6.40], borderColor: 'rgba(75, 192, 192, 1)' },
        ulp4: { label: 'ULP Sei Rampah', data: [8.08, 8.03, 7.67, 7.48, 6.40], borderColor: 'rgba(153, 102, 255, 1)' },
        ulp5: { label: 'ULP Galang', data: [8.08, 8.03, 7.67, 7.48, 6.40], borderColor: 'rgba(255, 159, 64, 1)' },
        ulp6: { label: 'ULP Dolok Masihul', data: [8.08, 8.03, 7.67, 7.48, 6.40], borderColor: 'rgba(255, 205, 86, 1)' },
        up3: { label: 'UP3 Lubuk Pakam', data: [8.08, 8.03, 7.67, 7.48, 6.40], borderColor: 'rgba(201, 203, 207, 1)' }
    };

    const ctx = document.getElementById('susutChart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGT', 'SEP', 'OKT', 'NOV', 'DES'],
            datasets: []
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'Bulan' }},
                y: { beginAtZero: true, min: 0, stepSize: 2 }
            }
        }
    });

    // Fungsi untuk memperbarui grafik berdasarkan filter
    function updateChart(selectedValue) {
        if (selectedValue === 'all') {
            chart.data.datasets = Object.values(data).map(d => ({
                label: d.label,
                data: d.data,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderColor: d.borderColor,
                borderWidth: 3,
                pointBackgroundColor: d.borderColor,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3
            }));
        } else {
            const selectedData = data[selectedValue];
            chart.data.datasets = [{
                label: selectedData.label,
                data: selectedData.data,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderColor: selectedData.borderColor,
                borderWidth: 3,
                pointBackgroundColor: selectedData.borderColor,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3
            }];
        }
        chart.update();
    }

    // Event listener untuk filter
    document.getElementById('ulpFilter').addEventListener('change', function() {
        updateChart(this.value);
    });

    // Inisialisasi grafik dengan semua data
    updateChart('all');

    // Handle form submission
    document.getElementById('susutForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Data berhasil disimpan!');
        window.location.href = 'index.html';
    });
});