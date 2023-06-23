import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.module.css";

export default function SideBar({ isOpen, handleToggle }) {
  return (
    <div
      className="vh-100 sidebar"
      style={{
        width: isOpen ? '280px' : '0',
      }}
    >
      <div className='p-3'>
        {isOpen && (
          <>
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <svg className="bi pe-none me-2" width="40" height="32">
                <use xlinkHref="#bootstrap"></use>
              </svg>
              <span className="fs-4">Sidebar</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item" >
                <NavLink className=' link-menu-sidebar' to='/'>
                  <i className={`bi bi-house-fill m-2`}></i>
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className=' link-menu-sidebar' to='/'>
                  <i className={`bi bi-house-fill m-2`}></i>
                  Entrada
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className=' link-menu-sidebar' to='/'>
                  <i className={`bi bi-house-fill m-2`}></i>
                  Saída
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className=' link-menu-sidebar' to='/'>
                  <i className={`bi bi-house-fill m-2`}></i>
                  Avaliação
                </NavLink>
              </li>

              <li className="nav-item" >
                <button class=" link-menu-sidebar btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#cadastro-collapse" >
                <i class="bi bi-book-fill">&nbsp;</i> Cadastro <i class="bi bi-caret-down-fill"></i>
                </button>
                <div class="collapse show" id="cadastro-collapse">
                  <ul class="nav nav-pills flex-column mb-auto">
                    {itemMenu.map((item, index) => (
                      <li className="nav-item" key={index}>
                        <NavLink className=' link-menu-sidebar' to={item.path}>

                          <i className={`bi ${item.icon} m-2`}></i>
                          {item.nome}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="nav-item" >
                <button class=" link-menu-sidebar btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#relatorio-collapse" >
                <i class="bi bi-book-fill">&nbsp;</i> Relatórios <i class="bi bi-caret-down-fill"></i>
                </button>
                <div class="collapse show" id="relatorio-collapse">
                  <ul class="nav nav-pills flex-column mb-auto">
                    {itemMenuRelatorio.map((item, index) => (
                      <li className="nav-item" key={index}>
                        <NavLink className=' link-menu-sidebar' to={item.path}>

                          <i className={`bi ${item.icon} m-2`}></i>
                          {item.nome}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

const itemMenu = [
  {
    nome: 'Lojas',
    path: '/lojas',
    icon: 'bi-house-fill',

  },
  {
    nome: 'Promotores',
    path: '/promotores',
    icon: 'bi-megaphone-fill',
  },
  {
    nome: 'Fornecedores',
    path: '/fornecedores',
    icon: 'bi-megaphone-fill',
  },
  {
    nome: 'Usuários',
    path: '/usuarios',
    icon: 'bi-megaphone-fill',
  },
  {
    nome: 'Perils',
    path: '/perfils',
    icon: 'bi-megaphone-fill',
  },
  {
    nome: 'Produtos',
    path: '/produtos',
    icon: 'bi-megaphone-fill',
  },
];

const itemMenuRelatorio = [
  {
    nome: 'Saída 2',
    path: 'relatorios/saida2',
    icon: 'bi-house-fill',

  },
];