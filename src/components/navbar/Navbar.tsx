import { Link } from "react-router-dom"

function Navbar() {

    

    return (
        <>
            <div className='w-full flex justify-center py-6
            	bg-[#FEA245] text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold mx-8">Farmacia</Link>

                    <div className='flex gap-7 mx-8'>
                    <Link to='/' className="houver:underline">Home</Link>
                        Produtos
                    <Link to='/categorias' className='hover:underline'>Listar Categorias</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar