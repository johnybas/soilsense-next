import { CallToAction } from '@/components/CTA/CallToAction'
import MonitorAndControl from '@/components/CTA/MonitorAndControl'
import OurAppsSteps from '@/components/CTA/OurAppsSteps'
import PersonalisedFarming from '@/components/CTA/PersonalisedFarming'
import { WhySoilSense } from '@/components/hero/WhySoilSense'
import ReviewSection from '@/components/reviews/ReviewSection'
import Layout from '@/components/layout/Layout'
// import { Hero } from '@components/Hero'
// import { Pricing } from '@components/Pricing'
// import { PrimaryFeatures } from '@components/PrimaryFeatures'
// import { Reviews } from '@components/Reviews'
// import { SecondaryFeatures } from '@components/SecondaryFeatures'

export default function Home() {
  return (
    <Layout
      title="Home - Soil Sense | Plantation with Tech"
      carousel
      dark={false}
    >
      {/* <Carousel /> */}
      <WhySoilSense />
      <PersonalisedFarming />
      <MonitorAndControl />
      <OurAppsSteps />
      <ReviewSection />
      <CallToAction />
    </Layout>
  )
}
