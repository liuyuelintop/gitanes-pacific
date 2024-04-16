import ServiceCard from '../components/ServiceCard';
import { SERVICES, SERVICES_PRODUCTS, HERO } from '../constants';

export default function ServicesPage() {
    return (
        <div className="text-neutral-300 p-8">
            <div className="max-w-6xl mx-auto flex-col flex-wrap" >
                <h1 className="text-3xl font-bold text-center my-12">SERVICES</h1>
                <div className="flex flex-col lg:gap-10 lg:flex-row">
                    {
                        SERVICES.map((service, index) => (
                            <div
                                key={index} className="lg:w-1/2 gap-4">
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    imageUrl={service.url}
                                    imageAlt={service.title}
                                    cardMotion={service.motion}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col py-4 mb-4">
                    <img
                        className='rounded'
                        src={HERO[2].url}
                        alt="Software Licensing" />
                    <div className="text-center">
                        <h2 className='mt-6 text-2xl text-center mb-4'>Software Licensing</h2>
                        <div className="flex flex-col gap-1">
                            {SERVICES_PRODUCTS.map((product, index) => (
                                <p
                                    className='text-neutral-500'
                                    key={index}>{product}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
