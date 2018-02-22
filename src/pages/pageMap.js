import splash from './splash/splash'
import gallery from './gallery/gallery'
import one from '../images/coastlines/1.jpg'
import two from '../images/coastlines/2.jpg'

export default {
  SPLASH: {
    component: splash,
    props: {}
  },
  COASTLINES: {
    component: gallery,
    props: {
      sources: [one, two]
    }
  }
};
