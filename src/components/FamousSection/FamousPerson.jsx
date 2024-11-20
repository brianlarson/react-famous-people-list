function FamousPerson(props) {
  return(
    <p>
      {props.famousPersonName} is famous for "{props.famousPersonRole}".
    </p>
  );
}

export default FamousPerson;