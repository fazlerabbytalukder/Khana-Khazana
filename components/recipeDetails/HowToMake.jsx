export default function HowToMake({ steps }) {
    return (
        <section>
            <div className="container py-12">
                <h3 className="font-semibold text-xl py-6">How to Make it</h3>
                <div>
                    {
                        steps.map((step, index) => (
                            <div className="step" key={index}>
                                <h3>Step {index + 1}</h3>
                                <p>{step}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}