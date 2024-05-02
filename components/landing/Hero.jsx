import cover from '@/public/cover.png';
import Image from "next/image";

export default function Hero() {
    return (
        <section className="container">
            <div
                className="py-4 rounded-lg p-4 md:p-12 min-h-[450px] w-full relative overflow-hidden grid place-items-center grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <Image
                        fill
                        src={cover}
                        priority={true}
                        alt="cover image"
                        className="object-cover"
                    />
                    <div className='absolute top-1/2 left-12 transform -translate-y-1/2'>
                        <div className='w-[500px]'>
                            <h1 className="font-bold text-3xl md:text-5xl text-white">
                                Choose from thousands of recipes
                            </h1>
                            <p className="text-white my-4">Appropriately integrate technically sound value with scalable infomediaries
                                negotiate
                                sustainable strategic
                                theme areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}