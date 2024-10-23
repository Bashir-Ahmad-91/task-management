import bannerImg from '../../assets/images/mybanner.png'
import Container from '../../components/Container'

function Banner() {
  return (
    <Container>
    <div className='sm:grid sm:grid-cols-2 mt-12 items-center'>
        <div >
            <h1 className='sm:text-4xl text-3xl font-bold text-red-600 mb-5'>Task  Management</h1>
            <p className='sm:text-lg text-sm dark:text-gray-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div className='sm:mx-auto sm:block hidden'>
        <img className='w-2/4 mx-auto dark:brightness-50' src={bannerImg} alt="Image" />
        </div>
    </div>

    </Container>
  )
}

export default Banner