import { Link } from "react-router-dom";
import SublistItem from "../../components/SublistItem";

function SubList({sublist}) {
  return sublist
    .map((category, i_key) => 
      <Link to="/collaborators" key={i_key}>
        <SublistItem item={category} />
      </Link>
      )
  }

export default SubList;