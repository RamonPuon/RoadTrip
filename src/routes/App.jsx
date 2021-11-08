import React from 'react';
import "../styles/app.css";
import "../styles/layout.css";
import { useRoutes, A } from 'hookrouter';
import routes from '../hooks/router';

export default function App() {
    const routesResult = useRoutes(routes);
    return (
        <div>
            {routesResult}
            <A href="/Tuxtla">Tuxtla y sus alrededores</A>
        </div>
    )
}
