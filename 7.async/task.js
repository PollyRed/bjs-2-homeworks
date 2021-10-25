class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(alarmTime, alarmCallback, alarmId) {
    if (alarmId === undefined) {
      throw new Error('id is undefined');
    }

    if (this.alarmCollection.find((alarm) => alarm.id === alarmId)) {
      console.error('id already exists');
      return;
    }

    this.alarmCollection.push({
      time: alarmTime,
      callback: alarmCallback,
      id: alarmId
    })
  }

  removeClock(alarmId) {
    if (this.alarmCollection.find((alarm) => alarm.id === alarmId)) {
      this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id != alarmId);

      return true;
    }

    return false;
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

    return hours + ':' + minutes;
  }

  start() {
    const checkClock = (alarm) => {
      if (getCurrentFormattedTime() === alarm.time) {
        alarm.callback();
      }
    }

    if (this.timerId === undefined) {
      this.timerId = setInterval(() => {
        for (alarm of this.alarmCollection) {
          checkClock(alarm);
        }
      });
    }
  }

  stop() {
    if (this.timerId != undefined) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(
      function(currentValue) {
        console.log(currentValue.id + ' ' + currentValue.time);
      }
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}