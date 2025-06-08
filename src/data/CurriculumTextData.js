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
        number: 'Week1',
        title: 'Git, EDA, Machine Learning Basics'
      },
      {
        number: 'Week2',
        title: 'Advanced Machine Learning, Ensemble'
      }
    ]
  },
  {
    step: 'STEP 02',
    title: 'Deep Learning and Explainable AI',
    week: [
      {
        number: 'Week3',
        title: 'Deep Learning Basics, Vision, Explainable AI (XAI)'
      },
      {
        number: 'Week4',
        title: 'NLP, Time Series, Recommendation System'
      },
    ]
  },
  {
    step: 'STEP 03',
    title: 'Advanced Deep Learning, Application, etc',
    week: [
      {
        number: 'Week5',
        title: 'Generative AI, LLM, Diverse Learning Paradigms'
      },
      {
        number: 'Week6',
        title: 'Reinforcement Learning, Multimodal AI, MLOps & Database'
      },
    ]
  }
];
