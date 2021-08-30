const scores = (scorelog) => {
  const displayScores = document.getElementById('scores');

  scorelog.forEach(
    (entry) => displayScores.insertAdjacentHTML(
      'beforeend',
      `
    <div>${entry.name}: ${entry.score}</div>  
  `,
    ),
  );
};

exports.scores = scores;