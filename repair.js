document.addEventListener('DOMContentLoaded', () => {
    // Get all auto repair items
    const autoItems = document.querySelectorAll('.auto-item img'); // Target images

    // Create the modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = '×';
    modalContent.appendChild(closeButton);

    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalContent.appendChild(modalTitle);

    const modalDescription = document.createElement('p');
    modalDescription.classList.add('modal-description');
    modalContent.appendChild(modalDescription);

    // Auto repair details
    const autoDetails = {
        'Engine Overhauls': 'Comprehensive engine repairs and rebuilding to ensure optimal performance for your vehicle.',
        'Service Kits': 'High-quality service kits for regular vehicle maintenance, including oil and filter replacements.',
        'Clutch Repairs': 'Expert clutch system repairs to restore smooth gear shifting and vehicle control.',
        'CV Joints': 'Professional CV joint repairs and replacements to maintain smooth and safe vehicle operations.',
        'Brake Pads': 'Reliable brake pad replacements for enhanced safety and braking performance.'
    };

    // Function to show modal with auto repair details
    const showModal = (title) => {
        const description = autoDetails[title];
        if (description) {
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.classList.add('show');
        }
    };

    // Event listener for auto repair items
    autoItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.parentElement.querySelector('.auto-heading').textContent; // Get title
            showModal(title); // Show modal with details
        });
    });

    // Event listener for closing the modal
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});
