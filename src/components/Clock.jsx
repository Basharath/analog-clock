import React, { Component } from 'react';
import Github from './Github';

export default class Clock extends Component {
  state = {
    hoursDeg: '',
    minutesDeg: '',
    secondsDeg: '',
    numbers: this.generateNumbers(),
  };

  pi = Math.PI;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getTheTime();
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateNumbers() {
    let numbers = [];
    for (let i = 1; i <= 12; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  getTheTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours() % 12;
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const hoursDeg = hours * 30 + minutes * 0.5;
    const minutesDeg = minutes * 6;
    const secondsDeg = seconds * 6;
    this.setState({ hoursDeg, minutesDeg, secondsDeg });
  }

  setTheHands(degrees) {
    return degrees
      ? {
          transform: `rotate(${degrees}deg)`,
        }
      : {};
  }

  render() {
    const { hoursDeg, minutesDeg, secondsDeg, numbers } = this.state;
    const { pi, setTheHands } = this;
    return (
      <>
        <Github github="https://github.com/Basharath/analog-clock" />
        <div className="container">
          <div className="clock">
            <div className="hours hand" style={setTheHands(hoursDeg)}></div>
            <div className="minutes hand" style={setTheHands(minutesDeg)}></div>
            <div className="seconds hand" style={setTheHands(secondsDeg)}></div>
            {numbers.map((i) => {
              return (
                <div className={`numbers`} key={i}>
                  <div
                    className={`number${i}`}
                    style={{
                      transform: `translate(${
                        Math.cos((pi * i) / 6 - pi / 2) * 180
                      }px,${Math.sin((pi * i) / 6 - pi / 2) * 180}px)`,
                    }}
                  >
                    {i}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
