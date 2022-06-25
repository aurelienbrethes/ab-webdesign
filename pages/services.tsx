import { NextPage } from 'next'
import BackButton from '../src/components/UI/BackButton'
import Service from '../src/components/service'
import H1Title from '../src/components/UI/H1Title'

const services = [
  {
    id: 1,
    title: 'V I T R I N E',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
  },
  {
    id: 2,
    title: 'S E O',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
  },
  {
    id: 3,
    title: 'E - C O M M E R C E',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
  },
  {
    id: 4,
    title: 'A P P L I C A T I O N',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
  },
]

const Services: NextPage = () => {
  return (
    <div className="flex items-center w-screen h-screen ">
      <H1Title title="Services" />
      <section className="flex justify-around w-full pt-32 h-5/6">
        {services.map((service) => (
          <Service
            title={service.title}
            description={service.description}
            id={service.id}
            key={service.id}
          />
        ))}
      </section>
      <BackButton />
    </div>
  )
}
export default Services
