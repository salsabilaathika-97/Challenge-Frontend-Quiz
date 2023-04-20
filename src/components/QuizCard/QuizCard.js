import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {getData} from '../../redux/actions/dataAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

const QuizCard = () => {
    const dispatch = useDispatch();
    const {quizData} = useSelector((state) => state);
    
    useEffect(() => {
        dispatch(getData())
    },[]);

    return (
        <div>
            {
                quizData.data.map(item => (
                    <CardGroup>
                    <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>
                                Quiz
                            </Card.Title>
                            <Card.Text>
                                {item.question}
                            </Card.Text>
                           <Button variant="success">True</Button>
                           <div style={{width:10, display: 'inline-block'}}></div>
                           <Button variant="danger">False</Button>
                           <div style={{width:10, display: 'inline-block'}}></div>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                ))
            }
        </div>
        
    )
}

export default QuizCard;