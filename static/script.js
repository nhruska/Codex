document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/hello')
        .then(res => res.json())
        .then(data => {
            document.getElementById('hello').textContent = data.message;
        });

    const form = document.getElementById('echoForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = document.getElementById('echoInput').value;
        const res = await fetch('/api/echo', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({message: text})
        });
        const data = await res.json();
        document.getElementById('echoOutput').textContent = data.echo;
        form.reset();
    });
});
