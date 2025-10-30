document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos que tienen la clase de botón neumórfico
    const neumoButtons = document.querySelectorAll('.neumo-btn[data-action="link"]');

    // Función para manejar el estado presionado (clic o touch)
    const handlePress = (event) => {
        const button = event.currentTarget;
        const buttonHref = button.getAttribute('href'); // 1. Capturamos el enlace

        // Añadir la clase 'pressed' para aplicar el CSS del hundimiento
        button.classList.add('pressed');

        // Remover la clase 'pressed' después de un breve tiempo para simular el rebote
        setTimeout(() => {
            button.classList.remove('pressed');
            
            // 2. Si el evento fue un touch, navegamos manualmente aquí.
            // Si fue un click, el navegador ya se encargó (a menos que lo evitemos).
            if (event.type === 'touchstart' && buttonHref) {
                 // Usamos window.location.href para ir al enlace
                 window.location.href = buttonHref; 
            }
        }, 200); 
    };

    // Asignar el evento a cada botón
    neumoButtons.forEach(button => {
        
        // **OPCIÓN 1: Evento para el click del ratón**
        // Mantenemos el comportamiento por defecto (que navegue)
        // La animación ocurre en paralelo con la navegación.
        button.addEventListener('click', handlePress);
        
        // **OPCIÓN 2: Eventos para dispositivos táctiles**
        button.addEventListener('touchstart', (e) => {
            // Prevenimos la acción por defecto (navegación inmediata),
            // para que la animación termine antes de ir al enlace.
            e.preventDefault(); 
            handlePress(e);
        }, { passive: false });
    });
    
    // NOTA: El código de 'bodyElement' que pusiste al final fue eliminado, 
    // ya que no es parte de la lógica de los botones y genera un error de sintaxis/contexto.
});