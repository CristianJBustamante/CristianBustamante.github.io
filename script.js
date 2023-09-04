document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.toggle-checkbox');
    const headerH1 = document.querySelector('header h1');
    const headerP = document.querySelector('header p');

    toggleSwitch.addEventListener('change', function () {
        // Obtener el valor actual del interruptor
        const isChecked = this.checked;

        // Realizar acciones según el valor del interruptor
        if (isChecked) {
            // Cambiar el idioma a inglés
            document.documentElement.lang = 'en';
            // Cambiar textos en los encabezados
            headerH1.textContent = 'Your Name';
            headerP.textContent = 'Game Developer';
        } else {
            // Cambiar el idioma a español
            document.documentElement.lang = 'es';
            // Cambiar textos en los encabezados
            headerH1.textContent = 'Tu Nombre';
            headerP.textContent = 'Desarrollador de Videojuegos';
        }
    });
});