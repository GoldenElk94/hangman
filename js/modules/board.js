const Board = (_ => {
    // state
    let livesLeft = null;
    let canvas;
    let context;

    const init = _ => {
        canvas = document.querySelector(".hangman__board");
        context = canvas.getContext("2d");
        context.lineWidth = 2;
        context.strokeStyle = "yellowGreen";
        base();
    };

    const drawLine = (startX, startY, endX, endY) => {
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
      };

      const base = _ => {
          line1();
          line2();
          line3();
      };

      const head = _ => {
          context.beginPath();
          context.arc(60, 25, 10, 0, Math.PI * 2);
          context.stroke();
      };
      const line1 = _ => drawLine(0, 150, 150, 150);
      const line2 = _ => drawLine(10, 0, 10, 300);
      const line3 = _ => drawLine(0, 5, 80, 5);
      const rope = _ => drawLine(60, 5, 60, 20);
      const torso = _ => drawLine(60, 36, 60, 70);
      const rightArm = _ => drawLine(60, 46, 100, 50);
      const leftArm = _ => drawLine(60, 46, 20, 50);
      const rightLeg = _ => drawLine(60, 70, 100, 100);
      const leftLeg = _ => drawLine(60, 70, 20, 100);

      const parts = [leftLeg, rightLeg, leftArm, rightArm, torso, head, rope];
      
      const render = _ => {
          parts[livesLeft]();
      };
    const setLives = newLives => {
        livesLeft = newLives;
        render();
    };
    return {
        init,
        setLives
    };
})();
export default Board;