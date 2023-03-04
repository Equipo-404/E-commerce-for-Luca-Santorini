import React from "react";
import "./AdminProductos.css";
import { data } from "./Productos";
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

class AdminProductos extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      img: "",
      description: "",
      color: "",
      options: "",
      cantidad: "",
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
        arreglo[contador].img = dato.img;
        arreglo[contador].description = dato.description;
        arreglo[contador].color = dato.color;
        arreglo[contador].options = dato.options;
        arreglo[contador].cantidad = dato.cantidad;
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
                      <th>img</th>
                      <th>Descripción</th>
                      <th>Color</th>
                      <th>options</th>
                      <th>Cantidad</th>
                      <th colSpan={2}>Operaciones</th>
                  </tr>
                  </thead>

                  <tbody>
                  {this.state.data.map((dato) => (
                      <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td><img className="img-table-products" src={dato.img}></img></td>
                      <td>{dato.description}</td>
                      <td>{dato.color}</td>
                      <td>{dato.options}</td>
                      <td>{dato.cantidad}</td>
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
                  <label> img: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="file"
                    onChange={this.handleImage}
                    value={this.state.form.img}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <label> Descripción: </label>
                  <input
                    className="form-control"
                    name="description"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.description}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                <label>Color: </label>
                <input
                    className="form-control"
                    name="color"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.color}
                    required
                />
                </FormGroup>

                <FormGroup>
                  <label> options: </label>
                  <input
                    className="form-control"
                    name="options"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.options}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label> Cantidad: </label>
                  <input
                    className="form-control"
                    name="cantidad"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.cantidad}
                    required
                  />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button
                className="botonAction"
                onClick={() => this.editar(this.state.form)}
                >
                Guardar cambios
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
            <div><h3>Agregar producto</h3></div>
            </ModalHeader>

            <ModalBody>
            <FormGroup>
                  <label> img: </label>
                  <input
                    className="form-control"
                    readOnly
                    type="file"
                    onChange={this.handleChange}
                    value={this.state.form.img}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <label> Descripción: </label>
                  <input
                    className="form-control"
                    name="description"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.description}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                <label>Color: </label>
                <input
                    className="form-control"
                    name="color"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.color}
                    required
                />
                </FormGroup>

                <FormGroup>
                  <label> options: </label>
                  <input
                    className="form-control"
                    name="options"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.options}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label> Cantidad: </label>
                  <input
                    className="form-control"
                    name="cantidad"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.cantidad}
                    required
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