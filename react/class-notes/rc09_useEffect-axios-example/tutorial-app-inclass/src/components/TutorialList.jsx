import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = () => {
  const tutorials = [
    { id: 1, Title: "JS", Description: "JS is a programming Language" },
    { id: 2, Title: "React", Description: "JS library for UI design" },
  ];

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>

        <tbody>
          {tutorials.map((item)=> {
            const {id, Title, Description} = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{Title}</td>
                <td>{Description}</td>
                <td>
                  <FaEdit size={20} type="button" className="text-danger" />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger"
                  />
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
