function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for (let i = 0; i < 10; i++) {
    setTimeout(()=> console.log('test emitter sends: ', getRandomInt(1000)), i * 1000);
}
