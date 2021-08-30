import { scores } from './scorelog';
import './styles.css';

const scorelog = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 20,
  },
  {
    name: 'Name',
    score: 50,
  },
  {
    name: 'Name',
    score: 78,
  },
  {
    name: 'Name',
    score: 125,
  },
  {
    name: 'Name',
    score: 77,
  },
  {
    name: 'Name',
    score: 42,
  },
];

document.addEventListener('DOMContentLoaded', () => scores(scorelog));
