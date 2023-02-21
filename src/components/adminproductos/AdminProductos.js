import React from "react";
// import logo from "./logo.svg";
import "./AdminProductos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, personaje: "", anime: "Playera", },
  // { id: 2, personaje: "Goku", anime: "Dragon Ball" },
  // { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
  // { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
  // { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
  // { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

class AdminProductos extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      personaje: "",
      anime: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <div className="parent-admin">
            <Container>
            <h2 font-family="coolvetica">Productos en línea</h2>
            <br />
            <Button className="botonAgregar" onClick={()=>this.mostrarModalInsertar()}>Agregar producto</Button>
            <br />
            <br />
            <div className="containerTable">
              <Table className="productosCrud">
                  <thead>
                  <tr>
                      <th>ID</th>
                      <th>Imagen</th>
                      <th>Descripción</th>
                      <th>Color</th>
                      <th>Talla</th>
                      <th>Cantidad</th>
                      <th colSpan={2}>Operaciones</th>
                  </tr>
                  </thead>

                  <tbody>
                  {this.state.data.map((dato) => (
                      <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.personaje}</td>
                      <td>{dato.anime}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                          <Button
                            className="botonAction"
                            onClick={() => this.mostrarModalActualizar(dato)}>
                            <FontAwesomeIcon icon={faEdit}/>
                          </Button>{" "}
                          <Button 
                            className="botonAction"
                            onClick={()=> this.eliminar(dato)}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                          </Button>
                      </td>
                      </tr>
                  ))}
                  </tbody>
              </Table>
            </div>
            </Container>

            <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
            <div><h3>Editar Registro</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                  <label> Imagen: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label> Descripción: </label>
                  <input
                      className="form-control"
                      name="personaje"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.form.personaje}
                  />
                </FormGroup>
                
                <FormGroup>
                <label>Color: </label>
                <input
                    className="form-control"
                    name="anime"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.anime}
                />
                </FormGroup>

                <FormGroup>
                  <label> Talla: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>

                <FormGroup>
                  <label> Cantidad: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button
                className="botonAction"
                onClick={() => this.editar(this.state.form)}
                >
                Editar
                </Button>
                <Button
                className="botonAction"
                onClick={() => this.cerrarModalActualizar()}
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>



            <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
            <div><h3>Insertar Personaje</h3></div>
            </ModalHeader>

            <ModalBody>
            <FormGroup>
                  <label> Imagen: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label> Descripción: </label>
                  <input
                      className="form-control"
                      name="personaje"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.form.personaje}
                  />
                </FormGroup>
                
                <FormGroup>
                <label>Color: </label>
                <input
                    className="form-control"
                    name="anime"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.anime}
                />
                </FormGroup>

                <FormGroup>
                  <label> Talla: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>

                <FormGroup>
                  <label> Cantidad: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button
                className="botonAction"
                onClick={() => this.insertar()}
                >
                Insertar
                </Button>
                <Button
                className="botonAction"
                onClick={() => this.cerrarModalInsertar()}
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>
        </div>
      </>
    );
  }
}
export default AdminProductos;