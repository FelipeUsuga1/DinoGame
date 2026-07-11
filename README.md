# DinoGame

DinoGame es un juego web original de carrera infinita con estética pixel art monocromática. Controla un dinosaurio que corre automáticamente, evita cactus, rocas y pterodáctilos, supera tu récord y atraviesa un ciclo gradual de día y noche.

El proyecto funciona completamente en el navegador, no requiere backend y conserva el récord del jugador mediante `localStorage`.

## Tecnologías

- HTML5
- CSS3
- JavaScript puro con módulos ES
- Canvas 2D
- Web Audio API para efectos sintetizados
- `localStorage` para guardar el récord

No utiliza frameworks ni dependencias externas.

## Controles

| Acción | Teclado | Pantalla táctil |
| --- | --- | --- |
| Empezar / saltar | Espacio, flecha arriba o `W` | Tocar la zona superior |
| Agacharse | Mantener flecha abajo o `S` | Tocar la zona inferior |
| Pausar / reanudar | `P` o Escape | — |
| Reiniciar | Espacio o botón **Jugar de nuevo** | Botón **Jugar de nuevo** |
| Activar o silenciar efectos | Botón **Sonido** | Botón **Sonido** |

## Ejecutar localmente

No es necesario instalar paquetes. Desde la carpeta raíz del proyecto ejecuta un servidor estático, por ejemplo con Python:

```bash
python -m http.server 8000
```

Después abre [http://localhost:8000](http://localhost:8000) en el navegador.

## Publicación con GitHub Pages

`index.html` se encuentra en la raíz y utiliza rutas relativas, por lo que el proyecto puede publicarse directamente desde la rama `main` mediante GitHub Pages.

## Arquitectura

- `game.js`: bucle principal, estados, dificultad y ciclo de día y noche.
- `player.js`: dinosaurio, animaciones y hitboxes.
- `obstacle.js`: cactus, rocas y pterodáctilos.
- `input.js`: teclado, clic y controles táctiles.
- `collision.js`: detección de colisiones.
- `score.js`: puntuación y récord local.
- `audio.js`: efectos sintetizados y control de silencio.
- `config.js`: constantes centralizadas del juego.
