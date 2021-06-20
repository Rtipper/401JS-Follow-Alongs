



class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <div class='navContainer'>
            <div class='home'>
              <li><Link to="/" >HOME</Link></li>
            </div>
            <div class='pokemon'>
              <li><Link to="/pokemon">POKEMON</Link></li>
            </div>
            <div class='history'>
              <li><Link to="/history">HISTORY</Link></li>
            </div>
            <div class='help'>
              <li><Link to="/help">HELP</Link></li>
            </div>
          </div>
        </ul>
      </nav>
    );
  }

}

export default Nav;

// DEMO CODE
// import styles from './nav.module.scss';


// const myStyles = {
//   backgroundColor: '#888'
// };

// class Nav extends React.Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//           <li className={styles.menuItem}><Link to="/">HOME</Link></li>
//           <li className={styles.menuItem}><Link to="/TBD1">HISTORY</Link></li>
//           <li className={styles.menuItem}><Link to="/TBD2">HELP</Link></li>
//         </ul>
//       </nav>
//     );
//   }

// }

// export default Nav;



