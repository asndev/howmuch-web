import React from 'react';
import styles from './Section.scss';

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      className: `${styles.section}`
    };
  }

  handleClick() {
    this.state.open ?
      this.setState({
        open: false,
        className: `${styles.section}`
      }) :
      this.setState({
        open: true,
        className: `${styles.section} ${styles.open}`
      });
  }

  render() {
    return (<div className={this.state.className}>
      <button>toggle</button>
    <div className={styles.sectionhead} onClick={this.handleClick.bind(this)}>
        {this.props.title}
      </div>
      <div className={styles.articlewrap}>
        <div className={styles.article}>
          {this.props.children}
        </div>
      </div>
    </div>);
  }
}

export default Section;
