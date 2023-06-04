import Layout from '../components/Layout'
import bg from '../public/sandy-millar-8vaQKYnawHw-unsplash.jpg'
import bgQuran from '../public/the-dancing-rain-LMsOSkzhPpE-unsplash.jpg'

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <div
        //   className="group fixed bottom-10 right-10 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-danger-600 uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600"

            className=" group fixed bottom-10 z-10"
            role="group"
            style= {{ left: 'calc(50% - 150px)'}}
            >
            <button
                type="button"
                className="inline-block rounded-l bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light">
                Left
            </button>
            <button
                type="button"
                className="inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light">
                Middle
            </button>
            <button
                type="button"
                className="inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light">
                Right
            </button>
        </div>
        <Hero />
        <Services />
        <Featured />
        <Team />
        <Finisher />
        <Contact />

    </Layout>
)

export default IndexPage

/// Page Sections
const Hero = () => (<div className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
        minHeight: "75vh"
    }}>
    <div className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
        style={{
            backgroundImage: `url('${bg.src}')`
        }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
    </div>
    <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                    <p className="mt-4 text-lg text-gray-300">
                        The Wedding of
                    </p>
                    <h1 className="text-white font-semibold text-5xl">
                        Silvie & Aris
                    </h1>
                    <button
                        className={
                            "bg-white text-gray-800 active:bg-gray-100"
                            +
                            " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                        }
                        type="button"
                        style={{ transition: "all .15s ease", marginTop: '1rem' }}
                    >
                        SAVE THE DATE
                    </button>
                </div>
            </div>

        </div>
    </div>
    <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
    >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
    </div>
</div>)

const Services = () => <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
            <div className="pt-6 w-full md:w-6/12 px-6 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                            <i className="fas fa-award"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Awarded Agency</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                            Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-6 w-full md:w-6/12 px-6 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                            <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                            Verified Company
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                            Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Assalamu'alaikum Wr. Wb.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami:
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">

                </p>

            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                    <img
                        alt="..."
                        src={bgQuran.src}
                        className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block"
                            style={{
                                height: "95px",
                                top: "-94px"
                            }}
                        >
                            <polygon
                                points="-30,95 583,95 583,65"
                                className="text-pink-600 fill-current"
                            ></polygon>
                        </svg>
                        <p className="text-md font-light mt-2 text-white">
                            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
                        </p>
                    </blockquote>
                </div>
            </div>

        </div>
    </div>
</section>

const Featured = () => <section className="relative py-20">
    <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
    >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
    </div>

    <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
            </div>
            <div className="w-full md:w-8/12 ml-auto mr-auto px-8">
                <div className="md:pr-12">

                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>


                </div>
            </div>
        </div>
    </div>
</section>

const Team = () => <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                    Here are our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                </p>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                    <img
                        alt="..."
                        src={require('../public/sandy-millar-8vaQKYnawHw-unsplash.jpg').src}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                    />
                    <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Ryan Tompson
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Web Developer
                        </p>
                        <div className="mt-6">
                            <button
                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button
                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-dribbble"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                    <img
                        alt="..."
                        src={require('../public/sandy-millar-8vaQKYnawHw-unsplash.jpg').src}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                    />
                    <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Romina Hadid
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Marketing Specialist
                        </p>
                        <div className="mt-6">
                            <button
                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-google"></i>
                            </button>
                            <button
                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                    <img
                        alt="..."
                        src={require('../public/sandy-millar-8vaQKYnawHw-unsplash.jpg').src}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                    />
                    <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Alexa Smith
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            UI/UX Designer
                        </p>
                        <div className="mt-6">
                            <button
                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-google"></i>
                            </button>
                            <button
                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-instagram"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                    <img
                        alt="..."
                        src={require('../public/sandy-millar-8vaQKYnawHw-unsplash.jpg').src}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                    />
                    <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                            Jenna Kardi
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                            Founder and CEO
                        </p>
                        <div className="mt-6">
                            <button
                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button
                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-google"></i>
                            </button>
                            <button
                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                <i className="fab fa-instagram"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

const Finisher = () => <section className="pb-20 relative block bg-gray-900">
    <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
    >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
    </div>

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                    Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                    Put the potentially record low maximum sea ice extent tihs year down to low ice.
                    According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
            </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                    Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                    Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                    Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
            </div>
        </div>
    </div>
</section>

const Contact = () => <section className="relative block py-24 lg:pt-0 bg-gray-900">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                    <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">
                            Want to work with us?
                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                            Complete this form and we will get back to you in 24 hours.
                        </p>
                        <div className="relative w-full mb-3 mt-8">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Full Name"
                                style={{ transition: "all .15s ease" }}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Email"
                                style={{ transition: "all .15s ease" }}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                rows={4}
                                cols={80}
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Type a message..."
                            />
                        </div>
                        <div className="text-center mt-6">
                            <button
                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

