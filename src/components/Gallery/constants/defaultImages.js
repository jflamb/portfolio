import githubOnboarding from '../../../assets/images/thumbs/github-onboarding.png'
import singlePipeline from '../../../assets/images/thumbs/single-pipeline.png'
import pipelineEditor from '../../../assets/images/thumbs/pipeline-editor.png'
import failureAnalysis from '../../../assets/images/thumbs/failure-analysis.png'
import kubernetesPipeline from '../../../assets/images/thumbs/kubernetes.png'


export const DEFAULT_IMAGES = [
  {
    id: '1',
    thumbnail: githubOnboarding,
    caption: 'GitHub Onboarding',
    description: 'Simplifying the set up of an Azure Pipeline.',
    dribbbleLink: 'https://dribbble.com/shots/14004054-Onboard-GitHub-user-to-Azure-Pipelines',
  },
  {
    id: '2',
    thumbnail: singlePipeline,
    caption: 'Single Pipeline',
    description: 'End-to-end continuous integration/delivery pipeline.',
    dribbbleLink: 'https://dribbble.com/shots/14009220-Single-Pipeline',
  },
  {
    id: '3',
    thumbnail: pipelineEditor,
    caption: 'Pipeline Editor',
    description: 'Making configuration-as-code easier and less error-prone.',
    dribbbleLink: 'https://dribbble.com/shots/14009289-Pipeline-Editor',
  },
  {
    id: '4',
    thumbnail: failureAnalysis,
    caption: 'Failure Analysis',
    description: 'Reduce support costs by simplifying failure diagnoses.',
    dribbbleLink: 'https://dribbble.com/shots/14009348-Pipeline-Failure-Analysis',
  },
  {
    id: '5',
    thumbnail: kubernetesPipeline,
    caption: 'Deploy to Kubernetes',
    description: 'Simplify continuous deployment to Kubernetes.',
    dribbbleLink: 'https://dribbble.com/shots/14016229-Pipeline-to-Kubernetes',
  }
]