import Card from '../Card/Card';
import './CardFlower.css';
import CardBack from '../../assets/card_back.svg'; 

const cardStyles = {
    width: '10vw',
}

const CardFlower = () => (
    <div className='card-flower'>
        <div className='one'>
            <Card img={CardBack} cardStyles={cardStyles} />
        </div>
        <div className='two'>
            <Card img={CardBack} cardStyles={cardStyles} />
        </div>
        <div className='three'>
            <Card img={CardBack} cardStyles={cardStyles} />
        </div>
        <div className='four'>
            <Card img={CardBack} cardStyles={cardStyles} />
        </div>
        <div className='five'>
            <Card img={CardBack} cardStyles={cardStyles} />
        </div>
        <div className='six'>
            <Card img={CardBack} cardStyles={cardStyles} />
        </div>
        <div className='seven'>
            <Card img={CardBack} cardStyles={cardStyles} />
        </div>
    </div>
)

export default CardFlower;