## ¿Qué es jQuery? ##
Es una biblioteca rápida y sencilla de JavaScript, que abarca actividades típicas de programación escritas en un solo comando. Parece un juego de piezas listas con las que puedes ensamblar una aplicación o un sitio web.

Una definición más técnica sería: 
> jQuery es una biblioteca de JavaScript minificada de código abierto creada para simplificar las operaciones de JavaScript. Puedes utilizar jQuery para codificar rápidamente una serie de comandos diferentes que te llevarían mucho más tiempo si utilizaras código HTML.

## Función jQuery ##
Selecciona elementos del DOM, crea elementos, ejecuta funciones cuando el DOM este listo, maneja eventos, animaciones, AJAX

Entre sus funciones se encuentran las siguientes:

* Crea un vínculo rápido entre JavaScript y elementos HTML.
* Trabaja con selectores CSS, hojas de estilo en cascada, que permiten crear páginas web atractivas.
* Implementa funciones de AJAX, el servicio de intercambio de datos de la página con el servidor que permite crear animaciones y efectos visuales.

### Código ###
```
$(selector).accion();
```

## Métodos ##

**setter:** Modifica valores como atributos o propiedades. Ejemplos:

.text(): modifica texto

.val(): cambia el valor de entrada.

.attr(): cambia un atributo

.css(): modifica el css

**getter:** Obtienes el valor de una propiedad o contenido de un elemento, esto para cuando llamas a un método sin pasarle argumentos.

si envias solo un parametro es un **getter**, si son dos es un **setter**.

## Ejemplos
JQuery tiene distintos usos, a continuación se muetran unos ejemplos:

**Cambiar el contenido de un elemento:**
```
html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de jQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="miElemento">Texto inicial</div>
    <button id="cambiarTexto">Cambiar Texto</button>

    <script>
        $(document).ready(function() {
            $('#cambiarTexto').click(function() {
                $('#miElemento').text('¡Texto cambiado!');
            });
        });
    </script>
</body>
</html>
```

**Cambiar el estilo de un elemento:**
```
html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de jQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="miElemento" style="width: 100px; height: 100px; background-color: red;"></div>
    <button id="cambiarEstilo">Cambiar Estilo</button>

    <script>
        $(document).ready(function() {
            $('#cambiarEstilo').click(function() {
                $('#miElemento').css({
                    'width': '200px',
                    'background-color': 'blue'
                });
            });
        });
    </script>
</body>
</html>
```

**Animación de un elemento:**
```
html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Animación con jQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="miElemento" style="width: 100px; height: 100px; background-color: green;"></div>
    <button id="animar">Animar</button>

    <script>
        $(document).ready(function() {
            $('#animar').click(function() {
                $('#miElemento').fadeOut(1000).fadeIn(1000);
            });
        });
    </script>
</body>
</html>
```

## Conclusión
jQuery se usa para crear animaciones y efectos visuales en páginas y aplicaciones web. Resulta muy útil en Front End, para desarrollar la parte visible, y en Full Stack, para crear sitios web desde cero.