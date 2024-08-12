function toggleService(serviceId) {
    const serviceDetails = document.getElementById(serviceId);
    const isVisible = serviceDetails.style.display === 'block';

    // Hide all services
    document.querySelectorAll('.service-details').forEach(detail => {
        detail.style.display = 'none';
    });

    // Toggle the clicked service
    serviceDetails.style.display = isVisible ? 'none' : 'block';
}
