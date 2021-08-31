import { initUsers, pullData, newGame } from './api';
import './styles.css';

const loadScores = async () => {
  const displayScores = document.getElementById('scores');

  while (displayScores.firstChild) {
    displayScores.removeChild(displayScores.firstChild);
  }

  const userData = await pullData();

  userData.result.forEach(
    (entry) => displayScores.insertAdjacentHTML(
      'beforeend',
      `
    <div>${entry.user}: ${entry.score}</div>  
  `,
    ),
  );
};
