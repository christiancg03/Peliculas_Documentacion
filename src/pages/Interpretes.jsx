import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";
import { useState } from "react";
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";

/**
 * Interpretes component displays a list of interpreters (actors) from available movies.
 * Each interpreter is shown with their name, photo, and biography, and links to a detailed view.
 *
 * @component
 * @returns {JSX.Element} The rendered interpreters list.
 */

function Interpretes() {
    const [searchTerm, setSearchTerm] = useState("");

// Usamos useMemo para memorizar la lista filtrada.
    // Solo se recalcula si 'searchTerm' cambia.
    const filteredInterpretes = useMemo(() => {
        const allInterpretes = peliculas.flatMap((pelicula) =>
            pelicula.actores.map((actor, index) => ({
                idPelicula: pelicula.id,
                idInterprete: index,
                nombre: actor.nombre,
                imagen: actor.imagen,
                biografia: actor.biografia,
                esNota10: pelicula.nota === 10,
            }))
        );

        if (!searchTerm) {
            return allInterpretes;
            // Si no hay término, devuelve la lista completa
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return allInterpretes.filter((actor) =>
            // Filtra por el nombre de la película
            actor.nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
            <p className="text-gray-700 mb-6">
                Estos son los intérpretes disponibles de nuestras películas:
            </p>

            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar intérpretes por nombre..."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
                {filteredInterpretes.length > 0 ? (
                    filteredInterpretes.map((actor) => (
                        <Link
                             key={`${actor.idPelicula}-${actor.idInterprete}`}
                             to={`/detalle/pelicula/${actor.idPelicula}/interprete/${actor.idInterprete}`}
                            aria-label={`Ver detalles del intérprete ${actor.nombre}`}>
                            <List
                                // key={idInterprete} // No es necesario aquí porque el key está en el Link
                                nombre={actor.nombre}
                                foto={actor.imagen}
                                esNota10={actor.esNota10}
                            >
                                {actor.biografia}
                            </List>
                        </Link>
                    ))
                    ) : (
                // Mensaje si no hay resultados
                <p className="col-span-full text-center text-gray-500 p-4">
                    No se encontraron películas con el término
                    `{searchTerm}`.
                </p>
                )
                }
            </div>
        </>
    );
}
export default Interpretes;