document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const nameInput = document.getElementById('nameInput');
    const greetBtn = document.getElementById('greetBtn');

    const fetchGreeting = async (name = 'World') => {
        try {
            const response = await fetch(`/api/hello?name=${encodeURIComponent(name)}`);
            const data = await response.json();
            greeting.textContent = data.message;
        } catch (err) {
            greeting.textContent = 'Error fetching greeting';
        }
    };

    greetBtn.addEventListener('click', () => {
        const name = nameInput.value.trim() || 'World';
        fetchGreeting(name);
    });

    fetchGreeting();
});
