import { NextPage } from 'next'
import BackButton from '../src/components/BackButton'
import Service from './service'

const services = [
  {
    id: 1,
    title: 'Vitrine',
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
    title: 'E-Commerce',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
  },
  {
    id: 4,
    title: 'Application',
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
  },
]

const Services: NextPage = () => {
  return (
    <div className="flex items-center w-screen h-screen ">
      <h1 className="absolute top-7 right-8">Services</h1>
      <section className="flex justify-around w-full pt-32 h-5/6">
        {services.map((service) => (
          <div key={service.id}>
            <Service
              id={service.id}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </section>
      <BackButton />
    </div>
  )
}
export default Services
