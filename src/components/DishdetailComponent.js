import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

function renderDish(dish) {
  if (dish != null) {
    console.log(dish);
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function renderComments(dish) {
  if (dish != null) {
    const feedback = dish.comments.map((comment) => (
      <ul class="list-unstyled">
        <li>{comment.content}</li>
        <li>
          {comment.author}, {comment.date}
        </li>
      </ul>
    ));
    return (
      <div>
        <h4>Comments</h4>
        {feedback}
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(props.dish)}</div>
      <div className="col-12 col-md-5 m-1">{renderComments(props.dish)}</div>
    </div>
  );
};

export default Dishdetail;
