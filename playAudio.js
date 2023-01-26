var playMultiple = function () {
  loadSounds(this, {
    a1: "a1.mp3",
    a2: "a2.mp3",
  });
};

playMultiple.prototype.play = function () {
  var startTime = context.currentTime + 0.5;
  var tempo = 80; // BPM (beats per minute)
  var eighthNoteTime = 60 / tempo / 2;

  playSound(this.a1, startTime + 0.22);
  playSound(this.a2, startTime);
};
