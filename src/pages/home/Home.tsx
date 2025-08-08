
function Home() {
    return (
        <>
            <div className="bg-[#78290F] flex justify-center ">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 ">
                        <h2 className='text-5xl font-bold'>
                            FarmaGen
                        </h2>
                        <p className='text-xl'>
                            Se até o deploy precisa de saúde, imagina você.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded-full text-white 
                                            border-white border-solid border-2 py-3 px-6'
                                >
                                Produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/dx8zsh14om/LogoFarmaGen.png?updatedAt=1754623630483"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home