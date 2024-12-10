import NumpyLogo from '../assets/numpy-logo.svg';
import PandasLogo from '../assets/pandas-logo.svg';
import PytorchLogo from '../assets/pytorch-logo.svg';
import GitLogo from '../assets/git-logo.svg';
import TensorFlowLogo from '../assets/tensorflow-logo.svg';
import ScikitLearnLogo from '../assets/scikit-learn-logo.svg';

export const StackData = [
  {
    row: 1,
    stack: [
      {
        name: 'Pytorch',
        image: PytorchLogo
      },
      {
        name: 'TensorFlow',
        image: TensorFlowLogo
      },
      {
        name: 'Scikit-learn',
        image: ScikitLearnLogo
      },
    ]
  },
  {
    row: 2,
    stack: [
      {
        name: 'Numpy',
        image: NumpyLogo
      },
      {
        name: 'Pandas',
        image: PandasLogo
      },
      {
        name: 'Git',
        image: GitLogo
      },
    ]
  }
];

export const CurriculumData = [
  {
    step: 'STEP 01',
    title: 'Data Science and Machine Learning',
    week: [
      {
        number: 'week1',
        title: 'Git, EDA, ML Basics'
      },
      {
        number: 'week2',
        title: 'Supervised Learning, Unsupervised Learning, Ensemble'
      }
    ]
  },
  {
    step: 'STEP 02',
    title: 'Deep Learning and Explainable AI',
    week: [
      {
        number: 'week3',
        title: 'Deep Learning Basics, Vision, Explainable AI (XAI)'
      },
      {
        number: 'week4',
        title: 'NLP, Time Series, Recommendation System'
      },
    ]
  },
  {
    step: 'STEP 03',
    title: 'Advanced Deep Learning, etc',
    week: [
      {
        number: 'week5',
        title: 'Generative AI, LLM, Speech Processing'
      },
      {
        number: 'week6',
        title: 'Reinforcement Learning, Multimodal AI, Diverse Learning Paradigms'
      },
    ]
  }
];
