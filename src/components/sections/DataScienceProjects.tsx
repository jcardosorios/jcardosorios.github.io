import { useLanguage } from '../../context/LanguageContext';
import type { Project as ProjectType } from '../../types'
import { Badge } from '../ui/Badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { SectionWrapper } from './SectionWrapper';
import taxiImg from '../../assets/projects/taxi-img.jpg'
import { Button } from '../ui/Button';
import { Github } from 'lucide-react';

const projectsData: ProjectType[] = [
  {
    id: 'ds-2',
    title: {
      en: 'Sentiment Analysis of Movie Reviews',
      es: 'Análisis de Sentimiento de Reseñas de Películas',
    },
    description: {
      en: 'Built a sentiment analysis model using NLP techniques to classify movie reviews as positive or negative. Visualized sentiment distribution.',
      es: 'Construí un modelo de análisis de sentimientos utilizando técnicas de PNL para clasificar las reseñas de películas como positivas o negativas. Visualicé la distribución de sentimientos.',
    },
    methodologyList: {
      en: ['TF-IDF', 'Naive Bayes', 'LSTM', 'Word Embeddings'],
      es: ['TF-IDF', 'Naive Bayes', 'LSTM', 'Incrustaciones de Palabras'],
    },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'text analysis',
    repoUrl: '#',
    tags: ['Python', 'NLTK', 'TensorFlow/Keras', 'Matplotlib'],
  },
  {
    id: 'ds-1',
    title: {
      en: 'Taxi Demand Forecasting and Analysis with ML',
      es: 'Análisis y Predicción de Demanda de Taxis usando ML',
    },
    description: {
      en: 'In this project, I performed an in-depth time series analysis and developed Machine Learning models to predict the hourly taxi demand at an airport. My work included processing and manipulating historical data, applying advanced feature engineering techniques specific to time series, and training ensemble algorithms like CatBoost and LightGBM. The primary goal was to optimize prediction accuracy, achieving an RMSE of 41, to enhance operational management of the taxi fleet.',
      es: 'En este proyecto, realicé un análisis exhaustivo de series temporales y desarrollé modelos de Machine Learning para predecir la demanda horaria de taxis en un aeropuerto. Mi trabajo incluyó el procesamiento y la manipulación de datos históricos, la aplicación de técnicas avanzadas de ingeniería de características específicas para series temporales, y el entrenamiento de algoritmos de ensemble como CatBoost y LightGBM. El objetivo principal fue optimizar la precisión de las predicciones, logrando un RMSE de 41, para mejorar la gestión operativa de la flota de taxis.',
    },
    methodologyList: {
      en: ['Logistic Regression', 'Random Forest', 'Feature Engineering', 'Cross-validation'],
      es: ['Regresión Logística', 'Random Forest', 'Ingeniería de Características', 'Validación Cruzada'],
    },
    imageUrl: taxiImg,
    imageHint: 'data graph',
    repoUrl: 'https://github.com/jcardosorios/tripleten_13_ML_temporal_series',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
  },
];

const content = {
  sectionTitle: {
    en: "Data Science & ML Projects",
    es: "Proyectos de Ciencia de Datos y ML",
  },
  methodologies: {
    en: "Methodologies:",
    es: "Metodologías:",
  },
  toolsTech: {
    en: "Tools & Technologies:",
    es: "Herramientas y Tecnologías:",
  },
  repository: {
    en: "Repository",
    es: "Repositorio",
  },
};


function DataScienceProjects() {
  const { language } = useLanguage();
  const currentContent = {
    sectionTitle: content.sectionTitle[language],
    methodologies: content.methodologies[language],
    toolsTech: content.toolsTech[language],
    repository: content.repository[language],
  };
  return (
    <SectionWrapper id='data-science' title={currentContent.sectionTitle}>
      <div className='grid md:grid-cols-2 gap-8'>
        {projectsData.map((project) => (
          <Card key={project.id} className='group flex flex-col overflow-hidden shadow-lg  transition-shadow duration-300 dark:hover:shadow-foreground/30'>
            <CardHeader>
              <div className='aspect-video relative mb-4 rounded-md overflow-hidden'>
                <img src={project.imageUrl} alt={project.title[language]} className='w-full h-full object-cover'/>
              </div>
              <CardTitle className='text-2xl'>{project.title[language]}</CardTitle>
              <CardDescription>{project.description[language]}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
              {project.methodologyList && project.methodologyList[language].length > 0 &&(
                <div className='mb-4'>
                  <h4 className='font-semibold mb-2 text-sm text-muted-foreground'>{currentContent.methodologies}</h4>
                  <ul className='list-disc list-inside space-y-1 text-sm text-foreground/80'>
                    {project.methodologyList[language].map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className='mt-4'>
                <h4 className='font-semibold mb-2 text-sm text-muted-foreground'>{currentContent.toolsTech}</h4>
                <div className='flex flex-wrap gap-2'>
                  {project.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex justify-end gap-2 p-4 bg-muted/50'>
              {project.repoUrl && (
                <Button asChild>
                  <a href={project.repoUrl} target='_blank' rel='noopener noreferrer'>
                    <Github className='mr-2 h-4 w-4'/>{currentContent.repository}
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default DataScienceProjects