import React from 'react'
import { NavLink } from 'react-router-dom'

const Relatorios = () => {
    return (
        <>
            <h1>Relatórios</h1>
            <hr />

            <div className="row">
                {itemMenuRelatorio.map((item, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card text-center p-2">
                            <i className={`bi ${item.icon} fs-1`}></i>
                            <p className='m-0 fs-4 fw-semibold'>{item.nome}</p>
                            <NavLink to={item.path} className='btn btn-primary fw-semibold mt-2'>Vizualizar Relatório</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Relatorios

const itemMenuRelatorio = [
    {
        nome: 'Saída dos Promotores',
        path: 'saida1',
        icon: 'bi-box-arrow-right',
    },
    {
        nome: 'Horas trabalhadas',
        path: 'horasTrabalho1',
        icon: 'bi-briefcase-fill',
    },
    {
        nome: 'Entradas de promotores',
        path: 'entrada1',
        icon: 'bi-person-fill-check',
    },
    {
        nome: 'Entradas por promotor',
        path: 'entrada2',
        icon: 'bi-person-fill-check',
    },
    {
        nome: 'Media de avaliações',
        path: 'avaliacao1',
        icon: 'bi-graph-up',
    },
    {
        nome: 'Rank de avaliação',
        path: 'avaliacao2',
        icon: 'bi-bar-chart-fill',
    },
];