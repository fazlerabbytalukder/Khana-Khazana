import aboutimg from '@/public/rec-about.jpg';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container">
            <div className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">It is even better than
                                an expensive cookery book</h1>
                            <div className="leading-relaxed">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crudey mightily rigorous plot life. New homes in particular are subject.All recipes created with FoodiePress have suport for Micoformats and Google Recipe View. Schema.org is a collaboration byo improve the web by creatinegaera structured data markupore off this less hello salamander lied porpoise much over tightlyapedey innocuouslylife. Schema.org is a collaboration byo improve</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                            <p className="leading-relaxed">Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                            <p className="leading-relaxed">Downloads</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Recipes</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <Image
                            src={aboutimg}
                            alt="cover image"
                            className="object-cover object-center w-full h-full"
                        />
                        {/* <img className="object-cover object-center w-full h-full" src="rec-about" alt="stats"> */}
                    </div>
                </div>
            </div>
        </div>
    );
}