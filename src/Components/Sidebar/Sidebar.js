import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

export default function Sidebar() {
  const menu = [
    { title: 'mainPage', path:'/'},
    { title: 'basicArticle', path:'/article'},
    { title: 'withTags', path: '/withTags' },
    { title: 'withRemarks', path: '/withRemarks' },
    { title: 'withShortArticle', path: '/withShortArticle' },
  ];
  return (
    <aside className="sidebar">
      <ul>
        {menu.map(m => (
          <li key={m.title}>
            <NavLink exact activeClassName="active" to={m.path}>
              {m.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
