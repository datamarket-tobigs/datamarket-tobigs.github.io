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
    title: 'Data Analytics, Statistics',
    week: [
      {
        number: 'week1',
        title: 'EDA, Framework'
      },
      {
        number: 'week2',
        title: 'Optimization, Regression'
      }
    ]
  },
  {
    step: 'STEP 02',
    title: 'Machine Learning,\nRegression, Classification',
    week: [
      {
        number: 'week3',
        title: 'Naive Bayes, Decision Tree, Neural Network Basic'
      },
      {
        number: 'week4',
        title: 'Ensemble, Dimensionality Reduction'
      },
      {
        number: 'week5',
        title: 'KNN, Clustering, SVM, SVR'
      }
    ]
  },
  {
    step: 'STEP 03',
    title: 'Deep Learning,\nDNN, NLP, Vision, Gen, etc',
    week: [
      {
        number: 'week6',
        title: 'Neural Network Advanced, Time Series'
      },
      {
        number: 'week7',
        title: 'NLP, Vision Basic'
      },
      {
        number: 'week8',
        title: 'NLP, Vision Advanced'
      },
      {
        number: 'week9',
        title: 'Generative, Recommender System Basic'
      },
      {
        number: 'week10',
        title: 'Generative Advanced, Speech'
      }
    ]
  }
];
