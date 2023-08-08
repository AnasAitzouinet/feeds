import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { AiOutlineCheck } from 'react-icons/ai'
import Image from 'next/image'

const features = [
  {
    name: 'Pick What you need.',
    description:"Choose from our catalog of products, the fruits and vegetables you want to receive in your home.",
    icon: AiOutlineCheck,
  },
  {
    name: 'Price and delivery.',
    description: "Before the day of delivery, we will send you the price of your order and the delivery time.",
    icon: AiOutlineCheck,
  },
  {
    name: 'Confirm your order.',
    description: "Once you've reviewed your order, simply confirm it, and we'll be right at your door!.",
    icon: AiOutlineCheck,
  },
]

export default function Features() {
  return (
    <div id='how-we-works' className="overflow-hidden bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">Order faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How we work!</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Once you&apos;ve picked your preferred plan, whether it&apos;s a weekly or monthly option, take the next step:              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/idea.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2000}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
