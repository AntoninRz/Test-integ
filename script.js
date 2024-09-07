// Skills
function createProgressCircle(circleId, textId, percentage) {
  var circle = new ProgressBar.Circle(circleId, {
    color: '#f3f3f3',
    strokeWidth: 4,
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#fff', width: 1 },
    to: { color: '#fff', width: 4 },
    
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
    }
  });

  circle.animate(percentage);
}

createProgressCircle(document.getElementById('skill-circle-1'), 'percentage-text-1', 0.85);
createProgressCircle(document.getElementById('skill-circle-2'), 'percentage-text-2', 0.85);
createProgressCircle(document.getElementById('skill-circle-3'), 'percentage-text-3', 0.85);
createProgressCircle(document.getElementById('skill-circle-4'), 'percentage-text-4', 0.85);
createProgressCircle(document.getElementById('skill-circle-5'), 'percentage-text-5', 0.85);
