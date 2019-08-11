import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';

const MENUS = [
  {
    name: 'Github',
    path: '//github.com/yhyddr',
  },
  {
    name: '最近文章',
    path: '//www.yuque.com/abser/blog',
  },
  {
    name: '社交账号',
    path: '//www.yuque.com/abser/in/cdwiyq',
  },
  {
    name: 'Resume',
    path: '//www.yuque.com/abs/intro/iwgiub',
  },
];

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.headerNavbar}>
          {
            MENUS.map((item, idx) => {
              return (
                <a key={idx} className={styles.headerMenuItem} href={item.path}>{item.name}</a>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
