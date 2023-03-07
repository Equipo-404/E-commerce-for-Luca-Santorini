import React from 'react'

export const Serach = () => {
    // Estado del término de búsqueda
    const [query, setQuery] = useState('');

    // Estado de los resultados de búsqueda
    const [results, setResults] = useState([]);

    // Función para manejar el cambio en el campo de búsqueda
    const handleQueryChange = event => {
        setQuery(event.target.value);
    };

    // Función para manejar la solicitud de búsqueda
    const handleSearch = async event => {
        event.preventDefault();

        // Hace una solicitud a la API de búsqueda con el término de búsqueda actual
        const response = await fetch(`/api/products?search=${query}`);
        const data = await response.json();

        // Actualiza el estado de los resultados de búsqueda con los resultados devueltos por la API
        setResults(data);
    };

    return (
        <>
            {/* Formulario de búsqueda */}
            <form onSubmit={handleSearch}>
                <label htmlFor="query">Buscar productos:</label>
                <input id="query" type="text" value={query} onChange={handleQueryChange}/>
                <button type="submit">Buscar</button>
            </form>

            {/* Resultados de búsqueda */}
            {results.length > 0 && (
                <ul>
                    {results.map(product => (
                        <li key={product.id}>
                            {product.name} - {product.color}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
