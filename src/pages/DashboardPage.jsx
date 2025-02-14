import ProductsList from '../components/ProductsList';

export default function DashboardPage({funkos,handleDelete}) {

    return (
        <div className="ProductsList">
            <h1>Funko Pop!</h1>

            <ul>
                {funkos.map(funko => (
                    <ProductsList key={funko.id} funko={funko} handleDelete={handleDelete} />
                ))}
            </ul>


        </div>
    );
}