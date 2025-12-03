# Documentación del Componente `List`

Este documento describe el funcionamiento y propósito del componente
**List**, el cual muestra información sobre un intérprete o actor de
cine.

## 📌 Descripción General

El componente `List` es un componente funcional de React que recibe
información sobre un intérprete (foto, nombre y si pertenece a una
película destacada) y muestra estos datos dentro de un diseño accesible
y responsivo.

## 🧩 Props

  ------------------------------------------------------------------------
  Prop             Tipo                Descripción
  ---------------- ------------------- -----------------------------------
  `foto`           `string`            URL de la fotografía del
                                       intérprete.

  `nombre`         `string`            Nombre del intérprete.

  `esNota10`       `boolean`           Indica si participa en una película
                                       destacada.

  `children`       `React.ReactNode`   Texto biográfico o descriptivo.
  ------------------------------------------------------------------------

## 🎨 Estructura y Accesibilidad

-   El contenedor principal es un `<article>` accesible mediante
    `tabIndex="0"`.
-   La imagen está envuelta en un `<figure>` con `<figcaption>` oculto
    para lectores de pantalla.
-   El nombre del intérprete cambia de color si participa en una
    película destacada (`esNota10 === true`).

## 🧱 Ejemplo de Uso

``` jsx
<List 
  foto="path/to/photo.jpg" 
  nombre="Actor Name" 
  esNota10={true}
>
  Biography text here
</List>
```

## 🛠 Código Fuente Completo

``` jsx
function List(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        <article
            tabIndex="0"
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`${nombre}${esNota10 ? ', intérprete en película destacada' : ''}`}
        >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={\`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) \${esNota10 ? "text-red-600" : "text-gray-800"}\`}
                >
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete en película destacada</em>}
                </h2>
            </header>

            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>
    );
}

export default List;
```

------------------------------------------------------------------------

Generado automáticamente a partir del código proporcionado.