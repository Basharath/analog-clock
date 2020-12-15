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
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    const hoursDeg = hoursRatio * 360;
    const minutesDeg = minutesRatio * 360;
    const secondsDeg = secondsRatio * 360;
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
                        Math.cos((pi * i) / 6 - pi / 2) * 150
                      }px,${Math.sin((pi * i) / 6 - pi / 2) * 150}px)`,
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
